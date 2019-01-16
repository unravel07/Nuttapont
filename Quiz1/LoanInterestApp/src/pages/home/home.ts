import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loan = new Loan;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  onClick() {
    this.http.get("https://localhost:5001/api/Loan");
  }
}
