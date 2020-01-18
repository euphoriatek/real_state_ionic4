(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-wishlist-shopping-wishlist-module"],{

/***/ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-wishlist/shopping-wishlist.module.ts ***!
  \****************************************************************************/
/*! exports provided: ShoppingWishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingWishlistPageModule", function() { return ShoppingWishlistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_wishlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-wishlist.page */ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_wishlist_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingWishlistPage"]
    }
];
var ShoppingWishlistPageModule = /** @class */ (function () {
    function ShoppingWishlistPageModule() {
    }
    ShoppingWishlistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_wishlist_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingWishlistPage"]]
        })
    ], ShoppingWishlistPageModule);
    return ShoppingWishlistPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border >\n        <ion-toolbar color=\"bluegrey\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n                <ion-title color=\"light\" class=\"main-header6\">Wishlist</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/shopping-cart\" >\n                        <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n<ion-content>\n\n<div *ngIf=\"!wishlists\">\n    <div class=\"logo-box\">\n        <ion-icon class=\"notification pop-in\" name=\"md-checkmark-circle-outline\" color=\"light\"  ></ion-icon>\n    </div>\n\n    <div class=\"ion-text-center\">\n        <ion-text color=\"grey\" class=\"ion-margin-bottom\">\n        <h1 class=\"main-header4\">Your order has been completed.</h1>\n        </ion-text>\n    </div>\n\n</div>\n<ion-list class=\"ion-margin-top\">\n        <ion-item-sliding *ngFor=\"let list of wishlists | async\" class=\"ion-padding-top\"  #slidingItem>\n                <ion-item   lines=\"none\" routerLink=\"/shopping-detail/{{list.placeId}}\" > \n                    <ion-thumbnail slot=\"start\">\n                            <ion-img [src]=\"list.image\"></ion-img>\n                        </ion-thumbnail>\n                    <ion-label>\n                            <h2>{{list.name}}</h2>\n                            <p>{{list.short_title}}</p>\n                            <h3>{{list.price}}</h3>\n                        \n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option  (click)=\"deleteFavDialog(list.id, slidingItem)\">\n                            <ion-item-option>Delete</ion-item-option>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n</ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 20%; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .logo-box ion-icon.notification {\n    font-size: 100px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  ion-thumbnail {\n  --size: 50px;\n  border-radius: 8px  !important;\n  background-color: #dddddd; }\n  ion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctd2lzaGxpc3Qvc2hvcHBpbmctd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBdUJsQjtFQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFoQkw7SUFrQlEsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUdsQixPQUFNO0lBQ04sVUFBUztJQUNULFNBQVE7SUFDUixRQUFPO0lBQ1AsYUFBWSxFQUNmO0VBR0w7RUFDSSxhQUFPO0VBTVAsK0JBQThCO0VBQzlCLDBCQUF5QixFQVk1QjtFQXBCRDtJQWdCUSwrQkFBOEIsRUFHakMiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctd2lzaGxpc3Qvc2hvcHBpbmctd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgaW9uLWljb24ubm90aWZpY2F0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyB3aWR0aDogMTQwcHg7XG4gICAgICAgIC8vIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gICAgLS1zaXplOiA1MHB4O1xuICAgIC8vIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuXG4gICAgLy8gLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcblxuICAgIC8vIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gLy8gbWluLWhlaWdodDogOHJlbTtcbiAgICAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIC8vIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgaW9uLWltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA2cmVtOyAgICBcbiAgICAgICAgLy8gbWluLXdpZHRoOiA4cmVtO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingWishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingWishlistPage", function() { return ShoppingWishlistPage; });
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




var ShoppingWishlistPage = /** @class */ (function () {
    function ShoppingWishlistPage(shoppingService, 
    // public userService: UserService,
    activatedRoute, navController, router, alertController) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.viewType = "grid";
        //public wishlists: any[];
        // ******** for Cart ***********//
        this.cart = [];
    }
    ShoppingWishlistPage.prototype.ngOnInit = function () {
        //await this.checkAuth();
        console.log(">>>>>>>>> call getFavorite");
        this.wishlists = this.shoppingService.getWishlist();
        this.cart = this.shoppingService.getCart();
    };
    // async checkAuth()  {
    //   const user = await this.userService.isLoggedIn();
    //   if (user) {
    //     // do something
    //     //this.userId = await user.uid;
    //     console.log("********** FAVORITE ="+await user.uid);
    //     console.log("*********** YES USER already logged in")
    //     this.userAuth = true;
    //     this.userId = user.uid;
    //   } else {
    //     this.userAuth = false;
    //     console.log("*************NO");
    //   }
    // }
    ShoppingWishlistPage.prototype.getwishlists = function () {
        console.log(">>>>>>>>> call getFavorite");
        this.wishlists = this.shoppingService.getWishlist();
        // this.travelService.getFavPlace().subscribe(res => {
        //   console.log("**************Get Favorite response="+res);
        //   this.wishlists = res
        // });
    };
    ShoppingWishlistPage.prototype.deleteFav = function (id) {
        // this.travelService.deleteFavorite(id);
    };
    ShoppingWishlistPage.prototype.deleteFavDialog = function (placeId, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Sliding not working after updating an element in array  https://github.com/ionic-team/ionic/issues/15486
                        // Closing slidingItem
                        slidingItem.close();
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Do you want to <strong>delete</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Delete',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            //this.shoppingService.removeFavorite(placeId);
                                            // removeFavorite(
                                            //   placeId: string, 
                                            //   userId: string
                                            // )
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
    ShoppingWishlistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-wishlist',
            template: __webpack_require__(/*! ./shopping-wishlist.page.html */ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.html"),
            styles: [__webpack_require__(/*! ./shopping-wishlist.page.scss */ "./src/app/app-shopping/shopping-wishlist/shopping-wishlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ShoppingWishlistPage);
    return ShoppingWishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-wishlist-shopping-wishlist-module.js.map