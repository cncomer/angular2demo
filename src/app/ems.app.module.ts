/**
 * Created by bestjoy on 16/8/12.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule, JsonpModule }     from '@angular/http';
import { Title } from "@angular/platform-browser";
import { routing, appRoutingProviders } from './ems.app.routing';
import { EmsNormalQueryModule } from "./normal/ems.normal.module";
import { EmsAppComponent } from "./ems.app.component";
import {EmsAppJumpComponent} from "./ems.app.jump.component";
import {EmsToolBarComponent} from "./top.toolbar.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        // Forms
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        EmsNormalQueryModule,
        // Material Design
        ],
    declarations: [
        EmsAppComponent,
        EmsAppJumpComponent,

    ],
    providers: [
        Title,
    ],
    bootstrap:    [ EmsAppComponent ]
})
export class EmsAppModule { }