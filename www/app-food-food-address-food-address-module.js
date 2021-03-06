(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-address-food-address-module"],{

/***/ "./src/app/app-food/food-address/food-address.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-address/food-address.module.ts ***!
  \**************************************************************/
/*! exports provided: FoodAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressPageModule", function() { return FoodAddressPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-address.page */ "./src/app/app-food/food-address/food-address.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_address_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressPage"]
    }
];
var FoodAddressPageModule = /** @class */ (function () {
    function FoodAddressPageModule() {
    }
    FoodAddressPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_address_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressPage"]]
        })
    ], FoodAddressPageModule);
    return FoodAddressPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-address/food-address.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-address/food-address.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <!-- <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons> -->\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Address</ion-title>\n        </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class=\"info-card\">\n        <ion-list-header class=\"\">\n            <ion-label>Select shipping address</ion-label>\n        </ion-list-header>\n        <ion-radio-group [(ngModel)]=\"checkedAddress\" >\n                    <div  *ngFor=\"let address of addresses | async\" class=\"ion-padding-top ion-padding-bottom\"  >\n                      <ion-item-sliding>\n                            <ion-item lines=\"none\">\n                                <ion-label>\n                                        <p>{{address.label}}</p>\n                                        <h3>{{address.fullname}}</h3>\n                                        <h3 class=\"ion-text-wrap\" >{{address.address}}</h3>\n                                        <h3>{{address.phone}}</h3>\n                                </ion-label>\n                                <!-- <div slot=\"end\" class=\"click-outside\"  (click)=\"editAddress(address.id)\" > <h4 class=\"main-header7\">change</h4></div> -->\n                                <!-- <ion-icon name=\"md-create\" slot=\"end\" color=\"dark\" (click)=\"editAddress(address.id)\" ></ion-icon>  -->\n                                    <ion-radio mode = \"md\" color=\"bluegrey\" slot=\"start\" [value]=\"address.id\"  (ionSelect)=\"selectAddress(i,address.id)\"></ion-radio>\n                            </ion-item>\n                            <ion-item-options side=\"end\">\n                              <ion-item-option color=\"bluegrey\"(click)=\"editAddress(address.id)\">Edit</ion-item-option>\n                            </ion-item-options>\n                          </ion-item-sliding>\n                    </div>\n              </ion-radio-group>\n</ion-card>\n    <ion-button *ngIf=\"userAuth\" color=\"dark\" fill=\"blank\" expand=\"full\"  routerLink=\"/food-address-add\">Add address</ion-button>\n</ion-content>\n\n<ion-footer>\n    <!-- <ion-toolbar>\n        <ion-button color=\"success\" expand=\"full\" (click)=\"gotoPayment()\">Continue payment</ion-button>\n    </ion-toolbar> -->\n    <ion-toolbar >\n        <ion-button *ngIf=\"userAuth\" color=\"greengrab\" expand=\"full\" (click)=\"gotoPayment()\">Continue payment</ion-button>\n        <ion-button color=\"greengrab\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/food/tabs/tab1\">Cancel</ion-button>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/app-food/food-address/food-address.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-address/food-address.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f6f6f6; }\n\nion-label {\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWFkZHJlc3MvZm9vZC1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFhLEVBQ2hCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLWZvb2QvZm9vZC1hZGRyZXNzL2Zvb2QtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5pb24tbGFiZWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-food/food-address/food-address.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-address/food-address.page.ts ***!
  \************************************************************/
/*! exports provided: FoodAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressPage", function() { return FoodAddressPage; });
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






var FoodAddressPage = /** @class */ (function () {
    function FoodAddressPage(userService, foodService, activatedRoute, navController, router, 
    //public alertController: AlertController,
    ionicComponentService) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.checkedAddress = false;
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        console.log("Get activatedRoute categoryId=" + this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
    }
    FoodAddressPage.prototype.ngOnInit = function () {
        this.ionicComponentService.presentTimeoutLoading(2000, true);
        //console.log("___userAuth after received="+this.userAuth);
    };
    FoodAddressPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkedAddress = false;
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        _a.userAuth = _b.sent();
                        this.addresses = this.userService.getAddressByUserId();
                        return [2 /*return*/];
                }
            });
        });
    };
    //   getSelectedTab(): void {
    //     this.activeTabName = this.tabs.getSelected();
    //     console.log("current tab name="+this.activeTabName)
    // }
    FoodAddressPage.prototype.getAddress = function () {
        // use async pipe //
        console.log("______getAddress()");
        this.addresses = this.userService.getAddressByUserId();
        // this.foodService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
        //   console.log(actionArray);
        //   this.places = actionArray
        // });
    };
    FoodAddressPage.prototype.selectAddress = function (index, addressId) {
        this.addressId = addressId;
    };
    FoodAddressPage.prototype.openTest = function (categoryId) {
        console.log("openTest" + categoryId);
    };
    FoodAddressPage.prototype.editAddress = function (addressId) {
        console.log("open editAddress" + addressId);
        this.router.navigateByUrl('/food-address-edit/' + addressId);
    };
    FoodAddressPage.prototype.gotoPayment = function () {
        if (this.checkedAddress) {
            this.router.navigateByUrl('/food-payment/' + this.addressId);
        }
        else {
            this.ionicComponentService.presentAlert("Please choose address");
        }
    };
    FoodAddressPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-address',
            template: __webpack_require__(/*! ./food-address.page.html */ "./src/app/app-food/food-address/food-address.page.html"),
            styles: [__webpack_require__(/*! ./food-address.page.scss */ "./src/app/app-food/food-address/food-address.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], FoodAddressPage);
    return FoodAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-address-food-address-module.js.map