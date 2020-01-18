(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-summary-food-summary-module"],{

/***/ "./src/app/app-food/food-summary/food-summary.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-summary/food-summary.module.ts ***!
  \**************************************************************/
/*! exports provided: FoodSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSummaryPageModule", function() { return FoodSummaryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_summary_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-summary.page */ "./src/app/app-food/food-summary/food-summary.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_summary_page__WEBPACK_IMPORTED_MODULE_5__["FoodSummaryPage"]
    }
];
var FoodSummaryPageModule = /** @class */ (function () {
    function FoodSummaryPageModule() {
    }
    FoodSummaryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_summary_page__WEBPACK_IMPORTED_MODULE_5__["FoodSummaryPage"]]
        })
    ], FoodSummaryPageModule);
    return FoodSummaryPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-summary/food-summary.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-summary/food-summary.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Summary</ion-title>\n        </ion-toolbar>\n</ion-header>\n  <ion-content padding>\n\n\n\n  <h1 class=\"main-header6\">Order summary</h1>\n  <ion-card class=\"info-card\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of orderItems; let i = index\" lines=\"none\" class=\"ion-margin-top\" lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"item.image\"></ion-img>\n          </ion-thumbnail>\n          <ion-label  class=\"text-left\">\n            \n            <h3>{{ item.name }}</h3>\n            <p>Size: {{item.size}}</p>\n            <p>\n              Addon: <span *ngFor=\"let addOn of item.addOn;\">{{ addOn.name}}\t&nbsp;</span>\n            </p>\n            <!-- <ion-icon name=\"trash\" slot=\"end\" color=\"dark\" (click)=\"removeCartProduct(i) \" ></ion-icon> -->\n          </ion-label>\n          <h5  slot=\"end\" text-right >{{ item.price | currency:'USD':'symbol' }}</h5>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n            <ion-label  class=\"text-left\">\n                <h1 class=\"main-b-header8\">Total:</h1>\n\n            </ion-label>\n            <h5 class=\"margin-top-5\" slot=\"end\" text-right >{{ total | currency:'USD':'symbol' }}</h5>       \n            <!-- <span slot=\"end\">{{ total | currency:'USD':'symbol' }}</span> -->\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"ion-text-left\">\n            <ion-label  class=\"text-left\">\n                <h1 class=\"main-b-header8\">Payment:</h1>\n\n            </ion-label> \n            <h5 class=\"margin-top-5\" slot=\"end\" text-right >{{ paymentType}}</h5>            \n            <!-- <span slot=\"end\" text-right >{{ paymentType}}</span> -->\n          </ion-item>\n      </ion-list>\n  </ion-card>\n\n\n  <h1 class=\"main-header6\">Delivery to</h1>\n  <ion-card  class=\"info-card ion-padding-top ion-padding-bottom\"  >\n      <ion-item lines=\"none\">\n        <ion-label>\n                <h3>{{(address | async)?.label}}</h3>\n                <p>{{(address | async)?.fullname}}</p>\n                <p class=\"ion-text-wrap\" >{{(address | async)?.address}}</p>\n                <p>{{(address | async)?.phone}}</p>\n        </ion-label>\n      </ion-item>\n  </ion-card>\n\n  </ion-content>\n  <ion-footer>\n      <ion-toolbar>\n          <ion-button color=\"greengrab\" expand=\"full\" (click)=\"addOrder()\">Place order</ion-button>\n      </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/app-food/food-summary/food-summary.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-summary/food-summary.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6; }\n\nion-label {\n  padding-left: 15px; }\n\nion-thumbnail {\n  --size: 50px;\n  border-radius: 8px  !important;\n  background-color: #dddddd; }\n\nion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n.fixedLabel {\n  min-width: 100% !important;\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLXN1bW1hcnkvZm9vZC1zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFhLEVBQ2hCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksYUFBTztFQU1QLCtCQUE4QjtFQUM5QiwwQkFBeUIsRUFZNUI7O0FBcEJEO0lBZ0JRLCtCQUE4QixFQUdqQzs7QUFFTDtFQUNJLDJCQUEwQjtFQUMxQiwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vZC9mb29kLXN1bW1hcnkvZm9vZC1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cbmlvbi1sYWJlbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDUwcHg7XG4gICAgLy8gd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAvLyAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXG4gICAgLy8gLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyAvLyBtaW4taGVpZ2h0OiA4cmVtO1xuICAgIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gbWluLWhlaWdodDogNXJlbTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBpb24taW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDZyZW07ICAgIFxuICAgICAgICAvLyBtaW4td2lkdGg6IDhyZW07XG4gICAgfVxufVxuLmZpeGVkTGFiZWwge1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app-food/food-summary/food-summary.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-summary/food-summary.page.ts ***!
  \************************************************************/
/*! exports provided: FoodSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSummaryPage", function() { return FoodSummaryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var FoodSummaryPage = /** @class */ (function () {
    function FoodSummaryPage(userService, foodService, activatedRoute, navController, router, ionicComponentService) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.orderItems = [];
        this.total = 0;
        this.totalValue = 0;
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        this.paymentType = this.activatedRoute.snapshot.paramMap.get('paymentType');
        console.log("_____________addressId=" + this.addressId);
        console.log("paymentType=" + this.paymentType);
    }
    FoodSummaryPage.prototype.ngOnInit = function () {
        // get item in cart
        // get address detail
        this.address = this.userService.getAddressById(this.addressId);
        // convert payment code to readable 
        //this.userProfileId = this.userService.getUserId();
    };
    FoodSummaryPage.prototype.ionViewWillEnter = function () {
        this.getCartProduct();
        // this.totalVat = this.total + ]
    };
    FoodSummaryPage.prototype.getCartProduct = function () {
        // this.cartProducts = this.productService.getLocalCartProducts();
        var items = this.foodService.getCart();
        console.log("page not refresh__________________food-cart : items=" + items);
        var selected = {};
        this.totalValue = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            this.totalValue += obj.price;
        }
        // all item in shopping cart
        this.orderItems = items;
        console.log("..............Order items =" + JSON.stringify(this.orderItems));
        this.total = this.totalValue;
    };
    FoodSummaryPage.prototype.addOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // console.log("userProfileId="+this.userService.getUserId());
                console.log("_____call addAddress");
                this.ionicComponentService.presentLoading();
                this.foodService.placeOrder(this.addressId, this.paymentType, this.orderItems, this.total)
                    .then(function () {
                    //this.router.navigateByUrl('/home');
                    console.log("New item added.");
                    _this.ionicComponentService.dismissLoading();
                    _this.router.navigateByUrl('/food-complete');
                    //this.navController.goForward(`/person/${this.catId}?something=${encodeURI(somethingValue)}`);
                    //this.navController.goForward('/crud-item/${this.catId}');
                    //this.navController.navigateForward('/crud-item');
                }, function (error) {
                    console.log(error);
                    _this.ionicComponentService.presentToast(error, 3000);
                    _this.ionicComponentService.dismissLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    FoodSummaryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-summary',
            template: __webpack_require__(/*! ./food-summary.page.html */ "./src/app/app-food/food-summary/food-summary.page.html"),
            styles: [__webpack_require__(/*! ./food-summary.page.scss */ "./src/app/app-food/food-summary/food-summary.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], FoodSummaryPage);
    return FoodSummaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-summary-food-summary-module.js.map