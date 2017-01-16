import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

export enum Animal { Cat, Dog };

@Component({
    templateUrl: './animals/newAnimal.component.html',
    styleUrls: ['./animals/newAnimal.component.css']
})
export class NewAnimalComponent implements OnInit {
    age: Array<string> = []
    weight: number;
    animal: Animal;
    showDogSelection: boolean;
    showCatSelection: boolean;

    continue(){
        this.router.navigate(['/foodSelection']); // here "About" is path
    }
    chooseDog(){
        this.animal = Animal.Dog;
        this.showCatSelection = false;
        this.showDogSelection = true;
    }
    chooseCat(){
        this.animal = Animal.Cat;
        this.showDogSelection = false;
        this.showCatSelection = true;
    }
    constructor(private router: Router) { }

    ngOnInit() { }
}