import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
@NgModule({
  declarations:[
    TileComponent
  ], imports:[
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TileComponent
      }
    ])
  ],
  providers:[],
  bootstrap: [TileComponent]
})
export class TileModule{

}