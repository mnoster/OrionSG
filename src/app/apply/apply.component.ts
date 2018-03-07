"use strict";
import {Component, OnInit} from '@angular/core';
import {BullhornService, EmailService} from "../_services/index";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CandidateForm, Candidate} from "../_models/index";
import {FormBuilder, FormGroup, Validators}    from '@angular/forms';

@Component({
    moduleId: module.id,
    providers: [BullhornService],
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.css']
})


export class ApplyComponent implements OnInit {
    loading = false;
    loader = false;
    email:string;
    job_id: number = this.getJobId();
    location: string;
    title: string;
    complete:boolean = false;
    application_form: Array<Object> = CandidateForm;
    app_form: FormGroup;
    encoded_file:string;
    resumeUploaded:boolean = false;
    file_type:string;


    constructor(private bullhornService: BullhornService,
                private emailService: EmailService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private app: FormBuilder) {
        this.createForm();
    }


    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.location = params['l'];
            this.title = params['t']
        });
    }


    public getJobId() {
        let url: string = window.location.href;
        let id: Array<any> = url.split('/');
        url = id[id.length - 1];
        id = url.split("?");
        return id[0];
    }

    createForm() {
        this.app_form = this.app.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
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
    }

    attachResume(resume: any) {
        let self = this;
        this.resumeUploaded = true
        let fileToLoad = resume
        self.file_type = resume.name.split('.')
        self.file_type = self.file_type[self.file_type.length - 1]
        let fileReader:any = new FileReader(), target:EventTarget
        fileReader.onload = function (fileLoadedEvent:any) {
            self.encoded_file = fileLoadedEvent.target.result
        };
        fileReader.readAsDataURL(fileToLoad)
    }

    onSubmit() {
        try{
            this.loader = true;
            let self = this;
            let data = this.formatCandidate(this.app_form.value)
            let resume = self.encoded_file
            this.email = data.email;
            this.bullhornService.createCandidate(data).then(
                (res: any) => {
                    let res_body = JSON.parse(res._body);
                    let candidate_id = res_body.data.candidate.id;
                    self.bullhornService.attachResume(self.encoded_file, candidate_id, self.file_type).then(
                        (res: any) => {
                            this.complete = true
                            document.getElementById("showSuccessModal").click()
                            // console.log("res: " , res)
                            self.emailService.emailApplicant(this.email, this.title, window.location.href, data, resume).then(
                                (res: any) => {
                                    // console.log("res: " , res)
                                }
                            )
                        }
                    )
                }
            )
        }catch(error){
            alert("There was an error submitting")
        }

    }


    formatCandidate(data: any) {
        let candidate = new Candidate(
            data.firstName,
            data.lastName,
            data.firstName + ' ' + data.lastName,
            {
                address1: data.address,
                city: data.city,
                state: data.state,
                zip: data.zip

            },
            data.email,
            data.email2,
            data.phone,
            data.mobile,
            data.occupation,
            data.workPhone,
            this.job_id.toString()
        );
        return candidate;
    }
}
