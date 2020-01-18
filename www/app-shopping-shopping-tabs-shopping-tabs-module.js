(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shopping-shopping-tabs-shopping-tabs-module"],{

/***/ "./src/app/app-shopping/shopping-tabs/shopping-tabs.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-tabs/shopping-tabs.module.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingTabsPageModule", function() { return ShoppingTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-tabs.page */ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.ts");
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
        component: _shopping_tabs_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingTabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-home/shopping-home.module#ShoppingHomePageModule',
                    },
                    //  { path: 'shopping-payment/:addressId, loadChildren: ', loadChildren: './app-shopping/shopping-payment/shopping-payment.module#ShoppingPaymentPageModule' },
                    { path: 'shopping-group/:groupId', loadChildren: '../shopping-group/shopping-group.module#ShoppingGroupPageModule' },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-category/shopping-category.module#ShoppingCategoryPageModule',
                    },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-wishlist/shopping-wishlist.module#ShoppingWishlistPageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-my-order/shopping-my-order.module#ShoppingMyOrderPageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'shopping-my-order-detail/:orderId', loadChildren: '../shopping-my-order-detail/shopping-my-order-detail.module#ShoppingMyOrderDetailPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-profile/shopping-profile.module#ShoppingProfilePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            }
            // {
            //   path: 'tab2',
            //   loadChildren: '../food-category/food-category.module#FoodCategoryPageModule'
            // }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var ShoppingTabsPageModule = /** @class */ (function () {
    function ShoppingTabsPageModule() {
    }
    ShoppingTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_tabs_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingTabsPage"]]
        })
    ], ShoppingTabsPageModule);
    return ShoppingTabsPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.html":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-tabs/shopping-tabs.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n \n    <ion-tab-bar slot=\"bottom\" color=\"bluegrey-invert\">\n   \n      <ion-tab-button tab=\"tab1\">\n        <ion-icon name=\"ios-home-outline\"></ion-icon>\n        <ion-label>home</ion-label>\n      </ion-tab-button>\n   \n      <ion-tab-button tab=\"tab2\">\n        <ion-icon name=\"list\"></ion-icon>\n        <ion-label>category</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab3\">\n          <ion-icon name=\"ios-archive-outline\"></ion-icon>\n          <ion-label>wish list</ion-label>\n        </ion-tab-button>\n     \n        <ion-tab-button tab=\"tab4\">\n          <!-- <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge> -->\n          <ion-icon name=\"ios-stopwatch-outline\"></ion-icon>\n          <ion-label>my orders</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"tab5\">\n            <!-- <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge> -->\n            <ion-icon name=\"ios-contact-outline\"></ion-icon>\n            <ion-label>profile</ion-label>\n          </ion-tab-button>\n<!-- \n        <ion-button fill=\"clear\">\n            <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n            <ion-icon color=\"\" slot=\"icon-only\" name=\"cart\"></ion-icon>\n          </ion-button> -->\n    </ion-tab-bar>\n   \n  </ion-tabs>"

/***/ }),

/***/ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-tabs/shopping-tabs.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  padding-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctdGFicy9zaG9wcGluZy10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaG9wcGluZy9zaG9wcGluZy10YWJzL3Nob3BwaW5nLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXJ7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shopping/shopping-tabs/shopping-tabs.page.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingTabsPage", function() { return ShoppingTabsPage; });
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

var ShoppingTabsPage = /** @class */ (function () {
    function ShoppingTabsPage() {
    }
    ShoppingTabsPage.prototype.ngOnInit = function () {
    };
    ShoppingTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-tabs',
            template: __webpack_require__(/*! ./shopping-tabs.page.html */ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.html"),
            styles: [__webpack_require__(/*! ./shopping-tabs.page.scss */ "./src/app/app-shopping/shopping-tabs/shopping-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingTabsPage);
    return ShoppingTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-shopping-shopping-tabs-shopping-tabs-module.js.map