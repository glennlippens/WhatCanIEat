import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { product } from './product.model';
import { authService } from "../../services/auth.service";
import { RouterModule, Routes, Router } from '@angular/router';
import { ProductService } from './product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private _httpService: Http, private _service: ProductService, private _authService: authService, public router: Router) { }
  public deleteproduct: boolean = false;
  public editproduct: boolean = false;
  public addproduct: boolean = false;
  visual: boolean = false;
  
  public name: any;
  public ImageUrl: any;
  public id: any;
  public Alcohol_free: any;
  public Celery_free: any;
  public Crustacean_free: any;
  public Dairy_free: any;
  public Egg_free: any;
  public Fish_free: any;
  public Gluten_free: any;
  public Kidney_friendly: any;
  public Kosher: any;
  public Low_potassium: any;
  public Lupine_free: any;
  public Low_fat_abs: any;
  public Mustard_free: any;
  public No_oil_added: any;
  public Low_sugar: any;
  public Paleo: any;
  public Peanut_free: any;
  public Pecatarian: any;
  public Pork_free: any;
  public Red_meat_free: any;
  public Sesame_free: any;
  public Shellfish_free: any;
  public Soy_free: any;
  public Sugar_conscious: any;
  public Tree_nut_free: any;
  public Vegan: any;
  public Vegetarian: any;
  public Wheat_free: any;

  producteditor = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, Alcohol_free: this.Alcohol_free, ImageUrl: this.ImageUrl, Name: this.name, id: this.id }
  productdelete = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, id: this.id }
  Product = {
               id: this.id, deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct,
               Name: this.name, ImageUrl: this.ImageUrl,
               Alcohol_free: false, Celery_free: false, Crustacean_free: false, Dairy_free: false, Egg_free: false,
               Fish_free: false, Gluten_free: false, Kidney_friendly: false, Kosher: false, Low_potassium: false,
               Lupine_free: false, Low_fat_abs: false, Mustard_free: false, No_oil_added: false, Low_sugar: false,
               Paleo: false, Peanut_free: false, Pecatarian: false, Pork_free: false, Red_meat_free: false,
               Sesame_free: false, Shellfish_free: false, Soy_free: false, Sugar_conscious: false,
               Tree_nut_free: false, Vegan: false, Vegetarian: false, Wheat_free: false
  };
  product: product[];


  ngOnInit() {
    if (this._authService.Role != "Dietist") {
      this.router.navigate(['../restricted']);
    }
    this._service.getProducten()
      .subscribe((data) => this.product = data);
  }
  //edit
  senddata(naam: any, imgurl: any, Alcohol_free: any, Celery_free: any, Crustacean_free: any, Dairy_free: any, Egg_free: any, Fish_free: any, Gluten_free: any,
              Kidney_friendly: any, Kosher: any, Low_potassium: any, Lupine_free: any, Low_fat_abs: any,
              Mustard_free: any, No_oil_added: any, Low_sugar: any, Paleo: any, Peanut_free: any, Pecatarian: any,
              Pork_free: any, Red_meat_free: any, Sesame_free: any, Shellfish_free: any, Soy_free: any,
              Sugar_conscious: any, Tree_nut_free: any, Vegan: any, Vegetarian: any, Wheat_free: any, id: any)
  {
    this.deleteproduct = false;
    this.editproduct = true;
    this.addproduct = false;

    this.Alcohol_free = Alcohol_free;    
    this.Celery_free = Celery_free;
    this.Crustacean_free = Crustacean_free;
    this.Dairy_free = Dairy_free;
    this.Egg_free = Egg_free;
    this.Fish_free = Fish_free;
    this.Gluten_free = Gluten_free;
    this.Kidney_friendly = Kidney_friendly;
    this.Kosher = Kosher;
    this.Low_potassium = Low_potassium;
    this.Lupine_free = Lupine_free;
    this.Low_fat_abs = Low_fat_abs;
    this.Mustard_free =Mustard_free;
    this.No_oil_added =No_oil_added;
    this.Low_sugar = Low_sugar;
    this.Paleo = Paleo;
    this.Peanut_free = Peanut_free;
    this.Pecatarian = Pecatarian;
    this.Pork_free = Pork_free;
    this.Red_meat_free = Red_meat_free;
    this.Sesame_free = Sesame_free;
    this.Shellfish_free = Shellfish_free;
    this.Soy_free = Soy_free;
    this.Sugar_conscious = Sugar_conscious;
    this.Tree_nut_free = Tree_nut_free;
    this.Vegan = Vegan;
    this.Vegetarian = Vegetarian;
    this.Wheat_free = Wheat_free;
    this.name = naam;
    this.ImageUrl = imgurl;
    this.id = id;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.addproducten();
    this._httpService.post('/api/productdbsave', JSON.stringify(this.Product), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => {this.reload()}, 500)
  }


  //add
  addproductbutton(name, url) {
    this.deleteproduct = false;
    this.editproduct = false;
    this.addproduct = true;

    this.Alcohol_free = this.Product.Alcohol_free;
    this.Celery_free = this.Product.Celery_free;
    this.Crustacean_free = this.Product.Crustacean_free;
    this.Dairy_free = this.Product.Dairy_free;
    this.Egg_free = this.Product.Egg_free;
    this.Fish_free = this.Product.Fish_free;
    this.Gluten_free = this.Product.Gluten_free;
    this.Kidney_friendly = this.Product.Kidney_friendly;
    this.Kosher = this.Product.Kosher;
    this.Low_potassium = this.Product.Low_potassium;
    this.Lupine_free = this.Product.Lupine_free;
    this.Low_fat_abs = this.Product.Low_fat_abs;
    this.Mustard_free = this.Product.Mustard_free;
    this.No_oil_added = this.Product.No_oil_added;
    this.Low_sugar = this.Product.Low_sugar;
    this.Paleo = this.Product.Paleo;
    this.Peanut_free = this.Product.Peanut_free;
    this.Pecatarian = this.Product.Pecatarian;
    this.Pork_free = this.Product.Pork_free;
    this.Red_meat_free = this.Product.Red_meat_free;
    this.Sesame_free = this.Product.Sesame_free;
    this.Shellfish_free = this.Product.Shellfish_free;
    this.Soy_free = this.Product.Soy_free;
    this.Sugar_conscious = this.Product.Sugar_conscious;
    this.Tree_nut_free = this.Product.Tree_nut_free;
    this.Vegan = this.Product.Vegan;
    this.Vegetarian = this.Product.Vegetarian;
    this.Wheat_free = this.Product.Wheat_free;
    this.name = name;
    this.ImageUrl = url;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.addproducten();
    this._httpService.post('/api/productdbsave', JSON.stringify(this.Product), options)
      .map(res => res.json())
      .subscribe(data => {
        this.name = data.name;
        this.ImageUrl = data.imageUrl;
      })
    setTimeout(() => {this.reload()}, 500)
  }
  //delete
  deleteprod(id: any) {
    this.deleteproduct = true;
    this.editproduct = false;
    this.addproduct = false;
    this.id = id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.delete();
    this._httpService.post('/api/productdbsave', JSON.stringify(this.productdelete), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => {this.reload()}, 500)
  }

  visualizer() {
    this.visual = !this.visual;
    setTimeout(() => { this.reload() }, 500)
  }

  getProduct() {
    let productSearchInput: string = (document.getElementById("ProductSearchInput") as HTMLInputElement).value;
    this._httpService.get('/api/product/' + productSearchInput)
      .map(res => res.json())
      .subscribe(data => {
        this.name = data.name;
        this.ImageUrl = data.imageUrl;
      })
  }
  private sendinfo() {
    this.producteditor = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, Alcohol_free: this.Alcohol_free, ImageUrl: this.ImageUrl, Name: this.name, id: this.id }
 }
  private delete() {
    this.productdelete = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, id: this.id }
  }
  private addproducten() {
    this.Product = {
      id: this.id, deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct,
      Name: this.name, ImageUrl: this.ImageUrl,
      Alcohol_free: this.Alcohol_free, Celery_free: this.Celery_free, Crustacean_free: this.Crustacean_free, Dairy_free: this.Dairy_free, Egg_free: this.Egg_free,
      Fish_free: this.Fish_free, Gluten_free: this.Gluten_free, Kidney_friendly: this.Kidney_friendly, Kosher: this.Kosher, Low_potassium: this.Low_potassium,
      Lupine_free: this.Lupine_free, Low_fat_abs: this.Low_fat_abs, Mustard_free: this.Mustard_free, No_oil_added: this.No_oil_added, Low_sugar: this.Low_sugar,
      Paleo: this.Paleo, Peanut_free: this.Peanut_free, Pecatarian: this.Pecatarian, Pork_free: this.Pork_free, Red_meat_free: this.Red_meat_free,
      Sesame_free: this.Sesame_free, Shellfish_free: this.Shellfish_free, Soy_free: this.Soy_free, Sugar_conscious: this.Sugar_conscious,
      Tree_nut_free: this.Tree_nut_free, Vegan: this.Vegan, Vegetarian: this.Vegetarian, Wheat_free: this.Wheat_free
    };
  }
  private reload() {
    this._service.getProducten()
      .subscribe((data) => this.product = data);
  }
}

