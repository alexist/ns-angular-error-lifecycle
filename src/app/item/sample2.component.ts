import { Component, OnInit } from "@angular/core";

import {TraceService} from "./trace.service";

@Component({
    selector: "ns-sample2",
    templateUrl: "./sample2.component.html"
})
export class Sample2Component implements OnInit{
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
