(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-place-travel-place-module"],{

/***/ "./src/app/app-travel/travel-place/travel-place.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-travel/travel-place/travel-place.module.ts ***!
  \****************************************************************/
/*! exports provided: TravelPlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlacePageModule", function() { return TravelPlacePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_place_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-place.page */ "./src/app/app-travel/travel-place/travel-place.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_place_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlacePage"]
    }
];
var TravelPlacePageModule = /** @class */ (function () {
    function TravelPlacePageModule() {
    }
    TravelPlacePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_place_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlacePage"]]
        })
    ], TravelPlacePageModule);
    return TravelPlacePageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-place/travel-place.page.html":
/*!****************************************************************!*\
  !*** ./src/app/app-travel/travel-place/travel-place.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\"> \n        <ion-buttons slot=\"start\" >\n            <ion-back-button class=\"ion-margin-left ion-padding-left\" color=\"orange\"  ></ion-back-button>\n        </ion-buttons>\n        <ion-title  class=\"main-header4\">Places</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button  (click)=\"openMap(categoryId)\">\n              <ion-icon color=\"orange\" slot=\"icon-only\" name=\"ios-pin-outline\" ></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content  no-padding>\n\n<!-- Skeleton screen -->\n<div *ngIf=\"!places\">\n    <ion-list class=\"ion-padding\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item *ngFor=\"let i of [0,1,2,3,4,5]\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>  \n\n<div *ngIf=\"places\">\n    <ion-list class=\"ion-margin-top ion-padding-top\">\n        <ion-item *ngFor=\"let place of places\" lines=\"none\" button routerLink=\"/travel-place-detail/{{place.id}}\"  >\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"place.image_header\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{place.name}}</h2>\n              <p>{{place.description}}</p>\n              <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < place.rating ? 'star' : 'star-outline'\">\n              </ion-icon>\n            </ion-label>\n        </ion-item>\n      </ion-list>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-travel/travel-place/travel-place.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/app-travel/travel-place/travel-place.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  --size: 50px;\n  margin-bottom: 15px;\n  border-radius: 8px  !important;\n  background-color: #dddddd;\n  min-width: 6rem;\n  min-height: 5rem; }\n  ion-thumbnail ion-img {\n    border-radius: 8px  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1wbGFjZS90cmF2ZWwtcGxhY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBTztFQUlQLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsMEJBQXlCO0VBR3pCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBT25CO0VBbEJEO0lBY1EsK0JBQThCLEVBR2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtcGxhY2UvdHJhdmVsLXBsYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iaWctaWNvbntcbi8vICAgIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuaW9uLXRodW1ibmFpbCB7XG4gICAgLS1zaXplOiA1MHB4O1xuICAgIC8vIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyBtaW4taGVpZ2h0OiA4cmVtO1xuICAgIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgbWluLWhlaWdodDogNXJlbTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBpb24taW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDZyZW07ICAgIFxuICAgICAgICAvLyBtaW4td2lkdGg6IDhyZW07XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-travel/travel-place/travel-place.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-travel/travel-place/travel-place.page.ts ***!
  \**************************************************************/
/*! exports provided: TravelPlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlacePage", function() { return TravelPlacePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
/* harmony import */ var _travel_map_modal_travel_map_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../travel-map-modal/travel-map-modal.page */ "./src/app/app-travel/travel-map-modal/travel-map-modal.page.ts");
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






var TravelPlacePage = /** @class */ (function () {
    function TravelPlacePage(travelService, activatedRoute, navController, router, ionicComponentService, modalController) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        console.log(this.router.url, "Current URL");
    }
    TravelPlacePage.prototype.ngOnInit = function () {
        this.getPlace();
    };
    TravelPlacePage.prototype.getPlace = function () {
        var _this = this;
        console.log("call  getPlace()");
        this.travelService.getPlacesByCatId(this.categoryId).subscribe(function (actionArray) {
            console.log(actionArray);
            _this.places = actionArray;
        });
    };
    TravelPlacePage.prototype.openMap = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openModal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _travel_map_modal_travel_map_modal_page__WEBPACK_IMPORTED_MODULE_5__["TravelMapModalPage"],
                                cssClass: '',
                                componentProps: {
                                    categoryId: categoryId
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
    TravelPlacePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-place',
            template: __webpack_require__(/*! ./travel-place.page.html */ "./src/app/app-travel/travel-place/travel-place.page.html"),
            styles: [__webpack_require__(/*! ./travel-place.page.scss */ "./src/app/app-travel/travel-place/travel-place.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TravelPlacePage);
    return TravelPlacePage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-place-travel-place-module.js.map