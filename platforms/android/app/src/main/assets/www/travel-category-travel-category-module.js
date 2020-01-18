(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-category-travel-category-module"],{

/***/ "./src/app/app-travel/travel-category/travel-category.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-category/travel-category.module.ts ***!
  \**********************************************************************/
/*! exports provided: TravelCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCategoryPageModule", function() { return TravelCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-category.page */ "./src/app/app-travel/travel-category/travel-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_category_page__WEBPACK_IMPORTED_MODULE_5__["TravelCategoryPage"]
    }
];
var TravelCategoryPageModule = /** @class */ (function () {
    function TravelCategoryPageModule() {
    }
    TravelCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_category_page__WEBPACK_IMPORTED_MODULE_5__["TravelCategoryPage"]]
        })
    ], TravelCategoryPageModule);
    return TravelCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-category/travel-category.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-category/travel-category.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar mode=\"ios\"> \n        <ion-title  class=\"main-header4\">Category</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content  no-padding >\n \n    <ion-card class=\"main-card travel-card-wide \" tappable  *ngFor=\"let category of categories \" >\n        <div class=\"travel-card-wide-bg\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\"  routerLink=\"../travel-place/{{category.id}}\" >\n            <h2 class=\"travel-card-wide-title pop-in\"> {{category.name}}</h2>   \n            <p class=\"travel-card-wide-sub-title pop-in\">{{category.group}}</p>           \n        </div>\n    </ion-card>\n\n<div class=\"footer-box\"></div>\n\n</ion-content>\n\n\n<ion-footer>\n      \n</ion-footer>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-category/travel-category.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-travel/travel-category/travel-category.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 9px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1jYXRlZ29yeS90cmF2ZWwtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksK0JBQThCLEVBR2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtY2F0ZWdvcnkvdHJhdmVsLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKioqKioqKioqKioqIE1haW4gY2FyZCAqKioqKioqKioqKiovLyAgXG5pb24tY2FyZHtcbiAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA5cHggICFpbXBvcnRhbnQ7XG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMCkgICFpbXBvcnRhbnQ7XG4gICAgLy8gYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gLnNob3ctdGl0bGUgIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuLy8gfVxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app-travel/travel-category/travel-category.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-travel/travel-category/travel-category.page.ts ***!
  \********************************************************************/
/*! exports provided: TravelCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCategoryPage", function() { return TravelCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_search_travel_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-search/travel-search.page */ "./src/app/app-travel/travel-search/travel-search.page.ts");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
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






var TravelCategoryPage = /** @class */ (function () {
    function TravelCategoryPage(travelService, modalController, activatedRoute, navController, router, ionicComponentService) {
        this.travelService = travelService;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.showLiner = false;
        this.showTitle = false;
        this.transition = false;
        console.log(this.router.url, "Current URL");
    }
    TravelCategoryPage.prototype.ngOnInit = function () {
        this.parentPath = this.router.url;
        console.log("....Current route path" + this.parentPath);
        this.getCategory();
    };
    TravelCategoryPage.prototype.getCategory = function () {
        var _this = this;
        this.travelService.getCategories().subscribe(function (res) {
            console.log("Get categories response=" + res);
            _this.categories = res;
        });
    };
    TravelCategoryPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    TravelCategoryPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showTitle = scrollTop >= 44;
            this.showLiner = scrollTop >= 44;
            console.log("showTitle=" + this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    TravelCategoryPage.prototype.openSearchModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openSearchModal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _travel_search_travel_search_page__WEBPACK_IMPORTED_MODULE_3__["TravelSearchPage"],
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
    TravelCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-category',
            template: __webpack_require__(/*! ./travel-category.page.html */ "./src/app/app-travel/travel-category/travel-category.page.html"),
            styles: [__webpack_require__(/*! ./travel-category.page.scss */ "./src/app/app-travel/travel-category/travel-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], TravelCategoryPage);
    return TravelCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-category-travel-category-module.js.map