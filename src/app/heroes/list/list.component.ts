import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList : string[] = ['Spiderman', 'Ironman', 'Scartlett Witch', 'Hulk', 'Thor', 'Mario Bros']

  public deletedHero? : string;
  public heroAdded? : string;

  addHero() : void {

    let PromptHeroAdded : string | null = prompt('Ingrese el nombre de un Heroe', 'Deadpool') ;
    // let elementHtml  : string = document.getElementById('hero_input')!.innerHTML;
    if (PromptHeroAdded != null){
      // elementHtml = ``
      this.heroesList.push(PromptHeroAdded);
      this.heroAdded = PromptHeroAdded;
    }

  }

  deleteLastHero() : void {

    this.deletedHero = this.heroesList.pop();

  }

  get heroDeleted(){
    return this.deletedHero;
  }

  get lastHeroAdded(){
    return this.heroAdded;
  }

}
