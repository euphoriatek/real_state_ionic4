(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-food-food-complete-food-complete-module"],{

/***/ "./src/app/app-food/food-complete/food-complete.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-complete/food-complete.module.ts ***!
  \****************************************************************/
/*! exports provided: FoodCompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCompletePageModule", function() { return FoodCompletePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_complete_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-complete.page */ "./src/app/app-food/food-complete/food-complete.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_complete_page__WEBPACK_IMPORTED_MODULE_5__["FoodCompletePage"]
    }
];
var FoodCompletePageModule = /** @class */ (function () {
    function FoodCompletePageModule() {
    }
    FoodCompletePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_complete_page__WEBPACK_IMPORTED_MODULE_5__["FoodCompletePage"]]
        })
    ], FoodCompletePageModule);
    return FoodCompletePageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-complete/food-complete.page.html":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-complete/food-complete.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n    <div class=\"logo-box\">\n      <ion-icon class=\"notification pop-in\" name=\"md-checkmark-circle-outline\" color=\"green\"  ></ion-icon>\n    </div>\n    <div class=\"ion-text-center\">\n      <ion-text color=\"grey\" class=\"ion-margin-bottom\">\n        <h1 class=\"main-header4\">Your order has been completed.</h1>\n      </ion-text>\n    </div>\n    <div>\n      <!-- <ion-button color=\"grey\" routerLink=\"/shopping-address\">View my order</ion-button> -->\n      <ion-button color=\"grey\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/food/tabs/tab1\">Continue shopping</ion-button>\n      <!-- <ion-button color=\"light\" expand=\"full\" routerLink=\"/shopping-address\">My orders</ion-button> -->\n      <!-- <ion-button color=\"dark\" fill=\"blank\" expand=\"full\" routerLink=\"/side-menu/shopping/tabs/tab1\">Continue shopping</ion-button> -->\n    </div>\n  </ion-content>\n  ]"

/***/ }),

/***/ "./src/app/app-food/food-complete/food-complete.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-complete/food-complete.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F8F8F8; }\n\n.logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 20%; }\n\n.logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n.logo-box ion-icon.notification {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWNvbXBsZXRlL2Zvb2QtY29tcGxldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUF1QmxCOztBQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7O0FBaEJMO0lBa0JRLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGNBQWE7SUFDYixPQUFNO0lBQ04sVUFBUztJQUNULFNBQVE7SUFDUixRQUFPO0lBQ1AsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLWZvb2QvZm9vZC1jb21wbGV0ZS9mb29kLWNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI0Y4RjhGODtcbn1cbi5sb2dvLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG5cbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIGlvbi1pY29uLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app-food/food-complete/food-complete.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-complete/food-complete.page.ts ***!
  \**************************************************************/
/*! exports provided: FoodCompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCompletePage", function() { return FoodCompletePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodCompletePage = /** @class */ (function () {
    function FoodCompletePage(foodService, userService, activatedRoute, navController, router) {
        this.foodService = foodService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.foodService.removeAllItemCart();
    }
    FoodCompletePage.prototype.ngOnInit = function () {
    };
    FoodCompletePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-complete',
            template: __webpack_require__(/*! ./food-complete.page.html */ "./src/app/app-food/food-complete/food-complete.page.html"),
            styles: [__webpack_require__(/*! ./food-complete.page.scss */ "./src/app/app-food/food-complete/food-complete.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FoodCompletePage);
    return FoodCompletePage;
}());



/***/ })

}]);
//# sourceMappingURL=app-food-food-complete-food-complete-module.js.map