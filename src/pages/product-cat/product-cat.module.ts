import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCatPage } from './product-cat';

@NgModule({
  declarations: [
    ProductCatPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCatPage),
  ],
})
export class ProductCatPageModule {}
