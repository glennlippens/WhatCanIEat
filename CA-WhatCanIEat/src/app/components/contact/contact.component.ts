import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { authService } from "../../services/auth.service";
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  dietist = { Email: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined };
  sendMail = { From: undefined, To: undefined, Subject: undefined, Message: undefined };

  constructor(public router: Router, private _authService: authService, private _httpService: Http) { }

  ngOnInit() {
    switch (this._authService.Role) {
      case "Dietist": {
        this.router.navigate(['../login']);
        break;
      }
      case "Klant": {
         this._httpService.get('/api/contact/' + this._authService.Email)
          .map(res => res.json())
          .subscribe(data => {
            this.dietist.Email = data.email;
            this.dietist.AchterNaam = data.achterNaam;
            this.dietist.VoorNaam = data.voorNaam;
            this.dietist.Gsm = data.gsm;
          }); 
        break;
      }
      default: {
        this.router.navigate(['../login']);
        break;
      }
    }
    /*
    if (this._authService.Role == "Dietist") {
      this.router.navigate(['../login']);
    }

    else if ( this._authService.Role == "Klant") {

      this._httpService.get('/api/contact/' + this._authService.Email)
        .map(res => res.json())
        .subscribe(data => {
          this.dietist.Email = data.email;
          this.dietist.AchterNaam = data.achterNaam;
          this.dietist.VoorNaam = data.voorNaam;
          this.dietist.Gsm = data.gsm;
        });
    }
    else {
      this.router.navigate(['../login']);
    }
    */
  }
  onSubmit() {
    this.sendMail.From = this._authService.getMail();
    this.sendMail.To = this.dietist.Email;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/contact', JSON.stringify(this.sendMail), options)
      .map(res => res.json())
      .subscribe(data => {


      })
  }
}
