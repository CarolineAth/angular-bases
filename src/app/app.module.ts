import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';



@NgModule({
  declarations: [
    AppComponent, //se debe de declarar

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//El módulo sería una clase que tiene un decorador, y en sí mismo es un
//agrupador, encapsula una funcionalidad, que si necesito compartirla me facilite
//la existencia y me proteja el módulo del mundo exterior
