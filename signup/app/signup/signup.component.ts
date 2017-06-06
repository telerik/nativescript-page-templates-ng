import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

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

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        Facebook.init("1771472059772879");
    }

    onSignupFacebookButtonTap(eventData: Facebook.LoginEventData) {
        if (!eventData.error) {
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }
    }

    onLogupGoogleButtonTap() {
    }

    onSignupButtonTap() {
    }
}
