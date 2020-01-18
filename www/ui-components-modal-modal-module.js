(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-modal-modal-module"],{

/***/ "./src/app/ui-components/modal/modal.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/modal/modal.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.page */ "./src/app/ui-components/modal/modal.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"]
    }
];
var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"]]
        })
    ], ModalPageModule);
    return ModalPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/modal/modal.page.html":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/modal/modal.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title color=\"white\" slot=\"start\">Modal</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n\n<ion-content padding>\n\n  <ion-button color=\"medium\" expand=\"block\" (click)=\"openBottomModal()\">Bottom modal</ion-button>\n  <ion-button color=\"medium\" expand=\"block\"  (click)=\"openTopModal()\">Top modal</ion-button>\n  <ion-button color=\"medium\" expand=\"block\" (click)=\"openMiddleModal()\">Middle modal</ion-button>\n  <ion-button color=\"medium\" expand=\"block\"  (click)=\"openFullModal()\">Full modal</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-components/modal/modal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/modal/modal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvbW9kYWwvbW9kYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-components/modal/modal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ui-components/modal/modal.page.ts ***!
  \***************************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
/* harmony import */ var _modal_detail_modal_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-detail/modal-detail.page */ "./src/app/ui-components/modal-detail/modal-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = /** @class */ (function () {
    function ModalPage(ionicComponentService, modalController) {
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    ModalPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    //******** bottom ***********//
    ModalPage.prototype.openBottomModal = function () {
        this.modalController.create({
            component: _modal_detail_modal_detail_page__WEBPACK_IMPORTED_MODULE_3__["ModalDetailPage"],
            cssClass: 'from-bottom-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Top ***********//
    ModalPage.prototype.openTopModal = function () {
        this.modalController.create({
            component: _modal_detail_modal_detail_page__WEBPACK_IMPORTED_MODULE_3__["ModalDetailPage"],
            cssClass: 'from-top-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Middle ***********//
    ModalPage.prototype.openMiddleModal = function () {
        this.modalController.create({
            component: _modal_detail_modal_detail_page__WEBPACK_IMPORTED_MODULE_3__["ModalDetailPage"],
            cssClass: 'from-middle-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Full ***********//
    ModalPage.prototype.openFullModal = function (image) {
        this.modalController.create({
            component: _modal_detail_modal_detail_page__WEBPACK_IMPORTED_MODULE_3__["ModalDetailPage"],
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    ModalPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.page.html */ "./src/app/ui-components/modal/modal.page.html"),
            styles: [__webpack_require__(/*! ./modal.page.scss */ "./src/app/ui-components/modal/modal.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_2__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ModalPage);
    return ModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-modal-modal-module.js.map