var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by bestjoy on 16/8/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var ems_service_config_1 = require('../ems.service.config');
//import '../../assets/js/jweixin-1.0.0';
var query_service_1 = require("./query.service");
var wx;
//let templateHtml = require('./query.postid.component.html');
//let templateCss = require('./query.postid.component.css');
var NormalQueryPostIdComponent = (function () {
    function NormalQueryPostIdComponent(titleService, router, elementRef, normalExpressQueryService) {
        this.titleService = titleService;
        this.router = router;
        this.elementRef = elementRef;
        this.normalExpressQueryService = normalExpressQueryService;
        this.title = '邮政速递物流';
        this.postId = '';
        console.log('NormalQueryPostIdComponent constructor');
        this.setTitle('邮政速递物流');
    }
    NormalQueryPostIdComponent.prototype.ngOnInit = function () {
        var imgElement = this.elementRef.nativeElement.querySelector('img');
        console.log('NormalQueryPostIdComponent ngOnInit imgElement=' + imgElement);
        var url = decodeURI(window.location.href);
        console.log('NormalQueryPostIdComponent ngOnInit ' + url);
        var params = this.getUrlParamsObject(url);
        if (params && params.action && params.action == 'scan') {
            if (params.code) {
                this.postId = params.code;
                var lastCode = window.localStorage.getItem('normalScanResultCode');
                if (lastCode !== params.code) {
                    console.log('ngOnInit localStorage.normalScanResultCode setItem ' + params.code);
                    window.localStorage.setItem('normalScanResultCode', params.code);
                    this.onQuery();
                }
            }
            else {
                console.log('ngOnInit scan return code ' + params.code);
            }
        }
    };
    NormalQueryPostIdComponent.prototype.scan = function () {
        if (true) {
            this.scanNative();
            return;
        }
        //console.log("scan " + window.location.href);
        console.log('scan reset localStorage.normalScanResultCode ' + this.postId);
        window.localStorage.setItem('normalScanResultCode', '');
        var serviceConfig = new ems_service_config_1.ServiceConfig();
        window.location.href = encodeURI('http://www.dzbxk.com/maxcosi/commonscan.html?target=' + serviceConfig.normalEmsServiceUrl + '/?action=scan');
    };
    NormalQueryPostIdComponent.prototype.scanNative = function () {
        var prepairUrl = "http://www.dzbxk.com/maxcosi/GetSingnature.ashx";
        this.normalExpressQueryService.get(prepairUrl, 'curl=emsnormal').then(function (data) {
            wx.config({
                debug: false,
                appId: 'wx486f4ced13474382',
                timestamp: data.timestamp,
                nonceStr: data.noncestr,
                signature: data.sign,
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
                window.wx.scanQRCode({
                    needResult: 1,
                    scanType: ["qrCode", "barCode"],
                    success: function (res) {
                        console.log('scan return resultStr ' + res.resultStr);
                        if (res.resultStr.indexOf(",") != -1) {
                            var code = (res.resultStr + "").split(",")[1];
                            console.log('scan return Code ' + code);
                        }
                        else {
                            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                            console.log('scan return result ' + result);
                        }
                    }
                });
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            });
        });
    };
    NormalQueryPostIdComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    NormalQueryPostIdComponent.prototype.onQuery = function () {
        var postId = this.postId.trim();
        if (postId.length == 0) {
            alert('请输入运单号');
            return;
        }
        var link = ['/query', postId];
        console.log('onQuery postId=' + postId);
        this.router.navigateByUrl('/query/' + postId);
    };
    NormalQueryPostIdComponent.prototype.getUrlParams = function (url) {
        var index = url.indexOf('?');
        console.log(index);
        if (index != -1) {
            return url.substring(index + 1);
        }
        else {
            return '';
        }
    };
    NormalQueryPostIdComponent.prototype.getUrlParamsObject = function (url) {
        var paramAndValuePairs = this.getUrlParams(url);
        if (paramAndValuePairs == '') {
            return { action: 'no', code: '' };
        }
        var end = paramAndValuePairs.indexOf('#');
        if (end > 0) {
            paramAndValuePairs = paramAndValuePairs.substring(0, end);
        }
        var resultValue = {};
        var array = paramAndValuePairs.split('&');
        var len = array.length;
        for (var index = 0; index < len; index++) {
            var pair = array[index].split('=');
            resultValue[pair[0]] = pair[1];
        }
        return resultValue;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NormalQueryPostIdComponent.prototype, "postId");
    NormalQueryPostIdComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'my-postid-query',
            templateUrl: './query.postid.component.html',
            styleUrls: ['./query.postid.component.css'],
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, router_1.Router, core_1.ElementRef, query_service_1.NormalExpressQueryService])
    ], NormalQueryPostIdComponent);
    return NormalQueryPostIdComponent;
})();
exports.NormalQueryPostIdComponent = NormalQueryPostIdComponent;
//# sourceMappingURL=query.postid.component.js.map