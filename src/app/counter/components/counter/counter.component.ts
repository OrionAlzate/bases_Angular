import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl:'./counter.component.html',
  styleUrl: './counter.component.css'

})

export class CounterComponent {

  public title: string = "my counter";
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

  constructor(
  ) { }

}
