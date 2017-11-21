"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VisionComponent = (function () {
    function VisionComponent() {
        this.title = "Vision";
        this.subtitle = "What is your vision";
        this.orion_vision = "We will be the most trusted source for professional "
            + "talent in the markets we serve. Businesses will "
            + "prefer working with us because of our absolute "
            + "commitment to their success. Candidates will seek "
            + "relationships with us because we are their best "
            + "advocates.";
        this.orion_mission = "Orion Solutions Group exists to provide clients "
            + "and candidates with an outstanding experience for "
            + "all their human capital needs – project delivery, "
            + "contract staffing, and professional recruiting. "
            + "We achieve this through our dedication to high "
            + "quality, flexible, and honest solutions.";
        this.orion_values_1_title = "Put Relationships First";
        this.orion_values_1 = "Relationships are at the center of everything we "
            + "do. We seek long-term trusting relationships "
            + "rather than the quick sell. We value quality over "
            + "quantity and people over placements.";
        this.orion_values_2_title = "Inspire Confidence";
        this.orion_values_2 = "Candidates trust us with one of the most important "
            + "things in their lives: their careers. Clients "
            + "trust us with their most important asset: their "
            + "people. We are career advocates and we take that "
            + "job very seriously.";
        this.orion_values_3_title = "Do the Right Thing";
        this.orion_values_3 = "We always do the right thing for our clients, "
            + "candidates and consultants. Always. We will never "
            + "sacrifice our values to make a transaction.";
        this.orion_values_4_title = "Solve Problems Creatively";
        this.orion_values_4 = "We can be creative and flexible because our business "
            + "model puts relationships first. We come up with "
            + "unique ideas and approaches to solve problems. We "
            + "continue to find innovative ways to give our "
            + "clients, candidates and consultants precisely what "
            + "they need.";
    }
    VisionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'vision.component.html',
            styleUrls: ['vision.component.css',
                '../app.component.css']
        })
    ], VisionComponent);
    return VisionComponent;
}());
exports.VisionComponent = VisionComponent;
//# sourceMappingURL=vision.component.js.map