import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public initialName = "super man"
  public name : string = this.initialName;
  public nameCap : string = this.name.toUpperCase();
  initialAge: number = 45;
  public age : number = this.initialAge;
  public updatedAge : number = 30;
  public updatedName : string = "Sayaman";


  get captName():string{
    return this.name.toUpperCase();

  }

  printName(word : string):void{
    console.log(word)
  }


  get heroDescription():string{
    return `${this.name} - ${this.age}`
  }

  getMethodName():string{
    return `${this.age * 2}`
  }

  changeHero():void{
    this.name = this.updatedName
  }

  changeAge():void{
    this.age = this.updatedAge
  }

  changeForm() {
    this.name = this.initialName
    this.age = this.initialAge

    // const selector = document.getElementById('title_hero');
    // selector!.innerHTML = "Reseteo el nombre de la app"


    // document.querySelectorAll('h1').forEach( element => {
    //   element.innerHTML= "Desde Angular";
    // })

  }



}
