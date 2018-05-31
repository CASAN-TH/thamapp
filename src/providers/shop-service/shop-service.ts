import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShopServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopServiceProvider {

  constructor() {
    console.log('Hello ShopServiceProvider Provider');
  }
  async list(data) {
    console.log(data);
    return [
      {
        _id: '1',
        name: 'special foods',   
        typeshop: 'ร้านผัก',
        location: 'ลำลูกกา',
        img: 'https://fengshuiwin.com/wp-content/uploads/2017/06/NewArticle4.jpg'
      },
      {
        _id: '2',
        name: 'ฮวงจุ้ย',   
        typeshop: 'ขายของชำ',
        location: 'เยาวราช',
        img: 'https://fengshuiwin.com/wp-content/uploads/2017/06/HeadNewArticle1.jpg'
      },
      {
        _id: '3',
        name: 'ข้าวหน้าเนื้อ',   
        typeshop: 'foods',
        location: 'สาทร',
        img: 'https://www.bbblogr.com/wp-content/uploads/2016/07/tokyofronts5-694x960.jpg'
      },
      {
        _id: '4',
        name: 'finsbury',   
        typeshop: 'caffe',
        location: 'parakon',
        img: 'https://f.ptcdn.info/952/034/000/1440920702-IMG3090cop-o.jpg'
      },
      {
        _id: '5',
        name: 'สำนักกาแฟ',   
        typeshop: 'กาแฟ',
        location: 'เชียงใหม่',
        img: 'http://img.tarad.com/shop/m/mindwork/img-lib/spd_20071122172946_b.jpg'
      }

    ];
  }
}

