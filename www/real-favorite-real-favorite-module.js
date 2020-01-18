(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-favorite-real-favorite-module"],{

/***/ "./src/app/app-real/real-favorite/real-favorite.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-real/real-favorite/real-favorite.module.ts ***!
  \****************************************************************/
/*! exports provided: RealFavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealFavoritePageModule", function() { return RealFavoritePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_favorite_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-favorite.page */ "./src/app/app-real/real-favorite/real-favorite.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _real_favorite_page__WEBPACK_IMPORTED_MODULE_5__["RealFavoritePage"]
    }
];
var RealFavoritePageModule = /** @class */ (function () {
    function RealFavoritePageModule() {
    }
    RealFavoritePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_favorite_page__WEBPACK_IMPORTED_MODULE_5__["RealFavoritePage"]]
        })
    ], RealFavoritePageModule);
    return RealFavoritePageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-favorite/real-favorite.page.html":
/*!****************************************************************!*\
  !*** ./src/app/app-real/real-favorite/real-favorite.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n        <ion-toolbar color=\"realgreen-invert\">\n                <ion-buttons  slot=\"start\" color=\"light\">\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search by Location, Area , State or Pin Code\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n                <ion-title color=\"realgreen\" class=\"main-b-header4\">Favorite</ion-title>\n            \n        </ion-toolbar>\n    </ion-header>\n\n<ion-content  no-padding>\n    <ion-list class=\"ion-margin-top\">\n            <ion-item-sliding *ngFor=\"let favorite of favorites | async\" class=\"ion-padding-top\"  #slidingItem>\n                <!-- routerLink=\"/side-menu/travel/tabs/tab3/travel-place-detail/{{favorite.placeId}}\" -->\n                    <ion-item   lines=\"none\" routerLink=\"/real-detail/{{favorite.itemId}}\" >\n                        <!-- <ion-avatar slot=\"start\">\n                            <ion-img [src]=\"favorite.image_header\"></ion-img>\n                        </ion-avatar> -->\n                        <ion-thumbnail slot=\"start\">\n                                <ion-img [src]=\"favorite.image_header\"></ion-img>\n                            </ion-thumbnail>\n                        <ion-label>\n                                <h2>{{favorite.name}}</h2>\n                                <!-- <p>{{favorite.short_title}}</p>\n                                <h3>{{favorite.price}}</h3> -->\n                            \n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option  (click)=\"deleteFavDialog(favorite.id, slidingItem)\">\n                                <ion-item-option>Delete</ion-item-option>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-real/real-favorite/real-favorite.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/app-real/real-favorite/real-favorite.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: 10px 16px 8px 0 !important;\n  width: 50px !important;\n  height: 50px !important; }\n\nion-thumbnail {\n  --size: 50px;\n  border-radius: 8px  !important;\n  background-color: #dddddd; }\n\nion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWZhdm9yaXRlL3JlYWwtZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQWtDO0VBQ2xDLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSxhQUFPO0VBTVAsK0JBQThCO0VBQzlCLDBCQUF5QixFQVk1Qjs7QUFwQkQ7SUFnQlEsK0JBQThCLEVBR2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLXJlYWwvcmVhbC1mYXZvcml0ZS9yZWFsLWZhdm9yaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luOiAxMHB4IDE2cHggOHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLXRodW1ibmFpbCB7XG4gICAgLS1zaXplOiA1MHB4O1xuICAgIC8vIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuXG4gICAgLy8gLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcblxuICAgIC8vIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gLy8gbWluLWhlaWdodDogOHJlbTtcbiAgICAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIC8vIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgaW9uLWltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA2cmVtOyAgICBcbiAgICAgICAgLy8gbWluLXdpZHRoOiA4cmVtO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-real/real-favorite/real-favorite.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-real/real-favorite/real-favorite.page.ts ***!
  \**************************************************************/
/*! exports provided: RealFavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealFavoritePage", function() { return RealFavoritePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
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





var RealFavoritePage = /** @class */ (function () {
    function RealFavoritePage(realestateService, activatedRoute, navController, router, alertController, ionicComponentService) {
        this.realestateService = realestateService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.ionicComponentService = ionicComponentService;
        this.viewType = "grid";
    }
    RealFavoritePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await this.checkAuth();
                    return [4 /*yield*/, this.getFavorites()];
                    case 1:
                        //await this.checkAuth();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealFavoritePage.prototype.getFavorites = function () {
        this.favorites = this.realestateService.getFavHouse();
    };
    RealFavoritePage.prototype.deleteFav = function (id) {
        // this.travelService.deleteFavorite(id);
    };
    RealFavoritePage.prototype.deleteFavDialog = function (itemId, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
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
                                            _this.realestateService.removeFavorite(itemId);
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
    RealFavoritePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-favorite',
            template: __webpack_require__(/*! ./real-favorite.page.html */ "./src/app/app-real/real-favorite/real-favorite.page.html"),
            styles: [__webpack_require__(/*! ./real-favorite.page.scss */ "./src/app/app-real/real-favorite/real-favorite.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_3__["RealestateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"]])
    ], RealFavoritePage);
    return RealFavoritePage;
}());



/***/ })

}]);
//# sourceMappingURL=real-favorite-real-favorite-module.js.map