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
//import '../../assets/css/styles.css';
var NormalQueryNavComponent = (function () {
    function NormalQueryNavComponent() {
    }
    NormalQueryNavComponent = __decorate([
        core_1.Component({
            selector: 'my-nav',
            template: "\n       <!--<nav>-->\n            <!--<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>-->\n            <!--<a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>-->\n       <!--</nav>-->\n       <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NormalQueryNavComponent);
    return NormalQueryNavComponent;
})();
exports.NormalQueryNavComponent = NormalQueryNavComponent;
//# sourceMappingURL=query.nav.component.js.map