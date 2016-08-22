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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var ems_app_module_1 = require("./app/ems.app.module");
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ems_app_module_1.EmsAppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxtRUFBbUU7QUFDbkUsb0RBQW9EO0FBQ3BELGlEQUFpRDtBQUNqRCx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLG9GQUFvRjtBQUNwRixRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLGdGQUFnRjtBQUNoRixpQ0FBaUM7QUFDakMsT0FBTztBQUNQLElBQUk7QUFFSix5Q0FBdUMsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsK0JBQTJCLHNCQUFzQixDQUFDLENBQUE7QUFDbEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuQyxxQkFBYyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQUNELGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLDZCQUFZLENBQUMsQ0FBQyJ9