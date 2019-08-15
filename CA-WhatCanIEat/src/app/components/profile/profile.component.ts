import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { authService } from "../../services/auth.service";
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  RegisterForm = { Email: undefined, Password: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined, Doelgroep: undefined, DietisEmail: undefined };

  constructor(public router: Router, private _authService: authService, private _httpService: Http) { }

  ngOnInit() {
    if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {

      this._httpService.get('/api/profile/' + this._authService.Email)
        .map(res => res.json())
        .subscribe(data => {
          this.RegisterForm.Email = data.email;
          this.RegisterForm.AchterNaam = data.achterNaam;
          this.RegisterForm.VoorNaam = data.voorNaam;
          this.RegisterForm.Gsm = data.gsm;
          this.RegisterForm.Doelgroep = data.doelgroep;
          this.RegisterForm.DietisEmail = data.dietisEmail;


        });
    }
    else {
      this.router.navigate(['../login']);
    }
  }
  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/profile', JSON.stringify(this.RegisterForm), options)
      .map(res => res.json())
      .subscribe(data => {


      })
  }
}
