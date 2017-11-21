"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyComponent = (function () {
    // Inject HttpClient into your component or service.
    function MyComponent(http) {
        this.http = http;
    }
    MyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request:
        this.http.get('../../server/api/create_jobs.js').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.results = data['results'];
        });
    };
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=api.js.map