/**
 * Created by bestjoy on 16/8/16.
 */
import { Component } from '@angular/core';
//import '../../assets/css/styles.css';
@Component({
    selector: 'my-nav',
    template: `
       <!--<nav>-->
            <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
            <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>-->
       <!--</nav>-->
       <router-outlet></router-outlet>
  `
})
export class NormalQueryNavComponent {

}