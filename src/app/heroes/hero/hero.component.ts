import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "super man";
  public nameCap : string = this.name.toUpperCase();
  public age : number = 45;


  get captName():string{
    return this.name.toUpperCase();

  }

  printName(word : string):void{
    console.log(word)
  }


}
