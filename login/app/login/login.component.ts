import { Component, OnInit } from "@angular/core";

import * as Facebook from "nativescript-facebook";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor() {
    }

    ngOnInit(): void {
        Facebook.init("1771472059772879");
    }

    onLogoutFacebook(eventData: Facebook.LoginEventData) {
    }

    onLoginFacebook(eventData: Facebook.LoginEventData) {
    }

    onLoginGoogleButtonTap() {
    }

    onSignInButtonTap() {
    }

    onForgotPasswordTap() {
    }
}
