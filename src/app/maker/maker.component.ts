import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CatQuery } from '../store/cat.query';
import { CatService } from '../store/cat.service';
import { Cat } from '../store/cat.store';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {
  title: string;
  form: FormGroup;  
  cats: Array<Cat>;
  changeId: number=0;


  constructor(private router: Router, private activateRoute: ActivatedRoute,private catQuery: CatQuery, private catService: CatService,private fb: FormBuilder) {
    this.cats = this.catQuery.getAll();
  }
  ngOnInit() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required]
    });

    this.title = 'Добавление кота';

    if (this.router.url !== '/add') {
      this.title = 'Изменение кота';
      this.changeId = this.activateRoute.snapshot.params['id'] - 1;

      this.form.patchValue({
        name: this.cats[this.changeId].name,
        description: this.cats[this.changeId].description,
        image: this.cats[this.changeId].image,
        liked: this.cats[this.changeId].liked
      })
    }

  }
  submit() {
    if (this.changeId) {
      let id=this.changeId+1;
      this.catService.edit({...this.form.value, id})
    } else {
      this.catService.add({ ...this.form.value });
    }
    this.router.navigate(['/tile']);
  }
}
