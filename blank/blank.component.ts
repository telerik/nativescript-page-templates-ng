import { Component, OnInit } from "@angular/core";

@Component({
    selector: "<%=PascalCaseName%>",
    moduleId: module.id,
    templateUrl: "./<%=OriginalName%>.component.html"
})
export class <%=PascalCaseName%>Component implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole home layout as a whole.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole
        * home layout as a whole.
        *************************************************************/
    }
}
