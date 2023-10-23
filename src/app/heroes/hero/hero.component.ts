import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{ //si pongo private no podré utilizarlo porque técnicamente el html está fuera de la clase(en el decorador)
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman"
  }

  changeAge():void{
    this.age = 25 ;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
