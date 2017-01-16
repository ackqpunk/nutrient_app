import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
    templateUrl: './food/selectFood.component.html',
    styleUrls: ['./food/selectFood.component.css']
})
export class SelectFoodContainer implements OnInit {
    foodGroups: Array<any> = []
    constructor(private router: Router) { }

    ngOnInit() { }
}
