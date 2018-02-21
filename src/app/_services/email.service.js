"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var urls_1 = require("../_models/urls");
require("rxjs/add/operator/toPromise");
var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.config = { headers: { 'Content-Type': 'application/json' } };
    }
    EmailService.prototype.emailApplicant = function (email, job_title, url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(urls_1._URL + "/email", { email: email, job_title: job_title, url: url }, _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    EmailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmailService);
    return EmailService;
}());
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map