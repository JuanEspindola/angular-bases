import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character) {
    this.characters.push({ ...character, id: uuid() });
  }

  removeCharacter(index: number) {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
    const indexToRemove = this.characters.findIndex(
      (char: Character) => char.id === id
    );

    console.log(indexToRemove);
    if (indexToRemove > -1) {
      this.characters.splice(indexToRemove, 1);
    }
  }
}
