(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shopping-shopping-cart-shopping-cart-module"],{

/***/ "./src/app/app-shopping/shopping-cart/shopping-cart.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-cart/shopping-cart.module.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart.page */ "./src/app/app-shopping/shopping-cart/shopping-cart.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartPage"]
    }
];
var ShoppingCartPageModule = /** @class */ (function () {
    function ShoppingCartPageModule() {
    }
    ShoppingCartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartPage"]]
        })
    ], ShoppingCartPageModule);
    return ShoppingCartPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-cart/shopping-cart.page.html":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-cart/shopping-cart.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"bluegrey\">\n          <ion-buttons color=\"light\" slot=\"start\" >\n              <ion-back-button></ion-back-button>\n          </ion-buttons>\n          <ion-title color=\"light\" class=\"main-header6\">Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n  <ion-content padding>\n    <div  *ngIf=\"selectedItems.length\">\n      <ion-list>\n        <ion-item-sliding  *ngFor=\"let item of selectedItems; let i = index\" lines=\"none\" class=\"ion-margin-top\" #slidingItem>\n            <ion-item lines=\"none\">\n                <ion-thumbnail slot=\"start\">\n                    <ion-img [src]=\"item.image\"></ion-img>\n                </ion-thumbnail>\n                <ion-label  class=\"text-left\">\n                  \n                  <h3>{{ item.name }}</h3>\n                  <p>Size: {{item.size}}</p>\n                  <p>Color: {{item.color}}</p>\n                  <!-- <ion-icon name=\"trash\" slot=\"end\" color=\"dark\" (click)=\"removeCartProduct(i) \" ></ion-icon> -->\n                </ion-label>\n                <h5  slot=\"end\" text-right >{{ item.price | currency:'USD':'symbol' }}</h5>\n              </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option (click)=\"removeCartProduct(i, slidingItem) \" >\n                <ion-icon slot=\"icon-only\" size=\"small\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    \n        <!-- <ion-item  class=\"ion-margin-top\" lines=\"none\">\n          Total: <span slot=\"end\">{{ total | currency:'USD':'symbol' }}</span>\n        </ion-item> -->\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-label  class=\"text-left\">\n              <h1 class=\"main-b-header8\">Total:</h1>\n          </ion-label>\n          <h5 class=\"margin-top-5\" slot=\"end\" text-right >{{ total | currency:'USD':'symbol' }}</h5>       \n      </ion-item>       \n      </ion-list>\n    </div>\n      \n    <div  *ngIf=\"!selectedItems.length\" text-center>\n      <div class=\"logo-box\">\n          <ion-icon class=\"notification pop-in\" name=\"ios-thunderstorm-outline\" color=\"ulightgrey\"  ></ion-icon>\n        </div>\n        <div class=\"ion-text-center\">\n          <ion-text color=\"ulightgrey\" class=\"ion-margin-bottom\">\n            <h1 class=\"main-header5\">Your shopping cart is empty</h1>\n          </ion-text>\n        </div>\n        <div>\n          <ion-button color=\"bluegrey\" fill=\"blank\" expand=\"full\"  routerLink=\"/side-menu/shopping/tabs/tab1\">Continue shopping</ion-button>\n        </div>\n    </div>\n  </ion-content>\n      \n  <ion-footer *ngIf=\"selectedItems.length\" >\n      <ion-toolbar>\n          <ion-button color=\"bluegrey\" expand=\"full\"  (click)=\"checkout()\" >Checkout</ion-button>\n          <ion-button color=\"dark\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/shopping/tabs/tab1\">Continue shopping</ion-button>\n      </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/app-shopping/shopping-cart/shopping-cart.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-cart/shopping-cart.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  --size: 50px;\n  border-radius: 8px  !important;\n  background-color: #dddddd; }\n  ion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n  .fixedLabel {\n  min-width: 100% !important;\n  max-width: 100% !important; }\n  .logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 20%; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .logo-box ion-icon.notification {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQU87RUFNUCwrQkFBOEI7RUFDOUIsMEJBQXlCLEVBWTVCO0VBcEJEO0lBZ0JRLCtCQUE4QixFQUdqQztFQUVMO0VBQ0ksMkJBQTBCO0VBQzFCLDJCQUEwQixFQUM3QjtFQUNEO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBdUJsQjtFQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFoQkw7SUFrQlEsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAgIC0tc2l6ZTogNTBweDtcbiAgICAvLyB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgICAvLyBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcblxuICAgIC8vIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG5cbiAgICAvLyAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIC8vIC8vIG1pbi1oZWlnaHQ6IDhyZW07XG4gICAgLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIGlvbi1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIG1heC13aWR0aDogNnJlbTsgICAgXG4gICAgICAgIC8vIG1pbi13aWR0aDogOHJlbTtcbiAgICB9XG59XG4uZml4ZWRMYWJlbCB7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubG9nby1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBpb24taWNvbi5ub3RpZmljYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-cart/shopping-cart.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shopping/shopping-cart/shopping-cart.page.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPage", function() { return ShoppingCartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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





var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage(shoppingService, userService, activatedRoute, navController, router, alertController) {
        this.shoppingService = shoppingService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.selectedItems = [];
        this.total = 0;
        this.totalValue = 0;
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
    }
    ShoppingCartPage.prototype.ngOnInit = function () {
    };
    ShoppingCartPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //this.userAuth =  await this.userService.getAuthState();
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //this.userAuth =  await this.userService.getAuthState();
                        _a.userAuth = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        _b.userId = _c.sent();
                        this.getCartProduct();
                        console.log("___this.userAuth=" + this.userAuth);
                        console.log("___this.userId=" + this.userId);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.removeCartProduct = function (index, slidingItem) {
        //this.productService.removeLocalCartProduct(product);
        slidingItem.close();
        console.log("removeCart");
        this.shoppingService.removeItemCart(index);
        // Recalling
        this.getCartProduct();
    };
    ShoppingCartPage.prototype.getCartProduct = function () {
        // this.cartProducts = this.productService.getLocalCartProducts();
        var items = this.shoppingService.getCart();
        console.log("page not refresh__________________food-cart : items=" + items);
        var selected = {};
        this.totalValue = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            this.totalValue += obj.price;
        }
        this.selectedItems = items;
        console.log("selected Addon=" + this.selectedItems);
        this.total = this.totalValue;
    };
    ShoppingCartPage.prototype.getCartSameProduct = function () {
        // this.cartProducts = this.productService.getLocalCartProducts();
        var items = this.shoppingService.getCart();
        //console.log("page not refresh__________________shopping-cart : items="+items);
        var selected = {};
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var obj = items_2[_i];
            if (selected[obj.itemId]) {
                selected[obj.itemId].count++;
            }
            else {
                selected[obj.itemId] = __assign({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (key) { return selected[key]; });
        console.log("selected Addon=" + this.selectedItems);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    ShoppingCartPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'No permission',
                            message: 'You have to signin first!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Login',
                                    handler: function () {
                                        console.log('Go to login page');
                                        _this.router.navigateByUrl('/side-menu/login?redirectUrl=shopping-address');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // checkout
    ShoppingCartPage.prototype.checkout = function () {
        //navigate to address page
        // check if user already logged in?
        if (!this.userAuth) {
            // error: not login 
            // show popup
            console.log("checkout()___userAuth = false");
            this.presentAlertConfirm();
        }
        else {
            // userAuth = true 
            console.log("checkout()___userAuth = true");
            this.router.navigateByUrl('/shopping-address');
        }
        //
    };
    ShoppingCartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.page.html */ "./src/app/app-shopping/shopping-cart/shopping-cart.page.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.page.scss */ "./src/app/app-shopping/shopping-cart/shopping-cart.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-shopping-shopping-cart-shopping-cart-module.js.map