import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cats } from '../app.component'
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() cat: Cats;
  @Output() onChangeLike = new EventEmitter<Number>();

  changeLike(id: number): void {
    this.onChangeLike.emit(id);
  }
}