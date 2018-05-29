import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdsserviceProvider } from '../../providers/adsservice/adsservice';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { AdsPage } from '../ads/ads';
import { ProductPage } from '../product/product';
import { ProductListPage } from '../product-list/product-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  adsData = [];
  productData = {};
  constructor(public navCtrl: NavController, private adsService: AdsserviceProvider, private productService: ProductServiceProvider) {
    this.adsService.list().then((data) => {
      console.log(data);
      this.adsData = data;
    }).catch((err) => {

    });

    this.productService.get().then((data) => {
      console.log(data);
      this.productData = data;
    })
  }
  adsClick(id) {
    console.log(id);
    this.navCtrl.push(AdsPage, { id: id });
  }
  productClick(item) {
    console.log(item);
    this.navCtrl.push(ProductPage, { item: item });
  }

  productListClick(list) {
    this.navCtrl.push(ProductListPage, { list: list });
  }
}
