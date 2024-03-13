import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() idToRemove: EventEmitter<string> = new EventEmitter()
  @Input('personajes')
  public charactersList: Character[] = [
   /*  {
      name: 'Trunks',
      power: 10,
    }, */
  ];

  removeCharacter(id: string){
    this.idToRemove.emit(id)
  }
}
