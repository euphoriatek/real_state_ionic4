(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-forgot-forgot-module"],{

/***/ "./src/app/app-auth/forgot/forgot.module.ts":
/*!**************************************************!*\
  !*** ./src/app/app-auth/forgot/forgot.module.ts ***!
  \**************************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot.page */ "./src/app/app-auth/forgot/forgot.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/app-auth/forgot/forgot.page.html":
/*!**************************************************!*\
  !*** ./src/app/app-auth/forgot/forgot.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"\">\n        <!-- <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"greengrab\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item lines=\"none\">\n        <ion-label>\n            <ion-text color=\"greengrab\">\n                <h1 class=\"main-header1\">Forgot</h1>\n            </ion-text>\n        </ion-label>\n    </ion-item>    \n\n\n    <form [formGroup]=\"forgotForm\" novalidate>\n            <div class=\"forgot-form\">            \n              <ion-text color=\"dark\">\n                    <h2 text-center class=\"ion-margin-bottom main-header7\">\n                            Please enter your email address. You will receive a link to create a new password via email.\n                    </h2>\n                </ion-text>\n              <ion-list lines=\"none\" class=\"ion-margin-top\">\n                    <ion-item>\n                      <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-mail-outline\"></ion-icon>\n                      <ion-input formControlName=\"username\" type=\"email\" placeholder=\"Username\"></ion-input>\n                    </ion-item>\n              </ion-list>\n              <!-- Error meassage -->\n              <ion-text color=\"danger\">\n                  <p *ngIf=\"!forgotForm.controls.username.valid && forgotForm.controls.username.touched\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> Username must be email!\n                  </p>\n              </ion-text>\n\n              <!--Submit buttton -->\n              <ion-button mode=\"ios\" color=\"greengrab\" expand=\"block\"  [disabled]=\"!forgotForm.valid\"  (click)=\"resetPassword()\" >\n                Request password\n              </ion-button>\n              <ion-button mode=\"ios\" color=\"pink\" expand=\"block\" fill=\"outline\" class=\"ion-margin-top\"  routerLink=\"/side-menu/login\">\n                  Login\n              </ion-button>\n              <ion-text color=\"dark\">\n                    <h2 text-center class=\"ion-margin-bottom main-header8\">\n                        By clicking Sign up you agree to the following Terms ans Conditions without reservation\n                    </h2>\n                </ion-text>\n            </div>\n     </form>\n    </ion-content>"

/***/ }),

/***/ "./src/app/app-auth/forgot/forgot.page.scss":
/*!**************************************************!*\
  !*** ./src/app/app-auth/forgot/forgot.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .logo-box ion-icon {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .forgot-form {\n  width: 75%;\n  margin: auto;\n  padding-top: 50px; }\n  .forgot-form ion-list {\n    background: none; }\n  .forgot-form ion-list ion-item {\n      background: rgba(153, 153, 153, 0.05);\n      --background: none;\n      border-radius: 6px;\n      padding: 3px 0px !important;\n      margin-bottom: 20px;\n      border: none !important;\n      box-shadow: none !important; }\n  .forgot-form ion-list ion-item .item-native {\n        --background: none !important; }\n  .forgot-form ion-list ion-item ion-select-option {\n        margin-left: auto;\n        max-width: unset;\n        align-items: center;\n        padding: 0; }\n  .forgot-form ion-list ion-item ion-select-option .select {\n          max-width: 100%; }\n  .forgot-form ion-list ion-item ion-select-option .select .select-text {\n            font-size: 1.35rem; }\n  .forgot-form ion-list ion-item.item-input .text-input::-webkit-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .forgot-form ion-list ion-item.item-input .text-input:-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .forgot-form ion-list ion-item.item-input .text-input::-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .forgot-form ion-list ion-item.item-input .text-input::placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .forgot-form ion-list ion-item .label {\n        font-size: 1.35rem;\n        font-weight: 400;\n        color: #78927e;\n        flex: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtYXV0aC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUF1Qm5CO0VBNUJEO0lBUVEsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsUUFBTztJQUNQLGFBQVksRUFDZjtFQWhCTDtJQWtCUSxpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsUUFBTztJQUNQLGFBQVksRUFDZjtFQUVMO0VBRUksV0FBVTtFQUNWLGFBQVk7RUFDWixrQkFBaUIsRUFnRHBCO0VBcEREO0lBTVEsaUJBQWdCLEVBNkNuQjtFQW5ETDtNQVFZLHNDQUFzQjtNQUN0QixtQkFBYTtNQUNiLG1CQUFrQjtNQUNsQiw0QkFBMkI7TUFDM0Isb0JBQW1CO01BQ25CLHdCQUF1QjtNQUV2Qiw0QkFBMkIsRUFtQzlCO0VBbERUO1FBa0JnQiw4QkFBYSxFQUNoQjtFQW5CYjtRQXNCZ0Isa0JBQWlCO1FBQ2pCLGlCQUFnQjtRQUloQixvQkFBbUI7UUFDbkIsV0FBVSxFQVFiO0VBcENiO1VBK0JvQixnQkFBZSxFQUlsQjtFQW5DakI7WUFpQ3dCLG1CQUFrQixFQUNyQjtFQWxDckI7UUF1Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUF6Q2pCO1FBdUNvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBekNqQjtRQXVDb0IsMEJBQXlCO1FBQ3pCLGtCQUFpQixFQUNwQjtFQXpDakI7UUF1Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUF6Q2pCO1FBNkNnQixtQkFBa0I7UUFDbEIsaUJBQWdCO1FBQ2hCLGVBQWM7UUFDZCxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAtYXV0aC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4uZm9yZ290LWZvcm0ge1xuICAgIFxuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSggIzk5OSwgMC4wNSk7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBpb24tc2VsZWN0LW9wdGlvbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgLnNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaXRlbS1pbnB1dCB7XG4gICAgICAgICAgICAgICAgLnRleHQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3ODkyN2UgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg5MjdlO1xuICAgICAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-auth/forgot/forgot.page.ts":
/*!************************************************!*\
  !*** ./src/app/app-auth/forgot/forgot.page.ts ***!
  \************************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPage = /** @class */ (function () {
    function ForgotPage(userService, navController, menuCtrl, router, ionicComponentService, formBuilder) {
        this.userService = userService;
        this.navController = navController;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.formBuilder = formBuilder;
        var EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        // this.registerForm = fb.group({
        //let Email_Val =     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        // this.registerForm = fb.group({
        //       email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
        //       profileName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
        //       phone: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        //       password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        // });
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.forgotForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(EMAIL_REGEXP)])],
        });
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    ForgotPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.forgotForm.valid) {
            console.log("form is invalid = " + this.forgotForm.value);
        }
        else {
            this.ionicComponentService.presentLoading();
            this.userService.resetPassword(this.forgotForm.value.username)
                .then(function (user) {
                _this.ionicComponentService.dismissLoading();
                _this.ionicComponentService.presentAlert("We just sent you a reset link to your email");
                // this.nav.setRoot('LoginPage');
                _this.router.navigateByUrl('/side-menu/login');
            }, function (error) {
                var errorMessage = error.message;
                _this.ionicComponentService.dismissLoading();
                _this.ionicComponentService.presentAlert(errorMessage);
            });
        }
    };
    ForgotPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.page.html */ "./src/app/app-auth/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/app-auth/forgot/forgot.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-forgot-forgot-module.js.map