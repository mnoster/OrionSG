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
var index_2 = require("../_models/index");
// import {data_retrieved} from "../job_description/job_description.component";
exports.data_retrieved = false;
exports.job_data = [];
var JobsComponent = (function () {
    function JobsComponent(bullhornService, router) {
        this.bullhornService = bullhornService;
        this.router = router;
        this.categories = [];
        this.locations = [];
        this.loading = false;
        this.loader = false;
    }
    JobsComponent.prototype.ngOnInit = function () {
        if (!exports.data_retrieved) {
            this.formatBullhornData();
        }
        else {
            this.loader = true;
            this.job_data = exports.job_data;
            this.createCategoriesAndLocations(exports.job_data);
        }
    };
    JobsComponent.prototype.onChange = function (category) {
        // console.log("selected category: ", category);
    };
    JobsComponent.prototype.formatBullhornData = function () {
        var _this = this;
        this.bullhornService.getJobs(null).then(function (res) {
            var jobs = JSON.parse(res._body);
            var jd = jobs.data;
            for (var i = 0; i < jd.length; i++) {
                exports.job_data.push({
                    id: jd[i].id,
                    job: new index_2.Job(jd[i].id, jd[i].title, jd[i].publicDescription, jd[i].employmentType, jd[i].publicDescription.substring(0, 375) + "...", jd[i].address.city + ", " + jd[i].address.state, jd[i].address, jd[i].categories.data[0] ? jd[i].categories.data[0].name : '')
                });
            }
            _this.createCategoriesAndLocations(exports.job_data);
            // console.log("JOBS: ", exports.job_data);
            _this.loader = true;
        });
        exports.data_retrieved = true;
        this.job_data = exports.job_data;
    };
    JobsComponent.prototype.createCategoriesAndLocations = function (job_data) {
        this.categories.push("Category");
        this.locations.push("Location");
        for (var i = 0; i < job_data.length; i++) {
            if (job_data[i].job.category) {
                //only push into array if it does not already exist in array
                if ((this.categories).indexOf(job_data[i].job.category) == -1) {
                    this.categories.push(job_data[i].job.category);
                }
                if ((this.locations).indexOf(job_data[i].job.location) == -1) {
                    this.locations.push(job_data[i].job.location);
                }
            }
        }
    };
    JobsComponent.prototype.searchStringInJobsArray = function () {
        if (!this.query) {
            this.job_data = exports.job_data;
            return;
        }
        var new_job_data = [];
        var query = [];
        query = this.query.split(" ");
        if (query.length <= 1)
            query.push(this.query);
        for (var j = 0; j < exports.job_data.length; j++) {
            for (var i = 0; i < query.length; i++)
                if (exports.job_data[j].job.description.toLocaleLowerCase().match(query[i].toLocaleLowerCase())
                    || exports.job_data[j].job.title.toLocaleLowerCase() == query[i].toLocaleLowerCase()) {
                    new_job_data.push(exports.job_data[j]);
                    break;
                }
        }
        if (!new_job_data.length)
            // console.log("No match for: ", this.query);
        this.job_data = new_job_data;
        return -1;
    };
    JobsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'jobs.component.html',
            styleUrls: ['jobs.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [index_1.BullhornService,
            router_1.Router])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map
