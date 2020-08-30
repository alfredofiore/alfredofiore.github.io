(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gestione_prodotti_lista_prodotti_lista_prodotti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestione prodotti/lista-prodotti/lista-prodotti.component */ "./src/app/gestione prodotti/lista-prodotti/lista-prodotti.component.ts");
/* harmony import */ var _gestione_prodotti_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'lista_prodotti', component: _gestione_prodotti_lista_prodotti_lista_prodotti_component__WEBPACK_IMPORTED_MODULE_3__["ListaProdottiComponent"] },
    { path: 'dettaglio_prodotti', component: _gestione_prodotti_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_4__["DettaglioProdottoComponent"] },
    { path: 'carrello', component: _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_5__["CarrelloComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'MyCommerce';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _gestione_prodotti_lista_prodotti_lista_prodotti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gestione prodotti/lista-prodotti/lista-prodotti.component */ "./src/app/gestione prodotti/lista-prodotti/lista-prodotti.component.ts");
/* harmony import */ var _gestione_prodotti_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _gestione_prodotti_lista_prodotti_lista_prodotti_component__WEBPACK_IMPORTED_MODULE_8__["ListaProdottiComponent"],
        _gestione_prodotti_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_9__["DettaglioProdottoComponent"],
        _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_12__["CarrelloComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _gestione_prodotti_lista_prodotti_lista_prodotti_component__WEBPACK_IMPORTED_MODULE_8__["ListaProdottiComponent"],
                    _gestione_prodotti_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_9__["DettaglioProdottoComponent"],
                    _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_12__["CarrelloComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/carrello/carrello.component.ts":
/*!************************************************!*\
  !*** ./src/app/carrello/carrello.component.ts ***!
  \************************************************/
/*! exports provided: CarrelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrelloComponent", function() { return CarrelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class CarrelloComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarrelloComponent.ɵfac = function CarrelloComponent_Factory(t) { return new (t || CarrelloComponent)(); };
CarrelloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarrelloComponent, selectors: [["app-carrello"]], decls: 37, vars: 0, consts: [[2, "background-color", "rgb(248, 222, 200)"]], template: function CarrelloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "carrello works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJlbGxvL2NhcnJlbGxvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrelloComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carrello',
                templateUrl: './carrello.component.html',
                styleUrls: ['./carrello.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 76, vars: 0, consts: [[1, "page-footer"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-4", "mx-auto"], [1, "font-weight-bold", "text-uppercase", "mt-3", "mb-4"], [1, "clearfix", "w-100", "d-md-none"], [1, "col-md-2", "mx-auto"], [1, "list-unstyled"], ["href", "#!"], [2, "text-align", "center"], [1, "list-unstyled", "list-inline", "text-center"], [1, "list-inline-item"], [1, "btn-floating", "btn-fb", "mx-1"], [1, "fa", "fa-facebook-f"], [1, "btn-floating", "btn-tw", "mx-1"], [1, "fa", "fa-twitter"], [1, "btn-floating", "btn-gplus", "mx-1"], [1, "fa", "fa-instagram"], [1, "btn-floating", "btn-li", "mx-1"], [1, "fa", "fa-linkedin"], [1, "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "scialati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contatti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cookie policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Servizio clienti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Guida agli acquisti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Modalit\u00E0 di pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Spedizioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Diritto di recesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Il mio profilo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I miei dati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "I miei ordini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "I miei indirizzi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Alfredo Fiore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-footer[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    color: whitesmoke;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color: whitesmoke;\r\n}\r\n.footer-copyright[_ngcontent-%COMP%] {\r\n    background-color: rgb(182, 0, 0);\r\n    color: whitesmoke;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvcHlyaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/gestione prodotti/dettaglio-prodotto/dettaglio-prodotto.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DettaglioProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioProdottoComponent", function() { return DettaglioProdottoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");




class DettaglioProdottoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DettaglioProdottoComponent.ɵfac = function DettaglioProdottoComponent_Factory(t) { return new (t || DettaglioProdottoComponent)(); };
DettaglioProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DettaglioProdottoComponent, selectors: [["app-dettaglio-prodotto"]], decls: 77, vars: 0, consts: [[2, "background-color", "whitesmoke"], [1, "container-fluid"], [1, "row"], [1, "col-md-3", "offset-1"], [1, "card"], ["src", "/assets/prodotti/melanzane_olio.jpg", 1, "img_prodotto"], [1, "col-md-5"], [1, "col-md-7", "offset-1"], [1, "titolo_prod"], [1, "col-md-10", "offset-1"], [1, "desc_prod"], [1, "col-md-2"], [1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "row", "qua_row"], [1, "col-md-6"], [1, "col-md-5", "offset-1"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"]], template: function DettaglioProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vasetto di salsa di cipolle rosse di tropea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "descrione del Vasetto di salsa di cipolle rosse di tropea contenente il 60% di cipollo, il 20% di sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Quantit\u00E0:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 122 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".img_prodotto[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.titolo_prod[_ngcontent-%COMP%], .desc_prod[_ngcontent-%COMP%]{\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    font: bold;\r\n}\r\n\r\n.qua_row[_ngcontent-%COMP%] {\r\n    \r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbmUgcHJvZG90dGkvZGV0dGFnbGlvLXByb2RvdHRvL2RldHRhZ2xpby1wcm9kb3R0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uZSBwcm9kb3R0aS9kZXR0YWdsaW8tcHJvZG90dG8vZGV0dGFnbGlvLXByb2RvdHRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pbWdfcHJvZG90dG8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRvbG9fcHJvZCwgLmRlc2NfcHJvZHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5xdWFfcm93IHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DettaglioProdottoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dettaglio-prodotto',
                templateUrl: './dettaglio-prodotto.component.html',
                styleUrls: ['./dettaglio-prodotto.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gestione prodotti/lista-prodotti/lista-prodotti.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/gestione prodotti/lista-prodotti/lista-prodotti.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListaProdottiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProdottiComponent", function() { return ListaProdottiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");








function ListaProdottiComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProdottiComponent_tr_25_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.util.redirectToComponent("dettaglio_prodotti"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProdottiComponent_tr_25_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.util.redirectToComponent("dettaglio_prodotti"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProdottiComponent_tr_25_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.util.redirectToComponent("dettaglio_prodotti"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rProd_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/prodotti/" + rProd_r1[0].immagine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rProd_r1[0].nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rProd_r1[0].prezzo, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/prodotti/" + rProd_r1[1].immagine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rProd_r1[1].nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rProd_r1[1].prezzo, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/prodotti/" + rProd_r1[2].immagine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rProd_r1[2].nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rProd_r1[2].prezzo, " \u20AC");
} }
class ListaProdottiComponent {
    constructor(util) {
        this.util = util;
        this.page = 1;
        this.pageSize = 2;
        this.PRODOTTI = new Array();
        this.oggettoProd = [
            {
                id: 1,
                nome: 'Melanzane 1',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 2,
                nome: 'Melanzane 2',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 3,
                nome: 'Melanzane 3',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 4,
                nome: 'Melanzane 4',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 5,
                nome: 'Melanzane 5',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 6,
                nome: 'Melanzane 6',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 7,
                nome: 'Melanzane 7',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 8,
                nome: 'Melanzane 8',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            },
            {
                id: 9,
                nome: 'Melanzane 9',
                descrizione: 'melanzane con olio',
                prezzo: 9.50,
                quantita: 30,
                tipologia: 1,
                immagine: 'melanzane_olio.jpg',
                version: 1
            }
        ];
    }
    ngOnInit() {
        const dimRow = this.oggettoProd.length / 3;
        const products = this.oggettoProd.reverse();
        let tempLP = new Array();
        for (let i = 0; i < dimRow; i++) {
            for (let j = 0; j < 3; j++) {
                tempLP[j] = products.pop();
            }
            this.PRODOTTI[i] = tempLP;
            tempLP = [];
        }
        this.collectionSize = this.PRODOTTI.length;
    }
    /*
    refreshProdotti() {
      this.prodotti = this.PRODOTTI
        .map((country, i) => ({id: i + 1, ...country}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    } */
    get lProdotti() {
        return this.PRODOTTI
            .map((prodotto, i) => (Object.assign({ id: i + 1 }, prodotto)))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
}
ListaProdottiComponent.ɵfac = function ListaProdottiComponent_Factory(t) { return new (t || ListaProdottiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"])); };
ListaProdottiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaProdottiComponent, selectors: [["app-lista-prodotti"]], decls: 36, vars: 8, consts: [[2, "background-color", "whitesmoke"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "form-inline"], [1, "col-md-22", "offset-1"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], [1, "fa", "fa-search"], [1, "col-md-10"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "custom-select", 2, "width", "auto", "cursor", "pointer", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"]], template: function ListaProdottiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListaProdottiComponent_tr_25_Template, 28, 9, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-pagination", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListaProdottiComponent_Template_ngb_pagination_pageChange_27_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaProdottiComponent_Template_select_ngModelChange_28_listener($event) { return ctx.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3 elementi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "6 elementi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "9 elementi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lProdotti);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.collectionSize)("page", ctx.page)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 3);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".card[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbmUgcHJvZG90dGkvbGlzdGEtcHJvZG90dGkvbGlzdGEtcHJvZG90dGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uZSBwcm9kb3R0aS9saXN0YS1wcm9kb3R0aS9saXN0YS1wcm9kb3R0aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaProdottiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lista-prodotti',
                templateUrl: './lista-prodotti.component.html',
                styleUrls: ['./lista-prodotti.component.css']
            }]
    }], function () { return [{ type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 122, vars: 1, consts: [[2, "background-color", "rgb(248, 222, 200)"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner", 2, "height", "600px"], [1, "carousel-item", "active"], ["src", "/assets/paesaggio1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "/assets/paesaggio2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "/assets/paesaggio3.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "ndujaTitle"], [1, "container-fluid"], [1, "row", 2, "align-items", "center"], [1, "col-md-1"], ["href", "#ndujaProdotti", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], [1, "col-md-10"], ["id", "ndujaProdotti", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "row"], [1, "col-md-10", "offset-1"], [1, "col-md-4"], [1, "card", "mb-2", 2, "align-items", "center"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "60%", "height", "60%", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"], [1, "card", "mb-2"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-1", 2, "align-items", "center"], ["href", "#ndujaProdotti", "role", "button", "data-slide", "next", 1, "carousel-control-next"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "La nostra 'NDUJA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vasetto n'duja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "10,0 \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/prodotti/vasetto_nduja.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".ndujaTitle[_ngcontent-%COMP%] {\r\n    font-size: 68px;\r\n    color: red;\r\n    text-align: center;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    background-color: whitesmoke;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    \r\n    box-shadow: 10px 10px 5px rgb(196, 177, 160);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBNEM7QUFDaEQ7O0FBQ0E7Ozs7Ozs7S0FPSyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5kdWphVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcblxyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIC8qIGVmZmV0dG8gb21icmEqL1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCByZ2IoMTk2LCAxNzcsIDE2MCk7XHJcbn1cclxuLyogXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "width": a0 }; };
class NavbarComponent {
    constructor(deviceService, util) {
        this.deviceService = deviceService;
        this.util = util;
        this.isOpened = false;
        this.zoomActive = false;
    }
    // ASCOLTATORE WINDOWS SCROLL
    onWindowScroll() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.zoomActive = true;
        }
        else {
            this.zoomActive = false;
        }
    }
    ngOnInit() {
        this.isMobile = this.deviceService.isMobile();
        this.isdesktop = this.deviceService.isDesktop();
    }
    zoomEv() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.zoomActive = true;
        }
        return false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 40, vars: 5, consts: [[1, "topnav"], [1, "topnav-centered"], [2, "cursor", "pointer", 3, "click"], ["src", "/assets/scialati_logo.png", 3, "ngClass", "scroll"], [1, "topnav-right"], [2, "font-size", "25px"], [1, "fa", "fa-user"], [2, "font-size", "25px", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "bottoneMenu"], [3, "ngClass"], [1, "topnav-left"], [2, "padding", "20px 22px", 3, "click"], [2, "padding", "20px 22px"], [1, "subnav"], [1, "subnavbtn", 2, "padding", "20px 22px", 3, "click"], [1, "fa", "fa-caret-down"], [1, "subnav-content"], ["id", "myNav", 1, "overlay", 3, "ngStyle"], [1, "overlay-content"], [3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.util.redirectToComponent("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_Template_img_scroll_3_listener() { return ctx.zoomEv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.util.redirectToComponent("carrello"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.util.redirectToComponent("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "contatti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_20_listener() { return ctx.util.redirectToComponent("lista_prodotti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Prodotti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dolci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Salse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Conserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sottaceti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_34_listener() { return ctx.util.redirectToComponent("lista_prodotti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prodotti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.zoomActive ? "logo" : "logo-zoom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.isOpened ? "fa fa-bars" : "fa fa-times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isOpened ? "100%" : "0%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".topnav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  background-color: red;\r\n  \r\n  width: 100%;\r\n  z-index: 10;\r\n  font-style: italic;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  color: whitesmoke;\r\n  text-align: center;\r\n  padding: 14px 22px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: whitesmoke;\r\n  color: red;\r\n}\r\n.topnav-centered[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n  color: whitesmoke;\r\n}\r\n\r\n.topnav-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  cursor: pointer;\r\n}\r\n.bottoneMenu[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.topnav-centered[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 22px;\r\n  z-index: 50;\r\n}\r\n\r\n.topnav-right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n.overlay-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n.subnav[_ngcontent-%COMP%] {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.subnav[_ngcontent-%COMP%]   .subnavbtn[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  border: none;\r\n  outline: none;\r\n  color: whitesmoke;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  font-style: italic;\r\n\r\n}\r\n\r\n.subnav[_ngcontent-%COMP%]:hover   .subnavbtn[_ngcontent-%COMP%] {\r\n  background-color: whitesmoke;\r\n  color: red;\r\n}\r\n\r\n.subnav-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  left: 0;\r\n  background-color: whitesmoke;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.subnav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  color: red;\r\n  text-decoration: none;\r\n}\r\n\r\n.subnav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: red;\r\n  color: whitesmoke;\r\n}\r\n\r\n.subnav[_ngcontent-%COMP%]:hover   .subnav-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  margin-top: 38px;\r\n  height: 100px;\r\n  width: 100px;\r\n  border-radius: 50%;\r\n  transition: 0.5s;\r\n}\r\n.logo-zoom[_ngcontent-%COMP%] {\r\n  margin-top: 138px;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 50%;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 951px) {\r\n  .topnav-left[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: none;\r\n    \r\n  }\r\n\r\n   .bottoneMenu[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n  }\r\n\r\n  .bottoneMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: red;\r\n    color: whitesmoke;\r\n  } \r\n\r\n  \r\n\r\n  \r\n  .overlay[_ngcontent-%COMP%] {\r\n    \r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    \r\n    z-index: 1;\r\n    \r\n    left: 0;\r\n    top: 65px;\r\n    background-color: rgb(255, 0, 0);\r\n    \r\n    \r\n    \r\n    overflow-x: hidden;\r\n    \r\n    transition: 0.5s;\r\n    \r\n  }\r\n\r\n  \r\n  .overlay-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    top: 25%;\r\n    \r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n    \r\n    margin-top: 30px;\r\n    \r\n  }\r\n\r\n\r\n\r\n  \r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: whitesmoke;\r\n    display: block;\r\n    \r\n    transition: 0.5s;\r\n    \r\n  }\r\n\r\n  \r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #f1f1f1;\r\n  }\r\n\r\n  \r\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n  }\r\n\r\n  .logo-zoom[_ngcontent-%COMP%] {\r\n    margin-top: 38px;\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    transition: 0.5s;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RDtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseURBQXlEO0VBQ3pELFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjtBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBLCtDQUErQztBQUMvQztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxnQkFBZ0I7QUFDaEIsMkJBQTJCO0FBQzNCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtBQUNaO0FBRUEsbURBQW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQSwrRUFBK0U7QUFDL0U7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsY0FBYztBQUVkLGNBQWM7QUFDZDs7Ozs7R0FLRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBLFlBQVk7QUFFWixpQ0FBaUM7QUFHakMsK0JBQStCO0FBRS9CLHVIQUF1SDtBQUN2SDtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixHQUFHO0VBQ0w7O0dBRUM7SUFDQyxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7Ozs7O09BS0s7O0VBRUwsNkJBQTZCO0VBQzdCO0lBQ0UsZ0ZBQWdGO0lBQ2hGLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLDhHQUE4RztFQUNoSDs7RUFFQSw0Q0FBNEM7RUFDNUM7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwrRUFBK0U7RUFDakY7Ozs7RUFJQSw0Q0FBNEM7RUFDNUM7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsd0NBQXdDO0VBQzFDOztFQUVBLGlFQUFpRTtFQUNqRTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBLGlEQUFpRDtFQUNqRDtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47IGNyZWEgcHJibGVtaSBjb24gbGEgc292cmFwcG9zaXppb25lKi9cclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi50b3BuYXYgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMjJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udG9wbmF2LWNlbnRlcmVkIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4vKiBSaWdodC1hbGlnbmVkIHNlY3Rpb24gaW5zaWRlIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbmVNZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIENlbnRlcmVkIHNlY3Rpb24gaW5zaWRlIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2LWNlbnRlcmVkIGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4vKiBSaWdodC1hbGlnbmVkIHNlY3Rpb24gaW5zaWRlIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2LXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3ZlcmxheS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKklOSVpJTyBTVUJOQVYqL1xyXG4vKiBUaGUgc3VibmF2aWdhdGlvbiBtZW51ICovXHJcbi5zdWJuYXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFN1Ym5hdiBidXR0b24gKi9cclxuLnN1Ym5hdiAuc3VibmF2YnRuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59XHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZpZ2F0aW9uIGxpbmtzIG9uIGhvdmVyICovXHJcbi5zdWJuYXY6aG92ZXIgLnN1Ym5hdmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgc3VibmF2IGNvbnRlbnQgLSBwb3NpdGlvbmVkIGFic29sdXRlICovXHJcbi5zdWJuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzdWJuYXYgbGlua3MgKi9cclxuLnN1Ym5hdi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuLnN1Ym5hdi1jb250ZW50IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLyogV2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibmF2IGNvbnRhaW5lciwgb3BlbiB0aGUgc3VibmF2IGNvbnRlbnQgKi9cclxuLnN1Ym5hdjpob3ZlciAuc3VibmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKkZJTkUgU1VCTkFWKi9cclxuXHJcbi8qSU5JWklPIExPR08qL1xyXG4vKiAubG9nbyB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIHRvcDogMDtcclxuXHJcbn0gKi9cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5sb2dvLXpvb20ge1xyXG4gIG1hcmdpbi10b3A6IDEzOHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4vKkZJTkUgTE9HTyovXHJcblxyXG4vKklOSVpJTyBBTklNQVpJT05FIEJPVFRPTkUgTUVOVSovXHJcblxyXG5cclxuLypGSU5FIEFOSU1BWklPTkUgQk9UVE9ORSBNRU5VKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgbmF2aWdhdGlvbiBtZW51IC0gZGlzcGxheSBsaW5rcyBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAoZm9yIG1vYmlsZSBkZXZpY2VzKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTFweCkge1xyXG4gIC50b3BuYXYtbGVmdCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKiovXHJcbiAgfVxyXG5cclxuICAgLmJvdHRvbmVNZW51IHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYm90dG9uZU1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB9IFxyXG5cclxuICAvKiAudG9wbmF2LWNlbnRlcmVkIGEge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfSAqL1xyXG5cclxuICAvKiBUaGUgT3ZlcmxheSAoYmFja2dyb3VuZCkgKi9cclxuICAub3ZlcmxheSB7XHJcbiAgICAvKiBIZWlnaHQgJiB3aWR0aCBkZXBlbmRzIG9uIGhvdyB5b3Ugd2FudCB0byByZXZlYWwgdGhlIG92ZXJsYXkgKHNlZSBKUyBiZWxvdykgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIC8qIHJlZCBmYWxsYmFjayBjb2xvciAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7ICovXHJcbiAgICAvKiByZWQgdy9vcGFjaXR5ICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiBvciBzbGlkZSBkb3duIHRoZSBvdmVybGF5IChoZWlnaHQgb3Igd2lkdGgsIGRlcGVuZGluZyBvbiByZXZlYWwpICovXHJcbiAgfVxyXG5cclxuICAvKiBQb3NpdGlvbiB0aGUgY29udGVudCBpbnNpZGUgdGhlIG92ZXJsYXkgKi9cclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICAvKiAyNSUgZnJvbSB0aGUgdG9wICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIDEwMCUgd2lkdGggKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIENlbnRlcmVkIHRleHQvbGlua3MgKi9cclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAvKiAzMHB4IHRvcCBtYXJnaW4gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB0aGUgY2xvc2UgYnV0dG9uIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKiBUaGUgbmF2aWdhdGlvbiBsaW5rcyBpbnNpZGUgdGhlIG92ZXJsYXkgKi9cclxuICAub3ZlcmxheSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBEaXNwbGF5IGJsb2NrIGluc3RlYWQgb2YgaW5saW5lICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgLyogVHJhbnNpdGlvbiBlZmZlY3RzIG9uIGhvdmVyIChjb2xvcikgKi9cclxuICB9XHJcblxyXG4gIC8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xyXG4gIC5vdmVybGF5IGE6aG92ZXIsXHJcbiAgLm92ZXJsYXkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC8qIFBvc2l0aW9uIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXHJcbiAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tem9vbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/app/service/util.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/util.service.ts ***!
  \*****************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UtilService {
    constructor(router) {
        this.router = router;
    }
    ricaricaComponent(compNome) {
        // fa un refresh del component stesso
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([compNome]);
        });
    }
    redirectToComponent(nomeComponent) {
        this.router.navigate([(nomeComponent)]);
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Alfredo Fiore\Desktop\E-commerce in Angular\MyCommerce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map