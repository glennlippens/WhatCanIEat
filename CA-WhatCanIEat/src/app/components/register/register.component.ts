import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { authService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm = { Email: undefined, Password: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined, Doelgroep: undefined, DietisEmail: undefined };
  constructor(private _httpService: Http, private _authService: authService) { }

  ngOnInit() {
  }
  onSubmit() {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/register', JSON.stringify(this.RegisterForm), options)
      .map(res => res.json())
      .subscribe(data => {
        this._authService.setMail(data[0]);
        this._authService.setRole(data[1]);
        this._authService.setfirstName(data[2]);

      })
  }
}
