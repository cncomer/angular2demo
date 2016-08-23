/**
 * Created by bestjoy on 16/8/18.
 */
var ServiceConfig = (function () {
    function ServiceConfig() {
        this.baseServiceUrl = 'http://www.dzbxk.com/ems';
        this.normalEmsServiceUrl = this.baseServiceUrl + '/normal';
        this.testNormalEmsServiceUrl = 'http://192.168.1.108:8080';
    }
    return ServiceConfig;
})();
exports.ServiceConfig = ServiceConfig;
//# sourceMappingURL=ems.service.config.js.map