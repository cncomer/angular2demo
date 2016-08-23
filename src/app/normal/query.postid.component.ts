/**
 * Created by bestjoy on 16/8/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ServiceConfig} from '../ems.service.config';
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

    constructor(private titleService: Title, private router: Router) {
        console.log('NormalQueryPostIdComponent constructor');
        this.setTitle('邮政速递物流');
    }


    ngOnInit():void {
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
        //console.log("scan " + window.location.href);
        console.log('scan reset localStorage.normalScanResultCode '+ this.postId);
        window.localStorage.setItem('normalScanResultCode', '');
        let serviceConfig = new ServiceConfig();
        window.location.href = encodeURI('http://www.dzbxk.com/maxcosi/commonscan.html?target=' + serviceConfig.normalEmsServiceUrl + '/?action=scan');
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

        let link = ['/', postId];
        console.log('onQuery postId=' + postId);
        this.router.navigate(link)
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