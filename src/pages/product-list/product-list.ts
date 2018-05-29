import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productList = this.navParams.get('list');
    console.log(this.productList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

}
