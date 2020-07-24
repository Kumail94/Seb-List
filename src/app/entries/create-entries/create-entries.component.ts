import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { AssetsService } from 'src/app/services/assets.service';
import { Assets } from 'src/app/model/assets';
import { Category } from 'src/app/model/category';
import { CreateCategoryService } from 'src/app/services/create-category.service';

@Component({
  selector: 'app-create-entries',
  templateUrl: './create-entries.component.html',
  styleUrls: ['./create-entries.component.css']
})
export class CreateEntriesComponent implements OnInit {
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  constructor(private _router: Router, private mScrollbarService: MalihuScrollbarService, private _assetService: AssetsService, private _createCategpry: CreateCategoryService) { }
  assets: Assets[] = [];
  categories: Category[] = [];
  cardLocation = false;
  cardImage = false;
  ngOnInit() {
    this._assetService.assetService.subscribe((response: Assets[]) => {
      this.assets = response;
      console.log("Assets Component = ", this.assets);
    });
    this._assetService.getAssets();
    this._createCategpry.getCategories();
    this._createCategpry.createCategoryService.subscribe((response: Category[]) => {
      this.categories = response;
      console.log("Categories Response:  ", response);
    });

  }
  ngAfterViewInit() {
    this.mScrollbarService.initScrollbar('#myElementId', { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } });
  }
  ngOnDestroy() {
    this.mScrollbarService.destroy('#myElementId');
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

  onAddCategory() {
    this._router.navigate(['categories']);
  }
  onImageCard(){
    this.cardImage = !this.cardImage;
  }
  onLocationCard(){
    this.cardLocation = !this.cardLocation;
  }

}