(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-myorder-food-myorder-module"],{

/***/ "./src/app/app-food/food-myorder/food-myorder.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-myorder/food-myorder.module.ts ***!
  \**************************************************************/
/*! exports provided: FoodMyorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMyorderPageModule", function() { return FoodMyorderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_myorder_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-myorder.page */ "./src/app/app-food/food-myorder/food-myorder.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_myorder_page__WEBPACK_IMPORTED_MODULE_5__["FoodMyorderPage"]
    }
];
var FoodMyorderPageModule = /** @class */ (function () {
    function FoodMyorderPageModule() {
    }
    FoodMyorderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_myorder_page__WEBPACK_IMPORTED_MODULE_5__["FoodMyorderPage"]]
        })
    ], FoodMyorderPageModule);
    return FoodMyorderPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-myorder/food-myorder.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-myorder/food-myorder.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">My orders</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/food-cart\" >\n                        <ion-badge color=\"primary\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n     \n</ion-header>\n\n\n<ion-content padding >\n\n          <ion-card  *ngFor=\"let order of myOrders | async\" class=\"info-card ion-margin ion-padding-top ion-padding-bottom\"  >\n                <ion-item lines=\"none\" routerLink=\"/side-menu/food/tabs/tab3/food-myorder-detail/{{order.id}}\">\n                        <ion-label>\n                                <h3><strong>OrderId# {{order.orderId}}</strong></h3>\n                                <p>Ordered time: {{order.createdTime.toDate() | date: 'dd/MM/yyyy'}}</p>\n                                <h3>payment type: {{order.paymentType}}</h3>\n                                <ion-text color=\"black\"> <h3>Total:{{order.totalPrice | currency}}</h3></ion-text>\n                        </ion-label>\n                        \n                        <ion-badge *ngIf=\"order.status === 'pending'\"   slot=\"end\"  color=\"primary\">{{order.status}}</ion-badge>\n                        <ion-badge *ngIf=\"order.status === 'delivering'\"  slot=\"start\"  color=\"warning\">{{order.status}}</ion-badge>\n                        <ion-badge *ngIf=\"order.status === 'complete'\"   slot=\"end\"  color=\"success\">{{order.status}}</ion-badge>\n                        <ion-badge *ngIf=\"order.status === 'cancel'\"  slot=\"end\"  color=\"meduim\">{{order.status}}</ion-badge>\n                </ion-item>\n        </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-food/food-myorder/food-myorder.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-myorder/food-myorder.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6\n; }\n\nion-icon {\n  color: #454545;\n  font-size: 30px; }\n\nion-badge {\n  height: 20px !important; }\n\nion-searchbar ion-icon {\n  font-size: 20px !important; }\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\nion-row ion-card img {\n    width: 100%; }\n\nion-col {\n  padding: 0px !important; }\n\n.card1-padding {\n  padding: 12px 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLW15b3JkZXIvZm9vZC1teW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0NBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSx3QkFBdUIsRUFDMUI7O0FBSUQ7RUFDSSwyQkFBMEIsRUFDN0I7O0FBQ0Q7RUFDSSw0QkFBYTtFQUNiLDhCQUFlLEVBQ2xCOztBQUNEO0VBRVEsdUJBQXFCO0VBQ3pCLDBCQUF5QjtFQUN6QiwyQkFBMEIsRUFJN0I7O0FBUkQ7SUFNUSxZQUFVLEVBQ2I7O0FBR0w7RUFDSSx3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSw4QkFBNkIsRUFFaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vZC9mb29kLW15b3JkZXIvZm9vZC1teW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNlxufVxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi1iYWRnZXtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIC8vLS1iYWNrZ3JvdW5kIDojRjlGOUY5O1xufVxuaW9uLXNlYXJjaGJhciBpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn0gXG4udHJhbnNwYXJlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuaW9uLXJvd3tcbiAgICBpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cbn1cbmlvbi1jb2x7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZDEtcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggIWltcG9ydGFudDtcbiAgICAvL21hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app-food/food-myorder/food-myorder.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-myorder/food-myorder.page.ts ***!
  \************************************************************/
/*! exports provided: FoodMyorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMyorderPage", function() { return FoodMyorderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodMyorderPage = /** @class */ (function () {
    function FoodMyorderPage(userService, foodService, activatedRoute, navController, router) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.viewType = "";
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
        this.cart = this.foodService.getCart();
    }
    FoodMyorderPage.prototype.ngOnInit = function () {
        //this.getPlace();
        this.myOrders = this.foodService.getMyOrders();
    };
    FoodMyorderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-myorder',
            template: __webpack_require__(/*! ./food-myorder.page.html */ "./src/app/app-food/food-myorder/food-myorder.page.html"),
            styles: [__webpack_require__(/*! ./food-myorder.page.scss */ "./src/app/app-food/food-myorder/food-myorder.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FoodMyorderPage);
    return FoodMyorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=food-myorder-food-myorder-module.js.map