import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule ({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]

}) //para que sea un módulo de angular
export class CounterModule{

}
