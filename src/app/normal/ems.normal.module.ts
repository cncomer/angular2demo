/**
 * Created by bestjoy on 16/8/12.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { normalQueryRouting } from './query.routing';
import {NormalQueryNavComponent} from "./query.nav.component";
import {NormalQueryPostIdComponent} from "./query.postid.component";
import { FormsModule }   from '@angular/forms';
import {EmsNormalExpressComponent} from "./ems.app.express.normal.detail.component";
import {NormalExpressQueryService} from "./query.service";
import {HttpModule} from "@angular/http";
import { CommonModule }   from '@angular/common';
import {EmsToolBarComponent} from "../top.toolbar.component";
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        normalQueryRouting,
    ],
    declarations: [
        EmsToolBarComponent,
        NormalQueryNavComponent,
        NormalQueryPostIdComponent,
        EmsNormalExpressComponent,
    ],
    providers: [
        NormalExpressQueryService,
    ],
})
export class EmsNormalQueryModule { }