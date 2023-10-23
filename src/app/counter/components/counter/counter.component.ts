import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
}) //Si creo un componente, necesita un template


export class CounterComponent {
  public counter: number = 10;

  public resetCounter(){
    this.counter =10;
  }

  public increaseBy(value:number): void {
    this.counter += value;
  }
}

