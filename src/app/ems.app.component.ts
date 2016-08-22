import { Component, OnInit } from '@angular/core';

import {Title} from "@angular/platform-browser";
import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    template: `
       <router-outlet></router-outlet>
  `
})
export class EmsAppComponent implements OnInit{
    title = 'Tour of Heroes';
    constructor(private titleService: Title) {
        this.setTitle("邮政速递物流");
    }

    ngOnInit() {
        console.log("EmsAppComponent ngOnInit");
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }


}