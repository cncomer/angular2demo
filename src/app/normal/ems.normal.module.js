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
var query_routing_1 = require('./query.routing');
var query_nav_component_1 = require("./query.nav.component");
var query_postid_component_1 = require("./query.postid.component");
var forms_1 = require('@angular/forms');
var ems_app_express_normal_detail_component_1 = require("./ems.app.express.normal.detail.component");
var query_service_1 = require("./query.service");
var common_1 = require('@angular/common');
var top_toolbar_component_1 = require("../top.toolbar.component");
var EmsNormalQueryModule = (function () {
    function EmsNormalQueryModule() {
    }
    EmsNormalQueryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                query_routing_1.normalQueryRouting,
            ],
            declarations: [
                top_toolbar_component_1.EmsToolBarComponent,
                query_nav_component_1.NormalQueryNavComponent,
                query_postid_component_1.NormalQueryPostIdComponent,
                ems_app_express_normal_detail_component_1.EmsNormalExpressComponent,
            ],
            providers: [
                query_service_1.NormalExpressQueryService,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], EmsNormalQueryModule);
    return EmsNormalQueryModule;
})();
exports.EmsNormalQueryModule = EmsNormalQueryModule;
//# sourceMappingURL=ems.normal.module.js.map