(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-recommended-travel-recommended-module"],{

/***/ "./src/app/app-travel/travel-recommended/travel-recommended.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-travel/travel-recommended/travel-recommended.module.ts ***!
  \****************************************************************************/
/*! exports provided: TravelRecommendedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRecommendedPageModule", function() { return TravelRecommendedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_recommended_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-recommended.page */ "./src/app/app-travel/travel-recommended/travel-recommended.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_recommended_page__WEBPACK_IMPORTED_MODULE_5__["TravelRecommendedPage"]
    }
];
var TravelRecommendedPageModule = /** @class */ (function () {
    function TravelRecommendedPageModule() {
    }
    TravelRecommendedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_recommended_page__WEBPACK_IMPORTED_MODULE_5__["TravelRecommendedPage"]]
        })
    ], TravelRecommendedPageModule);
    return TravelRecommendedPageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-recommended/travel-recommended.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/app-travel/travel-recommended/travel-recommended.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  no-border>\n    <ion-toolbar class=\"bar-header\" mode=\"ios\"> \n        <ion-buttons slot=\"start\" color=\"orange\">\n            <ion-back-button color=\"orange\"></ion-back-button>\n        </ion-buttons>\n        <ion-title  class=\"main-header4\">Recommanded</ion-title>\n    </ion-toolbar>\n    <!-- <ion-item lines=\"none\">\n        <ion-label>\n          <h1 class=\"travel_header1\">Recommanded</h1>\n        </ion-label>\n      </ion-item>     -->\n  </ion-header>\n  \n<ion-content  no-padding>\n  <ion-list class=\"ion-margin-top\">\n     \n      <ion-item   *ngFor=\" let place of recommended | async\" lines=\"none\" button routerLink=\"/travel-place-detail/{{place.id}}\"  >\n        <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"place.image_header\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <h2>{{place.name}}</h2>\n          <p>{{place.description}}</p>\n          <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < place.rating ? 'star' : 'star-outline'\"></ion-icon>\n\n        </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-recommended/travel-recommended.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/app-travel/travel-recommended/travel-recommended.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  --size: 50px;\n  margin-bottom: 15px;\n  border-radius: 8px  !important;\n  background-color: #dddddd;\n  min-width: 6rem;\n  min-height: 5rem; }\n  ion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1yZWNvbW1lbmRlZC90cmF2ZWwtcmVjb21tZW5kZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBTztFQUlQLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsMEJBQXlCO0VBR3pCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBT25CO0VBbEJEO0lBY1EsK0JBQThCLEVBR2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtcmVjb21tZW5kZWQvdHJhdmVsLXJlY29tbWVuZGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAgIC0tc2l6ZTogNTBweDtcbiAgICAvLyB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgICAvLyBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICAgIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gbWluLWhlaWdodDogOHJlbTtcbiAgICBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgaW9uLWltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA2cmVtOyAgICBcbiAgICAgICAgLy8gbWluLXdpZHRoOiA4cmVtO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-travel/travel-recommended/travel-recommended.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-travel/travel-recommended/travel-recommended.page.ts ***!
  \**************************************************************************/
/*! exports provided: TravelRecommendedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRecommendedPage", function() { return TravelRecommendedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TravelRecommendedPage = /** @class */ (function () {
    function TravelRecommendedPage(travelService, activatedRoute, navController, router, loadingController, modalController) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
    }
    TravelRecommendedPage.prototype.ngOnInit = function () {
        this.recommended = this.travelService.getRecommended();
    };
    TravelRecommendedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-recommended',
            template: __webpack_require__(/*! ./travel-recommended.page.html */ "./src/app/app-travel/travel-recommended/travel-recommended.page.html"),
            styles: [__webpack_require__(/*! ./travel-recommended.page.scss */ "./src/app/app-travel/travel-recommended/travel-recommended.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TravelRecommendedPage);
    return TravelRecommendedPage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-recommended-travel-recommended-module.js.map