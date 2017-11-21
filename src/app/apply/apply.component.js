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
var forms_1 = require("@angular/forms");
var ApplyComponent = (function () {
    function ApplyComponent(bullhornService, emailService, router, activatedRoute, app) {
        this.bullhornService = bullhornService;
        this.emailService = emailService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.app = app;
        this.loading = false;
        this.loader = false;
        this.job_id = this.getJobId();
        this.complete = false;
        this.application_form = index_2.CandidateForm;
        this.resumeUploaded = false;
        this.createForm();
    }
    ApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.location = params['l'];
            _this.title = params['t'];
        });
    };
    ApplyComponent.prototype.getJobId = function () {
        var url = window.location.href;
        var id = url.split('/');
        url = id[id.length - 1];
        id = url.split("?");
        return id[0];
    };
    ApplyComponent.prototype.createForm = function () {
        this.app_form = this.app.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            email2: '',
            phone: '',
            mobile: '',
            workPhone: '',
            occupation: ''
        });
    };
    ApplyComponent.prototype.attachResume = function (resume) {
        var self = this;
        this.resumeUploaded = true;
        var fileToLoad = resume;
        var fileReader = new FileReader(), target;
        fileReader.onload = function (fileLoadedEvent) {
            self.encoded_file = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(fileToLoad);
    };
    ApplyComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("app form: ", this.app_form.value);
        this.loader = true;
        var self = this;
        var data = this.formatCandidate(this.app_form.value);
        this.email = data.email;
        this.bullhornService.createCandidate(data).then(function (res) {
            console.log("res: ", res);
            var res_body = JSON.parse(res._body);
            var candidate_id = res_body.data.candidate.id;
            self.bullhornService.attachResume(self.encoded_file, candidate_id).then(function (res) {
                _this.complete = true;
                document.getElementById("showSuccessModal").click();
                console.log("res: ", res);
                self.emailService.emailApplicant(_this.email, _this.title, window.location.href).then(function (res) {
                    console.log("res: ", res);
                });
            });
        });
    };
    ApplyComponent.prototype.formatCandidate = function (data) {
        var candidate = new index_2.Candidate(data.firstName, data.lastName, data.firstName + ' ' + data.lastName, {
            address1: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip
        }, data.email, data.email2, data.phone, data.mobile, data.occupation, data.workPhone, this.job_id.toString());
        return candidate;
    };
    ApplyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [index_1.BullhornService],
            templateUrl: 'apply.component.html',
            styleUrls: ['apply.component.css']
        }),
        __metadata("design:paramtypes", [index_1.BullhornService,
            index_1.EmailService,
            router_1.Router,
            router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], ApplyComponent);
    return ApplyComponent;
}());
exports.ApplyComponent = ApplyComponent;
//# sourceMappingURL=apply.component.js.map