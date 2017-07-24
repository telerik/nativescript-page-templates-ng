import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
    name: string;
    email: string;
    password: string;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole signup layout as a whole.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole
        * signup layout as a whole.
        *************************************************************/
    }

    /* ***********************************************************
    * TODO: Implement Facebook sign up.
    *************************************************************/
    onSignFacebookButtonTap(): void {
    }

    /* ***********************************************************
    * TODO: Implement Google sign up.
    *************************************************************/
    onSignGoogleButtonTap(): void {
    }

    /* ***********************************************************
    * TODO: Implement custom sign up.
    *************************************************************/
    onSignupButtonTap(): void {
    }
}
