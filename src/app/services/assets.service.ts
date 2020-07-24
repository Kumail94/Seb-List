import { Injectable } from '@angular/core';
import { Assets } from '../model/assets';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  constructor() { }
  samsung1 = "/assets/images/samsungS1.png";
  samsung2 = "/assets/images/samsungS2.png";
  samsung3 = "/assets/images/samsungS3.png";


  assetService = new BehaviorSubject<Assets[]>([]);
  private assetsData: Assets[] = [
    new Assets(this.samsung1, this.samsung1.valueOf(), "", Date.now()),
    new Assets(this.samsung2, this.samsung2.valueOf(), "", Date.now()),
    new Assets(this.samsung3, this.samsung3.valueOf(), "", Date.now())
  ];
  getAssets() {
    this.assetsData.slice();
    this.assetService.next(this.assetsData.slice());
  }
  updateAssets(index: number, assets: Assets) {
    this.assetsData[index] = assets;
    this.assetService.next(this.assetsData.slice());

  }
  addAssets(asset: Assets) {
    this.assetsData.push(asset);
    this.assetService.next(this.assetsData.slice());
  }
  deleteAssets(index: number) {
    this.assetsData.splice(index);
    this.assetService.next(this.assetsData.slice());
  }
  findAssets(index: number) {
    this.assetsData[index];
    this.assetService.next(this.assetsData.slice());
  }
}
