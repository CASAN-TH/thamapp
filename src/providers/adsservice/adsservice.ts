import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AdsserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdsserviceProvider {

  constructor() {
    console.log('Hello AdsserviceProvider Provider');
  }

  async list() {
    return [{
      _id: '1',
      img: 'https://medthai.com/wp-content/uploads/2014/07/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%891.jpg'
    },
    {
      _id: '2',
      img: 'https://www.dekthaidd.com/FileUpload/imgUpload/images/20170801_knowledge.jpg'
    }];
  }
}
