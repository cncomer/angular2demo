/**
 *
 * 普通快递详情界面
 * Created by bestjoy on 16/8/16.
 */

import { Component, OnInit, Input } from '@angular/core';
import {NormalExpressQueryService} from "./query.service";
import {EmsNormalExpressObject, EmsNormalExpressStateDescArray} from "./ems.normal.expressobject";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EmsExpressProgressObject} from "./ems.express.progress.object";

@Component({
    //moduleId: module.id,
    selector: 'normal-express-detail',
    templateUrl: './ems.app.express.normal.detail.template.html',
    styleUrls:['./ems.app.express.normal.detail.template.css'],
})
export class EmsNormalExpressComponent implements OnInit{
    @Input()
    emsNormalExpressObject: EmsNormalExpressObject;
    emsNormalExpressProgressList: EmsExpressProgressObject[];
    title: string = "邮件详情";
    loadText: string = "正在查询,请稍后...";

    fromHome: boolean = false;

    constructor(
        private normalExpressQueryService: NormalExpressQueryService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        //window.addEventListener("popstate", function() {
        //    var currentState = history.state;
        //    console.log("popstate currentState " + currentState);
        //    /*
        //     * 该干嘛干嘛
        //     */
        //});
        console.log("EmsNormalExpressComponent ngOnInit");
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.normalExpressQueryService.getEmsNormalExpressObject(id).then(
                emsNormalExpressObject => {
                    this.emsNormalExpressObject = emsNormalExpressObject;
                    this.emsNormalExpressProgressList = emsNormalExpressObject.data;
                    console.log('get progress size ' + this.emsNormalExpressProgressList.length);
                },
                error =>  {
                    console.log('error');
                    let errorMessage = <any>error;
                    this.loadText = errorMessage;
                    alert(errorMessage);
                    this.goBack();

                });
        });
    }

    public getState(): string {
        return EmsNormalExpressStateDescArray[this.emsNormalExpressObject.state];
    }

    public getProgressContext(context: string): string {
        return context;
    }

    goBack() {
       //window.history.back();
        this.router.navigate(['']);
    }

}