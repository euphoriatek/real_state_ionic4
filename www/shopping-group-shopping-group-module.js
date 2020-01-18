(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-group-shopping-group-module"],{

/***/ "./src/app/app-shopping/shopping-group/shopping-group.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-group/shopping-group.module.ts ***!
  \**********************************************************************/
/*! exports provided: ShoppingGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingGroupPageModule", function() { return ShoppingGroupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_group_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-group.page */ "./src/app/app-shopping/shopping-group/shopping-group.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_group_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingGroupPage"]
    }
];
var ShoppingGroupPageModule = /** @class */ (function () {
    function ShoppingGroupPageModule() {
    }
    ShoppingGroupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_group_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingGroupPage"]]
        })
    ], ShoppingGroupPageModule);
    return ShoppingGroupPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-group/shopping-group.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-group/shopping-group.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border >\n        <ion-toolbar color=\"bluegrey\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n                <ion-title color=\"light\" class=\"main-header6\">Brand</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/shopping-cart\" >\n                        <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n  <ion-content  no-padding>\n        <ion-item lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"\">\n                      <!-- <h1 class=\"travel_header1\">Category</h1> -->\n                      <h1 class=\"main-header6\">{{(group | async)?.name}}</h1>\n                  </ion-text>\n                  <p text-wrap>{{(group | async)?.description}}</p>\n                </ion-label> \n            </ion-item>    \n\n<ion-grid class=\"ion-margin-top ion-padding-top\">\n        <ion-row wrap>\n            <ion-col tappable  size=\"6\"  class=\"ion-padding\" *ngFor=\"let item of items | async\" color=\"gray\">\n                <ion-card class=\"shop-main-card shop-card-tall-2 ion-margin-bottom\"   (click)=\"openDetail('shopping-detail',item.id)\"   >\n                     <!-- add discount condition when item discount is True -->\n                    <div *ngIf=\"item.discount\"  class=\"ribbon\">SALE</div>\n                    <div class=\"shop-div-tall-bg-2\"  [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\"></div>\n                    <div class=\"ion-margin-top main-header8\" text-wrap>{{item.name}}</div>\n                    <ion-icon  style=\"font-size: 12px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < item.rating  ? 'star' : 'star-outline'\"></ion-icon>\n        \n                    <div *ngIf=\"!item.discount\" class=\"main-b-header9\" >\n                        <ion-text color=\"grey\">{{item.price | currency}}</ion-text>\n                    </div>\n                    <div *ngIf=\"item.discount\" class=\"main-b-header9\" >\n                        <ion-text color=\"grey\">{{item.discount_price | currency}}&nbsp;&nbsp;</ion-text>\n                        <ion-text color=\"lightgrey\" class=\"discount\">{{item.price | currency}}</ion-text>\n                    </div>\n    \n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/app-shopping/shopping-group/shopping-group.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-group/shopping-group.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaG9wcGluZy9zaG9wcGluZy1ncm91cC9zaG9wcGluZy1ncm91cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-group/shopping-group.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-group/shopping-group.page.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingGroupPage", function() { return ShoppingGroupPage; });
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




var ShoppingGroupPage = /** @class */ (function () {
    function ShoppingGroupPage(shoppingService, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
        this.cart = this.shoppingService.getCart();
    }
    ShoppingGroupPage.prototype.ngOnInit = function () {
        this.items = this.shoppingService.getItemByGroupId(this.groupId);
        this.group = this.shoppingService.getGroupDetail(this.groupId);
    };
    ShoppingGroupPage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    ShoppingGroupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-group',
            template: __webpack_require__(/*! ./shopping-group.page.html */ "./src/app/app-shopping/shopping-group/shopping-group.page.html"),
            styles: [__webpack_require__(/*! ./shopping-group.page.scss */ "./src/app/app-shopping/shopping-group/shopping-group.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingGroupPage);
    return ShoppingGroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-group-shopping-group-module.js.map