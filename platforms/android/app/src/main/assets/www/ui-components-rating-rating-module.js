(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-rating-rating-module"],{

/***/ "./src/app/ui-components/rating/rating.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/rating/rating.module.ts ***!
  \*******************************************************/
/*! exports provided: RatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating.page */ "./src/app/ui-components/rating/rating.page.ts");
/* harmony import */ var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating/dist */ "./node_modules/ionic4-rating/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_5__["RatingPage"]
    }
];
var RatingPageModule = /** @class */ (function () {
    function RatingPageModule() {
    }
    RatingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_5__["RatingPage"]]
        })
    ], RatingPageModule);
    return RatingPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/rating/rating.page.html":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/rating/rating.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"gold\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"dark\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">Rating</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-card  class=\"info-card ion-margin ion-padding-top ion-padding-bottom\"  >\n        <ion-card-content>\n\n                  <!-- ****** rating ******* -->\n                  <rating [(ngModel)]=\"rating\"\n                  readonly=\"false\"\n                  size=\"default\" \n                  resettable= \"true\">\n                  </rating>\n                  <br>\n                  <h1 class=\"ion-text-center\">Rating: {{rating}}</h1>\n\n        </ion-card-content>\n    </ion-card>\n  </ion-content>\n     "

/***/ }),

/***/ "./src/app/ui-components/rating/rating.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/rating/rating.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6\n; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL3JhdGluZy9yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7Q0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjZcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/ui-components/rating/rating.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/rating/rating.page.ts ***!
  \*****************************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingPage = /** @class */ (function () {
    function RatingPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        this.rating = 1;
    }
    RatingPage.prototype.ngOnInit = function () {
    };
    RatingPage.prototype.onModelChange = function ($event) {
    };
    RatingPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    RatingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.page.html */ "./src/app/ui-components/rating/rating.page.html"),
            styles: [__webpack_require__(/*! ./rating.page.scss */ "./src/app/ui-components/rating/rating.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], RatingPage);
    return RatingPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-rating-rating-module.js.map