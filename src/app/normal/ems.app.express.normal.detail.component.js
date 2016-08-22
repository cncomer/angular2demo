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
var query_service_1 = require("./query.service");
var ems_normal_expressobject_1 = require("./ems.normal.expressobject");
var router_1 = require("@angular/router");
var EmsNormalExpressComponent = (function () {
    function EmsNormalExpressComponent(normalExpressQueryService, router, route) {
        this.normalExpressQueryService = normalExpressQueryService;
        this.router = router;
        this.route = route;
        this.title = "邮件详情";
        this.loadText = "正在查询,请稍后...";
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
        console.log("EmsNormalExpressComponent ngOnInit");
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
        //window.history.back();
        this.router.navigate(['']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1zLmFwcC5leHByZXNzLm5vcm1hbC5kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1zLmFwcC5leHByZXNzLm5vcm1hbC5kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkVtc05vcm1hbEV4cHJlc3NDb21wb25lbnQiLCJFbXNOb3JtYWxFeHByZXNzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRW1zTm9ybWFsRXhwcmVzc0NvbXBvbmVudC5uZ09uSW5pdCIsIkVtc05vcm1hbEV4cHJlc3NDb21wb25lbnQuZ2V0U3RhdGUiLCJFbXNOb3JtYWxFeHByZXNzQ29tcG9uZW50LmdldFByb2dyZXNzQ29udGV4dCIsIkVtc05vcm1hbEV4cHJlc3NDb21wb25lbnQuZ29CYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsOEJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFDMUQseUNBQXFFLDRCQUE0QixDQUFDLENBQUE7QUFDbEcsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFHL0Q7SUFlSUEsbUNBQ1lBLHlCQUFvREEsRUFDcERBLE1BQWNBLEVBQ2RBLEtBQXFCQTtRQUZyQkMsOEJBQXlCQSxHQUF6QkEseUJBQXlCQSxDQUEyQkE7UUFDcERBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO1FBQ2RBLFVBQUtBLEdBQUxBLEtBQUtBLENBQWdCQTtRQVJqQ0EsVUFBS0EsR0FBV0EsTUFBTUEsQ0FBQ0E7UUFDdkJBLGFBQVFBLEdBQVdBLGFBQWFBLENBQUNBO1FBRWpDQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUtXQSxDQUFDQTtJQUV0Q0QsNENBQVFBLEdBQVJBO1FBQUFFLGlCQTBCQ0E7UUF6QkdBLGtEQUFrREE7UUFDbERBLHVDQUF1Q0E7UUFDdkNBLDJEQUEyREE7UUFDM0RBLFFBQVFBO1FBQ1JBLGNBQWNBO1FBQ2RBLFNBQVNBO1FBQ1RBLEtBQUtBO1FBQ0xBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG9DQUFvQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbERBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLE1BQWNBO1lBQ3JDQSxJQUFJQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0QkEsS0FBSUEsQ0FBQ0EseUJBQXlCQSxDQUFDQSx5QkFBeUJBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQzdEQSxVQUFBQSxzQkFBc0JBO2dCQUNsQkEsS0FBSUEsQ0FBQ0Esc0JBQXNCQSxHQUFHQSxzQkFBc0JBLENBQUNBO2dCQUNyREEsS0FBSUEsQ0FBQ0EsNEJBQTRCQSxHQUFHQSxzQkFBc0JBLENBQUNBLElBQUlBLENBQUNBO2dCQUNoRUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esb0JBQW9CQSxHQUFHQSxLQUFJQSxDQUFDQSw0QkFBNEJBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2pGQSxDQUFDQSxFQUNEQSxVQUFBQSxLQUFLQTtnQkFDREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxJQUFJQSxZQUFZQSxHQUFRQSxLQUFLQSxDQUFDQTtnQkFDOUJBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFlBQVlBLENBQUNBO2dCQUM3QkEsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtZQUVsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFTUYsNENBQVFBLEdBQWZBO1FBQ0lHLE1BQU1BLENBQUNBLHlEQUE4QkEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUM3RUEsQ0FBQ0E7SUFFTUgsc0RBQWtCQSxHQUF6QkEsVUFBMEJBLE9BQWVBO1FBQ3JDSSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFREosMENBQU1BLEdBQU5BO1FBQ0dLLHdCQUF3QkE7UUFDdkJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQy9CQSxDQUFDQTtJQXBEREw7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQ1JBLDZEQUFzQkEsRUFBeUJBO0lBUm5EQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsc0JBQXNCQTtZQUN0QkEsUUFBUUEsRUFBRUEsdUJBQXVCQTtZQUNqQ0EsV0FBV0EsRUFBRUEsK0NBQStDQTtZQUM1REEsU0FBU0EsRUFBQ0EsQ0FBQ0EsOENBQThDQSxDQUFDQTtTQUM3REEsQ0FBQ0E7O2tDQXdEREE7SUFBREEsZ0NBQUNBO0FBQURBLENBQUNBLEFBN0RELElBNkRDO0FBdkRZLGlDQUF5Qiw0QkF1RHJDLENBQUEifQ==