(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-animation-animation-module"],{

/***/ "./src/app/ui-components/animation/animation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/animation/animation.module.ts ***!
  \*************************************************************/
/*! exports provided: AnimationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPageModule", function() { return AnimationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation.page */ "./src/app/ui-components/animation/animation.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _animation_page__WEBPACK_IMPORTED_MODULE_5__["AnimationPage"]
    }
];
var AnimationPageModule = /** @class */ (function () {
    function AnimationPageModule() {
    }
    AnimationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_animation_page__WEBPACK_IMPORTED_MODULE_5__["AnimationPage"]]
        })
    ], AnimationPageModule);
    return AnimationPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/animation/animation.page.html":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/animation/animation.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"orange\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">Animation</ion-title>\n    </ion-toolbar>\n\n    <ion-toolbar no-border-top color=\"orange\">\n      <ion-segment [(ngModel)]=\"viewMode\" >\n        <ion-segment-button value=\"set1\">\n             <ion-label>Set 1</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"set2\">\n            <ion-label>Set 2 </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"set3\">\n            <ion-label>Set 3</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n\n    <div *ngIf=\"viewMode==='set1'\">\n      <!--********** Drop in *************-->\n        <ion-card color=\"darkGray\" class=\"drop-in\">\n          <ion-card-content text-center>   \n            <h3>Drop-In</h3>\n            <p>\n              Usage: class=\"drop-in\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n      <!--********** wobble*************-->\n        <ion-card color=\"darkGray\" class=\"wobble\">\n          <ion-card-content text-center>   \n            <h3>Wobble</h3>\n            <p>\n              Usage: class=\"wobble\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n    \n      <!--********** Fadein-down *************-->\n     <ion-card color=\"darkGray\" class=\"fadein-down\">\n          <ion-card-content text-center>   \n            <h3>Fadein-down</h3>\n            <p>\n              Usage: class=\"fadein-down\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n      <!--********** Ta-da *************-->\n        <ion-card color=\"darkGray\" class=\"ta-da\">\n          <ion-card-content text-center>   \n            <h3>Ta-da</h3>\n            <p>\n              Usage: class=\"ta-da\"\n            </p>\n          </ion-card-content>\n        </ion-card>   \n    \n    </div>\n    \n    \n    \n    \n    <div *ngIf=\"viewMode==='set2'\">\n     \n    \n      <!--********** Slide up *************-->\n     <ion-card color=\"darkGray\" class=\"slide-up\">\n          <ion-card-content text-center margin-bottom>   \n            <h3>Slide-up</h3>\n            <p>\n              Usage: class=\"slide-up\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n    <!--********** Slide left *************-->\n     <ion-card color=\"darkGray\" class=\"slide-left\">\n      <ion-card-content text-center margin-bottom>   \n        <h3>Slide-left</h3>\n        <p>\n          Usage: class=\"slide-left\"\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <!--********** Slide right *************-->\n          <ion-card color=\"darkGray\" class=\"slide-right\">\n            <ion-card-content text-center margin-bottom>   \n              <h3>Slide-right</h3>\n              <p>\n                Usage: class=\"slide-right\"\n              </p>\n            </ion-card-content>\n          </ion-card>\n      <!--********** Wave *************-->\n        <ion-card color=\"darkGray\" class=\"wave\">\n          <ion-card-content text-center>   \n            <h3>Wave</h3>\n            <p>\n              Usage: class=\"wave\"\n            </p>\n          </ion-card-content>\n        </ion-card>   \n      <!--********** Pop in *************-->\n        <ion-card color=\"darkGray\" class=\"pop-in\">\n          <ion-card-content text-center>   \n            <h3>Pop-In</h3>\n            <p>\n              Usage: class=\"pop-in\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n      <!--********** Pop put *************-->\n        <ion-card color=\"darkGray\" class=\"pop-out\">\n          <ion-card-content text-center>   \n            <h3>Pop-Out</h3>\n            <p>\n              Usage: class=\"pop-out\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n    \n    \n    </div>\n    \n    \n    \n    <div *ngIf=\"viewMode==='set3'\">\n      <!--********** Swing *************-->\n        <ion-card color=\"darkGray\" class=\"swing\">\n          <ion-card-content text-center>   \n            <h3>Swing</h3>\n            <p>\n              Usage: class=\"swing\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n      <!--********** Shake*************-->\n        <ion-card color=\"darkGray\" class=\"shake\">\n          <ion-card-content text-center>   \n            <h3>Shake</h3>\n            <p>\n              Usage: class=\"shake\"\n            </p>\n          </ion-card-content >\n        </ion-card>\n    \n      <!--********** Bounce *************-->\n     <ion-card color=\"darkGray\" class=\"bounce\">\n          <ion-card-content text-center>   \n            <h3>Bounce</h3>\n            <p>\n              Usage: class=\"bounce\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n    \n    </div>\n    <ion-content>"

/***/ }),

/***/ "./src/app/ui-components/animation/animation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/animation/animation.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvYW5pbWF0aW9uL2FuaW1hdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-components/animation/animation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/animation/animation.page.ts ***!
  \***********************************************************/
/*! exports provided: AnimationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPage", function() { return AnimationPage; });
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


var AnimationPage = /** @class */ (function () {
    function AnimationPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        this.viewMode = "set1";
    }
    AnimationPage.prototype.ngOnInit = function () {
    };
    AnimationPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    AnimationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animation',
            template: __webpack_require__(/*! ./animation.page.html */ "./src/app/ui-components/animation/animation.page.html"),
            styles: [__webpack_require__(/*! ./animation.page.scss */ "./src/app/ui-components/animation/animation.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], AnimationPage);
    return AnimationPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-animation-animation-module.js.map