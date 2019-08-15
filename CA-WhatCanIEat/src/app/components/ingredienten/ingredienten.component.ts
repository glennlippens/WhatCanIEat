import { Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { ingredient } from './ingredient.model';
import { authService } from '../../services/auth.service';
import { IgredientenService } from './ingredient.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.css'],
  providers: [IgredientenService]
})
export class IngredientenComponent implements OnInit {
  constructor(private _httpService: Http, private _IgredientenService: IgredientenService, private _authService: authService, public router: Router) { }

  public deleteingredient: boolean = false;
  public editingredient: boolean = false;
  public addingredient: boolean = false;
  addbtn: boolean = false;

  public naam: any;
  public maxzwanger: any;
  public value: any;
  public IngrediëntID: any
  public zwanger: any;
  public diabeet: any;
  public maxdiabeet: any

  ingredientchanger = { zwanger: false, IngredientID: this.IngrediëntID, naam: this.naam, maxzwanger: this.maxzwanger, value: this.value, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient, maxdiabeet: this.maxdiabeet, diabeet: this.diabeet };
  ingredientdeleter = { IngredientID: this.IngrediëntID, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient }
  ingredient: ingredient[];

  ngOnInit() {
    if (this._authService.Role != "Dietist") {
      this.router.navigate(['../restricted']);
    }

    this._IgredientenService.getingredient()
      .subscribe((data) => this.ingredient = data);
  }

  onSubmit() {
    let naam = this._authService.getRole();

  }
  addbutn() {
    this.addbtn = !this.addbtn;
  }
  //edit
  senddata(naam: any, maxzwanger: any, maxdiabeet: any, value: any, IngredientID: any, zwanger: any, diabeet: any) {
    this.editingredient = true;
    this.deleteingredient = false;
    this.addingredient = false;

    this.naam = naam;
    this.maxzwanger = maxzwanger;
    this.value = value;
    this.IngrediëntID = IngredientID;
    this.zwanger = zwanger;
    this.maxdiabeet = maxdiabeet;
    this.diabeet = diabeet;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.sendinfo();
    this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientchanger), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)
  }
  //add
  addingredientbutton(naam: any, maxzwanger: any, maxdiabeet: any, value: any, IngredientID: any, zwanger: any, diabeet: any) {
    this.editingredient = false;
    this.deleteingredient = false;
    this.addingredient = true;

    this.naam = naam;
    this.maxzwanger = maxzwanger;
    this.value = value;
    this.IngrediëntID = IngredientID;
    this.zwanger = zwanger;
    this.maxdiabeet = maxdiabeet;
    this.diabeet = diabeet;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.sendinfo();
    this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientchanger), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)
  }
  //delete
  deleteing(IngredientID) {
    this.editingredient = false;
    this.deleteingredient = true;
    this.addingredient = false;
    this.IngrediëntID = IngredientID;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.delete();
    this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientdeleter), options)
      .map(res => res.json())
      .subscribe(data => {
      })
    setTimeout(() => { this.reload() }, 500)
  }

  private sendinfo() {
    this.ingredientchanger = { zwanger: this.zwanger, IngredientID: this.IngrediëntID, naam: this.naam, maxzwanger: this.maxzwanger, value: this.value, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient, maxdiabeet: this.maxdiabeet, diabeet: this.diabeet };
  }
  private delete() {
    this.ingredientdeleter = { IngredientID: this.IngrediëntID, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient }
  }
  private reload() {
    this._IgredientenService.getingredient()
      .subscribe((data) => this.ingredient = data);
  }

}
