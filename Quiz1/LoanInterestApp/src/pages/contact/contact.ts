import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Loan } from '../../app/model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public loan = new Loan();
  public getloan: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getAllLoan();
  }

  CalLoan() {
    this.loan.interestRate = this.navParams.data;
    this.http.post("https://localhost:5001/api/Loan/CalculateLoan", this.loan).subscribe(data => {
      this.getAllLoan();
    });
  }

  getAllLoan() {
    this.http.get("https://localhost:5001/api/Loan/Get")
      .subscribe(data => {
        this.getloan = data
        console.log(this.getloan)
      });
  }


}
