import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {FoodService} from "../services/food.service";
import {Observable} from 'rxjs/Rx';
import {ValueList, IValueItem} from '../helpers/value-list.helper';

@Component({
    selector: 'select-food',
    templateUrl: './foods/selectFood.component.html',
    styleUrls: ['./foods/selectFood.component.css']
})
export class SelectFoodComponent implements OnInit {
    private foodGroups: Observable<any>;
    private items: Observable<ValueList>
    private selectedFoodGroup: any;
    constructor(private router: Router, private foodService: FoodService) { 
        
    }



    ngOnInit() { 
        this.foodGroups = this.foodService.getFoodCategories()
        this.items = this.foodService.getFoodCategoriesAsValueList();
        var t = 1;
    }


    public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.selectedFoodGroup = this.foodGroups[picker.selectedIndex];
    }
}