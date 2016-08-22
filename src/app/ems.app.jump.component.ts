import { Component, OnInit } from '@angular/core';

import {Title} from "@angular/platform-browser";
//import {getUrlParamsObject} from './app.utils';
import {Router} from "@angular/router";
@Component({
    template:'<div></div>'
})
export class EmsAppJumpComponent implements OnInit{
    constructor(private titleService: Title, private router: Router) {
        this.setTitle("邮政速递物流");
    }

    ngOnInit() {
        console.log("EmsAppJumpComponent ngOnInit " + window.location.href);

        let params: {from?: string, target?: string, action?: string, code?: string} = this.getUrlParamsObject(window.location.href);

        if (!params.target) {
            params.target = 'normal';
        }

        if (params.target=='normal') {
            if (params.action && params.action == 'scan') {
                this.navigate('normal/'+params.code);
            } else {
                this.navigate('normal');
            }

        } else if (params.target=='tao') {
            if (params.action && params.action == 'scan') {
                this.navigate('tao/'+params.code);
            } else {
                this.navigate('tao');
            }
        }
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    navigate(path: string) {
        let link = [path];
        console.log("navigate link=" + link);
        this.router.navigate(link);

    }

    getUrlParams(url: string) {
        var index: number = url.indexOf('?');
        console.log(index);
        if (index != -1) {
            return url.substring('?'.length);
        } else {
            return "";
        }
    }

    getUrlParamsObject(url: string) {
        let paramAndValuePairs: string = this.getUrlParams(url);
        let resultValue = {};
        let array: string[] = paramAndValuePairs.split("&");
        let len = array.length;
        for (let index = 0; index < len; index++) {
            let pair = array[index].split("=");
            resultValue[pair[0]] = pair[1];
        }
        return resultValue;
    }

}