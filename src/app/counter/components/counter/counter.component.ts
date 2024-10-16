import { Component } from '@angular/core';
//component es un decorador que transforma mi clase en un component
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }
  public resetCounter(): void {
    this.counter = 10;
  }
}
