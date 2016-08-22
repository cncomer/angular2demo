import {
    addProviders,
    inject,
} from '@angular/core/testing';
import {EmsAppComponent} from "./ems.app.component";
describe('App', () => {
    beforeEach(() => {
        addProviders([
            EmsAppComponent
        ]);
    });
    it ('should work', inject([EmsAppComponent], (app: EmsAppComponent) => {
        // Add real test here
        expect(2).toBe(2);
    }));
});
