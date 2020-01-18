(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-real-real-tabs-real-tabs-module"],{

/***/ "./src/app/app-real/real-tabs/real-tabs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-tabs/real-tabs.module.ts ***!
  \********************************************************/
/*! exports provided: RealTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTabsPageModule", function() { return RealTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-tabs.page */ "./src/app/app-real/real-tabs/real-tabs.page.ts");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.guard */ "./src/app/services/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'tabs',
        component: _real_tabs_page__WEBPACK_IMPORTED_MODULE_5__["RealTabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-home/real-home.module#RealHomePageModule',
                    },
                    { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },
                    { path: 'real-agent', loadChildren: '../real-agent/real-agent.module#RealAgentPageModule' },
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-list/real-list.module#RealListPageModule'
                    },
                    { path: 'real-map/:type', loadChildren: '../real-map/real-map.module#RealMapPageModule' },
                    { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                 
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-favorite/real-favorite.module#RealFavoritePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-agent/real-agent.module#RealAgentPageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-profile/real-profile.module#RealProfilePageModule',
                        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
                    },
                    { path: 'logout', loadChildren: '../../app-auth/logout/logout.module#LogoutPageModule' },
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var RealTabsPageModule = /** @class */ (function () {
    function RealTabsPageModule() {
    }
    RealTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_tabs_page__WEBPACK_IMPORTED_MODULE_5__["RealTabsPage"]]
        })
    ], RealTabsPageModule);
    return RealTabsPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-tabs/real-tabs.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-tabs/real-tabs.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs color=\"\">\n \n  <ion-tab-bar slot=\"bottom\" color=\"realgreen\">\n \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"ios-home-outline\"></ion-icon>\n      <ion-label>HOME</ion-label>\n    </ion-tab-button>\n \n   <!--  <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"ios-pin-outline\"></ion-icon>\n      <ion-label>LIST</ion-label>\n    </ion-tab-button> -->\n\n      <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"ios-search-outline\"></ion-icon>\n      <ion-label>SEARCH</ion-label>\n    </ion-tab-button> \n    \n\n    <ion-tab-button tab=\"tab3\">\n        <ion-icon name=\"ios-bookmark-outline\"></ion-icon>\n        <ion-label>CLIENTS</ion-label>\n    </ion-tab-button>\n  \n    <ion-tab-button tab=\"tab4\">\n        <ion-icon name=\"ios-people-outline\"></ion-icon>\n        <ion-label>AGENTS</ion-label>\n      </ion-tab-button>\n    <!-- <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"ios-search-outline\"></ion-icon>\n      <ion-label>SEARCH</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"tab5\">\n        <ion-icon name=\"contact-outline\"></ion-icon>\n        <ion-label>PROFILE</ion-label>\n      </ion-tab-button>\n\n  </ion-tab-bar>\n \n</ion-tabs>"

/***/ }),

/***/ "./src/app/app-real/real-tabs/real-tabs.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-tabs/real-tabs.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-bar {\n  padding-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLXRhYnMvcmVhbC10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1yZWFsL3JlYWwtdGFicy9yZWFsLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXJ7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app-real/real-tabs/real-tabs.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-real/real-tabs/real-tabs.page.ts ***!
  \******************************************************/
/*! exports provided: RealTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTabsPage", function() { return RealTabsPage; });
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

var RealTabsPage = /** @class */ (function () {
    function RealTabsPage() {
    }
    RealTabsPage.prototype.ngOnInit = function () {
    };
    RealTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-tabs',
            template: __webpack_require__(/*! ./real-tabs.page.html */ "./src/app/app-real/real-tabs/real-tabs.page.html"),
            styles: [__webpack_require__(/*! ./real-tabs.page.scss */ "./src/app/app-real/real-tabs/real-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RealTabsPage);
    return RealTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-real-real-tabs-real-tabs-module.js.map