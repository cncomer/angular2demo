/**
 * Created by bestjoy on 16/8/16.
 */
import { Routes, RouterModule } from '@angular/router';
//import {AdminComponent} from "app/app.admin.component";
const normalQueryRoutes: Routes = [
    //{
    //    path: 'tao',
    //    component: CrisisCenterComponent,
    //    children: [
    //        { path: ':id',  component: CrisisDetailComponent },
    //        { path: '',     component: CrisisListComponent }
    //    ]
    //}
];

export const normalQueryRouting = RouterModule.forChild(normalQueryRoutes);