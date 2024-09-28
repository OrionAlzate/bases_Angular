import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList : string[] = ['Spiderman', 'Ironman', 'Scartlett Witch', 'Hulk', 'Thor', 'Mario Bros']

  public deletedHero : string = "";
  addHero() : void {

    let heroAdded : string | null = prompt('Ingrese el nombre de un Heroe', 'Deadpool') ;
    // let elementHtml  : string = document.getElementById('hero_input')!.innerHTML;
    if (heroAdded != null){
      // elementHtml = ``
      this.heroesList.push(heroAdded);
    }

  }

  deleteHero() : void {

    if(this.heroesList.length > 0 ){
      this.deletedHero = this.heroesList.pop()!;
    }
  }

  get heroDeleted(){
    return this.deletedHero;
  }

}
