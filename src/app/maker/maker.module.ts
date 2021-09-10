import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakerComponent } from './maker.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MakerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([   
      {path: '', component: MakerComponent}
    ])
  ],
  providers:[],
  bootstrap: [MakerComponent]
})
export class MakerModule { }
