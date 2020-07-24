import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
    providedIn: 'root'
})
export class CreateCategoryService {

    constructor() { }
    categories : Category[] = [];
    filteredData = new BehaviorSubject<Category[]>([]);
    createCategoryService = new BehaviorSubject<Category[]>([]);
    //categoryIndex = new BehaviorSubject<Number>(null);
    private data: Category[] = [
        new Category('Activity'),
        new Category('Places'),
        new Category('Places'),
        new Category('Foods'),
        new Category('Drinks')
    ];
   
    getCategories() {
        let data = this.data.slice();
        return this.createCategoryService.next(data);
    }
    onAddCategories(category : Category){
        this.data.push(category);
        return this.createCategoryService.next(this.data.slice());
    }
    finCategories(searchData){
      var data:any = this.categories.forEach(data => data.title === searchData);
      this.filteredData.next(data);
    }

}