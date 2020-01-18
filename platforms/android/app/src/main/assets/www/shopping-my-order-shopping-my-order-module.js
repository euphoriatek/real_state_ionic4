(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-my-order-shopping-my-order-module"],{

/***/ "./src/app/app-shopping/shopping-my-order/shopping-my-order.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order/shopping-my-order.module.ts ***!
  \****************************************************************************/
/*! exports provided: ShoppingMyOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingMyOrderPageModule", function() { return ShoppingMyOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_my_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-my-order.page */ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_my_order_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingMyOrderPage"]
    }
];
var ShoppingMyOrderPageModule = /** @class */ (function () {
    function ShoppingMyOrderPageModule() {
    }
    ShoppingMyOrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_my_order_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingMyOrderPage"]]
        })
    ], ShoppingMyOrderPageModule);
    return ShoppingMyOrderPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order/shopping-my-order.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border >\n                <ion-toolbar color=\"bluegrey\">\n                        <ion-buttons color=\"light\" slot=\"start\" >\n                            <ion-back-button></ion-back-button>\n                        </ion-buttons>\n                        <ion-title color=\"light\" class=\"main-header6\">My orders</ion-title>\n                        <ion-buttons slot=\"end\">\n                            <ion-button routerLink=\"/shopping-cart\" >\n                                <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                                <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                            </ion-button>\n                        </ion-buttons>\n                </ion-toolbar>\n            </ion-header>\n\n\n            <ion-content padding >\n                <!-- routerLink=\"/side-menu/shopping/tabs/tab4/shopping-my-order-detail/{{order.id}}\" -->\n                <ion-card  *ngFor=\"let order of myOrders | async\" class=\"info-card ion-margin ion-padding-top ion-padding-bottom\"  >\n                      <ion-item lines=\"none\">\n                              <ion-label>\n                                      <h3 class=\"main-b-header8\"><strong>OrderId# {{order.orderId}}</strong></h3>\n                                      <p>Ordered time: {{order.createdTime.toDate() | date: 'dd/MM/yyyy'}}</p>\n                                      <h3>payment type: {{order.paymentType}}</h3>\n                                      <ion-text color=\"black\"> <h3 >Total:{{order.totalPrice | currency}}</h3></ion-text>\n                              </ion-label>\n                              <ion-badge *ngIf=\"order.status === 'pending'\"   slot=\"end\"  color=\"primary\">{{order.status}}</ion-badge>\n                              <ion-badge *ngIf=\"order.status === 'delivering'\"  slot=\"start\"  color=\"warning\">{{order.status}}</ion-badge>\n                              <ion-badge *ngIf=\"order.status === 'complete'\"   slot=\"end\"  color=\"success\">{{order.status}}</ion-badge>\n                              <ion-badge *ngIf=\"order.status === 'cancel'\"  slot=\"end\"  color=\"meduim\">{{order.status}}</ion-badge>                \n                      </ion-item>\n              </ion-card>\n\n              <!-- <ion-card *ngFor=\"let order of myOrders | async\"  class=\"info-card ion-margin ion-padding ion-padding-top ion-padding-bottom padding-left-25\">\n                    <ion-text  color=\"dark\">\n                        <h1 class=\"main-b-header7\">OrderId# {{order.orderId}}</h1>\n                    </ion-text>\n                    <h1 class=\"main-header8 margin-top-0\">On: {{order.createdTime.toDate() | date:'medium'}}</h1>\n                    <h3>payment type: {{order.paymentType}}</h3>\n                    <ion-badge *ngIf=\"order.status === 'pending'\"    color=\"primary\"> {{orderStatus}}</ion-badge>\n                    <ion-badge *ngIf=\"order.status === 'delivering'\"   color=\"warning\"> {{orderStatus}}</ion-badge>\n                    <ion-badge  *ngIf=\"order.status === 'complete'\"   color=\"success\"> {{orderStatus}}</ion-badge>\n                    <ion-badge  *ngIf=\"order.status === 'cancel'\"   color=\"medium\"> {{orderStatus}}</ion-badge>\n            </ion-card> -->\n      </ion-content>\n      \n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order/shopping-my-order.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6\n; }\n\nion-icon {\n  color: #454545;\n  font-size: 30px; }\n\nion-badge.status {\n  height: 30px !important; }\n\nion-searchbar ion-icon {\n  font-size: 20px !important; }\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\nion-row ion-card img {\n    width: 100%; }\n\nion-col {\n  padding: 0px !important; }\n\n.card1-padding {\n  padding: 12px 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctbXktb3JkZXIvc2hvcHBpbmctbXktb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7Q0FBYSxFQUNoQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFJRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFDRDtFQUNJLDRCQUFhO0VBQ2IsOEJBQWUsRUFDbEI7O0FBQ0Q7RUFFUSx1QkFBcUI7RUFDekIsMEJBQXlCO0VBQ3pCLDJCQUEwQixFQUk3Qjs7QUFSRDtJQU1RLFlBQVUsRUFDYjs7QUFHTDtFQUNJLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLDhCQUE2QixFQUVoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaG9wcGluZy9zaG9wcGluZy1teS1vcmRlci9zaG9wcGluZy1teS1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjZcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5pb24tYmFkZ2Uuc3RhdHVze1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLy8tLWJhY2tncm91bmQgOiNGOUY5Rjk7XG59XG5pb24tc2VhcmNoYmFyIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufSBcbi50cmFuc3BhcmVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5pb24tcm93e1xuICAgIGlvbi1jYXJke1xuICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxufVxufVxuaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkMS1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDEycHggMTBweCAhaW1wb3J0YW50O1xuICAgIC8vbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-my-order/shopping-my-order.page.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingMyOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingMyOrderPage", function() { return ShoppingMyOrderPage; });
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





var ShoppingMyOrderPage = /** @class */ (function () {
    function ShoppingMyOrderPage(userService, shoppingService, activatedRoute, navController, router) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
        this.cart = this.shoppingService.getCart();
    }
    ShoppingMyOrderPage.prototype.ngOnInit = function () {
        //this.getPlace();
        this.myOrders = this.shoppingService.getMyOrders();
    };
    ShoppingMyOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-my-order',
            template: __webpack_require__(/*! ./shopping-my-order.page.html */ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.html"),
            styles: [__webpack_require__(/*! ./shopping-my-order.page.scss */ "./src/app/app-shopping/shopping-my-order/shopping-my-order.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingMyOrderPage);
    return ShoppingMyOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-my-order-shopping-my-order-module.js.map