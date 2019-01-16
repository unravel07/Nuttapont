import { CartPage } from './../cart/cart';
import { Product } from './../../app/model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuyPage } from '../buy/buy';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //products= [];
  public products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }

  ionViewDidEnter() {
    this.http.get("http://localhost:5000/api/Shopping/GetProducts")
      .subscribe(data => {
        this.products = data;
        console.log("test");
      });
  }

  purchase(p: Product) {
    console.log(p);
    this.navCtrl.push(BuyPage, p);
  }


}
