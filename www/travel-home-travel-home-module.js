(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-home-travel-home-module"],{

/***/ "./src/app/app-travel/travel-home/travel-home.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-home/travel-home.module.ts ***!
  \**************************************************************/
/*! exports provided: TravelHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelHomePageModule", function() { return TravelHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-home.page */ "./src/app/app-travel/travel-home/travel-home.page.ts");
/* harmony import */ var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating/dist */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { HideHeaderDirective } from '../../shared/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';
var routes = [
    {
        path: '',
        component: _travel_home_page__WEBPACK_IMPORTED_MODULE_5__["TravelHomePage"]
    }
];
var TravelHomePageModule = /** @class */ (function () {
    function TravelHomePageModule() {
    }
    TravelHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //TravelSearchPageModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_home_page__WEBPACK_IMPORTED_MODULE_5__["TravelHomePage"]]
        })
    ], TravelHomePageModule);
    return TravelHomePageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-home/travel-home.page.html":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-home/travel-home.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n        <ion-toolbar >\n            <div class=\"margin-top-10\">\n                    <ion-item  no-padding lines=\"none\" class=\"transparent margin-left-10\" >\n                        <ion-buttons class=\"margin-right-0\" slot=\"start\">\n                                <ion-button class=\"margin-right-0\" (click)=\"toggleSideMenu()\">\n                                        <ion-icon name=\"md-menu\" color=\"orange\" slot=\"start\"></ion-icon>\n                                </ion-button>\n                        </ion-buttons>\n                        <ion-label slot=\"start\"class=\"\">\n                            <ion-text  color=\"orange\">\n                                <h1 class=\"travel_header1\">Exp|ore City</h1>\n                            </ion-text>\n                        </ion-label>\n               \n                    </ion-item>       \n            </div>\n        </ion-toolbar>\n\n        <ion-toolbar color=\"\">\n            <ion-searchbar color=\"\" placeholder=\"Find the best place...\" (click)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>\n        </ion-toolbar>\n</ion-header>\n\n<ion-content #pageContent forceOverscroll=\"false\" no-padding>\n\n\n<!--*********** Category  ***********-->\n   \n    <div class=\"top-horizontal-scroll ion-margin-top slide-left  \">\n            <ion-card tappable class=\"main-h-card card-s-wide \" *ngFor=\"let category of categories \" (click)=\"openDetail('travel-place',category.id)\"  >\n                    <div class=\"card-s-wide-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\" >\n                        <h2 class=\"card-s-wide-title\"> {{category.name}}</h2>                           \n                    </div>\n            </ion-card>\n    </div>\n\n <!--*********** Show by popular places  ***********-->\n\n    <ion-item lines=\"none\">\n        <h1 class=\"travel_header2\">Popular places</h1>\n        <ion-button fill=\"none\" slot=\"end\" color=\"secondary\"  routerLink=\"/side-menu/travel/tabs/tab1/travel-recommended\" >View all</ion-button>\n    </ion-item>\n   \n    <div class=\"horizontal-scroll \" >\n        <!--  routerLink=\"/side-menu/travel/tabs/tab1/travel-place-detail/{{recommended.id}}\" -->\n            <ion-card class=\"main-h-card card-tall slide-right  \"  *ngFor=\"let recommended of recommended \" (click)=\"openDetail('travel-place-detail',recommended.id)\" >\n                <div class=\"div-tall-bg\"  [ngStyle]=\"{'background-image': 'url(' + recommended.image_header+ ')'}\"  >\n                    <!-- <h2 class=\"card-tall-title\">  {{recommended.name}}</h2>   \n                    <div class=\"card-tall-star\">\n                            <div>\n                                <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < recommended.star_rating ? 'star' : 'star-outline'\"\n                                    (click)=\"selectStar(i)\">\n                                </ion-icon>\n                            </div>\n                    </div>                            -->\n                </div>\n                <div class=\"margin-top-5 main-b-header8\">{{recommended.name}}</div>\n                <div><p style=\"margin-top: 3px;\">{{recommended.short_description}}</p></div>\n                <div style=\"margin-top: -10px;\">\n                    <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < recommended.rating ? 'star' : 'star-outline'\"\n                        (click)=\"selectStar(i)\">\n                    </ion-icon>\n                </div>\n            </ion-card>\n    </div>\n\n\n    <!--*********** Top rating ***********-->\n    <ion-item lines=\"none\">\n            <h1 class=\"margin-top-10 travel_header2\">Top rating</h1>\n    </ion-item>\n    <div class=\"horizontal-scroll ion-margin-bottom drop-in\" >\n            <!-- routerLink=\"/side-menu/travel/tabs/tab1/travel-place-detail/{{place.id}}\" -->\n        <ion-card class=\"main-h-card card-square \" *ngFor=\"let place of topRatingPlaces \"  button  (click)=\"openPlaceDetail(place.id)\">\n            <div class=\"card-square-bg\" [ngStyle]=\"{'background-image': 'url(' + place.image_header+ ')'}\">\n                <h2 class=\"card-square-title\">  {{place.name}}</h2>                             \n            </div>\n        </ion-card>\n    </div>\n\n\n    <!-- *********** Tags ********** -->\n    <ion-item lines=\"none\" class=\"\">\n            <h1 class=\"travel_header2\">Tag</h1>\n    </ion-item>\n    <div>\n        <ion-chip  *ngFor=\"let tag of tags \" [color]=\"tag.color\" outline=false button  routerLink=\"/side-menu/travel/tabs/tab1/travel-tag/{{tag.id}}\">\n                <ion-label>{{tag.name}}</ion-label>\n        </ion-chip>\n    </div>\n   \n<div class=\"footer-box\"></div>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-home/travel-home.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-home/travel-home.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #454545;\n  font-size: 30px; }\n\nion-chip {\n  padding: 10px !important;\n  border-radius: 4px  !important;\n  height: 35px;\n  margin-left: 11px; }\n\n.travel_header1 {\n  letter-spacing: -2px !important;\n  font-size: 28px !important;\n  font-weight: 500 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1ob21lL3RyYXZlbC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWM7RUFDZCxnQkFBZSxFQUNqQjs7QUFFRjtFQUNJLHlCQUF3QjtFQUN4QiwrQkFBOEI7RUFDOUIsYUFBWTtFQUNaLGtCQUFpQixFQUVwQjs7QUFFRDtFQUVJLGdDQUErQjtFQUMvQiwyQkFBMEI7RUFDMUIsNEJBQTJCLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtaG9tZS90cmF2ZWwtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gfVxuXG5pb24tY2hpcHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICAvLyBjb2xvcjojRThFOEU4ICFpbXBvcnRhbnQ7XG59XG5cbi50cmF2ZWxfaGVhZGVyMXtcbiAgICAvL2ZvbnQtZmFtaWx5OnJvYm90byAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuLy8gLmhvcml6b250YWwtc2Nyb2xsIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMTJweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICBvdmVyZmxvdy1YOiBzY3JvbGw7XG4vLyAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgXG4vLyB9XG5cblxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app-travel/travel-home/travel-home.page.ts":
/*!************************************************************!*\
  !*** ./src/app/app-travel/travel-home/travel-home.page.ts ***!
  \************************************************************/
/*! exports provided: TravelHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelHomePage", function() { return TravelHomePage; });
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






var TravelHomePage = /** @class */ (function () {
    function TravelHomePage(travelService, activatedRoute, navController, router, modalController, ionicComponentService) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.ionicComponentService = ionicComponentService;
        // hide header
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 58 };
        // hide footer 
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
    }
    TravelHomePage.prototype.ngOnInit = function () {
        this.ionicComponentService.presentLoading(); // call loading 
        this.getCategory();
        this.getRecommened();
        this.getTopRatingPlaces();
        this.getTag();
        //this.getFavorite();
        //console.log("....Current route path"+this.router.url); //  /routename
        this.parentPath = this.router.url;
        console.log("....Current route path" + this.parentPath);
    };
    TravelHomePage.prototype.getCategory = function () {
        var _this = this;
        this.travelService.getCategories().subscribe(function (actionArray) {
            //console.log("...getCategory="+actionArray);
            _this.categories = actionArray;
        });
    };
    TravelHomePage.prototype.getRecommened = function () {
        var _this = this;
        this.travelService.getRecommended().subscribe(function (actionArray) {
            //console.log("...getRecommened="+actionArray);
            _this.recommended = actionArray;
        });
    };
    TravelHomePage.prototype.getTopRatingPlaces = function () {
        var _this = this;
        this.travelService.getTopRatingPlaces().subscribe(function (actionArray) {
            //console.log("...getTopRatingPlaces = "+actionArray);
            _this.topRatingPlaces = actionArray;
        });
    };
    TravelHomePage.prototype.getFavorite = function () {
        var _this = this;
        this.travelService.getFavorite().subscribe(function (actionArray) {
            //console.log("..getFavorite="+actionArray);
            _this.favorites = actionArray;
        });
    };
    TravelHomePage.prototype.getTag = function () {
        var _this = this;
        this.travelService.getTags().subscribe(function (actionArray) {
            //console.log("...getTag = "+actionArray);
            _this.tags = actionArray;
            _this.ionicComponentService.dismissLoading(); // close loading 
        });
    };
    TravelHomePage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    TravelHomePage.prototype.openSearchPage = function () {
        console.log("Search bar");
        this.router.navigateByUrl('/travel-search');
    };
    TravelHomePage.prototype.ngOnDestroy = function () {
        // no need to destroy subscription 
    };
    TravelHomePage.prototype.openPlaceDetail = function (placeId) {
        // this.router.navigate(['/travel-place-detail']);
        console.log("...openPlaceDetail");
        //this.router.navigateByUrl(this.router.url+'/travel-place-detail/'+placeId);
        this.router.navigateByUrl('/travel-place-detail/' + placeId);
    };
    TravelHomePage.prototype.openSearchModal = function () {
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
    TravelHomePage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    TravelHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-home',
            template: __webpack_require__(/*! ./travel-home.page.html */ "./src/app/app-travel/travel-home/travel-home.page.html"),
            styles: [__webpack_require__(/*! ./travel-home.page.scss */ "./src/app/app-travel/travel-home/travel-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], TravelHomePage);
    return TravelHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-home-travel-home-module.js.map