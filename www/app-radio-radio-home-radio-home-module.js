(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-radio-radio-home-radio-home-module"],{

/***/ "./src/app/app-radio/radio-home/radio-home.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-radio/radio-home/radio-home.module.ts ***!
  \***********************************************************/
/*! exports provided: RadioHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioHomePageModule", function() { return RadioHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _radio_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-home.page */ "./src/app/app-radio/radio-home/radio-home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _radio_home_page__WEBPACK_IMPORTED_MODULE_5__["RadioHomePage"]
    }
];
var RadioHomePageModule = /** @class */ (function () {
    function RadioHomePageModule() {
    }
    RadioHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_radio_home_page__WEBPACK_IMPORTED_MODULE_5__["RadioHomePage"]]
        })
    ], RadioHomePageModule);
    return RadioHomePageModule;
}());



/***/ }),

/***/ "./src/app/app-radio/radio-home/radio-home.page.html":
/*!***********************************************************!*\
  !*** ./src/app/app-radio/radio-home/radio-home.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"pink\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">RAD|O</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"pink\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Search..\"  search-icon=\"search\" ></ion-searchbar>  \n     </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding>\n\n\n\n    <!--*********** Recommened stations  ***********-->\n   \n    <!-- <div class=\"top-horizontal-scroll ion-margin-top slide-left  \">\n        <ion-card tappable class=\"main-h-card card-s-wide \" *ngFor=\"let Recommended of Recommended | async \" routerLink=\"/travel-place/{{category.id}}\" >\n                <div class=\"card-s-wide-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\">\n                    <h2 class=\"card-s-wide-title\"> {{Recommended.title}}</h2>                           \n                </div>\n        </ion-card>\n    </div> -->\n\n<!--*********** List   ***********-->\n    <!-- <div id=\"wrapper\" [ngClass]=\"{ 'hide': viewType != 'list' }\">\n\n    </div> -->\n\n        <ion-list class=\"ion-margin-top ion-padding-top\">\n                  <ion-item  *ngFor=\"let list of lists | async\" lines=\"none\"  (click)=\"openPlayer(list.id)\"  class=\"margin-top-10\" >\n                      <ion-thumbnail slot=\"start\">\n                          <ion-img [src]=\"list.image\"></ion-img>\n                      </ion-thumbnail>\n                      <ion-label>\n                          <h3>{{list.title}}</h3>\n                          <p>{{list.fq}}</p>\n                      \n                      </ion-label>\n                      <ion-icon name=\"play-circle\" size=\"large\" color=\"pink\" slot=\"end\"></ion-icon>\n                  </ion-item>\n        </ion-list>\n   \n\n\n\n<!--*********** Favorite   ***********-->\n      <!-- <div id=\"wrapper\" [ngClass]=\"{ 'hide': viewType != 'favorite' }\">\n\n          <ion-list class=\"ion-margin-top\">\n              <ion-item-sliding *ngFor=\"let favorite of favorites | async\" class=\"ion-padding-top\"  #slidingItem>\n                    <ion-item  lines=\"none\" button routerLink=\"/travel-place-detail/{{place.id}}\"  >\n                        <ion-thumbnail slot=\"start\">\n                            <ion-img [src]=\"place.image_header\"></ion-img>\n                        </ion-thumbnail>\n                        <ion-label>\n                          <ion-text color=\"light\"><h2>{{favorite.title}}</h2></ion-text>\n                          <ion-text color=\"light\"><p>{{favorite.fq}}</p></ion-text>\n                         \n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option  (click)=\"deleteFavDialog(favorite.id, slidingItem)\">\n                                <ion-item-option>Delete</ion-item-option>\n                        </ion-item-option>\n                    </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n\n      </div> -->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-radio/radio-home/radio-home.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/app-radio/radio-home/radio-home.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmFkaW8vcmFkaW8taG9tZS9yYWRpby1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVDLHlCQUF3QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1yYWRpby9yYWRpby1ob21lL3JhZGlvLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGlkZSBcbntcbiBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzQ0NDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-radio/radio-home/radio-home.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/app-radio/radio-home/radio-home.page.ts ***!
  \*********************************************************/
/*! exports provided: RadioHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioHomePage", function() { return RadioHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_radio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/radio.service */ "./src/app/services/radio.service.ts");
/* harmony import */ var _radio_player_radio_player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../radio-player/radio-player.page */ "./src/app/app-radio/radio-player/radio-player.page.ts");
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





var RadioHomePage = /** @class */ (function () {
    // public Recommended: Observable<any[]>;
    // public favorites: Observable<any[]>;
    function RadioHomePage(radioService, menuCtrl, activatedRoute, navController, modalController, router, alertController, loadingController) {
        this.radioService = radioService;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.modalController = modalController;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewType = "list";
    }
    RadioHomePage.prototype.ngOnInit = function () {
        this.lists = this.radioService.getStations();
        //this.Recommended = this.radioService.getRecommendedStations();
        //this.favorites = this.radioService.getFavStations();
    };
    RadioHomePage.prototype.openPlayer = function (radioId) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("radioId=" + radioId);
                        return [4 /*yield*/, this.modalController.create({
                                component: _radio_player_radio_player_page__WEBPACK_IMPORTED_MODULE_4__["RadioPlayerPage"],
                                cssClass: '',
                                componentProps: {
                                    radioId: radioId
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
    RadioHomePage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    RadioHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio-home',
            template: __webpack_require__(/*! ./radio-home.page.html */ "./src/app/app-radio/radio-home/radio-home.page.html"),
            styles: [__webpack_require__(/*! ./radio-home.page.scss */ "./src/app/app-radio/radio-home/radio-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_radio_service__WEBPACK_IMPORTED_MODULE_3__["RadioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], RadioHomePage);
    return RadioHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=app-radio-radio-home-radio-home-module.js.map