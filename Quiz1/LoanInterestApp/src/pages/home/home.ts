import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public loan: Loan = new Loan();
  public interest: Number;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //this.loan = new Loan();
  }

  setRate() {
    this.navCtrl.push(ContactPage, this.interest)
  }
}
