import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList : string[] = ['Spiderman', 'Ironman', 'Scartlett Witch', 'Hulk', 'Thor', 'Mario Bros']


  addHero() : void {

    let heroAdded : string | null = prompt('Ingrese el nombre de un Heroe', 'Deadpool') ;
    // let elementHtml  : string = document.getElementById('hero_input')!.innerHTML;
    if (heroAdded != null){
      // elementHtml = ``
      this.heroesList.push(heroAdded);
    }

  }

  deleteHero() : void {
      this.heroesList.pop();
  }
}
