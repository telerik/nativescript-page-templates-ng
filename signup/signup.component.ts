import { Component, OnInit } from "@angular/core";

@Component({
    selector: "<%=PascalCaseName%>",
    moduleId: module.id,
    templateUrl: "./<%=OriginalName%>.component.html"
})
export class <%=PascalCaseName%>Component implements OnInit {
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
