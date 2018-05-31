import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { MePage } from '../me/me';
import { ProductPage } from '../product/product';
import { ProductCatPage } from '../product-cat/product-cat';
import { ShopListPage } from '../shop-list/shop-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductCatPage;
  tab3Root = ShopListPage;
  tab4Root = MePage;
  

  constructor() {

  }
}
