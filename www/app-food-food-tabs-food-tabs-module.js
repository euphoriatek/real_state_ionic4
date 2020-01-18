(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-tabs-food-tabs-module"],{

/***/ "./src/app/app-food/food-tabs/food-tabs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-tabs/food-tabs.module.ts ***!
  \********************************************************/
/*! exports provided: FoodTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodTabsPageModule", function() { return FoodTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-tabs.page */ "./src/app/app-food/food-tabs/food-tabs.page.ts");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.guard */ "./src/app/services/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'tabs',
        component: _food_tabs_page__WEBPACK_IMPORTED_MODULE_5__["FoodTabsPage"],
        children: [
            // {
            //   path: 'tab1',
            //   loadChildren: '../food-home/food-home.module#FoodHomePageModule'
            // },
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-home/food-home.module#FoodHomePageModule',
                    },
                    { path: 'food-cart', loadChildren: '../food-cart/food-cart.module#FoodCartPageModule' },
                    { path: 'food-category', loadChildren: '../food-category/food-category.module#FoodCategoryPageModule' },
                    { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-category/food-category.module#FoodCategoryPageModule',
                    },
                    { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'food-myorder-detail/:orderId', loadChildren: '../food-myorder-detail/food-myorder-detail.module#FoodMyorderDetailPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-cart/food-cart.module#FoodCartPageModule',
                    },
                    { path: 'food-detail', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-profile/food-profile.module#FoodProfilePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'food-myorder', loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule' }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var FoodTabsPageModule = /** @class */ (function () {
    function FoodTabsPageModule() {
    }
    FoodTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_tabs_page__WEBPACK_IMPORTED_MODULE_5__["FoodTabsPage"]]
        })
    ], FoodTabsPageModule);
    return FoodTabsPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-tabs/food-tabs.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-tabs/food-tabs.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n\n    <ion-tab-bar slot=\"bottom\" color=\"greengrab-invert\">\n   \n      <ion-tab-button tab=\"tab1\">\n        <ion-icon name=\"ios-home-outline\"></ion-icon>\n        <ion-label>HOME</ion-label>\n      </ion-tab-button>\n   \n      <ion-tab-button tab=\"tab2\">\n        <ion-icon name=\"ios-restaurant-outline\"></ion-icon>\n        <ion-label>MENU</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab3\">\n          <ion-icon name=\"ios-time-outline\"></ion-icon>\n          <ion-label>MY ORDER</ion-label>\n        </ion-tab-button>\n     \n        <!-- <ion-tab-button tab=\"tab4\">\n          <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n          <ion-icon name=\"ios-cart-outline\"></ion-icon>\n          <ion-label>CART</ion-label>\n        </ion-tab-button> -->\n\n        <ion-tab-button tab=\"tab5\">\n            <ion-icon name=\"ios-settings-outline\"></ion-icon>\n            <ion-label>PROFILE</ion-label>\n          </ion-tab-button>\n<!-- \n        <ion-button fill=\"clear\">\n            <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n            <ion-icon color=\"\" slot=\"icon-only\" name=\"cart\"></ion-icon>\n          </ion-button> -->\n    </ion-tab-bar>\n   \n  </ion-tabs>"

/***/ }),

/***/ "./src/app/app-food/food-tabs/food-tabs.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-tabs/food-tabs.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  padding-bottom: 30px; }\n\nion-badge {\n  color: white;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLXRhYnMvZm9vZC10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQUN2Qjs7QUFDRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFJckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vZC9mb29kLXRhYnMvZm9vZC10YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFye1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRvcDogMHB4O1xuICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-food/food-tabs/food-tabs.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-food/food-tabs/food-tabs.page.ts ***!
  \******************************************************/
/*! exports provided: FoodTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodTabsPage", function() { return FoodTabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodTabsPage = /** @class */ (function () {
    function FoodTabsPage(foodService) {
        this.foodService = foodService;
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodTabsPage.prototype.ngOnInit = function () {
    };
    FoodTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-tabs',
            template: __webpack_require__(/*! ./food-tabs.page.html */ "./src/app/app-food/food-tabs/food-tabs.page.html"),
            styles: [__webpack_require__(/*! ./food-tabs.page.scss */ "./src/app/app-food/food-tabs/food-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], FoodTabsPage);
    return FoodTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-tabs-food-tabs-module.js.map