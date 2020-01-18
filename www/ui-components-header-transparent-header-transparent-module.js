(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-transparent-header-transparent-module"],{

/***/ "./src/app/ui-components/header-transparent/header-transparent.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HeaderTransparentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTransparentPageModule", function() { return HeaderTransparentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_transparent_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-transparent.page */ "./src/app/ui-components/header-transparent/header-transparent.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _header_transparent_page__WEBPACK_IMPORTED_MODULE_5__["HeaderTransparentPage"]
    }
];
var HeaderTransparentPageModule = /** @class */ (function () {
    function HeaderTransparentPageModule() {
    }
    HeaderTransparentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_transparent_page__WEBPACK_IMPORTED_MODULE_5__["HeaderTransparentPage"]]
        })
    ], HeaderTransparentPageModule);
    return HeaderTransparentPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header no-border>\n  <ion-toolbar class=\"first\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"toggleSideMenu()\">\n            <ion-icon color=\"dark\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title color=\"dark\">Transparent header</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  no-padding fullscreen>\n\n\n\n\n<!-- skeleton thumbnail -->\n<div class=\"top-grey-box\" ></div>\n<ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n\n  <!-- <ion-avatar slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar> -->\n  <ion-label>\n    <h3>\n      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    </h3>\n    <p>\n      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n    </p>\n    <p>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </p>\n  </ion-label>\n</ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n.top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #eb3573; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci10cmFuc3BhcmVudC9oZWFkZXItdHJhbnNwYXJlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDBCQUEwQjtBQUMxQjtFQUNJLDBCQUFhO0VBQ2IseUNBQWlCLEVBQ3BCO0FBRUQ7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQUF3QixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXRyYW5zcGFyZW50L2hlYWRlci10cmFuc3BhcmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5pb24tdG9vbGJhci5maXJzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udG9wLWdyZXktYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWIzNTczO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderTransparentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTransparentPage", function() { return HeaderTransparentPage; });
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


var HeaderTransparentPage = /** @class */ (function () {
    function HeaderTransparentPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
    }
    HeaderTransparentPage.prototype.ngOnInit = function () {
    };
    HeaderTransparentPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderTransparentPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-transparent',
            template: __webpack_require__(/*! ./header-transparent.page.html */ "./src/app/ui-components/header-transparent/header-transparent.page.html"),
            styles: [__webpack_require__(/*! ./header-transparent.page.scss */ "./src/app/ui-components/header-transparent/header-transparent.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], HeaderTransparentPage);
    return HeaderTransparentPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-header-transparent-header-transparent-module.js.map