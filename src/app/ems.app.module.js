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
 * Created by bestjoy on 16/8/12.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var platform_browser_2 = require("@angular/platform-browser");
var ems_app_routing_1 = require('./ems.app.routing');
var ems_normal_module_1 = require("./normal/ems.normal.module");
var ems_app_component_1 = require("./ems.app.component");
var ems_app_jump_component_1 = require("./ems.app.jump.component");
var EmsAppModule = (function () {
    function EmsAppModule() {
    }
    EmsAppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                // Forms
                forms_1.FormsModule,
                ems_app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule,
                ems_normal_module_1.EmsNormalQueryModule,
            ],
            declarations: [
                ems_app_component_1.EmsAppComponent,
                ems_app_jump_component_1.EmsAppJumpComponent,
            ],
            providers: [
                platform_browser_2.Title,
            ],
            bootstrap: [ems_app_component_1.EmsAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], EmsAppModule);
    return EmsAppModule;
})();
exports.EmsAppModule = EmsAppModule;
//# sourceMappingURL=ems.app.module.js.map