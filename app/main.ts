// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { Component, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents, appRoutes } from "./app.routing";
import { Router } from "@angular/router"



@NgModule({
    declarations: [AppComponent, appComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forRoot(appRoutes)],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);