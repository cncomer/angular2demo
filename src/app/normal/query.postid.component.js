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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucG9zdGlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJ5LnBvc3RpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTm9ybWFsUXVlcnlQb3N0SWRDb21wb25lbnQiLCJOb3JtYWxRdWVyeVBvc3RJZENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk5vcm1hbFF1ZXJ5UG9zdElkQ29tcG9uZW50Lm5nT25Jbml0IiwiTm9ybWFsUXVlcnlQb3N0SWRDb21wb25lbnQuc2NhbiIsIk5vcm1hbFF1ZXJ5UG9zdElkQ29tcG9uZW50LnNldFRpdGxlIiwiTm9ybWFsUXVlcnlQb3N0SWRDb21wb25lbnQub25RdWVyeSIsIk5vcm1hbFF1ZXJ5UG9zdElkQ29tcG9uZW50LmdldFVybFBhcmFtcyIsIk5vcm1hbFF1ZXJ5UG9zdElkQ29tcG9uZW50LmdldFVybFBhcmFtc09iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxpQ0FBb0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNoRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxtQ0FBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRCw4REFBOEQ7QUFDOUQsNERBQTREO0FBQzVEO0lBV0lBLG9DQUFvQkEsWUFBbUJBLEVBQVVBLE1BQWNBO1FBQTNDQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBT0E7UUFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7UUFKL0RBLFVBQUtBLEdBQUdBLFFBQVFBLENBQUNBO1FBRVJBLFdBQU1BLEdBQVdBLEVBQUVBLENBQUNBO1FBR3pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx3Q0FBd0NBLENBQUNBLENBQUNBO1FBQ3REQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFHREQsNkNBQVFBLEdBQVJBO1FBQ0lFLElB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