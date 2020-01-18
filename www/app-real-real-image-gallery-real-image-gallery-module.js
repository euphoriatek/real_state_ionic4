(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-real-real-image-gallery-real-image-gallery-module"],{

/***/ "./src/app/app-real/real-image-gallery/real-image-gallery.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/app-real/real-image-gallery/real-image-gallery.module.ts ***!
  \**************************************************************************/
/*! exports provided: RealImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealImageGalleryPageModule", function() { return RealImageGalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_image_gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-image-gallery.page */ "./src/app/app-real/real-image-gallery/real-image-gallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _real_image_gallery_page__WEBPACK_IMPORTED_MODULE_5__["RealImageGalleryPage"]
    }
];
var RealImageGalleryPageModule = /** @class */ (function () {
    function RealImageGalleryPageModule() {
    }
    RealImageGalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_image_gallery_page__WEBPACK_IMPORTED_MODULE_5__["RealImageGalleryPage"]]
        })
    ], RealImageGalleryPageModule);
    return RealImageGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-image-gallery/real-image-gallery.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/app-real/real-image-gallery/real-image-gallery.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>real-image_gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-real/real-image-gallery/real-image-gallery.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/app-real/real-image-gallery/real-image-gallery.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1yZWFsL3JlYWwtaW1hZ2UtZ2FsbGVyeS9yZWFsLWltYWdlLWdhbGxlcnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-real/real-image-gallery/real-image-gallery.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-real/real-image-gallery/real-image-gallery.page.ts ***!
  \************************************************************************/
/*! exports provided: RealImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealImageGalleryPage", function() { return RealImageGalleryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RealImageGalleryPage = /** @class */ (function () {
    function RealImageGalleryPage() {
    }
    RealImageGalleryPage.prototype.ngOnInit = function () {
    };
    RealImageGalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-image-gallery',
            template: __webpack_require__(/*! ./real-image-gallery.page.html */ "./src/app/app-real/real-image-gallery/real-image-gallery.page.html"),
            styles: [__webpack_require__(/*! ./real-image-gallery.page.scss */ "./src/app/app-real/real-image-gallery/real-image-gallery.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RealImageGalleryPage);
    return RealImageGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-real-real-image-gallery-real-image-gallery-module.js.map