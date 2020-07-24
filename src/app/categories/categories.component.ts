import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCategoryService } from '../services/create-category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _router: Router, private _createCategpry: CreateCategoryService) { }

  categories: Category[] = [];
   serachData: string;
  ngOnInit() {
    this._createCategpry.getCategories();
    this._createCategpry.createCategoryService.subscribe((response: Category[]) => {
      this.categories = response;
      console.log("Categories Response:  ", response);
    });
   
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
  onCreateCategory() {
    this._router.navigate(['new-category']);
  }
  onSerach() {
    this._createCategpry.finCategories(this.serachData);
    this._createCategpry.filteredData.subscribe((response : Category[])=> {
      this.categories = response;
      console.log("filtered Data: " , this.categories);
    });
   
    
  }
}
