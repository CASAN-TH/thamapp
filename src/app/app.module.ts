import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShopPage } from '../pages/shop/shop';
import { MePage } from '../pages/me/me';
import { ProductPage } from '../pages/product/product';
import { AdsserviceProvider } from '../providers/adsservice/adsservice';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { AdsPage } from '../pages/ads/ads';
import { ProductProvider } from '../providers/product/product';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductCatPage } from '../pages/product-cat/product-cat';
import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { ShopServiceProvider } from '../providers/shop-service/shop-service';
import { ShopListPage } from '../pages/shop-list/shop-list';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    MePage,
    ProductPage,
    AdsPage,
    ProductListPage,
    ProductCatPage,
    ShopListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    MePage,
    ProductPage,
    AdsPage,
    ProductListPage,
    ProductCatPage,
    ShopListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdsserviceProvider,
    ProductServiceProvider,
    ProductProvider,
    CategoryServiceProvider,
    ShopServiceProvider
  ]
})
export class AppModule {}
