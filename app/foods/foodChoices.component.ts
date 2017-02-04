import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
    selector: 'food-choices',
    templateUrl: './foods/foodChoices.component.html',
    styleUrls: ['./foods/foodChoices.component.css']
})
export class FoodChoicesComponent implements OnInit {
    foodGroups: Array<any> = []
    constructor(private router: Router) { }

    ngOnInit() { }
}
