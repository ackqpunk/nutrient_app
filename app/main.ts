// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { Component, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents, appRoutes } from "./app.routing";
import { Router } from "@angular/router"
import {SelectFoodComponent} from "./foods/selectFood.component";
import {FoodChoicesComponent} from "./foods/foodChoices.component";
import {FoodService } from "./services/food.service";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);



@NgModule({
    declarations: [AppComponent, appComponents, SelectFoodComponent, FoodChoicesComponent],
    bootstrap: [AppComponent],
    providers: [NativeScriptHttpModule, FoodService],
    imports: [NativeScriptHttpModule, NativeScriptFormsModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forRoot(appRoutes)],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);