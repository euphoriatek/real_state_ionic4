(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-category-shopping-category-module"],{

/***/ "./src/app/app-shopping/shopping-category/shopping-category.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-category/shopping-category.module.ts ***!
  \****************************************************************************/
/*! exports provided: ShoppingCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCategoryPageModule", function() { return ShoppingCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-category.page */ "./src/app/app-shopping/shopping-category/shopping-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_category_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingCategoryPage"]
    }
];
var ShoppingCategoryPageModule = /** @class */ (function () {
    function ShoppingCategoryPageModule() {
    }
    ShoppingCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_category_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingCategoryPage"]]
        })
    ], ShoppingCategoryPageModule);
    return ShoppingCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-category/shopping-category.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-category/shopping-category.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border >\n    <ion-toolbar color=\"bluegrey\">\n            <!-- <ion-buttons color=\"light\" slot=\"start\" >\n                <ion-back-button></ion-back-button>\n            </ion-buttons> -->\n            <ion-title color=\"light\" class=\"main-header6\">Category</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-button routerLink=\"/shopping-cart\" >\n                    <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                    <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content  no-padding >\n  <ion-card class=\"card-wide \" tappable  *ngFor=\"let category of categories | async \" >\n      <div class=\"card-wide-bg\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\" routerLink=\"/side-menu/shopping/tabs/tab2/shopping-item/{{category.id}}\" >\n        <h2 class=\"card-wide-title pop-in\"> {{category.name}}</h2>       \n      </div>\n  </ion-card>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-category/shopping-category.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-category/shopping-category.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 9px  !important; }\n\n.card-wide {\n  height: 157px !important;\n  margin: 10px 10px 0px 10px !important;\n  background-color: #dddddd; }\n\n.card-wide-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.card-wide-bg {\n  position: relative;\n  height: 157px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center; }\n\n.card-wide-bg .card-wide-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 22px;\n  font-style: roboto;\n  font-weight: 600;\n  color: #FFFFFF;\n  position: absolute;\n  top: 30%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n.card-wide-bg .card-wide-sub-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 18px;\n  font-style: roboto;\n  font-weight: 400;\n  color: #FFFFFF;\n  position: absolute;\n  top: 42%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctY2F0ZWdvcnkvc2hvcHBpbmctY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksK0JBQThCLEVBR2pDOztBQUdEO0VBRUkseUJBQXVCO0VBQ3ZCLHNDQUFxQztFQUNyQywwQkFBeUIsRUFHNUI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRO0VBQ1IsT0FBTTtFQUNOLFVBQVM7RUFDVCx1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiwwQkFBeUI7RUFJekIsdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0Qiw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osaUJBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsMEVBQW1FO0VBQ25FLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osaUJBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsMEVBQW1FO0VBQ25FLFlBQVc7RUFDWCxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctY2F0ZWdvcnkvc2hvcHBpbmctY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqKioqKioqKioqKiogTWFpbiBjYXJkICoqKioqKioqKioqKi8vICBcbmlvbi1jYXJke1xuICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweCAgIWltcG9ydGFudDtcbiAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwKSAgIWltcG9ydGFudDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcbn1cblxuLy8gKioqKioqKioqKioqIFdpZGUgY2FyZCAqKioqKioqKioqKiovLyAgXG4uY2FyZC13aWRlICB7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4ICAhaW1wb3J0YW50O1xuICAgIGhlaWdodDoxNTdweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAvLyBtaW4taGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xuICAgIC8vIG1heC1oZWlnaHQ6IDE2MHZoICFpbXBvcnRhbnQ7XG59XG4uY2FyZC13aWRlLWJnOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY2FyZC13aWRlLWJnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxNTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNhcmQtd2lkZS1iZyAuY2FyZC13aWRlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzowcHggNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuc1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXN0eWxlOiByb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC13aWRlLWJnIC5jYXJkLXdpZGUtc3ViLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzowcHggNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuc1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiByb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MiU7XG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-category/shopping-category.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-category/shopping-category.page.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCategoryPage", function() { return ShoppingCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCategoryPage = /** @class */ (function () {
    function ShoppingCategoryPage(shoppingService, menu, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.shoppingService.getCart();
    }
    ShoppingCategoryPage.prototype.ngOnInit = function () {
        this.categories = this.shoppingService.getCategories();
    };
    ShoppingCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-category',
            template: __webpack_require__(/*! ./shopping-category.page.html */ "./src/app/app-shopping/shopping-category/shopping-category.page.html"),
            styles: [__webpack_require__(/*! ./shopping-category.page.scss */ "./src/app/app-shopping/shopping-category/shopping-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingCategoryPage);
    return ShoppingCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-category-shopping-category-module.js.map