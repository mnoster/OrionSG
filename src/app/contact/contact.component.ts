import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css',
                '../app.component.css',
                '../font-awesome/css/fontawesome-all.min.css'
               ]
})

export class ContactComponent {
    title = "Contact Us";
    subtitle = "Here are a few ways to get in touch with us";
}
