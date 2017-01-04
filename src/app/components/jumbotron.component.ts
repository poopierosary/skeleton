import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: '../views/components/jumbotron.component.html',
    styleUrls: ['../styles/components/jumbotron.component.css']
})

export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor() {
        this.jbtHeading = "Hello World";
        this.jbtText = `
                             This is a tempalte for a simple angular 2 structure that can be easily develop/build on the go.
                             Angular 2 as of now, do not have a complete and concrete structure.
                             This is why I build this and called it skeleton, for free to use application to get started to build.
                             `;
       this.jbtBtnText = "Read More";
       this.jbtBtnUrl = "/about";
    }
}