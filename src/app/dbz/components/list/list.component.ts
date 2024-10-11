import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class DBZListComponent {

  @Output()
  public indexCharacterEmiter : EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList : Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  onDeleteCharacter (index : number) : void {
    // console.log(index)
    this.indexCharacterEmiter.emit(index)
  }

 }
