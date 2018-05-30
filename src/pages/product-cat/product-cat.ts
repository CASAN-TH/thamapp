import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { ProductListPage } from '../product-list/product-list';

/**
 * Generated class for the ProductCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-cat',
  templateUrl: 'product-cat.html',
})
export class ProductCatPage {

  categorylistData: {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService:CategoryServiceProvider) { 

    this.categoryService.list().then((data)=>{
      console.log(data);
      this.categorylistData=data;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCatPage');
  }
  categoryClick(list) {
    this.navCtrl.push(ProductListPage, { list: list });
  }
}
