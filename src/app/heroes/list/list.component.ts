import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Wolverine', 'Thor'];
  deletedHero: string | undefined = '';

  deleteLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
