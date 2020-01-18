(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shopping-shopping-finish-shopping-finish-module"],{

/***/ "./src/app/app-shopping/shopping-finish/shopping-finish.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-finish/shopping-finish.module.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingFinishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingFinishPageModule", function() { return ShoppingFinishPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_finish_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-finish.page */ "./src/app/app-shopping/shopping-finish/shopping-finish.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_finish_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingFinishPage"]
    }
];
var ShoppingFinishPageModule = /** @class */ (function () {
    function ShoppingFinishPageModule() {
    }
    ShoppingFinishPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_finish_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingFinishPage"]]
        })
    ], ShoppingFinishPageModule);
    return ShoppingFinishPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-finish/shopping-finish.page.html":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-finish/shopping-finish.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n  <div class=\"logo-box\">\n    <ion-icon class=\"notification pop-in\" name=\"md-checkmark-circle-outline\" color=\"green\"  ></ion-icon>\n  </div>\n  <div class=\"ion-text-center\">\n    <ion-text color=\"grey\" class=\"ion-margin-bottom\">\n      <h1 class=\"main-header4\">Your order has been completed.</h1>\n    </ion-text>\n  </div>\n  <div>\n    <!-- <ion-button color=\"grey\" routerLink=\"/shopping-address\">View my order</ion-button> -->\n    <ion-button color=\"grey\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/shopping/tabs/tab1\">Continue shopping</ion-button>\n    <!-- <ion-button color=\"light\" expand=\"full\" routerLink=\"/shopping-address\">My orders</ion-button> -->\n    <!-- <ion-button color=\"dark\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/shopping/tabs/tab1\">Continue shopping</ion-button> -->\n  </div>\n</ion-content>\n]"

/***/ }),

/***/ "./src/app/app-shopping/shopping-finish/shopping-finish.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-finish/shopping-finish.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F8F8F8; }\n\n.logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 20%; }\n\n.logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n.logo-box ion-icon.notification {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctZmluaXNoL3Nob3BwaW5nLWZpbmlzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBYSxFQUNoQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixnQkFBZSxFQXVCbEI7O0FBNUJEO0lBUVEsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsUUFBTztJQUNQLGFBQVksRUFDZjs7QUFoQkw7SUFrQlEsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctZmluaXNoL3Nob3BwaW5nLWZpbmlzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGOEY4Rjg7XG59XG4ubG9nby1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBpb24taWNvbi5ub3RpZmljYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-finish/shopping-finish.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-finish/shopping-finish.page.ts ***!
  \**********************************************************************/
/*! exports provided: ShoppingFinishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingFinishPage", function() { return ShoppingFinishPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingFinishPage = /** @class */ (function () {
    function ShoppingFinishPage(shoppingService, userService, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.shoppingService.removeAllItemCart();
    }
    ShoppingFinishPage.prototype.ngOnInit = function () {
    };
    ShoppingFinishPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-finish',
            template: __webpack_require__(/*! ./shopping-finish.page.html */ "./src/app/app-shopping/shopping-finish/shopping-finish.page.html"),
            styles: [__webpack_require__(/*! ./shopping-finish.page.scss */ "./src/app/app-shopping/shopping-finish/shopping-finish.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppingFinishPage);
    return ShoppingFinishPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-shopping-shopping-finish-shopping-finish-module.js.map