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
//let templateHtml = require('./top.toolbar.component.html');
//let templateCss = require('./top.toolbar.component.css');
var EmsToolBarComponent = (function () {
    function EmsToolBarComponent() {
        this.title = '邮政速递物流';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EmsToolBarComponent.prototype, "title");
    EmsToolBarComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'my-ems-toolbar',
            styleUrls: ['./top.toolbar.component.css'],
            templateUrl: './top.toolbar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmsToolBarComponent);
    return EmsToolBarComponent;
})();
exports.EmsToolBarComponent = EmsToolBarComponent;
//# sourceMappingURL=top.toolbar.component.js.map