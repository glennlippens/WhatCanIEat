webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/index/Index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/Components/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/index/index.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>startpagina</h3>\r\n<br />\r\n<div>\r\n  <p>\r\n    Welkom op het \"what can i eat\" platform. Op deze website kan u onze database raadplegen om te kijken welke producten u mag consumeren tijdens uw zwangerschap.\r\n    Indien het gewenste product niet in onze database zit voegen wij dit zo snel mogelijk toe. indien u vragen hebt kan u altijd een mail sturen via het contactformulier.\r\n  </p>\r\n  <br />\r\n  <p>bent u nieuw? Maak snel een account aan om onze diensten te kunnen gebruiken!</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/ingredienten/ingredient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgredientenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IgredientenService = (function () {
    function IgredientenService(_http) {
        this._http = _http;
    }
    IgredientenService.prototype.getAllIgredienten = function () {
        return this._http.get('/api/ingredient/all')
            .map(function (response) { return response.json(); });
    };
    IgredientenService.prototype.getingredient = function () {
        return this._http.get('/api/ingredientdbsave/')
            .map(function (response) { return response.json(); });
    };
    IgredientenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IgredientenService);
    return IgredientenService;
}());



/***/ }),

/***/ "../../../../../src/app/Components/ingredienten/ingredienten.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  border: 2px solid gray;\r\n  border-collapse: separate;\r\n  border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n}\r\n\r\n.borderless {\r\n  border: none !important;\r\n}\r\n\r\n#bordered_button_add {\r\n  border: 1px solid;\r\n  color: forestgreen;\r\n  max-width: 200px;\r\n  background-color: white;\r\n}\r\n\r\n.email_field {\r\n  min-width: 225px;\r\n  width: 250px;\r\n}\r\n\r\n.dietistID_field {\r\n  width: 40px;\r\n}\r\n\r\n#INeedSomeSpace {\r\n  margin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/ingredienten/ingredienten.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Naam</th>\r\n      <th>Maxzwanger</th>\r\n      <th>MaxDiabeet</th>\r\n      <th>Value</th>\r\n      <th>Zwanger</th>\r\n      <th>Diabeet</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let ingredient of ingredient;\">\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #naam [(ngModel)]=\"ingredient.naam\" name=\"naam\" class=\"form-control text-input\" id=\"naam\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #maxzwanger [(ngModel)]=\"ingredient.maxZwanger\" name=\"maxZwanger\" class=\"form-control text-input\" id=\"maxZwanger\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #maxdiabeet [(ngModel)]=\"ingredient.maxDiabeet\" name=\"maxDiabeet\" class=\"form-control text-input\" id=\"maxDiabeet\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #value [(ngModel)]=\"ingredient.value\" name=\"value\" class=\"form-control text-input\" id=\"value\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"checkbox\" #zwanger [(ngModel)]=\"ingredient.zwanger\" class=\"form-control text-input\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"checkbox\" #diabeet [(ngModel)]=\"ingredient.diabeet\" class=\"form-control text-input\" />\r\n        </td>\r\n        <td class=\"borderless\"><button name=\"ID\" (click)=\"senddata( naam.value, maxzwanger.value, maxdiabeet.value,value.value,ingredient.ingredientID, zwanger.checked,diabeet.checked )\" type=\"submit\" class=\"btn btn-primary\" id=\"ID\">Edit</button></td>\r\n        <td class=\"borderless\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteing(ingredient.ingredientID)\" name=\"delete\">Delete</button></td>\r\n      </tr>\r\n    </ng-container>\r\n  </tbody>\r\n</table>\r\n\r\n<button (click)=\"addbutn()\" class=\"btn btn-outline-dark\" id=\"bordered_button_add\">voeg ingredient toe</button>\r\n\r\n<div *ngIf=\"addbtn\" id=\"INeedSomeSpace\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr class=\"borderless\">\r\n        <th>Naam</th>\r\n        <th>Maxzwanger</th>\r\n        <th>MaxDiabeet</th>\r\n        <th>Value</th>\r\n        <th>Zwanger</th>\r\n        <th>Diabeet</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #naam name=\"naam\" class=\"form-control text-input\" id=\"naam\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #maxzwanger name=\"maxZwanger\" class=\"form-control text-input\" id=\"maxZwanger\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #maxdiabeet name=\"maxdiabeet\" class=\"form-control text-input\" id=\"maxDiabeet\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #value name=\"value\" class=\"form-control text-input\" id=\"value\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"checkbox\" #zwanger name=\"zwanger\" class=\"form-control text-input\" id=\"zwanger\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"checkbox\" #diabeet name=\"diabeet\" class=\"form-control text-input\" id=\"diabeet\" />\r\n        </td>\r\n        <td class=\"borderless\"><button (click)=\"addingredientbutton( naam.value, maxzwanger.value, maxdiabeet.value,value.value,ingredient.ingredientID, zwanger.checked,diabeet.checked )\" type=\"submit\" class=\"btn btn-success form-control\">add</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/ingredienten/ingredienten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ingredient_service__ = __webpack_require__("../../../../../src/app/Components/ingredienten/ingredient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngredientenComponent = (function () {
    function IngredientenComponent(_httpService, _IgredientenService, _authService, router) {
        this._httpService = _httpService;
        this._IgredientenService = _IgredientenService;
        this._authService = _authService;
        this.router = router;
        this.deleteingredient = false;
        this.editingredient = false;
        this.addingredient = false;
        this.addbtn = false;
        this.ingredientchanger = { zwanger: false, IngredientID: this.IngrediëntID, naam: this.naam, maxzwanger: this.maxzwanger, value: this.value, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient, maxdiabeet: this.maxdiabeet, diabeet: this.diabeet };
        this.ingredientdeleter = { IngredientID: this.IngrediëntID, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient };
    }
    IngredientenComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.Role != "Dietist") {
            this.router.navigate(['../restricted']);
        }
        this._IgredientenService.getingredient()
            .subscribe(function (data) { return _this.ingredient = data; });
    };
    IngredientenComponent.prototype.onSubmit = function () {
        var naam = this._authService.getRole();
    };
    IngredientenComponent.prototype.addbutn = function () {
        this.addbtn = !this.addbtn;
    };
    //edit
    IngredientenComponent.prototype.senddata = function (naam, maxzwanger, maxdiabeet, value, IngredientID, zwanger, diabeet) {
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.sendinfo();
        this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientchanger), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //add
    IngredientenComponent.prototype.addingredientbutton = function (naam, maxzwanger, maxdiabeet, value, IngredientID, zwanger, diabeet) {
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.sendinfo();
        this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientchanger), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //delete
    IngredientenComponent.prototype.deleteing = function (IngredientID) {
        var _this = this;
        this.editingredient = false;
        this.deleteingredient = true;
        this.addingredient = false;
        this.IngrediëntID = IngredientID;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.delete();
        this._httpService.post('/api/Ingredientdbsave', JSON.stringify(this.ingredientdeleter), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    IngredientenComponent.prototype.sendinfo = function () {
        this.ingredientchanger = { zwanger: this.zwanger, IngredientID: this.IngrediëntID, naam: this.naam, maxzwanger: this.maxzwanger, value: this.value, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient, maxdiabeet: this.maxdiabeet, diabeet: this.diabeet };
    };
    IngredientenComponent.prototype.delete = function () {
        this.ingredientdeleter = { IngredientID: this.IngrediëntID, deleteingredient: this.deleteingredient, editingredient: this.editingredient, addingredient: this.addingredient };
    };
    IngredientenComponent.prototype.reload = function () {
        var _this = this;
        this._IgredientenService.getingredient()
            .subscribe(function (data) { return _this.ingredient = data; });
    };
    IngredientenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ingredienten',
            template: __webpack_require__("../../../../../src/app/Components/ingredienten/ingredienten.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/ingredienten/ingredienten.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ingredient_service__["a" /* IgredientenService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ingredient_service__["a" /* IgredientenService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], IngredientenComponent);
    return IngredientenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/klanten/klanten.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  border: 2px solid gray;\r\n  border-collapse: separate;\r\n  border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n}\r\n\r\n.borderless {\r\n  border: none !important;\r\n}\r\n\r\n#bordered_button_mail {\r\n  border: 1px solid;\r\n  color: dodgerblue;\r\n  max-width: 200px;\r\n  background-color: white;\r\n}\r\n\r\n#bordered_button_add {\r\n  border: 1px solid;\r\n  color: forestgreen;\r\n  max-width: 200px;\r\n  background-color: white;\r\n}\r\n\r\n.email_field {\r\n  min-width: 225px;\r\n  width:250px;\r\n}\r\n\r\n.dietistID_field {\r\n  width: 40px;\r\n}\r\n\r\n#INeedSomeSpace{\r\n  margin-top: 20px;\r\n}\r\n\r\n#INeedLittleSpace {\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/klanten/klanten.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>voornaam</th>\r\n      <th>achternaam</th>\r\n      <th>email</th>\r\n      <th>gsmnr</th>\r\n      <th>Doelgroep</th>\r\n      <th>DietistID</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <ng-container *ngFor=\"let klant of klant;\">\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #voornaam [(ngModel)]=\"klant.voorNaam\" name=\"voornaam\" class=\"form-control text-input\" id=\"voorNaam\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #achternaam [(ngModel)]=\"klant.achterNaam\" name=\"achternaam\" class=\"form-control text-input\" id=\"achterNaam\" />\r\n        </td>\r\n        <td  class=\"borderless email_field\">\r\n          <input type=\"text\" #email [(ngModel)]=\"klant.email\" name=\"email\" class=\"form-control text-input\" id=\"email\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #gsm [(ngModel)]=\"klant.gsm\" name=\"gsm\" class=\"form-control text-input\" id=\"gsm\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #Doelgroep [(ngModel)]=\"klant.doelgroep\" name=\"Doelgroep\" class=\"form-control text-input\" id=\"Doelgroep\" />\r\n        </td>\r\n        <td class=\"borderless dietistID_field\">\r\n          <input type=\"text\" #DietisID [(ngModel)]=\"klant.dietisID\" name=\"DietisID\" class=\"form-control text-input\" id=\"DietisID\" />\r\n        </td>\r\n        <td class=\"borderless\"><button name=\"ID\" (click)=\"getuser( voornaam.value, achternaam.value, email.value, gsm.value,  klant.costumerId, Doelgroep.value, DietisID.value )\" type=\"submit\" class=\"btn btn-primary\" id=\"ID\">Edit</button></td>\r\n        <td class=\"borderless\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteuser(klant.costumerId)\" name=\"delete\">Delete</button></td>\r\n      </tr>\r\n    </ng-container>\r\n    <tr *ngIf=\"!klant\">\r\n      <td colspan=\"5\">\r\n        Loading data. Please wait...\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"klant && klant.length==0\">\r\n      <td colspan=\"5\">\r\n        No klant records to display\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<button class=\"btn btn-outline-dark\" id=\"bordered_button_mail\" (click)=\"mailplains()\">stuur mail </button>\r\n<button class=\"btn btn-outline-dark\" id=\"bordered_button_add\" (click)=\"addbutn()\">voeg klant toe</button>\r\n<br>\r\n\r\n<div *ngIf=\"addbtn\" id=\"INeedSomeSpace\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>voornaam</th>\r\n        <th>achternaam</th>\r\n        <th>email</th>\r\n        <th>gsmnr</th>\r\n        <th>Doelgroep</th>\r\n        <th>DietistID</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #voornaam name=\"voornaam\" class=\"form-control text-input\" id=\"voorNaam\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #achternaam name=\"achternaam\" class=\"form-control text-input\" id=\"achterNaam\" />\r\n        </td>\r\n        <td class=\"borderless email_field\">\r\n          <input type=\"text\" #email name=\"email\" class=\"form-control text-input\" id=\"email\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #gsm name=\"gsm\" class=\"form-control text-input\" id=\"gsm\" />\r\n        </td>\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #Doelgroep name=\"Doelgroep\" class=\"form-control text-input\" id=\"Doelgroep\" />\r\n        </td>\r\n        <td class=\"borderless dietistID_field\">\r\n          <input type=\"text\" #DietisID name=\"DietisID\" class=\"form-control text-input\" id=\"DietisID\" />\r\n        </td>\r\n        <td class=\"borderless\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"adduser(voornaam.value, achternaam.value, email.value, gsm.value,   Doelgroep.value, DietisID.value )\" name=\"add\">add</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"mailvis\" class=\"row\" id=\"INeedLittleSpace\">\r\n  <div class=\"container\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"sendMail(contact)\">\r\n      <div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" [(ngModel)]=\"contact.Name\" name=\"contact.Name\" class=\"form-control text-input\" id=\"name\" placeholder=\"Name\" />\r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"email\">E-mail</label>\r\n          <input type=\"email\" [(ngModel)]=\"contact.Email\" name=\"contact.Email\" class=\"form-control text-input\" id=\"email\" placeholder=\"E-mail\" />\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"subject\">Onderwerp</label>\r\n          <input type=\"text\" [(ngModel)]=\"contact.Subject\" name=\"contact.Subject\" class=\"form-control text-input\" id=\"subject\" placeholder=\"Onderwerp\" />\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"message\">Message</label>\r\n          <textarea type=\"text\" [(ngModel)]=\"contact.Message\" name=\"contact.Message\" class=\"form-control\" id=\"message\" placeholder=\"Message...\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div>\r\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/klanten/klanten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlantenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__klanten_service__ = __webpack_require__("../../../../../src/app/Components/klanten/klanten.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KlantenComponent = (function () {
    function KlantenComponent(_klantenservice, http, _httpService, _authService, router) {
        this._klantenservice = _klantenservice;
        this.http = http;
        this._httpService = _httpService;
        this._authService = _authService;
        this.router = router;
        this.deleteklant = false;
        this.addklant = false;
        this.editklant = false;
        this.mailvis = false;
        this.addbtn = false;
        this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined };
        this.klanteditor = { addklant: this.addklant, editklant: this.editklant, deleteklant: this.deleteklant, Doelgroep: this.Doelgroep, DietisID: this.DietistId, CostumerId: this.CostumerId, voornaam: this.voornaam, achternaam: this.achternaam, email: this.email, gsm: this.gsm };
        this.klantdeleter = { addklant: this.addklant, editklant: this.editklant, CostumerId: this.CostumerId, deleteklant: this.deleteklant };
    }
    KlantenComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.Role != "Dietist") {
            this.router.navigate(['../restricted']);
        }
        else {
            this._klantenservice.getKlanten()
                .subscribe(function (klantData) { return _this.klant = klantData; });
        }
    };
    KlantenComponent.prototype.addbutn = function () {
        this.addbtn = !this.addbtn;
    };
    KlantenComponent.prototype.mailplains = function () {
        this.mailvis = !this.mailvis;
    };
    //edit
    KlantenComponent.prototype.getuser = function (voornaam, achternaam, email, gsm, costumerid, Doelgroep, DietisID) {
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.sendinfo();
        this.http.post('/api/Clientdbsave', JSON.stringify(this.klanteditor), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //add
    KlantenComponent.prototype.adduser = function (voornaam, achternaam, email, gsm, Doelgroep, DietisID, Passwoord) {
        var _this = this;
        this.deleteklant = false;
        this.addklant = true;
        this.editklant = false;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.gsm = gsm;
        this.Doelgroep = Doelgroep;
        this.DietistId = DietisID;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.sendinfo();
        this.http.post('/api/Clientdbsave', JSON.stringify(this.klanteditor), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //delete
    KlantenComponent.prototype.deleteuser = function (costumerid) {
        var _this = this;
        this.deleteklant = true;
        this.addklant = false;
        this.editklant = false;
        this.CostumerId = costumerid;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.delete();
        this.http.post('/api/Clientdbsave', JSON.stringify(this.klantdeleter), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    KlantenComponent.prototype.sendMail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('/api/Client', JSON.stringify(this.contact), options).subscribe(function () {
            _this.messageSend();
        });
    };
    KlantenComponent.prototype.messageSend = function () {
        this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined };
    };
    KlantenComponent.prototype.sendinfo = function () {
        this.klanteditor = { addklant: this.addklant, editklant: this.editklant, deleteklant: this.deleteklant, Doelgroep: this.Doelgroep, DietisID: this.DietistId, CostumerId: this.CostumerId, voornaam: this.voornaam, achternaam: this.achternaam, email: this.email, gsm: this.gsm };
    };
    KlantenComponent.prototype.delete = function () {
        this.klantdeleter = { addklant: this.addklant, editklant: this.editklant, CostumerId: this.CostumerId, deleteklant: this.deleteklant };
    };
    KlantenComponent.prototype.reload = function () {
        var _this = this;
        this._klantenservice.getKlanten()
            .subscribe(function (klantData) { return _this.klant = klantData; });
    };
    KlantenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-klanten',
            template: __webpack_require__("../../../../../src/app/Components/klanten/klanten.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/klanten/klanten.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__klanten_service__["a" /* KlantenService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__klanten_service__["a" /* KlantenService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], KlantenComponent);
    return KlantenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/klanten/klanten.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlantenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KlantenService = (function () {
    function KlantenService(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
    }
    KlantenService.prototype.getKlanten = function () {
        return this._http.get('/api/Client/' + this._authService.Email)
            .map(function (response) { return response.json(); });
    };
    KlantenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* authService */]])
    ], KlantenService);
    return KlantenService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css\" crossorigin=\"anonymous\">\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <ul class=\"nav navbar-nav\">\r\n    <li>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"bg-dark\" routerLink=\"/\">\r\n            <img src=\"http://www.wellnessdenver.com/wp-content/uploads/2017/11/pregnantwoman.jpg\" class=\"img-circle\" width=\"45\" height=\"45\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li><a routerLink=\"/login\">login</a></li>\r\n    <li><a routerLink=\"/profile\">profile</a></li>\r\n    <li><a routerLink=\"/recepten\">recepten</a></li>\r\n    <li><a routerLink=\"/Ingredienten\">ingredienten</a></li>\r\n    <li><a routerLink=\"/contact\">contact</a></li>  \r\n    <li id=\"dietiste_only_klanten\"><a routerLink=\"/klanten\">klanten</a></li>\r\n    <li id=\"dietiste_only_ingredient\"><a routerLink=\"/ingredient\">manage ingredient</a></li>\r\n    <li id=\"dietiste_only_product\"><a routerLink=\"/product\">manage product</a></li>   \r\n  </ul>\r\n  <form class=\"navbar-form navbar-right\">\r\n    <button (click)=\"logout()\" type=\"submit\" class=\"btn btn-default\">logout</button>\r\n  </form>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <h1>What can i Eat?</h1>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_httpService, router, _authService) {
        this._httpService = _httpService;
        this.router = router;
        this._authService = _authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.router.navigate(['../login']);
        location.reload();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* authService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edaman_edaman_component__ = __webpack_require__("../../../../../src/app/components/edaman/edaman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_edaman_api_data_service__ = __webpack_require__("../../../../../src/app/services/edaman-api-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ingredienten_ingredienten_component__ = __webpack_require__("../../../../../src/app/Components/ingredienten/ingredienten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_index_Index_component__ = __webpack_require__("../../../../../src/app/Components/index/Index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_klanten_klanten_component__ = __webpack_require__("../../../../../src/app/Components/klanten/klanten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ingredient_ingredient_component__ = __webpack_require__("../../../../../src/app/components/ingredient/ingredient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_recepten_recepten_component__ = __webpack_require__("../../../../../src/app/components/recepten/recepten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_restricted_restricted_component__ = __webpack_require__("../../../../../src/app/components/restricted/restricted.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__Components_index_Index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'Ingredienten', component: __WEBPACK_IMPORTED_MODULE_13__components_ingredient_ingredient_component__["a" /* IngredientComponent */] },
    { path: 'recepten', component: __WEBPACK_IMPORTED_MODULE_17__components_recepten_recepten_component__["a" /* ReceptenComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_12__components_product_product_component__["a" /* ProductComponent */] },
    { path: 'klanten', component: __WEBPACK_IMPORTED_MODULE_9__Components_klanten_klanten_component__["a" /* KlantenComponent */] },
    { path: 'ingredient', component: __WEBPACK_IMPORTED_MODULE_7__Components_ingredienten_ingredienten_component__["a" /* IngredientenComponent */] },
    { path: 'restricted', component: __WEBPACK_IMPORTED_MODULE_19__components_restricted_restricted_component__["a" /* RestrictedComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_edaman_edaman_component__["a" /* EdamanComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_ingredienten_ingredienten_component__["a" /* IngredientenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_klanten_klanten_component__["a" /* KlantenComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_index_Index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_ingredient_ingredient_component__["a" /* IngredientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_recepten_recepten_component__["a" /* ReceptenComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_restricted_restricted_component__["a" /* RestrictedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_edaman_api_data_service__["a" /* EdamanApiDataService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* authService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n  border-width: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel panel-info\">\r\n  <div class=\"panel-heading\"><strong>contact formulier</strong></div>\r\n  <div class=\"panel-body container\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(sendMail)\">\r\n      <div>\r\n        <p>Achternaam: {{dietist.AchterNaam}}</p>\r\n        <p>Voornaam: {{dietist.VoorNaam}}</p>\r\n        <p>Email: {{dietist.Email}}</p>\r\n        <p>Gsm: {{dietist.Gsm}}</p>\r\n      </div>\r\n      <div class=\"row container\"><label for=\"Subject\">Subject</label></div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"sendMail.Subject\" name=\"sendMail.Subject\" class=\"form-control text-input\" id=\"Subject\" placeholder=\"Subject\" /></div>\r\n        <div class=\"col-sm-1\"></div><br />\r\n      </div>\r\n      <div class=\"row container\"><label for=\"Message\">Message</label></div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"sendMail.Message\" name=\"sendMail.Message\" class=\"form-control text-input\" id=\"Message\" placeholder=\"Message\" /></div>\r\n        <div class=\"col-sm-1\"></div><br />\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"><button type=\"submit\" class=\"btn btn-info\">Send</button></div>\r\n      </div>\r\n    </form>\r\n  </div>    \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(router, _authService, _httpService) {
        this.router = router;
        this._authService = _authService;
        this._httpService = _httpService;
        this.dietist = { Email: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined };
        this.sendMail = { From: undefined, To: undefined, Subject: undefined, Message: undefined };
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this._authService.Role) {
            case "Dietist": {
                this.router.navigate(['../login']);
                break;
            }
            case "Klant": {
                this._httpService.get('/api/contact/' + this._authService.Email)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.dietist.Email = data.email;
                    _this.dietist.AchterNaam = data.achterNaam;
                    _this.dietist.VoorNaam = data.voorNaam;
                    _this.dietist.Gsm = data.gsm;
                });
                break;
            }
            default: {
                this.router.navigate(['../login']);
                break;
            }
        }
        /*
        if (this._authService.Role == "Dietist") {
          this.router.navigate(['../login']);
        }
    
        else if ( this._authService.Role == "Klant") {
    
          this._httpService.get('/api/contact/' + this._authService.Email)
            .map(res => res.json())
            .subscribe(data => {
              this.dietist.Email = data.email;
              this.dietist.AchterNaam = data.achterNaam;
              this.dietist.VoorNaam = data.voorNaam;
              this.dietist.Gsm = data.gsm;
            });
        }
        else {
          this.router.navigate(['../login']);
        }
        */
    };
    ContactComponent.prototype.onSubmit = function () {
        this.sendMail.From = this._authService.getMail();
        this.sendMail.To = this.dietist.Email;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/contact', JSON.stringify(this.sendMail), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edaman/edaman.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edaman/edaman.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3>Edaman</h3>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-9\">\r\n    <input (keyup.enter)=\"searchRecipe()\" id=\"search\" type=\"text\" class=\"form-control\" value=\"\">\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <button (click)=\"getProduct()\" class=\"btn btn-default form-control\">search</button>\r\n    <button (click)=\"checker()\" >check</button>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\" id=\"recipelist\">\r\n  <div>\r\n    <br>\r\n    <p class=\"text-lowercase\">Name: {{name}}</p>\r\n    <p>healthLables: {{healthLables}}</p>\r\n    <p>ingredients: {{ingredients}}</p><br>\r\n    <img [src]=\"img\" class=\"img-rounded\" /><br>\r\n  </div>\r\n  <br>\r\n  <footer>powered by edaman API: https://www.edamam.com/ </footer>\r\n  <br>\r\n</div>\r\n\r\n<tr *ngIf=\"!healthLables\">\r\n  <td colspan=\"5\">\r\n    gelieven recept in te geven\r\n  </td>\r\n</tr>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edaman/edaman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdamanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_edaman_api_data_service__ = __webpack_require__("../../../../../src/app/services/edaman-api-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EdamanComponent = (function () {
    function EdamanComponent(dataService, http) {
        this.dataService = dataService;
        this.http = undefined;
        this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };
        this.http = http;
    }
    EdamanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProducten()
            .subscribe(function (productdata) {
            //console.log(productdata);
            _this.product = productdata;
        });
    };
    EdamanComponent.prototype.searchRecipe = function () {
        var _this = this;
        this.dataService.getRecipe().subscribe(function (recipedata) {
            _this.name = recipedata.hits[0].recipe.label;
            _this.healthLables = recipedata.hits[0].recipe.healthLabels;
            _this.ingredients = recipedata.hits[0].recipe.ingredientLines;
            _this.img = recipedata.hits[0].recipe.image;
            var converter = _this.healthLables.join();
            var converter1 = _this.ingredients.join();
            _this.contact.Message = _this.name;
            _this.contact.Messagea = converter;
            _this.contact.Messageb = converter1;
            console.log(_this.product);
            console.log(recipedata);
            console.log(_this.name);
            console.log(_this.healthLables);
            document.getElementById('recipelist').style.display = "block";
        });
    };
    EdamanComponent.prototype.checker = function () {
        for (var i = 0; i < this.healthLables.length; i++) {
            if (this.healthLables[i] == "Sugar-Conscious") {
                console.log("hey");
            }
            else {
                console.log("geen hey");
            }
        }
    };
    EdamanComponent.prototype.getProduct = function () {
        var _this = this;
        this.checker();
        this.http.get('/api/Edaman/all')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.valuess = data[i].name;
                console.log(_this.valuess);
            }
            if (_this.valuess == _this.name) {
                console.log('bestaat al');
                alert('bestaat al');
            }
            else if ((_this.valuess !== _this.name)) {
                _this.onSubmit();
                alert('nieuw ingredient');
            }
        });
    };
    EdamanComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('/api/Edaman', JSON.stringify(this.contact), options).subscribe(function () {
            console.log(_this.contact);
            _this.messageSend();
            alert('mail send');
        });
    };
    EdamanComponent.prototype.messageSend = function () {
        this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };
    };
    EdamanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edaman',
            template: __webpack_require__("../../../../../src/app/components/edaman/edaman.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edaman/edaman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_edaman_api_data_service__["a" /* EdamanApiDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EdamanComponent);
    return EdamanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/ingredient/ingredient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n  border-width: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ingredient/ingredient.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3>ingredienten</h3>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-7\"><input (keyup.enter)=\"getIngredient()\" id=\"inputIgn\" class=\"form-control\" type=\"text\"></div>\r\n  <div class=\"col-sm-2\"><button (click)=\"getIngredient()\" class=\"btn btn-default form-control\">zoek ingredient</button></div>\r\n  <div class=\"col-sm-3\"><button (click)=\"getVervangIngredient()\" class=\"btn btn-default form-control\">zoek vervang ingredient</button></div>\r\n</div>\r\n<br />\r\n<div style=\"display:none\" class=\"panel panel-success\" id=\"ingredient_panel\">\r\n  <div class=\"panel-heading\"><strong class=\"text-success\">Ingredient</strong></div>\r\n  <div class=\"container panel-body\">\r\n    <p>Naam: {{mainIng.Naam}}</p>\r\n    <p>Beschrijving: {{mainIng.Value}}</p>\r\n    <p>is dit verboden te eten voor mij?: </p><input type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"mainIng.Doelgroep\" />\r\n    <p>Max: {{mainIng.Max}}</p>\r\n  </div>\r\n</div>\r\n<div style=\"display:none\" class=\"panel panel-warning\" id=\"vervangIngredient_panel\">\r\n  <div class=\"panel-heading\"><strong class=\"text-warning\">Vervang ingredient</strong></div>\r\n  <div class=\"container panel-body\">\r\n    <p>Naam: {{subIng.Naam}}</p>\r\n    <p>Beschrijving: {{subIng.Value}}</p>\r\n    <p>is dit verboden te eten voor mij?: </p><input type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"subIng.Doelgroep\" />\r\n    <p>Max: {{subIng.Max}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/ingredient/ingredient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngredientComponent = (function () {
    function IngredientComponent(_httpService, router, _authService) {
        this._httpService = _httpService;
        this.router = router;
        this._authService = _authService;
        this.getIng = { Email: undefined, Naam: undefined };
        this.mainIng = { Naam: undefined, Value: undefined, Doelgroep: undefined, Max: undefined };
        this.subIng = { Naam: undefined, Value: undefined, Doelgroep: undefined, Max: undefined };
    }
    IngredientComponent.prototype.ngOnInit = function () {
        if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
            this.getIng.Email = this._authService.getMail();
        }
        else {
            this.router.navigate(['../login']);
        }
    };
    IngredientComponent.prototype.getIngredient = function () {
        var _this = this;
        document.getElementById('vervangIngredient_panel').style.display = "none";
        document.getElementById('ingredient_panel').style.display = "none";
        this.getIng.Naam = document.getElementById("inputIgn").value;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/ingredient', JSON.stringify(this.getIng), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.mainIng.Naam = data[0].naam;
            _this.mainIng.Value = data[0].value;
            _this.mainIng.Doelgroep = data[0].doelgroep;
            _this.mainIng.Max = data[0].max;
            _this.subIng.Naam = data[1].naam;
            _this.subIng.Value = data[1].value;
            _this.subIng.Doelgroep = data[1].doelgroep;
            _this.subIng.Max = data[1].max;
            document.getElementById('vervangIngredient_panel').style.display = "none";
            document.getElementById('ingredient_panel').style.display = "block";
        });
    };
    IngredientComponent.prototype.getVervangIngredient = function () {
        var _this = this;
        document.getElementById('vervangIngredient_panel').style.display = "none";
        this.getIng.Naam = document.getElementById("inputIgn").value;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/ingredient', JSON.stringify(this.getIng), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.mainIng.Naam = data[0].naam;
            _this.mainIng.Value = data[0].value;
            _this.mainIng.Doelgroep = data[0].doelgroep;
            _this.mainIng.Max = data[0].max;
            _this.subIng.Naam = data[1].naam;
            _this.subIng.Value = data[1].value;
            _this.subIng.Doelgroep = data[1].doelgroep;
            _this.subIng.Max = data[1].max;
            document.getElementById('vervangIngredient_panel').style.display = "block";
        });
    };
    IngredientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ingredient',
            template: __webpack_require__("../../../../../src/app/components/ingredient/ingredient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/ingredient/ingredient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */]])
    ], IngredientComponent);
    return IngredientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>welkom, gelieve in te loggen</h3>\r\n<br>\r\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(LoginForm)\">\r\n  <div>\r\n    <h5 class=\"text-danger\" style=\"display:none\" id=\"restriction_notice\">U moet ingelogd zijn om de opgevraagde pagina weer te geven</h5><br />\r\n    <div class=\"form-group required\">\r\n      <label for=\"Email\">Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"LoginForm.Email\" name=\"LoginForm.Email\" class=\"form-control text-input\" id=\"Email\" placeholder=\"Email\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"Password\">Password</label>\r\n      <input type=\"text\" [(ngModel)]=\"LoginForm.Password\" name=\"LoginForm.Password\" class=\"form-control text-input\" id=\"Password\" placeholder=\"Password\" />\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-success\">Login</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br>\r\n<h5>nog geen account? registreer <a routerLink=\"/register\">hier</a> </h5>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_httpService, _authService, router) {
        this._httpService = _httpService;
        this._authService = _authService;
        this.router = router;
        this.LoginForm = { Email: undefined, Password: undefined };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
        }
        else {
            document.getElementById('restriction_notice').style.display = "block";
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/login', JSON.stringify(this.LoginForm), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this._authService.setMail(data[0]);
            _this._authService.setRole(data[1]);
            _this._authService.setfirstName(data[2]);
        });
        this.router.navigate(['../']);
        /*
        if (this._authService.Role == "Dietist") {
          parent.document.getElementById('dietist_only_klanten').style.display = "block";
          parent.document.getElementById('dietist_only_ingredient').style.display = "block";
          parent.document.getElementById('dietist_only_product').style.display = "block";
        }
        else {
          parent.document.getElementById('dietist_only_klanten').style.display = "none";
          parent.document.getElementById('dietist_only_ingredient').style.display = "none";
          parent.document.getElementById('dietist_only_product').style.display = "none";
        }
        */
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  border: 2px solid gray;\r\n  border-collapse: separate;\r\n  border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n}\r\n\r\n.borderless{\r\n  border: none !important;\r\n}\r\n\r\n.seperate_border {\r\n  border-top: 2px solid gray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<table *ngIf=\"!visual\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Naam</th>\r\n      <th colspan=\"3\">imageurl</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let product of product;\">\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <input type=\"text\" #naam [(ngModel)]=\"product.name\" name=\"naam\" class=\"form-control text-input\" id=\"naam\" />\r\n        </td>\r\n        <td class=\"borderless\" colspan=\"3\">\r\n          <input type=\"text\" #imgurl [(ngModel)]=\"product.imageUrl\" name=\"imgurl\" class=\"form-control text-input\" id=\"imgurl\" />\r\n        </td>\r\n      </tr>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Alcohol_free [(ngModel)]=\"product.alcohol_free\" name=\"Alcohol_free\" class=\" text-input\" id=\"Alcohol_free\" /><label class=\"text-danger\">Alcohol_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Celery_free [(ngModel)]=\"product.celery_free\" name=\"Product.Celery_free\" class=\"text-input\" id=\"Product.Celery_free\" /><label>Celery_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Crustacean_free [(ngModel)]=\"product.crustacean_free\" name=\"Product.Crustacean_free\" class=\"text-input\" id=\"Product.Crustacean_free\" /><label class=\"text-danger\">Crustacean_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Dairy_free [(ngModel)]=\"product.dairy_free\" name=\"Product.Dairy_free\" class=\"text-input\" id=\"Product.Dairy_free\" /><label class=\"text-warning\">Dairy_free</label></td>\r\n      </tr>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Egg_free [(ngModel)]=\"product.egg_free\" name=\"Product.Egg_free\" class=\"text-input\" id=\"Product.Egg_free\" /><label class=\"text-danger\">Egg_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Fish_free [(ngModel)]=\"product.fish_free\" name=\"Product.Fish_free\" class=\"text-input\" id=\"Product.Fish_free\" /><label class=\"text-warning\">Fish_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Gluten_free [(ngModel)]=\"product.gluten_free\" name=\"Product.Gluten_free\" class=\"text-input\" id=\"Product.Gluten_free\" /><label>Gluten_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Kidney_friendly [(ngModel)]=\"product.kidney_friendly\" name=\"Product.Kidney_friendly\" class=\"text-input\" id=\"Product.Kidney_friendly\" /><label>Kidney_friendly</label></td>\r\n      </tr>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Kosher [(ngModel)]=\"product.kosher\" name=\"Product.Kosher\" class=\"text-input\" id=\"Product.Kosher\" /><label>Kosher</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Low_potassium [(ngModel)]=\"product.low_potassium\" name=\"Product.Low_potassium\" class=\"text-input\" id=\"Product.Low_potassium\" /><label>Low_potassium</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Lupine_free [(ngModel)]=\"product.lupine_free\" name=\"Product.Lupine_free\" class=\"text-input\" id=\"Product.Lupine_free\" /><label>Lupine_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Low_fat_abs [(ngModel)]=\"product.low_fat_abs\" name=\"Product.Low_fat_abs\" class=\"text-input\" id=\"Product.Low_fat_abs\" /><label>Low_fat_abs</label></td>\r\n      </tr>\r\n      <tr  class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Mustard_free [(ngModel)]=\"product.mustard_free\" name=\"Product.Mustard_free\" class=\"text-input\" id=\"Product.Mustard_free\" /><label>Mustard_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #No_oil_added [(ngModel)]=\"product.no_oil_added\" name=\"Product.No_oil_added\" class=\"text-input\" id=\"Product.No_oil_added\" /><label>No_oil_added</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Low_sugar [(ngModel)]=\"product.low_sugar\" name=\"Product.Low_sugar\" class=\"text-input\" id=\"Product.Low_sugar\" /><label>Low_sugar</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Paleo [(ngModel)]=\"product.paleo\" name=\"Product.Paleo\" class=\"text-input\" id=\"Product.Paleo\" /><label>Paleo</label></td>\r\n      </tr>\r\n      <tr  class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Peanut_free [(ngModel)]=\"product.peanut_free\" name=\"Product.Peanut_free\" class=\"text-input\" id=\"Product.Peanut_free\" /><label>Peanut_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Pecatarian [(ngModel)]=\"product.pecatarian\" name=\"Product.Pecatarian\" class=\"text-input\" id=\"Product.Pecatarian\" /><label>Pecatarian</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Pork_free [(ngModel)]=\"product.pork_free\" name=\"Product.Pork_free\" class=\"text-input\" id=\"Product.Pork_free\" /><label>Pork_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Red_meat_free [(ngModel)]=\"product.red_meat_free\" name=\"Product.Red_meat_free\" class=\"text-input\" id=\"Product.Red_meat_free\" /><label class=\"text-danger\">Red_meat_free</label></td>\r\n      </tr>\r\n      <tr  class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Sesame_free [(ngModel)]=\"product.sesame_free\" name=\"Product.Sesame_free\" class=\"text-input\" id=\"Product.Sesame_free\" /><label>Sesame_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Shellfish_free [(ngModel)]=\"product.shellfish_free\" name=\"Product.Shellfish_free\" class=\"text-input\" id=\"Product.Shellfish_free\" /><label class=\"text-danger\">Shellfish_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Soy_free [(ngModel)]=\"product.soy_free\" name=\"Product.Soy_free\" class=\"text-input\" id=\"Product.Soy_free\" /><label>Soy_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Sugar_conscious [(ngModel)]=\"product.sugar_conscious\" name=\"Product.Sugar_conscious\" class=\"text-input\" id=\"Product.Sugar_conscious\" /><label>Sugar_conscious</label></td>\r\n      </tr>\r\n      <tr  class=\"borderless\">\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Tree_nut_free [(ngModel)]=\"product.tree_nut_free\" name=\"Product.Tree_nut_free\" class=\"text-input\" id=\"Product.Tree_nut_free\" /><label>Tree_nut_free</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Vegan [(ngModel)]=\"product.vegan\" name=\"Product.Vegan\" class=\"text-input\" id=\"Product.Vegan\" /><label>Vegan</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Vegetarian [(ngModel)]=\"product.vegetarian\" name=\"Product.Vegetarian\" class=\"text-input\" id=\"Product.Vegetarian\" /><label>Vegetarian</label></td>\r\n        <td class=\"borderless\"><input type=\"checkbox\" #Wheat_free [(ngModel)]=\"product.wheat_free\" name=\"Product.Wheat_free\" class=\"text-input\" id=\"Product.Wheat_free\" /><label>Wheat_free</label></td>\r\n      </tr>\r\n      <tr  class=\"borderless\">\r\n        <td class=\"borderless\">\r\n          <button name=\"ID\"\r\n                  (click)=\"senddata( naam.value, imgurl.value, Alcohol_free.checked,Celery_free.checked,\r\n                    Crustacean_free.checked, Dairy_free.checked, Egg_free.checked, Fish_free.checked, Gluten_free.checked,\r\n                    Kidney_friendly.checked, Kosher.checked, Low_potassium.checked, Lupine_free.checked, Low_fat_abs.checked,\r\n                    Mustard_free.checked, No_oil_added.checked, Low_sugar.checked, Paleo.checked, Peanut_free.checked, Pecatarian.checked,\r\n                    Pork_free.checked, Red_meat_free.checked, Sesame_free.checked, Shellfish_free.checked, Soy_free.checked,\r\n                    Sugar_conscious.checked, Tree_nut_free.checked, Vegan.checked, Vegetarian.checked, Wheat_free.checked,product.id)\"\r\n                  type=\"submit\" class=\"btn btn-success form-control\" id=\"ID\">\r\n            Edit\r\n          </button>\r\n        </td>\r\n        <td class=\"borderless\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteprod(product.id)\" name=\"delete\">Delete</button></td>\r\n      </tr>\r\n      <tr class=\"borderless\">\r\n        <td class=\"borderless\" colspan=\"4\"></td>\r\n      </tr>\r\n      <tr class=\"seperate_border\">\r\n        <td class=\"seperate_border\" colspan=\"4\"></td>\r\n      </tr>\r\n    </ng-container>\r\n    <tr class=\"borderless\">\r\n      <td class=\"borderless\">\r\n        <button *ngIf=\"!visual\" class=\"btn btn-primary\" (click)=\"visualizer()\">voeg producten toe </button>\r\n      </td>\r\n    </tr>\r\n    <tr class=\"borderless\">\r\n      <td class=\"borderless\">\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div *ngIf=\"visual\">\r\n  <h3>add product</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"><input #naam type=\"text\" name=\"Product.Name\" class=\"form-control text-input required\" id=\"Name\" placeholder=\"Name\" /></div>\r\n    <div class=\"col-sm-8\"><input #imgurl type=\"text\" name=\"Product.ImageUrl\" class=\"form-control text-input\" id=\"ImageUrl\" placeholder=\"ImageUrl\" /></div>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n  </div>\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Alcohol_free\" name=\"Product.Alcohol_free\" class=\"text-input\" id=\"Product.Alcohol_free\" /><label class=\"text-danger\">Alcohol free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Celery_free\" name=\"Product.Celery_free\" class=\"text-input\" id=\"Product.Celery_free\" /><label>Celery free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Crustacean_free\" name=\"Product.Crustacean_free\" class=\"text-input\" id=\"Product.Crustacean_free\" /><label class=\"text-danger\">Crustacean free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Dairy_free\" name=\"Product.Dairy_free\" class=\"text-input\" id=\"Product.Dairy_free\" /><label class=\"text-warning\">Dairy free</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Egg_free\" name=\"Product.Egg_free\" class=\"text-input\" id=\"Product.Egg_free\" /><label class=\"text-danger\">Egg free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Fish_free\" name=\"Product.Fish_free\" class=\"text-input\" id=\"Product.Fish_free\" /><label class=\"text-warning\">Fish free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Gluten_free\" name=\"Product.Gluten_free\" class=\"text-input\" id=\"Product.Gluten_free\" /><label>Gluten free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Kidney_friendly\" name=\"Product.Kidney_friendly\" class=\"text-input\" id=\"Product.Kidney_friendly\" /><label>Kidney friendly</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Kosher\" name=\"Product.Kosher\" class=\"text-input\" id=\"Product.Kosher\" /><label>Kosher</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Low_potassium\" name=\"Product.Low_potassium\" class=\"text-input\" id=\"Product.Low_potassium\" /><label>Low potassium</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Lupine_free\" name=\"Product.Lupine_free\" class=\"text-input\" id=\"Product.Lupine_free\" /><label>Lupine free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Low_fat_abs\" name=\"Product.Low_fat_abs\" class=\"text-input\" id=\"Product.Low_fat_abs\" /><label>Low fat abs</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Mustard_free\" name=\"Product.Mustard_free\" class=\"text-input\" id=\"Product.Mustard_free\" /><label>Mustard free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.No_oil_added\" name=\"Product.No_oil_added\" class=\"text-input\" id=\"Product.No_oil_added\" /><label>No oil added</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Low_sugar\" name=\"Product.Low_sugar\" class=\"text-input\" id=\"Product.Low_sugar\" /><label>Low sugar</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Paleo\" name=\"Product.Paleo\" class=\"text-input\" id=\"Product.Paleo\" /><label>Paleo</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Peanut_free\" name=\"Product.Peanut_free\" class=\"text-input\" id=\"Product.Peanut_free\" /><label>Peanut free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Pecatarian\" name=\"Product.Pecatarian\" class=\"text-input\" id=\"Product.Pecatarian\" /><label>Pecatarian</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Pork_free\" name=\"Product.Pork_free\" class=\"text-input\" id=\"Product.Pork_free\" /><label>Pork free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Red_meat_free\" name=\"Product.Red_meat_free\" class=\"text-input\" id=\"Product.Red_meat_free\" /><label class=\"text-danger\">Red meat free</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Sesame_free\" name=\"Product.Sesame_free\" class=\"text-input\" id=\"Product.Sesame_free\" /><label>Sesame free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Shellfish_free\" name=\"Product.Shellfish_free\" class=\"text-input\" id=\"Product.Shellfish_free\" /><label class=\"text-danger\">Shellfish free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Soy_free\" name=\"Product.Soy_free\" class=\"text-input\" id=\"Product.Soy_free\" /><label>Soy free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Sugar_conscious\" name=\"Product.Sugar_conscious\" class=\"text-input\" id=\"Product.Sugar_conscious\" /><label> Sugar conscious</label></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Tree_nut_free\" name=\"Product.Tree_nut_free\" class=\"text-input\" id=\"Product.Tree_nut_free\" /><label>Tree nut free</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Vegan\" name=\"Product.Vegan\" class=\"text-input\" id=\"Product.Vegan\" /><label>Vegan</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Vegetarian\" name=\"Product.Vegetarian\" class=\"text-input\" id=\"Product.Vegetarian\" /><label>Vegetarian</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" [(ngModel)]=\"Product.Wheat_free\" name=\"Product.Wheat_free\" class=\"text-input\" id=\"Product.Wheat_free\" /><label>Wheat_free</label></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngIf=\"visual\" class=\"col-sm-2\"><button (click)=\"addproductbutton( naam.value,imgurl.value)\" type=\"submit\" class=\"btn btn-success form-control\">voeg toe</button></div>\r\n    <button *ngIf=\"visual\" class=\"col-sm-2 btn btn-primary\" (click)=\"visualizer()\">bekijk producten </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/components/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = (function () {
    function ProductComponent(_httpService, _service, _authService, router) {
        this._httpService = _httpService;
        this._service = _service;
        this._authService = _authService;
        this.router = router;
        this.deleteproduct = false;
        this.editproduct = false;
        this.addproduct = false;
        this.visual = false;
        this.producteditor = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, Alcohol_free: this.Alcohol_free, ImageUrl: this.ImageUrl, Name: this.name, id: this.id };
        this.productdelete = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, id: this.id };
        this.Product = {
            id: this.id, deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct,
            Name: this.name, ImageUrl: this.ImageUrl,
            Alcohol_free: false, Celery_free: false, Crustacean_free: false, Dairy_free: false, Egg_free: false,
            Fish_free: false, Gluten_free: false, Kidney_friendly: false, Kosher: false, Low_potassium: false,
            Lupine_free: false, Low_fat_abs: false, Mustard_free: false, No_oil_added: false, Low_sugar: false,
            Paleo: false, Peanut_free: false, Pecatarian: false, Pork_free: false, Red_meat_free: false,
            Sesame_free: false, Shellfish_free: false, Soy_free: false, Sugar_conscious: false,
            Tree_nut_free: false, Vegan: false, Vegetarian: false, Wheat_free: false
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.Role != "Dietist") {
            this.router.navigate(['../restricted']);
        }
        this._service.getProducten()
            .subscribe(function (data) { return _this.product = data; });
    };
    //edit
    ProductComponent.prototype.senddata = function (naam, imgurl, Alcohol_free, Celery_free, Crustacean_free, Dairy_free, Egg_free, Fish_free, Gluten_free, Kidney_friendly, Kosher, Low_potassium, Lupine_free, Low_fat_abs, Mustard_free, No_oil_added, Low_sugar, Paleo, Peanut_free, Pecatarian, Pork_free, Red_meat_free, Sesame_free, Shellfish_free, Soy_free, Sugar_conscious, Tree_nut_free, Vegan, Vegetarian, Wheat_free, id) {
        var _this = this;
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
        this.Mustard_free = Mustard_free;
        this.No_oil_added = No_oil_added;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.addproducten();
        this._httpService.post('/api/productdbsave', JSON.stringify(this.Product), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //add
    ProductComponent.prototype.addproductbutton = function (name, url) {
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.addproducten();
        this._httpService.post('/api/productdbsave', JSON.stringify(this.Product), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.name = data.name;
            _this.ImageUrl = data.imageUrl;
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    //delete
    ProductComponent.prototype.deleteprod = function (id) {
        var _this = this;
        this.deleteproduct = true;
        this.editproduct = false;
        this.addproduct = false;
        this.id = id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.delete();
        this._httpService.post('/api/productdbsave', JSON.stringify(this.productdelete), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        setTimeout(function () { _this.reload(); }, 500);
    };
    ProductComponent.prototype.visualizer = function () {
        var _this = this;
        this.visual = !this.visual;
        setTimeout(function () { _this.reload(); }, 500);
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        var productSearchInput = document.getElementById("ProductSearchInput").value;
        this._httpService.get('/api/product/' + productSearchInput)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.name = data.name;
            _this.ImageUrl = data.imageUrl;
        });
    };
    ProductComponent.prototype.sendinfo = function () {
        this.producteditor = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, Alcohol_free: this.Alcohol_free, ImageUrl: this.ImageUrl, Name: this.name, id: this.id };
    };
    ProductComponent.prototype.delete = function () {
        this.productdelete = { deleteproduct: this.deleteproduct, editproduct: this.editproduct, addproduct: this.addproduct, id: this.id };
    };
    ProductComponent.prototype.addproducten = function () {
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
    };
    ProductComponent.prototype.reload = function () {
        var _this = this;
        this._service.getProducten()
            .subscribe(function (data) { return _this.product = data; });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getProducten = function () {
        return this._http.get('/api/Productdbsave/')
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n  border-width: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\r\n  <div class=\"panel-heading\"><strong>Pas informatie van je account aan</strong></div>\r\n  <div class=\"panel-body container\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(RegisterForm)\">\r\n      <div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"Email\">Email</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.Email\" name=\"RegisterForm.Email\" class=\"form-control text-input\" id=\"Email\" placeholder=\"RegisterForm.Email\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>       \r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"VoorNaam\">VoorNaam</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.VoorNaam\" name=\"RegisterForm.VoorNaam\" class=\"form-control text-input\" id=\"VoorNaam\" placeholder=\"VoorNaam\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>          \r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"AchterNaam\">AchterNaam</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.AchterNaam\" name=\"RegisterForm.AchterNaam\" class=\"form-control text-input\" id=\"AchterNaam\" placeholder=\"AchterNaam\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>         \r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"Gsm\">Gsm</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.Gsm\" name=\"RegisterForm.Gsm\" class=\"form-control text-input\" id=\"Gsm\" placeholder=\"Gsm\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>       \r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"Doelgroep\">Doelgroep</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.Doelgroep\" name=\"RegisterForm.Doelgroep\" class=\"form-control text-input\" id=\"Doelgroep\" placeholder=\"Doelgroep\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>        \r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"DietisEmail\">DietisEmail</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"RegisterForm.DietisEmail\" name=\"RegisterForm.DietisEmail\" class=\"form-control text-input\" id=\"DietisEmail\" placeholder=\"DietisEmail\" /></div>\r\n            <div class=\"col-sm-1\"></div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <button type=\"submit\" class=\"btn btn-info\">Register</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, _authService, _httpService) {
        this.router = router;
        this._authService = _authService;
        this._httpService = _httpService;
        this.RegisterForm = { Email: undefined, Password: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined, Doelgroep: undefined, DietisEmail: undefined };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
            this._httpService.get('/api/profile/' + this._authService.Email)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.RegisterForm.Email = data.email;
                _this.RegisterForm.AchterNaam = data.achterNaam;
                _this.RegisterForm.VoorNaam = data.voorNaam;
                _this.RegisterForm.Gsm = data.gsm;
                _this.RegisterForm.Doelgroep = data.doelgroep;
                _this.RegisterForm.DietisEmail = data.dietisEmail;
            });
        }
        else {
            this.router.navigate(['../login']);
        }
    };
    ProfileComponent.prototype.onSubmit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/profile', JSON.stringify(this.RegisterForm), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recepten/recepten.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\r\n  border-width: 3px;\r\n}\r\n\r\n#show_ingredient_button{\r\n  border: 1px solid;\r\n  color: forestgreen;\r\n  max-width:200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recepten/recepten.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-sm-9\">\r\n    <input (keyup.enter)=\"searchRecipe()\" id=\"search\" type=\"text\" class=\"form-control\" value=\"\">\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <button (click)=\"searchRecipe()\" (keyup.enter)=\"searchRecipe()\" class=\"btn btn-default form-control\">search</button>\r\n  </div>\r\n</div>\r\n<br />\r\n\r\n<div style=\"display:none\" id=\"pregnant_approved\" class=\"panel panel-success\">\r\n  <div class=\"panel-footer\">\r\n    <strong class=\"text-success\">approved recipe</strong>\r\n  </div>\r\n  <div class=\"container panel-body\">\r\n    <div class=\"col-sm-9\"><p>This recipe is allowed while pregnant</p></div>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\" id=\"pregnant_avoid\" class=\"panel panel-warning\">\r\n  <div class=\"panel-heading\">\r\n    <strong class=\"text-warning\">avoid recipe</strong>\r\n  </div>\r\n  <div class=\"container panel-body\">\r\n    <p>This recipe is best to avoid when pregnant, but allowed in some specific types or low amounts</p>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\" id=\"pregnant_warning\" class=\"panel panel-danger\">\r\n  <div class=\"panel-heading\">\r\n    <strong class=\"text-danger\">forbidden recipe</strong>\r\n  </div>\r\n  <div class=\"container panel-body\">\r\n    <p>This recipe is not safe to eat when pregnant!</p>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\" id=\"recipelist_edaman\" class=\"panel panel-warning\">\r\n  <div class=\"container panel-body\">\r\n    <br>\r\n    <p>Name: {{name_edaman}}</p>\r\n    <p>healthLables: {{healthLables_edaman}}</p>\r\n    <p>ingredients: {{ingredients_edaman}}</p><br>\r\n    <img [src]=\"img_edaman\" class=\"img-rounded\" width=\"200\" /><br>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <strong class=\"text-warning\"> powered by edaman API: https://www.edamam.com/, content is not verified by the dietist. </strong>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\" id=\"loading\">\r\n  <div>\r\n    <br>\r\n    <p>loading your recipe, please wait</p>\r\n    <img src=\"https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif\" class=\"img-circle\" width=\"200\" height=\"200\">\r\n  </div>\r\n</div>\r\n\r\n<tr *ngIf=\"!healthLables_edaman\">\r\n  <td colspan=\"5\">\r\n    gelieven recept in te geven\r\n  </td>\r\n</tr>\r\n\r\n<div style=\"display:none\" id=\"recipelist_db\" class=\"panel panel-success\">\r\n  <div class=\"panel-body\">\r\n    <div>\r\n      <p>Name: {{name_db}}</p>\r\n      <p>\r\n        healthLables: {{Alcohol_free}} {{Celery_free}} {{Crustacean_free}} {{Dairy_free}} {{Egg_free}}\r\n        {{Fish_free}} {{Gluten_free}} {{Kidney_friendly}} {{Kosher}} {{Low_potassium}} {{Lupine_free}}\r\n        {{Low_fat_abs}} {{Mustard_free}} {{No_oil_added}} {{Low_sugar}} {{Paleo}} {{Peanut_free}}\r\n        {{Pecatarian}} {{Pork_free}} {{Red_meat_free}} {{Sesame_free}} {{Shellfish_free}} {{Soy_free}}\r\n        {{Sugar_conscious}} {{Tree_nut_free}} {{Vegan}} {{Vegetarian}} {{Wheat_free}}\r\n      </p>\r\n      <img [src]=\"img_db\" class=\"img-rounded\" width=\"200\" /><br>\r\n      <br>\r\n      <div style=\"display:block\" id=\"ingredient_button\"><button (click)=\"getIngredients()\" id=\"show_ingredient_button\" class=\"btn btn-outline-dark form-control\">show ingredients</button></div>\r\n    </div>  \r\n    <div style=\"display:none\" id=\"ingredient_list\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Naam</th>\r\n            <th>Value</th>\r\n            <th>Maxzwanger</th>\r\n            <th>MaxDiabeet</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let ingredient of ingredients_db;\">\r\n            <tr class=\"borderless\">\r\n              <td class=\"borderless\">\r\n                <p>{{ingredient.naam}}</p>\r\n              </td>\r\n              <td class=\"borderless\">\r\n                <p>{{ingredient.value}}</p>\r\n              </td>\r\n              <td class=\"borderless\">\r\n                <p>{{ingredient.maxZwanger}}</p>\r\n              </td>\r\n              <td class=\"borderless\">\r\n                <p>{{ingredient.maxDiabeet}}</p>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <strong class=\"text-success\"> from the \"what can i eat\" database, content is verified </strong>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/recepten/recepten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_edaman_api_data_service__ = __webpack_require__("../../../../../src/app/services/edaman-api-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceptenComponent = (function () {
    function ReceptenComponent(router, _authService, dataService, _httpService) {
        this.router = router;
        this._authService = _authService;
        this.dataService = dataService;
        this._httpService = _httpService;
        this.http = undefined;
        this.contact = { Name: undefined, Subject: undefined, Email: undefined, Message: undefined, Messagea: undefined, Messageb: undefined };
        this.getIng = { Email: undefined, Naam: undefined, Healthlabels: undefined, Ingredients: undefined, ImageUrl: undefined };
    }
    ReceptenComponent.prototype.ngOnInit = function () {
        if (this._authService.Role == "Dietist" || this._authService.Role == "Klant") {
            //this.dataService.getProducten()
            //  .subscribe((productdata) => {
            //    this.product = productdata;
            //  });
        }
        else {
            this.router.navigate(['../login']);
        }
    };
    ReceptenComponent.prototype.searchRecipe = function () {
        var _this = this;
        document.getElementById('loading').style.display = "block";
        document.getElementById('recipelist_edaman').style.display = "none";
        document.getElementById('recipelist_db').style.display = "none";
        document.getElementById('pregnant_avoid').style.display = "none";
        document.getElementById('pregnant_warning').style.display = "none";
        document.getElementById('pregnant_approved').style.display = "none";
        document.getElementById('ingredient_button').style.display = "block";
        document.getElementById('ingredient_list').style.display = "none";
        this.dataService.getRecipe().subscribe(function (recipedata) {
            _this.name_edaman = recipedata.hits[0].recipe.label;
            _this.healthLables_edaman = recipedata.hits[0].recipe.healthLabels;
            _this.ingredients_edaman = recipedata.hits[0].recipe.ingredientLines;
            _this.img_edaman = recipedata.hits[0].recipe.image;
            //var converter = this.healthLables_edaman.join();
            //var converter1 = this.ingredients_edaman.join();
            console.log(recipedata);
            // this.contact.Message = this.name_edaman;
            //this.contact.Messagea = converter;
            // this.contact.Messageb = converter1;
            _this.getIng.Email = _this._authService.getMail();
            _this.getIng.Naam = document.getElementById("search").value;
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this._httpService.post('/api/Edaman', JSON.stringify(_this.getIng), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data == "does not exist") {
                    _this._httpService.post('/api/NewIngredient', JSON.stringify(_this.ingredients_edaman), options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { });
                    document.getElementById('loading').style.display = "none";
                    document.getElementById('recipelist_edaman').style.display = "block";
                }
                else if (data != "does not exist") {
                    _this.name_db = data.name;
                    _this.img_db = data.imageUrl;
                    _this.alcohol_free = data.alcohol_free;
                    _this.celery_free = data.celery_free;
                    _this.crustacean_free = data.crustacean_free;
                    _this.dairy_free = data.dairy_free;
                    _this.egg_free = data.egg_free;
                    _this.fish_free = data.fish_free;
                    _this.gluten_free = data.gluten_free;
                    _this.kidney_friendly = data.kidney_friendly;
                    _this.kosher = data.kosher;
                    _this.low_potassium = data.low_potassium;
                    _this.lupine_free = data.lupine_free;
                    _this.low_fat_abs = data.low_fat_abs;
                    _this.mustard_free = data.mustard_free;
                    _this.no_oil_added = data.no_oil_added;
                    _this.low_sugar = data.low_sugar;
                    _this.paleo = data.paleo;
                    _this.peanut_free = data.peanut_free;
                    _this.pecatarian = data.pecatarian;
                    _this.pork_free = data.pork_free;
                    _this.red_meat_free = data.red_meat_free;
                    _this.sesame_free = data.sesame_free;
                    _this.shellfish_free = data.shellfish_free;
                    _this.soy_free = data.soy_free;
                    _this.sugar_conscious = data.sugar_conscious;
                    _this.tree_nut_free = data.tree_nut_free;
                    _this.vegan = data.vegan;
                    _this.vegetarian = data.vegetarian;
                    _this.wheat_free = data.wheat_free;
                    if (_this.alcohol_free == true) {
                        _this.Alcohol_free = "alcohol_free,";
                    }
                    else {
                        _this.Alcohol_free = "";
                        _this.Forbidden_Recipe_Pregnant = true;
                    }
                    if (_this.celery_free == true) {
                        _this.Celery_free = "celery_free,";
                    }
                    else {
                        _this.Celery_free = "";
                    }
                    if (_this.crustacean_free == true) {
                        _this.Crustacean_free = "crustacean_free,";
                    }
                    else {
                        _this.Crustacean_free = "";
                        _this.Forbidden_Recipe_Pregnant = true;
                    }
                    if (_this.dairy_free == true) {
                        _this.Dairy_free = "dairy_free,";
                    }
                    else {
                        _this.Dairy_free = "";
                        _this.avoid_Recipe_Pregnant = true;
                    }
                    if (_this.egg_free == true) {
                        _this.Egg_free = "egg_free,";
                    }
                    else {
                        _this.Egg_free = "";
                        _this.Forbidden_Recipe_Pregnant = true;
                    }
                    if (_this.fish_free == true) {
                        _this.Fish_free = "fish_free,";
                    }
                    else {
                        _this.Fish_free = "";
                        _this.avoid_Recipe_Pregnant = true;
                    }
                    if (_this.gluten_free == true) {
                        _this.Gluten_free = "gluten_free,";
                    }
                    else {
                        _this.Gluten_free = "";
                    }
                    if (_this.kidney_friendly == true) {
                        _this.Kidney_friendly = "kidney_friendly,";
                    }
                    else {
                        _this.Kidney_friendly = "";
                    }
                    if (_this.kosher == true) {
                        _this.Kosher = "kosher,";
                    }
                    else {
                        _this.Kosher = "";
                    }
                    if (_this.low_potassium == true) {
                        _this.Low_potassium = "low_potassium,";
                    }
                    else {
                        _this.Low_potassium = "";
                    }
                    if (_this.lupine_free == true) {
                        _this.Lupine_free = "lupine_free,";
                    }
                    else {
                        _this.Lupine_free = "";
                    }
                    if (_this.low_fat_abs == true) {
                        _this.Low_fat_abs = "low_fat_abs,";
                    }
                    else {
                        _this.Low_fat_abs = "";
                    }
                    if (_this.mustard_free == true) {
                        _this.Mustard_free = "mustard_free,";
                    }
                    else {
                        _this.Mustard_free = "";
                    }
                    if (_this.no_oil_added == true) {
                        _this.No_oil_added = "no_oil_added,";
                    }
                    else {
                        _this.No_oil_added = "";
                    }
                    if (_this.low_sugar == true) {
                        _this.Low_sugar = "low_sugar,";
                    }
                    else {
                        _this.Low_sugar = "";
                    }
                    if (_this.paleo == true) {
                        _this.Paleo = "paleo,";
                    }
                    else {
                        _this.Paleo = "";
                    }
                    if (_this.peanut_free == true) {
                        _this.Peanut_free = "peanut_free,";
                    }
                    else {
                        _this.Peanut_free = "";
                    }
                    if (_this.pecatarian == true) {
                        _this.Pecatarian = "pecatarian,";
                    }
                    else {
                        _this.Pecatarian = "";
                    }
                    if (_this.pork_free == true) {
                        _this.Pork_free = "pork_free,";
                    }
                    else {
                        _this.Pork_free = "";
                    }
                    if (_this.red_meat_free == true) {
                        _this.Red_meat_free = "red_meat_free,";
                    }
                    else {
                        _this.Red_meat_free = "";
                        _this.Forbidden_Recipe_Pregnant = true;
                    }
                    if (_this.sesame_free == true) {
                        _this.Sesame_free = "sesame_free,";
                    }
                    else {
                        _this.Sesame_free = "";
                    }
                    if (_this.shellfish_free == true) {
                        _this.Shellfish_free = "shellfish_free,";
                    }
                    else {
                        _this.Shellfish_free = "";
                        _this.Forbidden_Recipe_Pregnant = true;
                    }
                    if (_this.soy_free == true) {
                        _this.Soy_free = "soy_free,";
                    }
                    else {
                        _this.Soy_free = "";
                    }
                    if (_this.sugar_conscious == true) {
                        _this.Sugar_conscious = "sugar_conscious";
                    }
                    else {
                        _this.Sugar_conscious = "";
                    }
                    if (_this.tree_nut_free == true) {
                        _this.Tree_nut_free = "tree_nut_free,";
                    }
                    else {
                        _this.Tree_nut_free = "";
                    }
                    if (_this.vegan == true) {
                        _this.Vegan = "vegan,";
                    }
                    else {
                        _this.Vegan = "";
                    }
                    if (_this.vegetarian == true) {
                        _this.Vegetarian = "vegetarian,";
                    }
                    else {
                        _this.Vegetarian = "";
                    }
                    if (_this.wheat_free == true) {
                        _this.Wheat_free = "wheat_free,";
                    }
                    else {
                        _this.Wheat_free = "";
                    }
                    document.getElementById('loading').style.display = "none";
                    document.getElementById('recipelist_db').style.display = "block";
                    if (_this.Forbidden_Recipe_Pregnant == true) {
                        document.getElementById('pregnant_warning').style.display = "block";
                    }
                    else if (_this.avoid_Recipe_Pregnant == true) {
                        document.getElementById('pregnant_avoid').style.display = "block";
                    }
                    else {
                        document.getElementById('pregnant_approved').style.display = "block";
                    }
                    _this.Forbidden_Recipe_Pregnant = false;
                    _this.avoid_Recipe_Pregnant = false;
                }
            });
        });
    };
    ReceptenComponent.prototype.getIngredients = function () {
        var _this = this;
        document.getElementById('ingredient_button').style.display = "none";
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/Recepten', JSON.stringify(this.ingredients_edaman), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.ingredients_db = data;
            document.getElementById('ingredient_list').style.display = "block";
        });
    };
    ReceptenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recepten',
            template: __webpack_require__("../../../../../src/app/components/recepten/recepten.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recepten/recepten.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_3__services_edaman_api_data_service__["a" /* EdamanApiDataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ReceptenComponent);
    return ReceptenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>welkom, gelieve in te Registreren</h3>\r\n<br>\r\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(RegisterForm)\">\r\n  <div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"Email\">Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.Email\" name=\"RegisterForm.Email\" class=\"form-control text-input\" id=\"Email\" placeholder=\"Email\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"Password\">Password</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.Password\" name=\"RegisterForm.Password\" class=\"form-control text-input\" id=\"Password\" placeholder=\"Password\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"VoorNaam\">VoorNaam</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.VoorNaam\" name=\"RegisterForm.VoorNaam\" class=\"form-control text-input\" id=\"VoorNaam\" placeholder=\"VoorNaam\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"AchterNaam\">AchterNaam</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.AchterNaam\" name=\"RegisterForm.AchterNaam\" class=\"form-control text-input\" id=\"AchterNaam\" placeholder=\"AchterNaam\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"Gsm\">Gsm</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.Gsm\" name=\"RegisterForm.Gsm\" class=\"form-control text-input\" id=\"Gsm\" placeholder=\"Gsm\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"Doelgroep\">Doelgroep</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.Doelgroep\" name=\"RegisterForm.Doelgroep\" class=\"form-control text-input\" id=\"Doelgroep\" placeholder=\"Doelgroep\" />\r\n    </div>\r\n    <div class=\"form-group required\">\r\n      <label for=\"DietisEmail\">DietisEmail</label>\r\n      <input type=\"text\" [(ngModel)]=\"RegisterForm.DietisEmail\" name=\"RegisterForm.DietisEmail\" class=\"form-control text-input\" id=\"DietisEmail\" placeholder=\"DietisEmail\" />\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-success\">Register</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_httpService, _authService) {
        this._httpService = _httpService;
        this._authService = _authService;
        this.RegisterForm = { Email: undefined, Password: undefined, VoorNaam: undefined, AchterNaam: undefined, Gsm: undefined, Doelgroep: undefined, DietisEmail: undefined };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._httpService.post('/api/register', JSON.stringify(this.RegisterForm), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this._authService.setMail(data[0]);
            _this._authService.setRole(data[1]);
            _this._authService.setfirstName(data[2]);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* authService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/restricted/restricted.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/restricted/restricted.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3 class=\"text-danger\">U heeft geen toegang tot de pagina die u probeert te bereiken.</h3><br />\r\n<p>Deze pagina vereist niveau \"dietist\" om de inhoud weer te geven. Klik <a routerLink=\"/\">hier</a> om terug naar de startpagina te gaan.</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/restricted/restricted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestrictedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestrictedComponent = (function () {
    function RestrictedComponent() {
    }
    RestrictedComponent.prototype.ngOnInit = function () {
    };
    RestrictedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-restricted',
            template: __webpack_require__("../../../../../src/app/components/restricted/restricted.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/restricted/restricted.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RestrictedComponent);
    return RestrictedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var authService = (function () {
    function authService() {
        this.Email = "";
        this.Role = "";
        this.firstName = "";
    }
    authService.prototype.setMail = function (data) {
        this.Email = data;
    };
    authService.prototype.setRole = function (data) {
        this.Role = data;
    };
    authService.prototype.setfirstName = function (data) {
        this.firstName = data;
    };
    authService.prototype.getMail = function () {
        return this.Email;
    };
    authService.prototype.getRole = function () {
        return this.Role;
    };
    authService.prototype.getfirstName = function () {
        return this.firstName;
    };
    authService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], authService);
    return authService;
}());



/***/ }),

/***/ "../../../../../src/app/services/edaman-api-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdamanApiDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EdamanApiDataService = (function () {
    function EdamanApiDataService(http) {
        this.http = http;
        console.log('Edaman data service connected...');
    }
    EdamanApiDataService.prototype.getRecipe = function () {
        return this.http.get('https://api.edamam.com/search?q=' + document.getElementById("search").value + '&app_id=f4d31e52&app_key=8a7e6d520af65d2a9a8632cbd8d107a1&from=0&to=3')
            .map(function (res) { return res.json(); });
    };
    EdamanApiDataService.prototype.getProducten = function () {
        return this.http.get('/api/Edaman/all')
            .map(function (response) { return response.json(); });
    };
    EdamanApiDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EdamanApiDataService);
    return EdamanApiDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map