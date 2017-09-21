import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { <%= PascalCaseName %>RoutingModule } from "./<%= OriginalName %>-routing.module";
import { <%= PascalCaseName %>Component } from "./<%= OriginalName %>.component";

@NgModule({
    imports: [
        NativeScriptModule,
        <%= PascalCaseName %>RoutingModule
    ],
    declarations: [
        <%= PascalCaseName %>Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class <%= PascalCaseName %>Module { }
