import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <div class="myContainer">
    <h3>{{title}}</h3>

    <p>Counter: {{counter}}</p>

    <button class="btn" (click)="increaseBy(-1)">-1</button>
    <button class="btn" (click)="resetCounter()">Reset</button>
    <button class="btn" (click)="increaseBy(1)">+1</button>

  </div>
  <br>

  `,
  styles: [`
    .btn{
      padding : 10px;
      background: black;
      color: white;
      border: 2px solid #98eb34;
      border-radius: 5px;
      margin : auto 2px;

    }
    .myContainer{
      width: 450px;
      border: 2px solid #34c3eb;
      padding : 10px;
      border-radius: 5px;

    }
  `]
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
