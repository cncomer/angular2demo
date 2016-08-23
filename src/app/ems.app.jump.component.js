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
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
//import {getUrlParamsObject} from './app.utils';
var router_1 = require("@angular/router");
var EmsAppJumpComponent = (function () {
    function EmsAppJumpComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.setTitle("邮政速递物流");
    }
    EmsAppJumpComponent.prototype.ngOnInit = function () {
        console.log("EmsAppJumpComponent ngOnInit " + window.location.href);
        var params = this.getUrlParamsObject(window.location.href);
        if (!params.target) {
            params.target = 'normal';
        }
        if (params.target == 'normal') {
            if (params.action && params.action == 'scan') {
                this.navigate('normal/' + params.code);
            }
            else {
                this.navigate('normal');
            }
        }
        else if (params.target == 'tao') {
            if (params.action && params.action == 'scan') {
                this.navigate('tao/' + params.code);
            }
            else {
                this.navigate('tao');
            }
        }
    };
    EmsAppJumpComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    EmsAppJumpComponent.prototype.navigate = function (path) {
        var link = [path];
        console.log("navigate link=" + link);
        this.router.navigate(link);
    };
    EmsAppJumpComponent.prototype.getUrlParams = function (url) {
        var index = url.indexOf('?');
        console.log(index);
        if (index != -1) {
            return url.substring('?'.length);
        }
        else {
            return "";
        }
    };
    EmsAppJumpComponent.prototype.getUrlParamsObject = function (url) {
        var paramAndValuePairs = this.getUrlParams(url);
        var resultValue = {};
        var array = paramAndValuePairs.split("&");
        var len = array.length;
        for (var index = 0; index < len; index++) {
            var pair = array[index].split("=");
            resultValue[pair[0]] = pair[1];
        }
        return resultValue;
    };
    EmsAppJumpComponent = __decorate([
        core_1.Component({
            template: '<div></div>'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, router_1.Router])
    ], EmsAppJumpComponent);
    return EmsAppJumpComponent;
})();
exports.EmsAppJumpComponent = EmsAppJumpComponent;
//# sourceMappingURL=ems.app.jump.component.js.map