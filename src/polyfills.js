/**
 * Created by bestjoy on 16/8/19.
 */
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsUUFBTyxhQUFhLENBQUMsQ0FBQTtBQUNyQixRQUFPLHFCQUFxQixDQUFDLENBQUE7QUFDN0IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztBQUV2QyxDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDSixjQUFjO0lBQ2QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ2xELENBQUMifQ==