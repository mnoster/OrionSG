import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css',
        '../app.component.css',
        '../font-awesome/css/fontawesome-all.min.css'
    ]
})

export class ContactComponent {
    constructor(private sanitizer: DomSanitizer) {}

    title: string = "Contact Us";
    subtitle: string = "Here are a few ways to get in touch with us";
    mapUrl: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11746.543711135988!2d-83.21590863221654!3d42.60546737917119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c11fdd241e0b%3A0x47bf9db70c91363a!2s2950+W+Square+Lake+Rd+%23100%2C+Troy%2C+MI+48098!5e0!3m2!1sen!2sus!4v1510104739436";

    locations = [
        {
            address: "2950 West Square Lake Road, Suite 100<br> Troy, MI, USA <br> 48098",
            phone: "(855) 223-4020",
            name: "Corporate Headquarters: Troy",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11746.543711135988!2d-83.21590863221654!3d42.60546737917119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c11fdd241e0b%3A0x47bf9db70c91363a!2s2950+W+Square+Lake+Rd+%23100%2C+Troy%2C+MI+48098!5e0!3m2!1sen!2sus!4v1510104739436"
        },
        {
            address: "471 Lambert Rd, Unit 111<br> Brea, CA, USA <br> 92821",
            phone: "(7140 814-7019",
            name: "Corporate Office: Brea",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.61187770668!2d-117.90388288463546!3d33.92538743185155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd56aca7d949d%3A0x82813523f11b3eee!2s471+W+Lambert+Rd+%23111%2C+Brea%2C+CA+92821!5e0!3m2!1sen!2sus!4v1553491309453",
        },
    ];

    switchMap(url: string) {
        console.log("switch map")
        this.mapUrl = url;
    }
}
