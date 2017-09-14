import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { <%=PascalCaseName%>Component } from "./<%=OriginalName%>.component";

const routes: Routes = [
    { path: "", component: <%=PascalCaseName%>Component }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class <%=PascalCaseName%>RoutingModule { }
