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
require('../assets/css/styles.css');
var EmsAppComponent = (function () {
    function EmsAppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Tour of Heroes';
        this.setTitle("邮政速递物流");
    }
    EmsAppComponent.prototype.ngOnInit = function () {
        console.log("EmsAppComponent ngOnInit");
    };
    EmsAppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    EmsAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n       <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], EmsAppComponent);
    return EmsAppComponent;
})();
exports.EmsAppComponent = EmsAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1zLmFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbXMuYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJFbXNBcHBDb21wb25lbnQiLCJFbXNBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJFbXNBcHBDb21wb25lbnQubmdPbkluaXQiLCJFbXNBcHBDb21wb25lbnQuc2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGlDQUFvQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hELFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUVsQztJQVFJQSx5QkFBb0JBLFlBQW1CQTtRQUFuQkMsaUJBQVlBLEdBQVpBLFlBQVlBLENBQU9BO1FBRHZDQSxVQUFLQSxHQUFHQSxnQkFBZ0JBLENBQUNBO1FBRXJCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFFREQsa0NBQVFBLEdBQVJBO1FBQ0lFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7SUFDNUNBLENBQUNBO0lBRU1GLGtDQUFRQSxHQUFmQSxVQUFpQkEsUUFBZ0JBO1FBQzdCRyxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFFQSxRQUFRQSxDQUFFQSxDQUFDQTtJQUMzQ0EsQ0FBQ0E7SUFsQkxIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsUUFBUUEsRUFBRUEsOENBRVhBO1NBQ0ZBLENBQUNBOzt3QkFnQkRBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQXJCRCxJQXFCQztBQWZZLHVCQUFlLGtCQWUzQixDQUFBIn0=