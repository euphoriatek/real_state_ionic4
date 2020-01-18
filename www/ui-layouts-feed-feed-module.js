(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-feed-feed-module"],{

/***/ "./src/app/ui-layouts/feed/feed.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/feed/feed.module.ts ***!
  \************************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed.page */ "./src/app/ui-layouts/feed/feed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/feed/feed.page.html":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/feed/feed.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">FEED</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n  <ion-content #content>\n\n<ion-content fullscreen=\"\"  no-paddding >\n  <ion-card mode=\"ios\"  *ngFor=\"let feed of feeds  | async\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n              <img [src]=\"feed.imgProfile\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{feed.name}}</h3>\n            <p>November 5, 1955</p>\n          </ion-label>\n        </ion-item>\n        <ion-slides pager>\n            <ng-container *ngFor=\"let images of  feed.images | slice:1\">\n          <ion-slide  [ngStyle]=\"{'background' : 'url(' + images.url + ')'}\">\n          </ion-slide>\n            </ng-container>\n        </ion-slides>\n      \n    <ion-card-content>\n      <ion-card-title>\n        <h3 class=\"main_header4\">  {{feed.title}}</h3>\n      </ion-card-title>\n      <p>\n        {{feed.description}}\n      </p>\n    </ion-card-content>\n    \n    <ion-row>\n        <ion-col>\n          <ion-button fill=\"clear\" size=\"small\" color=\"dark\">\n            <ion-icon slot=\"start\" name=\"ios-chatboxes\" color=\"gray\"></ion-icon>\n            {{feed.comment}}\n          </ion-button>\n          <ion-button fill=\"clear\" size=\"small\" color=\"dark\">\n              <ion-icon slot=\"start\" name=\"ios-heart\" color=\"gray\"></ion-icon>\n              {{feed.like}}\n          </ion-button>\n        </ion-col>\n   \n        <ion-col center class=\"ion-text-right\"> \n            <ion-button fill=\"clear\" size=\"small\" color=\"dark\">\n                REPLY\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n  </ion-card>\n<!-- \n  <ion-fab right bottom>\n      <button ion-fab color=\"amber\"><ion-icon name=\"md-share\"></ion-icon></button>\n      <ion-fab-list side=\"top\">\n        <button ion-fab><ion-icon name=\"logo-facebook\"></ion-icon></button>\n        <button ion-fab><ion-icon name=\"logo-twitter\"></ion-icon></button>\n        <button ion-fab><ion-icon name=\"logo-vimeo\"></ion-icon></button>\n        <button ion-fab><ion-icon name=\"logo-googleplus\"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab> -->\n \n</ion-content>"

/***/ }),

/***/ "./src/app/ui-layouts/feed/feed.page.scss":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/feed/feed.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\n  height: 300px;\n  width: auto; }\n\n.swiper-slide {\n  background-size: cover !important;\n  background-position: center !important; }\n\n.content {\n  background-color: #ddd; }\n\n#imageSlide {\n  max-width: 100vw !important;\n  max-height: 100vh !important; }\n\nion-card {\n  margin: 0px 0px 15px 0px !important;\n  width: 100% !important; }\n\n.fit-screen {\n  max-width: 100%;\n  max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxjQUFhO0VBQ2IsWUFBVyxFQUNaOztBQUNEO0VBQ0Usa0NBQWlDO0VBQ2pDLHVDQUFzQyxFQUN2Qzs7QUFFRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDN0I7O0FBS0Q7RUFDRSxvQ0FBbUM7RUFDbkMsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsZ0JBQWM7RUFDZCxpQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgLy8gaGVpZ2h0OiA0MHZoO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgfVxuICAjaW1hZ2VTbGlkZXtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBcbiAgfVxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDBweCAwcHggMTVweCAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5maXQtc2NyZWVue1xuICAgIG1heC13aWR0aDoxMDAlO1xuICAgIG1heC1oZWlnaHQ6MTAwJTtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/ui-layouts/feed/feed.page.ts":
/*!**********************************************!*\
  !*** ./src/app/ui-layouts/feed/feed.page.ts ***!
  \**********************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedPage = /** @class */ (function () {
    function FeedPage(firestore, menuCtrl) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
    }
    FeedPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    FeedPage.prototype.ngOnInit = function () {
        console.log("start");
        this.feeds = this.firestore.collection('layout_feed').valueChanges();
    };
    FeedPage.prototype.getFeed = function () {
        console.log("start getCategory");
    };
    FeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.page.html */ "./src/app/ui-layouts/feed/feed.page.html"),
            styles: [__webpack_require__(/*! ./feed.page.scss */ "./src/app/ui-layouts/feed/feed.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-feed-feed-module.js.map