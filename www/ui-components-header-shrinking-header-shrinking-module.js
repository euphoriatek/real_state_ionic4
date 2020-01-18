(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-shrinking-header-shrinking-module"],{

/***/ "./src/app/ui-components/header-shrinking/header-shrinking.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/header-shrinking/header-shrinking.module.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderShrinkingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderShrinkingPageModule", function() { return HeaderShrinkingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_shrinking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-shrinking.page */ "./src/app/ui-components/header-shrinking/header-shrinking.page.ts");
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
        component: _header_shrinking_page__WEBPACK_IMPORTED_MODULE_5__["HeaderShrinkingPage"]
    }
];
var HeaderShrinkingPageModule = /** @class */ (function () {
    function HeaderShrinkingPageModule() {
    }
    HeaderShrinkingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_shrinking_page__WEBPACK_IMPORTED_MODULE_5__["HeaderShrinkingPage"]]
        })
    ], HeaderShrinkingPageModule);
    return HeaderShrinkingPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/header-shrinking/header-shrinking.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/header-shrinking/header-shrinking.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">shrinking header</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"tertiary\">\n      <ion-searchbar  placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-search\" ></ion-searchbar>\n  </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content #pageContent no-padding>\n      <!-- skeleton thumbnail -->\n      <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n         <ion-thumbnail slot=\"start\">\n           <ion-skeleton-text ></ion-skeleton-text>\n         </ion-thumbnail>\n         <!-- <ion-avatar slot=\"start\">\n             <ion-skeleton-text animated></ion-skeleton-text>\n           </ion-avatar> -->\n         <ion-label>\n           <h3>\n             <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n           </h3>\n           <p>\n             <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n           </p>\n           <p>\n             <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n           </p>\n         </ion-label>\n       </ion-item>\n     </ion-content>\n     \n  \n"

/***/ }),

/***/ "./src/app/ui-components/header-shrinking/header-shrinking.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/header-shrinking/header-shrinking.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1zaHJpbmtpbmcvaGVhZGVyLXNocmlua2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXNocmlua2luZy9oZWFkZXItc2hyaW5raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcC1ncmV5LWJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-components/header-shrinking/header-shrinking.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/header-shrinking/header-shrinking.page.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderShrinkingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderShrinkingPage", function() { return HeaderShrinkingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderShrinkingPage = /** @class */ (function () {
    function HeaderShrinkingPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        //****** Hide header ********/
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 40 };
    }
    HeaderShrinkingPage.prototype.ngOnInit = function () {
    };
    HeaderShrinkingPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderShrinkingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-shrinking',
            template: __webpack_require__(/*! ./header-shrinking.page.html */ "./src/app/ui-components/header-shrinking/header-shrinking.page.html"),
            styles: [__webpack_require__(/*! ./header-shrinking.page.scss */ "./src/app/ui-components/header-shrinking/header-shrinking.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], HeaderShrinkingPage);
    return HeaderShrinkingPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-header-shrinking-header-shrinking-module.js.map