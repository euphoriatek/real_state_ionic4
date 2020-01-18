(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-register-register-module"],{

/***/ "./src/app/app-auth/register/register.module.ts":
/*!******************************************************!*\
  !*** ./src/app/app-auth/register/register.module.ts ***!
  \******************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/app-auth/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/app-auth/register/register.page.html":
/*!******************************************************!*\
  !*** ./src/app/app-auth/register/register.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n        <ion-toolbar color=\"\">\n            <!-- <ion-buttons slot=\"start\">\n                <ion-button (click)=\"toggleSideMenu()\">\n                    <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"greengrab\" slot=\"start\"></ion-icon>\n                </ion-button>\n            </ion-buttons> -->\n    \n        </ion-toolbar>\n    </ion-header>\n  <!-- <ion-header no-border>ß\n      <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n              <ion-button (click)=\"toggleSideMenu()\">\n                  <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"primary\" slot=\"start\"></ion-icon>\n              </ion-button>\n          </ion-buttons>\n        <ion-title slot=\"start\" color=\"dark\">Register</ion-title>\n      </ion-toolbar>\n  </ion-header> -->\n\n<ion-content>\n    <ion-item lines=\"none\">\n        <ion-label>\n            <ion-text color=\"greengrab\">\n                <h1 class=\"main-header1\">Sign up</h1>\n            </ion-text>\n        </ion-label>\n    </ion-item>    \n\n  \n    <div class=\"register-form ion-margin\">\n                <ion-text color=\"dark\">\n                    <h2 text-center class=\"ion-margin-bottom main-header7\">\n                        Create new account.\n                    </h2>\n                </ion-text>\n      <form [formGroup]=\"registerForm\" novalidate>\n  \n        <ion-list lines=\"none\">\n\n                <ion-item>\n                    <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-person-outline\"></ion-icon>\n                    <ion-input type=\"text\"  formControlName=\"firstname\"  placeholder=\"First name\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-people-outline\"></ion-icon>\n                    <ion-input type=\"text\"  formControlName=\"lastname\"  placeholder=\"Lastname\"></ion-input>\n                </ion-item>\n       \n                <ion-item>\n                        <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-call-outline\"></ion-icon>\n                        <ion-input type=\"number\"  formControlName=\"phone\"  placeholder=\"phone\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon slot=\"start\" color=\"lightgrey\" name=\"ios-mail-outline\"></ion-icon>\n                    <ion-input type=\"text\" formControlName=\"username\"  placeholder=\"Username(email)\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon slot=\"start\"  color=\"lightgrey\" name=\"ios-key-outline\"></ion-icon>\n                    <ion-input type=\"text\" formControlName=\"password\"  placeholder=\"Password\"></ion-input>\n                </ion-item>\n\n            </ion-list>\n  \n            <!-- Error meassage -->\n            <ion-text color=\"danger\">\n                <p  *ngIf=\"!registerForm.controls.firstname.valid && registerForm.controls.firstname.touched\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> Firstname field must be at least 3 characters long!\n                </p>\n            </ion-text>\n            <ion-text color=\"danger\">\n                <p  *ngIf=\"!registerForm.controls.lastname.valid && registerForm.controls.lastname.touched\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> Lastname field must be at least 3 characters long!\n                </p>    \n            </ion-text>\n            <ion-text color=\"danger\">\n                <p *ngIf=\"!registerForm.controls.phone.valid && registerForm.controls.phone.touched\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> Phone field must be at least 6 characters long!\n                </p>\n            </ion-text>\n\n            <ion-text color=\"danger\">\n                <p *ngIf=\"!registerForm.controls.username.valid && registerForm.controls.username.touched\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> Username must be e-mail!\n                </p>             \n            </ion-text>\n            <ion-text color=\"danger\">\n                <p *ngIf=\"!registerForm.controls.password.valid && registerForm.controls.password.touched\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> Password field must be at least 6 characters long!\n                </p>              \n            </ion-text>\n\n           <!-- Submit button -->\n            <ion-button mode=\"ios\" color=\"greengrab\" expand=\"block\" class=\"ion-margin-top\" [disabled]=\"!registerForm.valid\"  (click)=\"registerUser()\">\n              Create\n            </ion-button>\n            <ion-button mode=\"ios\" color=\"pink\" expand=\"block\" fill=\"outline\" class=\"ion-margin-top\" routerLink=\"/side-menu/login\">\n                Cancel\n            </ion-button>\n            <ion-text color=\"dark\">\n                <h2 text-center class=\"ion-margin-bottom main-header8\">\n                    By clicking Sign up you agree to the following Terms ans Conditions without reservation\n                </h2>\n            </ion-text>\n      </form>\n \n    </div>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/app-auth/register/register.page.scss":
/*!******************************************************!*\
  !*** ./src/app/app-auth/register/register.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .register-form {\n  width: 75%;\n  margin: auto;\n  padding-top: 20px; }\n  .register-form ion-list {\n    background: none; }\n  .register-form ion-list ion-item {\n      background: rgba(153, 153, 153, 0.09);\n      --background: none;\n      border-radius: 6px;\n      padding: 3px 0px !important;\n      margin-bottom: 20px;\n      border: none !important;\n      box-shadow: none !important; }\n  .register-form ion-list ion-item .item-native {\n        --background: none !important; }\n  .register-form ion-list ion-item ion-select-option {\n        margin-left: auto;\n        max-width: unset;\n        align-items: center;\n        padding: 0; }\n  .register-form ion-list ion-item ion-select-option .select {\n          max-width: 100%; }\n  .register-form ion-list ion-item ion-select-option .select .select-text {\n            font-size: 1.35rem; }\n  .register-form ion-list ion-item.item-input .text-input::-webkit-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .register-form ion-list ion-item.item-input .text-input:-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .register-form ion-list ion-item.item-input .text-input::-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .register-form ion-list ion-item.item-input .text-input::placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .register-form ion-list ion-item .label {\n        font-size: 1.35rem;\n        font-weight: 400;\n        color: #78927e;\n        flex: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBWW5CO0VBakJEO0lBUVEsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsUUFBTztJQUNQLGFBQVksRUFDZjtFQUVMO0VBRUksV0FBVTtFQUNWLGFBQVk7RUFDWixrQkFBaUIsRUFnRHBCO0VBcEREO0lBTVEsaUJBQWdCLEVBNkNuQjtFQW5ETDtNQVFZLHNDQUFzQjtNQUN0QixtQkFBYTtNQUNiLG1CQUFrQjtNQUNsQiw0QkFBMkI7TUFDM0Isb0JBQW1CO01BQ25CLHdCQUF1QjtNQUV2Qiw0QkFBMkIsRUFtQzlCO0VBbERUO1FBa0JnQiw4QkFBYSxFQUNoQjtFQW5CYjtRQXNCZ0Isa0JBQWlCO1FBQ2pCLGlCQUFnQjtRQUloQixvQkFBbUI7UUFDbkIsV0FBVSxFQVFiO0VBcENiO1VBK0JvQixnQkFBZSxFQUlsQjtFQW5DakI7WUFpQ3dCLG1CQUFrQixFQUNyQjtFQWxDckI7UUF1Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUF6Q2pCO1FBdUNvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBekNqQjtRQXVDb0IsMEJBQXlCO1FBQ3pCLGtCQUFpQixFQUNwQjtFQXpDakI7UUF1Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUF6Q2pCO1FBNkNnQixtQkFBa0I7UUFDbEIsaUJBQWdCO1FBQ2hCLGVBQWM7UUFDZCxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAtYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4ucmVnaXN0ZXItZm9ybSB7XG4gICAgXG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCAjOTk5LCAwLjA5KTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGlvbi1zZWxlY3Qtb3B0aW9ue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICAgICAuc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5pdGVtLWlucHV0IHtcbiAgICAgICAgICAgICAgICAudGV4dC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc4OTI3ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3ODkyN2U7XG4gICAgICAgICAgICAgICAgZmxleDogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app-auth/register/register.page.ts":
/*!****************************************************!*\
  !*** ./src/app/app-auth/register/register.page.ts ***!
  \****************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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






var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, menuCtrl, userService, ionicComponentService, 
    //****** form validation ********//
    formBuilder) {
        //this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
        /// console.log("CatId="+this.catId);
        this.router = router;
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
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.registerForm = formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(EMAIL_REGEXP)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    RegisterPage.prototype.submitFormTest = function () {
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.registerForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    /// old way ////
    RegisterPage.prototype.registerUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("call signopUser");
                        if (!!this.registerForm.valid) return [3 /*break*/, 1];
                        console.log(this.registerForm.value);
                        console.log("invalid form");
                        return [3 /*break*/, 3];
                    case 1:
                        this.ionicComponentService.presentLoading();
                        console.log(this.registerForm.value);
                        console.log("yes, ");
                        return [4 /*yield*/, this.userService.signupUser(this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.phone, this.registerForm.value.username, this.registerForm.value.password)
                                .then(function () {
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/side-menu/realestate/tabs/tab1');
                                //loadingPopup.dismiss();
                                //this.nav.setRoot('AfterLoginPage');
                            }, function (error) {
                                var errorMessage = error.message;
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentAlert(errorMessage);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/app-auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/app-auth/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-register-register-module.js.map