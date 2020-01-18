(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-place-review-travel-place-review-module"],{

/***/ "./src/app/app-travel/travel-place-review/travel-place-review.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-review/travel-place-review.module.ts ***!
  \******************************************************************************/
/*! exports provided: TravelPlaceReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlaceReviewPageModule", function() { return TravelPlaceReviewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_place_review_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-place-review.page */ "./src/app/app-travel/travel-place-review/travel-place-review.page.ts");
/* harmony import */ var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating/dist */ "./node_modules/ionic4-rating/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _travel_place_review_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlaceReviewPage"]
    }
];
var TravelPlaceReviewPageModule = /** @class */ (function () {
    function TravelPlaceReviewPageModule() {
    }
    TravelPlaceReviewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_place_review_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlaceReviewPage"]]
        })
    ], TravelPlaceReviewPageModule);
    return TravelPlaceReviewPageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-place-review/travel-place-review.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-review/travel-place-review.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n        <ion-back-button color=\"orange\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title  class=\"main-header4\">Review</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n    <!-- <ion-item lines=\"none\">\n        <ion-label>\n          <ion-text color=\"\">\n              <h1 class=\"travel_header2\">Reviews</h1>\n          </ion-text>\n        </ion-label>\n    </ion-item>     -->\n\n  <!--*********** Review list  ***********-->\n  <ion-card *ngFor=\"let review of reviews | async\" >\n    <ion-item  lines=\"none\" detail=\"false\">\n        <ion-avatar slot=\"start\" class=\"avatar-top\">\n            <ion-img [src]=\"review.userProfileImage\"></ion-img>\n        </ion-avatar>\n        <ion-label >\n            <h2>{{review.name}}</h2>\n            <p> {{review.createdTime.toDate() | date: 'dd/MM/yyyy'}}</p>\n        </ion-label>\n        <ion-label text-right slot=\"end\" >            \n            <ion-icon  style=\"margin-right:2px; font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < review.rating ? 'star' : 'star-outline'\"></ion-icon>\n        </ion-label>\n        \n    </ion-item>\n    \n    <ion-card-content>\n        {{review.comment}}\n    </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar>\n        <div class=\"ion-margin\">\n                <!-- <ion-button expand=\"block\"  color=\"orange\"  *ngIf=\"(place | async) as placeId\" class=\"team\" (click)=\"openAddReview(placeId.id)\">Write review</ion-button> -->\n            <ion-button expand=\"block\"  color=\"orange\"  class=\"team\" (click)=\"openAddReview()\">Write a review</ion-button>\n        </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/app-travel/travel-place-review/travel-place-review.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-review/travel-place-review.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 9px  !important;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1wbGFjZS1yZXZpZXcvdHJhdmVsLXBsYWNlLXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBOEI7RUFLOUIscURBQXFELEVBQ3hEIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRyYXZlbC90cmF2ZWwtcGxhY2UtcmV2aWV3L3RyYXZlbC1wbGFjZS1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG5cbiAgICBib3JkZXItcmFkaXVzOiA5cHggICFpbXBvcnRhbnQ7XG4gICAgLy8td2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwKSAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-travel/travel-place-review/travel-place-review.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-review/travel-place-review.page.ts ***!
  \****************************************************************************/
/*! exports provided: TravelPlaceReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlaceReviewPage", function() { return TravelPlaceReviewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
/* harmony import */ var _travel_place_review_add_travel_place_review_add_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-place-review-add/travel-place-review-add.page */ "./src/app/app-travel/travel-place-review-add/travel-place-review-add.page.ts");
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




// import travel-place-review-add page for modal

var TravelPlaceReviewPage = /** @class */ (function () {
    function TravelPlaceReviewPage(travelService, activatedRoute, modalController, navController, router, loadingController) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.navController = navController;
        this.router = router;
        this.loadingController = loadingController;
        this.rate = 3;
        this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
        console.log("placeId=" + this.placeId);
    }
    TravelPlaceReviewPage.prototype.ngOnInit = function () {
        this.getPlace();
    };
    TravelPlaceReviewPage.prototype.getPlace = function () {
        // use async pipe //
        console.log("call  getPlace()");
        this.reviews = this.travelService.getReviews(this.placeId, 100);
        // this.travelService.getReviews( this.categoryId,1 ).subscribe(actionArray => {
        //   console.log(actionArray);
        //   this.reviews = actionArray
        // }); 
    };
    TravelPlaceReviewPage.prototype.goAddReview = function () {
        console.log("........ go to ADD Review Page");
        this.router.navigateByUrl('/travel-place-review-add/' + this.placeId);
    };
    TravelPlaceReviewPage.prototype.openAddReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _travel_place_review_add_travel_place_review_add_page__WEBPACK_IMPORTED_MODULE_4__["TravelPlaceReviewAddPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                placeId: this.placeId
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
    TravelPlaceReviewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-place-review',
            template: __webpack_require__(/*! ./travel-place-review.page.html */ "./src/app/app-travel/travel-place-review/travel-place-review.page.html"),
            styles: [__webpack_require__(/*! ./travel-place-review.page.scss */ "./src/app/app-travel/travel-place-review/travel-place-review.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], TravelPlaceReviewPage);
    return TravelPlaceReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-place-review-travel-place-review-module.js.map