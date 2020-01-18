(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-profile-food-profile-module"],{

/***/ "./src/app/app-food/food-profile/food-profile.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-profile/food-profile.module.ts ***!
  \**************************************************************/
/*! exports provided: FoodProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodProfilePageModule", function() { return FoodProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-profile.page */ "./src/app/app-food/food-profile/food-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_profile_page__WEBPACK_IMPORTED_MODULE_5__["FoodProfilePage"]
    }
];
var FoodProfilePageModule = /** @class */ (function () {
    function FoodProfilePageModule() {
    }
    FoodProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_profile_page__WEBPACK_IMPORTED_MODULE_5__["FoodProfilePage"]]
        })
    ], FoodProfilePageModule);
    return FoodProfilePageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-profile/food-profile.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-profile/food-profile.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Profile</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/food-cart\" >\n                        <ion-badge color=\"primary\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n<!-- <ion-card class=\"info-card-2\">\n    <ion-item style=\"padding:0px !important;\">\n        <ion-avatar slot=\"start\">\n          <img src=\"https://randomuser.me/api/portraits/men/18.jpg\">\n        </ion-avatar>\n        <ion-label>\n            <h3 class=\"main-header6\">{{(userDetail | async)?.firstname}}</h3>\n            <p class=\"main-b-header9\"  (click)=\"logout()\">LOGOUT</p>\n            <ion-button color=\"dark\" fill=\"none\"  (click)=\"logout()\">LOGOUT</ion-button>\n          </ion-label>\n    \n    </ion-item>\n\n</ion-card> -->\n<ion-card class=\"info-card-2 margin-top-0 margin-bottom-0\">\n        <div id=\"profile1-info\" class=\"test-class\" padding>\n            <img id=\"profile1-image\" class=\"pop-in\" src=\"https://randomuser.me/api/portraits/men/18.jpg\" />\n            <h3 id=\"profile1-name\">{{(userDetail | async)?.firstname}}</h3>\n            <!--<p>{{(profile2 | async)?.company}} &bull; {{(profile2 | async)?.position}}</p> -->\n            <p class=\"profile1-description\">{{(userDetail | async)?.email}}</p>\n            <ion-button size=\"small\" color=\"greengrab-invert\" (click)=\"logout()\">LOGOUT</ion-button>\n            <!-- <ion-button *ngIf=\"following\"  color=\"light\" (click)=\"follow()\">\n                <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n                Following\n            </ion-button> -->\n        </div>\n    </ion-card>\n\n<ion-card class=\"info-card-2\">\n    <ion-list>\n        <ion-list-header>\n            Account information\n          </ion-list-header>\n        <ion-item href=\"#\" routerLink=\"/side-menu/profile\">\n            <ion-label>Name: {{(userDetail | async)?.firstname}} </ion-label>\n          </ion-item>\n          <ion-item href=\"#\" routerLink=\"/side-menu/profile\">\n            <ion-label>Email: {{(userDetail | async)?.email}}</ion-label>\n          </ion-item>\n\n    </ion-list>\n</ion-card>\n\n\n<!--  -->\n<ion-card class=\"info-card-2\">\n    <ion-list>\n        <ion-list-header>\n            Detail\n          </ion-list-header>\n          <ion-item href=\"#\" routerLink=\"/side-menu/food/tabs/tab3\">\n            <ion-label>My orders</ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label>Delivery address</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Payment type</ion-label>\n            </ion-item>\n            <ion-item >\n                <ion-label>Change password</ion-label>\n              </ion-item>\n      </ion-list>\n</ion-card>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-food/food-profile/food-profile.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-profile/food-profile.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-color: #eee; }\n\nion-content {\n  --background: #f6f6f6; }\n\nion-label {\n  color: #999 !important; }\n\n#profile1-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 110px;\n  margin: 0 auto 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.1);\n  -o-border-image: initial;\n     border-image: initial; }\n\n#profile1-info {\n  width: 100%;\n  text-align: center; }\n\n#profile1-name {\n  color: #444;\n  font-size: 22px; }\n\n.profile1-description {\n  font-size: 15px;\n  color: #888; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLXByb2ZpbGUvZm9vZC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFVLHFCQUFlLEVBQVM7O0FBQ2xDO0VBQ0ksc0JBQWEsRUFDaEI7O0FBQ0Q7RUFDSSx1QkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxlQUFjO0VBRWQsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsdUNBQXFDO0VBQ3JDLHlCQUFxQjtLQUFyQixzQkFBcUIsRUFFdEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsWUFBVztFQUNYLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vZC9mb29kLXByb2ZpbGUvZm9vZC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWl0ZW17IC0tYm9yZGVyLWNvbG9yOiAjZWVlOyB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5pb24tbGFiZWx7XG4gICAgY29sb3I6Izk5OSAhaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUxLWltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LDAuMSk7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxMXB4IDIwcHggLTNweCByZ2JhKDE0MiwgMTM2LCAxNDYsIDAuNzUpO1xuICB9XG4gICNwcm9maWxlMS1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI3Byb2ZpbGUxLW5hbWUge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvZmlsZTEtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app-food/food-profile/food-profile.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-profile/food-profile.page.ts ***!
  \************************************************************/
/*! exports provided: FoodProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodProfilePage", function() { return FoodProfilePage; });
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






var FoodProfilePage = /** @class */ (function () {
    function FoodProfilePage(userService, foodService, navController, router, ionicComponentService) {
        this.userService = userService;
        this.foodService = foodService;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodProfilePage.prototype.ngOnInit = function () {
    };
    FoodProfilePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.userDetail = this.userService.getUserProfile();
                this.userService.getUserProfile().subscribe(function (res) {
                    console.log("Get user profile response=" + res);
                });
                return [2 /*return*/];
            });
        });
    };
    FoodProfilePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //this.ionicComponentService.presentLoading();
                    return [4 /*yield*/, this.userService.signoutUser()
                            .then(function () {
                            console.log("LOGOUT............");
                            //this.ionicComponentService.dismissLoading();
                            _this.ionicComponentService.presentToast("Logged out", 3000);
                            //this.router.navigateByUrl('/side-menu/login?redirectUrl=side-menu/food/tabs/tab1');
                            _this.router.navigateByUrl('/side-menu/food/tabs/tab1');
                            //this.nav.setRoot('AfterLoginPage');
                        }, function (error) {
                            var errorMessage = error.message;
                            console.log("ERROR:" + errorMessage);
                            //this.ionicComponentService.dismissLoading();
                            _this.ionicComponentService.presentToast(errorMessage, 3000);
                        })];
                    case 1:
                        //this.ionicComponentService.presentLoading();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-profile',
            template: __webpack_require__(/*! ./food-profile.page.html */ "./src/app/app-food/food-profile/food-profile.page.html"),
            styles: [__webpack_require__(/*! ./food-profile.page.scss */ "./src/app/app-food/food-profile/food-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], FoodProfilePage);
    return FoodProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=food-profile-food-profile-module.js.map