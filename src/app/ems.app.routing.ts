/**
 * Created by bestjoy on 16/8/15.
 */
import {Routes, RouterModule } from '@angular/router';
import {EmsAppJumpComponent} from "./ems.app.jump.component";
const appRoutes: Routes = [
    //{ path: '**', component: PageNotFoundComponent }
    //{
    //    path: '',
    //    redirectTo:'query',
    //    pathMatch: 'full'
    //},
    //{
    //    path: '',
    //    component: EmsAppJumpComponent,
    //},
    //
    //{
    //    path: 'ems',
    //    redirectTo:':normal',
    //    pathMatch: 'full',
    //    terminal: true
    //},
    //
    //{
    //    path: '?normal',
    //    redirectTo:'normal',
    //    pathMatch: 'full'
    //}

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);