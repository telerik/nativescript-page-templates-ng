import { Component, OnInit } from "@angular/core";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "<%= OriginalName %>", loadChildren: "./<%= OriginalName %>/<%= OriginalName %>.module#<%= PascalCaseName %>Module" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "<%= PascalCaseName %>",
    moduleId: module.id,
    templateUrl: "./<%= OriginalName %>.component.html"
})
export class <%= PascalCaseName %>Component implements OnInit {
    name: string;
    email: string;
    password: string;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProvider(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        use NativeScript plugin for sign up with Facebook
        https://github.com/NativeScript/nativescript-facebook
        *************************************************************/
    }

    onSignupButtonTap(): void {
        const name = this.name;
        const email = this.email;
        const password = this.password;

        /* ***********************************************************
        * Call your custom signup logic using the email and password data.
        *************************************************************/
    }
}
