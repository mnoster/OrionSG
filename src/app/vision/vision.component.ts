import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'vision.component.html',
    styleUrls: ['vision.component.css',
                '../app.component.css']
})

export class VisionComponent {
    title: String = "Vision";
    subtitle: String = "What is your vision";

    orion_vision: String = "We will be the most trusted source for professional "
                          + "talent in the markets we serve. Businesses will "
                          + "prefer working with us because of our absolute "
                          + "commitment to their success. Candidates will seek "
                          + "relationships with us because we are their best "
                          + "advocates.";

    orion_mission: String = "Orion Solutions Group exists to provide clients "
                           + "and candidates with an outstanding experience for "
                           + "all their human capital needs – project delivery, "
                           + "contract staffing, and professional recruiting. "
                           + "We achieve this through our dedication to high "
                           + "quality, flexible, and honest solutions.";

    orion_values_1_title: String = "Put Relationships First";
    orion_values_1: String = "Relationships are at the center of everything we "
                           + "do. We seek long-term trusting relationships "
                           + "rather than the quick sell. We value quality over "
                           + "quantity and people over placements.";

    orion_values_2_title: String = "Inspire Confidence";
    orion_values_2: String = "Candidates trust us with one of the most important "
                           + "things in their lives: their careers. Clients "
                           + "trust us with their most important asset: their "
                           + "people. We are career advocates and we take that "
                           + "job very seriously.";

    orion_values_3_title: String = "Do the Right Thing";
    orion_values_3: String = "We always do the right thing for our clients, "
                           + "candidates and consultants. Always. We will never "
                           + "sacrifice our values to make a transaction.";

    orion_values_4_title: String = "Solve Problems Creatively";
    orion_values_4: String = "We can be creative and flexible because our business "
                           + "model puts relationships first. We come up with "
                           + "unique ideas and approaches to solve problems. We "
                           + "continue to find innovative ways to give our "
                           + "clients, candidates and consultants precisely what "
                           + "they need.";

}
