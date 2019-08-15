import { Component, OnInit } from '@angular/core';
import { klant } from './klanten';
import { KlantenService } from './klanten.service'
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { authService } from "../../services/auth.service";
import { RouterModule, Routes, Router } from '@angular/router';
declare var Role: string;

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css'],
  providers: [KlantenService]

})

export class KlantenComponent implements OnInit {
  constructor(private _klantenservice: KlantenService, private http: Http, private _httpService: Http, private _authService: authService, public router: Router) { }

  public deleteklant: boolean = false;
  public addklant: boolean = false;
  public editklant: boolean = false;
  mailvis: boolean = false;
  addbtn: boolean = false;

  public voornaam: any;
  public achternaam: any;
  public email: any;
  public gsm: any;
  public CostumerId: any;
  public Doelgroep: any;
  public DietistId: any;

  contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined };
  klanteditor = { addklant: this.addklant, editklant: this.editklant, deleteklant: this.deleteklant, Doelgroep: this.Doelgroep, DietisID: this.DietistId, CostumerId: this.CostumerId, voornaam: this.voornaam, achternaam: this.achternaam, email: this.email, gsm: this.gsm };
  klantdeleter = { addklant: this.addklant, editklant: this.editklant, CostumerId: this.CostumerId, deleteklant: this.deleteklant }
  klant: klant[];

  ngOnInit() {
    if (this._authService.Role != "Dietist") {
      this.router.navigate(['../restricted']);
    }
    else {
      this._klantenservice.getKlanten()
        .subscribe((klantData) => this.klant = klantData);
    }
  }
  addbutn() {
    this.addbtn = !this.addbtn;
  }
  mailplains() {
    this.mailvis = !this.mailvis;
  }
  //edit
  getuser(voornaam: any, achternaam: any, email: any, gsm: any, costumerid, Doelgroep: any, DietisID: any, ) {
    this.deleteklant = false;
    this.addklant = false;
    this.editklant = true;
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.email = email;
    this.gsm = gsm;
    this.CostumerId = costumerid;
    this.Doelgroep = Doelgroep;
    this.DietistId = DietisID;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.sendinfo();
    this.http.post('/api/Clientdbsave', JSON.stringify(this.klanteditor), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)

  }
  //add
  adduser(voornaam: any, achternaam: any, email: any, gsm: any, Doelgroep: any, DietisID: any, Passwoord: any) {
    this.deleteklant = false;
    this.addklant = true;
    this.editklant = false;

    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.email = email;
    this.gsm = gsm;
    this.Doelgroep = Doelgroep;
    this.DietistId = DietisID;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.sendinfo();
    this.http.post('/api/Clientdbsave', JSON.stringify(this.klanteditor), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)
  }
  //delete
  deleteuser(costumerid) {
    this.deleteklant = true;
    this.addklant = false;
    this.editklant = false;
    this.CostumerId = costumerid;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.delete();
    this.http.post('/api/Clientdbsave', JSON.stringify(this.klantdeleter), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)

  }

  sendMail() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/api/Client', JSON.stringify(this.contact), options).subscribe(() => {
      this.messageSend();
    });
  }

  private messageSend() {
    this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined };
  }
  private sendinfo() {

    this.klanteditor = { addklant: this.addklant, editklant: this.editklant, deleteklant: this.deleteklant, Doelgroep: this.Doelgroep, DietisID: this.DietistId, CostumerId: this.CostumerId, voornaam: this.voornaam, achternaam: this.achternaam, email: this.email, gsm: this.gsm };
  }
  private delete() {
    this.klantdeleter = { addklant: this.addklant, editklant: this.editklant, CostumerId: this.CostumerId, deleteklant: this.deleteklant }
  }
  private reload() {
    this._klantenservice.getKlanten()
      .subscribe((klantData) => this.klant = klantData);

  }
}
