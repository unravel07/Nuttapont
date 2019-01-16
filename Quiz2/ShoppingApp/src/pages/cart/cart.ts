import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../app/model';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public cart: any;
  //public products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ionViewDidEnter() {
    this.http.get("http://localhost:5000/api/Shopping/GetProducts")
      .subscribe(data => {
        this.cart = data;
        console.log("test");
      });
  }

}
