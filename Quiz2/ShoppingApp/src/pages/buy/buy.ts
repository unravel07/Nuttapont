import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product, Cart } from '../../app/model';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  product: Product = new Product();
  productCart: Cart = new Cart();
  name: string;
  price: number;
  amount: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // this.name = this.product.ProductName;
    // this.price = this.product.Price;
    this.product = this.navParams.get("p");
    
    //this.product = this.navParams.get("_product");
    // this.http.get<Product>(GlobalVariable.host + "GetProduct/" + this.product.id)
    //   .subscribe(data => {
    //     this.product = data;
    //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

}
