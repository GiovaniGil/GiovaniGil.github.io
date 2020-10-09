(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_router {\n  width: 80%;\n    display: block;\n    margin: auto;\n}\n\n.mat-drawer-container {\n  background: #fff;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\" autosize>\n  <mat-sidenav\n  #drawer\n  class=\"sidenav\"\n  fixedInViewport=\"true\"\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n  [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n  [opened]=\"false\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/personagens\">Personagens</a>\n      <a mat-list-item routerLink=\"/planetas\">Planetas</a>\n      <a mat-list-item routerLink=\"/sobre\">Sobre</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Dragon Ball</span>\n    </mat-toolbar>\n    <div class=\"content_router\">\n    <router-outlet></router-outlet>\n  </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _personagens_personagens_card_personagens_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personagens/personagens-card/personagens-card.component */ "./src/app/personagens/personagens-card/personagens-card.component.ts");
/* harmony import */ var _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personagens/personagens-list/personagens-list.component */ "./src/app/personagens/personagens-list/personagens-list.component.ts");
/* harmony import */ var _personagens_personagens_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personagens/personagens.module */ "./src/app/personagens/personagens.module.ts");
/* harmony import */ var _planetas_planetas_card_planetas_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planetas/planetas-card/planetas-card.component */ "./src/app/planetas/planetas-card/planetas-card.component.ts");
/* harmony import */ var _planetas_planetas_list_planetas_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./planetas/planetas-list/planetas-list.component */ "./src/app/planetas/planetas-list/planetas-list.component.ts");
/* harmony import */ var _planetas_planetas_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./planetas/planetas.module */ "./src/app/planetas/planetas.module.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _residentes_residentes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./residentes/residentes.component */ "./src/app/residentes/residentes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _personagens_personagens_card_personagens_card_component__WEBPACK_IMPORTED_MODULE_7__["PersonagensCardComponent"],
                _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_8__["PersonagensListComponent"],
                _planetas_planetas_list_planetas_list_component__WEBPACK_IMPORTED_MODULE_11__["PlanetasListComponent"],
                _planetas_planetas_card_planetas_card_component__WEBPACK_IMPORTED_MODULE_10__["PlanetasCardComponent"],
                _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_13__["SobreComponent"],
                _residentes_residentes_component__WEBPACK_IMPORTED_MODULE_14__["ResidentesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _personagens_personagens_module__WEBPACK_IMPORTED_MODULE_9__["PersonagensModule"],
                _planetas_planetas_module__WEBPACK_IMPORTED_MODULE_12__["PlanetasModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _planetas_planetas_list_planetas_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planetas/planetas-list/planetas-list.component */ "./src/app/planetas/planetas-list/planetas-list.component.ts");
/* harmony import */ var _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personagens/personagens-list/personagens-list.component */ "./src/app/personagens/personagens-list/personagens-list.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonagensListComponent"] },
    { path: 'personagens', component: _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonagensListComponent"] },
    { path: 'planetas', component: _planetas_planetas_list_planetas_list_component__WEBPACK_IMPORTED_MODULE_2__["PlanetasListComponent"] },
    { path: 'sobre', component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__["SobreComponent"] },
    { path: 'residentes/:planeta', component: _personagens_personagens_list_personagens_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonagensListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/personagens/personagens-card/personagens-card.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/personagens/personagens-card/personagens-card.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  background-color: #fff;\n  max-width: 100%;\n  text-align: center;\n  font-size: 18px;\n  padding: 20px 15px;\n}\n\n.image {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n  height: 150px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  width: 100%;\n}\n\nmat-card-header {\n  justify-content: center;\n}\n\n.mat-card-image {\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/personagens/personagens-card/personagens-card.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/personagens/personagens-card/personagens-card.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"item\">\n  <mat-card-header>\n    <mat-card-title class=\"titulo\">{{ titulo }}</mat-card-title>\n    <mat-card-subtitle>{{ subtitulo }}</mat-card-subtitle>\n  </mat-card-header>\n\n    <img class=\"image\" mat-card-image [src]=\"srcImagem\" [alt]=\"altImagem\">\n    <mat-card-content>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/personagens/personagens-card/personagens-card.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/personagens/personagens-card/personagens-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: PersonagensCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonagensCardComponent", function() { return PersonagensCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonagensCardComponent = /** @class */ (function () {
    function PersonagensCardComponent() {
    }
    PersonagensCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonagensCardComponent.prototype, "srcImagem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonagensCardComponent.prototype, "altImagem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonagensCardComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonagensCardComponent.prototype, "subtitulo", void 0);
    PersonagensCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personagens-card',
            template: __webpack_require__(/*! ./personagens-card.component.html */ "./src/app/personagens/personagens-card/personagens-card.component.html"),
            styles: [__webpack_require__(/*! ./personagens-card.component.css */ "./src/app/personagens/personagens-card/personagens-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonagensCardComponent);
    return PersonagensCardComponent;
}());



/***/ }),

/***/ "./src/app/personagens/personagens-list/personagens-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/personagens/personagens-list/personagens-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-grid-tile {\n  overflow: visible;\n\n}\n\n.mat-grid-list {\n  display: flex;\n  width: 900px;\n  position: relative;\n  margin: auto;\n}\n\n@media(max-width: 480px) {\n  .mat-grid-list {\n    width: 90%;\n  }\n}\n\n@media(min-width: 480px) {\n  mat-grid-list {\n    position: unset;\n  }\n  .mat-grid-list {\n    width: 50%;\n  }\n}\n\n@media(min-width: 600px) {\n  mat-grid-list {\n    position: unset;\n  }\n  .mat-grid-list {\n    width: 100%;\n  }\n}\n\napp-personagens-card {\n  width: 100%;\n}\n\n.form_input {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/personagens/personagens-list/personagens-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/personagens/personagens-list/personagens-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"form_input\" >\n  <mat-label>Buscar personagens</mat-label>\n  <input matInput placeholder=\"Nome do personagem\" value=\"\" (input)=\"nomeBusca = $event.target.value\">\n</mat-form-field>\n\n<mat-grid-list #grid [cols]=\"cols\" rowHeight=\"300px\" gutterSize=\"10px\">\n  <mat-grid-tile *ngFor=\"let personagem of filtrarPersonagens()\">\n\n   <app-personagens-card\n      [srcImagem]=\"formatarUrlImagem(personagem.image)\"\n      [altImagem]=\"personagem.name\"\n      [titulo]=\"personagem.name\"\n      [subtitulo]=\"personagem.name\"></app-personagens-card>\n\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/personagens/personagens-list/personagens-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/personagens/personagens-list/personagens-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: PersonagensListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonagensListComponent", function() { return PersonagensListComponent; });
/* harmony import */ var _planetas_planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../planetas/planetas-service/planetas.service */ "./src/app/planetas/planetas-service/planetas.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personsagens_service_personagens_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../personsagens-service/personagens.service */ "./src/app/personagens/personsagens-service/personagens.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonagensListComponent = /** @class */ (function () {
    function PersonagensListComponent(personagensService, planetasService, breakpointObserver, activatedRoute) {
        var _this = this;
        this.personagensService = personagensService;
        this.planetasService = planetasService;
        this.breakpointObserver = breakpointObserver;
        this.activatedRoute = activatedRoute;
        this.title = 'app';
        this.nomeBusca = '';
        this.personagens = [];
        this.gridByBreakpoint = {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1
        };
        // Verifica parâmetros de busca de residentes/planetas
        var planeta = this.activatedRoute.snapshot.params.planeta;
        if (planeta) {
            this.planetasService.findByName(planeta)
                .subscribe(function (planeta) {
                if (planeta) {
                    planeta.residents.forEach(function (residente) {
                        _this.personagensService.findByName(residente).subscribe(function (personagem) { return _this.personagens.push(personagem); });
                    });
                }
            });
        }
        else {
            this.personagensService.list()
                .subscribe(function (personagens) { return _this.personagens = personagens; });
        }
        /*this.personagens = [
          { id: '0', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
          { id: '1', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
          { id: '2', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
          { id: '3', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
        ];*/
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
        ]).subscribe(function (result) {
            if (result.matches) {
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                    _this.cols = _this.gridByBreakpoint.xs;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                    _this.cols = _this.gridByBreakpoint.sm;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
            }
        });
    }
    PersonagensListComponent.prototype.ngOnInit = function () {
    };
    PersonagensListComponent.prototype.filtrarPersonagens = function () {
        if (this.nomeBusca) {
            var exp_1 = new RegExp(this.nomeBusca.trim(), 'i');
            return this.personagens.filter(function (personagem) { return exp_1.test(personagem.name); });
        }
        return this.personagens;
    };
    PersonagensListComponent.prototype.formatarUrlImagem = function (url) {
        if (url.includes('http')) {
            return url;
        }
        else if (url.includes('..')) {
            return 'https://dragon-ball-api.herokuapp.com/' + url;
        }
    };
    PersonagensListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-personagens-list',
            template: __webpack_require__(/*! ./personagens-list.component.html */ "./src/app/personagens/personagens-list/personagens-list.component.html"),
            styles: [__webpack_require__(/*! ./personagens-list.component.css */ "./src/app/personagens/personagens-list/personagens-list.component.css")]
        }),
        __metadata("design:paramtypes", [_personsagens_service_personagens_service__WEBPACK_IMPORTED_MODULE_4__["PersonagensService"],
            _planetas_planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__["PlanetasService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PersonagensListComponent);
    return PersonagensListComponent;
}());



/***/ }),

/***/ "./src/app/personagens/personagens.module.ts":
/*!***************************************************!*\
  !*** ./src/app/personagens/personagens.module.ts ***!
  \***************************************************/
/*! exports provided: PersonagensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonagensModule", function() { return PersonagensModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PersonagensModule = /** @class */ (function () {
    function PersonagensModule() {
    }
    PersonagensModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ],
            exports: [],
            declarations: []
        })
    ], PersonagensModule);
    return PersonagensModule;
}());



/***/ }),

/***/ "./src/app/personagens/personsagens-service/personagens.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/personagens/personsagens-service/personagens.service.ts ***!
  \*************************************************************************/
/*! exports provided: PersonagensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonagensService", function() { return PersonagensService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API = 'https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/character';
var PersonagensService = /** @class */ (function () {
    function PersonagensService(http) {
        this.http = http;
        this.http = http;
    }
    PersonagensService.prototype.list = function () {
        return this.http
            .get(API);
    };
    PersonagensService.prototype.findByName = function (name) {
        return this.http
            .get(API + '/' + name);
    };
    PersonagensService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PersonagensService);
    return PersonagensService;
}());



/***/ }),

/***/ "./src/app/planetas/planetas-card/planetas-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/planetas/planetas-card/planetas-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  background-color: #fff;\n  max-width: 100%;\n  text-align: center;\n  font-size: 18px;\n  padding: 20px 15px;\n}\n\n.image {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n  height: 150px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  width: 100%;\n}\n\nmat-card-header {\n  justify-content: center;\n}\n\n.mat-card-image {\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/planetas/planetas-card/planetas-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/planetas/planetas-card/planetas-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"item\">\n  <mat-card-header>\n    <mat-card-title class=\"titulo\">Planeta {{ titulo }}</mat-card-title>\n  </mat-card-header>\n  <img class=\"image\" mat-card-image [src]=\"srcImagem\" [alt]=\"altImagem\">\n  <mat-card-content>\n    <mat-card-subtitle>População: {{ populacao }} habitantes.</mat-card-subtitle>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button [routerLink]=\"routeTo\">Ver residentes </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/planetas/planetas-card/planetas-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/planetas/planetas-card/planetas-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlanetasCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetasCardComponent", function() { return PlanetasCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlanetasCardComponent = /** @class */ (function () {
    function PlanetasCardComponent() {
    }
    PlanetasCardComponent.prototype.ngOnInit = function () {
    };
    PlanetasCardComponent.prototype.exibirResidentes = function (planeta) {
        console.log(planeta);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlanetasCardComponent.prototype, "srcImagem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlanetasCardComponent.prototype, "altImagem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlanetasCardComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlanetasCardComponent.prototype, "populacao", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlanetasCardComponent.prototype, "routeTo", void 0);
    PlanetasCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planetas-card',
            template: __webpack_require__(/*! ./planetas-card.component.html */ "./src/app/planetas/planetas-card/planetas-card.component.html"),
            styles: [__webpack_require__(/*! ./planetas-card.component.css */ "./src/app/planetas/planetas-card/planetas-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanetasCardComponent);
    return PlanetasCardComponent;
}());



/***/ }),

/***/ "./src/app/planetas/planetas-list/planetas-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/planetas/planetas-list/planetas-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-grid-tile {\n  overflow: visible;\n\n}\n\n.mat-grid-list {\n  display: flex;\n  width: 900px;\n  position: relative;\n  margin: auto;\n}\n\n@media(max-width: 480px) {\n  .mat-grid-list {\n    width: 90%;\n  }\n}\n\n@media(min-width: 480px) {\n  mat-grid-list {\n    position: unset;\n  }\n  .mat-grid-list {\n    width: 50%;\n  }\n}\n\n@media(min-width: 600px) {\n  mat-grid-list {\n    position: unset;\n  }\n  .mat-grid-list {\n    width: 100%;\n  }\n}\n\napp-planetas-card {\n  width: 100%;\n}\n\n.form_input {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/planetas/planetas-list/planetas-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/planetas/planetas-list/planetas-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"form_input\">\n  <mat-label>Buscar Planetas</mat-label>\n  <input matInput placeholder=\"Nome do planeta\" value=\"\" (input)=\"planetaBusca = $event.target.value\">\n</mat-form-field>\n\n<mat-grid-list #grid [cols]=\"cols\" rowHeight=\"300px\" gutterSize=\"10px\">\n  <mat-grid-tile *ngFor=\"let planeta of filtrarPlanetas()\">\n\n   <app-planetas-card\n      [srcImagem]=\"formatarUrlImagem(planeta.image)\"\n      [altImagem]=\"planeta.name\"\n      [titulo]=\"planeta.name\"\n      [routeTo]=\"'/residentes/'+planeta.name\"\n      [populacao]=\"planeta.residents.length\"></app-planetas-card>\n\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "./src/app/planetas/planetas-list/planetas-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/planetas/planetas-list/planetas-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlanetasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetasListComponent", function() { return PlanetasListComponent; });
/* harmony import */ var _planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../planetas-service/planetas.service */ "./src/app/planetas/planetas-service/planetas.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetasListComponent = /** @class */ (function () {
    function PlanetasListComponent(planetasService, breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.planetaBusca = '';
        this.planetas = [];
        this.gridByBreakpoint = {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1
        };
        planetasService.list()
            .subscribe(function (planetas) { return _this.planetas = planetas; });
        /*this.planetas = [
          {id: '0', image: '/', name: 'Goku', residents: ['1', '2' , '3']},
          {id: '1', image: '/', name: 'Majin', residents: ['1', '2' , '3']},
          {id: '2', image: '/', name: 'Pico', residents: ['1', '2' , '3']},
          {id: '3', image: '/', name: 'Gohan', residents: ['1', '2' , '3']},
        ];*/
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge,
        ]).subscribe(function (result) {
            if (result.matches) {
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall]) {
                    _this.cols = _this.gridByBreakpoint.xs;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small]) {
                    _this.cols = _this.gridByBreakpoint.sm;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge]) {
                    _this.cols = _this.gridByBreakpoint.md;
                }
            }
        });
    }
    PlanetasListComponent.prototype.ngOnInit = function () {
    };
    PlanetasListComponent.prototype.filtrarPlanetas = function () {
        if (this.planetaBusca) {
            var exp_1 = new RegExp(this.planetaBusca.trim(), 'i');
            return this.planetas.filter(function (planeta) { return exp_1.test(planeta.name); });
        }
        return this.planetas;
    };
    PlanetasListComponent.prototype.formatarUrlImagem = function (url) {
        if (url.includes('http')) {
            return url;
        }
        else if (url.includes('..')) {
            return 'https://dragon-ball-api.herokuapp.com/' + url;
        }
    };
    PlanetasListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planetas-list',
            template: __webpack_require__(/*! ./planetas-list.component.html */ "./src/app/planetas/planetas-list/planetas-list.component.html"),
            styles: [__webpack_require__(/*! ./planetas-list.component.css */ "./src/app/planetas/planetas-list/planetas-list.component.css")]
        }),
        __metadata("design:paramtypes", [_planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__["PlanetasService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], PlanetasListComponent);
    return PlanetasListComponent;
}());



/***/ }),

/***/ "./src/app/planetas/planetas-service/planetas.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/planetas/planetas-service/planetas.service.ts ***!
  \***************************************************************/
/*! exports provided: PlanetasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetasService", function() { return PlanetasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API = 'https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/planet';
var PlanetasService = /** @class */ (function () {
    function PlanetasService(http) {
        this.http = http;
        this.http = http;
    }
    PlanetasService.prototype.list = function () {
        return this.http
            .get(API);
    };
    PlanetasService.prototype.findByName = function (name) {
        return this.http
            .get(API + '/' + name);
    };
    PlanetasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlanetasService);
    return PlanetasService;
}());



/***/ }),

/***/ "./src/app/planetas/planetas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/planetas/planetas.module.ts ***!
  \*********************************************/
/*! exports provided: PlanetasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetasModule", function() { return PlanetasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlanetasModule = /** @class */ (function () {
    function PlanetasModule() {
    }
    PlanetasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], PlanetasModule);
    return PlanetasModule;
}());



/***/ }),

/***/ "./src/app/residentes/residentes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/residentes/residentes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  background-color: #fff;\n  max-width: 100%;\n  text-align: center;\n  font-size: 18px;\n  padding: 20px 15px;\n}\n\n.image {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n  height: 150px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  width: 100%;\n}\n\nmat-card-header {\n  justify-content: center;\n}\n\n.mat-card-image {\n  margin: 0;\n}\n\n.mat-card {\n  width: 40%;\n  margin: 40px auto;\n}\n"

/***/ }),

/***/ "./src/app/residentes/residentes.component.html":
/*!******************************************************!*\
  !*** ./src/app/residentes/residentes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"item\">\n  <mat-card-header>\n    <mat-card-title class=\"titulo\">Planeta {{ planeta.name }}</mat-card-title>\n  </mat-card-header>\n  <img class=\"image\" mat-card-image [src]=\"planeta.image\" [alt]=\"planeta.name\">\n  <mat-card-content>\n    <mat-card-subtitle>Residentes: {{ planeta.residents.join(', ') }}.</mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/residentes/residentes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/residentes/residentes.component.ts ***!
  \****************************************************/
/*! exports provided: ResidentesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentesComponent", function() { return ResidentesComponent; });
/* harmony import */ var _planetas_planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../planetas/planetas-service/planetas.service */ "./src/app/planetas/planetas-service/planetas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResidentesComponent = /** @class */ (function () {
    function ResidentesComponent(planetasService, activatedRoute) {
        var _this = this;
        this.planetasService = planetasService;
        this.activatedRoute = activatedRoute;
        var planeta = this.activatedRoute.snapshot.params.planeta;
        this.planetasService.findByName(planeta)
            .subscribe(function (planeta) { return _this.planeta = planeta; });
        this.planeta = { id: '0', image: '/', name: 'Goku', residents: ['1', '2', '3'] };
    }
    ResidentesComponent.prototype.ngOnInit = function () {
    };
    ResidentesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-residentes',
            template: __webpack_require__(/*! ./residentes.component.html */ "./src/app/residentes/residentes.component.html"),
            styles: [__webpack_require__(/*! ./residentes.component.css */ "./src/app/residentes/residentes.component.css")]
        }),
        __metadata("design:paramtypes", [_planetas_planetas_service_planetas_service__WEBPACK_IMPORTED_MODULE_0__["PlanetasService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ResidentesComponent);
    return ResidentesComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.css":
/*!*******************************************!*\
  !*** ./src/app/sobre/sobre.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Testes\n</p>\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/sobre/sobre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/giovani/Documentos/Projetos/code/angular/dragon-ball/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map