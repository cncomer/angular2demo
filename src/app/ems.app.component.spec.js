var testing_1 = require('@angular/core/testing');
var ems_app_component_1 = require("./ems.app.component");
describe('App', function () {
    beforeEach(function () {
        testing_1.addProviders([
            ems_app_component_1.EmsAppComponent
        ]);
    });
    it('should work', testing_1.inject([ems_app_component_1.EmsAppComponent], function (app) {
        // Add real test here
        expect(2).toBe(2);
    }));
});
//# sourceMappingURL=ems.app.component.spec.js.map