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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1zLmFwcC5qdW1wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtcy5hcHAuanVtcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRW1zQXBwSnVtcENvbXBvbmVudCIsIkVtc0FwcEp1bXBDb21wb25lbnQuY29uc3RydWN0b3IiLCJFbXNBcHBKdW1wQ29tcG9uZW50Lm5nT25Jbml0IiwiRW1zQXBwSnVtcENvbXBvbmVudC5zZXRUaXRsZSIsIkVtc0FwcEp1bXBDb21wb25lbnQubmF2aWdhdGUiLCJFbXNBcHBKdW1wQ29tcG9uZW50LmdldFVybFBhcmFtcyIsIkVtc0FwcEp1bXBDb21wb25lbnQuZ2V0VXJsUGFyYW1zT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxpQ0FBb0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNoRCxpREFBaUQ7QUFDakQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkM7SUFJSUEsNkJBQW9CQSxZQUFtQkEsRUFBVUEsTUFBY0E7UUFBM0NDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFPQTtRQUFVQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtRQUMzREEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBRURELHNDQUFRQSxHQUFSQTtRQUNJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwrQkFBK0JBLEdBQUdBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBRXBFQSxJQUFJQSxNQUFNQSxHQUFxRUEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUU3SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxHQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN6Q0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQzVCQSxDQUFDQTtRQUVMQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxHQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0Q0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3pCQSxDQUFDQTtRQUNMQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVNRixzQ0FBUUEsR0FBZkEsVUFBaUJBLFFBQWdCQTtRQUM3QkcsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBRUEsUUFBUUEsQ0FBRUEsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRURILHNDQUFRQSxHQUFSQSxVQUFTQSxJQUFZQTtRQUNqQkksSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBRS9CQSxDQUFDQTtJQUVESiwwQ0FBWUEsR0FBWkEsVUFBYUEsR0FBV0E7UUFDcEJLLElBQUlBLEtBQUtBLEdBQVdBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3JDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1FBQ2RBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURMLGdEQUFrQkEsR0FBbEJBLFVBQW1CQSxHQUFXQTtRQUMxQk0sSUFBSUEsa0JBQWtCQSxHQUFXQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4REEsSUFBSUEsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDckJBLElBQUlBLEtBQUtBLEdBQWFBLGtCQUFrQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcERBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3ZCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxHQUFHQSxHQUFHQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN2Q0EsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFoRUxOO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFDQSxhQUFhQTtTQUN6QkEsQ0FBQ0E7OzRCQWdFREE7SUFBREEsMEJBQUNBO0FBQURBLENBQUNBLEFBbEVELElBa0VDO0FBL0RZLDJCQUFtQixzQkErRC9CLENBQUEifQ==