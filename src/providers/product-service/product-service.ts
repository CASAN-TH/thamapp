import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor() {
    console.log('Hello ProductServiceProvider Provider');
  }
  async get() {
    return {
      raccomments: [
        {
          _id: '1',
          img: 'http://www.nooknan.com/wp-content/uploads/2017/10/M_172-1461754024.jpg',
          raccommented: true,
          name: 'ผักกาดขาว',
          unitprice: 90,
          unitname: 'แพ็ค'
        },
        {
          _id: '2',
          img: 'http://s.isanook.com/me/0/ud/0/1751/tomato.jpg',
          raccommented: true,
          name: 'มะเขือเทศ',
          unitprice: 90,
          unitname: 'แพ็ค'
        },
        {
          _id: '3',
          img: 'https://www.organicbook.com/wp-content/uploads/2017/04/%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-300x199.jpg',
          raccommented: true,
          name: 'มะเขือม่วง',
          unitprice: 90,
          unitname: 'แพ็ค'
        }
      ],
      productNews: [
        {
          _id: '1',
          img: 'http://sukkaphap-d.com/wp-content/uploads/2016/10/sweet-pepper.jpg',
          raccommented: true,
          name: 'พริกหวาน',
          unitprice: 90,
          unitname: 'แพ็ค'
        },
        {
          _id: '2',
          img: 'http://1.bp.blogspot.com/-Gle_1mXeZbo/U-m8-wa3UgI/AAAAAAAAFoo/bsOpFIPz-JI/s1600/Passion-fruit-scoopfw600.gif',
          raccommented: true,
          name: 'เสาวรส',
          unitprice: 90,
          unitname: 'แพ็ค'
        },
        {
          _id: '3',
          img: 'http://www.yesspathailand.com/images/column_1265536602/Strawberry-1.jpg',
          raccommented: true,
          name: 'สตรอเบอรี่',
          unitprice: 90,
          unitname: 'แพ็ค'
        }
      ]
    }
  }
}
