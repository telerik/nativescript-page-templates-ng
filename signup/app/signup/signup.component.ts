import { Component, OnInit } from "@angular/core";

import * as Facebook from "nativescript-facebook";

@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnInit {
    name: string;
    email: string;
    password: string;

    constructor() {
    }

    ngOnInit(): void {
        Facebook.init("1771472059772879");
    }

    onSignupFacebook(eventData: Facebook.LoginEventData) {
    }

    onSignGoogleButtonTap() {
    }

    onSignupButtonTap() {
    }
}
