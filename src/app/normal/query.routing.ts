/**
 * Created by bestjoy on 16/8/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {NormalQueryNavComponent} from './query.nav.component';
import {EmsToolBarComponent} from '../top.toolbar.component';
import {NormalQueryPostIdComponent} from './query.postid.component';
import {EmsNormalExpressComponent} from './ems.app.express.normal.detail.component';
const normalQueryRoutes: Routes = [
    {
        path: '',
        redirectTo: '/query',
        pathMatch: 'full'
    },
    {
        path: 'query',
        component: NormalQueryNavComponent,
        children: [
            { path: ':id',  component: EmsNormalExpressComponent },
            { path: '',     component: NormalQueryPostIdComponent }
        ]
    }

];

export const normalQueryRouting = RouterModule.forChild(normalQueryRoutes);