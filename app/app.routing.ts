import { AnimalChoiceComponent } from "./animals/animalChoice.component";
import { NewAnimalComponent } from "./animals/newAnimal.component";
import { SplashScreenComponent } from "./splashScreen.component";
import { FoodSelectionContainerComponent } from "./foods/foodSelectionContainer.component";

export const appRoutes: any = [
    { path: "", redirectTo: "/splashScreen", pathMatch: "full" },
    { path: "splashScreen", component: SplashScreenComponent },
    { path: "animalChoice", component: AnimalChoiceComponent },
    { path: "newAnimal", component: NewAnimalComponent },
    { path: "foodSelection", component: FoodSelectionContainerComponent }
];
 
export const appComponents: any = [
    AnimalChoiceComponent,
    NewAnimalComponent,
    SplashScreenComponent,
    FoodSelectionContainerComponent
];