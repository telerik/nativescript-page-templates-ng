import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    imports: [
        NativeScriptModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }