import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
    templateUrl: './animals/animalChoice.component.html',
    styleUrls: ["./animals/animalChoice.component.css"]
})
export class AnimalChoiceComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
}