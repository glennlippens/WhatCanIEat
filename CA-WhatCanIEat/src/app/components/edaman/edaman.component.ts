import { Component, OnInit, OnChanges } from '@angular/core';
import { EdamanApiDataService } from '../../services/edaman-api-data.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { product } from "../edaman/Product";

@Component({
  selector: 'app-edaman',
  templateUrl: './edaman.component.html',
  styleUrls: ['./edaman.component.css']
})
export class EdamanComponent implements OnInit {
  public name: string[];
  public healthLables: string[];
  public ingredients: string[];
  product: product[];
  public img: string[];
  http = undefined;
  contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };

  valuess: string[];


  constructor(private dataService: EdamanApiDataService, http: Http) {
    this.http = http;
  }

  ngOnInit() {


    this.dataService.getProducten()
      .subscribe((productdata) => {
        //console.log(productdata);

        this.product = productdata;

      });
  }

  searchRecipe() {

    this.dataService.getRecipe().subscribe((recipedata) => {
      this.name = recipedata.hits[0].recipe.label;
      this.healthLables = recipedata.hits[0].recipe.healthLabels;
      this.ingredients = recipedata.hits[0].recipe.ingredientLines;
      this.img = recipedata.hits[0].recipe.image;

      var converter = this.healthLables.join();
      var converter1 = this.ingredients.join();

      this.contact.Message = this.name;
      this.contact.Messagea = converter;
      this.contact.Messageb = converter1;

      console.log(this.product);
      console.log(recipedata);
      console.log(this.name);
      console.log(this.healthLables);

      document.getElementById('recipelist').style.display = "block";
      
    });

  }
  checker() {
    for (var i = 0; i < this.healthLables.length; i++) {
      if (this.healthLables[i] == "Sugar-Conscious") {
        console.log("hey");
      }
      else {
        console.log("geen hey");
      }
    }
  }

  getProduct() {
    this.checker();
    this.http.get('/api/Edaman/all')
      .map(res => res.json())
      .subscribe(data => {

        for (var i = 0; i < data.length; i++) {
          this.valuess = data[i].name;
          console.log(this.valuess);
        }
        if (this.valuess == this.name) {
          console.log('bestaat al');
          alert('bestaat al');

        }
        else if ((this.valuess !== this.name)) {
          this.onSubmit()
          alert('nieuw ingredient');
        }
      })
  }

  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/api/Edaman', JSON.stringify(this.contact), options).subscribe(() => {
      console.log(this.contact);
      this.messageSend();
      alert('mail send');
    });
  }
  private messageSend() {
    this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };
  }
}
