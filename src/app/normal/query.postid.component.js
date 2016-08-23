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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ems_service_config_1 = require("../ems.service.config");
//let templateHtml = require('./query.postid.component.html');
//let templateCss = require('./query.postid.component.css');
var NormalQueryPostIdComponent = (function () {
    function NormalQueryPostIdComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.title = '邮政速递物流';
        this.postId = "";
        console.log("NormalQueryPostIdComponent constructor");
        this.setTitle("邮政速递物流");
    }
    NormalQueryPostIdComponent.prototype.ngOnInit = function () {
        var url = decodeURI(window.location.href);
        console.log("NormalQueryPostIdComponent ngOnInit " + url);
        var params = this.getUrlParamsObject(url);
        if (params && params.action && params.action == 'scan') {
            if (params.code) {
                this.postId = params.code;
                var lastCode = window.localStorage.getItem('normalScanResultCode');
                if (lastCode !== params.code) {
                    console.log("ngOnInit localStorage.normalScanResultCode setItem " + params.code);
                    window.localStorage.setItem('normalScanResultCode', params.code);
                    this.onQuery();
                }
            }
            else {
                console.log("ngOnInit scan return code " + params.code);
            }
        }
    };
    NormalQueryPostIdComponent.prototype.scan = function () {
        //console.log("scan " + window.location.href);
        console.log("scan reset localStorage.normalScanResultCode " + this.postId);
        window.localStorage.setItem('normalScanResultCode', '');
        var serviceConfig = new ems_service_config_1.ServiceConfig();
        window.location.href = encodeURI('http://www.dzbxk.com/maxcosi/commonscan.html?target=' + serviceConfig.normalEmsServiceUrl + '/?action=scan');
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
        var link = ['/', postId];
        console.log("onQuery postId=" + postId);
        this.router.navigate(link);
    };
    NormalQueryPostIdComponent.prototype.getUrlParams = function (url) {
        var index = url.indexOf('?');
        console.log(index);
        if (index != -1) {
            return url.substring(index + 1);
        }
        else {
            return "";
        }
    };
    NormalQueryPostIdComponent.prototype.getUrlParamsObject = function (url) {
        var paramAndValuePairs = this.getUrlParams(url);
        if (paramAndValuePairs == '') {
            return { action: 'no', code: '' };
        }
        var resultValue = {};
        var array = paramAndValuePairs.split("&");
        var len = array.length;
        for (var index = 0; index < len; index++) {
            var pair = array[index].split("=");
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
        __metadata('design:paramtypes', [platform_browser_1.Title, router_1.Router])
    ], NormalQueryPostIdComponent);
    return NormalQueryPostIdComponent;
})();
exports.NormalQueryPostIdComponent = NormalQueryPostIdComponent;
//# sourceMappingURL=query.postid.component.js.map