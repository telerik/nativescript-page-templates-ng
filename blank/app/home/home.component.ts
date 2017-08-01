import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole home layout as a whole.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole
        * home layout as a whole.
        *************************************************************/
    }
}
