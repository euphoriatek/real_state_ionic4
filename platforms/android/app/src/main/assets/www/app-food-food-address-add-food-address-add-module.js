(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-address-add-food-address-add-module"],{

/***/ "./src/app/app-food/food-address-add/food-address-add.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-food/food-address-add/food-address-add.module.ts ***!
  \**********************************************************************/
/*! exports provided: FoodAddressAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressAddPageModule", function() { return FoodAddressAddPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_address_add_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-address-add.page */ "./src/app/app-food/food-address-add/food-address-add.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_address_add_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressAddPage"]
    }
];
var FoodAddressAddPageModule = /** @class */ (function () {
    function FoodAddressAddPageModule() {
    }
    FoodAddressAddPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_address_add_page__WEBPACK_IMPORTED_MODULE_5__["FoodAddressAddPage"]]
        })
    ], FoodAddressAddPageModule);
    return FoodAddressAddPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-address-add/food-address-add.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-food/food-address-add/food-address-add.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n    <ion-toolbar color=\"greengrab\">\n            <ion-buttons color=\"light\" slot=\"start\" >\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n            <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n          <ion-title color=\"\" class=\"main-header6\">Add address</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class=\"ion-margin ion-padding-top\">\n\n      <form [formGroup]=\"addressForm\" novalidate>\n          <ion-list lines=\"\">   \n              <ion-item>\n                <ion-label position=\"floating\">Address label</ion-label>\n                <ion-input  type=\"text\"  formControlName=\"label\"  placeholder=\"Ex: home , office\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Fullname</ion-label>\n                <ion-input  type=\"text\"  formControlName=\"fullname\" ></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"stacked\">Phone number</ion-label>\n                  <ion-input  type=\"number\"  formControlName=\"phone\"></ion-input>\n              </ion-item>             \n              <ion-item>\n                  <ion-label position=\"stacked\">Address</ion-label>\n                  <ion-textarea formControlName=\"address\" placeholder=\"Enter more information here...\"  rows = \"3\" auto-grow=true></ion-textarea>\n              </ion-item>\n            </ion-list>\n      </form>\n\n        <!-- Error meassage -->\n        <p color=\"danger\" *ngIf=\"!addressForm.controls.label.valid && addressForm.controls.label.touched\">\n          <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Address labelfield must be at least 3 characters long!</ion-text>  \n        </p>\n        <p color=\"danger\" *ngIf=\"!addressForm.controls.fullname.valid && addressForm.controls.fullname.touched\">\n                <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Fullname field must be at least 3 characters long!</ion-text>  \n        </p>\n        <p color=\"danger\" *ngIf=\"!addressForm.controls.phone.valid && addressForm.controls.phone.touched\">\n                <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Phone number field must be at least 3 characters long!</ion-text>  \n        </p>\n        <p color=\"danger\" *ngIf=\"!addressForm.controls.address.valid && addressForm.controls.address.touched\">\n                <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\"></ion-icon> Address field must be at least 3 characters long!</ion-text>  \n        </p>\n\n    <!-- <ion-button mode=\"ios\" color=\"orange\" expand=\"block\" fill=\"outline\" class=\"ion-margin-top\">\n        Signinewwewe\n    </ion-button> -->\n\n  </div>\n</ion-content>\n<ion-footer  >\n  <ion-toolbar>\n      <ion-button color=\"greengrab\" expand=\"full\" [disabled]=\"!addressForm.valid\"  (click)=\"addAddress()\" >Add</ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/app-food/food-address-add/food-address-add.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-food/food-address-add/food-address-add.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .deny-box {\n  margin: auto;\n  padding-top: 60px; }\n  .review-form {\n  width: 90%; }\n  .review-form ion-list {\n    background: none;\n    margin-bottom: 0px !important; }\n  .review-form ion-list ion-item {\n      background: rgba(153, 153, 153, 0.05);\n      --background: none;\n      border-radius: 10px;\n      padding: 3px 20px !important;\n      margin-bottom: 20px;\n      border: none !important;\n      box-shadow: none !important; }\n  .review-form ion-list ion-item .item-native {\n        --background: none !important; }\n  .review-form ion-list ion-item ion-select-option {\n        margin-left: auto;\n        max-width: unset;\n        align-items: center;\n        padding: 0; }\n  .review-form ion-list ion-item ion-select-option .select {\n          max-width: 100%; }\n  .review-form ion-list ion-item ion-select-option .select .select-text {\n            font-size: 1.35rem; }\n  .review-form ion-list ion-item.item-input .text-input::-webkit-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .review-form ion-list ion-item.item-input .text-input:-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .review-form ion-list ion-item.item-input .text-input::-ms-input-placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .review-form ion-list ion-item.item-input .text-input::placeholder {\n        color: #78927e !important;\n        font-size: 1.3rem; }\n  .review-form ion-list ion-item .label {\n        font-size: 1.35rem;\n        font-weight: 400;\n        color: #78927e;\n        flex: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWFkZHJlc3MtYWRkL2Zvb2QtYWRkcmVzcy1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQVluQjtFQWpCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFzREw7RUFDSSxhQUFZO0VBQ1osa0JBQWlCLEVBQ3BCO0VBQ0Q7RUFFSSxXQUFVLEVBbURiO0VBckREO0lBTVEsaUJBQWdCO0lBQ2hCLDhCQUE2QixFQTZDaEM7RUFwREw7TUFTWSxzQ0FBc0I7TUFDdEIsbUJBQWE7TUFDYixvQkFBbUI7TUFDbkIsNkJBQTRCO01BQzVCLG9CQUFtQjtNQUNuQix3QkFBdUI7TUFFdkIsNEJBQTJCLEVBbUM5QjtFQW5EVDtRQW1CZ0IsOEJBQWEsRUFDaEI7RUFwQmI7UUF1QmdCLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFJaEIsb0JBQW1CO1FBQ25CLFdBQVUsRUFRYjtFQXJDYjtVQWdDb0IsZ0JBQWUsRUFJbEI7RUFwQ2pCO1lBa0N3QixtQkFBa0IsRUFDckI7RUFuQ3JCO1FBd0NvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBMUNqQjtRQXdDb0IsMEJBQXlCO1FBQ3pCLGtCQUFpQixFQUNwQjtFQTFDakI7UUF3Q29CLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDcEI7RUExQ2pCO1FBd0NvQiwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ3BCO0VBMUNqQjtRQThDZ0IsbUJBQWtCO1FBQ2xCLGlCQUFnQjtRQUNoQixlQUFjO1FBQ2QsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLWZvb2QvZm9vZC1hZGRyZXNzLWFkZC9mb29kLWFkZHJlc3MtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi8vIC5sb2dpbi1mb3JtIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXJnaW46IGF1dG87XG5cbi8vICAgICBpb24tbGlzdCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgICAgIGlvbi1pdGVtIHtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XG4vLyAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgICAgICAgICAgcGFkZGluZzogM3B4IDIwcHggIWltcG9ydGFudDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXG4vLyAgICAgICAgICAgICAuaXRlbS1uYXRpdmUge1xuLy8gICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAmIGlvbi1zZWxlY3Qtb3B0aW9ue1xuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4vLyAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbi8vICAgICAgICAgICAgICAgICAuc2VsZWN0IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LXRleHQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgJi5pdGVtLWlucHV0IHtcbi8vICAgICAgICAgICAgICAgICAudGV4dC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIC5sYWJlbCB7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICM3ODkyN2U7XG4vLyAgICAgICAgICAgICAgICAgZmxleDogdW5zZXQ7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4uZGVueS1ib3h7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLnJldmlldy1mb3JtIHtcbiAgICBcbiAgICB3aWR0aDogOTAlO1xuICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAvLyBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCAjOTk5LCAwLjA1KTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgaW9uLXNlbGVjdC1vcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIC50ZXh0LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg5MjdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4OTI3ZTtcbiAgICAgICAgICAgICAgICBmbGV4OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-food/food-address-add/food-address-add.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-food/food-address-add/food-address-add.page.ts ***!
  \********************************************************************/
/*! exports provided: FoodAddressAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAddressAddPage", function() { return FoodAddressAddPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
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






var FoodAddressAddPage = /** @class */ (function () {
    function FoodAddressAddPage(userService, foodService, activatedRoute, navController, router, 
    //public alertController: AlertController,
    loadingController, formBuilder) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        console.log("Get activatedRoute categoryId=" + this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
        //this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        //https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
        // this.addressForm = formBuilder.group({
        //   label: ['', Validators.compose([Validators.minLength(1), Validators.required])],
        //   //fullname: ['', Validators.compose([Validators.minLength(0), Validators.required])],
        //   phone: ['', Validators.compose([Validators.minLength(0), Validators.required])],
        //   address: ['', Validators.compose([Validators.minLength(0), Validators.required])]
        // });
        this.addressForm = this.formBuilder.group({
            label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    FoodAddressAddPage.prototype.ngOnInit = function () {
        this.userProfileId = this.userService.getUserId();
    };
    FoodAddressAddPage.prototype.submitFormTest = function () {
        if (!this.addressForm.valid) {
            console.log(this.addressForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.addressForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    FoodAddressAddPage.prototype.addAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log("userProfileId="+this.userService.getUserId());
                        console.log("_____call addAddress");
                        if (!!this.addressForm.valid) return [3 /*break*/, 1];
                        console.log(this.addressForm.value);
                        console.log("____addressForm invalid ");
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.loadingController.create({
                            //spinner: null,
                            duration: 2000,
                            message: '',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 2:
                        loading = _a.sent();
                        //return await loading.present();
                        return [4 /*yield*/, loading.present()];
                    case 3:
                        //return await loading.present();
                        _a.sent();
                        //****** add review *******//
                        return [4 /*yield*/, this.userService.addAddress(this.addressForm.value.label, this.addressForm.value.fullname, this.addressForm.value.phone, this.addressForm.value.address)
                                // await console.log("2");
                                .then(function () {
                                // call loading 
                                // close loading
                                _this.router.navigateByUrl('/food-address');
                                //loadingPopup.dismiss();
                                //this.nav.setRoot('AfterLoginPage');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                //loadingPopup.dismiss();
                                //this.presentAlert(errorMessage);      
                            })];
                    case 4:
                        //****** add review *******//
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FoodAddressAddPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-address-add',
            template: __webpack_require__(/*! ./food-address-add.page.html */ "./src/app/app-food/food-address-add/food-address-add.page.html"),
            styles: [__webpack_require__(/*! ./food-address-add.page.scss */ "./src/app/app-food/food-address-add/food-address-add.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FoodAddressAddPage);
    return FoodAddressAddPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-address-add-food-address-add-module.js.map