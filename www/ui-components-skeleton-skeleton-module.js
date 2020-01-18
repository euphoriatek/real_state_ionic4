(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-skeleton-skeleton-module"],{

/***/ "./src/app/ui-components/skeleton/skeleton.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/skeleton/skeleton.module.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonPageModule", function() { return SkeletonPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skeleton_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skeleton.page */ "./src/app/ui-components/skeleton/skeleton.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _skeleton_page__WEBPACK_IMPORTED_MODULE_5__["SkeletonPage"]
    }
];
var SkeletonPageModule = /** @class */ (function () {
    function SkeletonPageModule() {
    }
    SkeletonPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_skeleton_page__WEBPACK_IMPORTED_MODULE_5__["SkeletonPage"]]
        })
    ], SkeletonPageModule);
    return SkeletonPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/skeleton/skeleton.page.html":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/skeleton/skeleton.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border >\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title color=\"white\" slot=\"start\">skeleton</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n    <div class=\"top-grey-box\" ></div>\n    <ion-thumbnail class=\"large\" slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n    <ion-list class=\"ion-padding\">\n   \n        <!-- skeleton text -->\n    <div class=\"ion-margin-top ion-padding custom-skeleton\" >\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n\n        <!-- skeleton header  -->\n        <ion-list-header>\n          <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        </ion-list-header>\n\n        <!-- skeleton thumbnail -->\n        <ion-item *ngFor=\"let i of [0,1,2]\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <!-- <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar> -->\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n\n\n        <!-- skeleton avatar -->\n        <ion-item *ngFor=\"let i of [0,1,2]\">\n            <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          \n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-components/skeleton/skeleton.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/skeleton/skeleton.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail.large {\n  --size: 100%; }\n\n.top-grey-box {\n  width: 100%;\n  height: 150px;\n  background-color: #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL3NrZWxldG9uL3NrZWxldG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQU8sRUFpQlY7O0FBQUE7RUFDRyxZQUFXO0VBQ1gsY0FBYTtFQUNiLHVCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbC5sYXJnZSB7XG4gICAgLS1zaXplOiAxMDAlO1xuICAgIC8vIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLy8gbWluLXdpZHRoOiA2cmVtOyAgICBcbiAgICAvLyBtaW4taGVpZ2h0OiA4cmVtO1xuICAgIC8vIG1pbi13aWR0aDogNnJlbTsgICAgXG4gICAgLy8gbWluLWhlaWdodDogNXJlbTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAvLyBpb24taW1nIHtcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xuICAgIC8vICAgICAvLyBtYXgtd2lkdGg6IDZyZW07ICAgIFxuICAgIC8vICAgICAvLyBtaW4td2lkdGg6IDhyZW07XG4gICAgLy8gfVxufS50b3AtZ3JleS1ib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-components/skeleton/skeleton.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui-components/skeleton/skeleton.page.ts ***!
  \*********************************************************/
/*! exports provided: SkeletonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonPage", function() { return SkeletonPage; });
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


var SkeletonPage = /** @class */ (function () {
    function SkeletonPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
    }
    SkeletonPage.prototype.ngOnInit = function () {
    };
    SkeletonPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    SkeletonPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skeleton',
            template: __webpack_require__(/*! ./skeleton.page.html */ "./src/app/ui-components/skeleton/skeleton.page.html"),
            styles: [__webpack_require__(/*! ./skeleton.page.scss */ "./src/app/ui-components/skeleton/skeleton.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], SkeletonPage);
    return SkeletonPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-skeleton-skeleton-module.js.map