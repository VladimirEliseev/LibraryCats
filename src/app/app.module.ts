import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';

const appRoutes: Routes = [
  {
    path: '', loadChildren: ()=>import('./catalog/catalog.module').then(m=>m.CatalogModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
