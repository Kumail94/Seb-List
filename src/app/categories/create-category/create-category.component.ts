import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCategoryService } from 'src/app/services/create-category.service';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private _router: Router, private _createCategpry: CreateCategoryService) { }
  error: string;

  ngOnInit() {
  }
  onEntries() {
    this._router.navigate(['entries']);

  }
  onAssets() {
    this._router.navigate(['assets']);
  }
  onCategories() {
    this._router.navigate(['categories']);
  }
  onSubmit(form: NgForm) {
    const data = form.value;
    if (!form.valid) {
      return
    }
    const titleData = new Category(data.title);
    this._createCategpry.onAddCategories(titleData);
    //this.onSaved(titleData);
    this._router.navigate(['categories']);
    console.log("Add Categories:  ",this._createCategpry.onAddCategories(titleData));
  }

  // onSaved(data: Category) {
  //   this._createCategpry.onAddCategories(data);
  // }
}
