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
var HomeComponent = (function () {
    // constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    function HomeComponent(userService, contentService) {
        this.userService = userService;
        this.contentService = contentService;
        this.loading = false;
        this.users = [];
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.onAnchorClick = function () {
        // console.log("On anchor click");
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getContent();
    };
    HomeComponent.prototype.getContent = function () {
        var _this = this;
        this.loading = true;
        this.page_type = "Home";
        this.contentService.getContent(this.page_type)
            .subscribe(function (data) {
            // console.log("Content: ", data);
        }, function (error) {
            // console.log("Content  Error: ", error);
            _this.loading = false;
        });
    };
    HomeComponent.prototype.deleteUser = function (id) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css', '../app.component.css']
        }),
        __metadata("design:paramtypes", [index_1.UserService, index_1.ContentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
