import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { authService } from "../../services/auth.service";
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  getIng = { Email: undefined, Naam: undefined };
  mainIng = { Naam: undefined, Value: undefined, Doelgroep: undefined, Max: undefined};
  subIng = { Naam: undefined, Value: undefined, Doelgroep: undefined, Max: undefined};



  constructor(private _httpService: Http, public router: Router, private _authService: authService) { }

  ngOnInit() {
    if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
      this.getIng.Email = this._authService.getMail();
    }
    else {
      this.router.navigate(['../login']);
    }
  }
  getIngredient() {
    document.getElementById('vervangIngredient_panel').style.display = "none";
    document.getElementById('ingredient_panel').style.display = "none";

    this.getIng.Naam = (document.getElementById("inputIgn") as HTMLInputElement).value;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/ingredient', JSON.stringify(this.getIng), options)
      .map(res => res.json())
      .subscribe(data => {
       
        this.mainIng.Naam = data[0].naam;
        this.mainIng.Value = data[0].value;
        this.mainIng.Doelgroep = data[0].doelgroep;
        this.mainIng.Max = data[0].max;
 
        this.subIng.Naam = data[1].naam;
        this.subIng.Value = data[1].value;
        this.subIng.Doelgroep = data[1].doelgroep;
        this.subIng.Max = data[1].max;

        document.getElementById('vervangIngredient_panel').style.display = "none";
        document.getElementById('ingredient_panel').style.display = "block";

      })
  }
  getVervangIngredient() {
    document.getElementById('vervangIngredient_panel').style.display = "none";

    this.getIng.Naam = (document.getElementById("inputIgn") as HTMLInputElement).value;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/ingredient', JSON.stringify(this.getIng), options)
      .map(res => res.json())
      .subscribe(data => {

        this.mainIng.Naam = data[0].naam;
        this.mainIng.Value = data[0].value;
        this.mainIng.Doelgroep = data[0].doelgroep;
        this.mainIng.Max = data[0].max;

        this.subIng.Naam = data[1].naam;
        this.subIng.Value = data[1].value;
        this.subIng.Doelgroep = data[1].doelgroep;
        this.subIng.Max = data[1].max;

        document.getElementById('vervangIngredient_panel').style.display = "block";

      })
  }
}
