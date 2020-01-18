(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-login-login-module"],{

/***/ "./src/app/app-auth/login/login.module.ts":
/*!************************************************!*\
  !*** ./src/app/app-auth/login/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/app-auth/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/app-auth/login/login.page.html":
/*!************************************************!*\
  !*** ./src/app/app-auth/login/login.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"\">\n        <!-- <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"greengrab\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <!-- <div class=\"logo-box\">\n      <img src=\"https://pbs.twimg.com/profile_images/1148952014036054016/xxv7lLvp.jpg\" alt=\"\">\n    </div> -->\n    <ion-item lines=\"none\">\n        <ion-label>\n            <ion-text color=\"greengrab\">\n                <h1 class=\"main-header1\">Sign in</h1>\n            </ion-text>\n        </ion-label>\n    </ion-item>    \n    \n    <form [formGroup]=\"loginForm\" novalidate>\n      <div class=\"login-form\">\n        <ion-text color=\"dark\">\n            <h2 text-center class=\"ion-margin-bottom main-header7\">\n                Sign in to continue\n            </h2>\n        </ion-text>\n        <ion-list lines=\"none\" class=\"ion-margin-top\">\n              <ion-item>\n                <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-mail-outline\"></ion-icon>\n                <ion-input formControlName=\"username\" type=\"email\" placeholder=\"Username\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-key-outline\"></ion-icon>\n                <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\" ></ion-input>\n              </ion-item>\n\n        </ion-list>\n         <!-- Error meassage -->\n        <ion-text color=\"danger\">\n            <p *ngIf=\"!loginForm.controls.username.valid && loginForm.controls.username.touched\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> This field must be at least 3 characters long!\n            </p>\n        </ion-text>\n        <ion-text color=\"danger\">\n            <p *ngIf=\"!loginForm.controls.password.valid && loginForm.controls.password.touched\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> This field must be at least 3 characters long!\n            </p>\n        </ion-text>\n\n\n        <ion-button mode=\"ios\" color=\"realgreen\" expand=\"block\"  [disabled]=\"!loginForm.valid\"  (click)=\"login()\" >\n          Sign in\n        </ion-button>\n        <ion-button mode=\"ios\" color=\"pink\" expand=\"block\"  class=\"ion-margin-top\"  routerLink=\"/side-menu/register\">\n            Create new user\n        </ion-button>\n        <ion-text color=\"dark\">\n                <h2 text-center class=\"ion-margin-bottom main-header8\">\n                    By clicking Sign up you agree to the following Terms ans Conditions without reservation\n                </h2>\n            </ion-text>\n      </div>\n   </form>\n  </ion-content>"

/***/ }),

/***/ "./src/app/app-auth/login/login.page.scss":
/*!************************************************!*\
  !*** ./src/app/app-auth/login/login.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .logo-box ion-icon {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .login-form {\n  width: 75%;\n  margin: auto;\n  padding-top: 50px; }\n  .login-form ion-list {\n    background: none; }\n  .login-form ion-list ion-item {\n      background: rgba(153, 153, 153, 0.05);\n      --background: none;\n      border-radius: 6px;\n      padding: 3px 0px !important;\n      margin-bottom: 20px;\n      border: none !important;\n      box-shadow: none !important; }\n  .login-form ion-list ion-item .item-native {\n        --background: none !important; }\n  .login-form ion-list ion-item ion-select-option {\n        margin-left: auto;\n        max-width: unset;\n        align-items: center;\n        padding: 0; }\n  .login-form ion-list ion-item ion-select-option .select {\n          max-width: 100%; }\n  .login-form ion-list ion-item ion-select-option .select .select-text {\n            font-size: 1.35rem; }\n  .login-form ion-list ion-item.item-input .text-input::-webkit-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .login-form ion-list ion-item.item-input .text-input:-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .login-form ion-list ion-item.item-input .text-input::-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .login-form ion-list ion-item.item-input .text-input::placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .login-form ion-list ion-item .label {\n        font-size: 1.35rem;\n        font-weight: 400;\n        color: #78927e;\n        flex: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBdUJuQjtFQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFoQkw7SUFrQlEsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFFTDtFQUVJLFdBQVU7RUFDVixhQUFZO0VBQ1osa0JBQWlCLEVBZ0RwQjtFQXBERDtJQU1RLGlCQUFnQixFQTZDbkI7RUFuREw7TUFRWSxzQ0FBc0I7TUFDdEIsbUJBQWE7TUFDYixtQkFBa0I7TUFDbEIsNEJBQTJCO01BQzNCLG9CQUFtQjtNQUNuQix3QkFBdUI7TUFFdkIsNEJBQTJCLEVBbUM5QjtFQWxEVDtRQWtCZ0IsOEJBQWEsRUFDaEI7RUFuQmI7UUFzQmdCLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFJaEIsb0JBQW1CO1FBQ25CLFdBQVUsRUFRYjtFQXBDYjtVQStCb0IsZ0JBQWUsRUFJbEI7RUFuQ2pCO1lBaUN3QixtQkFBa0IsRUFDckI7RUFsQ3JCO1FBdUNvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBekNqQjtRQXVDb0IsMEJBQXlCO1FBQ3pCLGtCQUFpQixFQUNwQjtFQXpDakI7UUF1Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUF6Q2pCO1FBdUNvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBekNqQjtRQTZDZ0IsbUJBQWtCO1FBQ2xCLGlCQUFnQjtRQUNoQixlQUFjO1FBQ2QsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLWF1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi5sb2dpbi1mb3JtIHtcbiAgICBcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoICM5OTksIDAuMDUpO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgaW9uLXNlbGVjdC1vcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIC50ZXh0LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg5MjdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4OTI3ZTtcbiAgICAgICAgICAgICAgICBmbGV4OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-auth/login/login.page.ts":
/*!**********************************************!*\
  !*** ./src/app/app-auth/login/login.page.ts ***!
  \**********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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






var LoginPage = /** @class */ (function () {
    function LoginPage(router, activatedRoute, menuCtrl, userService, ionicComponentService, 
    //****** form validation ********//
    formBuilder) {
        //this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
        /// console.log("CatId="+this.catId);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
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
        // this.redirectPath = this.activatedRoute.snapshot.paramMap.get('redirectPath');
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
        // const secondParam: string = this.route.snapshot.queryParamMap.get('secondParamKey');
        console.log("redirectUrl=" + this.redirectUrl);
        this.ionicComponentService.presentToast("Demo account: <br>username = bee@gmail.com  <br>password= 123456", 5000);
    };
    LoginPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    LoginPage.prototype.submitFormTest = function () {
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.loginForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            this.ionicComponentService.presentLoading();
            console.log(this.loginForm.value);
            console.log("yes, ");
            this.userService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
                .then(function (authData) {
                console.log("Auth pass");
                _this.ionicComponentService.dismissLoading();
                if (_this.redirectUrl) {
                    _this.router.navigateByUrl('/' + _this.redirectUrl);
                }
                else {
                    _this.router.navigateByUrl('/side-menu/realestate/tabs/tab1');
                }
            }, function (error) {
                //var errorMessage: string = error.message;
                _this.ionicComponentService.dismissLoading();
                console.log("Error:" + error.message);
                _this.ionicComponentService.presentAlert(error.message);
            });
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/app-auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/app-auth/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-login-login-module.js.map