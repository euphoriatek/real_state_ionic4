(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-item-food-item-module"],{

/***/ "./src/app/app-food/food-item/food-item.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-item/food-item.module.ts ***!
  \********************************************************/
/*! exports provided: FoodItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemPageModule", function() { return FoodItemPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-item.page */ "./src/app/app-food/food-item/food-item.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_item_page__WEBPACK_IMPORTED_MODULE_5__["FoodItemPage"]
    }
];
var FoodItemPageModule = /** @class */ (function () {
    function FoodItemPageModule() {
    }
    FoodItemPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_item_page__WEBPACK_IMPORTED_MODULE_5__["FoodItemPage"]]
        })
    ], FoodItemPageModule);
    return FoodItemPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-item/food-item.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-item/food-item.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Item</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/food-cart\" >\n                        <ion-badge color=\"primary\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content  no-padding>\n\n    <div>\n        <ion-list class=\"ion-margin-top\">\n            <ion-item *ngFor=\"let item of items | async\" lines=\"none\" button routerLink=\"/food-detail/{{item.id}}\"  >\n                <ion-thumbnail slot=\"start\">\n                    <ion-img [src]=\"item.image\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                <h2>{{item.name}}</h2>\n                <p>{{item.description}}</p>\n                <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < item.rating ? 'star' : 'star-outline'\">\n                </ion-icon>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-food/food-item/food-item.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-item/food-item.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb29kL2Zvb2QtaXRlbS9mb29kLWl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-food/food-item/food-item.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-food/food-item/food-item.page.ts ***!
  \******************************************************/
/*! exports provided: FoodItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemPage", function() { return FoodItemPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodItemPage = /** @class */ (function () {
    function FoodItemPage(foodService, activatedRoute, navController, router) {
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        //console.log(this.router.url,"Current URL");
        this.cart = this.foodService.getCart();
    }
    FoodItemPage.prototype.ngOnInit = function () {
        //this.getPlace();
        this.items = this.foodService.getItemByCatId(this.categoryId);
    };
    FoodItemPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-item',
            template: __webpack_require__(/*! ./food-item.page.html */ "./src/app/app-food/food-item/food-item.page.html"),
            styles: [__webpack_require__(/*! ./food-item.page.scss */ "./src/app/app-food/food-item/food-item.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FoodItemPage);
    return FoodItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=food-item-food-item-module.js.map