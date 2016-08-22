/**
 * Created by bestjoy on 16/8/16.
 */
import { Component, Input } from '@angular/core';
//let templateHtml = require('./top.toolbar.component.html');
//let templateCss = require('./top.toolbar.component.css');
@Component({
    //moduleId: module.id,
    selector: 'my-ems-toolbar',
    styleUrls:['./top.toolbar.component.css'],
    templateUrl: './top.toolbar.component.html'
})
export class EmsToolBarComponent {
    @Input()
    title = '邮政速递物流';
}