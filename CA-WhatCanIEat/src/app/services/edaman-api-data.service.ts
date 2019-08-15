import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { product } from "../Components/edaman/Product";
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
@Injectable()
export class EdamanApiDataService {

  constructor(public http:Http) { 
    console.log('Edaman data service connected...');
  }
  getRecipe(){
    return this.http.get('https://api.edamam.com/search?q=' + (document.getElementById("search") as HTMLInputElement).value + '&app_id=f4d31e52&app_key=8a7e6d520af65d2a9a8632cbd8d107a1&from=0&to=3')
    .map(res =>res.json());
  }
  getProducten(): Observable<product[]> {
    return this.http.get('/api/Edaman/all')
      .map((response: Response) => <product[]>response.json());

  }
}
