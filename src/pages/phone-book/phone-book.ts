import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  contactArray = [{name: 'bee', telephone: '0934588991',imageUrl: 'assets/imgs/000.jpg'}
                 ,{name: 'cee', telephone: '0934588991',imageUrl: 'assets/imgs/111.jpg'}
                 ,{name: 'dee', telephone: '0934588991',imageUrl: 'assets/imgs/222.jpg'}
                 ,{name: 'fee', telephone: '0934588991',imageUrl: 'assets/imgs/555.jpg'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }
}//end class
