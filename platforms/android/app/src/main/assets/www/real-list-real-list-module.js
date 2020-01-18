(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-list-real-list-module"],{

/***/ "./src/app/app-real/real-list/real-list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-list/real-list.module.ts ***!
  \********************************************************/
/*! exports provided: RealListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealListPageModule", function() { return RealListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-list.page */ "./src/app/app-real/real-list/real-list.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _real_list_page__WEBPACK_IMPORTED_MODULE_5__["RealListPage"]
    }
];
var RealListPageModule = /** @class */ (function () {
    function RealListPageModule() {
    }
    RealListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_list_page__WEBPACK_IMPORTED_MODULE_5__["RealListPage"]]
        })
    ], RealListPageModule);
    return RealListPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-list/real-list.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-list/real-list.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n  <ion-toolbar color=\"realgreen-invert\" class=\"first\" >\n    <ion-buttons  slot=\"start\" >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"home\"></ion-back-button>\n              </ion-buttons> -->\n\n            </ion-toolbar>\n\n            <div  style=\"margin:auto; height: 50px;width: 50px;\"><img src=\"https://i.ibb.co/w4N12SW/OBNlogo.png\" height=\"50px\"></div>\n\n\n            <ion-toolbar style=\"margin-bottom: 0px;\">\n              <ion-segment color=\"realgreen\" [(ngModel)]=\"viewType\" >\n                <ion-segment-button value=\"buy\">\n                  <ion-label>Buyers</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"rent\" >\n                  <ion-label>Renters</ion-label>\n                </ion-segment-button>\n              </ion-segment>\n\n            </ion-toolbar>\n          </ion-header>\n\n          <ion-content #pageContent no-padding >\n\n\n\n\n            <div [ngClass]=\"{ 'hide': viewType != 'buy' }\">\n              <!--*********** Show buy items ***********-->\n\n              <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n              <ion-card class=\"real-card2 slide-up\"  *ngFor=\"let buyItem of buyItems | async \"   routerLink=\"/real-detail/{{buyItem.id}}\"  >\n                <div *ngIf=\"buyItem.recommended\"  class=\"ribbon pop-in\">Best</div>\n                <div class=\"real-card2-bg\"  [ngStyle]=\"{'background-image': 'url(' + buyItem.image_header+ ')'}\">\n                </div>\n                <ion-card-content class=\"card1-padding\">\n\n                  <ion-label><ion-text color=\"black\"><h2 class=\"main-b-header7\">{{buyItem.title}}</h2></ion-text></ion-label>\n\n                  <ion-label><h3 class=\"margin-top-3\">{{buyItem.short_features}}</h3></ion-label>\n\n                  <ion-label  text-wrap>\n                    <h3 class=\"margin-top-3\"> \n                      <!-- <ion-icon   name=\"ios-pin\" color=\"grey\" size=\"small\"></ion-icon> -->\n                      {{buyItem.location}}\n                    </h3>\n                  </ion-label>\n                  <ion-text color=\"black\" class=\"ion-text-right\"> <h2 class=\"margin-top-5\"><strong>{{buyItem.price | currency}}</strong></h2></ion-text>\n\n                </ion-card-content>\n\n\n              </ion-card>\n\n            </div>\n\n\n            <div [ngClass]=\"{ 'hide': viewType != 'rent' }\">\n              <!--*********** Show rent items ***********-->\n\n              <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n              <ion-card class=\"real-card2 slide-up\"  *ngFor=\"let rentItem of rentItems | async \"   routerLink=\"/real-detail/{{rentItem.id}}\"  >\n                <div *ngIf=\"rentItem.recommended\"  class=\"ribbon pop-in\">Best</div>\n                <div class=\"real-card2-bg\"  [ngStyle]=\"{'background-image': 'url(' + rentItem.image_header+ ')'}\">\n                </div>\n                <ion-card-content class=\"card1-padding\">\n\n                  <ion-label><ion-text color=\"black\"><h2 class=\"main-b-header7\">{{rentItem.title}}</h2></ion-text></ion-label>\n\n                  <ion-label><h3 class=\"margin-top-3\">{{rentItem.short_features}}</h3></ion-label>\n\n                  <ion-label  text-wrap>\n                    <h3 class=\"margin-top-3\"> \n                      <!-- <ion-icon   name=\"ios-pin\" color=\"grey\" size=\"small\"></ion-icon> -->\n                      {{rentItem.location}}\n                    </h3>\n                  </ion-label>\n                  <ion-text color=\"black\" class=\"ion-text-right\"> <h2 class=\"margin-top-5\"><strong>{{rentItem.price | currency}}</strong></h2></ion-text>\n\n                </ion-card-content>              \n                \n              </ion-card>\n\n            </div>\n            <!-- fab placed to the bottom end -->\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n              <ion-fab-button (click)=\"openMap(viewType)\" title=\"location\">\n               <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n             </ion-fab-button>\n           </ion-fab>\n\n         </ion-content>\n"

/***/ }),

/***/ "./src/app/app-real/real-list/real-list.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-list/real-list.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#F9F9F9; }\n\nion-searchbar {\n  padding: 0px 18px; }\n\nion-searchbar ion-icon {\n  font-size: 20px !important; }\n\n.searchbar-input-container {\n  height: 43px !important; }\n\nion-item ion-thumbnail ion-icon {\n  color: #ffffff;\n  font-size: 40px; }\n\nion-searchbar {\n  padding: 0px 10px 10px !important;\n  height: 50px !important; }\n\n.agent-icon {\n  display: inline-block;\n  margin: 0px 5px 0px 5px !important; }\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\nh4 {\n  font-family: roboto;\n  color: #464646 !important;\n  letter-spacing: -1px;\n  font-size: 22px;\n  font-weight: lighter; }\n\nion-chip {\n  padding: 10px !important;\n  border-radius: 8px  !important;\n  height: 35px;\n  margin-left: 11px; }\n\n.horizontal-scroll {\n  margin-left: 12px;\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n\n.imgTall {\n  width: 140px !important;\n  height: 260px !important; }\n\n.card-tall {\n  position: relative;\n  width: 120px !important;\n  height: 315px !important;\n  margin: 0px 5px 0px 5px !important; }\n\n.div-tall-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.div-tall-bg {\n  border-radius: 9px  !important;\n  position: relative;\n  width: 120px;\n  height: 245px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center; }\n\n.card2 {\n  position: relative;\n  width: 149px !important;\n  height: 92px !important;\n  margin: 0px 5px 0px 5px !important;\n  background-color: #dddddd;\n  border-radius: 8px  !important; }\n\n.card2-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.card2-bg {\n  position: relative;\n  height: 92px;\n  background-size: cover;\n  background-size: cover;\n  background-position: center; }\n\n.card2-bg .card2-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: roboto;\n  font-size: 16px;\n  font-weight: 400;\n  color: #FFFFFF;\n  position: absolute;\n  top: 30%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n.card2-bg .card2-star {\n  width: 179px !important;\n  height: 77px !important;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: roboto;\n  font-size: 17px;\n  font-weight: 600;\n  color: #FFFFFF;\n  position: absolute;\n  top: 60%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n.card3 {\n  position: relative;\n  width: 201px !important;\n  height: 357px !important;\n  margin: 0px 5px 0px 5px !important; }\n\n.card3-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.card3-bg {\n  position: relative;\n  width: 100%;\n  height: 252px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center;\n  border-radius: 8px  !important; }\n\n.card3-bg .card3-title {\n  width: 100px;\n  padding: 0px 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 17px;\n  font-weight: 600;\n  color: #FFFFFF;\n  position: absolute;\n  top: 25%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n.segment-card {\n  display: flex;\n  overflow-x: scroll;\n  background-color: blue;\n  height: 200px; }\n\n.segment-card .segment-item {\n    -webkit-margin-start: 0px !important;\n    margin-inline-start: 0px !important;\n    display: inline-block !important;\n    min-width: 300px !important;\n    height: 120px !important;\n    width: auto !important; }\n\n.segment-card .card-title {\n    position: absolute;\n    top: 36%;\n    font-size: 2.0em;\n    width: 100%;\n    font-weight: bold;\n    color: #fff; }\n\n.segment-card .card-subtitle {\n    font-size: 1.0em;\n    position: absolute;\n    top: 52%;\n    width: 100%;\n    color: #fff; }\n\n.secondary-card {\n  display: flex;\n  overflow-x: scroll;\n  background-color: red;\n  height: 280px; }\n\n.secondary-card .secondary-item {\n    -webkit-margin-start: 0px !important;\n    margin-inline-start: 0px !important;\n    display: inline-block !important;\n    min-width: 300px !important;\n    height: 120px !important;\n    width: auto !important; }\n\n.secondary-card .secondary-card-title {\n    position: absolute;\n    top: 36%;\n    font-size: 2.0em;\n    width: 100%;\n    font-weight: bold;\n    color: #fff; }\n\n.secondary-card .secondary-card-subtitle {\n    font-size: 1.0em;\n    position: absolute;\n    top: 52%;\n    width: 100%;\n    color: #fff; }\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n.thumnails .list-thumbnail {\n    height: 100%;\n    white-space: nowrap; }\n\n.thumnails .list-thumbnail .img-thumb {\n      display: inline-block;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 3px;\n      height: 50px;\n      margin: 0 2px 0 0;\n      line-height: 60px; }\n\n.thumnails .list-thumbnail .selected-img {\n      border: 2px solid red; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.container {\n  width: 100px;\n  background-color: green;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.container ::-webkit-scrollbar {\n    display: none; }\n\n.container .scroll {\n    overflow: auto; }\n\nion-avatar {\n  background-color: #61CFE9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 60px;\n  min-height: 60px; }\n\nion-avatar[item-start] {\n  margin: 8px 16px 8px 0; }\n\n.transition {\n  transition: background-size .3s ease-in; }\n\n.hide {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWxpc3QvcmVhbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLHFCQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBR0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWMsRUFDZjs7QUFDRDtFQUNFLGtDQUFpQztFQUNqQyx3QkFBdUIsRUFDeEI7O0FBR0Q7RUFDRSxzQkFBcUI7RUFHckIsbUNBQWtDLEVBQ25DOztBQUdEO0VBQ0UsNEJBQWE7RUFDYiw4QkFBZSxFQUNoQjs7QUFHRDtFQUNFLG9CQUFrQjtFQUNsQiwwQkFBd0I7RUFDeEIscUJBQW9CO0VBQ3BCLGdCQUFlO0VBQ2YscUJBQW9CLEVBQ3JCOztBQUlEO0VBQ0UseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QixhQUFZO0VBQ1osa0JBQWlCLEVBRWxCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUVqQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBdUIsRUFFeEI7O0FBR0M7RUFDQSxtQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHlCQUF1QjtFQUN2QixtQ0FBa0MsRUFLakM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRO0VBQ1IsT0FBTTtFQUNOLFVBQVM7RUFDVCx1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYTtFQUNiLDBCQUF5QjtFQUl6Qix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM5Qjs7QUFF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O01BQ1osa0JBQWdCO01BQ2hCLGtCQUFpQixFQUNsQjs7QUFmTDtNQWlCTSxzQkFBcUIsRUFDdEI7O0FBR0w7RUFDRSxjQUFhLEVBQ2Q7O0FBS0Q7RUFDRSxhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFPcEI7O0FBWEQ7SUFNSSxjQUFhLEVBQ2Q7O0FBUEg7SUFTSSxlQUFjLEVBQ2Y7O0FBSUg7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBSWxCLGNBQWE7RUFJYixvQkFBbUI7RUFJbkIsd0JBQXVCO0VBRXZCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0Usd0NBQXVDLEVBQ3hDOztBQUNEO0VBRUMseUJBQXdCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXJlYWwvcmVhbC1saXN0L3JlYWwtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuLy8gICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbi8vLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taWNvbiB7XG4gIC8vIGNvbG9yOiAjNDU0NTQ1O1xuICAvLyBmb250LXNpemU6IDMwcHg7XG59XG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kIDojRjlGOUY5O1xufVxuXG5pb24tc2VhcmNoYmFye1xuICBwYWRkaW5nOiAwcHggMThweDtcbn1cbmlvbi1zZWFyY2hiYXIgaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufSBcbi5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVye1xuICBoZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcbn1cblxuXG5pb24taXRlbSBpb24tdGh1bWJuYWlsIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTo0MHB4O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vKioqKioqKioqKiBob3Jpem9udGFsIGFnZW50IGxpc3QgKioqKioqKioqKi8vXG4uYWdlbnQtaWNvbiAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAvLyBoZWlnaHQ6MTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbn1cbi8vICoqKioqKioqKioqKiBIZWFkZXIgKioqKioqKioqKioqLy8gIFxuXG4udHJhbnNwYXJlbnR7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5cbi8vICoqKioqKioqKioqKiBTdWIgSGVhZGVyICoqKioqKioqKioqKi8vICBcbmg0e1xuICBmb250LWZhbWlseTpyb2JvdG87XG4gIGNvbG9yOiM0NjQ2NDYgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cblxuXG5pb24tY2hpcHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIC8vIGNvbG9yOiNFOEU4RTggIWltcG9ydGFudDtcbn1cblxuLmhvcml6b250YWwtc2Nyb2xsIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG59XG5cbi5pbWdUYWxse1xuICB3aWR0aDogIDE0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDoyNjBweCAhaW1wb3J0YW50O1xuICAvLyBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cblxuICAuY2FyZC10YWxsICB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6ICAxMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6MzE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgLy9taW4taGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xuICAvL21heC1oZWlnaHQ6IDE2MHZoICFpbXBvcnRhbnQ7XG4gIFxuICB9XG5cbiAgLmRpdi10YWxsLWJnOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIC5kaXYtdGFsbC1iZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA5cHggICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogIDEyMHB4O1xuICAgICAgaGVpZ2h0OiAyNDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuLmNhcmQyICB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE0OXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDo5MnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcblxuICB9XG5cbiAgLmNhcmQyLWJnOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIC5jYXJkMi1iZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDkycHg7XG4gIFxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIC5jYXJkMi1iZyAuY2FyZDItdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgcGFkZGluZzowcHggNXB4O1xuXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvLyBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zXG5cbiAgICAgIGZvbnQtc3R5bGU6IHJvYm90bztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzMCU7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZDItYmcgLmNhcmQyLXN0YXIge1xuICAgICAgd2lkdGg6IDE3OXB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6NzdweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzowcHggNXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuc1xuICAgICAgZm9udC1zdHlsZTogcm9ib3RvO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2MCU7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZDMgIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxuICAgICAgd2lkdGg6IDIwMXB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6MzU3cHggIWltcG9ydGFudDtcbiAgICAgIC8vIHBhZGRpbmctbGVmdDoxNnB4O1xuICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgIFxuICAgICAgLy9taW4taGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xuICAgICAgLy9tYXgtaGVpZ2h0OiAxNjB2aCAhaW1wb3J0YW50O1xuICBcbiAgfVxuXG4gIC5jYXJkMy1iZzpiZWZvcmUge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICAuY2FyZDMtYmcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDI1MnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZDMtYmcgLmNhcmQzLXRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvLyBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zXG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDI1JTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi5zZWdtZW50LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGhlaWdodDogMjAwcHg7XG4gIC5zZWdtZW50LWl0ZW0ge1xuICAgICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLy8gLmNhcmQtZnJhbWV7XG4gIC8vICAgICBoZWlnaHQ6IDIzMHB4O1xuICAvLyAgICAgd2lkdGg6IDE1MHB4O1xuICAvLyB9XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG59XG5cbi5zZWNvbmRhcnktY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDI4MHB4O1xuICAuc2Vjb25kYXJ5LWl0ZW0ge1xuICAgICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIFxuICB9XG4gIC8vIC5jYXJkLWZyYW1le3hcbiAgLy8gICAgIGhlaWdodDogMjMwcHg7XG4gIC8vICAgICB3aWR0aDogMTUwcHg7XG4gIC8vIH1cbiAgLnNlY29uZGFyeS1jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5zZWNvbmRhcnktY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxufVxuXG5cblxuLnRodW1uYWlsc3tcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC5saXN0LXRodW1ibmFpbHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAuaW1nLXRodW1ie1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBtYXJnaW46MCAycHggMCAwOyBcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtaW1ne1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIH1cbiAgfVxufVxuOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICBkaXNwbGF5OiBub25lOyBcbn1cblxuXG5cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zY3JvbGwge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUNGRTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1pbi13aWR0aDogNjBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbmlvbi1hdmF0YXJbaXRlbS1zdGFydF17XG4gIG1hcmdpbjogOHB4IDE2cHggOHB4IDA7XG59XG5cbi50cmFuc2l0aW9ue1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzIGVhc2UtaW47XG59XG4uaGlkZSBcbntcbiBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app-real/real-list/real-list.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-real/real-list/real-list.page.ts ***!
  \******************************************************/
/*! exports provided: RealListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealListPage", function() { return RealListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
/* harmony import */ var _real_search_real_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../real-search/real-search.page */ "./src/app/app-real/real-search/real-search.page.ts");
/* harmony import */ var _real_map_real_map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../real-map/real-map.page */ "./src/app/app-real/real-map/real-map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





// import travel-map page for modal

var RealListPage = /** @class */ (function () {
    //public houseSelType: string = "map";
    function RealListPage(realestateService, activatedRoute, navController, router, 
    //public alertController: AlertController,
    modalController) {
        this.realestateService = realestateService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        // footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 45 };
        this.viewType = "buy";
    }
    RealListPage.prototype.ngOnInit = function () {
        this.buyItems = this.realestateService.getHouseByType("buy");
        this.rentItems = this.realestateService.getHouseByType("rent");
    };
    RealListPage.prototype.openSearchModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("open house search modal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _real_search_real_search_page__WEBPACK_IMPORTED_MODULE_4__["RealSearchPage"],
                                componentProps: {
                                //categoryId: categoryId
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RealListPage.prototype.openMap = function (viewType) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("____________openMap viewType=" + viewType);
                        return [4 /*yield*/, this.modalController.create({
                                component: _real_map_real_map_page__WEBPACK_IMPORTED_MODULE_5__["RealMapPage"],
                                cssClass: '',
                                componentProps: {
                                    viewType: viewType
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RealListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-list',
            template: __webpack_require__(/*! ./real-list.page.html */ "./src/app/app-real/real-list/real-list.page.html"),
            styles: [__webpack_require__(/*! ./real-list.page.scss */ "./src/app/app-real/real-list/real-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_3__["RealestateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RealListPage);
    return RealListPage;
}());



/***/ })

}]);
//# sourceMappingURL=real-list-real-list-module.js.map