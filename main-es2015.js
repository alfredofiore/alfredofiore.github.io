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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/acquisto/acquisto.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acquisto/acquisto.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<br><br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-9\">\r\n            <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"toggle-1\" [closeOthers]=\"true\">\r\n                <ngb-panel id=\"toggle-1\" title=\"1- Indirizzo di spedizione\">\r\n                    <ng-template ngbPanelContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-check form-check-group\">\r\n                                    <input name=\"gruppo1\" type=\"radio\" id=\"radio1\" aria-labelledby=\"radio1-help\"\r\n                                        value=\"ind1\" [(ngModel)]=\"flagTipoInd\">\r\n                                    <label for=\"radio1\">\r\n                                        Spedisci a:\r\n                                    </label>\r\n                                    <small id=\"radio1-help\" class=\"form-text\">\r\n                                        {{indirizzoAttuale.nome}} {{indirizzoAttuale.cognome}}\r\n                                        <br>\r\n                                        via {{indirizzoAttuale.via}} n° {{indirizzoAttuale.civico}}\r\n                                        <br>\r\n                                        {{indirizzoAttuale.cap}} {{indirizzoAttuale.citta}}\r\n                                        <br>\r\n                                        {{indirizzoAttuale.provincia}}\r\n                                    </small>\r\n                                </div>\r\n                                <div class=\"form-check form-check-group\">\r\n                                    <input name=\"gruppo1\" type=\"radio\" id=\"radio2\" aria-labelledby=\"radio2-help\"\r\n                                        value=\"newI\" [(ngModel)]=\"flagTipoInd\" (click)=\"open(content)\">\r\n                                    <label for=\"radio2\" *ngIf=\"!flagNewInd\">\r\n                                        Nuovo indirizzo\r\n                                    </label>\r\n                                    <label for=\"radio2\" *ngIf=\"flagNewInd\">\r\n                                        Spedisci a:\r\n                                    </label>\r\n                                    <small id=\"radio2-help\" class=\"form-text\" *ngIf=\"flagNewInd\">\r\n                                        {{newIndirizzo.nome}} {{newIndirizzo.cognome}}\r\n                                        <br>\r\n                                        via {{newIndirizzo.via}} n° {{newIndirizzo.civico}}\r\n                                        <br>\r\n                                        {{newIndirizzo.cap}} {{newIndirizzo.citta}}\r\n                                        <br>\r\n                                        {{newIndirizzo.provincia}}\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-panel>\r\n                <ngb-panel id=\"toggle-2\" title=\"2- Metodo di pagamento\">\r\n                    <ng-template ngbPanelContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-check form-check-group\">\r\n                                    <input name=\"gruppo2\" type=\"radio\" id=\"radio2-1\" aria-labelledby=\"radio2-1-help\"\r\n                                        data-toggle=\"collapse\" data-target=\"#coll1\" aria-expanded=\"false\"\r\n                                        aria-controls=\"coll1\" value=\"paypal\" [(ngModel)]=\"flagPagamento\"\r\n                                        [disabled]=\"flagPagamento ==='paypal'\">\r\n                                    <label for=\"radio2-1\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-10 offset-1\">\r\n                                                <img [src]=\"'/assets/loghi/paypal.png'\"\r\n                                                    style=\"width: 240px; height: 240px;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-check form-check-group\">\r\n                                    <input name=\"gruppo2\" type=\"radio\" id=\"radio2-2\" aria-labelledby=\"radio2-2-help\"\r\n                                        data-toggle=\"collapse\" data-target=\"#coll1\" aria-expanded=\"true\"\r\n                                        aria-controls=\"coll1\" value=\"carte\" [(ngModel)]=\"flagPagamento\"\r\n                                        [disabled]=\"flagPagamento ==='mastercard'\">\r\n                                    <label for=\"radio2-2\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-2 offset-1\">\r\n                                                <img [src]=\"'/assets/loghi/mastercard.png'\"\r\n                                                    style=\"width: 100px; height: 100px;\">\r\n                                            </div>\r\n                                            <div class=\"col-2 offset-1\">\r\n                                                <img [src]=\"'/assets/loghi/visa.png'\"\r\n                                                    style=\"width: 100px; height: 100px;\">\r\n                                            </div>\r\n                                            <div class=\"col-2 offset-1\">\r\n                                                <img [src]=\"'/assets/loghi/american-express.png'\"\r\n                                                    style=\"width: 100px; height: 100px;\">\r\n                                            </div>\r\n                                            <div class=\"col-2 offset-1\">\r\n                                                <img [src]=\"'/assets/loghi/postepay.png'\"\r\n                                                    style=\"width: 100px; height: 100px;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </label>\r\n                                    <small id=\"radio2-2-help\" class=\"form-text\">\r\n                                        <div class=\"collapse\" id=\"coll1\">\r\n                                            <table class=\"table table-borderless\" *ngIf=\"listaCarte && checkUp\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th scope=\"col\" colspan=\"3\">Le tue carte di credito o di debito\r\n                                                        </th>\r\n                                                        <th scope=\"col\">Nome sulla carta</th>\r\n                                                        <th scope=\"col\">Scade il</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let carta of listaCarte; let i = index\">\r\n                                                        <td>\r\n                                                            <input name=\"gruppo3\" type=\"radio\" value=\"carta.numero\"\r\n                                                                [checked]=\"(i === 0)\" (click)=\"selectCard(i)\">\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <img [src]=\"'/assets/loghi/'+ getTipoCarta(carta.numero.toString()) + '2.png'\"\r\n                                                                style=\"width: 50px; height: 50px;\">\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <h6>{{decriptNomeCarta(carta.numero.toString())}}</h6> termina con\r\n                                                            <h6>{{carta.numero.toString().substring(12)}}</h6>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <br>\r\n                                                            <h6>{{carta.cognome}} {{carta.nome}}</h6>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <br>\r\n                                                            {{getDate(carta.data_scadenza)}}\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                            <a style=\"color: blue; cursor: pointer;\" (click)=\"openModalLarge(content3)\">\r\n                                                Aggiungi una nuova carta di credito o debito\r\n                                            </a>\r\n                                        </div>\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-panel>\r\n            </ngb-accordion>\r\n\r\n            <hr />\r\n        </div>\r\n        <div class=\"col-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body align-items-center d-flex justify-content-center\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                Articoli:\r\n                            </div>\r\n                            <div class=\"col-3 offset-3\">\r\n                                {{totaleAcquisto}} €\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-8\">\r\n                                Costi di spedizione:\r\n                            </div>\r\n                            <div class=\"col-3 offset-1\">\r\n                                {{speseSpedizione}} €\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"row; border-top\"></div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                Totale ordine:\r\n                            </div>\r\n                            <div class=\"col-3 offset-3\">\r\n                                {{totaleOrdine}} €\r\n                            </div>\r\n                        </div>\r\n                        <br><br>\r\n                        <div class=\"row\">\r\n                            <button class=\"btn btn-sm btn-outline-primary mr-2\"\r\n                                (click)=\"acc.toggle('toggle-1'); acc.toggle('toggle-2')\"\r\n                                style=\"color: black; cursor: pointer;\" class=\"btn btn-outline-warning\"\r\n                                *ngIf=\"acc.isExpanded('toggle-1')\">\r\n                                <h6>Spedisci a <br>questo indirizzo </h6>\r\n                            </button>\r\n                            <button class=\"btn btn-sm btn-outline-primary mr-2\"\r\n                                (click)=\"eseguiAcquisto(content2)\"\r\n                                *ngIf=\"acc.isExpanded('toggle-2')\" style=\"color: black; cursor: pointer;\"\r\n                                class=\"btn btn-outline-warning\"\r\n                                [disabled]=\"!flagPagamento || (flagPagamento === 'carte' && cartaSelected === undefined)\">\r\n                                <h6>Conferma e paga <br>di pagamento </h6>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n<!--modale nuovo indirizzo-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Nuovo indirizzo di spedizione</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal(content)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <li>Nome: <input type=\"email\" class=\"form-control\" id=\"nome\" placeholder=\"Inserire nome\" maxlength=\"20\"\r\n                [(ngModel)]=\" newIndirizzo.nome\" [ngModelOptions]=\"{standalone: true}\"></li>\r\n        <li>Cognome: <input type=\"email\" class=\"form-control\" id=\"cognome\" placeholder=\"Inserire cognome\" maxlength=\"20\"\r\n                [(ngModel)]=\" newIndirizzo.cognome\" [ngModelOptions]=\"{standalone: true}\"></li>\r\n        <li>Via: <input type=\"email\" class=\"form-control\" id=\"indirizzo\" placeholder=\"Inserire indirizzo\" maxlength=\"20\"\r\n                [(ngModel)]=\"newIndirizzo.via\" [ngModelOptions]=\"{standalone: true}\"></li>\r\n        <li>N°: <input type=\"email\" class=\"form-control\" id=\"indirizzo\" placeholder=\"Inserire indirizzo\" maxlength=\"20\"\r\n                [(ngModel)]=\"newIndirizzo.civico\" [ngModelOptions]=\"{standalone: true}\"></li>\r\n        <li>Provincia: <select class=\"form-control\" [(ngModel)]=\"newIndirizzo.provincia\" (ngModelChange)=\"loadComuni()\"\r\n                [ngModelOptions]=\"{standalone: true}\" style=\"cursor: pointer;\">\r\n                <option *ngFor=\" let x of provincie \">\r\n                    {{x.nome}}\r\n                </option>\r\n            </select></li>\r\n        <li>Città: <select class=\"form-control\" [(ngModel)]=\"newIndirizzo.citta\" (ngModelChange)=\"loadCap()\"\r\n                [ngModelOptions]=\"{standalone: true}\">\r\n                <option *ngFor=\" let x of listaComuniDaCaricare \">\r\n                    {{x.nome}}\r\n                </option>\r\n            </select></li>\r\n        <li>CAP: <select class=\"form-control\" [(ngModel)]=\"newIndirizzo.cap\" [ngModelOptions]=\"{standalone: true}\" style=\"cursor: pointer;\">\r\n                <option *ngFor=\" let x of listaCap \">\r\n                    {{x}}\r\n                </option>\r\n            </select></li>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"!newIndirizzo.nome || !newIndirizzo.cognome || !newIndirizzo.via || !newIndirizzo.civico || !newIndirizzo.citta ||\r\n        !newIndirizzo.provincia || !newIndirizzo.cap\" (click)=\"addNewIndirizzo(content)\">\r\n            Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal(content)\">Annulla</button>\r\n    </div>\r\n</ng-template>\r\n<!--modale ordine effettuato-->\r\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Ordine avvenuto correttamente</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h5>Numero ordine {{codiceOrdineAcquistato}}</h5>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"chiudi(content2)\">\r\n            ok</button>\r\n    </div>\r\n</ng-template>\r\n<!--modale aggiungi carta-->\r\n<ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Aggiungi una carta di credito o debito</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-2 offset-1\">\r\n                        <h6>Numero carta</h6>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <input type=\"number\" class=\"form-control\" maxlength=\"16\" size=\"16\"\r\n                        [(ngModel)]=\"newCarta.numero\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"checkDatiCarta('numeroCarta')\">\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-2 offset-1\">\r\n                        <h6>Intestatario carta</h6>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <h6>Nome</h6>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"tel\" class=\"form-control\" maxlength=\"16\" size=\"16\"\r\n                        [(ngModel)]=\"newCarta.nome\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"checkDatiCarta('nomeCarta')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-2 offset-3\">\r\n                        <h6>Cognome</h6>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"tel\" class=\"form-control\" maxlength=\"16\" size=\"16\"\r\n                        [(ngModel)]=\"newCarta.cognome\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"checkDatiCarta('cognomeCarta')\">\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-2 offset-1\">\r\n                        <h6>Data di scadenza</h6>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <select [(ngModel)]=\" meseSelected\" [ngModelOptions]=\"{standalone: true}\" style=\"cursor: pointer;\">\r\n                            <option *ngFor=\" let x of counter(12); let i= index \"\r\n                            value=\"{{i}}\">\r\n                                <div *ngIf=\"i<=8\">\r\n                                    0{{(i+1)}}\r\n                                </div>\r\n                                <div *ngIf=\"i>8\">\r\n                                    {{(i+1)}}\r\n                                </div>\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    /\r\n                    <div class=\"col-md-2\">\r\n                        <select [(ngModel)]=\" annoSelected\" [ngModelOptions]=\"{standalone: true}\" style=\"cursor: pointer;\" >\r\n                            <option *ngFor=\" let x of counter(21); let i= index \"\r\n                            value=\"{{currentDate.getFullYear()+i}}\">\r\n                                {{(currentDate.getFullYear()+i).toString()}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-1 offset-2\">\r\n                        <h6>CSV</h6>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <input type=\"number\" class=\"form-control\" maxlength=\"3\" size=\"3\"\r\n                        [(ngModel)]=\"newCarta.csv\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"checkDatiCarta('csvCarta')\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" \r\n        [disabled]=\"!flagCarta.numCarta || !flagCarta.nomeCarta || !flagCarta.cognomeCarta || !flagCarta.csvCarta\" \r\n        (click)=\"addNewCarta(content3)\">\r\n            Conferma</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"chiudi2(content3)\">\r\n            Annulla</button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/add-admin/add-admin.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/add-admin/add-admin.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <br>\r\n    <div class=\"form-group\">\r\n        <br>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">Codice Fiscale</label>\r\n                <input type=\"cf\" class=\"form-control\" id=\"cf\" placeholder=\"Inserire codice fiscale\" maxlength=\"16\"\r\n                    [(ngModel)]=\" newAdmin.codicefiscale\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('codicefiscale'); ctrlAllField()\">\r\n                <small *ngIf=\"!newAdmin.codicefiscale && !flag.cf \" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                <small *ngIf=\"newAdmin.codicefiscale && !flag.cfValid \" id=\"avviso\" style=\"color: red;\">*codice Fiscale già presente</small>\r\n                <small *ngIf=\"newAdmin.codicefiscale && !flag.cf && flag.cfValid \" id=\"avviso\" style=\"color: red;\">*Formato non valido</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">Nome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"nome\" placeholder=\"Inserire nome\" maxlength=\"40\"\r\n                    [(ngModel)]=\" newAdmin.nome\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('nome'); ctrlAllField()\">\r\n                <small *ngIf=\"!newAdmin.nome && !flag.nome \" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">Cognome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"cognome\" placeholder=\"Inserire cognome\" maxlength=\"40\"\r\n                    [(ngModel)]=\" newAdmin.cognome\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('cognome'); ctrlAllField()\">\r\n                <small *ngIf=\"!newAdmin.cognome && !flag.cognome\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">E-mail</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Inserire e-mail\" maxlength=\"40\"\r\n                    [(ngModel)]=\" newAdmin.email\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('email'); ctrlAllField()\">\r\n                <small *ngIf=\"!newAdmin.email && !flag.email\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                <small *ngIf=\"newAdmin.email && !flag.emailValid\" id=\"avviso\" style=\"color: red;\">*E-mail già presente</small>\r\n                <small *ngIf=\"newAdmin.email && !flag.email && flag.emailValid\" id=\"avviso\" style=\"color: red;\">*Formato non valido</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">Password</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"password\" placeholder=\"Inserire password\" maxlength=\"40\"\r\n                    [(ngModel)]=\" newAdmin.password\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('password'); ctrlCampi('confermapassword'); ctrlAllField()\">\r\n                <small *ngIf=\"!newAdmin.password && !flag.password\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                <small *ngIf=\"newAdmin.password && !flag.password\" id=\"avviso\" style=\"color: red;\">*Password non valida</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-8 offset-1\">\r\n                <label for=\"nome\">Conferma password</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"confPassword\" placeholder=\"Reinserire la password\"\r\n                    maxlength=\"40\" [(ngModel)]=\" confermaPassword\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"ctrlCampi('confermapassword'); ctrlAllField()\">\r\n                <small *ngIf=\"!confermaPassword && !flag.cPassword\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                <small *ngIf=\"confermaPassword && !flag.cPassword\" id=\"avviso\" style=\"color: red;\">*Password non corrispondenti</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <br>\r\n        <div class=\"row form-group justify-content-center\">\r\n            <div class=\"col-md-2 offset-3\">\r\n                <button type=\"button\"  name=\"button\" [disabled]=\"!flag.general || !flag.cPassword ||\r\n                !flag.password || !flag.cf || !flag.nome || !flag.cognome || !flag.email\"\r\n            class=\"btn btn-outline-primary\" (click)=\"salva(content)\">Registra</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n            <h2 style=\"color: green;\" *ngIf=\"risultatoModifica\">\r\n                <i class=\"fa fa-check-circle\"></i>\r\n                Operazione avvenuta con successo!\r\n            </h2>\r\n            <h2 style=\"color: red;\" *ngIf=\"!risultatoModifica\">\r\n                <i class=\"fa fa-exclamation-circle\"></i>\r\n                Errore!\r\n            </h2>\r\n        </div>\r\n        \r\n        <div class=\"modal-footer justify-content-center\">\r\n          <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n          (click)=\"closeModale()\" >OK</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-alert *ngIf=\"alert && alert != null\" [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n<div class=\"container-fluid\" >\r\n    <div class=\"row align-items-center h-100\">\r\n        <div class=\"col-1\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\"\r\n            (click)=\"reloadProdotti()\">\r\n                <i class=\"fa fa-refresh  \" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <h1>Elenco prodotti</h1>\r\n        </div>\r\n        <div class=\"col-2 offset-5\" style=\"padding-left: 47px;\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\"\r\n            (click)=\"openModalEditAdd(modaleAddEdit)\">\r\n                Aggiungi <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row align-items-center h-100\">\r\n        <table class=\"table \">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Id</th>\r\n                    <th scope=\"col\">Nome</th>\r\n                    <th scope=\"col\">Immagine</th>\r\n                    <th scope=\"col\">Descrizione</th>\r\n                    <th scope=\"col\">Quantità</th>\r\n                    <th scope=\"col\">Prezzo</th>\r\n                    <th scope=\"col\">Tipologia</th>\r\n                    <th scope=\"col\" colspan=\"2\">Modifica   Elimina </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"attiva\">\r\n\r\n                <tr *ngFor=\"let prodotto of lProdotti\">\r\n                    <td scope=\"col\">{{ prodotto.id }}</td>\r\n                    <td scope=\"col\">{{ prodotto.nome }}</td>\r\n                    <td style=\"width: 50px; height: 50px;\">\r\n                        <img [src]=\"'/assets/immagini_prodotti/' + prodotto.immagine \" class=\"mr-2\"\r\n                            style=\"width: 50px; height: 50px;\">\r\n                    </td>\r\n                    <td scope=\"col\">{{ prodotto.descrizione }}</td>\r\n                    <td scope=\"col\">{{ prodotto.quantita }}</td>\r\n                    <td scope=\"col\">{{ prodotto.prezzo }} €</td>\r\n                    <td scope=\"col\">{{ prodotto.tipologia }}</td>\r\n                    <td scope=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n                        (click)=\"openModalEditAdd(modaleAddEdit, prodotto)\">\r\n                            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    <td scope=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-outline-danger\"\r\n                        (click)=\"openModalDelete(modaleRemove, prodotto)\">\r\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between p-2\">\r\n            <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n            </ngb-pagination>\r\n\r\n            <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"pageSize\" style=\"cursor: pointer;\">\r\n                <option [ngValue]=\"2\">2 items per page</option>\r\n                <option [ngValue]=\"4\">4 items per page</option>\r\n                <option [ngValue]=\"6\">6 items per page</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #modaleAddEdit let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Nuovo Prodotto</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div>\r\n            <h4>Id : </h4>\r\n            <h3>\r\n                {{newProdotto.id}}\r\n            </h3> <br><br>\r\n            <h4>Nome: </h4> \r\n            <input type=\"text\" class=\"form-control border-{{textType.nome}}\"\r\n            [(ngModel)]=\"newProdotto.nome\"\r\n            (ngModelChange)=\"checkCampo('nome')\"  [ngModelOptions]=\"{standalone: true}\"\r\n            maxlength=\"80\" size=\"80\" > \r\n            <br><br>\r\n            <h4>Immagine: </h4> \r\n            <input type=\"text\" class=\"form-control border-{{textType.immagine}}\"\r\n            [(ngModel)]=\"newProdotto.immagine\"\r\n            (ngModelChange)=\"checkCampo('immagine')\"  [ngModelOptions]=\"{standalone: true}\"> <br><br>\r\n            <h4>Descrizione: </h4>\r\n            <textarea name=\"message\" rows=\"10\" cols=\"80\" class=\"form-control border-{{textType.descrizione}}\"\r\n             [(ngModel)]=\"newProdotto.descrizione\"\r\n             (ngModelChange)=\"checkCampo('descrizione')\"  [ngModelOptions]=\"{standalone: true}\"\r\n             ></textarea> <br><br>\r\n            <h4>Quantità: </h4>\r\n            <input type=\"number\" class=\"form-control border-{{textType.quantita}}\"\r\n            min=\"-1\" max=\"100\" \r\n            [(ngModel)]=\"newProdotto.quantita\" \r\n            (ngModelChange)=\"checkCampo('quantita')\"  [ngModelOptions]=\"{standalone: true}\"> \r\n            <br><br>\r\n            <h4>Prezzo: </h4>\r\n            <input type=\"number\" id=\"prezzo\" class=\"form-control border-{{textType.prezzo}}\"\r\n            min=\"10\" max=\"100\" \r\n            [(ngModel)]=\"newProdotto.prezzo\"\r\n            (ngModelChange)=\"checkCampo('prezzo')\"  [ngModelOptions]=\"{standalone: true}\"> <br><br>\r\n            <h4>Tipologia: </h4>\r\n            <input type=\"number\" id=\"tipologia\" class=\"form-control border-{{textType.tipologia}}\"\r\n            min=\"1\" max=\"3\"\r\n            [(ngModel)]=\"newProdotto.tipologia\"\r\n            (ngModelChange)=\"checkCampo('tipologia')\"  [ngModelOptions]=\"{standalone: true}\"> \r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!flag.diversi || !flag.nome || !flag.prezzo ||\r\n        !flag.quantita || !flag.tipologia || !flag.immagine || !flag.descrizione\"\r\n        (click)=\"salva(); modal.close('Close click')\">Salva</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Close click')\">Annulla</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #modaleRemove let-modal>\r\n    <div class=\"modal-header border-danger\">\r\n        <h4 class=\"modal-title\">Confermi l'eliminazione del prodotto?</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div>\r\n            <h4>Id : </h4>\r\n            <h3>\r\n                {{copiaProdotto.id}}\r\n            </h3> <br><br>\r\n            <h4>Nome: </h4> \r\n            <h3>{{copiaProdotto.nome}}</h3>\r\n            <br>\r\n            <img [src]=\"'/assets/immagini_prodotti/' + copiaProdotto.immagine + '.jpg'\" class=\"mr-2\"\r\n                            style=\"width: 70px; height: 70px;\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-danger\"\r\n        (click)=\"elimina(); modal.close('Close click')\">Elimina</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Close click')\">Annulla</button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/login-admin/login-admin.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/login-admin/login-admin.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Login amministratore</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click'); goToPage('')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Codice fiscale</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n          [(ngModel)]=\"crdLogin.codicefiscale\" [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input type=\"{{tipoCampo}}\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"crdLogin.password\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" (change)=\"showPassword()\" style=\"cursor: pointer;\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">mostra password</label>\r\n        <br>\r\n        <small *ngIf=\"flag\" id=\"avviso\" style=\"color: red;\"> Dati inseriti errati!</small>\r\n      </div>\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"login(crdLogin)\">Login</button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"utenteAttivo && prodottiLoaded\">\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col-9\">\r\n      <h1>Benvenuto {{adminLoaded.nome}} {{adminLoaded.cognome}}</h1>\r\n    </div>\r\n    <div class=\"col-2 offset-1\" style=\"padding-left: 47px;\">\r\n      <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"logout()\">\r\n        Logout <i class=\"fa fa-sign-out\"></i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ngb-tabset *ngIf=\"utenteAttivo && prodottiLoaded\" [justify]=\"'justified'\">\r\n\r\n  <ngb-tab title=\"Modifica prodotti\">\r\n    <ng-template ngbTabContent>\r\n      <p>\r\n        <app-gestione-prodotti></app-gestione-prodotti>\r\n      </p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Modifica dati\">\r\n    <ng-template ngbTabContent>\r\n\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n              <a class=\"nav-link active\" id=\"informazioni-tab\" data-toggle=\"pill\" href=\"#v-pills-edit-data\" role=\"tab\"\r\n                aria-controls=\"v-pills-home\" aria-selected=\"true\">Informazioni generali</a>\r\n              <a class=\"nav-link\" id=\"password-tab\" data-toggle=\"pill\" href=\"#v-pills-edit-password\" role=\"tab\"\r\n                aria-controls=\"v-pills-profile\" aria-selected=\"false\">Password</a>\r\n              <a class=\"nav-link\" id=\"add-admin-tab\" data-toggle=\"pill\" href=\"#v-pills-add\" role=\"tab\"\r\n                aria-controls=\"v-pills-profile\" aria-selected=\"false\">Registra Amministratore</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n              <div class=\"tab-pane fade show active\" id=\"v-pills-edit-data\" role=\"tabpanel\"\r\n                aria-labelledby=\"informazioni-tab\">\r\n                <app-modifica-dati-admin></app-modifica-dati-admin>\r\n              </div>\r\n              <div class=\"tab-pane fade\" id=\"v-pills-edit-password\" role=\"tabpanel\" \r\n                aria-labelledby=\"password-tab\">\r\n                <app-modifica-password-admin></app-modifica-password-admin>\r\n              </div>\r\n              <div class=\"tab-pane fade\" id=\"v-pills-add\" role=\"tabpanel\" \r\n                aria-labelledby=\"add-admin-tab\">\r\n                <app-add-admin></app-add-admin>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <br>\r\n    <div class=\"form-group\">\r\n        <br><br><br>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Nome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"nome\" placeholder=\"Inserire nome\" maxlength=\"40\"\r\n                [(ngModel)]=\"newField.nome\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkField('nome')\" >\r\n                <small *ngIf=\"!newField.nome\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Cognome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"cognome\" placeholder=\"Inserire cognome\" maxlength=\"40\"\r\n                [(ngModel)]=\"newField.cognome\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkField('cognome')\"  >\r\n                <small *ngIf=\"!newField.cognome\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">E-mail</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Inserire email\" maxlength=\"80\"\r\n                [(ngModel)]=\"newField.email\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkField('email')\" >\r\n                <small *ngIf=\"!flag.email && newField.email\" id=\"avviso\" style=\"color: red;\">*E-mail non valida</small>\r\n                <small *ngIf=\"!newField.email\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n            <button type=\"button\"  name=\"button\"\r\n                class=\"btn btn-outline-primary\"\r\n                [disabled]=\"!flag.general || !flag.nome || !flag.cognome || !flag.email\"\r\n                (click)=\"salvaModifiche(content)\">Salva</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n            <h2 style=\"color: green;\" *ngIf=\"risultatoModifica\">\r\n                <i class=\"fa fa-check-circle\"></i>\r\n                Modifica password avvenuta correttamente!\r\n            </h2>\r\n            <h2 style=\"color: red;\" *ngIf=\"!risultatoModifica\">\r\n                <i class=\"fa fa-exclamation-circle\"></i>\r\n                Errore!\r\n            </h2>\r\n        </div>\r\n        \r\n        <div class=\"modal-footer justify-content-center\">\r\n          <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n          (click)=\"closeModale()\" >OK</button>\r\n        </div>\r\n  \r\n      </form>\r\n    </div>\r\n  \r\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <br>\r\n      <div class=\"row form-group justify-content-center\">\r\n        <h1>Modifica password</h1>\r\n      </div>\r\n      <br>\r\n      <div class=\"row form-group justify-content-center\" >\r\n        <div class=\"col-md-4 \">\r\n          <label  for=\"nome\">Password corrente</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"oldPassword\" placeholder=\"password corrente\" maxlength=\"20\"\r\n            [(ngModel)]=\"oldPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n          <small *ngIf=\"!oldPassword && !flag.fOld\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n          <small *ngIf=\"oldPassword && !flag.fOld\" id=\"avviso\" style=\"color: red;\">*password corrente errata</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group justify-content-center\" >\r\n        <div class=\"col-md-4 \">\r\n          <label  for=\"nome\">Nuova password</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"newPassword\" placeholder=\"nuova password\" maxlength=\"20\"\r\n            [(ngModel)]=\"newPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n            <small *ngIf=\"!newPassword && !flag.fNew\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            <small *ngIf=\"newPassword && !flag.fNew\" id=\"avviso\" style=\"color: red;\">*password non valida</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group justify-content-center\" >\r\n        <div class=\"col-md-4 \">\r\n          <label  for=\"nome\">Conferma nuova password</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"confirmNewPassword\" placeholder=\"conferma nuova password\" maxlength=\"20\"\r\n            [(ngModel)]=\"confirmNewPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n            <small *ngIf=\"!confirmNewPassword && !flag.fCNew\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            <small *ngIf=\"confirmNewPassword && !flag.fCNew\" id=\"avviso\" style=\"color: red;\">*password non corrispondenti</small>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n          <button type=\"button\" [disabled]=\"!confirmNewPassword || !newPassword || !oldPassword || \r\n          !flag.fOld || !flag.fNew || !flag.fCNew\" (click)=\"salva(content)\" name=\"button\"\r\n              class=\"btn btn-outline-primary\">Salva</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <ng-template #content let-modal>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n            <h2 style=\"color: green;\" *ngIf=\"risultatoModifica\">\r\n                <i class=\"fa fa-check-circle\"></i>\r\n                Modifica password avvenuta correttamente!\r\n            </h2>\r\n            <h2 style=\"color: red;\" *ngIf=\"!risultatoModifica\">\r\n                <i class=\"fa fa-exclamation-circle\"></i>\r\n                Errore!\r\n            </h2>\r\n        </div>\r\n        \r\n        <div class=\"modal-footer justify-content-center\">\r\n          <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n          (click)=\"closeModale()\" >OK</button>\r\n        </div>\r\n  \r\n      </form>\r\n    </div>\r\n  \r\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n<router-outlet></router-outlet>\r\n<!-- main content container -->\r\n<!-- <div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-8 offset-sm-2\">\r\n              \r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>   -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrello/carrello.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrello/carrello.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<ngb-alert *ngIf=\"alert && alert != null\" [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-10 offset-1\">\r\n            <br>\r\n            <h2>Il mio Carrello</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-10\" *ngIf=\"active && !carrelloVuoto\">\r\n            <table class=\"table\">\r\n                <tbody>\r\n                    <br>\r\n                    <br>\r\n                    <tr *ngFor=\"let prod of prodInCarrello\">\r\n                        <td style=\"width: 100px; height: 100px;\">\r\n                            <img [src]=\"'/assets/immagini_prodotti/' + prod.pr.immagine \" class=\"nav-link\" style=\"cursor: pointer;\r\n                            width: 100px; height: 100px;\">\r\n                        </td>\r\n                        <td>\r\n                            <div>\r\n                                {{prod.pr.nome}}\r\n                            </div>\r\n                            <div>\r\n                                Quantità:\r\n                                <select [(ngModel)]=\" prod.ca.quantita_prodotto\" style=\"cursor: pointer;\"\r\n                                    (ngModelChange)=\"aggiornaQuantita(prod.ca)\">\r\n                                    <option *ngFor=\" let x of counter(prod.pr.quantita); let i= index \">\r\n                                        {{i+1}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>\r\n                                    <a style=\"color: blue; cursor: pointer;\" (click)=\"eliminaProdotto(prod.ca)\">\r\n                                        Elimina prodotto\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n\r\n                        </td>\r\n                        <td>\r\n                            {{calPrezzo(prod.ca.quantita_prodotto, prod.ca.prezzo_prodotto)}} €\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>\r\n                            Totale Provvisorio: {{costoTotale}} €\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <div class=\"col-10\" *ngIf=\"active && carrelloVuoto\">\r\n            <h4>Nessun prodotto nel carrello</h4>\r\n        </div>\r\n        <div class=\"col-2 form-group; border-left\">\r\n            <br><br><br>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h6>Totale Provvisorio: </h6> {{costoTotale}} €\r\n                    <br><br>\r\n                    <button type=\"button\" name=\"button\" style=\"color: black; cursor: pointer;\"\r\n                        class=\"btn btn-outline-warning\" (click)=\"acquista()\" *ngIf=\"!carrelloVuoto\">\r\n                        Procedi all'ordine\r\n                    </button>\r\n                    <br><br>\r\n                    <button type=\"button\" name=\"button\" style=\"color: black; cursor: pointer;\"\r\n                        class=\"btn btn-outline-warning\" (click)=\"catalogo()\">\r\n                        Continua shopping\r\n                    </button>\r\n                    </div>\r\n            </div>\r\n            <br><br> \r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br><br><br><br>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-2\" style=\"background-color: rgba(150, 147, 7, 0.253); border-right: solid;\">\r\n            <br>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\" style=\"background-color: rgb(255, 255, 255); border: solid; height: 200px;\">\r\n                    \r\n                    <h6>Filtri:</h6>\r\n                    \r\n                    <input type=\"checkbox\" [checked]=\"check.stampanti\"\r\n                        (change)=\"check.stampanti = !check.stampanti;tActive = false; setFiltri()\" style=\"cursor: pointer\">\r\n                    Stampanti\r\n                    <br>\r\n                    <input type=\"checkbox\" [checked]=\"check.filamenti\"\r\n                        (change)=\"check.filamenti = !check.filamenti;tActive = false; setFiltri()\" style=\"cursor: pointer\">\r\n                    Filamenti\r\n                    <br>\r\n                    <input type=\"checkbox\" [checked]=\"check.pezzi\" (change)=\"check.pezzi = !check.pezzi; setFiltri()\"\r\n                        style=\"cursor: pointer\"> Pezzi di ricambio\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-10\" *ngIf=\"tActive\">\r\n            <table class=\"table\">\r\n                <tbody>\r\n                    <br>\r\n                    <br>\r\n                    <tr *ngFor=\"let prodotto of lProdotti\">\r\n                        <td style=\"width: 150px; height: 150px;\">\r\n                            <img [src]=\"'/assets/immagini_prodotti/' + prodotto.immagine \" class=\"nav-link\"\r\n                                style=\"cursor: pointer;\r\n                                width: 150px; height: 150px;\" (click)=\"apriDettaglio(prodotto)\">\r\n                        </td>\r\n                        <td class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"apriDettaglio(prodotto)\">\r\n                            <div>\r\n                                <h3>{{ prodotto.nome }}</h3>\r\n                            </div>\r\n                            <div>\r\n                                <h4> {{ prodotto.prezzo }} € </h4>\r\n                            </div>\r\n                            <div *ngIf=\"prodotto.quantita < 6 && prodotto.quantita > 0\" style=\"color: red;\">\r\n                                Disponibilità: solo {{prodotto.quantita}}\r\n\r\n                            </div>\r\n                            <div *ngIf=\"prodotto.quantita === 0\" style=\"color: red;\">\r\n                                Disponibilità: attualmente non disponibile\r\n\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div class=\"d-flex justify-content-between p-2\">\r\n                <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n                </ngb-pagination>\r\n\r\n                <select class=\"custom-select\" style=\"width: auto; cursor: pointer;\" [(ngModel)]=\"pageSize\">\r\n                    <option [ngValue]=\"2\">2 items per page</option>\r\n                    <option [ngValue]=\"4\">4 items per page</option>\r\n                    <option [ngValue]=\"6\">6 items per page</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-10\">\r\n            <table class=\"table\">\r\n                <tbody>\r\n                    <br>\r\n                    <br>\r\n                    <tr>\r\n                        <td style=\"width: 500px; height: 500px;\">\r\n                            <img [src]=\"'/assets/immagini_prodotti/' + prodotto.immagine\"\r\n                                style=\"width: 500px; height: 500px;\">\r\n                        </td>\r\n                        <td>\r\n                            <div>\r\n                                <h3>{{ prodotto.nome }}</h3>\r\n                            </div>\r\n                            <div>\r\n                                <h4> prezzo: {{ prodotto.prezzo }} € </h4>\r\n                            </div>\r\n                            <div *ngIf=\"prodotto.quantita > 0\">\r\n                                Disponibilità: {{prodotto.quantita}}\r\n                            </div>\r\n                            <div *ngIf=\"prodotto.quantita === 0\" style=\"color: red;\">\r\n                                Attualmente non disponibile\r\n                            </div>\r\n                            <br><br>\r\n                            <div>\r\n                                Descrizione: <br>\r\n                                {{prodotto.descrizione}}\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br><br><br>\r\n        </div>\r\n        <div class=\"col-2 form-group; border-left \">\r\n            <br><br><br>\r\n            Quantità:\r\n            <select [disabled]=\"prodotto.quantita === 0 || !loggedUt\" \r\n            [(ngModel)]=\" qSelected\" style=\"cursor: pointer;\">\r\n                <option *ngFor=\" let x of counter(prodotto.quantita); let i= index \">\r\n                    {{i+1}}\r\n                </option>\r\n            </select>\r\n            <br><br>\r\n            <button type=\"button\" name=\"button\" style=\"color: black; cursor: pointer;\" class=\"btn btn-outline-warning\" \r\n            [disabled]=\"prodotto.quantita === 0 || !loggedUt\" (click)=\"aggiungiAlCarrello()\" >\r\n                <h6> <i class=\"fa fa-shopping-cart\"></i> Aggiungi al carrello </h6>\r\n            </button>\r\n            <br>\r\n            {{qSelected}}\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/contatti/contatti.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/contatti/contatti.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container-fluid\" style=\"background-color: rgba(150, 147, 7, 0.253);\">\n    <br><br>\n    <div class=\"row justify-content-center\">\n        <h2>Contattaci</h2>\n    </div>\n    <div class=\"row justify-content-center\">\n        <h4>Hai qualche domanda? Siamo a tua disposizione da Lun.- Ven. dalle 9 - 18</h4>\n\n    </div>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-4 offset-1 \">\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"background-color: rgba(26, 131, 192, 0.199); height: 400px;\">\n                    <div class=\"row justify-content-center\" >\n                        <h1>\n                            <i class=\"fa fa-phone\"></i>\n                        </h1>\n                    </div>\n                    <div class=\"row justify-content-center\" >\n                        <h1>\n                           Telefono\n                        </h1>\n                    </div>\n                    <br><br>\n                    <div class=\"row justify-content-center\" >\n                        <h4>\n                           +39 111 2345678\n                        </h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-4 offset-2\" >\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"background-color: rgba(26, 131, 192, 0.199); height: 400px;\">\n                    <div class=\"row justify-content-center\" >\n                        <h1>\n                            <i class=\"fa fa-comments\"></i>\n                        </h1>\n                    </div>\n                    <div class=\"row justify-content-center\" >\n                        <h1>\n                            Chat\n                        </h1>\n                    </div>\n                    <br><br>\n                    <div class=\"row justify-content-center\" >\n                        <h1>\n                            <button class=\"btn btn-sm btn-outline-primary mr-400\">\n                                Inizia Chat\n                            </button>\n                        </h1>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br><br>    <br><br>\n    <br><br>\n    <br><br>    <br><br>\n    <br><br>\n\n\n\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"page-footer font-small bg-primary pt-4\">\r\n\r\n    <div class=\"container-fluid text-center text-md-left\">\r\n\r\n        <div class=\"row\">\r\n            <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n            <div class=\"col-md-3 offset-2 mb-md-0 mb-3\">\r\n\r\n                <h5 class=\"text-uppercase\" style=\"color: white;\">Assistenza e contatti</h5>\r\n\r\n                <ul class=\"list-unstyled\">\r\n                  \r\n                    <li>\r\n                        <a routerLink=\"\" style=\"color: white; cursor: pointer; \" (click)=\"reidirectTo('metodi_pagamento')\">Metodi di pagamento</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"\" style=\"color: white;\" (click)=\"reidirectTo('contatti')\">Contatti</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n                <h5 class=\"text-uppercase\" style=\"color: white;\">Area riservata</h5>\r\n\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <a href=\"login_admin\" style=\"color: white;\">Login admin</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\" style=\"color: white;\">© 2020 Copyright: Alfredo Fiore\r\n    </div>\r\n\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/metodi-pagamento/metodi-pagamento.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/metodi-pagamento/metodi-pagamento.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container-fluid\" style=\"background-color: rgba(150, 147, 7, 0.253);\">\n    <div class=\"row\">\n        <div class=\"col-5\" >\n            <h3>\n                Metodi di pagamento\n            </h3>\n            <br>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"col-12 offset-1\">\n                <h6>\n                    Puoi utilizzare diversi metodi di pagamento per \n                    effettuare acquisti sul nostro sito: carte di credito, \n                    buoni regalo o codici per ricaricare il tuo account, \n                    che puoi pagare in contanti presso i punti vendita selezionati.\n                </h6>\n            </div>\n        </div>\n    </div>\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"col-12 offset-1\">\n                <div class=\"row\">\n                    <h5>\n                        È possibile utilizzare i seguenti metodi di pagamento:\n                    </h5>\n                </div>\n                <li>Visa</li>\n                <li>Mastercard</li>\n                <li>American Express</li>\n                <li>Paypal</li>    \n                <li>Postepay</li>\n            </div>\n            <br><br>\n            <div class=\"col-12 offset-1\">                      \n                <div class=\"row\">\n                    <h5>\n                        I seguenti metodi di pagamento non possono essere accettati per acquistare articoli:\n                    </h5>\n                </div>\n                <li>Assegni o vaglia postali</li>\n                <li>Contanti</li>\n                <li>Pagamento in contrassegno</li>\n                <li>Trasferimenti bancari</li>    \n                <li>Bonifici</li>\n            </div>         \n            <br><br><br><br><br><br><br>\n            \n        </div>\n    </div>\n    <br>\n</div>    \n\n\n\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<br>\r\n<ngb-carousel *ngIf=\"images\" style=\"width: 100%; margin: 0 auto\">\r\n    <ng-template ngbSlide>\r\n        <div class=\"picsum-img-wrapper\">\r\n            <img [src]=\"images[0]\" alt=\"Random first slide\" style=\"width: 100%; height: 150%;\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n        </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <div class=\"picsum-img-wrapper\">\r\n            <img [src]=\"images[1]\" alt=\"Random second slide\" style=\"width: 100%; height: 150%;\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n        </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <div class=\"picsum-img-wrapper\">\r\n            <img [src]=\"images[2]\" alt=\"Random third slide\" style=\"width: 100%; height: 300%;\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n        </div>\r\n    </ng-template>\r\n</ngb-carousel>\r\n\r\n\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"reidirectTo('')\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"loadProdotti(true); reloadCatalogo()\">Prodotti</a>\r\n            </li>\r\n            <li>\r\n                <form class=\"form-inline my-2 my-lg-0\">\r\n                    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Cerca\" aria-label=\"Search\"\r\n                    [(ngModel)]=\"keyFind\"  [ngModelOptions]=\"{standalone: true}\">\r\n                    <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\"\r\n                        (click)=\"searchProdotti(keyFind, true); reloadCatalogo(keyFind,true)\">\r\n                        <i class=\"fa fa-search\"></i></button>\r\n                </form>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"mx-auto my-2 order-0 order-md-1 position-relative\">\r\n        <a class=\"mx-auto\" style=\"cursor: pointer;\" (click)=\"reidirectTo('')\">\r\n            <img src=\"/assets/loghi/logo_sito.png\" class=\"rounded-circle\">\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-collapse2\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" style=\"cursor: pointer;\" *ngIf=\"!utCorrente\" (click)=\"logout() \">Login</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" style=\"cursor: pointer;\" *ngIf=\"!utCorrente\" (click)=\"reidirectTo('registrazione')\">Signup</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n\r\n                <a class=\"dropdown \">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"utCorrente\">\r\n                        Benvenuto {{utCorrente.username}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"reidirectTo('gestione_profilo'); clearTentativi() \">Il mio profilo</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" *ngIf=\"utCorrente\" (click)=\"logout()\">Logout</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" *ngIf=\"utCorrente\" (click)=\"reidirectTo('ordini')\">I miei ordini</a>\r\n                    </div>\r\n                    \r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" style=\"cursor: pointer;\" *ngIf=\"utCorrente\" (click)=\"reidirectTo('carrello')\">\r\n                    <i class=\"fa fa-shopping-cart\">\r\n                    <span class=\"badge badge-danger\" *ngIf=\"numProdotti && numProdotti >0\">{{numProdotti}}</span>\r\n\r\n                    </i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordini/ordini.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ordini/ordini.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<br>\r\n<div class=\"container-fluid\" *ngIf=\"loaded && numeroOrdini === 0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-10 offset-1\">\r\n            <h2>Nessun ordine effettuato</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\" *ngIf=\"loaded && numeroOrdini > 0\">\r\n    <div class=\"row\" *ngFor=\"let ord of listaOrdini\">\r\n        <div class=\"col-10 offset-1\">\r\n            <br><br>\r\n            <table class=\"table table-bordered\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th scope=\"col\">Data ordine:<br> {{getDate(ord.data_ordine)}}</th>\r\n                        <th scope=\"col\" >Totale:<br> {{ord.prezzo}} €</th>\r\n                        <th scope=\"col\">Invia a:<br> {{decriptIndirizzo(ord.indirizzo_spedizione).cognome}}\r\n                            {{decriptIndirizzo(ord.indirizzo_spedizione).nome}} </th>\r\n                        <th scope=\"col\">Ordine N°: {{ord.id}}</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let p of prodottiToArray(ord.prodotti)\">\r\n                        <td scope=\"col\" style=\"width: 100px; height: 100px;\">\r\n                            <img [src]=\"'/assets/immagini_prodotti/' + decriptProdotto(p).immagine \" class=\"nav-link\"\r\n                                style=\"cursor: pointer;\r\n                            width: 100px; height: 100px;\">\r\n                        <td scope=\"col\" colspan=\"3\">\r\n                            <h5>{{decriptProdotto(p).nome}} </h5>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/gestione-dati.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/gestione-dati.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<br>\r\n<ngb-tabset *ngIf=\"utenteAttivo\" [justify]=\"'justified'\">\r\n\r\n    <ngb-tab title=\"Modifica password\">\r\n      <ng-template ngbTabContent>\r\n        <p>\r\n            <app-modifica-password></app-modifica-password>\r\n        </p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Gestione dati\">\r\n      <ng-template ngbTabContent>\r\n        <p>\r\n            <app-modifica-dati></app-modifica-dati>\r\n        </p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n  <br><br>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <br>\r\n    <div class=\"form-group\">\r\n        <br><br><br>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Nome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"nome\" placeholder=\"Inserire nome\" maxlength=\"40\"\r\n                    [(ngModel)]=\"utenteModificato.nome\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"checkField('nome')\">\r\n                <small *ngIf=\"!utenteModificato.nome\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Cognome</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"cognome\" placeholder=\"Inserire cognome\" maxlength=\"40\"\r\n                    [(ngModel)]=\"utenteModificato.cognome\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"checkField('cognome')\">\r\n                <small *ngIf=\"!utenteModificato.cognome\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">E-mail</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Inserire email\" maxlength=\"80\"\r\n                    [(ngModel)]=\"utenteModificato.email\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"checkField('email')\">\r\n                <small *ngIf=\"!flag.email && utenteModificato.email\" id=\"avviso\" style=\"color: red;\">*E-mail non\r\n                    valida</small>\r\n                <small *ngIf=\"!utenteModificato.email\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Username</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Inserire username\" maxlength=\"80\"\r\n                    [(ngModel)]=\"utenteModificato.username\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"checkField('username')\">\r\n                <small *ngIf=\"!utenteModificato.username\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <div class=\"col-md-8 offset-2\">\r\n                <label for=\"nome\">Cellulare</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"cellulare\" placeholder=\"Inserire cellulare\" maxlength=\"80\"\r\n                    [(ngModel)]=\"utenteModificato.cellulare\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (ngModelChange)=\"checkField('cellulare')\">\r\n                <small *ngIf=\"!utenteModificato.cellulare\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n            <button type=\"button\" name=\"button\" class=\"btn btn-outline-primary\"\r\n                [disabled]=\"!flag.general || !flag.nome || !flag.cognome || !flag.email || !flag.username || !flag.cellulare\"\r\n                (click)=\"salvaModifiche(content)\">Salva</button>\r\n        </div>\r\n        <br> <br><br><br>\r\n        <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n            <button type=\"button\" name=\"button\" class=\"btn btn-outline-danger\" (click)=\"apriModale(content2)\">Elimina\r\n                profilo</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <h2 style=\"color: green;\" *ngIf=\"risultatoModifica\">\r\n                    <i class=\"fa fa-check-circle\"></i>\r\n                    Modifica password avvenuta correttamente!\r\n                </h2>\r\n                <h2 style=\"color: red;\" *ngIf=\"!risultatoModifica\">\r\n                    <i class=\"fa fa-exclamation-circle\"></i>\r\n                    Errore!\r\n                </h2>\r\n            </div>\r\n\r\n            <div class=\"modal-footer justify-content-center\">\r\n                <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"closeModale()\">OK</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #content2 let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" style=\"color: red;\">Eliminazione profilo</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-10 offset-1\">\r\n                        <label>\r\n                            Confermi di voler eliminare il tuo profilo?\r\n                            <br> Tutti i dati andranno persi\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-10 offset-1\">\r\n                        <label>\r\n                            Per confermare digita 'confermo eliminazione'\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col-md-10 offset-1\">\r\n                        <input type=\"email\" class=\"form-control\" maxlength=\"21\" [(ngModel)]=\"fraseEliminazione\"\r\n                            [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer justify-content-center\">\r\n                    <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n                        [disabled]=\"!fraseEliminazione || fraseEliminazione !== 'confermo eliminazione' \"\r\n                        (click)=\"closeModale(); eliminaUtente() \">Conferma</button>\r\n                    <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"closeModale()\">Annulla</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ALERT-->\r\n    <div *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n    </div>\r\n<form>\r\n  <br>\r\n  <div class=\"form-group\">\r\n    <br>\r\n    <div class=\"row form-group justify-content-center\">\r\n      <h1>Modifica password</h1>\r\n    </div>\r\n    <br>\r\n    <div class=\"row form-group justify-content-center\" >\r\n      <div class=\"col-md-4 \">\r\n        <label  for=\"nome\">Password corrente</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"oldPassword\" placeholder=\"password corrente\" maxlength=\"20\"\r\n          [(ngModel)]=\"oldPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n        <small *ngIf=\"!oldPassword && !flag.fOld\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n        <small *ngIf=\"oldPassword && !flag.fOld\" id=\"avviso\" style=\"color: red;\">*password corrente errata</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group justify-content-center\" >\r\n      <div class=\"col-md-4 \">\r\n        <label  for=\"nome\">Nuova password</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"newPassword\" placeholder=\"nuova password\" maxlength=\"20\"\r\n          [(ngModel)]=\"newPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n          <small *ngIf=\"!newPassword && !flag.fNew\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n          <small *ngIf=\"newPassword && !flag.fNew\" id=\"avviso\" style=\"color: red;\">*password non valida</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group justify-content-center\" >\r\n      <div class=\"col-md-4 \">\r\n        <label  for=\"nome\">Conferma nuova password</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"confirmNewPassword\" placeholder=\"conferma nuova password\" maxlength=\"20\"\r\n          [(ngModel)]=\"confirmNewPassword\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctrlCampo()\">\r\n          <small *ngIf=\"!confirmNewPassword && !flag.fCNew\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n          <small *ngIf=\"confirmNewPassword && !flag.fCNew\" id=\"avviso\" style=\"color: red;\">*password non corrispondenti</small>\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n        <button type=\"button\" [disabled]=\"!confirmNewPassword || !newPassword || !oldPassword || \r\n        !flag.fOld || !flag.fNew || !flag.fCNew\" (click)=\"salva()\" name=\"button\"\r\n            class=\"btn btn-outline-primary\">Salva</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n \r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\" integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\" crossorigin=\"anonymous\">\r\n\r\n    <body style=\"background-color: rgba(255, 166, 0, 0.247)\">\r\n\t<app-navbar></app-navbar>\r\n\t<br>\r\n\t<!--ALERT-->\r\n    <div *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n    </div>\r\n\t<div class=\"user_card\">\r\n        <br><br><br><br><br>\r\n\r\n\t\t\t\t<div class=\"d-flex justify-content-center\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex justify-content-center form_container\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input  type=\"text\" name=\" \" class=\"form-control input_user\" placeholder=\"e-mail\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\" ut.email\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input-group mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input type=\"{{tipoCampo}}\" name=\" \" class=\"form-control input_pass\"  placeholder=\"password\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\" ut.password\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group form-check\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" (change)=\"showPassword()\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"exampleCheck1\">mostra password</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\r\n\t\t\t\t\t<button type=\"button\" (click)=\"entra()\" name=\"button\" class=\"btn btn-outline-primary\">Login</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mt-4\">\r\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\r\n\t\t\t\t\t\tNon sei registrato? <a href=\"./registrazione\" class=\"ml-2\">registrati</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br><br><br><br><br>\r\n\t\t\t<app-footer></app-footer>\r\n</body>\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/registrazione/registrazione.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/registrazione/registrazione.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n\r\n</head>\r\n\r\n<body style=\"background-color: rgba(255, 166, 0, 0.247)\">\r\n    <app-navbar></app-navbar>\r\n    <br>\r\n    <!--ALERT-->\r\n    <div *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n    </div>\r\n    <!--modale-->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Confermi di voler salvare i dati inseriti?</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <li>Nome: {{newUt.nome}}</li>\r\n            <li>Cognome: {{newUt.cognome}}</li>\r\n            <li>Username: {{newUt.username}}</li>\r\n            <li>E-mail: {{newUt.email}}</li>\r\n            <li>Password: {{newUt.password}}</li>\r\n            <li>Codice Fiscale: {{newUt.codicefiscale}}</li>\r\n            <li>Indirizzo: {{newUt.indirizzo}}</li>\r\n            <li>Cellulare: {{newUt.cellulare}}</li>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal('salva', content)\">Salva</button>\r\n            <button type=\"button\" class=\"btn btn-outline-dark\"\r\n                (click)=\"closeModal('annulla' , content)\">Annulla</button>\r\n        </div>\r\n    </ng-template>\r\n    <form>\r\n        <br>\r\n        <div class=\"form-group\">\r\n            <br>\r\n            <div class=\"row form-group justify-content-center\">\r\n                <h1>Registrazione Cliente</h1>\r\n            </div>\r\n            <br><br><br>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-md-4 offset-1\">\r\n                    <h6>Nome</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"nome\" placeholder=\"Inserire nome\" maxlength=\"20\"\r\n                        [(ngModel)]=\" newUt.nome\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!newUt.nome && flag\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                </div>\r\n                <div class=\"col-md-4 offset-2\">\r\n                    <h6>Cognome</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"cognome\" placeholder=\"Inserire cognome\" maxlength=\"20\"\r\n                        [(ngModel)]=\" newUt.cognome\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!newUt.cognome && flag\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-md-4 offset-1\">\r\n                    <h6>Username</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Inserire username\"\r\n                        maxlength=\"20\" [(ngModel)]=\" newUt.username\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!newUt.username && flag\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                </div>\r\n                <div class=\"col-md-4 offset-2\">\r\n                    <h6>E-mail</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Inserire e-mail\" maxlength=\"40\"\r\n                        [(ngModel)]=\" newUt.email\" (ngModelChange)=\"onChange('email')\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"(!newUt.email || !flagCtrlCampi.email) \" id=\"avviso\" style=\"color: red;\">\r\n                        {{msgErrore.email}}</small>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-md-4 offset-1\">\r\n                    <h6>Password</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"password\" placeholder=\"Inserire password\"\r\n                        maxlength=\"20\" [(ngModel)]=\" newUt.password\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!newUt.password && flag\" id=\"avviso\" style=\"color: red;\">\r\n                        *campo obbligatorio</small> <br>\r\n                    <small *ngIf=\"!this.flagCtrlCampi.password\" id=\"avviso\" style=\"color: red;\">\r\n                        *La password deve essere di almeno 8 caratteri e contenere almeno:\r\n                        <li>una lettera maiuscola</li>\r\n                        <li>una lettera minuscola</li>\r\n                        <li>un carattere spciale</li>\r\n                        <li>nessuno spazio</li>\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-4 offset-2\">\r\n                    <h6>Conferma password</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"cPassword\" placeholder=\"Inserire password\"\r\n                        maxlength=\"20\" [(ngModel)]=\" cPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!cPassword && flag\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-md-4 offset-1\">\r\n                    <h6>Codice fiscale</h6>\r\n                    <input type=\"email\" class=\"form-control\" id=\"cf\" placeholder=\"Inserire codice fiscale\"\r\n                        maxlength=\"16\" [(ngModel)]=\" newUt.codicefiscale\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"onChange('codicefiscale')\">\r\n                    <small *ngIf=\"(!newUt.codicefiscale || !flagCtrlCampi.codiceFiscale) \" id=\"avviso\"\r\n                        style=\"color: red;\">\r\n                        {{msgErrore.codiceFiscale}}</small>\r\n                </div>\r\n                <div class=\"col-md-4 offset-2\">\r\n                    <h6>Cellulare</h6>\r\n                    <input type=\"cellulare\" class=\"form-control\" id=\"cellulare\"\r\n                        placeholder=\"Inserire numero di cellulare\" maxlength=\"20\" [(ngModel)]=\" newUt.cellulare\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                    <small *ngIf=\"!newUt.cellulare && flag\" id=\"avviso\" style=\"color: red;\">*campo obbligatorio</small>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-md-10 offset-1\">\r\n                    <h6>indirizzo</h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            via: <input type=\"email\" class=\"form-control\" id=\"indirizzo\"\r\n                                placeholder=\"Inserire indirizzo\" maxlength=\"20\" [(ngModel)]=\"indirizzo.via\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                            <small *ngIf=\"!indirizzo.via && flag\" id=\"avviso\" style=\"color: red;\">*campo\r\n                                obbligatorio</small>\r\n                        </div>\r\n                        <div class=\"col-md-2 \">\r\n                            N°: <input type=\"email\" class=\"form-control\" id=\"indirizzo\" placeholder=\"Inserire indirizzo\"\r\n                                maxlength=\"20\" [(ngModel)]=\"indirizzo.civico\" [ngModelOptions]=\"{standalone: true}\">\r\n                            <small *ngIf=\"!indirizzo.civico && flag\" id=\"avviso\" style=\"color: red;\">*campo\r\n                                obbligatorio</small>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5 \">\r\n                            Provincia:\r\n                            <select class=\"form-control\" [(ngModel)]=\"indirizzo.provincia\"\r\n                            (ngModelChange)=\"loadComuni()\" [ngModelOptions]=\"{standalone: true}\" style=\"cursor: pointer;\">\r\n                                <option *ngFor=\" let x of provincie \">\r\n                                    {{x.nome}}\r\n                                </option>\r\n                            </select>\r\n                            <small *ngIf=\"!indirizzo.provincia && flag\" id=\"avviso\" style=\"color: red;\">*campo\r\n                                obbligatorio</small>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            Città:\r\n                            <select class=\"form-control\" [(ngModel)]=\"indirizzo.citta\" style=\"cursor: pointer;\"\r\n                            (ngModelChange)=\"loadCap()\"\r\n                             [ngModelOptions]=\"{standalone: true}\">\r\n                                <option *ngFor=\" let x of listaComuniDaCaricare \">\r\n                                    {{x.nome}}\r\n                                </option>\r\n                            </select>\r\n                            <small *ngIf=\"!indirizzo.citta && flag\" id=\"avviso\" style=\"color: red;\">*campo\r\n                                obbligatorio</small>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            CAP: \r\n                            <select class=\"form-control\" [(ngModel)]=\"indirizzo.cap\" style=\"cursor: pointer;\"\r\n                             [ngModelOptions]=\"{standalone: true}\">\r\n                                <option *ngFor=\" let x of listaCap \">\r\n                                    {{x}}\r\n                                </option>\r\n                            </select>\r\n                            <small *ngIf=\"!indirizzo.cap && flag\" id=\"avviso\" style=\"color: red;\">*campo\r\n                                obbligatorio</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br><br><br><br>\r\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n        <button type=\"button\" (click)=\"registra(content)\" name=\"button\"\r\n            class=\"btn btn-outline-primary\">Registra</button>\r\n    </div>\r\n    <br><br><br><br>\r\n    <app-footer></app-footer>\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/acquisto/acquisto.component.css":
/*!*************************************************!*\
  !*** ./src/app/acquisto/acquisto.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjcXVpc3RvL2FjcXVpc3RvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/acquisto/acquisto.component.ts":
/*!************************************************!*\
  !*** ./src/app/acquisto/acquisto.component.ts ***!
  \************************************************/
/*! exports provided: AcquistoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcquistoComponent", function() { return AcquistoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_carta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/carta.service */ "./src/app/util/carta.service.ts");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/indirizzo */ "./src/app/util/indirizzo.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utenti_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _util_carta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/carta */ "./src/app/util/carta.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












let AcquistoComponent = class AcquistoComponent {
    constructor(logServ, router, ctrlCampi, modalService, carrelloService, cartaService, datepipe) {
        this.logServ = logServ;
        this.router = router;
        this.ctrlCampi = ctrlCampi;
        this.modalService = modalService;
        this.carrelloService = carrelloService;
        this.cartaService = cartaService;
        this.datepipe = datepipe;
        this.indirizzoAttuale = new src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_4__["Indirizzo"]();
        this.ut = this.logServ.utenteAtuale;
        this.totaleAcquisto = this.carrelloService.totaleCarrello;
        this.speseSpedizione = 0;
        this.totaleOrdine = this.totaleAcquisto;
        this.flagPagamento = 'paypal';
        // per modale aggiunta indirizzo
        this.flagTipoInd = 'ind1';
        this.newIndirizzo = new src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_4__["Indirizzo"]();
        this.flagNewInd = false;
        this.currentDate = new Date();
        this.counter = Array;
        this.meseSelected = 0;
        this.annoSelected = this.currentDate.getFullYear();
        this.newCarta = new _util_carta__WEBPACK_IMPORTED_MODULE_10__["Carta"]();
        this.flagCarta = {
            numCarta: false,
            nomeCarta: false,
            cognomeCarta: false,
            csvCarta: false,
        };
        this.checkUp = true;
    }
    ngOnInit() {
        if (!this.ut) {
            this.router.navigate([('home')]);
        }
        if (this.totaleAcquisto <= 50) {
            this.speseSpedizione = 15;
            this.totaleOrdine = this.totaleAcquisto + this.speseSpedizione;
            this.totaleOrdine = Math.round((this.totaleOrdine + Number.EPSILON) * 100) / 100;
        }
        this.cartaSelected = 0;
        this.indirizzoAttuale = this.ctrlCampi.indirizzoFromString(this.ut.indirizzo);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.ctrlCampi.getProvincie(), this.ctrlCampi.getComuni(), this.cartaService.getListCarta(this.ut), this.cartaService.getLastIdCarta(this.ut))
            .subscribe(res => {
            // provincie
            this.provincie = res[0];
            this.newIndirizzo.provincia = this.provincie[0].nome;
            // comuni
            this.comuni = res[1];
            this.loadComuni();
            if (res[2]) {
                if (res[2].length > 0) {
                    this.listaCarte = res[2];
                }
            }
            if (res[3] != null) {
                this.newIDCarta = res[3] + 1;
                console.log('NUMERO ULTIMO CARTA', res[3]);
            }
        });
    }
    loadComuni() {
        this.listaComuniDaCaricare = [];
        this.listaCap = [];
        for (const c of this.comuni) {
            if (c.provincia.nome === this.newIndirizzo.provincia) {
                this.listaComuniDaCaricare = this.listaComuniDaCaricare.concat(c);
            }
        }
        this.newIndirizzo.citta = this.listaComuniDaCaricare[0].nome;
        this.newIndirizzo.cap = null;
    }
    loadCap() {
        this.listaCap = [];
        for (const cp of this.listaComuniDaCaricare) {
            if (this.newIndirizzo.citta === cp.nome) {
                this.listaCap = cp.cap;
            }
        }
        this.newIndirizzo.cap = this.listaCap[0];
    }
    open(content) {
        if (!this.flagNewInd) {
            this.openModal(content);
        }
    }
    // gestione modale
    openModal(content) {
        this.modalService.open(content);
    }
    openModalLarge(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    closeModal(content) {
        this.flagTipoInd = 'ind1';
        this.modalService.dismissAll();
    }
    addNewIndirizzo(content) {
        this.flagNewInd = true;
        this.modalService.dismissAll();
    }
    eseguiAcquisto(content) {
        let indTmp = new src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_4__["Indirizzo"]();
        if (this.flagTipoInd === 'ind1' || !this.newIndirizzo) {
            indTmp = this.indirizzoAttuale;
        }
        else {
            indTmp = this.newIndirizzo;
        }
        const strInd = this.ctrlCampi.indirizzoToString(indTmp);
        this.carrelloService.postAcquista(this.carrelloService.carrelloAttuale, this.logServ.utenteAtuale, strInd)
            .then(res => {
            if (res !== null) {
                console.log('ACQUISTO AVVENUTO');
                this.codiceOrdineAcquistato = String(res);
                this.openModal(content);
            }
        });
    }
    // per nuova carta
    chiudi2(content) {
        // this.carrelloService.quantitaCarrello = 0;
        this.closeModal(content);
        // this.router.navigate([('home')]);
    }
    chiudi(content) {
        this.carrelloService.quantitaCarrello = 0;
        this.closeModal(content);
        this.router.navigate([('home')]);
    }
    // carta
    getTipoCarta(numCarta) {
        return this.ctrlCampi.getTipoCarta(numCarta);
    }
    decriptNomeCarta(numCarta) {
        const nome = this.ctrlCampi.getTipoCarta(numCarta);
        switch (nome) {
            case 'mastercard': {
                return 'Mastercard';
            }
            case 'visa': {
                return 'Visa';
            }
            case 'american-express': {
                return 'American Express';
            }
        }
    }
    selectCard(x) {
        this.cartaSelected = x;
        console.log('carta attuale', this.cartaSelected);
    }
    checkDatiCarta(nameCampo) {
        if (nameCampo === 'nomeCarta') {
            if (!this.newCarta.nome || (this.newCarta.nome && this.ctrlCampi.campoVuoto(this.newCarta.nome))) {
                this.flagCarta.nomeCarta = false;
            }
            else {
                this.flagCarta.nomeCarta = true;
            }
        }
        if (nameCampo === 'cognomeCarta') {
            if (!this.newCarta.cognome || (this.newCarta.cognome && this.ctrlCampi.campoVuoto(this.newCarta.cognome))) {
                this.flagCarta.cognomeCarta = false;
            }
            else {
                this.flagCarta.cognomeCarta = true;
            }
        }
        if (nameCampo === 'numeroCarta') {
            if (!this.newCarta.numero || (this.newCarta.numero &&
                (this.ctrlCampi.campoVuoto(this.newCarta.numero.toString()) ||
                    !this.ctrlCampi.validaNumeroCarta(this.newCarta.numero.toString())))) {
                this.flagCarta.numCarta = false;
            }
            else {
                this.flagCarta.numCarta = true;
            }
        }
        if (nameCampo === 'csvCarta') {
            if (!this.newCarta.csv || (this.newCarta.csv &&
                (this.ctrlCampi.campoVuoto(this.newCarta.csv.toString()) ||
                    !this.ctrlCampi.validaCSV(this.newCarta.csv.toString())))) {
                this.flagCarta.csvCarta = false;
            }
            else {
                this.flagCarta.csvCarta = true;
            }
        }
        console.log('data carta', this.meseSelected + '/' + this.annoSelected);
    }
    addNewCarta(content) {
        const dTmp = new Date();
        dTmp.setMonth(this.meseSelected);
        dTmp.setFullYear(this.annoSelected);
        console.log('mesescelto  ', this.meseSelected);
        console.log('annoscelto  ', this.meseSelected);
        this.newCarta.data_scadenza = dTmp;
        console.log('mese n data  ', dTmp.getMonth.toString());
        console.log('ano n data ', dTmp.getFullYear.toString());
        this.newCarta.cf_cliente = this.ut.codicefiscale;
        this.newCarta.id = this.newIDCarta;
        this.checkUp = false;
        this.cartaService.postAddCarta(this.newCarta, this.ut)
            .subscribe(res => {
            if (res === true) {
                if (this.listaCarte) {
                    this.listaCarte = this.listaCarte.concat(this.newCarta);
                }
                else {
                    this.listaCarte = [];
                    this.listaCarte[0] = this.newCarta;
                }
                this.checkUp = true;
                this.newCarta = new _util_carta__WEBPACK_IMPORTED_MODULE_10__["Carta"]();
                this.newIDCarta += 1;
                this.flagCarta.nomeCarta = false;
                this.flagCarta.cognomeCarta = false;
                this.flagCarta.numCarta = false;
                this.flagCarta.csvCarta = false;
                this.modalService.dismissAll();
            }
        }, err => {
            this.checkUp = true;
            console.log('errore add carta');
        });
    }
    getDate(data) {
        /*     const dataFormatted = data.toString();
         */
        const dataFormatted = this.datepipe.transform(data, 'MM/yyyy');
        return dataFormatted;
    }
};
AcquistoComponent.ctorParameters = () => [
    { type: _utenti_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_3__["ControlloCampiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__["CarrelloService"] },
    { type: _util_carta_service__WEBPACK_IMPORTED_MODULE_1__["CartaService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
];
AcquistoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-acquisto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acquisto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/acquisto/acquisto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./acquisto.component.css */ "./src/app/acquisto/acquisto.component.css")).default]
    })
], AcquistoComponent);



/***/ }),

/***/ "./src/app/amministratore/add-admin/add-admin.component.css":
/*!******************************************************************!*\
  !*** ./src/app/amministratore/add-admin/add-admin.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FtbWluaXN0cmF0b3JlL2FkZC1hZG1pbi9hZGQtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/amministratore/add-admin/add-admin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/amministratore/add-admin/add-admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login-admin/login-admin.service */ "./src/app/amministratore/login-admin/login-admin.service.ts");
/* harmony import */ var _amministratore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../amministratore */ "./src/app/amministratore/amministratore.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let AddAdminComponent = class AddAdminComponent {
    constructor(logServiceAdm, ctrlField, modalService) {
        this.logServiceAdm = logServiceAdm;
        this.ctrlField = ctrlField;
        this.modalService = modalService;
        this.flag = {
            general: false,
            cfValid: true,
            emailValid: true,
            cf: true,
            nome: true,
            cognome: true,
            email: true,
            password: true,
            cPassword: true
        };
        this.newAdmin = new _amministratore__WEBPACK_IMPORTED_MODULE_3__["Amministratore"]();
        this.listaCfAdmin = [];
        this.listaEmail = [];
    }
    ngOnInit() {
        this.logServiceAdm.getListCf(this.logServiceAdm.loggedAdmin).then(response => {
            this.listaCfAdmin = [];
            this.listaCfAdmin = this.listaCfAdmin.concat(response);
        }, error => {
            console.log('errore caricamento lista cf admin');
        });
        this.logServiceAdm.getListEmail(this.logServiceAdm.loggedAdmin).then(response => {
            this.listaEmail = [];
            this.listaEmail = this.listaEmail.concat(response);
        }, error => {
            console.log('errore caricamento lista cf admin');
        });
    }
    ctrlCampi(name) {
        if (name === 'codicefiscale') {
            const f = this.listaCfAdmin.includes(this.newAdmin.codicefiscale);
            console.log('contiene cf  ', f);
            if (this.newAdmin.codicefiscale && this.ctrlField.validateCF(this.newAdmin.codicefiscale)) {
                this.flag.cf = true;
                this.flag.cfValid = true;
                if (f) {
                    this.flag.cf = false;
                    // trovato quindi non si può usare
                    this.flag.cfValid = false;
                }
                console.log('cf valito');
            }
            else {
                this.flag.cfValid = true;
                this.flag.cf = false;
            }
        }
        if (name === 'nome') {
            if (this.newAdmin.nome && !this.ctrlField.campoVuoto(this.newAdmin.nome)) {
                this.flag.nome = true;
            }
            else {
                this.flag.nome = false;
            }
        }
        if (name === 'cognome') {
            if (this.newAdmin.cognome && !this.ctrlField.campoVuoto(this.newAdmin.cognome)) {
                this.flag.cognome = true;
            }
            else {
                this.flag.cognome = false;
            }
        }
        if (name === 'email') {
            const f = this.listaEmail.includes(this.newAdmin.email);
            if (this.newAdmin.email && this.ctrlField.validateEmail(this.newAdmin.email)) {
                this.flag.email = true;
                this.flag.emailValid = true;
                if (f) {
                    this.flag.email = false;
                    // trovato quindi non si può usare
                    this.flag.emailValid = false;
                    console.log('mail esistente');
                }
            }
            else {
                this.flag.email = false;
                this.flag.emailValid = true;
            }
        }
        if (name === 'password') {
            if (this.newAdmin.password && this.ctrlField.checkPassword(this.newAdmin.password)) {
                this.flag.password = true;
            }
            else {
                this.flag.password = false;
            }
        }
        if (name === 'confermapassword') {
            if (this.newAdmin.password && this.confermaPassword === this.newAdmin.password) {
                this.flag.cPassword = true;
            }
            else {
                this.flag.cPassword = false;
            }
        }
    }
    ctrlAllField() {
        this.flag.general = (this.newAdmin.codicefiscale && !this.ctrlField.campoVuoto(this.newAdmin.codicefiscale)) &&
            (this.newAdmin.nome && !this.ctrlField.campoVuoto(this.newAdmin.nome)) &&
            (this.newAdmin.cognome && !this.ctrlField.campoVuoto(this.newAdmin.cognome)) &&
            (this.newAdmin.email && !this.ctrlField.campoVuoto(this.newAdmin.email)) &&
            (this.newAdmin.password && !this.ctrlField.campoVuoto(this.newAdmin.password)) &&
            (this.confermaPassword && !this.ctrlField.campoVuoto(this.confermaPassword));
    }
    salva(content) {
        this.logServiceAdm.postAddNew(this.newAdmin, this.logServiceAdm.loggedAdmin).then(result => {
            if (result === true) {
                this.risultatoModifica = true;
            }
            else {
                this.risultatoModifica = false;
            }
            this.modalService.open(content);
        }, error => {
            this.risultatoModifica = false;
            console.log('errore chiamata aggiunta new admin');
            this.modalService.open(content);
        });
    }
    closeModale() {
        if (this.risultatoModifica) {
            this.newAdmin = new _amministratore__WEBPACK_IMPORTED_MODULE_3__["Amministratore"]();
            this.confermaPassword = '';
        }
        this.modalService.dismissAll();
    }
};
AddAdminComponent.ctorParameters = () => [
    { type: _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__["LoginAdminService"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
AddAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/add-admin/add-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-admin.component.css */ "./src/app/amministratore/add-admin/add-admin.component.css")).default]
    })
], AddAdminComponent);



/***/ }),

/***/ "./src/app/amministratore/amministratore.ts":
/*!**************************************************!*\
  !*** ./src/app/amministratore/amministratore.ts ***!
  \**************************************************/
/*! exports provided: Amministratore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Amministratore", function() { return Amministratore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Amministratore {
}


/***/ }),

/***/ "./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FtbWluaXN0cmF0b3JlL2dlc3Rpb25lLXByb2RvdHRpL2dlc3Rpb25lLXByb2RvdHRpLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GestioneProdottiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestioneProdottiComponent", function() { return GestioneProdottiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login-admin/login-admin.service */ "./src/app/amministratore/login-admin/login-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var src_app_catalogo_prodotto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/catalogo/prodotto */ "./src/app/catalogo/prodotto.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







const ALERTS = [
    {
        type: 'success',
        message: 'Operazione completata correttamente',
    }, {
        type: 'danger',
        message: 'Errore di Sistema',
    }
];
let GestioneProdottiComponent = class GestioneProdottiComponent {
    constructor(catService, adminService, modalService, ctrlCampi) {
        this.catService = catService;
        this.adminService = adminService;
        this.modalService = modalService;
        this.ctrlCampi = ctrlCampi;
        this.PRODOTTI = this.catService.listaProdotti;
        this.page = 1;
        this.pageSize = 4;
        this.attiva = true;
        this.tipoOperazione = '';
        this.newProdotto = new src_app_catalogo_prodotto__WEBPACK_IMPORTED_MODULE_5__["Prodotto"]();
        this.copiaProdotto = new src_app_catalogo_prodotto__WEBPACK_IMPORTED_MODULE_5__["Prodotto"]();
        this.collectionSize = this.PRODOTTI.length;
        this.flag = {
            diversi: false,
            nome: true,
            descrizione: true,
            prezzo: true,
            quantita: true,
            tipologia: true,
            immagine: true
        };
        this.textType = {
            nome: 'dark',
            descrizione: 'dark',
            prezzo: 'dark',
            quantita: 'dark',
            tipologia: 'dark',
            immagine: 'dark'
        };
    }
    ngOnInit() {
    }
    get lProdotti() {
        console.log(this.PRODOTTI);
        return this.PRODOTTI
            .map((prodotto, i) => (Object.assign({ id: i + 1 }, prodotto)))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    setEnabled(record) {
        record.flagActive = true;
    }
    openModalEditAdd(longContent, editRecord) {
        this.reset();
        this.modalService.open(longContent, { size: 'lg', scrollable: true });
        if (editRecord) {
            this.tipoOperazione = 'edit_operation';
            // Sarebbe Anular copy
            this.copiaProdotto = Object.assign({}, editRecord);
            this.newProdotto = editRecord;
        }
        else {
            this.flag = {
                diversi: false,
                nome: false,
                descrizione: false,
                prezzo: false,
                quantita: false,
                tipologia: false,
                immagine: false
            };
            this.tipoOperazione = 'add_operation';
            this.newProdotto = new src_app_catalogo_prodotto__WEBPACK_IMPORTED_MODULE_5__["Prodotto"]();
            this.catService.getLastId()
                .then(response => {
                this.newProdotto.id = response + 1;
                console.log('nuovo id', this.newProdotto.id);
            }, error => {
                console.log('errore caricamento id');
            });
        }
    }
    checkCampo(nCampo) {
        if (nCampo === 'nome') {
            this.flag.nome = !this.ctrlCampi.campoVuoto(this.newProdotto.nome);
            this.textType.nome = this.setBorder(this.flag.nome);
        }
        if (nCampo === 'descrizione') {
            this.flag.descrizione = !this.ctrlCampi.campoVuoto(this.newProdotto.descrizione);
            this.textType.descrizione = this.setBorder(this.flag.descrizione);
        }
        if (nCampo === 'immagine') {
            this.flag.immagine = !this.ctrlCampi.campoVuoto(this.newProdotto.immagine);
            this.textType.immagine = this.setBorder(this.flag.immagine);
            console.log('flag immagine', this.flag.immagine);
        }
        if (nCampo === 'prezzo') {
            const tmpPrezzo = String(this.newProdotto.prezzo);
            console.log('prezzo inserito', tmpPrezzo);
            this.flag.prezzo = this.ctrlCampi.ctrlValuta(tmpPrezzo);
            this.textType.prezzo = this.setBorder(this.flag.prezzo);
            console.log('flag prezzo', this.flag.prezzo);
        }
        if (nCampo === 'quantita') {
            this.flag.quantita = this.ctrlCampi.ctrlQuantita(this.newProdotto.quantita, -1, 500);
            this.textType.quantita = this.setBorder(this.flag.quantita);
            console.log('flag quantita', this.flag.quantita);
        }
        if (nCampo === 'tipologia') {
            this.flag.tipologia = this.ctrlCampi.ctrlQuantita(this.newProdotto.tipologia, 1, 3);
            this.textType.tipologia = this.setBorder(this.flag.tipologia);
            console.log('flag tipologia', this.flag.tipologia);
        }
        if (!this.ctrlCampi.prodEquals(this.newProdotto, this.copiaProdotto)) {
            this.flag.diversi = true;
        }
        else {
            this.flag.diversi = false;
        }
        console.log('diversi? ', this.flag.diversi);
    }
    setBorder(flag) {
        if (!flag) {
            return 'danger';
        }
        return 'success';
    }
    reset() {
        this.textType = {
            nome: 'dark',
            descrizione: 'dark',
            prezzo: 'dark',
            quantita: 'dark',
            tipologia: 'dark',
            immagine: 'dark'
        };
        this.flag = {
            diversi: false,
            nome: true,
            descrizione: true,
            prezzo: true,
            quantita: true,
            tipologia: true,
            immagine: true
        };
    }
    salva() {
        this.catService.postAddEditProdotto(this.newProdotto, this.tipoOperazione, this.adminService.loggedAdmin)
            .then(response => {
            if (response === true) {
                this.reloadProdotti();
                // apri alert inserte correct
                this.addAlert(0);
                console.log('risposta salvataggio', response);
            }
            else {
                this.attiva = true;
                // apri alert inserte error
                this.addAlert(1);
                console.log('risposta salvataggio [else]', response);
            }
        }, error => {
            this.attiva = true;
            // apri alert inserte error
            this.addAlert(1);
            console.log('risposta salvataggio errore', error);
        });
    }
    openModalDelete(content, deleteRecord) {
        this.copiaProdotto = deleteRecord;
        this.modalService.open(content, { size: 'lg', scrollable: true });
    }
    elimina() {
        this.catService.postDeleteProdotto(this.copiaProdotto, this.adminService.loggedAdmin)
            .then(response => {
            if (response === true) {
                this.reloadProdotti();
                // apri alert success remove
                this.addAlert(0);
            }
            else {
                this.attiva = true;
                // apri alert remove error
                this.addAlert(1);
                console.log('risposta salvataggio [else]', response);
            }
        }, error => {
            this.attiva = true;
            // apri alert remove error
            this.addAlert(1);
            console.log('risposta salvataggio errore', error);
        });
    }
    reloadProdotti() {
        this.attiva = false;
        this.catService.getCaricaProdotti()
            .subscribe(result => {
            this.catService.listaProdotti = [];
            this.catService.listaProdotti = this.catService.listaProdotti.concat(result);
            this.PRODOTTI = this.catService.listaProdotti;
            this.collectionSize = this.PRODOTTI.length;
            this.attiva = true;
        }, error => {
            console.log('errore chiamata', error);
        });
    }
    // gestione alert /////
    close(alert) {
        this.alert = null;
    }
    addAlert(n) {
        const a = Array.from(ALERTS);
        this.alert = a[n];
    }
};
GestioneProdottiComponent.ctorParameters = () => [
    { type: src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"] },
    { type: _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__["LoginAdminService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] }
];
GestioneProdottiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gestione-prodotti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestione-prodotti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestione-prodotti.component.css */ "./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.css")).default]
    })
], GestioneProdottiComponent);



/***/ }),

/***/ "./src/app/amministratore/login-admin/login-admin.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/amministratore/login-admin/login-admin.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FtbWluaXN0cmF0b3JlL2xvZ2luLWFkbWluL2xvZ2luLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/amministratore/login-admin/login-admin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/amministratore/login-admin/login-admin.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _amministratore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../amministratore */ "./src/app/amministratore/amministratore.ts");
/* harmony import */ var _login_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-admin.service */ "./src/app/amministratore/login-admin/login-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");








let LoginAdminComponent = class LoginAdminComponent {
    constructor(config, modalService, logService, router, catalogoService) {
        this.modalService = modalService;
        this.logService = logService;
        this.router = router;
        this.catalogoService = catalogoService;
        this.crdLogin = new _amministratore__WEBPACK_IMPORTED_MODULE_1__["Amministratore"]();
        this.tipoCampo = 'password';
        // per il mex errore login
        this.flag = this.logService.tentativoLogin;
        // flag utente loggato
        this.utenteAttivo = false;
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    open(content) {
        if (!this.logService.loggedAdmin) {
            this.modalService.open(content);
        }
    }
    showPassword() {
        if (this.tipoCampo === 'password') {
            this.tipoCampo = 'email';
        }
        else {
            this.tipoCampo = 'password';
        }
    }
    login(logData) {
        this.logService.logOutAdmin();
        this.logService.postLogin(logData)
            .then(response => {
            if (response !== null) {
                this.logService.tentativoLogin = false;
                this.logService.loggedAdmin = response;
                this.adminLoaded = response;
                this.utenteAttivo = true;
                this.catalogoService.getCaricaProdotti()
                    .subscribe(result => {
                    this.catalogoService.listaProdotti = [];
                    this.catalogoService.listaProdotti = this.catalogoService.listaProdotti.concat(result);
                    this.prodottiLoaded = this.catalogoService.listaProdotti;
                }, error => {
                    console.log('errore chiamata', error);
                });
                console.log('lista prodotti== ', this.catalogoService.listaProdotti);
            }
            else {
                this.logService.tentativoLogin = true;
                this.utenteAttivo = false;
                this.ricarica('login_admin');
            }
        }, error => {
            this.logService.tentativoLogin = true;
            this.ricarica('login_admin');
            this.utenteAttivo = false;
        });
        this.modalService.dismissAll();
    }
    ricarica(compNome) {
        // fa un refresh del component stesso
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([compNome]);
        });
    }
    goToPage(path) {
        this.router.navigate([(path)]);
    }
    /* public caricaProdotti() {
      this.catalogoService.caricaProdotti();
    } */
    logout() {
        this.logService.logOutAdmin();
        this.ricarica('login_admin');
    }
    ngOnInit() {
        this.logService.logOutAdmin();
        this.modalService.open(this.content);
    }
    openModalAdd(content) {
        this.modalService.open(content);
    }
};
LoginAdminComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _login_admin_service__WEBPACK_IMPORTED_MODULE_2__["LoginAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_6__["CatalogoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('content', { static: true })
], LoginAdminComponent.prototype, "content", void 0);
LoginAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/login-admin/login-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-admin.component.css */ "./src/app/amministratore/login-admin/login-admin.component.css")).default]
    })
], LoginAdminComponent);



/***/ }),

/***/ "./src/app/amministratore/login-admin/login-admin.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/amministratore/login-admin/login-admin.service.ts ***!
  \*******************************************************************/
/*! exports provided: LoginAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminService", function() { return LoginAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginAdminService = class LoginAdminService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.tentativoLogin = false;
    }
    postLogin(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/amministratore/eseguiLoginAmministratore', data).toPromise();
    }
    postUpdateData(data, admO) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/amministratore/updateAdmin', data, this.httpOption(admO)).toPromise();
    }
    getListCf(admO) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/amministratore/caricaListaAdmin', this.httpOption(admO)).toPromise();
    }
    getListEmail(admO) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/amministratore/caricaListaEmail', this.httpOption(admO)).toPromise();
    }
    postAddNew(data, admO) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/amministratore/addAdmin', data, this.httpOption(admO)).toPromise();
    }
    logOutAdmin() {
        this.loggedAdmin = null;
        this.tentativoLogin = false;
    }
    httpOption(admin) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', admin.codicefiscale)
                .append('password', admin.password)
        };
        return httpOptions;
    }
};
LoginAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginAdminService);



/***/ }),

/***/ "./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FtbWluaXN0cmF0b3JlL21vZGlmaWNhLWRhdGktYWRtaW4vbW9kaWZpY2EtZGF0aS1hZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModificaDatiAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaDatiAdminComponent", function() { return ModificaDatiAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login-admin/login-admin.service */ "./src/app/amministratore/login-admin/login-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ModificaDatiAdminComponent = class ModificaDatiAdminComponent {
    constructor(logAdminService, ctrlCampi, router, modalService) {
        this.logAdminService = logAdminService;
        this.ctrlCampi = ctrlCampi;
        this.router = router;
        this.modalService = modalService;
        this.loadedAdmin = this.logAdminService.loggedAdmin;
        this.newField = {
            nome: this.loadedAdmin.nome,
            cognome: this.loadedAdmin.cognome,
            email: this.loadedAdmin.email
        };
        this.flag = {
            general: false,
            nome: true,
            cognome: true,
            email: true
        };
    }
    ngOnInit() {
    }
    checkField(name) {
        if (name === 'nome') {
            if (this.newField.nome && !this.ctrlCampi.campoVuoto(this.newField.nome)) {
                this.flag.nome = true;
            }
            else {
                this.flag.nome = false;
            }
        }
        if (name === 'cognome') {
            if (this.newField.cognome && !this.ctrlCampi.campoVuoto(this.newField.cognome)) {
                this.flag.cognome = true;
            }
            else {
                this.flag.cognome = false;
            }
        }
        if (name === 'email') {
            if (this.newField.email && this.ctrlCampi.validateEmail(this.newField.email)) {
                this.flag.email = true;
            }
            else {
                this.flag.email = false;
            }
        }
        this.flag.general = this.checkAllField();
    }
    checkAllField() {
        if (this.newField.nome === this.loadedAdmin.nome &&
            this.newField.cognome === this.loadedAdmin.cognome &&
            this.newField.email === this.loadedAdmin.email) {
            return false;
        }
        return true;
    }
    salvaModifiche(content) {
        // attuale loggato
        const copiaAdmin = Object.assign({}, this.loadedAdmin);
        this.loadedAdmin.nome = this.newField.nome;
        this.loadedAdmin.cognome = this.newField.cognome;
        this.loadedAdmin.email = this.newField.email;
        this.logAdminService.postUpdateData(this.loadedAdmin, copiaAdmin)
            .then(response => {
            this.risultatoModifica = response;
            this.flag = {
                general: false,
                nome: true,
                cognome: true,
                email: true
            };
            this.modalService.open(content);
        }, error => {
            this.risultatoModifica = false;
            this.loadedAdmin = copiaAdmin;
            this.modalService.open(content);
        });
    }
    closeModale() {
        if (this.risultatoModifica) {
            this.loadedAdmin.version = this.loadedAdmin.version + 1;
        }
        this.modalService.dismissAll();
    }
};
ModificaDatiAdminComponent.ctorParameters = () => [
    { type: _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_2__["LoginAdminService"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
ModificaDatiAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modifica-dati-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-dati-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-dati-admin.component.css */ "./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.css")).default]
    })
], ModificaDatiAdminComponent);



/***/ }),

/***/ "./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FtbWluaXN0cmF0b3JlL21vZGlmaWNhLXBhc3N3b3JkLWFkbWluL21vZGlmaWNhLXBhc3N3b3JkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModificaPasswordAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaPasswordAdminComponent", function() { return ModificaPasswordAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-admin/login-admin.service */ "./src/app/amministratore/login-admin/login-admin.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ModificaPasswordAdminComponent = class ModificaPasswordAdminComponent {
    constructor(logAdminService, modalService, router, ctrlCampi) {
        this.logAdminService = logAdminService;
        this.modalService = modalService;
        this.router = router;
        this.ctrlCampi = ctrlCampi;
        this.flag = {
            fOld: true,
            fNew: true,
            fCNew: true
        };
        this.adminAttivo = this.logAdminService.loggedAdmin;
    }
    ngOnInit() {
    }
    ctrlCampo() {
        if (this.oldPassword) {
            if (this.adminAttivo.password === this.oldPassword) {
                this.flag.fOld = true;
            }
            else {
                this.flag.fOld = false;
            }
        }
        if (this.newPassword) {
            if ((this.ctrlCampi.checkPassword(this.newPassword)) && this.newPassword !== this.adminAttivo.password) {
                this.flag.fNew = true;
            }
            else {
                this.flag.fNew = false;
            }
        }
        if (this.confirmNewPassword) {
            if (this.ctrlCampi.controlloPassword(this.confirmNewPassword, this.newPassword)) {
                this.flag.fCNew = true;
            }
            else {
                this.flag.fCNew = false;
            }
        }
    }
    salva(content) {
        const copiaAdmin = Object.assign({}, this.adminAttivo);
        this.adminAttivo.password = this.newPassword;
        this.logAdminService.postUpdateData(this.adminAttivo, copiaAdmin)
            .then(response => {
            this.risultatoModifica = response;
            this.modalService.open(content);
        }, error => {
            this.risultatoModifica = false;
            this.modalService.open(content);
        });
    }
    closeModale() {
        if (this.risultatoModifica) {
            this.logAdminService.logOutAdmin();
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                this.router.navigate(['login_admin']);
            });
        }
        this.modalService.dismissAll();
    }
};
ModificaPasswordAdminComponent.ctorParameters = () => [
    { type: _login_admin_login_admin_service__WEBPACK_IMPORTED_MODULE_3__["LoginAdminService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] }
];
ModificaPasswordAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modifica-password-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-password-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-password-admin.component.css */ "./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.css")).default]
    })
], ModificaPasswordAdminComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utenti_gestione_dati_gestione_dati_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utenti/gestione-dati/gestione-dati.component */ "./src/app/utenti/gestione-dati/gestione-dati.component.ts");
/* harmony import */ var _acquisto_acquisto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acquisto/acquisto.component */ "./src/app/acquisto/acquisto.component.ts");
/* harmony import */ var _catalogo_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogo/dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _ordini_ordini_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordini/ordini.component */ "./src/app/ordini/ordini.component.ts");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _utenti_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utenti/registrazione/registrazione.component */ "./src/app/utenti/registrazione/registrazione.component.ts");
/* harmony import */ var _utenti_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utenti/login/login.component */ "./src/app/utenti/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalogo/catalogo.component */ "./src/app/catalogo/catalogo.component.ts");
/* harmony import */ var _amministratore_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./amministratore/login-admin/login-admin.component */ "./src/app/amministratore/login-admin/login-admin.component.ts");
/* harmony import */ var _footer_metodi_pagamento_metodi_pagamento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/metodi-pagamento/metodi-pagamento.component */ "./src/app/footer/metodi-pagamento/metodi-pagamento.component.ts");
/* harmony import */ var _footer_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/contatti/contatti.component */ "./src/app/footer/contatti/contatti.component.ts");
















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login', component: _utenti_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'registrazione', component: _utenti_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_8__["RegistrazioneComponent"] },
    { path: 'catalogo', component: _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_12__["CatalogoComponent"] },
    { path: 'appComponent', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: 'login_admin', component: _amministratore_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_13__["LoginAdminComponent"] },
    { path: 'carrello', component: _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_5__["CarrelloComponent"] },
    { path: 'ordini', component: _ordini_ordini_component__WEBPACK_IMPORTED_MODULE_4__["OrdiniComponent"] },
    { path: 'dettaglioProdotto', component: _catalogo_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_3__["DettaglioProdottoComponent"] },
    { path: 'acquisto', component: _acquisto_acquisto_component__WEBPACK_IMPORTED_MODULE_2__["AcquistoComponent"] },
    { path: 'gestione_profilo', component: _utenti_gestione_dati_gestione_dati_component__WEBPACK_IMPORTED_MODULE_1__["GestioneDatiComponent"] },
    { path: 'metodi_pagamento', component: _footer_metodi_pagamento_metodi_pagamento_component__WEBPACK_IMPORTED_MODULE_14__["MetodiPagamentoComponent"] },
    { path: 'contatti', component: _footer_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_15__["ContattiComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utenti_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.title = 'Store3D';
    }
};
AppComponent.ctorParameters = () => [
    { type: _utenti_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _utenti_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utenti/login/login.component */ "./src/app/utenti/login/login.component.ts");
/* harmony import */ var _utenti_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utenti/registrazione/registrazione.component */ "./src/app/utenti/registrazione/registrazione.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalogo/catalogo.component */ "./src/app/catalogo/catalogo.component.ts");
/* harmony import */ var _utenti_gestione_dati_modifica_dati_modifica_dati_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utenti/gestione-dati/modifica-dati/modifica-dati.component */ "./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.ts");
/* harmony import */ var _utenti_gestione_dati_modifica_password_modifica_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utenti/gestione-dati/modifica-password/modifica-password.component */ "./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _amministratore_gestione_prodotti_gestione_prodotti_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./amministratore/gestione-prodotti/gestione-prodotti.component */ "./src/app/amministratore/gestione-prodotti/gestione-prodotti.component.ts");
/* harmony import */ var _amministratore_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./amministratore/login-admin/login-admin.component */ "./src/app/amministratore/login-admin/login-admin.component.ts");
/* harmony import */ var _amministratore_modifica_password_admin_modifica_password_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./amministratore/modifica-password-admin/modifica-password-admin.component */ "./src/app/amministratore/modifica-password-admin/modifica-password-admin.component.ts");
/* harmony import */ var _amministratore_modifica_dati_admin_modifica_dati_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./amministratore/modifica-dati-admin/modifica-dati-admin.component */ "./src/app/amministratore/modifica-dati-admin/modifica-dati-admin.component.ts");
/* harmony import */ var _amministratore_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./amministratore/add-admin/add-admin.component */ "./src/app/amministratore/add-admin/add-admin.component.ts");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");
/* harmony import */ var _ordini_ordini_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ordini/ordini.component */ "./src/app/ordini/ordini.component.ts");
/* harmony import */ var _catalogo_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./catalogo/dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _acquisto_acquisto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./acquisto/acquisto.component */ "./src/app/acquisto/acquisto.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _utenti_gestione_dati_gestione_dati_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utenti/gestione-dati/gestione-dati.component */ "./src/app/utenti/gestione-dati/gestione-dati.component.ts");
/* harmony import */ var _footer_metodi_pagamento_metodi_pagamento_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/metodi-pagamento/metodi-pagamento.component */ "./src/app/footer/metodi-pagamento/metodi-pagamento.component.ts");
/* harmony import */ var _footer_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/contatti/contatti.component */ "./src/app/footer/contatti/contatti.component.ts");











// angular ui


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _utenti_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _utenti_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_7__["RegistrazioneComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_12__["CatalogoComponent"],
            _utenti_gestione_dati_modifica_dati_modifica_dati_component__WEBPACK_IMPORTED_MODULE_13__["ModificaDatiComponent"],
            _utenti_gestione_dati_modifica_password_modifica_password_component__WEBPACK_IMPORTED_MODULE_14__["ModificaPasswordComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _amministratore_gestione_prodotti_gestione_prodotti_component__WEBPACK_IMPORTED_MODULE_16__["GestioneProdottiComponent"],
            _amministratore_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__["LoginAdminComponent"],
            _amministratore_modifica_password_admin_modifica_password_admin_component__WEBPACK_IMPORTED_MODULE_18__["ModificaPasswordAdminComponent"],
            _amministratore_modifica_dati_admin_modifica_dati_admin_component__WEBPACK_IMPORTED_MODULE_19__["ModificaDatiAdminComponent"],
            _amministratore_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_20__["AddAdminComponent"],
            _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_21__["CarrelloComponent"],
            _ordini_ordini_component__WEBPACK_IMPORTED_MODULE_22__["OrdiniComponent"],
            _catalogo_dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_23__["DettaglioProdottoComponent"],
            _acquisto_acquisto_component__WEBPACK_IMPORTED_MODULE_24__["AcquistoComponent"],
            _utenti_gestione_dati_gestione_dati_component__WEBPACK_IMPORTED_MODULE_26__["GestioneDatiComponent"],
            _footer_metodi_pagamento_metodi_pagamento_component__WEBPACK_IMPORTED_MODULE_27__["MetodiPagamentoComponent"],
            _footer_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_28__["ContattiComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carrello/carrello.component.css":
/*!*************************************************!*\
  !*** ./src/app/carrello/carrello.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJlbGxvL2NhcnJlbGxvLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_utenti_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _carrello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const ALERTS = [
    {
        type: 'warning',
        message: 'Attenzione!  Alcuni prodotti hanno subito modifiche',
    }
];
let CarrelloComponent = class CarrelloComponent {
    constructor(prodService, router, carrService, logService) {
        this.prodService = prodService;
        this.router = router;
        this.carrService = carrService;
        this.logService = logService;
        this.utAttuale = this.logService.utenteAtuale;
        this.active = false;
        this.costoTotale = 0;
        this.counter = Array;
        this.carrelloVuoto = false;
    }
    ngOnInit() {
        if (!this.utAttuale) {
            this.router.navigate([('home')]);
        }
        if (this.prodService.flagCambiamenti) {
            console.log('CAMBIAMENTI!!!!');
            this.addAlert(0);
            this.prodService.flagCambiamenti = false;
        }
        this.caricaCarrello();
    }
    caricaCarrello() {
        this.costoTotale = 0;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.prodService.getCaricaProdotti(), this.carrService.getListCarrello(this.utAttuale))
            .subscribe(response => {
            let tmpC = [];
            for (const c of response[1]) {
                this.addToTotale(c.quantita_prodotto * c.prezzo_prodotto);
                for (const p of response[0]) {
                    if (c.id_prodotto === p.id) {
                        const tmp = {
                            pr: null,
                            ca: null
                        };
                        if (p.quantita >= c.quantita_prodotto && p.prezzo === c.prezzo_prodotto) {
                            tmp.ca = c;
                            tmp.pr = p;
                            tmpC = tmpC.concat(tmp);
                        }
                        // caso quantità diminuita o prezzo variato
                        if (p.quantita < c.quantita_prodotto || p.prezzo !== c.prezzo_prodotto) {
                            if (p.prezzo !== c.prezzo_prodotto) {
                                c.prezzo_prodotto = p.prezzo;
                            }
                            if (p.quantita < c.quantita_prodotto) {
                                c.quantita_prodotto = p.quantita;
                            }
                            this.prodService.flagCambiamenti = true;
                            this.aggiornaQuantita(c);
                            tmp.ca = c;
                            tmp.pr = p;
                            tmpC = tmpC.concat(tmp);
                        }
                        // caso prodotto non disponibile
                        if (p.quantita <= 0) {
                            this.prodService.flagCambiamenti = true;
                            this.eliminaProdotto(c);
                        }
                    }
                }
            }
            this.prodInCarrello = tmpC;
            this.active = true;
            if (this.prodInCarrello.length === 0) {
                this.carrelloVuoto = true;
            }
            if (this.prodInCarrello.length !== 0) {
                this.carrelloVuoto = false;
            }
        });
    }
    calPrezzo(nProd, prezzo) {
        let n = nProd * prezzo;
        n = Math.round((n + Number.EPSILON) * 100) / 100;
        return n;
    }
    addToTotale(prezzo) {
        this.costoTotale += prezzo;
        this.costoTotale = Math.round((this.costoTotale + Number.EPSILON) * 100) / 100;
        this.carrService.totaleCarrello = this.costoTotale;
    }
    aggiornaQuantita(ca) {
        this.carrService.postEditP(ca, this.logService.utenteAtuale)
            .then(response => {
            if (response === true) {
                this.carrService.getListCarrello(this.logService.utenteAtuale)
                    .then(res => {
                    let cont = 0;
                    for (const x of res) {
                        cont = cont + x.quantita_prodotto;
                    }
                    this.carrService.quantitaCarrello = cont;
                    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                        this.router.navigate(['carrello']);
                    });
                });
            }
        });
    }
    eliminaProdotto(ca) {
        this.carrService.postRemoveP(ca, this.logService.utenteAtuale)
            .then(response => {
            if (response === true) {
                this.carrService.getListCarrello(this.logService.utenteAtuale)
                    .then(res => {
                    let cont = 0;
                    for (const x of res) {
                        cont = cont + x.quantita_prodotto;
                    }
                    this.carrService.quantitaCarrello = cont;
                    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                        this.router.navigate(['carrello']);
                    });
                });
            }
        });
    }
    acquista() {
        this.carrService.getListCarrello(this.logService.utenteAtuale)
            .then(res => {
            this.carrService.carrelloAttuale = res;
            this.router.navigate([('acquisto')]);
        });
    }
    catalogo() {
        this.prodService.caricaProdotti(true);
    }
    // gestione alert /////
    close(alert) {
        this.alert = null;
    }
    addAlert(n) {
        const a = Array.from(ALERTS);
        this.alert = a[n];
    }
};
CarrelloComponent.ctorParameters = () => [
    { type: _catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _carrello_service__WEBPACK_IMPORTED_MODULE_2__["CarrelloService"] },
    { type: src_app_utenti_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
CarrelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-carrello',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrello.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrello/carrello.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrello.component.css */ "./src/app/carrello/carrello.component.css")).default]
    })
], CarrelloComponent);



/***/ }),

/***/ "./src/app/carrello/carrello.service.ts":
/*!**********************************************!*\
  !*** ./src/app/carrello/carrello.service.ts ***!
  \**********************************************/
/*! exports provided: CarrelloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrelloService", function() { return CarrelloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CarrelloService = class CarrelloService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    postAddP(data, utn) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/carrello/aggiungiProdCarrello', data, this.httpOption(utn)).toPromise();
    }
    postEditP(data, utn) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/carrello/modificaProdCarrello', data, this.httpOption(utn)).toPromise();
    }
    postFindP(data, utn) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/carrello/findProdCarrello', data, this.httpOption(utn)).toPromise();
    }
    postRemoveP(data, utn) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/carrello/removeProdCarrello', data, this.httpOption(utn)).toPromise();
    }
    getListCarrello(utn) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/carrello/caricaListaCarrello', this.httpOption(utn)).toPromise();
    }
    postAcquista(data, utn, indirizzo) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/prodotto/acquistaCarrello', data, this.httpOptionInd(utn, indirizzo)).toPromise();
    }
    getRemoveAllCarrello(utn) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/carrello/removeAllCarrello', this.httpOption(utn)).toPromise();
    }
    httpOption(ut) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', ut.codicefiscale)
                .append('password', ut.password)
        };
        return httpOptions;
    }
    httpOptionInd(ut, indirizzo) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', ut.codicefiscale)
                .append('password', ut.password)
                .append('indirizzo', indirizzo)
        };
        return httpOptions;
    }
};
CarrelloService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CarrelloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarrelloService);



/***/ }),

/***/ "./src/app/carrello/carrello.ts":
/*!**************************************!*\
  !*** ./src/app/carrello/carrello.ts ***!
  \**************************************/
/*! exports provided: Carrello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carrello", function() { return Carrello; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Carrello {
}


/***/ }),

/***/ "./src/app/catalogo/catalogo.component.css":
/*!*************************************************!*\
  !*** ./src/app/catalogo/catalogo.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2dvL2NhdGFsb2dvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/catalogo/catalogo.component.ts":
/*!************************************************!*\
  !*** ./src/app/catalogo/catalogo.component.ts ***!
  \************************************************/
/*! exports provided: CatalogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function() { return CatalogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _catalogo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CatalogoComponent = class CatalogoComponent {
    constructor(catService, router) {
        this.catService = catService;
        this.router = router;
        this.PRODOTTI = this.catService.listaProdotti;
        this.page = 1;
        this.pageSize = 4;
        this.tActive = true;
        this.collectionSize = this.PRODOTTI.length;
        this.check = {
            stampanti: false,
            filamenti: false,
            pezzi: false
        };
    }
    ngOnInit() {
        this.catService.prodottoDettaglio = null;
        if (!this.PRODOTTI) {
            this.router.navigate([('home')]);
        }
        this.catService.catalogoAttivo = true;
    }
    ngOnDestroy() {
        this.catService.catalogoAttivo = false;
        console.log('stato catalogo attivo', this.catService.catalogoAttivo);
    }
    get lProdotti() {
        console.log(this.PRODOTTI);
        return this.PRODOTTI
            .map((prodotto, i) => (Object.assign({ id: i + 1 }, prodotto)))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    setFiltri() {
        this.resetProd();
        let copiaP = [];
        if (!this.check.filamenti && !this.check.pezzi && !this.check.stampanti) {
            this.tActive = true;
            this.collectionSize = this.PRODOTTI.length;
            return;
        }
        for (const prd of this.PRODOTTI) {
            if (prd.tipologia === 3 && this.check.stampanti) {
                copiaP = copiaP.concat(prd);
            }
            if (prd.tipologia === 2 && this.check.pezzi) {
                copiaP = copiaP.concat(prd);
            }
            if (prd.tipologia === 1 && this.check.filamenti) {
                copiaP = copiaP.concat(prd);
            }
        }
        this.PRODOTTI = [];
        this.PRODOTTI = copiaP;
        this.collectionSize = this.PRODOTTI.length;
        this.tActive = true;
    }
    resetProd() {
        this.PRODOTTI = this.catService.listaProdotti;
    }
    apriDettaglio(prod) {
        this.catService.prodottoDettaglio = prod;
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['dettaglioProdotto']);
        });
    }
};
CatalogoComponent.ctorParameters = () => [
    { type: _catalogo_service__WEBPACK_IMPORTED_MODULE_1__["CatalogoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CatalogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-catalogo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalogo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalogo.component.css */ "./src/app/catalogo/catalogo.component.css")).default]
    })
], CatalogoComponent);



/***/ }),

/***/ "./src/app/catalogo/catalogo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/catalogo/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CatalogoService = class CatalogoService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.flagCambiamenti = false;
        this.catalogoAttivo = false;
    }
    getCaricaProdotti() {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/prodotto/caricaListaProdotti');
    }
    postCercaProdotti(key) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/prodotto/ricercaProdotti', key).toPromise();
    }
    postAddEditProdotto(data, type, admin) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', admin.codicefiscale)
                .append('password', admin.password)
        };
        let url = '';
        if (type === 'add_operation') {
            url = 'http://localhost:8080/Store3D/chiamateRest/prodotto/aggiungiProdotto';
        }
        else if (type === 'edit_operation') {
            url = 'http://localhost:8080/Store3D/chiamateRest/prodotto/modificaProdotto';
        }
        return this.httpClient.post(url, data, httpOptions).toPromise();
    }
    getLastId() {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/prodotto/ultimoId').toPromise();
    }
    postDeleteProdotto(data, admin) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', admin.codicefiscale)
                .append('password', admin.password)
        };
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/prodotto/eliminaProdotto', data, httpOptions)
            .toPromise();
    }
    caricaProdotti(flag) {
        console.log('flag reid', flag);
        this.getCaricaProdotti()
            .subscribe(result => {
            this.listaProdotti = [];
            for (const p of result) {
                if (p.quantita > -1) {
                    this.listaProdotti = this.listaProdotti.concat(p);
                }
            }
            if (flag) {
                this.router.navigate([('catalogo')]);
            }
            if (flag === false) {
                this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['catalogo']);
                });
            }
        }, error => {
            console.log('errore chiamata', error);
        });
    }
    searchProdotti(key, flag) {
        this.postCercaProdotti(key)
            .then(result => {
            this.listaProdotti = [];
            for (const p of result) {
                if (p.quantita > -1) {
                    this.listaProdotti = this.listaProdotti.concat(p);
                }
            }
            if (flag === true) {
                this.router.navigate([('catalogo')]);
            }
            if (flag === false) {
                this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['catalogo']);
                });
            }
        }, error => {
            console.log('errore chiamata', error);
        });
    }
};
CatalogoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CatalogoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatalogoService);



/***/ }),

/***/ "./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2dvL2RldHRhZ2xpby1wcm9kb3R0by9kZXR0YWdsaW8tcHJvZG90dG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DettaglioProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioProdottoComponent", function() { return DettaglioProdottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _utenti_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_carrello_carrello__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/carrello/carrello */ "./src/app/carrello/carrello.ts");







let DettaglioProdottoComponent = class DettaglioProdottoComponent {
    constructor(catService, router, utenteServ, carrelloServ) {
        this.catService = catService;
        this.router = router;
        this.utenteServ = utenteServ;
        this.carrelloServ = carrelloServ;
        this.data = new Date();
        this.loggedUt = this.utenteServ.utenteAtuale;
        this.counter = Array;
    }
    ngOnInit() {
        if (!this.catService.prodottoDettaglio) {
            this.router.navigate([('home')]);
        }
        this.prodotto = this.catService.prodottoDettaglio;
        if (this.prodotto.quantita > 0) {
            this.qSelected = 1;
        }
    }
    aggiungiAlCarrello() {
        const tmp = this.creaPrdCarrello();
        this.carrelloServ.postFindP(tmp, this.loggedUt)
            .then(response => {
            if (response === null) {
                this.addNew(tmp);
            }
            if (response !== null) {
                const x = +tmp.quantita_prodotto;
                const newQ = response.quantita_prodotto + x;
                if (newQ <= this.prodotto.quantita) {
                    response.quantita_prodotto = newQ;
                    this.updateExisted(response);
                }
            }
        });
    }
    creaPrdCarrello() {
        // tslint:disable-next-line:prefer-const
        let tmp = new src_app_carrello_carrello__WEBPACK_IMPORTED_MODULE_6__["Carrello"]();
        tmp.id_cliente = this.loggedUt.codicefiscale;
        tmp.id_prodotto = this.prodotto.id;
        tmp.quantita_prodotto = this.qSelected;
        tmp.prezzo_prodotto = this.prodotto.prezzo;
        const d = new Date();
        tmp.data = d;
        return tmp;
    }
    addNew(ca) {
        this.carrelloServ.postAddP(ca, this.loggedUt)
            .then(response => {
            if (response === true) {
                this.carrelloServ.getListCarrello(this.loggedUt)
                    .then(res => {
                    let cont = 0;
                    for (const x of res) {
                        cont = cont + x.quantita_prodotto;
                    }
                    this.carrelloServ.quantitaCarrello = cont;
                    this.router.navigate([('carrello')]);
                });
            }
            else {
                console.log('errore aggiunta carrello');
            }
        }, error => {
            console.log('errore aggiunta carrello');
        });
    }
    updateExisted(ca) {
        this.carrelloServ.postEditP(ca, this.loggedUt)
            .then(response => {
            if (response === true) {
                this.carrelloServ.getListCarrello(this.loggedUt)
                    .then(res => {
                    let cont = 0;
                    for (const x of res) {
                        cont = cont + x.quantita_prodotto;
                    }
                    this.carrelloServ.quantitaCarrello = cont;
                    this.router.navigate([('carrello')]);
                });
            }
            else {
                console.log('errore modifica in  carrello');
            }
        }, error => {
            console.log('errore modifica in  carrello');
        });
    }
};
DettaglioProdottoComponent.ctorParameters = () => [
    { type: src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_3__["CatalogoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _utenti_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__["CarrelloService"] }
];
DettaglioProdottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dettaglio-prodotto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-prodotto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-prodotto.component.css */ "./src/app/catalogo/dettaglio-prodotto/dettaglio-prodotto.component.css")).default]
    })
], DettaglioProdottoComponent);



/***/ }),

/***/ "./src/app/catalogo/prodotto.ts":
/*!**************************************!*\
  !*** ./src/app/catalogo/prodotto.ts ***!
  \**************************************/
/*! exports provided: Prodotto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodotto", function() { return Prodotto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Prodotto {
}


/***/ }),

/***/ "./src/app/footer/contatti/contatti.component.css":
/*!********************************************************!*\
  !*** ./src/app/footer/contatti/contatti.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9jb250YXR0aS9jb250YXR0aS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/footer/contatti/contatti.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/footer/contatti/contatti.component.ts ***!
  \*******************************************************/
/*! exports provided: ContattiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContattiComponent", function() { return ContattiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContattiComponent = class ContattiComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContattiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contatti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contatti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/contatti/contatti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contatti.component.css */ "./src/app/footer/contatti/contatti.component.css")).default]
    })
], ContattiComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    reidirectTo(cmp) {
        this.router.navigate([(cmp)]);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/footer/metodi-pagamento/metodi-pagamento.component.css":
/*!************************************************************************!*\
  !*** ./src/app/footer/metodi-pagamento/metodi-pagamento.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9tZXRvZGktcGFnYW1lbnRvL21ldG9kaS1wYWdhbWVudG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/metodi-pagamento/metodi-pagamento.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/footer/metodi-pagamento/metodi-pagamento.component.ts ***!
  \***********************************************************************/
/*! exports provided: MetodiPagamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodiPagamentoComponent", function() { return MetodiPagamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MetodiPagamentoComponent = class MetodiPagamentoComponent {
    constructor() { }
    ngOnInit() {
    }
};
MetodiPagamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-metodi-pagamento',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./metodi-pagamento.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/metodi-pagamento/metodi-pagamento.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./metodi-pagamento.component.css */ "./src/app/footer/metodi-pagamento/metodi-pagamento.component.css")).default]
    })
], MetodiPagamentoComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    height:50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.images = [1, 2, 3].map((n) => `/assets/sfondi/sfondo_${n}.jpg`);
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    height:50px;\r\n}\r\n\r\n.badge {\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    font-size: 60%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: 90%;\r\n    border-radius: .25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGhlaWdodDo1MHB4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogLjI1ZW0gLjRlbTtcclxuICAgIGZvbnQtc2l6ZTogNjAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _catalogo_prodotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../catalogo/prodotto */ "./src/app/catalogo/prodotto.ts");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utenti_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NavbarComponent = class NavbarComponent {
    constructor(loginService, router, catalogoService, caServ) {
        this.loginService = loginService;
        this.router = router;
        this.catalogoService = catalogoService;
        this.caServ = caServ;
        this.utCorrente = this.loginService.utenteAtuale;
        this.numProdotti = this.caServ.quantitaCarrello;
        this.keyFind = '';
    }
    ngOnInit() {
    }
    reidirectTo(cmp) {
        this.router.navigate([(cmp)]);
    }
    clearTentativi() {
        this.loginService.clearTentativi();
    }
    loadProdotti(f) {
        this.catalogoService.caricaProdotti(f);
    }
    searchProdotti(key, flag) {
        console.log('da cercare', key);
        key = key.trim();
        const tmp = new _catalogo_prodotto__WEBPACK_IMPORTED_MODULE_1__["Prodotto"]();
        tmp.nome = key;
        this.catalogoService.searchProdotti(tmp, flag);
    }
    logout() {
        this.loginService.eseguiLogout();
    }
    reloadCatalogo(key, flag) {
        if (this.catalogoService.catalogoAttivo === true) {
            if (flag === true) {
                this.searchProdotti(key, false);
            }
            else {
                this.loadProdotti(false);
            }
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _utenti_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_3__["CatalogoService"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__["CarrelloService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/ordini/ordini.component.css":
/*!*********************************************!*\
  !*** ./src/app/ordini/ordini.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGluaS9vcmRpbmkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ordini/ordini.component.ts":
/*!********************************************!*\
  !*** ./src/app/ordini/ordini.component.ts ***!
  \********************************************/
/*! exports provided: OrdiniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdiniComponent", function() { return OrdiniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/catalogo/catalogo.service */ "./src/app/catalogo/catalogo.service.ts");
/* harmony import */ var _ordini_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordini.service */ "./src/app/ordini/ordini.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utenti_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let OrdiniComponent = class OrdiniComponent {
    constructor(ordiniService, router, logService, prodService, datepipe, ctrlCampi) {
        this.ordiniService = ordiniService;
        this.router = router;
        this.logService = logService;
        this.prodService = prodService;
        this.datepipe = datepipe;
        this.ctrlCampi = ctrlCampi;
        this.loaded = false;
        this.numeroOrdini = 0;
    }
    ngOnInit() {
        if (!this.logService.utenteAtuale) {
            this.router.navigate([('home')]);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this.ordiniService.getListaOrdini(this.logService.utenteAtuale), this.prodService.getCaricaProdotti())
            .subscribe(res => {
            if (res[0] != null) {
                this.listaOrdini = res[0];
            }
            if (res[1] != null) {
                this.listaProdotti = res[1];
            }
            this.numeroOrdini = this.listaOrdini.length;
            console.log('numero ordini', this.numeroOrdini);
            this.loaded = true;
        });
    }
    prodottiToArray(prod) {
        const list = prod.split(',');
        return list;
    }
    getDate(data) {
        /*     const dataFormatted = data.toString();
         */
        const dataFormatted = this.datepipe.transform(data, 'dd/MM/yyyy');
        return dataFormatted;
    }
    decriptProdotto(idP) {
        for (const x of this.listaProdotti) {
            if (Number(idP) === x.id) {
                return x;
            }
        }
        return null;
    }
    decriptIndirizzo(ord) {
        return this.ctrlCampi.indirizzoFromString(ord);
    }
};
OrdiniComponent.ctorParameters = () => [
    { type: _ordini_service__WEBPACK_IMPORTED_MODULE_3__["OrdiniService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _utenti_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: src_app_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] }
];
OrdiniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ordini',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordini.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordini/ordini.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordini.component.css */ "./src/app/ordini/ordini.component.css")).default]
    })
], OrdiniComponent);



/***/ }),

/***/ "./src/app/ordini/ordini.service.ts":
/*!******************************************!*\
  !*** ./src/app/ordini/ordini.service.ts ***!
  \******************************************/
/*! exports provided: OrdiniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdiniService", function() { return OrdiniService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OrdiniService = class OrdiniService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListaOrdini(utn) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/ordini/listaOrdini', this.httpOption(utn)).toPromise();
    }
    getRemoveAllOrdini(utn) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/ordini/removeAllOrdini', this.httpOption(utn)).toPromise();
    }
    httpOption(ut) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('username', ut.codicefiscale)
                .append('password', ut.password)
        };
        return httpOptions;
    }
};
OrdiniService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdiniService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdiniService);



/***/ }),

/***/ "./src/app/utenti/gestione-dati/gestione-dati.component.css":
/*!******************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/gestione-dati.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9nZXN0aW9uZS1kYXRpL2dlc3Rpb25lLWRhdGkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/utenti/gestione-dati/gestione-dati.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/gestione-dati.component.ts ***!
  \*****************************************************************/
/*! exports provided: GestioneDatiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestioneDatiComponent", function() { return GestioneDatiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GestioneDatiComponent = class GestioneDatiComponent {
    constructor(logService, router) {
        this.logService = logService;
        this.router = router;
    }
    ngOnInit() {
        if (!this.logService.utenteAtuale || this.logService.utenteAtuale === null) {
            this.router.navigate([('home')]);
        }
        this.utenteAttivo = this.logService.utenteAtuale;
    }
};
GestioneDatiComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GestioneDatiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestione-dati',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestione-dati.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/gestione-dati.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestione-dati.component.css */ "./src/app/utenti/gestione-dati/gestione-dati.component.css")).default]
    })
], GestioneDatiComponent);



/***/ }),

/***/ "./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9nZXN0aW9uZS1kYXRpL21vZGlmaWNhLWRhdGkvbW9kaWZpY2EtZGF0aS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModificaDatiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaDatiComponent", function() { return ModificaDatiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ordini_ordini_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../ordini/ordini.service */ "./src/app/ordini/ordini.service.ts");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var src_app_util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let ModificaDatiComponent = class ModificaDatiComponent {
    constructor(logService, router, ctrlCampi, modalService, carServ, ordServ) {
        this.logService = logService;
        this.router = router;
        this.ctrlCampi = ctrlCampi;
        this.modalService = modalService;
        this.carServ = carServ;
        this.ordServ = ordServ;
        this.flag = {
            general: false,
            nome: true,
            cognome: true,
            email: true,
            cellulare: true,
            username: true
        };
    }
    ngOnInit() {
        if (!this.logService.utenteAtuale || this.logService.utenteAtuale === null) {
            this.router.navigate([('home')]);
        }
        this.utenteAttuale = this.logService.utenteAtuale;
        this.utenteModificato = Object.assign({}, this.utenteAttuale);
    }
    checkField(name) {
        if (name === 'nome') {
            if (this.utenteModificato.nome && !this.ctrlCampi.campoVuoto(this.utenteModificato.nome)) {
                this.flag.nome = true;
            }
            else {
                this.flag.nome = false;
            }
        }
        if (name === 'cognome') {
            if (this.utenteModificato.cognome && !this.ctrlCampi.campoVuoto(this.utenteModificato.cognome)) {
                this.flag.cognome = true;
            }
            else {
                this.flag.cognome = false;
            }
        }
        if (name === 'email') {
            if (this.utenteModificato.email && this.ctrlCampi.validateEmail(this.utenteModificato.email)) {
                this.flag.email = true;
            }
            else {
                this.flag.email = false;
            }
        }
        if (name === 'username') {
            if (this.utenteModificato.username && !this.ctrlCampi.campoVuoto(this.utenteModificato.username)) {
                this.flag.username = true;
            }
            else {
                this.flag.username = false;
            }
        }
        if (name === 'cellulare') {
            if (this.utenteModificato.cellulare && !this.ctrlCampi.campoVuoto(Object.assign({}, this.utenteModificato.cellulare).toString())) {
                this.flag.cellulare = true;
                console.log('è entato');
            }
            else {
                this.flag.cellulare = false;
            }
        }
        this.flag.general = this.checkAllField();
        console.log('general =  ', this.flag.general);
    }
    checkAllField() {
        console.log('cell mod =  ', this.utenteModificato.cellulare);
        console.log('cell attuale =  ', this.utenteAttuale.cellulare);
        if (this.utenteModificato.nome === this.utenteAttuale.nome &&
            this.utenteModificato.cognome === this.utenteAttuale.cognome &&
            this.utenteModificato.email === this.utenteAttuale.email &&
            this.utenteModificato.username === this.utenteAttuale.username &&
            this.utenteModificato.cellulare === this.utenteAttuale.cellulare) {
            return false;
        }
        return true;
    }
    salvaModifiche(content) {
        console.log('version prima modifica  ', this.utenteModificato.version);
        this.logService.postUpdateUtente(this.utenteModificato, this.utenteAttuale)
            .subscribe(res => {
            if (res != null) {
                this.utenteModificato = res;
                this.risultatoModifica = true;
            }
            else {
                this.risultatoModifica = false;
            }
            console.log('version dopo modifica  ', this.utenteModificato.version);
            this.modalService.open(content);
        }, err => {
            this.risultatoModifica = false;
            this.modalService.open(content);
        });
    }
    eliminaUtente() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.logService.postDeleteUtente(this.utenteAttuale), this.carServ.getRemoveAllCarrello(this.utenteAttuale))
            .subscribe(res => {
            if (res[0] === true) {
                this.logOut();
            }
            this.modalService.dismissAll();
        });
    }
    logOut() {
        // la funzione ritorna già ad home
        this.logService.eseguiLogout();
    }
    closeModale() {
        if (this.risultatoModifica) {
            this.utenteModificato.version = this.utenteModificato.version + 1;
            this.logService.utenteAtuale = Object.assign({}, this.utenteModificato);
        }
        this.modalService.dismissAll();
    }
    apriModale(content) {
        this.modalService.open(content);
    }
};
ModificaDatiComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_5__["ControlloCampiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_2__["CarrelloService"] },
    { type: _ordini_ordini_service__WEBPACK_IMPORTED_MODULE_1__["OrdiniService"] }
];
ModificaDatiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modifica-dati',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-dati.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-dati.component.css */ "./src/app/utenti/gestione-dati/modifica-dati/modifica-dati.component.css")).default]
    })
], ModificaDatiComponent);



/***/ }),

/***/ "./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-invalid {\r\n    border-left: solid 6px red;\r\n  }\r\n  \r\n  .material-icons {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRlbnRpL2dlc3Rpb25lLWRhdGkvbW9kaWZpY2EtcGFzc3dvcmQvbW9kaWZpY2EtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC91dGVudGkvZ2VzdGlvbmUtZGF0aS9tb2RpZmljYS1wYXNzd29yZC9tb2RpZmljYS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModificaPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaPasswordComponent", function() { return ModificaPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var src_app_utenti_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utenti/login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const ALERTS = [
    {
        type: 'danger',
        message: 'Errore durante la modifica della password!'
    },
    {
        type: 'success',
        message: 'Aggiornemento password avvenuto correttamente!'
    }
];
let ModificaPasswordComponent = class ModificaPasswordComponent {
    constructor(logService, router, ctrlCampi) {
        this.logService = logService;
        this.router = router;
        this.ctrlCampi = ctrlCampi;
        this.alerts = [];
        this.flag = {
            fOld: true,
            fNew: true,
            fCNew: true
        };
        this.utAttivo = this.logService.utenteAtuale;
    }
    ngOnInit() {
        this.alerts = [];
        if (this.logService.tentativoUpdate) {
            this.addError(0);
        }
        if (this.logService.aggiornamentoOk) {
            this.addError(1);
        }
        if (!this.logService.utenteAtuale || this.logService.utenteAtuale === null) {
            this.router.navigate([('home')]);
        }
    }
    // gestione alert /////
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    addError(n) {
        const a = Array.from(ALERTS);
        this.alerts.push(a[n]);
    }
    ///////////////////////
    ctrlCampo() {
        if (this.oldPassword) {
            if (this.utAttivo.password === this.oldPassword) {
                this.flag.fOld = true;
            }
            else {
                this.flag.fOld = false;
            }
        }
        if (this.newPassword) {
            if ((this.ctrlCampi.checkPassword(this.newPassword)) && this.newPassword !== this.utAttivo.password) {
                this.flag.fNew = true;
            }
            else {
                this.flag.fNew = false;
            }
        }
        if (this.confirmNewPassword) {
            if (this.ctrlCampi.controlloPassword(this.confirmNewPassword, this.newPassword)) {
                this.flag.fCNew = true;
            }
            else {
                this.flag.fCNew = false;
            }
        }
    }
    salva() {
        const oldUt = Object.assign({}, this.utAttivo);
        this.utAttivo.password = this.newPassword;
        this.logService.eseguiUpdate(this.utAttivo, oldUt);
    }
};
ModificaPasswordComponent.ctorParameters = () => [
    { type: src_app_utenti_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] }
];
ModificaPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modifica-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-password.component.css */ "./src/app/utenti/gestione-dati/modifica-password/modifica-password.component.css")).default]
    })
], ModificaPasswordComponent);



/***/ }),

/***/ "./src/app/utenti/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/utenti/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginService = class LoginService {
    constructor(httpClient, router, carServ) {
        this.httpClient = httpClient;
        this.router = router;
        this.carServ = carServ;
        this.tentativoLogin = false;
        this.tentativoUpdate = false;
        this.aggiornamentoOk = false;
    }
    postLogin(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/eseguiLoginClienteEmail', data);
    }
    postUpdateUtente(data, utCorrente) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/updateCliente', data, this.httpOption(utCorrente));
    }
    postDeleteUtente(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/rimuoviCliente', data);
    }
    ricarica(compNome) {
        // fa un refresh del component stesso
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([compNome]);
        });
    }
    eseguiLogin(dati) {
        this.postLogin(dati)
            .subscribe(result => {
            this.utenteAtuale = result;
            this.tentativoLogin = false;
            if (this.utenteAtuale && this.utenteAtuale !== null) {
                // richiama il servizio per caricare il carrello
                this.carServ.getListCarrello(this.utenteAtuale)
                    .then(res => {
                    this.carServ.carrelloAttuale = res;
                    let cont = 0;
                    for (const c of res) {
                        cont = cont + c.quantita_prodotto;
                    }
                    this.carServ.quantitaCarrello = cont;
                    this.router.navigate([('home')]);
                }, err => {
                    console.log('errore caricamento carrello');
                });
            }
            else {
                this.tentativoLogin = true;
                this.ricarica('login');
            }
            console.log('stato utente sub=  ' + this.utenteAtuale);
        }, error => {
            console.log('errore chiamata', error);
            this.tentativoLogin = true;
            this.ricarica('login');
        });
    }
    eseguiLogout() {
        this.utenteAtuale = null;
        this.clearTentativi();
        this.router.navigate([('login')]);
    }
    eseguiUpdate(dati, utCor) {
        this.postUpdateUtente(dati, utCor)
            .subscribe(result => {
            this.utenteAtuale = result;
            this.tentativoUpdate = false;
            this.aggiornamentoOk = true;
            this.ricarica('modifica_password');
            console.log('stato aggiornamento=  ' + this.utenteAtuale);
        }, error => {
            console.log('errore chiamata', error);
            this.tentativoUpdate = true;
            this.ricarica('modifica_password');
        });
    }
    clearTentativi() {
        this.tentativoLogin = false;
        this.tentativoUpdate = false;
        this.aggiornamentoOk = false;
    }
    httpOption(ut) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
                .append('cf', ut.codicefiscale)
                .append('password', ut.password)
        };
        return httpOptions;
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__["CarrelloService"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/utenti/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/utenti/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/utenti/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/utenti/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../carrello/carrello.service */ "./src/app/carrello/carrello.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/utenti/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/app/utenti/login/login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const ALERTS = [
    {
        type: 'danger',
        message: 'Errore utente inesitente o password errata!'
    }
];
let LoginComponent = class LoginComponent {
    constructor(logServizi, router, carrelloServ) {
        this.logServizi = logServizi;
        this.router = router;
        this.carrelloServ = carrelloServ;
        this.alerts = [];
        this.tipoCampo = 'password';
        this.ut = new _login__WEBPACK_IMPORTED_MODULE_4__["CredenzialiLogin"]();
    }
    entra() {
        this.logServizi.eseguiLogin(this.ut);
    }
    // gestione alert /////
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    addError(n) {
        const a = Array.from(ALERTS);
        this.alerts.push(a[n]);
    }
    ///////////////////////
    showPassword() {
        if (this.tipoCampo === 'password') {
            this.tipoCampo = 'email';
        }
        else {
            this.tipoCampo = 'password';
        }
    }
    ngOnInit() {
        if (this.logServizi.tentativoLogin) {
            this.addError(0);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _carrello_carrello_service__WEBPACK_IMPORTED_MODULE_1__["CarrelloService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/utenti/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/utenti/login/login.ts":
/*!***************************************!*\
  !*** ./src/app/utenti/login/login.ts ***!
  \***************************************/
/*! exports provided: CredenzialiLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredenzialiLogin", function() { return CredenzialiLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CredenzialiLogin {
}


/***/ }),

/***/ "./src/app/utenti/registrazione/registrazione.component.css":
/*!******************************************************************!*\
  !*** ./src/app/utenti/registrazione/registrazione.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW50aS9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/utenti/registrazione/registrazione.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/utenti/registrazione/registrazione.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrazioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrazioneComponent", function() { return RegistrazioneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../util/controllo-campi.service */ "./src/app/util/controllo-campi.service.ts");
/* harmony import */ var _registrazione_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrazione.service */ "./src/app/utenti/registrazione/registrazione.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utente */ "./src/app/utenti/utente.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/indirizzo */ "./src/app/util/indirizzo.ts");







const ALERTS = [
    {
        type: 'danger',
        message: 'Errore password non corrispondenti !'
    },
    {
        type: 'danger',
        message: 'Errore ci sono dei campi obbligatori non pieni !'
    },
    {
        type: 'danger',
        message: 'Errore inserimento dati !'
    },
    {
        type: 'danger',
        message: 'Errore Alcuni dati inseriti non sono validi !'
    }
];
let RegistrazioneComponent = class RegistrazioneComponent {
    constructor(config, modalService, regService, ctrlCampi) {
        this.modalService = modalService;
        this.regService = regService;
        this.ctrlCampi = ctrlCampi;
        this.alerts = [];
        this.flag = false;
        this.newUt = new _utente__WEBPACK_IMPORTED_MODULE_4__["Utente"]();
        this.flagCtrlCampi = {
            email: false,
            codiceFiscale: false,
            password: true
        };
        this.msgErrore = {
            codiceFiscale: '',
            password: '',
            email: ''
        };
        this.indirizzo = new src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_6__["Indirizzo"]();
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    registra(content) {
        this.flag = true;
        /*     console.log(this.campiNulli());
         */ /*     this.addError(0);
     */
        this.stampaCP();
        this.datiCorretti(content);
    }
    ngOnInit() {
        this.ctrlCampi.getProvincie()
            .subscribe(res => {
            this.provincie = res;
            this.indirizzo.provincia = this.provincie[0].nome;
        });
        this.ctrlCampi.getComuni()
            .subscribe(res => {
            this.comuni = res;
            this.loadComuni();
        });
    }
    closeModal(s, content) {
        // caso di salvataggio
        if (s === 'salva') {
            const a = Array.from(ALERTS);
            this.regService.eseguiRegistrazione(this.newUt, this.alerts, a);
            this.modalService.dismissAll();
            // caso di annullamento
        }
        else {
            this.modalService.dismissAll();
        }
    }
    // gestione modale
    openModal(content) {
        this.modalService.open(content);
    }
    //////////////////////////////
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    addError(n) {
        const a = Array.from(ALERTS);
        this.alerts.push(a[n]);
    }
    campiNulli() {
        if (!this.newUt.nome || !this.newUt.cognome ||
            !this.newUt.username ||
            !this.newUt.email || !this.newUt.password ||
            !this.newUt.codicefiscale || !this.cPassword ||
            !this.newUt.cellulare || !this.ctrlIndirizzo()) {
            return true;
        }
        return false;
    }
    controlloErrori() {
        this.alerts = [];
        // svuota lista errori
        let flag1 = true;
        let flag2 = true;
        this.flagCtrlCampi.password = true;
        if (this.campiNulli()) {
            this.addError(1);
            flag1 = false;
        }
        if ((this.newUt.codicefiscale && !this.flagCtrlCampi.codiceFiscale) ||
            (this.newUt.email && !this.flagCtrlCampi.email) ||
            (this.newUt.password && !this.ctrlCampi.checkPassword(this.newUt.password))) {
            this.addError(3); // alert campi errati
            if (this.newUt.password && !this.ctrlCampi.checkPassword(this.newUt.password)) {
                this.flagCtrlCampi.password = false;
            }
        }
        if (this.ctrlCampi.controlloPassword(this.newUt.password, this.cPassword) === false && this.cPassword) {
            this.addError(0); // alert password non uguali
            flag2 = false;
        }
        if (!this.newUt.email) {
            this.msgErrore.email = '*campo obbligatorio';
        }
        if (!this.newUt.codicefiscale) {
            this.msgErrore.codiceFiscale = '*campo obbligatorio';
        }
        console.log('stato flag controllo errori', flag1, ' ', flag2);
        console.log('tutt appost !');
        return flag1 && flag2 && this.flagCtrlCampi.email && this.flagCtrlCampi.codiceFiscale &&
            this.flagCtrlCampi.password;
        // formato email è il controllo email presente o meno
    }
    datiCorretti(content) {
        if (this.controlloErrori()) {
            this.indirizzo.nome = this.newUt.nome;
            this.indirizzo.cognome = this.newUt.cognome;
            this.newUt.indirizzo = this.ctrlCampi.indirizzoToString(this.indirizzo);
            this.newUt = this.ctrlCampi.utenteToUpperC(this.newUt);
            this.openModal(content);
        }
    }
    onChange(n) {
        const utTmp = this.newUt;
        this.impostaTestoErrore(n, utTmp);
    }
    impostaTestoErrore(n, utenteTmp) {
        if (n === 'email') {
            console.log('è entrato in mail   ', this.newUt.email);
            this.msgErrore.email = '*campo obbligatorio';
            this.flagCtrlCampi.email = true;
            this.regService.postRicercaEmail(utenteTmp)
                .then((response) => {
                console.log('risposta  ', response);
                if (response === true) {
                    this.flagCtrlCampi.email = false;
                    this.msgErrore.email = '*email già utilizzata';
                }
            });
        }
        if (n === 'codicefiscale') {
            utenteTmp.codicefiscale = utenteTmp.codicefiscale.toUpperCase();
            this.msgErrore.codiceFiscale = '*campo obbligatorio';
            this.flagCtrlCampi.codiceFiscale = true;
            this.regService.postRicercaCf(utenteTmp)
                .then((response) => {
                if (response === true) {
                    this.flagCtrlCampi.codiceFiscale = false;
                    this.msgErrore.codiceFiscale = '*codice fiscale già presente';
                }
            });
            if (this.newUt.codicefiscale && this.ctrlCampi.validateCF(this.newUt.codicefiscale) === false) {
                this.flagCtrlCampi.codiceFiscale = false;
                this.msgErrore.codiceFiscale = '*formato codice fiscale errato';
            }
        }
    }
    loadComuni() {
        this.listaComuniDaCaricare = [];
        this.listaCap = [];
        for (const c of this.comuni) {
            if (c.provincia.nome === this.indirizzo.provincia) {
                this.listaComuniDaCaricare = this.listaComuniDaCaricare.concat(c);
            }
        }
        this.indirizzo.citta = this.listaComuniDaCaricare[0].nome;
        this.indirizzo.cap = null;
    }
    loadCap() {
        this.listaCap = [];
        for (const cp of this.listaComuniDaCaricare) {
            if (this.indirizzo.citta === cp.nome) {
                this.listaCap = cp.cap;
            }
        }
        this.indirizzo.cap = this.listaCap[0];
    }
    ctrlIndirizzo() {
        return this.indirizzo.via !== undefined &&
            this.indirizzo.civico !== undefined
            && this.indirizzo.citta !== undefined &&
            this.indirizzo.cap !== undefined &&
            this.indirizzo.provincia !== undefined;
    }
    stampaCP() {
        console.log('cap', this.indirizzo.cap);
        console.log('citta', this.indirizzo.citta);
        console.log('provincia', this.indirizzo.provincia);
    }
};
RegistrazioneComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _registrazione_service__WEBPACK_IMPORTED_MODULE_2__["RegistrazioneService"] },
    { type: _util_controllo_campi_service__WEBPACK_IMPORTED_MODULE_1__["ControlloCampiService"] }
];
RegistrazioneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registrazione',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registrazione.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utenti/registrazione/registrazione.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registrazione.component.css */ "./src/app/utenti/registrazione/registrazione.component.css")).default]
    })
], RegistrazioneComponent);



/***/ }),

/***/ "./src/app/utenti/registrazione/registrazione.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/utenti/registrazione/registrazione.service.ts ***!
  \***************************************************************/
/*! exports provided: RegistrazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrazioneService", function() { return RegistrazioneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegistrazioneService = class RegistrazioneService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    postRegistrazione(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/aggiungiCliente', data);
    }
    postRicercaEmail(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/cercaEmail', data).toPromise();
    }
    postRicercaCf(data) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/cliente/cercaCf', data).toPromise();
    }
    eseguiRegistrazione(dati, alerts, a) {
        this.postRegistrazione(dati)
            .subscribe(result => {
            if (result) {
                this.router.navigate([('home')]);
            }
        }, error => {
            alerts.push(a[2]);
        });
    }
};
RegistrazioneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegistrazioneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistrazioneService);



/***/ }),

/***/ "./src/app/utenti/utente.ts":
/*!**********************************!*\
  !*** ./src/app/utenti/utente.ts ***!
  \**********************************/
/*! exports provided: Utente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utente", function() { return Utente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Utente {
}


/***/ }),

/***/ "./src/app/util/carta.service.ts":
/*!***************************************!*\
  !*** ./src/app/util/carta.service.ts ***!
  \***************************************/
/*! exports provided: CartaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaService", function() { return CartaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartaService = class CartaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    postAddCarta(data, utCorrente) {
        return this.httpClient.post('http://localhost:8080/Store3D/chiamateRest/carta/addCarta', data, this.httpOption(utCorrente));
    }
    getListCarta(utCorrente) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/carta/listaCarte', this.httpOption(utCorrente));
    }
    getLastIdCarta(utCorrente) {
        return this.httpClient.get('http://localhost:8080/Store3D/chiamateRest/carta/lastIdCarta', this.httpOption(utCorrente));
    }
    httpOption(ut) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
                .append('cf', ut.codicefiscale)
                .append('password', ut.password)
        };
        return httpOptions;
    }
};
CartaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartaService);



/***/ }),

/***/ "./src/app/util/carta.ts":
/*!*******************************!*\
  !*** ./src/app/util/carta.ts ***!
  \*******************************/
/*! exports provided: Carta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carta", function() { return Carta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Carta {
}


/***/ }),

/***/ "./src/app/util/controllo-campi.service.ts":
/*!*************************************************!*\
  !*** ./src/app/util/controllo-campi.service.ts ***!
  \*************************************************/
/*! exports provided: ControlloCampiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlloCampiService", function() { return ControlloCampiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/indirizzo */ "./src/app/util/indirizzo.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ControlloCampiService = class ControlloCampiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    controlloPassword(psw1, psw2) {
        if (psw1 && psw2) {
            psw1 = psw1.trim();
            psw2 = psw2.trim();
            if (psw1 === psw2) {
                return true;
            }
        }
        return false;
    }
    validateCF(codiceFiscale) {
        if (codiceFiscale && codiceFiscale.length === 16) {
            let serchfind;
            const regexp = new RegExp('^[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z][0-9]{3}[A-Za-z]$');
            serchfind = regexp.test(codiceFiscale);
            console.log(serchfind);
            return serchfind;
        }
        else {
            console.log('condizione di uscita');
            return false;
        }
    }
    checkPassword(password) {
        const hasNumber = /\d/;
        const hasUpper = /[A-Z]/;
        const hasLower = /[a-z]/;
        const hasSpecial = /\W/;
        const hasSpace = / /;
        const flag1 = hasNumber.test(password);
        const flag2 = hasUpper.test(password);
        const flag3 = hasLower.test(password);
        const flag4 = hasSpecial.test(password);
        const flag5 = hasSpace.test(password);
        const flag6 = (password.length > 7);
        console.log(flag1, '  ', flag2, '  ', flag3, '  ', flag4, ' ', !flag5, '  ', flag6);
        return flag1 && flag2 && flag3 && flag4 && !flag5 && flag6;
    }
    utenteToUpperC(ut) {
        // tslint:disable-next-line:prefer-const
        let newUt = ut;
        newUt.nome = ut.nome.toUpperCase();
        newUt.cognome = ut.cognome.toUpperCase();
        newUt.indirizzo = ut.indirizzo.toUpperCase();
        newUt.codicefiscale = ut.codicefiscale.toUpperCase();
        return newUt;
    }
    ctrlValuta(campo) {
        const regexp = new RegExp('^-?(?:(?:0|[1-9][0-9]*)(?:.[0-9]{1,2})?|.[0-9]{1,2})$');
        let result;
        result = regexp.test(campo);
        return result;
    }
    campoVuoto(campo) {
        campo = campo.trim();
        return campo === '';
    }
    ctrlQuantita(campo, min, max) {
        if (campo >= min && campo <= max) {
            return true;
        }
        return false;
    }
    prodEquals(p1, p2) {
        return p1.nome === p2.nome &&
            p1.descrizione === p2.descrizione &&
            p1.prezzo === p2.prezzo &&
            p1.immagine === p2.immagine &&
            p1.quantita === p2.quantita &&
            p1.tipologia === p2.tipologia;
    }
    validateEmail(mail) {
        // tslint:disable-next-line:max-line-length
        const regexp = new RegExp('^[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]{2,}$');
        const ris = regexp.test(mail);
        console.log('mail regex   ', ris);
        return ris;
    }
    getProvincie() {
        return this.httpClient.get('assets/provincie.json');
    }
    getComuni() {
        return this.httpClient.get('assets/comuni.json');
    }
    indirizzoToString(indirizzo) {
        return indirizzo.nome + ',' + indirizzo.cognome + ',' +
            indirizzo.via + ',' + indirizzo.civico + ',' +
            indirizzo.provincia + ',' + indirizzo.citta + ',' +
            indirizzo.cap + ';';
    }
    indirizzoFromString(indirizzo) {
        indirizzo = indirizzo.slice(0, -1);
        const val = indirizzo.split(',');
        const newIndirizzo = new src_app_util_indirizzo__WEBPACK_IMPORTED_MODULE_1__["Indirizzo"]();
        newIndirizzo.nome = val[0];
        newIndirizzo.cognome = val[1];
        newIndirizzo.via = val[2];
        newIndirizzo.civico = val[3];
        newIndirizzo.provincia = val[4];
        newIndirizzo.citta = val[5];
        newIndirizzo.cap = val[6];
        return newIndirizzo;
    }
    /* public decriptListCarte(strCart: string): DatiCarta[] {
        if (strCart && strCart !== 'null') {
            let listCarte = [];
            const tmp = strCart.split(';');
            for (const x of tmp) {
                const tmpX = x.split(',');
                const tmpCarta = new DatiCarta();
                tmpCarta.nome = tmpX[0];
                tmpCarta.cognome = tmpX[1];
                tmpCarta.numero = tmpX[2];
                tmpCarta.data_scadenza = tmpX[3];
                tmpCarta.csv = tmpX[4];
                listCarte = listCarte.concat(tmpCarta);
            }
            return listCarte;
        }
        return undefined;
    }

    public carteToString(carta: DatiCarta): string {
        return carta.nome + ',' +
               carta.cognome + ',' +
               carta.numero + ',' +
               carta.data_scadenza + ',' +
               carta.csv;
    } */
    getTipoCarta(numCarta) {
        const numIdentificatorio = numCarta.charAt(0);
        switch (numIdentificatorio) {
            case '3': {
                return 'american-express';
            }
            case '4': {
                return 'visa';
            }
            case '5': {
                return 'mastercard';
            }
            default: {
                return 'generica';
            }
        }
    }
    validaNumeroCarta(numero) {
        numero = numero.trim();
        const regexp = new RegExp('[0-9]');
        if (numero.length === 16) {
            return regexp.test(numero);
        }
        return false;
    }
    validaCSV(csv) {
        csv = csv.trim();
        const regexp = new RegExp('[0-9]');
        if (csv.length === 3) {
            return regexp.test(csv);
        }
        return false;
    }
};
ControlloCampiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ControlloCampiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ControlloCampiService);



/***/ }),

/***/ "./src/app/util/indirizzo.ts":
/*!***********************************!*\
  !*** ./src/app/util/indirizzo.ts ***!
  \***********************************/
/*! exports provided: Indirizzo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indirizzo", function() { return Indirizzo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Indirizzo {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Alfredo Fiore\Documenti\PROGETTO PIATTAFORME\store3d-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map