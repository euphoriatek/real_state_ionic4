(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-gallery-gallery-module"],{

/***/ "./src/app/ui-layouts/gallery/gallery.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/gallery/gallery.module.ts ***!
  \******************************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery.page */ "./src/app/ui-layouts/gallery/gallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]
    }
];
var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]]
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/gallery/gallery.page.html":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/gallery/gallery.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title slot=\"start\">GALERY</ion-title>\n    </ion-toolbar>\n    <ion-toolbar no-border-top color=\"danger\">\n      <ion-segment [(ngModel)]=\"galleryView\" >\n        <ion-segment-button value=\"two\">\n             <ion-label>Two columns </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"three\">\n            <ion-label>Three columns </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"four\">\n            <ion-label>Four columns</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n\n  \n  <!--***********  2 columns  ***********-->\n  <ion-grid  *ngIf=\"galleryView==='two'\">\n      <ion-row wrap color=\"gray\">\n        <ion-col size=\"6\"  *ngFor=\"let image of imagesArray,let i = index\">\n            <img [src]=\"image.url\"   (click)=\"openImageViewer(i)\"/>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  <!--***********  3 columns  ***********-->\n  \n  <ion-grid *ngIf=\"galleryView==='three'\">\n      <ion-row wrap color=\"gray\">\n        <ion-col size=\"4\"  *ngFor=\"let image of imagesArray,let i = index\"  >\n          <img [src]=\"image.url\"   (click)=\"openImageViewer(i)\"/>\n        \n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  \n  <!--***********  4 columns  ***********-->\n  <ion-grid *ngIf=\"galleryView==='four'\">\n      <ion-row wrap color=\"gray\">\n        <ion-col  size=\"3\" *ngFor=\"let image of imagesArray,let i = index\" >\n            <img [src]=\"image.url\"   (click)=\"openImageViewer(i)\"/>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/ui-layouts/gallery/gallery.page.scss":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/gallery/gallery.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-layouts/gallery/gallery.page.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-layouts/gallery/gallery.page.ts ***!
  \****************************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _gallery_viewer_modal_gallery_viewer_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery-viewer-modal/gallery-viewer-modal.page */ "./src/app/ui-layouts/gallery-viewer-modal/gallery-viewer-modal.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//*********** Import  gallery viewer modal **************//

var GalleryPage = /** @class */ (function () {
    function GalleryPage(firestore, menuCtrl, loadingController, modalController, loadingPopup) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.loadingPopup = loadingPopup;
        this.imagesArray = [];
        //*********** View mode  **************/
        this.galleryView = "two";
    }
    GalleryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.firestore.collection('layout_gallery').valueChanges();
        this.images.subscribe(function (res) {
            _this.imagesArray = res;
            console.log("imageArray=" + JSON.stringify(_this.imagesArray));
            setTimeout(function () {
                // loadingPopup.dismiss();
            }, 1000);
        });
    };
    GalleryPage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    GalleryPage.prototype.openImageViewer = function (image) {
        console.log("openImageViewer");
        // let modal = this.modalCtrl.create(CartPage, { data: this.cart });
        this.modalController.create({
            component: _gallery_viewer_modal_gallery_viewer_modal_page__WEBPACK_IMPORTED_MODULE_3__["GalleryViewerModalPage"],
            componentProps: {
                data: this.imagesArray,
                index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    GalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.page.html */ "./src/app/ui-layouts/gallery/gallery.page.html"),
            styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/ui-layouts/gallery/gallery.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], GalleryPage);
    return GalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-gallery-gallery-module.js.map