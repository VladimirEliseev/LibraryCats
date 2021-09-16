import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Injectable } from '@angular/core';

export interface Cat {
  id: number,
  image: string,
  name: string,
  description: string,
  liked: boolean
}
export interface ShowState extends EntityState<Cat, string> {
  cat: Array<Cat>
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'cat' })
export class CatStore extends EntityStore<ShowState>{
 
  constructor() {
    super();
  }
}