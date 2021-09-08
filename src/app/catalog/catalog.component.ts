import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Cat} from './catalog.service'
import { CatalogService } from './catalog.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [CatalogService]
})
export class CatalogComponent {

  isTile: boolean=true;

  constructor(public catalogService: CatalogService) {
    this.isTile=this.catalogService.choice();
  }

}
