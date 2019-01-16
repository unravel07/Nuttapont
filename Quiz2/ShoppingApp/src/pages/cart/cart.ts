import { Product, Cart } from './../../app/model';
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

  public cart :any;
  totalDis:Number = 0;
  totalP:Number = 0;
  product: Product = new Product();
  //public products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    //this.product.ProductName = this.navParams.data.productName;
    // this.product.Price = this.navParams.data.price;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ionViewDidEnter() {
    this.http.get("http://localhost:5000/api/Shopping/GetCarts")
      .subscribe(data => {
        this.cart = data;
        this.calDis();
        this.calPrice();
      });
  }

  calDis(){
    this.cart.forEach(element => {
      this.totalDis +=  element.totalDiscount;
    });
    console.log(this.totalDis);
  }
  calPrice(){
    this.cart.forEach(element => {
      this.totalP +=  element.totalPrice;
    });
    console.log(this.totalP);
    
  }
}
