import { Component, OnInit } from "@angular/core";

@Component({
    selector: "<%=PascalCaseName%>",
    moduleId: module.id,
    templateUrl: "./<%=OriginalName%>.component.html"
})
export class <%=PascalCaseName%>Component implements OnInit {
    email: string;
    password: string;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole login layout as a whole.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole
        * login layout as a whole.
        *************************************************************/
    }

    /* ***********************************************************
    * TODO: Implement Facebook login.
    *************************************************************/
    onLoginFacebookButtonTap(): void {
    }

    /* ***********************************************************
    * TODO: Implement Google login.
    *************************************************************/
    onLoginGoogleButtonTap(): void {
    }

    /* ***********************************************************
    * TODO: Implement custom sign in.
    *************************************************************/
    onSignInButtonTap(): void {
    }

    /* ***********************************************************
    * TODO: Implement forgot password.
    *************************************************************/
    onForgotPasswordTap(): void {
    }
}
