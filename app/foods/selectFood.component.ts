import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

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