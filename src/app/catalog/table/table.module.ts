import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
@NgModule({
  declarations:[
    TableComponent
  ], imports:[
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TableComponent
      }
    ])
  ],
  providers:[],
  bootstrap: [TableComponent]
})
export class TableModule{

}