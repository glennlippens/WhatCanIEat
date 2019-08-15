import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { authService } from '../../services/auth.service';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  LoginForm = { Email: undefined, Password: undefined };
  valuessss: string;
  valuesss: string;

  constructor(private _httpService: Http, private _authService: authService, public router: Router) { }

  ngOnInit() {
    if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
    }
    else {
      document.getElementById('restriction_notice').style.display = "block";
    }
  }

  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/login', JSON.stringify(this.LoginForm), options)
      .map(res => res.json())
      .subscribe(data => {
        this._authService.setMail(data[0]);
        this._authService.setRole(data[1]);
        this._authService.setfirstName(data[2]);


      })
    this.router.navigate(['../']);
    /*
    if (this._authService.Role == "Dietist") {
      parent.document.getElementById('dietist_only_klanten').style.display = "block";
      parent.document.getElementById('dietist_only_ingredient').style.display = "block";
      parent.document.getElementById('dietist_only_product').style.display = "block";
    }
    else {
      parent.document.getElementById('dietist_only_klanten').style.display = "none";
      parent.document.getElementById('dietist_only_ingredient').style.display = "none";
      parent.document.getElementById('dietist_only_product').style.display = "none";
    }
    */
  }
}

