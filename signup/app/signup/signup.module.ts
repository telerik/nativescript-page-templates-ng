import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

import { SignupComponent } from "./signup.component";
import { SignupRoutingModule } from "./signup-routing.module";

@NgModule({
    imports: [
        NativeScriptModule,
        SignupRoutingModule,
        NativeScriptFacebookModule
    ],
    declarations: [
        SignupComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignupModule { }