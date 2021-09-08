import { Component,EventEmitter, Input, Output } from '@angular/core';
import {Cat} from '../catalog.service'
import { CatalogService } from '../catalog.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  cats: Array<Cat>;

  constructor(public catalogService: CatalogService) {
    this.cats = this.catalogService.list();
  }
}
