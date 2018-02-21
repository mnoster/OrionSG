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
var BullhornService = (function () {
    function BullhornService(http) {
        this.http = http;
        this.boundaryKey = Math.random().toString(16); // random string
        this.config = { headers: { 'Content-Type': 'application/json' } };
    }
    BullhornService.prototype.parseResume = function (resume) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(urls_1._URL + "/bhorn/parse_resume", { resume: resume }, _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    BullhornService.prototype.attachResume = function (resume, candidate_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(urls_1._URL + "/bhorn/attach_resume", { resume: resume, candidate_id: candidate_id }, _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    BullhornService.prototype.getJobs = function (id) {
        if (id)
            return this.getJobById(id);
        else
            return this.getAllJobs();
    };
    //not being used currently
    BullhornService.prototype.getJobById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(urls_1._URL + "/bhorn/jobs/id", JSON.stringify({ job_id: id }), _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    BullhornService.prototype.getAllJobs = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(urls_1._URL + "/bhorn/jobs", _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    BullhornService.prototype.submitResume = function () {
        return this.http.post(urls_1._URL + "/bhorn", this.config);
    };
    BullhornService.prototype.createCandidate = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put(urls_1._URL + "/bhorn/create_candidate", JSON.stringify(data), _this.config)
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    BullhornService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BullhornService);
    return BullhornService;
}());
exports.BullhornService = BullhornService;
//# sourceMappingURL=bullhorn.service.js.map