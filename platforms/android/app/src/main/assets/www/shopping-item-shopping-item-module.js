(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-item-shopping-item-module"],{

/***/ "./src/app/app-shopping/shopping-item/shopping-item.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-item/shopping-item.module.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingItemPageModule", function() { return ShoppingItemPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-item.page */ "./src/app/app-shopping/shopping-item/shopping-item.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_item_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingItemPage"]
    }
];
var ShoppingItemPageModule = /** @class */ (function () {
    function ShoppingItemPageModule() {
    }
    ShoppingItemPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_item_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingItemPage"]]
        })
    ], ShoppingItemPageModule);
    return ShoppingItemPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-item/shopping-item.page.html":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-item/shopping-item.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"bluegrey\">\n            <ion-buttons color=\"light\" slot=\"start\" >\n                <ion-back-button></ion-back-button>\n            </ion-buttons>\n            <ion-title color=\"light\" class=\"main-header6\">Item</ion-title>\n            <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/shopping-cart\" >\n                        <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content  no-padding>\n\n<!--  New grid style -->\n<ion-grid class=\"ion-margin-top ion-padding-top\">\n    <ion-row wrap>\n        <ion-col tappable  size=\"6\"  class=\"ion-padding\" *ngFor=\"let item of items | async\" color=\"gray\">\n            <ion-card class=\"shop-main-card shop-card-tall-2 ion-margin-bottom\"  (click)=\"openDetail('shopping-detail',item.id)\"   >\n                <div *ngIf=\"item.discount\"  class=\"ribbon\">SALE</div>\n                <div class=\"shop-div-tall-bg-2\"  [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\"></div>\n                <div class=\"ion-margin-top main-header8\" text-wrap>{{item.name}}</div>\n                <ion-icon  style=\"font-size: 12px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < item.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                <!-- <div class=\"main-b-header8\" color=\"green\">${{item.price}}</div> -->\n                <div *ngIf=\"!item.discount\" class=\"main-b-header9\" >\n                    <ion-text color=\"grey\">{{item.price | currency}}</ion-text>\n                </div>\n                <div *ngIf=\"item.discount\" class=\"main-b-header9\" >\n                    <ion-text color=\"grey\">{{item.discount_price | currency}}&nbsp;&nbsp;</ion-text>\n                    <ion-text color=\"lightgrey\" class=\"discount\">{{item.price | currency}}</ion-text>\n                </div>\n\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-item/shopping-item.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-item/shopping-item.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-ios {\n  border-radius: 10px !important;\n  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1) !important;\n  margin-bottom: 25px !important; }\n\n.card-md {\n  border-radius: 8px !important;\n  margin-bottom: 12px !important; }\n\nion-col {\n  padding: 5px 5px 0px 5px; }\n\n.content {\n  background-color: #ddd; }\n\nion-card.cardGrid {\n  position: relative;\n  text-align: center;\n  margin: 12px 10px 0px 0px !important;\n  width: 100% !important; }\n\np {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctaXRlbS9zaG9wcGluZy1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUE4QjtFQUM5QixzREFBcUQ7RUFDckQsK0JBQThCLEVBQy9COztBQUNIO0VBQ0UsOEJBQTZCO0VBRTdCLCtCQUE4QixFQUMvQjs7QUFDRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNRLHVCQUFzQixFQUM3Qjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIscUNBQW9DO0VBQ3BDLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNob3BwaW5nL3Nob3BwaW5nLWl0ZW0vc2hvcHBpbmctaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbi5jYXJkLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIC8vYm94LXNoYWRvdzogMCAxMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbn1cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDsgXG59XG4uY29udGVudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbmlvbi1jYXJkLmNhcmRHcmlke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxucHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-item/shopping-item.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shopping/shopping-item/shopping-item.page.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingItemPage", function() { return ShoppingItemPage; });
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




var ShoppingItemPage = /** @class */ (function () {
    function ShoppingItemPage(shoppingService, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        this.cart = this.shoppingService.getCart();
    }
    ShoppingItemPage.prototype.ngOnInit = function () {
        this.items = this.shoppingService.getItemByCatId(this.categoryId);
    };
    ShoppingItemPage.prototype.openTest = function (categoryId) {
        console.log("openTest" + categoryId);
    };
    ShoppingItemPage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    ShoppingItemPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-item',
            template: __webpack_require__(/*! ./shopping-item.page.html */ "./src/app/app-shopping/shopping-item/shopping-item.page.html"),
            styles: [__webpack_require__(/*! ./shopping-item.page.scss */ "./src/app/app-shopping/shopping-item/shopping-item.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingItemPage);
    return ShoppingItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-item-shopping-item-module.js.map