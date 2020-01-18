(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-travel-travel-tabs-travel-tabs-module"],{

/***/ "./src/app/app-travel/travel-tabs/travel-tabs.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-tabs/travel-tabs.module.ts ***!
  \**************************************************************/
/*! exports provided: TravelTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelTabsPageModule", function() { return TravelTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-tabs.page */ "./src/app/app-travel/travel-tabs/travel-tabs.page.ts");
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
        component: _travel_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TravelTabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../travel-home/travel-home.module#TravelHomePageModule',
                    },
                    { path: 'travel-category', loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule' },
                    { path: 'travel-recommended', loadChildren: '../travel-recommended/travel-recommended.module#TravelRecommendedPageModule' },
                    { path: 'travel-favorite', loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule' },
                    { path: 'travel-tag/:tagId', loadChildren: '../travel-tag/travel-tag.module#TravelTagPageModule' },
                    // { path: 'travel-tags', loadChildren: '../travel-tags/travel-tags.module#TravelTagsPageModule' },
                    { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                    { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                    { path: 'travel-place-review-add/:placeId', loadChildren: '../travel-place-review-add/travel-place-review-add.module#TravelPlaceReviewAddPageModule' },
                    { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule'
                    },
                    { path: 'travel-recommended', loadChildren: '../travel-recommended/travel-recommended.module#TravelRecommendedPageModule' },
                    { path: 'travel-favorite', loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule' },
                    { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                    { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                    { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                    { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                    { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },
                ]
            },
            // {
            //   path: 'tab4',
            //   loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule'
            // }, 
            // { path: 'tab3/products', loadChildren: '../tab2/product-list/product-list.module#ProductListPageModule' },
            // { path: 'tab3/products/:id', loadChildren: '../tab2/view-product/view-product.module#ViewProductPageModule' },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../travel-map/travel-map.module#TravelMapPageModule'
                    },
                    { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                    { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../travel-profile/travel-profile.module#TravelProfilePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    }
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
var TravelTabsPageModule = /** @class */ (function () {
    function TravelTabsPageModule() {
    }
    TravelTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TravelTabsPage"]]
        })
    ], TravelTabsPageModule);
    return TravelTabsPageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-tabs/travel-tabs.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-tabs/travel-tabs.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs color=\"\">\n \n  <ion-tab-bar slot=\"bottom\" color=\"orange-invert\">\n \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"ios-compass-outline\"></ion-icon>\n      <ion-label>HOME</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"filing-outline\"></ion-icon>\n      <ion-label>CATEGORY</ion-label>\n    </ion-tab-button>\n    \n\n    <ion-tab-button tab=\"tab3\">\n        <ion-icon name=\"ios-heart-outline\"></ion-icon>\n        <ion-label>FAVORITE</ion-label>\n    </ion-tab-button>\n  \n    <ion-tab-button tab=\"tab4\">\n        <ion-icon name=\"ios-map-outline\"></ion-icon>\n        <ion-label>MAP</ion-label>\n      </ion-tab-button>\n    <!-- <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"ios-search-outline\"></ion-icon>\n      <ion-label>SEARCH</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"tab5\">\n        <ion-icon name=\"contact-outline\"></ion-icon>\n        <ion-label>PROFILE</ion-label>\n      </ion-tab-button>\n\n  </ion-tab-bar>\n \n</ion-tabs>"

/***/ }),

/***/ "./src/app/app-travel/travel-tabs/travel-tabs.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-tabs/travel-tabs.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  padding-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC10YWJzL3RyYXZlbC10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC10cmF2ZWwvdHJhdmVsLXRhYnMvdHJhdmVsLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYntcbiAgICAvLyAudGFie1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIGJvdHRvbTogMHB4O1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIFxuICAgIC8vIH1cbn1cbmlvbi10YWItYmFye1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app-travel/travel-tabs/travel-tabs.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-travel/travel-tabs/travel-tabs.page.ts ***!
  \************************************************************/
/*! exports provided: TravelTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelTabsPage", function() { return TravelTabsPage; });
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

var TravelTabsPage = /** @class */ (function () {
    function TravelTabsPage() {
    }
    TravelTabsPage.prototype.ngOnInit = function () {
    };
    TravelTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-tabs',
            template: __webpack_require__(/*! ./travel-tabs.page.html */ "./src/app/app-travel/travel-tabs/travel-tabs.page.html"),
            styles: [__webpack_require__(/*! ./travel-tabs.page.scss */ "./src/app/app-travel/travel-tabs/travel-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelTabsPage);
    return TravelTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-travel-travel-tabs-travel-tabs-module.js.map