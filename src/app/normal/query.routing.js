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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJ5LnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxvQ0FBc0MsdUJBQXVCLENBQUMsQ0FBQTtBQUU5RCx1Q0FBeUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRSx3REFBd0MsMkNBQTJDLENBQUMsQ0FBQTtBQUNwRixJQUFNLGlCQUFpQixHQUFXO0lBQzlCLEdBQUc7SUFDSCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixJQUFJO0lBQ0o7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw2Q0FBdUI7UUFDbEMsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRSxtRUFBeUIsRUFBRTtZQUN0RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQU0sU0FBUyxFQUFFLG1EQUEwQixFQUFFO1NBQzFEO0tBQ0o7Q0FFSixDQUFDO0FBRVcsMEJBQWtCLEdBQUcscUJBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyJ9