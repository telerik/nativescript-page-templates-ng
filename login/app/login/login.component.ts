import { Component, OnInit } from "@angular/core";

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
    }

    onLoginFacebookButtonTap() {
    }

    onLoginGoogleButtonTap() {
    }

    onSignInButtonTap() {
    }

    onForgotPasswordTap() {
    }
}
