import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {SegmentedBarItem} from "ui/segmented-bar";

@Component({
    templateUrl: './foods/foodSelectionContainer.component.html',
    styleUrls: ['./foods/foodSelectionContainer.component.css']
})
export class FoodSelectionContainerComponent implements OnInit {
    foodGroups: Array<any> = []
    constructor(private router: Router) { }

    ngOnInit() {

    }
}

@Component({
    selector: 'select-food',
    templateUrl: './foods/selectFood.component.html',
    styleUrls: ['./foods/selectFood.component.css']
})
export class SelectFoodContainer implements OnInit {
    foodGroups: Array<any> = []
    constructor(private router: Router) { }

    ngOnInit() { }
}