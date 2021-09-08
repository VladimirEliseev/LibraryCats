import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TableComponent } from './catalog/table/table.component';
import { TileComponent } from './catalog/tile/tile.component';

const appRoutes: Routes = [
  {
    path: '', component: CatalogComponent,
    children: [
      { path: '', component: TileComponent },
      { path: 'table', component: TableComponent },
      { path: 'tile', component: TileComponent }
    ]
  },

];

@NgModule({
  declarations: [
    CatalogComponent,
    AppComponent,
    TileComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
