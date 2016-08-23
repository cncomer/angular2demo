/**
 * Created by bestjoy on 16/8/16.
 */
var router_1 = require('@angular/router');
var query_nav_component_1 = require("./query.nav.component");
var query_postid_component_1 = require("./query.postid.component");
var ems_app_express_normal_detail_component_1 = require("./ems.app.express.normal.detail.component");
var normalQueryRoutes = [
    //{
    //    path: '',
    //    redirectTo: '/query',
    //    pathMatch: 'full'
    //},
    {
        path: '',
        component: query_nav_component_1.NormalQueryNavComponent,
        children: [
            { path: ':id', component: ems_app_express_normal_detail_component_1.EmsNormalExpressComponent },
            { path: '', component: query_postid_component_1.NormalQueryPostIdComponent }
        ]
    }
];
exports.normalQueryRouting = router_1.RouterModule.forChild(normalQueryRoutes);
//# sourceMappingURL=query.routing.js.map