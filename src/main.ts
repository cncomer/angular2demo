/**
 * Created by bestjoy on 16/8/11.
 */
//import { bootstrap }    from '@angular/platform-browser-dynamic';
//import { Title } from '@angular/platform-browser';
//import { AppComponent } from './app.component';
//bootstrap(AppComponent,[Title]).then(
//    () => {
//        window.console.info( 'Angular finished bootstrapping your application!' );
//    },
//    (error) => {
//        console.warn( 'Angular was not able to bootstrap your application.' );
//        console.error( error );
//    }
//);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {EmsAppModule} from "./app/ems.app.module";
if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(EmsAppModule);