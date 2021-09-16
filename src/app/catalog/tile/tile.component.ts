import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatQuery } from 'src/app/store/cat.query';
import { CatService } from 'src/app/store/cat.service';
import { Cat } from 'src/app/store/cat.store';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  cats$: Observable<Cat[]>;
  constructor(private catQuery: CatQuery, private catService: CatService) {
    this.cats$ = this.catQuery.selectAll();
  }
  ngOnInit() {
  }
  liked(cat: Cat) {
    let liked = !cat.liked;
    this.catService.edit({ ...cat, liked })
  }
}