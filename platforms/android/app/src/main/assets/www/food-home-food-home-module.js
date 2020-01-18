(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-home-food-home-module"],{

/***/ "./src/app/app-food/food-home/food-home.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-home/food-home.module.ts ***!
  \********************************************************/
/*! exports provided: FoodHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodHomePageModule", function() { return FoodHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-home.page */ "./src/app/app-food/food-home/food-home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _food_home_page__WEBPACK_IMPORTED_MODULE_5__["FoodHomePage"]
    }
];
var FoodHomePageModule = /** @class */ (function () {
    function FoodHomePageModule() {
    }
    FoodHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_home_page__WEBPACK_IMPORTED_MODULE_5__["FoodHomePage"]]
        })
    ], FoodHomePageModule);
    return FoodHomePageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-home/food-home.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-home/food-home.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n        <ion-toolbar color=\"greengrab\">\n                <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"toggleSideMenu()\">\n                        <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"white\"  slot=\"start\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"\" class=\"main-b-header6\">FOOOD</ion-title>\n                <ion-buttons slot=\"end\">\n                    <ion-button routerLink=\"/food-cart\" >\n                        <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                        <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n        </ion-toolbar>\n    <ion-toolbar color=\"greengrab\">\n        <ion-searchbar  placeholder=\"Search..\" (click)=\"openSearchModal()\" search-icon=\"ios-search\" ></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content #pageContent no-padding>\n\n\n\n <!--*********** Popular  ***********-->\n\n<ion-item lines=\"none\">\n    <label>\n        <h1 class=\"main-header4 margin-bottom-3\">Popular menu</h1>\n        <h1 class=\"food_header3 \">Most popular food menu for you each day</h1>\n    </label>\n    <!-- <ion-button fill=\"none\" slot=\"end\" color=\"secondary\"  routerLink=\"/side-menu/food/tabs/tab1/food-category\" >View all</ion-button> -->\n</ion-item>\n\n<div class=\"horizontal-scroll \" >\n    <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n        <ion-card class=\"food-main-h-card food-card1 slide-right \"  *ngFor=\"let popular of populars | async \"  (click)=\"openDetail('food-detail',popular.id)\"    >\n            <div class=\"food-card1-bg\"  [ngStyle]=\"{'background-image': 'url(' + popular.image+ ')'}\" ></div>\n            <ion-card-content class=\"card1-padding\">\n                <ion-label><ion-text color=\"black\"><h2>{{popular.name}}</h2></ion-text></ion-label>\n                <ion-label><h3>{{popular.short_description}}</h3></ion-label>\n                <ion-row class=\"margin-top-5\">\n                    <ion-col size=\"6\" class=\"ion-text-left\">\n                       <ion-icon  style=\"font-size: 16px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < popular.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                    </ion-col>\n                    <ion-col class=\"ion-text-right\">\n                            <ion-text color=\"black\"> <h2><strong>{{popular.price | currency}}</strong></h2></ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n</div>\n\n\n\n\n<!--*********** Category  ***********-->\n\n<ion-item class=\"margin-bottom-10\" lines=\"none\">\n    <h1 class=\"margin-top-3 main-header4\">Category</h1>\n</ion-item>\n<div class=\"horizontal-scroll slide-left  \">\n    <ion-card tappable class=\"food-main-h-card food-card2 \" *ngFor=\"let category of categories | async \" (click)=\"openDetail('side-menu/food/tabs/tab1/food-item',category.id)\" >\n            <div class=\"food-card2-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\" >\n                <h2 class=\"card2-title\"> {{category.name}}</h2>                           \n            </div>\n    </ion-card>\n</div>\n\n\n\n\n<!--*********** Promotion ***********-->\n\n<ion-item class=\"margin-bottom-10\"  lines=\"none\">\n    <h1 class=\"main-header4\">Promotion</h1>\n</ion-item>\n<div class=\"horizontal-scroll \" >\n    <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n        <ion-card class=\"food-main-h-card food-card3 slide-right \"  *ngFor=\"let promotion of promotions | async \"  (click)=\"openDetail('food-detail',promotion.id)\"    >\n            <div class=\"bookmarkRibbon\"></div>\n            <div class=\"food-card3-bg\"  [ngStyle]=\"{'background-image': 'url(' + promotion.image+ ')'}\" ></div>\n\n            <ion-card-content class=\"card1-padding\">\n                    <ion-label><ion-text color=\"black\"><h2>{{promotion.name}}</h2></ion-text></ion-label>\n                    <ion-label><h3>{{promotion.short_description}}</h3></ion-label>\n                    <div class=\"margin-top-5\">\n                           <ion-icon  style=\"font-size: 16px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < promotion.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                            <ion-text color=\"black\"> <h2><strong>{{promotion.price | currency}}</strong></h2></ion-text>\n                    </div>\n                </ion-card-content>\n\n            <!-- <div class=\"food_title1\">{{promotion.name}}</div>\n            <div><p style=\"margin-top: 3px;\">{{promotion.short_description}}</p></div>\n            <div style=\"margin-top: -10px;\">\n                <ion-item lines=\"none\">\n                    <ion-label  text-wrap>\n                        <h1 class=\"travel_header1 detail-name\">${{promotion.price}}</h1>\n                    </ion-label>\n                    <div slot=\"end\">\n                        <ion-icon  style=\"font-size: 18px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < promotion.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                    </div>\n                </ion-item>  \n            </div> -->\n        </ion-card>\n</div>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-food/food-home/food-home.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-food/food-home/food-home.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #454545;\n  font-size: 30px; }\n\nion-searchbar ion-icon {\n  font-size: 20px !important; }\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\nion-row ion-card img {\n    width: 100%; }\n\nion-col {\n  padding: 0px !important; }\n\n.card1-padding {\n  padding: 12px 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWhvbWUvZm9vZC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFJRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFDRDtFQUNJLDRCQUFhO0VBQ2IsOEJBQWUsRUFDbEI7O0FBQ0Q7RUFFUSx1QkFBcUI7RUFDekIsMEJBQXlCO0VBQ3pCLDJCQUEwQixFQUk3Qjs7QUFSRDtJQU1RLFlBQVUsRUFDYjs7QUFHTDtFQUNJLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLDhCQUE2QixFQUVoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb29kL2Zvb2QtaG9tZS9mb29kLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjRjlGOUY5O1xufVxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi1pdGVte1xuICAgIC8vLS1iYWNrZ3JvdW5kIDojRjlGOUY5O1xufVxuaW9uLXNlYXJjaGJhciBpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn0gXG4udHJhbnNwYXJlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuaW9uLXJvd3tcbiAgICBpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cbn1cbmlvbi1jb2x7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZDEtcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggIWltcG9ydGFudDtcbiAgICAvL21hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app-food/food-home/food-home.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-food/food-home/food-home.page.ts ***!
  \******************************************************/
/*! exports provided: FoodHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodHomePage", function() { return FoodHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
/* harmony import */ var _food_search_food_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../food-search/food-search.page */ "./src/app/app-food/food-search/food-search.page.ts");
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






var FoodHomePage = /** @class */ (function () {
    function FoodHomePage(menuCtrl, foodService, activatedRoute, navController, router, modalController, ionicComponentService) {
        this.menuCtrl = menuCtrl;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.ionicComponentService = ionicComponentService;
        // footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 40 };
        //******** star rating ********/
        // userId: any;
        // rate = 2;
        // selectStar(i) {
        //     this.rate = i + 1;
        // }
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodHomePage.prototype.ngOnInit = function () {
        this.getPopular();
        this.getCategory();
        this.getPromotion();
    };
    FoodHomePage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    FoodHomePage.prototype.getPopular = function () {
        // this.foodService.getPopularItem().subscribe(actionArray => {
        //   console.log("----->actionArray="+actionArray);
        //   this.popularArray = actionArray
        // });
        //   or Observable with async ////
        this.populars = this.foodService.getPopularItems();
    };
    FoodHomePage.prototype.getCategory = function () {
        this.categories = this.foodService.getCategories();
    };
    FoodHomePage.prototype.getPromotion = function () {
        this.promotions = this.foodService.getPromotionItems();
    };
    FoodHomePage.prototype.openSearchModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openModal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _food_search_food_search_page__WEBPACK_IMPORTED_MODULE_4__["FoodSearchPage"],
                                componentProps: {
                                //categoryId: categoryId
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FoodHomePage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    FoodHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-home',
            template: __webpack_require__(/*! ./food-home.page.html */ "./src/app/app-food/food-home/food-home.page.html"),
            styles: [__webpack_require__(/*! ./food-home.page.scss */ "./src/app/app-food/food-home/food-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], FoodHomePage);
    return FoodHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=food-home-food-home-module.js.map