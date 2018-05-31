import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopServiceProvider } from '../../providers/shop-service/shop-service';
import { ShopPage } from '../shop/shop';

/**
 * Generated class for the ShopListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {

  shopData: {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopService: ShopServiceProvider) {
    this.shopService.list('data').then((data) => {
      console.log(data);
      this.shopData = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopListPage');
  }
  shopClick() {
    this.navCtrl.push(ShopPage);
  }
}
