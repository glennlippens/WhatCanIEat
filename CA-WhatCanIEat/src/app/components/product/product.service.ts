import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { product } from './product.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProducten(): Observable<product[]> {
    return this._http.get('/api/Productdbsave/')
      .map((response: Response) => <product[]>response.json());


  }
}
