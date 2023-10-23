import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";


@NgModule ({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule,
  ]
}) //para que sea un módulo de angular
export class HeroesModule { }
