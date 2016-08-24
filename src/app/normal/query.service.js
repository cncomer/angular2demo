var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by bestjoy on 16/8/15.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var NormalExpressQueryService = (function () {
    function NormalExpressQueryService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.queryUrl = 'http://www.dzbxk.com/V4_5/EMSSearch.ashx'; // URL to web API, example http://www.kuaidi100.com/query?type=ems&postid=1006739505821
    }
    NormalExpressQueryService.prototype.getEmsNormalExpressObject = function (id) {
        console.log('NormalExpressQueryService getEmsNormalExpressObject id ' + id);
        var params = new http_1.URLSearchParams();
        params.set('type', "ems"); // the user's search value
        params.set('postid', id);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(this.queryUrl, { search: params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    //getDemoEmsNormalExpressObject(id: string) {
    //    let mock = {"message":"ok","nu":"1097273463220","ischeck":"1","com":"ems","status":"200","condition":"F00","state":"3","data":[{"time":"2016-08-15 11:08:43","context":"【上海市】 投递并签收，签收人：他人收 草签","ftime":"2016-08-15 11:08:43"},{"time":"2016-08-15 09:27:16","context":"【上海市】 天山(本部）安排投递，预计14:30:00前投递（投递员姓名：钟正华;联系电话：13611603701）","ftime":"2016-08-15 09:27:16"},{"time":"2016-08-15 05:09:13","context":"【上海市】 离开上海速递处理中心 发往莘庄(本部）","ftime":"2016-08-15 05:09:13"},{"time":"2016-08-14 17:10:25","context":"【上海市】 真如(本部）已收件（揽投员姓名：金益铿,联系电话:18918381880）","ftime":"2016-08-14 17:10:25"}]};
    //    return Promise.resolve(mock);
    //}
    NormalExpressQueryService.prototype.extractData = function (res) {
        console.log('Response ' + res);
        var body = res.json();
        console.log('Response ' + JSON.stringify(body));
        body = body || {};
        if (body) {
            if (body.status !== '200') {
                //200是查询成功
                throw { 'message': body.message };
            }
        }
        return body;
    };
    NormalExpressQueryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    NormalExpressQueryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], NormalExpressQueryService);
    return NormalExpressQueryService;
})();
exports.NormalExpressQueryService = NormalExpressQueryService;
//# sourceMappingURL=query.service.js.map