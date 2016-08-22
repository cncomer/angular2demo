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
        console.log("NormalExpressQueryService getEmsNormalExpressObject id " + id);
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
        console.log("Response " + res);
        var body = res.json();
        console.log("Response " + JSON.stringify(body));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiTm9ybWFsRXhwcmVzc1F1ZXJ5U2VydmljZSIsIk5vcm1hbEV4cHJlc3NRdWVyeVNlcnZpY2UuY29uc3RydWN0b3IiLCJOb3JtYWxFeHByZXNzUXVlcnlTZXJ2aWNlLmdldEVtc05vcm1hbEV4cHJlc3NPYmplY3QiLCJOb3JtYWxFeHByZXNzUXVlcnlTZXJ2aWNlLmV4dHJhY3REYXRhIiwiTm9ybWFsRXhwcmVzc1F1ZXJ5U2VydmljZS5oYW5kbGVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFJaEY7SUFJSUEsbUNBQXFCQSxJQUFVQSxFQUFVQSxLQUFZQTtRQUFoQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7UUFBVUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBT0E7UUFGN0NBLGFBQVFBLEdBQUdBLDBDQUEwQ0EsQ0FBQ0EsQ0FBRUEsdUZBQXVGQTtJQUUvRkEsQ0FBQ0E7SUFFbERELDZEQUF5QkEsR0FBaENBLFVBQWlDQSxFQUFVQTtRQUV2Q0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseURBQXlEQSxHQUFHQSxFQUFFQSxDQUFFQSxDQUFDQTtRQUM3RUEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsc0JBQWVBLEVBQUVBLENBQUNBO1FBQ25DQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSwwQkFBMEJBO1FBQ3JEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUN6QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBLENBQUNBO2FBQ2pEQSxTQUFTQSxFQUFFQTthQUNYQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTthQUN0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDakNBLENBQUNBO0lBRURGLDZDQUE2Q0E7SUFDN0NBLG1rQkFBbWtCQTtJQUNua0JBLG1DQUFtQ0E7SUFDbkNBLEdBQUdBO0lBRUtBLCtDQUFXQSxHQUFuQkEsVUFBb0JBLEdBQWFBO1FBQzdCRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUMvQkEsSUFBSUEsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ2hEQSxJQUFJQSxHQUFHQSxJQUFJQSxJQUFJQSxFQUFHQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxVQUFVQTtnQkFDVkEsTUFBTUEsRUFBQ0EsU0FBU0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBO1FBQ0xBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUNPSCwrQ0FBV0EsR0FBbkJBLFVBQXFCQSxLQUFVQTtRQUMzQkksb0VBQW9FQTtRQUNwRUEsOERBQThEQTtRQUM5REEsSUFBSUEsTUFBTUEsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0E7WUFDeENBLEtBQUtBLENBQUNBLE1BQU1BLEdBQU1BLEtBQUtBLENBQUNBLE1BQU1BLFdBQU1BLEtBQUtBLENBQUNBLFVBQVlBLEdBQUdBLGNBQWNBLENBQUNBO1FBQzVFQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSx5QkFBeUJBO1FBQ2hEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUE3Q0xKO1FBQUNBLGlCQUFVQSxFQUFFQTs7a0NBK0NaQTtJQUFEQSxnQ0FBQ0E7QUFBREEsQ0FBQ0EsQUEvQ0QsSUErQ0M7QUE5Q1ksaUNBQXlCLDRCQThDckMsQ0FBQSJ9