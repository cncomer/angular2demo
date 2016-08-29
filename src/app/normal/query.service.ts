/**
 * Created by bestjoy on 16/8/15.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {EmsNormalExpressObject} from './ems.normal.expressobject';

@Injectable()
export class NormalExpressQueryService {
    private queryUrl = 'http://www.dzbxk.com/V4_5/EMSSearch.ashx';  // URL to web API, example http://www.kuaidi100.com/query?type=ems&postid=1006739505821

    constructor (private http: Http, private jsonp: Jsonp) {}

    public getEmsNormalExpressObject(id: string): Promise<EmsNormalExpressObject> {

        console.log('NormalExpressQueryService getEmsNormalExpressObject id ' + id );
        let params = new URLSearchParams();
        params.set('type', "ems"); // the user's search value
        params.set('postid', id);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(this.queryUrl, {search: params})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    //getDemoEmsNormalExpressObject(id: string) {
    //    let mock = {"message":"ok","nu":"1097273463220","ischeck":"1","com":"ems","status":"200","condition":"F00","state":"3","data":[{"time":"2016-08-15 11:08:43","context":"【上海市】 投递并签收，签收人：他人收 草签","ftime":"2016-08-15 11:08:43"},{"time":"2016-08-15 09:27:16","context":"【上海市】 天山(本部）安排投递，预计14:30:00前投递（投递员姓名：钟正华;联系电话：13611603701）","ftime":"2016-08-15 09:27:16"},{"time":"2016-08-15 05:09:13","context":"【上海市】 离开上海速递处理中心 发往莘庄(本部）","ftime":"2016-08-15 05:09:13"},{"time":"2016-08-14 17:10:25","context":"【上海市】 真如(本部）已收件（揽投员姓名：金益铿,联系电话:18918381880）","ftime":"2016-08-14 17:10:25"}]};
    //    return Promise.resolve(mock);
    //}

    private extractData(res: Response) {
        console.log('Response ' + res);
        let body = res.json();
        console.log('Response ' + JSON.stringify(body));
        body = body || { };
        if (body) {
            if (body.status !== '200') {
                //200是查询成功
                throw {'message':body.message};
            }
        }
        return body;
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }



    public get(url: string, params: string) {
        //if (true) {
        //    return Promise.resolve({"jsapi_ticket":"sM4AOVdWfPE4DxkXGEs8VHFYqFcwcADKgwmp3r-ot-BzXGKvvlzZgq-a0PR2CpVJ5BmMBmczyLjGdmVqTPbUzw","noncestr":"abcd","timestamp":"1472111285","url":"dsadsa","sign":"2e9a23c78560216c39e618c0dd74d6b73cc7c508","appid":null});
        //}
        let options = new URLSearchParams();
        let keyValues: string[] = params.split('&');
        keyValues.forEach(function(keyValue: string) {
            let keyValues: string[] = keyValue.split('=');
            if (keyValues.length == 2) {
                options.set(keyValues[0], keyValues[1]);
            } else {
                options.set(keyValues[0], '');
            }

        });

        options.set('format', 'json');
        options.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(url, {search: options})
            .toPromise()
            .then(this.extractServerData)
            .catch(this.handleError);
    }

    private extractServerData(res: Response) {
        let body = res.json();
        console.log('Response ' + JSON.stringify(body));
        body = body || { };
        return body;
    }

}