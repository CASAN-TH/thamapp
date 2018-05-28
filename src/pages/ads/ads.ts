import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {

  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdsPage');
  }

}
