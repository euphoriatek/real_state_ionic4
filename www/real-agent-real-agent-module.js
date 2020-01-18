(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-agent-real-agent-module"],{

/***/ "./src/app/app-real/real-agent/real-agent.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/app-real/real-agent/real-agent.module.ts ***!
  \**********************************************************/
/*! exports provided: RealAgentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealAgentPageModule", function() { return RealAgentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_agent_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-agent.page */ "./src/app/app-real/real-agent/real-agent.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _real_agent_page__WEBPACK_IMPORTED_MODULE_5__["RealAgentPage"]
    }
];
var RealAgentPageModule = /** @class */ (function () {
    function RealAgentPageModule() {
    }
    RealAgentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_agent_page__WEBPACK_IMPORTED_MODULE_5__["RealAgentPage"]]
        })
    ], RealAgentPageModule);
    return RealAgentPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-agent/real-agent.page.html":
/*!**********************************************************!*\
  !*** ./src/app/app-real/real-agent/real-agent.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"realgreen-invert\">\n            <ion-buttons  slot=\"start\" color=\"light\">\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n            <!-- <ion-searchbar color=\"\" placeholder=\"Search by Location, Area , State or Pin Code\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n            <ion-title color=\"realgreen\" class=\"main-b-header4\">Agent</ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n<ion-content  no-padding>\n  <div>\n    <ion-list class=\"ion-margin-top\">\n        <ion-item *ngFor=\"let agent of agents | async\" lines=\"none\" button routerLink=\"/side-menu/realestate/tabs/tab4/real-agent-detail/{{agent.id}}\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"agent.image\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{agent.name}}</h2>\n            <p>{{agent.company}}</p>\n            <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < agent.rating ? 'star' : 'star-outline'\">\n            </ion-icon>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-real/real-agent/real-agent.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/app-real/real-agent/real-agent.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  background-color: #ccc;\n  margin: 10px 16px 8px 0 !important;\n  width: 50px !important;\n  height: 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWFnZW50L3JlYWwtYWdlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXNCO0VBQ3RCLG1DQUFrQztFQUNsQyx1QkFBc0I7RUFDdEIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXJlYWwvcmVhbC1hZ2VudC9yZWFsLWFnZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBtYXJnaW46IDEwcHggMTZweCA4cHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app-real/real-agent/real-agent.page.ts":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-agent/real-agent.page.ts ***!
  \********************************************************/
/*! exports provided: RealAgentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealAgentPage", function() { return RealAgentPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
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





var RealAgentPage = /** @class */ (function () {
    function RealAgentPage(realestateService, activatedRoute, navController, router, ionicComponentService) {
        this.realestateService = realestateService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.agentId = this.activatedRoute.snapshot.paramMap.get('agentId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('agentId'));
        //console.log(this.router.url,"Current URL");
    }
    RealAgentPage.prototype.ngOnInit = function () {
        this.agents = this.realestateService.getAgent();
    };
    RealAgentPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-agent',
            template: __webpack_require__(/*! ./real-agent.page.html */ "./src/app/app-real/real-agent/real-agent.page.html"),
            styles: [__webpack_require__(/*! ./real-agent.page.scss */ "./src/app/app-real/real-agent/real-agent.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_3__["RealestateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"]])
    ], RealAgentPage);
    return RealAgentPage;
}());



/***/ })

}]);
//# sourceMappingURL=real-agent-real-agent-module.js.map