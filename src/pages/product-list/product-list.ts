import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

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
  keyword: string;
  productList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductServiceProvider) {
    this.keyword = this.navParams.get('list');
    console.log(this.keyword);
  }

  ionViewDidLoad() {
    this.productService.list(this.keyword).then((data) => {
      this.productList = data;
    })

  }

}
