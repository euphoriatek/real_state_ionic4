(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile1-profile1-module"],{

/***/ "./src/app/ui-layouts/profile1/profile1.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile1/profile1.module.ts ***!
  \********************************************************/
/*! exports provided: Profile1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1PageModule", function() { return Profile1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile1.page */ "./src/app/ui-layouts/profile1/profile1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile1_page__WEBPACK_IMPORTED_MODULE_5__["Profile1Page"]
    }
];
var Profile1PageModule = /** @class */ (function () {
    function Profile1PageModule() {
    }
    Profile1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile1_page__WEBPACK_IMPORTED_MODULE_5__["Profile1Page"]]
        })
    ], Profile1PageModule);
    return Profile1PageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/profile1/profile1.page.html":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile1/profile1.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">PROFILE 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n\n    <div id=\"profile1-info\" class=\"test-class\" padding>\n        <img id=\"profile1-image\" class=\"pop-in\" [src]=\"(profile | async)?.imgProfile\"/>\n        <h3 id=\"profile1-name\">{{(profile | async)?.name}}</h3>\n        <!--<p>{{(profile2 | async)?.company}} &bull; {{(profile2 | async)?.position}}</p> -->\n        <p class=\"profile1-description\">{{(profile | async)?.position}} of {{(profile | async)?.company}}</p>\n        <ion-button  *ngIf=\"!following\"  color=\"green\" (click)=\"follow()\">Follow</ion-button>\n        <ion-button *ngIf=\"following\"  color=\"light\" (click)=\"follow()\">\n          <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n          Following\n        </ion-button>\n    \n     \n        <ion-grid >\n          <ion-row class=\"profile1-numbers\">\n    \n            <ion-col size=\"4\">\n              <span>{{(profile | async)?.follower}}</span>\n              <p>Followers</p>\n            </ion-col>\n    \n            <ion-col size=\"4\">   \n              <span>{{(profile | async)?.following}}</span>\n              <p>Following</p>\n            </ion-col>\n    \n            <ion-col size=\"4\">\n              <span>{{(profile | async)?.following}}</span>\n              <p>Following</p>\n            </ion-col>\n    \n          </ion-row>\n        </ion-grid>\n    \n      </div>\n    \n    \n    <!--***********  About  ***********-->\n    <ion-item class=\"margin-top-5\" lines=\"none\">\n        <h1 class=\"margin-top-5 main-header5\">About</h1>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <p >{{(profile | async)?.aboutMe}}</p>\n    </ion-item>\n    \n    <!--***********  Contact  ***********-->\n    <ion-item class=\"margin-top-5\" lines=\"none\">\n        <h1 class=\"margin-top-5 main-header5\">Contact</h1>\n    </ion-item>\n      <ion-list>\n          <ion-item lines=\"none\">\n            <ion-icon slot=\"start\" name=\"ios-mail\" item-left></ion-icon>\n            <ion-label>\n                <h2>ceo@cemo.com</h2>\n                <p>work email</p>\n            </ion-label>\n  \n        </ion-item>\n  \n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"ios-call\" item-left></ion-icon>\n          <ion-label>\n              <h2>009923124322</h2>\n              <p>mobile phone</p>\n          </ion-label>\n  \n        </ion-item>\n  \n        <ion-item lines=\"none\">\n            <ion-icon slot=\"start\" name=\"logo-linkedin\" item-left></ion-icon>\n            <ion-label>\n                <h2>linkedin.com/cemo</h2>\n                <p>linked in </p>\n            </ion-label>\n  \n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"logo-facebook\" item-left></ion-icon>\n          <ion-label>\n              <h2>facebook.com/cemo</h2>\n              <p>facebook</p>\n          </ion-label>\n  \n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-icon slot=\"start\" name=\"logo-skype\" item-left></ion-icon>\n            <ion-label>\n                <h2>cemo@outlook.com</h2>\n                <p>skype</p>\n            </ion-label>\n  \n        </ion-item>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-layouts/profile1/profile1.page.scss":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile1/profile1.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile1-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 110px;\n  margin: 0 auto 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.1);\n  -o-border-image: initial;\n     border-image: initial; }\n\n#profile1-info {\n  width: 100%;\n  text-align: center; }\n\n#profile1-name {\n  color: #444;\n  font-size: 22px; }\n\n.profile1-description {\n  font-size: 15px;\n  color: #888; }\n\n.profile1-numbers p {\n  color: #888;\n  font-size: 18px;\n  margin-top: 3px; }\n\n.profile1-numbers span {\n  font-weight: bold;\n  font-size: 18px;\n  color: #34354c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUxL3Byb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFFZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQix1Q0FBcUM7RUFDckMseUJBQXFCO0tBQXJCLHNCQUFxQixFQUV0Qjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRjtFQUVLLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGdCQUFlLEVBQ2hCOztBQUxKO0VBT0ssa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvdWktbGF5b3V0cy9wcm9maWxlMS9wcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZTEtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsMC4xKTtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDExcHggMjBweCAtM3B4IHJnYmEoMTQyLCAxMzYsIDE0NiwgMC43NSk7XG4gIH1cbiAgI3Byb2ZpbGUxLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjcHJvZmlsZTEtbmFtZSB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9maWxlMS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG5cbiAucHJvZmlsZTEtbnVtYmVycyB7XG4gICAgcCB7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMzQzNTRjO1xuICAgIH1cbiAgfSBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/ui-layouts/profile1/profile1.page.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/profile1/profile1.page.ts ***!
  \******************************************************/
/*! exports provided: Profile1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1Page", function() { return Profile1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Profile1Page = /** @class */ (function () {
    function Profile1Page(firestore, menuCtrl, activatedRoute, navController, modalController, router, alertController, ionicComponentService) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.modalController = modalController;
        this.router = router;
        this.alertController = alertController;
        this.ionicComponentService = ionicComponentService;
        this.following = false;
    }
    Profile1Page.prototype.ngOnInit = function () {
        this.profile = this.firestore.doc('layout_profile/GedsU7IYmZAdXupac9LD').valueChanges();
    };
    Profile1Page.prototype.follow = function () {
        this.following = !this.following;
        this.ionicComponentService.presentToast('Follow user clicked', 2000);
    };
    Profile1Page.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    Profile1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile1',
            template: __webpack_require__(/*! ./profile1.page.html */ "./src/app/ui-layouts/profile1/profile1.page.html"),
            styles: [__webpack_require__(/*! ./profile1.page.scss */ "./src/app/ui-layouts/profile1/profile1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"]])
    ], Profile1Page);
    return Profile1Page;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-profile1-profile1-module.js.map