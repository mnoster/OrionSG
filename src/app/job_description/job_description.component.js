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
var index_1 = require("../_services/index");
var router_1 = require("@angular/router");
var index_2 = require("../_services/index");
var jobs_component_1 = require("../jobs/jobs.component");
var index_3 = require("../_models/index");
var JobDescriptionComponent = (function () {
    function JobDescriptionComponent(bullhornService, router, alertService) {
        this.bullhornService = bullhornService;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
        this.loader = false;
        this.job_id = this.getJobId();
    }
    JobDescriptionComponent.prototype.ngOnInit = function () {
        if (!jobs_component_1.data_retrieved) {
            this.formatBullhornData();
        }
        else {
            this.loader = true;
            this.job_data = jobs_component_1.job_data;
            this.getJobDescription(this.job_id);
        }
    };
    JobDescriptionComponent.prototype.formatBullhornData = function () {
        var _this = this;
        this.bullhornService.getJobs(null).then(function (res) {
            console.log("res: ", JSON.parse(res._body));
            var jobs = JSON.parse(res._body);
            var jd = jobs.data;
            for (var i = 0; i < jd.length; i++) {
                jobs_component_1.job_data.push({
                    id: jd[i].id,
                    job: new index_3.Job(jd[i].id, jd[i].title, jd[i].publicDescription, jd[i].employmentType, jd[i].publicDescription.substring(0, 375) + "...", jd[i].address.city + ", " + jd[i].address.state, jd[i].address, jd[i].categories.data[0] ? jd[i].categories.data[0].name : '')
                });
            }
            _this.loader = true;
            _this.job_data = jobs_component_1.job_data;
            _this.getJobDescription(_this.job_id);
        });
    };
    JobDescriptionComponent.prototype.getJobDescription = function (id) {
        for (var i = 0; i < jobs_component_1.job_data.length; i++) {
            if (jobs_component_1.job_data[i].id == [id]) {
                this.description = jobs_component_1.job_data[i].job.description;
                this.employmentType = jobs_component_1.job_data[i].job.employmentType;
                this.address = jobs_component_1.job_data[i].job.address;
                this.category = jobs_component_1.job_data[i].job.category;
                this.title = jobs_component_1.job_data[i].job.title;
                this.location = jobs_component_1.job_data[i].job.location;
                return this.description;
            }
        }
    };
    JobDescriptionComponent.prototype.getJobId = function () {
        var url = window.location.href;
        var id = url.split('/');
        return id[id.length - 1];
    };
    JobDescriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [index_1.BullhornService],
            templateUrl: 'job_description.component.html',
            styleUrls: ['job_description.component.css']
        }),
        __metadata("design:paramtypes", [index_1.BullhornService,
            router_1.Router,
            index_2.AlertService])
    ], JobDescriptionComponent);
    return JobDescriptionComponent;
}());
exports.JobDescriptionComponent = JobDescriptionComponent;
//# sourceMappingURL=job_description.component.js.map