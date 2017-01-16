import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
    templateUrl: 'splashScreen.component.html',
    styleUrls: ["splashScreen.component.css"]
})
export class SplashScreenComponent {
    router: Router;
    constructor(private _router: Router){
        this.router = _router;
    }

    public get message(): string {
        return "Sed quis enim eu felis laoreet dictum. Quisque dictum massa eu hendrerit porttitor. Etiam dolor leo, semper et nisl at, blandit mollis est. Donec suscipit bibendum mi sit amet suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    }
    
    public onTap() {
        this.router.navigate(["animalChoice"]);
    }
}