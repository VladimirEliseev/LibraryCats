import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CatQuery } from 'src/app/store/cat.query';
import { CatService } from 'src/app/store/cat.service';
import { Cat } from 'src/app/store/cat.store';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  cats$: Observable<Cat[]>;
  constructor(private catQuery: CatQuery, private catService: CatService){
    this.cats$ = this.catQuery.selectAll();
  }
  ngOnInit(){
  }
  liked(cat: Cat){
    let liked=!cat.liked;
    this.catService.edit({...cat, liked})
  }
}
