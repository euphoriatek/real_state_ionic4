(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-category-food-category-module"],{

/***/ "./src/app/app-food/food-category/food-category.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-category/food-category.module.ts ***!
  \****************************************************************/
/*! exports provided: FoodCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoryPageModule", function() { return FoodCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-category.page */ "./src/app/app-food/food-category/food-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_category_page__WEBPACK_IMPORTED_MODULE_5__["FoodCategoryPage"]
    }
];
var FoodCategoryPageModule = /** @class */ (function () {
    function FoodCategoryPageModule() {
    }
    FoodCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_category_page__WEBPACK_IMPORTED_MODULE_5__["FoodCategoryPage"]]
        })
    ], FoodCategoryPageModule);
    return FoodCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-category/food-category.page.html":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-category/food-category.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons color=\"light\" slot=\"start\" >\n                        <ion-back-button></ion-back-button>\n                    </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-header6\">Category</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/food-cart\" >\n                        <ion-badge color=\"primary\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n</ion-header>\n\n\n<ion-content  no-padding>\n    <ion-card class=\"card-wide \" tappable  *ngFor=\"let category of categories | async\" >\n        <div class=\"card-wide-bg\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\"  routerLink=\"/side-menu/food/tabs/tab2/food-item/{{category.id}}\" >\n            <h2 class=\"card-wide-title pop-in\"> {{category.name}}</h2>      \n        </div>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-food/food-category/food-category.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/app-food/food-category/food-category.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar:last-child.show-liner {\n  --border-width: 0 0 0.55px; }\n\nion-card {\n  border-radius: 9px  !important; }\n\n.card-wide {\n  height: 157px !important;\n  margin: 10px 10px 0px 10px !important;\n  background-color: #dddddd; }\n\n.card-wide-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.card-wide-bg {\n  position: relative;\n  height: 157px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center; }\n\n.card-wide-bg .card-wide-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 22px;\n  font-style: roboto;\n  font-weight: 600;\n  color: #FFFFFF;\n  position: absolute;\n  top: 25%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n.card-wide-bg .card-wide-sub-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 18px;\n  font-style: roboto;\n  font-weight: 400;\n  color: #FFFFFF;\n  position: absolute;\n  top: 42%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWNhdGVnb3J5L2Zvb2QtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ1EsMkJBQWUsRUFDdEI7O0FBR0Q7RUFFSSwrQkFBOEIsRUFHakM7O0FBRUQ7RUFJSSx5QkFBdUI7RUFDdkIsc0NBQXFDO0VBQ3JDLDBCQUF5QixFQUk1Qjs7QUFDRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLFNBQVE7RUFDUixPQUFNO0VBQ04sVUFBUztFQUNULHVCQUFzQjtFQUN0Qiw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDBCQUF5QjtFQUl6Qix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLGFBQVk7RUFDWixpQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUiwwRUFBbUU7RUFDbkUsWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGFBQVk7RUFDWixpQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUiwwRUFBbUU7RUFDbkUsWUFBVztFQUNYLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb29kL2Zvb2QtY2F0ZWdvcnkvZm9vZC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8qKioqKiBzaG93IHRvb2xiYXIgbGluZXIgd2hlbiBzaG93TGluZXIgPSB0cnVlICoqKioqKioqLy9cbmlvbi10b29sYmFyOmxhc3QtY2hpbGQuc2hvdy1saW5lcnsvLy5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQgXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xufVxuXG4vLyAqKioqKioqKioqKiogTWFpbiBjYXJkICoqKioqKioqKioqKi8vICBcbmlvbi1jYXJke1xuICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweCAgIWltcG9ydGFudDtcbiAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwKSAgIWltcG9ydGFudDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcbn1cbi8vICoqKioqKioqKioqKiBXaWRlIGNhcmQgKioqKioqKioqKioqLy8gIFxuLmNhcmQtd2lkZSAge1xuIFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweCAgIWltcG9ydGFudDtcbiAgICAvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDoxNTdweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAvLyBtaW4taGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xuICAgIC8vIG1heC1oZWlnaHQ6IDE2MHZoICFpbXBvcnRhbnQ7XG5cbn1cbi5jYXJkLXdpZGUtYmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jYXJkLXdpZGUtYmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE1N3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY2FyZC13aWRlLWJnIC5jYXJkLXdpZGUtdGl0bGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOjBweCA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvLyBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zXG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtc3R5bGU6IHJvYm90bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1JTtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLXdpZGUtYmcgLmNhcmQtd2lkZS1zdWItdGl0bGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOjBweCA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvLyBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IHJvYm90bztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQyJTtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-food/food-category/food-category.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-food/food-category/food-category.page.ts ***!
  \**************************************************************/
/*! exports provided: FoodCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoryPage", function() { return FoodCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodCategoryPage = /** @class */ (function () {
    function FoodCategoryPage(foodService, activatedRoute, navController, router) {
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.viewType = "list";
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodCategoryPage.prototype.ngOnInit = function () {
        // this.parentPath= this.router.url;
        // console.log("....Current route path"+this.parentPath);
        this.categories = this.foodService.getCategories();
    };
    FoodCategoryPage.prototype.changeView = function (viewType) {
        this.viewType = viewType;
    };
    FoodCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-category',
            template: __webpack_require__(/*! ./food-category.page.html */ "./src/app/app-food/food-category/food-category.page.html"),
            styles: [__webpack_require__(/*! ./food-category.page.scss */ "./src/app/app-food/food-category/food-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FoodCategoryPage);
    return FoodCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=food-category-food-category-module.js.map