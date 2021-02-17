import { Component, OnInit } from "@angular/core";

import {TraceService} from "./trace.service";

@Component({
    selector: "ns-sample",
    templateUrl: "./sample.component.html"
})
export class SampleComponent implements OnInit{
    count:number;

    constructor(public trace: TraceService) { }
    ngOnInit(): void {
        this.count = this.trace.count;
    }


    rendered(){
        this.trace.trace();
        console.log("rendered");
        return "Test";
    }
}
