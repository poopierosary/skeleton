import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: '../views/components/navbar.component.html',
    styleUrls: ['../styles/components/navbar.component.css']
})

export class NavbarComponent {
    branding = 'Skeleton';
}