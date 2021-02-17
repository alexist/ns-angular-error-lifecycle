import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {TraceService} from "./trace.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    count:number;
    constructor(public itemService: ItemService, private traceService:TraceService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.itemService.value = "No item";
        this.count = this.traceService.count
    }
}
