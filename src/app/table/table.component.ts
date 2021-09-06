import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import {Cats} from '../app.component'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() cat: Cats;
  @Output() onChangeLike=new EventEmitter<Number>();
  ngOnInit(){}
  changeLike(id:number):void{
    this.onChangeLike.emit(id);
  }

}
