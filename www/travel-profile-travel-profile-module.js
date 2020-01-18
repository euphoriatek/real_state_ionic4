(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-profile-travel-profile-module"],{

/***/ "./src/app/app-travel/travel-profile/travel-profile.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-travel/travel-profile/travel-profile.module.ts ***!
  \********************************************************************/
/*! exports provided: TravelProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelProfilePageModule", function() { return TravelProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-profile.page */ "./src/app/app-travel/travel-profile/travel-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_profile_page__WEBPACK_IMPORTED_MODULE_5__["TravelProfilePage"]
    }
];
var TravelProfilePageModule = /** @class */ (function () {
    function TravelProfilePageModule() {
    }
    TravelProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_profile_page__WEBPACK_IMPORTED_MODULE_5__["TravelProfilePage"]]
        })
    ], TravelProfilePageModule);
    return TravelProfilePageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-profile/travel-profile.page.html":
/*!********************************************************************!*\
  !*** ./src/app/app-travel/travel-profile/travel-profile.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"orange-invert\">\n            <ion-buttons color=\"light\" slot=\"start\" >\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n            <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n          <ion-title color=\"dark\" class=\"main-header4\">Profile</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card class=\"info-card-2 margin-bottom-0\">\n        <div id=\"profile1-info\" class=\"test-class\" padding>\n            <img id=\"profile1-image\" class=\"pop-in\" src=\"https://randomuser.me/api/portraits/men/18.jpg\" />\n            <h3 id=\"profile1-name\">{{(userDetail | async)?.firstname}}</h3>\n            <!--<p>{{(profile2 | async)?.company}} &bull; {{(profile2 | async)?.position}}</p> -->\n            <p class=\"profile1-description\">{{(userDetail | async)?.email}}</p>\n            <ion-button  color=\"orange\" (click)=\"logout()\">LOGOUT</ion-button>\n            <!-- <ion-button *ngIf=\"following\"  color=\"light\" (click)=\"follow()\">\n                <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n                Following\n            </ion-button> -->\n        </div>\n    </ion-card>\n\n<ion-card class=\"info-card-2\">\n    <ion-list>\n        <ion-list-header>\n            Account information\n        </ion-list-header>\n        <ion-item href=\"#\" routerLink=\"/side-menu/profile\">\n            <ion-label>Name: {{(userDetail | async)?.firstname}} </ion-label>\n        </ion-item>\n        <ion-item href=\"#\" routerLink=\"/side-menu/profile\">\n            <ion-label>Email: {{(userDetail | async)?.email}}</ion-label>\n        </ion-item>\n        <ion-item href=\"#\" routerLink=\"/side-menu/travel/tabs/tab3\">\n            <ion-label>My favorite places</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-profile/travel-profile.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-travel/travel-profile/travel-profile.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile1-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 110px;\n  margin: 0 auto 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.1);\n  -o-border-image: initial;\n     border-image: initial; }\n\n#profile1-info {\n  width: 100%;\n  text-align: center; }\n\n#profile1-name {\n  color: #444;\n  font-size: 22px; }\n\n.profile1-description {\n  font-size: 15px;\n  color: #888; }\n\n.logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n\n.logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n.logo-box ion-icon {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n.login-form {\n  width: 75%;\n  margin: auto; }\n\n.login-form ion-list {\n    background: none; }\n\n.login-form ion-list ion-item {\n      background: rgba(51, 51, 51, 0.05);\n      --background: none;\n      border-radius: 10px;\n      padding: 3px 20px !important;\n      margin-bottom: 20px;\n      border: none !important;\n      box-shadow: none !important; }\n\n.login-form ion-list ion-item .item-native {\n        --background: none !important; }\n\n.login-form ion-list ion-item ion-select-option {\n        margin-left: auto;\n        max-width: unset;\n        align-items: center;\n        padding: 0; }\n\n.login-form ion-list ion-item ion-select-option .select {\n          max-width: 100%; }\n\n.login-form ion-list ion-item ion-select-option .select .select-text {\n            font-size: 1.35rem; }\n\n.login-form ion-list ion-item.item-input .text-input::-webkit-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n\n.login-form ion-list ion-item.item-input .text-input:-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n\n.login-form ion-list ion-item.item-input .text-input::-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n\n.login-form ion-list ion-item.item-input .text-input::placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n\n.login-form ion-list ion-item .label {\n        font-size: 1.35rem;\n        font-weight: 400;\n        color: #78927e;\n        flex: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1wcm9maWxlL3RyYXZlbC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFFZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQix1Q0FBcUM7RUFDckMseUJBQXFCO0tBQXJCLHNCQUFxQixFQUV0Qjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFSDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUF1Qm5COztBQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7O0FBaEJMO0lBa0JRLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGNBQWE7SUFDYixPQUFNO0lBQ04sVUFBUztJQUNULFNBQVE7SUFDUixRQUFPO0lBQ1AsYUFBWSxFQUNmOztBQUdMO0VBQ0ksV0FBVTtFQUNWLGFBQVksRUFpRGY7O0FBbkREO0lBS1EsaUJBQWdCLEVBNkNuQjs7QUFsREw7TUFPWSxtQ0FBcUI7TUFDckIsbUJBQWE7TUFDYixvQkFBbUI7TUFDbkIsNkJBQTRCO01BQzVCLG9CQUFtQjtNQUNuQix3QkFBdUI7TUFFdkIsNEJBQTJCLEVBbUM5Qjs7QUFqRFQ7UUFpQmdCLDhCQUFhLEVBQ2hCOztBQWxCYjtRQXFCZ0Isa0JBQWlCO1FBQ2pCLGlCQUFnQjtRQUloQixvQkFBbUI7UUFDbkIsV0FBVSxFQVFiOztBQW5DYjtVQThCb0IsZ0JBQWUsRUFJbEI7O0FBbENqQjtZQWdDd0IsbUJBQWtCLEVBQ3JCOztBQWpDckI7UUFzQ29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7O0FBeENqQjtRQXNDb0IsMEJBQXlCO1FBQ3pCLGtCQUFpQixFQUNwQjs7QUF4Q2pCO1FBc0NvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCOztBQXhDakI7UUFzQ29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7O0FBeENqQjtRQTRDZ0IsbUJBQWtCO1FBQ2xCLGlCQUFnQjtRQUNoQixlQUFjO1FBQ2QsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtcHJvZmlsZS90cmF2ZWwtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZTEtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsMC4xKTtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDExcHggMjBweCAtM3B4IHJnYmEoMTQyLCAxMzYsIDE0NiwgMC43NSk7XG4gIH1cbiAgI3Byb2ZpbGUxLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjcHJvZmlsZTEtbmFtZSB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9maWxlMS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG5cbi5sb2dvLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgjMzMzLCAwLjA1KTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgaW9uLXNlbGVjdC1vcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIC50ZXh0LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg5MjdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4OTI3ZTtcbiAgICAgICAgICAgICAgICBmbGV4OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-travel/travel-profile/travel-profile.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-travel/travel-profile/travel-profile.page.ts ***!
  \******************************************************************/
/*! exports provided: TravelProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelProfilePage", function() { return TravelProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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




var TravelProfilePage = /** @class */ (function () {
    function TravelProfilePage(userService, navController, router, loadingController) {
        this.userService = userService;
        this.navController = navController;
        this.router = router;
        this.loadingController = loadingController;
    }
    TravelProfilePage.prototype.ngOnInit = function () {
    };
    TravelProfilePage.prototype.ionViewWillEnter = function () {
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
    TravelProfilePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //  this.userService.signoutUser();
                    //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
                    return [4 /*yield*/, this.userService.signoutUser()
                            .then(function () {
                            console.log("LOGOUT");
                            _this.router.navigateByUrl('/login');
                            //loadingPopup.dismiss();
                            //this.nav.setRoot('AfterLoginPage');
                        }, function (error) {
                            var errorMessage = error.message;
                            console.log("ERROR:" + errorMessage);
                            //loadingPopup.dismiss();
                            //this.presentAlert(errorMessage);      
                        })];
                    case 1:
                        //  this.userService.signoutUser();
                        //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-profile',
            template: __webpack_require__(/*! ./travel-profile.page.html */ "./src/app/app-travel/travel-profile/travel-profile.page.html"),
            styles: [__webpack_require__(/*! ./travel-profile.page.scss */ "./src/app/app-travel/travel-profile/travel-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], TravelProfilePage);
    return TravelProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-profile-travel-profile-module.js.map