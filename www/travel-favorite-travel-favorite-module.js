(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-favorite-travel-favorite-module"],{

/***/ "./src/app/app-travel/travel-favorite/travel-favorite.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-favorite/travel-favorite.module.ts ***!
  \**********************************************************************/
/*! exports provided: TravelFavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelFavoritePageModule", function() { return TravelFavoritePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_favorite_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-favorite.page */ "./src/app/app-travel/travel-favorite/travel-favorite.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_favorite_page__WEBPACK_IMPORTED_MODULE_5__["TravelFavoritePage"]
    }
];
var TravelFavoritePageModule = /** @class */ (function () {
    function TravelFavoritePageModule() {
    }
    TravelFavoritePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_favorite_page__WEBPACK_IMPORTED_MODULE_5__["TravelFavoritePage"]]
        })
    ], TravelFavoritePageModule);
    return TravelFavoritePageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-favorite/travel-favorite.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-favorite/travel-favorite.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"bar-header\" mode=\"ios\"> \n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons> -->\n        <ion-title  class=\"main-header4\">Favorite</ion-title>\n    </ion-toolbar>\n    <!-- <ion-item lines=\"none\">\n        <ion-label>\n            <h1 class=\"travel_header1\">Favorites</h1>\n        </ion-label>\n    </ion-item>     -->\n</ion-header>\n\n\n\n\n<ion-content  no-padding>\n\n<!-- <div *ngIf=\"!favorites\">\n    <div class=\"icon-box\">\n        <ion-icon name=\"md-notifications\" color=\"light\" ></ion-icon>\n    </div>\n    <div>\n        <ion-text color=\"light\">\n            <h1 text-center class=\"travel_header2\">Sorry, not found.</h1>\n        </ion-text>\n    </div>\n</div> -->\n<ion-list class=\"ion-margin-top\">\n        <ion-item-sliding *ngFor=\"let favorite of favorites | async\" class=\"ion-padding-top\"  #slidingItem>\n            <!-- routerLink=\"/side-menu/travel/tabs/tab3/travel-place-detail/{{favorite.placeId}}\" -->\n                <ion-item   lines=\"none\" routerLink=\"/travel-place-detail/{{favorite.placeId}}\" >\n                    <!-- <ion-avatar slot=\"start\">\n                        <ion-img [src]=\"favorite.image_header\"></ion-img>\n                    </ion-avatar> -->\n                    <ion-thumbnail slot=\"start\">\n                            <ion-img [src]=\"favorite.image_header\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-label>\n                            <h2>{{favorite.name}}</h2>\n                        \n                            <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < favorite.rating ? 'star' : 'star-outline'\">\n                            </ion-icon>\n                          </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option  (click)=\"deleteFavDialog(favorite.id, slidingItem)\">\n                            <ion-item-option>Delete</ion-item-option>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n</ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-favorite/travel-favorite.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-favorite/travel-favorite.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-box {\n  width: 100%;\n  height: 120px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .icon-box ion-icon {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  ion-thumbnail {\n  --size: 50px;\n  margin-bottom: 15px;\n  border-radius: 8px  !important;\n  background-color: #dddddd;\n  min-width: 6rem;\n  min-height: 5rem; }\n  ion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1mYXZvcml0ZS90cmF2ZWwtZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQVluQjtFQWpCRDtJQU9RLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGNBQWE7SUFDYixPQUFNO0lBQ04sVUFBUztJQUNULFNBQVE7SUFDUixRQUFPO0lBQ1AsYUFBWSxFQUNmO0VBRUw7RUFDSSxhQUFPO0VBSVAsb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QiwwQkFBeUI7RUFHekIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFPbkI7RUFsQkQ7SUFjUSwrQkFBOEIsRUFHakMiLCJmaWxlIjoic3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1mYXZvcml0ZS90cmF2ZWwtZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaWNvbi1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDUwcHg7XG4gICAgLy8gd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxuICAgIC8vIG1pbi1oZWlnaHQ6IDhyZW07XG4gICAgbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIGlvbi1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIG1heC13aWR0aDogNnJlbTsgICAgXG4gICAgICAgIC8vIG1pbi13aWR0aDogOHJlbTtcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-travel/travel-favorite/travel-favorite.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-travel/travel-favorite/travel-favorite.page.ts ***!
  \********************************************************************/
/*! exports provided: TravelFavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelFavoritePage", function() { return TravelFavoritePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
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




var TravelFavoritePage = /** @class */ (function () {
    function TravelFavoritePage(travelService, 
    // public userService: UserService,
    activatedRoute, navController, router, alertController) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.viewType = "grid";
    }
    TravelFavoritePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFavorites()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelFavoritePage.prototype.getFavorites = function () {
        console.log(">>>>>>>>> call getFavorite");
        this.favorites = this.travelService.getFavPlace();
    };
    TravelFavoritePage.prototype.deleteFav = function (id) {
        // this.travelService.deleteFavorite(id);
    };
    TravelFavoritePage.prototype.deleteFavDialog = function (placeId, slidingItem) {
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
                                            _this.travelService.removeFavorite(placeId);
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
    TravelFavoritePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-favorite',
            template: __webpack_require__(/*! ./travel-favorite.page.html */ "./src/app/app-travel/travel-favorite/travel-favorite.page.html"),
            styles: [__webpack_require__(/*! ./travel-favorite.page.scss */ "./src/app/app-travel/travel-favorite/travel-favorite.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], TravelFavoritePage);
    return TravelFavoritePage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-favorite-travel-favorite-module.js.map