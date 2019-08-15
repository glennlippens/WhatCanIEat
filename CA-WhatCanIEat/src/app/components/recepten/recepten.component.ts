import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { authService } from "../../services/auth.service";
import { EdamanApiDataService } from '../../services/edaman-api-data.service';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { product } from "../recepten/product.model";
import { ingredient } from '../ingredienten/ingredient.model';

@Component({
  selector: 'app-recepten',
  templateUrl: './recepten.component.html',
  styleUrls: ['./recepten.component.css']
})
export class ReceptenComponent implements OnInit {

  public name_edaman: string[];
  public healthLables_edaman: string[];
  public ingredients_edaman: string[];
  public img_edaman: string[];
  ingredienten: ingredient[];

  public alcohol_free: boolean;
  public celery_free: boolean;
  public crustacean_free: boolean;
  public dairy_free: boolean;
  public egg_free: boolean;
  public fish_free: boolean;
  public gluten_free: boolean;
  public kidney_friendly: boolean;
  public kosher: boolean;
  public low_potassium: boolean;
  public lupine_free: boolean;
  public low_fat_abs: boolean;
  public mustard_free: boolean;
  public no_oil_added: boolean;
  public low_sugar: boolean;
  public paleo: boolean;
  public peanut_free: boolean;
  public pecatarian: boolean;
  public pork_free: boolean;
  public red_meat_free: boolean;
  public sesame_free: boolean;
  public shellfish_free: boolean;
  public soy_free: boolean;
  public sugar_conscious: boolean;
  public tree_nut_free: boolean;
  public vegan: boolean;
  public vegetarian: boolean;
  public wheat_free: boolean;

  public Alcohol_free: string;
  public Celery_free: string;
  public Crustacean_free: string;
  public Dairy_free: string;
  public Egg_free: string;
  public Fish_free: string;
  public Gluten_free: string;
  public Kidney_friendly: string;
  public Kosher: string;
  public Low_potassium: string;
  public Lupine_free: string;
  public Low_fat_abs: string;
  public Mustard_free: string;
  public No_oil_added: string;
  public Low_sugar: string;
  public Paleo: string;
  public Peanut_free: string;
  public Pecatarian: string;
  public Pork_free: string;
  public Red_meat_free: string;
  public Sesame_free: string;
  public Shellfish_free: string;
  public Soy_free: string;
  public Sugar_conscious: string;
  public Tree_nut_free: string;
  public Vegan: string;
  public Vegetarian: string;
  public Wheat_free: string;

  public name_db: string;
  public healthLables_db: boolean[];
  public ingredients_db: string[];
  public true_healthLables_db: string;
  public img_db: string;

  public Forbidden_Recipe_Pregnant: boolean;
  public avoid_Recipe_Pregnant: boolean;
  public InDatabase: boolean;

  product: product[];
  http = undefined;
  contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };
  getIng = { Email: undefined, Naam: undefined, Healthlabels: undefined, Ingredients: undefined, ImageUrl: undefined };
  valuess: string[];

  constructor(public router: Router, private _authService: authService, private dataService: EdamanApiDataService, private _httpService: Http) { }

  ngOnInit() {
    if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
      //this.dataService.getProducten()
      //  .subscribe((productdata) => {
      //    this.product = productdata;
      //  });
    }
    else {
      this.router.navigate(['../login']);
    }
  }

  searchRecipe() {

  document.getElementById('loading').style.display = "block";
  document.getElementById('recipelist_edaman').style.display = "none";
  document.getElementById('recipelist_db').style.display = "none";
  document.getElementById('pregnant_avoid').style.display = "none";
  document.getElementById('pregnant_warning').style.display = "none";
  document.getElementById('pregnant_approved').style.display = "none";
  document.getElementById('ingredient_button').style.display = "block";
  document.getElementById('ingredient_list').style.display = "none"; 

  this.dataService.getRecipe().subscribe((recipedata) => {
    
      this.name_edaman = recipedata.hits[0].recipe.label;
      this.healthLables_edaman = recipedata.hits[0].recipe.healthLabels;
      this.ingredients_edaman = recipedata.hits[0].recipe.ingredientLines; 
      this.img_edaman = recipedata.hits[0].recipe.image;

      //var converter = this.healthLables_edaman.join();
      //var converter1 = this.ingredients_edaman.join();
      console.log(recipedata);

     // this.contact.Message = this.name_edaman;
      //this.contact.Messagea = converter;
     // this.contact.Messageb = converter1;

      this.getIng.Email = this._authService.getMail();
      this.getIng.Naam = (document.getElementById("search") as HTMLInputElement).value;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this._httpService.post('/api/Edaman', JSON.stringify(this.getIng), options)
        .map(res => res.json())
        .subscribe(data => {
          if (data == "does not exist") {
            this._httpService.post('/api/NewIngredient', JSON.stringify(this.ingredients_edaman), options)
              .map(res => res.json())
              .subscribe(data => { });
            document.getElementById('loading').style.display = "none";
            document.getElementById('recipelist_edaman').style.display = "block";
          }
          else if(data != "does not exist") {
            this.name_db = data.name;
            this.img_db = data.imageUrl;            
            this.alcohol_free =  data.alcohol_free;
            this.celery_free = data.celery_free;
            this.crustacean_free = data.crustacean_free;
            this.dairy_free = data.dairy_free;
            this.egg_free = data.egg_free;
            this.fish_free = data.fish_free;
            this.gluten_free = data.gluten_free;
            this.kidney_friendly = data.kidney_friendly;
            this.kosher = data.kosher;
            this.low_potassium = data.low_potassium;
            this.lupine_free = data.lupine_free;
            this.low_fat_abs = data.low_fat_abs;
            this.mustard_free = data.mustard_free;
            this.no_oil_added = data.no_oil_added;
            this.low_sugar = data.low_sugar;
            this.paleo = data.paleo;
            this.peanut_free = data.peanut_free;
            this.pecatarian = data.pecatarian;
            this.pork_free = data.pork_free;
            this.red_meat_free = data.red_meat_free;
            this.sesame_free = data.sesame_free;
            this.shellfish_free = data.shellfish_free;
            this.soy_free = data.soy_free;
            this.sugar_conscious = data.sugar_conscious;
            this.tree_nut_free = data.tree_nut_free;
            this.vegan = data.vegan;
            this.vegetarian = data.vegetarian;
            this.wheat_free = data.wheat_free;

            if (this.alcohol_free == true) { this.Alcohol_free = "alcohol_free,"; } else { this.Alcohol_free = ""; this.Forbidden_Recipe_Pregnant = true;}
            if (this.celery_free == true) { this.Celery_free = "celery_free,"; } else { this.Celery_free = ""; }
            if (this.crustacean_free == true) { this.Crustacean_free = "crustacean_free,"; } else { this.Crustacean_free = ""; this.Forbidden_Recipe_Pregnant = true;}
            if (this.dairy_free == true) { this.Dairy_free = "dairy_free,"; } else { this.Dairy_free = ""; this.avoid_Recipe_Pregnant = true; }
            if (this.egg_free == true) { this.Egg_free = "egg_free,"; } else { this.Egg_free = ""; this.Forbidden_Recipe_Pregnant = true;}
            if (this.fish_free == true) { this.Fish_free = "fish_free,"; } else { this.Fish_free = ""; this.avoid_Recipe_Pregnant = true;}
            if (this.gluten_free == true) { this.Gluten_free = "gluten_free,"; } else { this.Gluten_free = ""; }
            if (this.kidney_friendly == true) { this.Kidney_friendly = "kidney_friendly,"; } else { this.Kidney_friendly = ""; }
            if (this.kosher == true) { this.Kosher = "kosher,"; } else { this.Kosher = ""; }
            if (this.low_potassium == true) { this.Low_potassium = "low_potassium,"; } else { this.Low_potassium = ""; }
            if (this.lupine_free == true) { this.Lupine_free = "lupine_free,"; } else { this.Lupine_free = ""; }
            if (this.low_fat_abs == true) { this.Low_fat_abs = "low_fat_abs,"; } else { this.Low_fat_abs = ""; }
            if (this.mustard_free == true) { this.Mustard_free = "mustard_free,"; } else { this.Mustard_free = ""; }
            if (this.no_oil_added == true) { this.No_oil_added = "no_oil_added,"; } else { this.No_oil_added = ""; }
            if (this.low_sugar == true) { this.Low_sugar = "low_sugar,"; } else { this.Low_sugar = ""; }
            if (this.paleo == true) { this.Paleo = "paleo,"; } else { this.Paleo = ""; }
            if (this.peanut_free == true) { this.Peanut_free = "peanut_free,"; } else { this.Peanut_free = ""; }
            if (this.pecatarian == true) { this.Pecatarian = "pecatarian,"; } else { this.Pecatarian = ""; }
            if (this.pork_free == true) { this.Pork_free = "pork_free,"; } else { this.Pork_free = ""; }
            if (this.red_meat_free == true) { this.Red_meat_free = "red_meat_free,"; } else { this.Red_meat_free = ""; this.Forbidden_Recipe_Pregnant = true;}
            if (this.sesame_free == true) { this.Sesame_free = "sesame_free,"; } else { this.Sesame_free = ""; }
            if (this.shellfish_free == true) { this.Shellfish_free = "shellfish_free,"; } else { this.Shellfish_free = ""; this.Forbidden_Recipe_Pregnant = true;}
            if (this.soy_free == true) { this.Soy_free = "soy_free,"; } else { this.Soy_free = ""; }
            if (this.sugar_conscious == true) { this.Sugar_conscious = "sugar_conscious"; } else { this.Sugar_conscious = ""; }
            if (this.tree_nut_free == true) { this.Tree_nut_free = "tree_nut_free,"; } else { this.Tree_nut_free = ""; }
            if (this.vegan == true) { this.Vegan = "vegan,"; } else { this.Vegan = ""; }
            if (this.vegetarian == true) { this.Vegetarian = "vegetarian,"; } else { this.Vegetarian = ""; }
            if (this.wheat_free == true) { this.Wheat_free = "wheat_free,"; } else { this.Wheat_free = ""; }

            document.getElementById('loading').style.display = "none";         
            document.getElementById('recipelist_db').style.display = "block";

            if (this.Forbidden_Recipe_Pregnant == true) {
              document.getElementById('pregnant_warning').style.display = "block";
            }
            else if (this.avoid_Recipe_Pregnant == true) {
              document.getElementById('pregnant_avoid').style.display = "block";
            }
            else {
              document.getElementById('pregnant_approved').style.display = "block";
            }
            this.Forbidden_Recipe_Pregnant = false;
            this.avoid_Recipe_Pregnant = false;
          }

        })
    });
  }
  getIngredients() {

    document.getElementById('ingredient_button').style.display = "none";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._httpService.post('/api/Recepten', JSON.stringify(this.ingredients_edaman), options)
      .map(res => res.json())
      .subscribe(data => {
        this.ingredients_db = data;
        document.getElementById('ingredient_list').style.display = "block"; 
      })

  }
}
