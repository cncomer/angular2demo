/**
 * Created by bestjoy on 16/8/16.
 */
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ServiceConfig} from '../ems.service.config';

//import '../../assets/js/jweixin-1.0.0.js';
import {NormalExpressQueryService} from "./query.service";
declare var wx: any;
//let templateHtml = require('./query.postid.component.html');
//let templateCss = require('./query.postid.component.css');
@Component({
    //moduleId: module.id,
    selector: 'my-postid-query',
    templateUrl: './query.postid.component.html',
    styleUrls: ['./query.postid.component.css'],
})
export class NormalQueryPostIdComponent implements OnInit{
    title = '邮政速递物流';

    @Input() postId: string = '';

    constructor(
        private titleService: Title,
        private router: Router,
        private elementRef: ElementRef,
        private normalExpressQueryService: NormalExpressQueryService) {
        console.log('NormalQueryPostIdComponent constructor');
        this.setTitle('邮政速递物流');
    }


    ngOnInit():void {
        let imgElement = this.elementRef.nativeElement.querySelector('img');
        console.log('NormalQueryPostIdComponent ngOnInit imgElement=' + imgElement);
        let url: string = decodeURI(window.location.href);
        console.log('NormalQueryPostIdComponent ngOnInit ' + url);
        let params: {action?: string, code?: string} = this.getUrlParamsObject(url);
        if (params && params.action && params.action == 'scan') {
            if (params.code) {
                this.postId = params.code;
                let lastCode: string = window.localStorage.getItem('normalScanResultCode');
                if (lastCode !== params.code) {
                    console.log('ngOnInit localStorage.normalScanResultCode setItem '+ params.code);
                    window.localStorage.setItem('normalScanResultCode', params.code);
                    this.onQuery();
                }
            } else {
                console.log('ngOnInit scan return code '+ params.code);
            }
        }

    }

    public scan(): void {
        if (true) {
            this.scanNative();
            return;

        }
        //console.log("scan " + window.location.href);
        console.log('scan reset localStorage.normalScanResultCode '+ this.postId);
        window.localStorage.setItem('normalScanResultCode', '');
        let serviceConfig = new ServiceConfig();
        window.location.href = encodeURI('http://www.dzbxk.com/maxcosi/commonscan.html?target=' + serviceConfig.normalEmsServiceUrl + '/?action=scan');
    }

    public scanNative(): void {
        let prepairUrl: string = "http://www.dzbxk.com/maxcosi/GetSingnature.ashx";
        this.normalExpressQueryService.get(prepairUrl, 'curl=emsnormal').then(function(data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wx486f4ced13474382', // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.noncestr, // 必填，生成签名的随机串
                signature: data.sign,// 必填，签名，见附录1
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(function () {
                wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function (res) {
                        console.log('scan return resultStr '+ res.resultStr);
                        if (res.resultStr.indexOf(",") != -1)  {
                            let code: string = (res.resultStr + "").split(",")[1];
                            console.log('scan return Code '+ code);
                        } else {
                            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                            console.log('scan return result '+ result);
                        }

                    }
                });
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            });
        },
            error =>  {
                console.log('error');
                let errorMessage = <any>error;
                alert(errorMessage);

            });
    }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    public onQuery() {
        let postId = this.postId.trim();
        if (postId.length == 0) {
            alert('请输入运单号');
            return;
        }

        let link = ['/query', postId];
        console.log('onQuery postId=' + postId);
        this.router.navigateByUrl('/query/' + postId);
    }

    getUrlParams(url: string) {
        let index: number = url.indexOf('?');
        console.log(index);
        if (index != -1) {
            return url.substring(index + 1);
        } else {
            return '';
        }
    }

    getUrlParamsObject(url: string): any {
        let paramAndValuePairs: string = this.getUrlParams(url);
        if (paramAndValuePairs == '') {
            return {action:'no', code:''};
        }
        let end: number = paramAndValuePairs.indexOf('#');
        if (end > 0) {
            paramAndValuePairs = paramAndValuePairs.substring(0, end);
        }

        let resultValue = {};
        let array: string[] = paramAndValuePairs.split('&');
        let len = array.length;
        for (let index = 0; index < len; index++) {
            let pair = array[index].split('=');
            resultValue[pair[0]] = pair[1];
        }
        return resultValue;
    }
}