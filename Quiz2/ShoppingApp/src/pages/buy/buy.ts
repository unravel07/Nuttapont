import { Product } from './../../app/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../../app/model';
import { CartPage } from '../cart/cart';

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
  amountCart: number;
  public products: any;
  public amount:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // this.name = this.product.ProductName;
    // this.price = this.product.Price;
    this.product.ProductName = this.navParams.data.productName;
    this.product.Price = this.navParams.data.price;
    console.log(this.navParams.data);

    console.log(this.navParams.data.Price);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }
  AddCart() {
    console.log("mick");
      // this.productCart.Product = this.product;
      // this.productCart.Amount = this.amountCart;

    this.http.post("http://localhost:5000/api/Shopping/AddOrder", {
      Product: {
        ProductName: this.product.ProductName,
        Price: this.product.Price
      },
      Amount: this.amount,
    })
      .subscribe(data => {
        this.navCtrl.push(CartPage);
      });


  }

}
