import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { klant } from './klanten';
import { Observable } from 'rxjs/Observable';
import { authService } from "../../services/auth.service";


@Injectable()
export class KlantenService {

  constructor(private _http: Http, private _authService: authService) { }
  
  getKlanten(): Observable<klant[]> {
    return this._http.get('/api/Client/' + this._authService.Email)
      .map((response: Response) => <klant[]>response.json());


  }
}

