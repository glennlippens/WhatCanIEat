import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { ingredient } from './ingredient.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IgredientenService {

  constructor(private _http: Http) { }

  getAllIgredienten(): Observable<ingredient[]> {
    return this._http.get('/api/ingredient/all')
      .map((response: Response) => <ingredient[]>response.json());

  }
  getingredient(): Observable<ingredient[]> {
    return this._http.get('/api/ingredientdbsave/')
      .map((response: Response) => <ingredient[]>response.json());
  }

}
