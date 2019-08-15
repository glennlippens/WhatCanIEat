import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { ingredient } from '../models/ingredient.model';
import { RouterModule, Routes, Router } from '@angular/router';
import { authService } from "./services/auth.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http, public router: Router, private _authService: authService) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['../login']);
    location.reload();
  }
}
