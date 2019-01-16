import { ContactPage } from './../contact/contact';
import { Product, GlobalVariable, Cart } from './../../app/model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // name: string;
  // price: number;

  public product: Product = new Product();
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.product = new Product();
  }

  AddProduct() {
    this.http.post("http://localhost:5000/api/Shopping/AddItem", this.product)
      .subscribe(data => {
        console.log("test1");
      });
    
  }
}
// this.products.ProductName = this.name;
    // this.products.Price = this.price;
    // if (this.products.ProductName != null && this.products.Price != null) {
    //   this.http.post<Product>(GlobalVariable.host + "AddProduct", this.products)
    //     .subscribe(data => {
    //       this.navCtrl.push(ContactPage);
    //     });
    //   this.name = null;
    //   this.price = null;