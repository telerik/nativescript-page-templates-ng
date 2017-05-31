import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

import * as application from 'application';
var nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("1771472059772879");
});

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFacebookModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
