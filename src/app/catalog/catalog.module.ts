import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { CatalogService } from './catalog.service';
import { MakerModule } from '../maker/maker.module';
@NgModule({
  declarations: [
    CatalogComponent
  ], imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'tile', component: CatalogComponent, loadChildren: () => import('./tile/tile.module').then(m => m.TileModule) },
      { path: 'table', component: CatalogComponent, loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'add', loadChildren: () => import('../maker/maker.module').then(m => m.MakerModule) },
      { path: 'edit/:id', loadChildren: () => import('../maker/maker.module').then(m => m.MakerModule) },
      { path: '', redirectTo: 'tile', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [CatalogService],
  bootstrap: [CatalogComponent]
})
export class CatalogModule {

}