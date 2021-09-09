import { Component} from '@angular/core';
import {Cat} from '../catalog.service';
import { CatalogService } from '../catalog.service';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  cats: Array<Cat>;
  constructor(public catalogService: CatalogService){
    this.cats = this.catalogService.list();
  }
}