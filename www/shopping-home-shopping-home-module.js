(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-home-shopping-home-module"],{

/***/ "./src/app/app-shopping/shopping-home/shopping-home.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-home/shopping-home.module.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingHomePageModule", function() { return ShoppingHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-home.page */ "./src/app/app-shopping/shopping-home/shopping-home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HideHeaderDirective } from '../../directives/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';
var routes = [
    {
        path: '',
        component: _shopping_home_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingHomePage"]
    }
];
var ShoppingHomePageModule = /** @class */ (function () {
    function ShoppingHomePageModule() {
    }
    ShoppingHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_home_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingHomePage"]]
        })
    ], ShoppingHomePageModule);
    return ShoppingHomePageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-home/shopping-home.page.html":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-home/shopping-home.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header  [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n    <ion-toolbar color=\"bluegrey\">\n            <ion-buttons slot=\"start\">\n                <ion-button (click)=\"toggleSideMenu()\">\n                    <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <!-- <ion-searchbar color=\"\" placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n          <ion-title color=\"light\" class=\"main-header6\">O|G</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-button routerLink=\"/shopping-cart\" >\n                    <ion-badge color=\"danger\" *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n                    <ion-icon color=\"light\" slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"bluegrey\">\n       <ion-searchbar mode=\"ios\" color=\"\" placeholder=\"Search..\" (clicks)=\"openSearchModal()\" search-icon=\"search\" ></ion-searchbar>  \n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content #pageContent no-padding>\n\n<!--*********** Banner  ***********-->\n<ion-slides pager=\"true\" [options]=\"slideOptsOne\" >\n    <ion-slide *ngFor=\"let banner of banners | async\">\n        <img class=\"image-slide\" [src]=\"banner.image\">\n    </ion-slide>\n</ion-slides>\n\n\n<!--*********** Category  ***********-->\n    <ion-item lines=\"none\">\n            <h1 class=\"main-header5\">Category</h1>\n        </ion-item>\n        <div class=\"top-horizontal-scroll  slide-left  \">\n                <ion-card tappable class=\"shop-main-h-card shop-card-s-wide \" *ngFor=\"let category of categories | async\" (click)=\"openDetail('side-menu/shopping/tabs/tab1/shopping-item',category.id)\"  >\n                        <div class=\"card-s-wide-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\">\n                            <h2 class=\"card-s-wide-title\"> {{category.name}}</h2>                           \n                        </div>\n                </ion-card>\n        </div>\n\n    \n<!--*********** Promotion  ***********-->\n        <ion-item lines=\"none\">\n            <h1 class=\"main-header5\">Promotion items</h1>\n        </ion-item>\n        <div class=\"horizontal-scroll\" >\n                <ion-card class=\"shop-main-h-card shop-card-tall slide-right  \"  *ngFor=\"let promotion of promotions | async\"  (click)=\"openDetail('shopping-detail',promotion.id)\"   >\n                    <div *ngIf=\"promotion.discount\"  class=\"ribbon\">SALE</div>\n                    <div class=\"shop-div-tall-bg\"  [ngStyle]=\"{'background-image': 'url(' + promotion.image+ ')'}\"> </div>\n                     <!-- <div class=\"ion-margin-top\" text-wrap>{{promotion.name}}</div>\n                    <ion-icon  style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < promotion.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                    <div class=\"main-b-header7\" color=\"green\">${{promotion.price}}</div> -->\n                    <div class=\"ion-margin-top main-header8\" text-wrap>{{promotion.name}}</div>\n                    <ion-icon  style=\"font-size: 12px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < promotion.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                    <div *ngIf=\"!promotion.discount\" class=\"main-b-header9\" >\n                        <ion-text color=\"grey\">{{promotion.price | currency}}</ion-text>\n                    </div>\n                    <div *ngIf=\"promotion.discount\" class=\"main-b-header9 \" >\n                        <ion-text color=\"grey\">{{promotion.discount_price | currency}}&nbsp;&nbsp;</ion-text>\n                        <ion-text color=\"lightgrey\" class=\"discount\">{{promotion.price | currency}}</ion-text>\n                    </div>\n                </ion-card>\n        </div>\n\n\n<!--*********** Group by brand  ***********-->\n\n<ion-item lines=\"none\">\n        <h1 class=\"main-header5\">Top Brands</h1>\n    </ion-item>\n    <div class=\"top-horizontal-scroll  slide-left \">\n            <ion-card tappable class=\"shop-main-h-card shop-card-s-wide \"  *ngFor=\"let group of groups | async \" (click)=\"openDetail('side-menu/shopping/tabs/tab1/shopping-group',group.id)\"  >\n                <div class=\"card-s-wide-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + group.image+ ')'}\">\n                    <!-- <h2 class=\"card-s-wide-title\"> {{group.name}}</h2>  -->\n                </div>\n            </ion-card>\n        </div>\n<!--*********** Recommened ***********-->\n    <ion-item lines=\"none\">\n        <h1 class=\"main-header5\">Recommended item</h1>\n    </ion-item>\n    <div class=\"horizontal-scroll \" >\n\n            <ion-card class=\"shop-main-h-card shop-card-tall   slide-right  \"  *ngFor=\"let recommended of recommended | async\"  (click)=\"openDetail('shopping-detail',recommended.id)\"  >\n                <div *ngIf=\"recommended.discount\"  class=\"ribbon\">SALE</div>\n                <div class=\"shop-div-tall-bg\"  [ngStyle]=\"{'background-image': 'url(' + recommended.image+ ')'}\"> </div>\n                <!--<div class=\"ion-margin-top\">{{recommended.name}}</div>\n                <ion-icon  style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < recommended.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                <div class=\"main-b-header7\" color=\"green\">${{recommended.price}}</div> -->\n                <div class=\"ion-margin-top main-header8\" text-wrap>{{recommended.name}}</div>\n                <ion-icon  style=\"font-size: 12px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < recommended.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                <div *ngIf=\"!recommended.discount\" class=\"main-b-header9\" ><ion-text color=\"grey\">{{recommended.price | currency}}</ion-text></div>\n                <div *ngIf=\"recommended.discount\" class=\"main-b-header9 \" >\n                    <ion-text color=\"grey\">{{recommended.discount_price | currency}}&nbsp;&nbsp;</ion-text>\n                    <ion-text color=\"lightgrey\" class=\"discount\">{{recommended.price | currency}}</ion-text>\n                </div>\n                <div class=\"margin-bottom-10\"></div>\n            </ion-card>\n    </div>\n\n<div class=\"footer-box\"></div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-home/shopping-home.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-home/shopping-home.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 200px;\n  width: 100%;\n  margin-top: -1px !important;\n  --bullet-background: #ddd;\n  --bullet-background-active: #999; }\n\n.image-slide {\n  max-width: 100vw !important;\n  max-height: 100vh !important; }\n\nion-searchbar {\n  height: 50px !important;\n  padding: 0px 4px !important; }\n\nion-avatar {\n  background-color: #607D8B;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  min-height: 50px; }\n\nion-avatar[item-start] {\n  margin: 8px 16px 8px 0; }\n\nion-label {\n  padding-left: 10px; }\n\nion-icon {\n  color: #999;\n  font-size: 25px; }\n\nion-icon.menu-icon {\n  font-size: 30px; }\n\nion-icon.sidemenu {\n  color: black;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctaG9tZS9zaG9wcGluZy1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixZQUFXO0VBQ1gsNEJBQTJCO0VBQzNCLDBCQUFvQjtFQUNwQixpQ0FBMkIsRUFFOUI7O0FBQ0Q7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksd0JBQXVCO0VBQ3ZCLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFJbEIsY0FBYTtFQUliLG9CQUFtQjtFQUluQix3QkFBdUI7RUFFdkIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUE7RUFDRyxZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNoQjs7QUFFSDtFQUNJLGFBQVk7RUFDWixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaG9wcGluZy9zaG9wcGluZy1ob21lL3Nob3BwaW5nLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZGRkO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjOTk5O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMXB4ICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2Utc2xpZGV7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7IFxufVxuaW9uLXNlYXJjaGJhcntcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbn1cbmlvbi1hdmF0YXJbaXRlbS1zdGFydF17XG4gICAgbWFyZ2luOiA4cHggMTZweCA4cHggMDtcbn1cblxuaW9uLWxhYmVse1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uLm1lbnUtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbmlvbi1pY29uLnNpZGVtZW51e1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDQwcHg7IFxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-home/shopping-home.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shopping/shopping-home/shopping-home.page.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingHomePage", function() { return ShoppingHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
/* harmony import */ var _shopping_search_shopping_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-search/shopping-search.page */ "./src/app/app-shopping/shopping-search/shopping-search.page.ts");
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






// import { TravelSearchPageModule } from '../travel-search/travel-search.module';
var ShoppingHomePage = /** @class */ (function () {
    function ShoppingHomePage(shoppingService, menuCtrl, activatedRoute, navController, router, ionicComponentService, modalController) {
        this.shoppingService = shoppingService;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        //******* HideHeader Config */
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 45 };
        //Slider configuration 
        this.slideOptsOne = {
            initialSlide: 1,
            slidesPerView: 1,
            autoplay: true
        };
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.shoppingService.getCart();
    }
    ShoppingHomePage.prototype.ngOnInit = function () {
        this.groups = this.shoppingService.getGroups();
        this.categories = this.shoppingService.getCategories();
        this.promotions = this.shoppingService.getPromotionItems();
        this.recommended = this.shoppingService.getRecommended();
        this.banners = this.shoppingService.getBanners();
    };
    ShoppingHomePage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    ShoppingHomePage.prototype.openSearchModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openModal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _shopping_search_shopping_search_page__WEBPACK_IMPORTED_MODULE_4__["ShoppingSearchPage"],
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
    ShoppingHomePage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    ShoppingHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-home',
            template: __webpack_require__(/*! ./shopping-home.page.html */ "./src/app/app-shopping/shopping-home/shopping-home.page.html"),
            styles: [__webpack_require__(/*! ./shopping-home.page.scss */ "./src/app/app-shopping/shopping-home/shopping-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ShoppingHomePage);
    return ShoppingHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-home-shopping-home-module.js.map