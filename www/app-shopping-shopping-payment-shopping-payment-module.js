(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shopping-shopping-payment-shopping-payment-module"],{

/***/ "./src/app/app-shopping/shopping-payment/shopping-payment.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-payment/shopping-payment.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPaymentPageModule", function() { return ShoppingPaymentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_payment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-payment.page */ "./src/app/app-shopping/shopping-payment/shopping-payment.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_payment_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingPaymentPage"]
    }
];
var ShoppingPaymentPageModule = /** @class */ (function () {
    function ShoppingPaymentPageModule() {
    }
    ShoppingPaymentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_payment_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingPaymentPage"]]
        })
    ], ShoppingPaymentPageModule);
    return ShoppingPaymentPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-payment/shopping-payment.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-payment/shopping-payment.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n        <ion-toolbar color=\"bluegrey\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n                <ion-title color=\"light\" class=\"main-header6\">Payment</ion-title>\n        </ion-toolbar>\n      </ion-header>\n<ion-content padding>\n    \n    <ion-card class=\"info-card\">\n        <ion-list-header class=\"\">\n            <ion-label>Select payment type</ion-label>\n        </ion-list-header>\n        <ion-radio-group>\n                <div class=\"ion-padding-top ion-padding-bottom margin-top-15\" >\n                    <ion-item lines=\"none\">\n                        <ion-radio slot=\"start\" [value]=\"cc\"  mode=\"md\" color=\"bluegrey\" (ionSelect)=\"selectPayment('cc')\"></ion-radio>\n                        <ion-thumbnail slot=\"start\">\n                            <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/ionic4firebase-2c0e6.appspot.com/o/master_card_184.75750577367px_1226655_easyicon.net.png?alt=media&token=514ef90a-6d07-48cc-b126-99f7e1b0acac\"></ion-img>\n                        </ion-thumbnail>\n                        <ion-label>\n                                <h2 class=\"main-header5\">Credit card</h2>\n                        </ion-label>\n                      \n                    </ion-item>\n                </div>\n                \n                <div class=\"ion-padding-top ion-padding-bottom\"  >\n                    <ion-item lines=\"none\">\n                        <ion-radio slot=\"start\" [value]=\"paypal\"  mode=\"md\" color=\"bluegrey\" (ionSelect)=\"selectPayment('paypal')\"></ion-radio>\n                        <ion-thumbnail slot=\"start\">\n                            <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/ionic4firebase-2c0e6.appspot.com/o/paypal_184.75750577367px_1226641_easyicon.net.png?alt=media&token=d90c17b0-a24b-47d0-84c5-17133c41df8b\"></ion-img>\n                        </ion-thumbnail>\n                    <ion-label>\n                            <h2 class=\"main-header5\">Paypal</h2>\n                    </ion-label>\n                    \n                    </ion-item>\n                </div>         \n                <div class=\"ion-padding-top ion-padding-bottom \" >\n                        <ion-item lines=\"none\">\n                            <ion-radio slot=\"start\" [value]=\"bank\"  mode=\"md\" color=\"bluegrey\" (ionSelect)=\"selectPayment('bank')\"></ion-radio>\n                            <ion-thumbnail slot=\"start\">\n                                <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/ionic4firebase-2c0e6.appspot.com/o/bank_transfer_184.75750577367px_1226658_easyicon.net.png?alt=media&token=365376ab-9d1c-4405-b4a7-ca3704e9f0fa\"></ion-img>\n                            </ion-thumbnail>\n                            <ion-label>\n                                    <h2 class=\"main-header5\">Bank tranfer</h2>\n                            </ion-label>\n                          \n                        </ion-item>\n                    </div>                  \n                <div class=\"ion-padding-top ion-padding-bottom\"  >\n                    <ion-item lines=\"none\">\n                        <ion-radio slot=\"start\" [value]=\"cash\"  mode=\"md\" color=\"bluegrey\" (ionSelect)=\"selectPayment('cash')\" checked></ion-radio>\n                        <ion-thumbnail slot=\"start\">\n                                <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/ionic4firebase-2c0e6.appspot.com/o/bluepay_184.75750577367px_1226652_easyicon.net.png?alt=media&token=a8593936-3d42-4125-8794-1441cd9cc24f\"></ion-img>\n                            </ion-thumbnail>\n                        <ion-label>\n                                <h2 class=\"main-header5\">Cash on delivery</h2>\n                        </ion-label>\n                       \n                      \n                    </ion-item>\n                </div>      \n            </ion-radio-group>\n</ion-card>\n\n    <!-- <ion-button color=\"dark\" fill=\"outline\" expand=\"full\"  routerLink=\"/food-address-add\">Add address</ion-button> -->\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-button color=\"bluegrey\" expand=\"full\" (click)=\"gotoCheckout()\">Continue payment</ion-button>\n    </ion-toolbar>\n</ion-footer>\n  \n  "

/***/ }),

/***/ "./src/app/app-shopping/shopping-payment/shopping-payment.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-payment/shopping-payment.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6; }\n\nion-label {\n  padding-left: 15px; }\n\nion-thumbnail {\n  width: 36px !important;\n  height: 22px !important;\n  background-color: #eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctcGF5bWVudC9zaG9wcGluZy1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFhLEVBQ2hCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBRUksdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUt2QiwwQkFBeUIsRUFZNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctcGF5bWVudC9zaG9wcGluZy1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cbmlvbi1sYWJlbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgLy8gLS1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG5cbiAgICAvLyAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIC8vYm9yZGVyLXJhZGl1czogM3B4ICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG5cbiAgICAvLyAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIC8vIC8vIG1pbi1oZWlnaHQ6IDhyZW07XG4gICAgLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIGlvbi1pbWcge1xuICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweCAgIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA2cmVtOyAgICBcbiAgICAgICAgLy8gbWluLXdpZHRoOiA4cmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-payment/shopping-payment.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-payment/shopping-payment.page.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPaymentPage", function() { return ShoppingPaymentPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingPaymentPage = /** @class */ (function () {
    function ShoppingPaymentPage(userService, shoppingService, activatedRoute, navController, router) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.paymentType = "cc";
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        console.log("this addressId=" + this.addressId);
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    }
    ShoppingPaymentPage.prototype.ngOnInit = function () {
    };
    ShoppingPaymentPage.prototype.selectPayment = function (paymentType) {
        this.paymentType = paymentType;
    };
    ShoppingPaymentPage.prototype.gotoCheckout = function () {
        //this.router.navigateByUrl('/shopping-summary/'+this.addressId);
        console.log("call gotoCheckout");
        console.log("____getaddressId=" + this.addressId);
        console.log("____getpaymentType = " + this.paymentType);
        var link = ['/shopping-summary', this.addressId, this.paymentType];
        this.router.navigate(link);
    };
    ShoppingPaymentPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-payment',
            template: __webpack_require__(/*! ./shopping-payment.page.html */ "./src/app/app-shopping/shopping-payment/shopping-payment.page.html"),
            styles: [__webpack_require__(/*! ./shopping-payment.page.scss */ "./src/app/app-shopping/shopping-payment/shopping-payment.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingPaymentPage);
    return ShoppingPaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-shopping-shopping-payment-shopping-payment-module.js.map