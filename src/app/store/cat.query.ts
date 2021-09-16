import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { Cat, CatStore, ShowState } from "./cat.store";


@Injectable({ providedIn: 'root' })

export class CatQuery extends QueryEntity<ShowState>{
 
  constructor(private catStore: CatStore) {
    super(catStore)
  }
  selectCat$=this.select(state=>state.Cat)
}