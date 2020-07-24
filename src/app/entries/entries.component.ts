import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../services/assets.service';
import { Assets } from '../model/assets';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  constructor(private _router: Router,private _assetService: AssetsService) { }

  assets : Assets[] =[];
  ngOnInit() {
    this._assetService.assetService.subscribe((response : Assets[]) => {
      this.assets = response;
      this._assetService.getAssets();
    })
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
  onNewEntry(){
    this._router.navigate(['new-entry']);
  }
}
