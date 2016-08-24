/**
 *
 * 普通快递详情界面
 * Created by bestjoy on 16/8/16.
 */
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
var query_service_1 = require('./query.service');
var ems_normal_expressobject_1 = require('./ems.normal.expressobject');
var router_1 = require('@angular/router');
var EmsNormalExpressComponent = (function () {
    function EmsNormalExpressComponent(normalExpressQueryService, router, route) {
        this.normalExpressQueryService = normalExpressQueryService;
        this.router = router;
        this.route = route;
        this.title = '邮件详情';
        this.loadText = '正在查询,请稍后...';
        this.fromHome = false;
    }
    EmsNormalExpressComponent.prototype.ngOnInit = function () {
        var _this = this;
        //window.addEventListener("popstate", function() {
        //    var currentState = history.state;
        //    console.log("popstate currentState " + currentState);
        //    /*
        //     * 该干嘛干嘛
        //     */
        //});
        console.log('EmsNormalExpressComponent ngOnInit');
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.normalExpressQueryService.getEmsNormalExpressObject(id).then(function (emsNormalExpressObject) {
                _this.emsNormalExpressObject = emsNormalExpressObject;
                _this.emsNormalExpressProgressList = emsNormalExpressObject.data;
                console.log('get progress size ' + _this.emsNormalExpressProgressList.length);
            }, function (error) {
                console.log('error');
                var errorMessage = error;
                _this.loadText = errorMessage;
                alert(errorMessage);
                _this.goBack();
            });
        });
    };
    EmsNormalExpressComponent.prototype.getState = function () {
        return ems_normal_expressobject_1.EmsNormalExpressStateDescArray[this.emsNormalExpressObject.state];
    };
    EmsNormalExpressComponent.prototype.getProgressContext = function (context) {
        return context;
    };
    EmsNormalExpressComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/query');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ems_normal_expressobject_1.EmsNormalExpressObject)
    ], EmsNormalExpressComponent.prototype, "emsNormalExpressObject");
    EmsNormalExpressComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'normal-express-detail',
            templateUrl: './ems.app.express.normal.detail.template.html',
            styleUrls: ['./ems.app.express.normal.detail.template.css'],
        }), 
        __metadata('design:paramtypes', [query_service_1.NormalExpressQueryService, router_1.Router, router_1.ActivatedRoute])
    ], EmsNormalExpressComponent);
    return EmsNormalExpressComponent;
})();
exports.EmsNormalExpressComponent = EmsNormalExpressComponent;
//# sourceMappingURL=ems.app.express.normal.detail.component.js.map