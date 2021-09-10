import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cat, CatalogService } from '../catalog/catalog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {
  title: string;
  form: FormGroup;
  cats: Array<Cat>;
  changeId: number;


  constructor(private router: Router, private activateRoute: ActivatedRoute, public catalogService: CatalogService, private fb: FormBuilder) {
    this.cats = this.catalogService.list();
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
        image: this.cats[this.changeId].image
      })
    }

  }
  submit() {
    if (this.changeId) {
      this.catalogService.edit(this.form.value, this.changeId)
    } else {
      this.catalogService.add({ ...this.form.value });
    }
    this.router.navigate(['/tile']);
  }
}
