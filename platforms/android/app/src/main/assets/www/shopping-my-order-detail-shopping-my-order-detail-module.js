(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-my-order-detail-shopping-my-order-detail-module"],{

/***/ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ShoppingMyOrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingMyOrderDetailPageModule", function() { return ShoppingMyOrderDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_my_order_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-my-order-detail.page */ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_my_order_detail_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingMyOrderDetailPage"]
    }
];
var ShoppingMyOrderDetailPageModule = /** @class */ (function () {
    function ShoppingMyOrderDetailPageModule() {
    }
    ShoppingMyOrderDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_my_order_detail_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingMyOrderDetailPage"]]
        })
    ], ShoppingMyOrderDetailPageModule);
    return ShoppingMyOrderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.html":
/*!******************************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n  <ion-toolbar color=\"bluegrey\">\n          <ion-buttons color=\"light\" slot=\"start\" >\n                  <ion-back-button></ion-back-button>\n              </ion-buttons>\n          <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n        <ion-title color=\"\" class=\"main-header6\">Order detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n\n<ion-card  class=\"info-card ion-margin ion-padding ion-padding-top ion-padding-bottom padding-left-25\">\n  <ion-text  color=\"dark\">\n      <h1 class=\"main-b-header7\">OrderId#  {{(orderDetail | async)?.orderId}}</h1>\n  </ion-text>\n  <h1 class=\"main-header8 margin-top-0\">On: {{(orderDetail | async)?.createdTime.toDate() | date:'medium'}}</h1>\n\n  <ion-badge *ngIf=\"(orderDetail | async)?.status === 'pending'\"    color=\"primary\"> {{orderStatus}}</ion-badge>\n  <ion-badge *ngIf=\"(orderDetail | async)?.status === 'delivering'\"   color=\"warning\"> {{orderStatus}}</ion-badge>\n  <ion-badge *ngIf=\"(orderDetail | async)?.status === 'complete'\"    color=\"success\"> {{orderStatus}}</ion-badge>\n  <ion-badge *ngIf=\"(orderDetail | async)?.status === 'cancel'\"    color=\"medium\"> {{orderStatus}}</ion-badge>\n\n</ion-card>\n\n\n<ion-card class=\"info-card\">\n<ion-list>\n    <ion-item *ngFor=\"let item of orderItems; let i = index\" lines=\"none\" class=\"ion-margin-top\" lines=\"none\">\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"item.image\"></ion-img>\n            </ion-thumbnail>\n            <ion-label  class=\"text-left\">\n            \n            <h3>{{ item.name }}</h3>\n            <p>Size: {{item.size}}</p>\n            <p>Color: {{item.color}}</p>\n            <!-- <p>\n                Addon: <span *ngFor=\"let addOn of item.addOn;\">{{ addOn.name}}&nbsp;</span>\n            </p> -->\n            </ion-label>\n            <h5  slot=\"end\" text-right >{{ item.price | currency:'USD':'symbol' }}</h5>\n    </ion-item>\n\n  <ion-item lines=\"none\" class=\"ion-margin-top\">\n      <ion-label  class=\"text-left\">\n          <h1 class=\"main-b-header8\">Total:</h1>\n      </ion-label>\n      <h5 class=\"margin-top-5\" slot=\"end\" text-right >{{(orderDetail | async)?.totalPrice  | currency:'USD':'symbol'}}</h5>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"ion-text-left\">\n      <ion-label  class=\"text-left\">\n          <h1 class=\"main-b-header8\">Payment type:</h1>\n      </ion-label>    \n      <h5 class=\"margin-top-5\" slot=\"end\" text-right >{{(orderDetail | async)?.paymentType}}</h5>       \n    </ion-item>\n</ion-list>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6; }\n\nion-thumbnail {\n  --size: 50px;\n  border-radius: 8px  !important;\n  background-color: #dddddd; }\n\nion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctbXktb3JkZXItZGV0YWlsL3Nob3BwaW5nLW15LW9yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBYSxFQUNoQjs7QUFDRDtFQUNJLGFBQU87RUFNUCwrQkFBOEI7RUFDOUIsMEJBQXlCLEVBWTVCOztBQXBCRDtJQWdCUSwrQkFBOEIsRUFHakMiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctbXktb3JkZXItZGV0YWlsL3Nob3BwaW5nLW15LW9yZGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDUwcHg7XG4gICAgLy8gd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAvLyAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXG4gICAgLy8gLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyAvLyBtaW4taGVpZ2h0OiA4cmVtO1xuICAgIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gbWluLWhlaWdodDogNXJlbTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBpb24taW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDZyZW07ICAgIFxuICAgICAgICAvLyBtaW4td2lkdGg6IDhyZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.ts ***!
  \****************************************************************************************/
/*! exports provided: ShoppingMyOrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingMyOrderDetailPage", function() { return ShoppingMyOrderDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingMyOrderDetailPage = /** @class */ (function () {
    function ShoppingMyOrderDetailPage(userService, shoppingService, activatedRoute, navController, router, ionicComponentService) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.orderItems = [];
        this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
        console.log("Get activatedRoute orderId=" + this.activatedRoute.snapshot.paramMap.get('orderId'));
        console.log(this.router.url, "Current URL");
        //this.cart = this.foodService.getCart();
    }
    ShoppingMyOrderDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ionicComponentService.presentLoading();
        this.orderDetail = this.shoppingService.getOrderDetail(this.orderId);
        //********* get order items *********/
        this.shoppingService.getOrderDetail(this.orderId).subscribe(function (res) {
            console.log("1 res.orderItems" + res.orderItems);
            console.log("res.orderItems" + JSON.parse(res.orderItems));
            _this.orderItems = JSON.stringify(res.orderItems);
            _this.orderStatus = res.status;
            console.log("orederDetail=" + _this.orderItems);
            _this.ionicComponentService.dismissLoading();
        });
        //********* get shipping address *********/
    };
    ShoppingMyOrderDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-my-order-detail',
            template: __webpack_require__(/*! ./shopping-my-order-detail.page.html */ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.html"),
            styles: [__webpack_require__(/*! ./shopping-my-order-detail.page.scss */ "./src/app/app-shopping/shopping-my-order-detail/shopping-my-order-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], ShoppingMyOrderDetailPage);
    return ShoppingMyOrderDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-my-order-detail-shopping-my-order-detail-module.js.map