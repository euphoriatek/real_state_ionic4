(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-home-real-home-module"],{

/***/ "./src/app/app-real/real-home/real-home.module.ts":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-home/real-home.module.ts ***!
  \********************************************************/
/*! exports provided: RealHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealHomePageModule", function() { return RealHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-home.page */ "./src/app/app-real/real-home/real-home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _real_home_page__WEBPACK_IMPORTED_MODULE_5__["RealHomePage"]
    }
];
var RealHomePageModule = /** @class */ (function () {
    function RealHomePageModule() {
    }
    RealHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_home_page__WEBPACK_IMPORTED_MODULE_5__["RealHomePage"]]
        })
    ], RealHomePageModule);
    return RealHomePageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-home/real-home.page.html":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-home/real-home.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header  [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n        <ion-toolbar color=\"realgreen-invert\">\n                <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"toggleSideMenu()\">\n                        <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"realgreen\" slot=\"start\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <!-- <ion-searchbar color=\"\" placeholder=\"Search by Location, Area , State or Pin Code\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n              <ion-title color=\"realgreen\" class=\"main-b-header7\">\n                  <img src=\"https://i.ibb.co/w4N12SW/re-logo.png\" alt=\"Logo\" style=\"width: 30px;\"/>\n              </ion-title>\n           \n        </ion-toolbar>\n        <ion-toolbar color=\"realgreen-invert\">\n            <ion-searchbar mode=\"ios\" color=\"white\" placeholder=\"search by buyer location, price  or agent..\" (click)=\"openSearchModal()\" search-icon=\"search\" ></ion-searchbar>  \n        </ion-toolbar>\n    </ion-header>\n\n<ion-content  #pageContent no-padding>\n\n\n    <ion-item lines=\"none\">\n        <h1 class=\"main-header5\">Real Estate Agents on OBN</h1>\n    </ion-item>\n<!--*********** Show agents with horizontal scroll  ***********-->\n<div class=\"horizontal-scroll \" >\n    <div class=\"agent-icon\" *ngFor=\"let agent of agents | async \">\n        <ion-avatar mode=\"ios\" slot=\"start\"  (click)=\"openDetail('side-menu/realestate/tabs/tab1/real-agent-detail',agent.id)\" >\n            <img [src]=\"agent.image\">\n        </ion-avatar>\n    </div>\n</div>\n<!--*****************************-->\n<!--****** Show buy items *******-->\n<!--*****************************-->\n<ion-item lines=\"none\">\n    <h1 class=\"main-header5\">Buyers</h1>\n</ion-item>\n  <div class=\"horizontal-scroll \" >\n    <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n        <ion-card mode=\"ios\" class=\"main-h-card real-card1 slide-right \" tappable *ngFor=\"let buyItem of buyItems | async \"  (click)=\"openDetail('real-detail',buyItem.id)\"   >\n            <!-- <div *ngIf=\"buyItem.recommended\" class=\"bookmarkRibbon\"></div> -->\n            <div *ngIf=\"buyItem.recommended\"  class=\"ribbon pop-in\">Best</div>\n            <div class=\"real-card1-bg\"  [ngStyle]=\"{'background-image': 'url(' + buyItem.image_header+ ')'}\">\n            </div>\n            <ion-card-content class=\"card1-padding \">\n               \n                <ion-label><ion-text color=\"black\"><h2 class=\"main-b-header8\">{{buyItem.title}}</h2></ion-text></ion-label>\n\n                <ion-label><h3 class=\"margin-top-3\">{{buyItem.short_features}}</h3></ion-label>\n\n                <ion-label  text-wrap>\n                    <h3 class=\"margin-top-3\"> \n                        <!-- <ion-icon   name=\"ios-pin\" color=\"grey\" size=\"small\"></ion-icon> -->\n                        {{buyItem.location}}\n                    </h3>\n                </ion-label>\n                <ion-text color=\"black\" class=\"ion-text-right\"> <h2 class=\"margin-top-5 main-b-header8\"><strong>{{buyItem.price | currency}}</strong></h2></ion-text>\n            </ion-card-content>\n        </ion-card>\n</div>\n\n<!--*****************************-->\n<!--****** Show rent items *******-->\n<!--*****************************-->\n\n<ion-item lines=\"none\">\n    <h1 class=\"margin-top-3 main-header5\">Renters</h1>\n</ion-item>\n<div class=\"horizontal-scroll \" >\n    <!--  routerLink=\"/side-menu/food/tabs/tab1/food-place-detail/{{recommended.id}}\" -->\n        <ion-card class=\"main-h-card real-card1 slide-right \"  *ngFor=\"let rentItem of rentItems | async \"  (click)=\"openDetail('real-detail',rentItem.id)\"   >\n            <div class=\"real-card1-bg\"  [ngStyle]=\"{'background-image': 'url(' + rentItem.image_header+ ')'}\"> </div>\n            <ion-card-content class=\"card1-padding\">\n               \n                    <ion-label><ion-text color=\"black\"><h2 class=\"main-b-header8\">{{rentItem.title}}</h2></ion-text></ion-label>\n                    <ion-label><h3 class=\"margin-top-3\">{{rentItem.short_features}}</h3></ion-label>\n                    <ion-label  text-wrap>\n                        <h3 class=\"margin-top-3\"> \n                            <!-- <ion-icon   name=\"ios-pin\" color=\"grey\" size=\"small\"></ion-icon> -->\n                            {{rentItem.location}}\n                        </h3>\n                    </ion-label>\n                    <ion-text color=\"black\" class=\"ion-text-right\"> <h2 class=\"margin-top-5 main-b-header8\"><strong>{{rentItem.price | currency}}</strong></h2></ion-text>\n                </ion-card-content>\n               \n\n        </ion-card>\n</div>\n\n<div class=\"footer-box\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-real/real-home/real-home.page.scss":
/*!********************************************************!*\
  !*** ./src/app/app-real/real-home/real-home.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 35px; }\n\nion-toolbar {\n  --background: linear-gradient(162deg, rgba(56, 70, 108, .8) 20%, rgba(56, 70, 108, .8) 100%), url('https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') bottom no-repeat; }\n\nion-searchbar {\n  padding: 0px 18px; }\n\nion-searchbar ion-icon {\n  font-size: 20px !important; }\n\n.searchbar-input-container {\n  height: 43px !important; }\n\nion-item ion-thumbnail ion-icon {\n  color: #ffffff;\n  font-size: 40px; }\n\nion-searchbar {\n  padding: 0px 10px 10px !important;\n  height: 50px !important; }\n\n.agent-icon {\n  display: inline-block;\n  margin: 0px 5px 0px 5px !important; }\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\nion-chip {\n  padding: 10px !important;\n  border-radius: 8px  !important;\n  height: 35px;\n  margin-left: 11px; }\n\n.horizontal-scroll {\n  margin-left: 12px;\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n\n.imgTall {\n  width: 140px !important;\n  height: 260px !important; }\n\n.card-tall {\n  position: relative;\n  width: 120px !important;\n  height: 315px !important;\n  margin: 0px 5px 0px 5px !important; }\n\n.div-tall-bg:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center; }\n\n.div-tall-bg {\n  border-radius: 9px  !important;\n  position: relative;\n  width: 120px;\n  height: 245px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center; }\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n.thumnails .list-thumbnail {\n    height: 100%;\n    white-space: nowrap; }\n\n.thumnails .list-thumbnail .img-thumb {\n      display: inline-block;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 3px;\n      height: 50px;\n      margin: 0 2px 0 0;\n      line-height: 60px; }\n\n.thumnails .list-thumbnail .selected-img {\n      border: 2px solid red; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nion-avatar {\n  background-color: #ccc;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 49px;\n  min-height: 49px; }\n\nion-avatar[item-start] {\n  margin: 8px 16px 8px 0; }\n\n.card1-padding {\n  padding: 12px 10px !important; }\n\n.bookmarkRibbon {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  right: 10px;\n  width: 0;\n  height: 35px;\n  border-right: 10px solid #ffc107;\n  border-left: 10px solid #ffc107;\n  border-bottom: 10px solid transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWhvbWUvcmVhbC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGFBQVksRUFDYjs7QUFFSDtFQUNJLHNPQUFhLEVBQ2hCOztBQVVEO0VBQ0ksa0JBQWlCLEVBR3BCOztBQUNEO0VBQ0ksMkJBQTBCLEVBQzdCOztBQUNEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksZUFBYztFQUNkLGdCQUFjLEVBQ2pCOztBQUNEO0VBQ0ksa0NBQWlDO0VBQ2pDLHdCQUF1QixFQUMxQjs7QUFHRDtFQUNJLHNCQUFxQjtFQUdyQixtQ0FBa0MsRUFDckM7O0FBSUQ7RUFDSSw0QkFBYTtFQUNiLDhCQUFlLEVBQ2xCOztBQUlEO0VBQ0kseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QixhQUFZO0VBQ1osa0JBQWlCLEVBRXBCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUVuQjs7QUFFRDtFQUNJLHdCQUF3QjtFQUN4Qix5QkFBdUIsRUFFMUI7O0FBSUc7RUFDQSxtQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHlCQUF1QjtFQUN2QixtQ0FBa0MsRUFLakM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRO0VBQ1IsT0FBTTtFQUNOLFVBQVM7RUFDVCx1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYTtFQUNiLDBCQUF5QjtFQUl6Qix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM5Qjs7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFrQm5COztBQXBCSDtJQUlNLGFBQVk7SUFDWixvQkFBbUIsRUFjcEI7O0FBbkJMO01BT1Esc0JBQXFCO01BQ3JCLHVCQUFzQjtNQUN0QixtQkFBa0I7TUFDbEIsYUFBWTtNQUVaLGFBQVk7TUFDWixrQkFBZ0I7TUFDaEIsa0JBQWlCLEVBQ2xCOztBQWZQO01BaUJRLHNCQUFxQixFQUN0Qjs7QUFHTDtFQUNFLGNBQWEsRUFDZDs7QUFHSDtFQUNJLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFJbEIsY0FBYTtFQUliLG9CQUFtQjtFQUluQix3QkFBdUI7RUFFdkIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx1QkFBc0IsRUFDekI7O0FBSUQ7RUFDSSw4QkFBNkIsRUFFaEM7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFNBQVE7RUFDUixZQUFXO0VBQ1gsU0FBTztFQUNQLGFBQVc7RUFDWCxpQ0FBK0I7RUFDL0IsZ0NBQThCO0VBQzlCLHNDQUFvQyxFQUV2QyIsImZpbGUiOiJzcmMvYXBwL2FwcC1yZWFsL3JlYWwtaG9tZS9yZWFsLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuLy8gICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLy8tLWJhY2tncm91bmQ6ICNGOUY5Rjk7XG59XG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjJkZWcsIHJnYmEoNTYsIDcwLCAxMDgsIC44KSAyMCUsIHJnYmEoNTYsIDcwLCAxMDgsIC44KSAxMDAlKSwgdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNjQzMzg5L3BleGVscy1waG90by0xNjQzMzg5LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnKSBib3R0b20gbm8tcmVwZWF0O1xufVxuXG5pb24taWNvbiB7XG4gICAgLy8gY29sb3I6ICM0NTQ1NDU7XG4gICAgLy8gZm9udC1zaXplOiAzMHB4O1xufVxuaW9uLWl0ZW17XG4gICAgLy8gLS1iYWNrZ3JvdW5kIDojRjlGOUY5O1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xuICAgIC8vYm9yZGVyOiAjZWVlIDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDlweCAhaW1wb3J0YW50O1xufVxuaW9uLXNlYXJjaGJhciBpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn0gXG4uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcbn1cblxuXG5pb24taXRlbSBpb24tdGh1bWJuYWlsIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6NDBweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLy8qKioqKioqKioqIGhvcml6b250YWwgYWdlbnQgbGlzdCAqKioqKioqKioqLy9cbi5hZ2VudC1pY29uICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDoxMDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4udHJhbnNwYXJlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuXG5cblxuaW9uLWNoaXB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgLy8gY29sb3I6I0U4RThFOCAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICBcbn1cblxuLmltZ1RhbGx7XG4gICAgd2lkdGg6ICAxNDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDoyNjBweCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuXG5cbiAgICAuY2FyZC10YWxsICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAgMTIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MzE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLy9taW4taGVpZ2h0OiAxNTB2aCAhaW1wb3J0YW50O1xuICAgIC8vbWF4LWhlaWdodDogMTYwdmggIWltcG9ydGFudDtcbiAgICBcbiAgICB9XG5cbiAgICAuZGl2LXRhbGwtYmc6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LXRhbGwtYmcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHggICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6ICAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyNDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG5cblxuLnRodW1uYWlsc3tcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC5saXN0LXRodW1ibmFpbHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAuaW1nLXRodW1ie1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAvL3dpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbjowIDJweCAwIDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZC1pbWd7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICAgIGRpc3BsYXk6IG5vbmU7IFxuICB9XG5cblxuaW9uLWF2YXRhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG1pbi13aWR0aDogNDlweDtcbiAgICBtaW4taGVpZ2h0OiA0OXB4O1xufVxuaW9uLWF2YXRhcltpdGVtLXN0YXJ0XXtcbiAgICBtYXJnaW46IDhweCAxNnB4IDhweCAwO1xufVxuXG5cblxuLmNhcmQxLXBhZGRpbmd7XG4gICAgcGFkZGluZzogMTJweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy9tYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmJvb2ttYXJrUmliYm9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6MDsgXG4gICAgaGVpZ2h0OjM1cHg7IFxuICAgIGJvcmRlci1yaWdodDoxMHB4IHNvbGlkICNmZmMxMDc7XG4gICAgYm9yZGVyLWxlZnQ6MTBweCBzb2xpZCAjZmZjMTA3O1xuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-real/real-home/real-home.page.ts":
/*!******************************************************!*\
  !*** ./src/app/app-real/real-home/real-home.page.ts ***!
  \******************************************************/
/*! exports provided: RealHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealHomePage", function() { return RealHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
/* harmony import */ var _real_search_real_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../real-search/real-search.page */ "./src/app/app-real/real-search/real-search.page.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RealHomePage = /** @class */ (function () {
    //public categories: any[];
    // public popularArray: any[];
    // public topRatingPlaces: any[];
    // public favorites: any[];
    // public tags: any[]; 
    function RealHomePage(realestateService, activatedRoute, navController, router, modalController, ionicComponentService) {
        this.realestateService = realestateService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.ionicComponentService = ionicComponentService;
        //******** HideHeader Config *********/
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 40 };
    }
    RealHomePage.prototype.ngOnInit = function () {
        debugger;
        this.agents = this.realestateService.getTopAgent(10);
        this.buyItems = this.realestateService.getHouseByType("buy");
        this.rentItems = this.realestateService.getHouseByType("rent");
        // this.favItems = this.realestateService.getFavPlace();
    };
    RealHomePage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    RealHomePage.prototype.openSearchModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("open house search modal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _real_search_real_search_page__WEBPACK_IMPORTED_MODULE_4__["RealSearchPage"],
                                componentProps: {
                                //categoryId: categoryId
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RealHomePage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    RealHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-home',
            template: __webpack_require__(/*! ./real-home.page.html */ "./src/app/app-real/real-home/real-home.page.html"),
            styles: [__webpack_require__(/*! ./real-home.page.scss */ "./src/app/app-real/real-home/real-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_3__["RealestateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"]])
    ], RealHomePage);
    return RealHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=real-home-real-home-module.js.map