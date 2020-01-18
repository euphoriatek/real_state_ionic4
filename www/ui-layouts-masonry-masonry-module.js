(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-masonry-masonry-module"],{

/***/ "./src/app/ui-layouts/masonry/masonry.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/masonry/masonry.module.ts ***!
  \******************************************************/
/*! exports provided: MasonryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonryPageModule", function() { return MasonryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _masonry_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masonry.page */ "./src/app/ui-layouts/masonry/masonry.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _masonry_page__WEBPACK_IMPORTED_MODULE_5__["MasonryPage"]
    }
];
var MasonryPageModule = /** @class */ (function () {
    function MasonryPageModule() {
    }
    MasonryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_masonry_page__WEBPACK_IMPORTED_MODULE_5__["MasonryPage"]]
        })
    ], MasonryPageModule);
    return MasonryPageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/masonry/masonry.page.html":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/masonry/masonry.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title slot=\"start\">Masonry</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding>\n\n<!--***********  Masonry  ***********-->\n\n<div class=\"masonry-layout\">\n  <div class=\"masonry-content \" *ngFor=\"let masonry of lists | async\">\n      <img [src]=\"masonry.url\"  />      \n      <div class=\"content-padding\">\n        <p><strong>{{masonry.title}}</strong></p>\n        <p>{{masonry.description}}</p>\n      </div>\n\n       <ion-list>\n        <ion-item lines=\"none\">\n          <ion-avatar>\n            <img [src]=\"masonry.profileImg\">\n          </ion-avatar>\n          <ion-label slot=\"\">\n            <h3>{{masonry.profileName}}</h3>\n          </ion-label>\n        </ion-item>    \n      </ion-list>     \n  </div>\n</div> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-layouts/masonry/masonry.page.scss":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/masonry/masonry.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background-color: #eeeeee; }\n\n.expanded-image img {\n  min-height: initial; }\n\n.list-ios, .list-md {\n  margin-bottom: 0px; }\n\n.item-ios, .item.md {\n  padding-left: 10px; }\n\n.masonry-layout {\n  -webkit-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 8px;\n          column-gap: 8px;\n  padding: 8px; }\n\n.masonry-content {\n  background-color: #fff;\n  display: inline-block;\n  margin: 0px 0px 8px 0px;\n  width: 100%; }\n\n.content-padding {\n  padding: 0px 5px 0px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL21hc29ucnkvbWFzb25yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDQSxtQkFBa0IsRUFDakI7O0FBQ0Q7RUFDRSx3QkFBZTtVQUFmLGdCQUFlO0VBQ2Ysd0JBQWU7VUFBZixnQkFBZTtFQUNmLGFBQVksRUFDYjs7QUFDRDtFQUNFLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFFckIsd0JBQXVCO0VBQ3ZCLFlBQVcsRUFDWjs7QUFDRDtFQUNFLDBCQUF3QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvbWFzb25yeS9tYXNvbnJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG4uZXhwYW5kZWQtaW1hZ2UgaW1nIHtcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcbn1cbi5saXN0LWlvcywgLmxpc3QtbWQge1xuIG1hcmdpbi1ib3R0b206IDBweDsgXG59XG4uaXRlbS1pb3MsIC5pdGVtLm1kIHtcbnBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYXNvbnJ5LWxheW91dHtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5tYXNvbnJ5LWNvbnRlbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gbWFyZ2luOiAwIDAgMWVtO1xuICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudC1wYWRkaW5ne1xuICBwYWRkaW5nOjBweCA1cHggMHB4IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-layouts/masonry/masonry.page.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-layouts/masonry/masonry.page.ts ***!
  \****************************************************/
/*! exports provided: MasonryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonryPage", function() { return MasonryPage; });
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



var MasonryPage = /** @class */ (function () {
    function MasonryPage(menuCtrl, firestore) {
        this.menuCtrl = menuCtrl;
        this.firestore = firestore;
    }
    MasonryPage.prototype.ngOnInit = function () {
        console.log("start");
        this.lists = this.firestore.collection('layout_masonry').valueChanges();
    };
    MasonryPage.prototype.getFeed = function () {
        console.log("start getCategory");
    };
    MasonryPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    MasonryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masonry',
            template: __webpack_require__(/*! ./masonry.page.html */ "./src/app/ui-layouts/masonry/masonry.page.html"),
            styles: [__webpack_require__(/*! ./masonry.page.scss */ "./src/app/ui-layouts/masonry/masonry.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MasonryPage);
    return MasonryPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-masonry-masonry-module.js.map