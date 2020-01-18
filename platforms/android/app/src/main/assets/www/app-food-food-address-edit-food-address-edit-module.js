(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-address-edit-food-address-edit-module"],{

/***/ "./src/app/app-food/food-address-edit/food-address-edit.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-food/food-address-edit/food-address-edit.module.ts ***!
  \************************************************************************/
/*! exports provided: FoodAddressEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressEditPageModule", function() { return FoodAddressEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_address_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-address-edit.page */ "./src/app/app-food/food-address-edit/food-address-edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_address_edit_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressEditPage"]
    }
];
var FoodAddressEditPageModule = /** @class */ (function () {
    function FoodAddressEditPageModule() {
    }
    FoodAddressEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_address_edit_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressEditPage"]]
        })
    ], FoodAddressEditPageModule);
    return FoodAddressEditPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-address-edit/food-address-edit.page.html":
/*!************************************************************************!*\
  !*** ./src/app/app-food/food-address-edit/food-address-edit.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Edit address</ion-title>\n\n        </ion-toolbar>\n</ion-header>\n      \n      <ion-content no-padding>\n     \n          <div class=\"ion-margin ion-padding-top\">\n       \n              <form [formGroup]=\"addressForm\" novalidate>\n                  <ion-list lines=\"\">   \n                      <ion-item>\n                        <ion-label position=\"stacked\">Address label</ion-label>\n                        <ion-input  type=\"text\"  formControlName=\"label\" ></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fullname</ion-label>\n                        <ion-input  type=\"text\"  formControlName=\"fullname\"  ></ion-input>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label position=\"stacked\">Phone number</ion-label>\n                          <ion-input  type=\"number\"  formControlName=\"phone\"  ></ion-input>\n                      </ion-item>             \n                      <ion-item>\n                          <ion-label position=\"stacked\">Address</ion-label>\n                          <ion-textarea formControlName=\"address\"   rows = \"6\" auto-grow=true></ion-textarea>\n                      </ion-item>\n                    </ion-list>\n              </form>\n      \n                <!-- Error meassage -->\n                <p color=\"danger\" *ngIf=\"!addressForm.controls.label.valid  && addressForm.controls.label.touched \">\n                        <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Address label field must be at least 3 characters long!</ion-text>  \n                      </p>\n                      <p color=\"danger\" *ngIf=\"!addressForm.controls.fullname.valid  && addressForm.controls.fullname.touched\" >\n                              <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Fullname field must be at least 3 characters long!</ion-text>  \n                      </p>\n                      <p color=\"danger\" *ngIf=\"!addressForm.controls.phone.valid  && addressForm.controls.phone.touched \">\n                              <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Phone number field must be at least 3 characters long!</ion-text>  \n                      </p>\n                      <p color=\"danger\" *ngIf=\"!addressForm.controls.address.valid  && addressForm.controls.address.touched\">\n                              <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Address field must be at least 3 characters long!</ion-text>  \n                      </p>\n            \n      \n            <!-- <ion-button mode=\"ios\" color=\"orange\" expand=\"block\" fill=\"outline\" class=\"ion-margin-top\">\n                Signinewwewe\n            </ion-button> -->\n    \n          </div>\n      </ion-content>\n      <ion-footer  >\n          <ion-toolbar>\n              <ion-button color=\"greengrab\" expand=\"full\" [disabled]=\"!addressForm.valid\"   (click)=\"editAddress()\" >Update</ion-button>\n              <ion-button color=\"danger\" expand=\"full\" fill=\"blank\" (click)=\"delAddress()\">Delete</ion-button>\n              <!-- <input  #myControl [value]=\"(address | async)?.id\" type=\"hidden\" />\n              <ion-button color=\"warning\" expand=\"full\" fill=\"blank\" (click)=\"deleteAddress(myControl.value)\">Delete</ion-button> -->\n          </ion-toolbar>\n      </ion-footer>\n    "

/***/ }),

/***/ "./src/app/app-food/food-address-edit/food-address-edit.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/app-food/food-address-edit/food-address-edit.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb29kL2Zvb2QtYWRkcmVzcy1lZGl0L2Zvb2QtYWRkcmVzcy1lZGl0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-food/food-address-edit/food-address-edit.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-food/food-address-edit/food-address-edit.page.ts ***!
  \**********************************************************************/
/*! exports provided: FoodAddressEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressEditPage", function() { return FoodAddressEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
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







var FoodAddressEditPage = /** @class */ (function () {
    function FoodAddressEditPage(userService, foodService, activatedRoute, navController, router, 
    //public alertController: AlertController,
    ionicComponentService, formBuilder) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.formBuilder = formBuilder;
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        this.addressForm = this.formBuilder.group({
            label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    FoodAddressEditPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.address = this.userService.getAddressById(this.addressId);
        this.userService.getAddressById(this.addressId).subscribe(function (res) {
            console.log("----->actionArray=" + res);
            console.log("Get user profile response=" + res);
            console.log("----->userDetailSub=" + res.firstname);
            console.log("----->userDetailSub=" + res.lastname);
            _this.addressForm.get('label').setValue(res.label);
            _this.addressForm.get('fullname').setValue(res.fullname);
            _this.addressForm.get('phone').setValue(res.phone);
            _this.addressForm.get('address').setValue(res.address);
            //this.addressArray = res;
        });
    };
    // openMap(categoryId) {
    //   console.log("openMap");
    //   this.modalController.create({
    //     component: TravelMapPage,
    //     componentProps: {
    //       categoryId: categoryId
    //     }
    //   }).then(modal => {
    //     modal.present();
    //   });
    // }
    FoodAddressEditPage.prototype.editAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log("userProfileId="+this.userService.getUserId());
                        console.log("_____call addAddress");
                        if (!!this.addressForm.valid) return [3 /*break*/, 1];
                        console.log(this.addressForm.value);
                        console.log("____addressForm invalid ");
                        return [3 /*break*/, 3];
                    case 1:
                        console.log(this.addressForm.value);
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.userService.editAddress(this.addressId, this.addressForm.value.label, this.addressForm.value.fullname, this.addressForm.value.phone, this.addressForm.value.address)
                                .then(function () {
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/food-address');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentToast(errorMessage, 4000);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FoodAddressEditPage.prototype.delAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.userService.deleteAddress(this.addressId)
                                .then(function () {
                                // call loading 
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/food-address');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentToast(errorMessage, 4000);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodAddressEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-address-edit',
            template: __webpack_require__(/*! ./food-address-edit.page.html */ "./src/app/app-food/food-address-edit/food-address-edit.page.html"),
            styles: [__webpack_require__(/*! ./food-address-edit.page.scss */ "./src/app/app-food/food-address-edit/food-address-edit.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_6__["IonicComponentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FoodAddressEditPage);
    return FoodAddressEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-address-edit-food-address-edit-module.js.map