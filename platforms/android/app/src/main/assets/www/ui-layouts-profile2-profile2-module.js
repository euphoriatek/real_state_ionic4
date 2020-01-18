(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile2-profile2-module"],{

/***/ "./src/app/ui-layouts/profile2/profile2.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile2/profile2.module.ts ***!
  \********************************************************/
/*! exports provided: Profile2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile2PageModule", function() { return Profile2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile2.page */ "./src/app/ui-layouts/profile2/profile2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile2_page__WEBPACK_IMPORTED_MODULE_5__["Profile2Page"]
    }
];
var Profile2PageModule = /** @class */ (function () {
    function Profile2PageModule() {
    }
    Profile2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile2_page__WEBPACK_IMPORTED_MODULE_5__["Profile2Page"]]
        })
    ], Profile2PageModule);
    return Profile2PageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/profile2/profile2.page.html":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile2/profile2.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar class=\"first\" color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title slot=\"start\">PROFILE 2</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen no-padding>\n\n    <div class=\"profile-header\" [ngStyle]=\"{'background-image': 'url(' + (profile2 | async)?.imgCover + ')'}\"></div>\n    <div class=\"profile\">\n      <div class=\"profile-box\">\n          <ion-img  class=\"profile-image\" src=\"{{(profile2 | async)?.imgProfile}}\"></ion-img>\n          <h3 id=\"profile2-name\" padding-top>{{(profile2 | async)?.name}}</h3>\n\n          <ion-button  *ngIf=\"!following\"  color=\"green\" (click)=\"follow()\">Follow</ion-button>\n          <ion-button *ngIf=\"following\"  color=\"light\" (click)=\"follow()\">\n            <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n            Following\n          </ion-button>\n      \n\n              <ion-list>\n                    <ion-item lines=\"none\">\n                        <ion-icon slot=\"start\" name=\"md-cafe\" item-left></ion-icon>\n                        <ion-label>\n                            <h2>Opening time</h2>\n                            <div [innerHTML]=\"(profile2 | async)?.openingTime\" class=\"opening-time\"></div>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-icon slot=\"start\" name=\"ios-mail\" item-left></ion-icon>\n                      <ion-label>\n                          <h2>ceo@cemo.com</h2>\n                          <p>work email</p>\n                      </ion-label>\n            \n                  </ion-item>\n            \n                  <ion-item lines=\"none\">\n                    <ion-icon slot=\"start\" name=\"ios-call\" item-left></ion-icon>\n                    <ion-label>\n                        <h2>009923124322</h2>\n                        <p>mobile phone</p>\n                    </ion-label>\n            \n                  </ion-item>\n            \n                  <ion-item lines=\"none\">\n                      <ion-icon slot=\"start\" name=\"logo-linkedin\" item-left></ion-icon>\n                      <ion-label>\n                          <h2>linkedin.com/cemo</h2>\n                          <p>linked in </p>\n                      </ion-label>\n            \n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-icon slot=\"start\" name=\"logo-facebook\" item-left></ion-icon>\n                    <ion-label>\n                        <h2>facebook.com/cemo</h2>\n                        <p>facebook</p>\n                    </ion-label>\n            \n                  </ion-item>\n                  <ion-item lines=\"none\">\n                      <ion-icon slot=\"start\" name=\"logo-skype\" item-left></ion-icon>\n                      <ion-label>\n                          <h2>cemo@outlook.com</h2>\n                          <p>skype</p>\n                      </ion-label>\n            \n                  </ion-item>\n                </ion-list>\n\n      </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-layouts/profile2/profile2.page.scss":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/profile2/profile2.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n.toolbar-title {\n  color: #FFFFFF; }\n.profile-header {\n  position: relative;\n  height: 240px;\n  background-size: cover; }\n.profile {\n  position: relative; }\n.profile-box {\n  position: absolute;\n  padding: 30px !important;\n  top: -95px;\n  width: 100%;\n  z-index: 2;\n  text-align: center; }\n.profile-image {\n  width: 115px;\n  height: 115px;\n  margin: 0 auto 0;\n  border-width: 3px;\n  border-style: solid;\n  border-color: white;\n  -o-border-image: initial;\n     border-image: initial; }\n#profile2-info {\n  width: 100%;\n  text-align: center; }\n#profile2-image {\n  position: absolute;\n  top: -10px;\n  z-index: 2;\n  width: 115px;\n  height: 115px;\n  margin: 0 auto 0;\n  border-width: 3px;\n  border-style: solid;\n  border-color: white;\n  -o-border-image: initial;\n     border-image: initial; }\n.icon-align {\n  align-items: flex-start !important; }\n.opening-time ul {\n  padding-left: 1.2em; }\nion-list > .item:first-child,\nion-list > .item-block:first-child .item {\n  border-bottom: none; }\n.list-ios > .item-block:first-child {\n  /* border-top: 0.55px solid #c8c7cc; */ }\nion-list > .item:last-child,\nion-list > .item-block:last-child .item {\n  border-bottom: none; }\nion-title {\n  color: #fff; }\nbutton,\nion-button,\n.button-md,\n.button-ios {\n  text-transform: none !important; }\np {\n  color: #444; }\n#profile2-bg {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin-top: -16px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center; }\n#content.profile2 {\n  position: relative;\n  margin-top: 250px;\n  padding-top: 200px;\n  text-align: center; }\n#profile2-name {\n  color: #444;\n  font-size: 22px; }\n.profile2-description {\n  font-size: 15px;\n  color: #888; }\n.follow-button {\n  text-transform: none;\n  border-radius: 3px !important; }\n.follow-button ion-icon {\n    font-weight: bold;\n    padding-left: 5px;\n    font-size: 2.5rem; }\n.profile2-numbers p {\n  color: #444;\n  font-size: 18px;\n  margin-bottom: 3px; }\n.profile2-numbers span {\n  font-weight: bold;\n  font-size: 18px;\n  color: #34354c; }\nhr {\n  border: 0;\n  height: 1px;\n  background: #444;\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #bcc6d6 50%, rgba(0, 0, 0, 0) 100%); }\n#posts {\n  text-align: justify; }\n.show-background {\n  border-style: none; }\n.transition {\n  transition: font-size .3s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUyL3Byb2ZpbGUyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwwQkFBMEI7QUFDMUI7RUFDRSwwQkFBYTtFQUNiLHlDQUFpQixFQUNsQjtBQUVEO0VBQ0ksZUFBYSxFQUNoQjtBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFLYix1QkFBc0IsRUFDekI7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHlCQUF1QjtFQUN2QixXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7QUFDRDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsaUJBQWdCO0VBQ1osa0JBQWlCO0VBQ3JCLG9CQUFtQjtFQUNuQixvQkFBZ0M7RUFDaEMseUJBQXFCO0tBQXJCLHNCQUFxQixFQUN4QjtBQUNDO0VBSUUsWUFBVztFQUNYLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVO0VBR1YsYUFBWTtFQUNaLGNBQWE7RUFDYixpQkFBZ0I7RUFDWixrQkFBaUI7RUFDckIsb0JBQW1CO0VBQ25CLG9CQUFnQztFQUNoQyx5QkFBcUI7S0FBckIsc0JBQXFCLEVBRXRCO0FBRUQ7RUFHSSxtQ0FBbUMsRUFDdEM7QUFDRDtFQUNHLG9CQUFtQixFQUNyQjtBQUVEOztFQUVJLG9CQUFtQixFQUN0QjtBQUNEO0VBQ0ksdUNBQXVDLEVBQzFDO0FBQ0Q7O0VBRUksb0JBQW1CLEVBQ3RCO0FBRUQ7RUFDRSxZQUNGLEVBQUM7QUFHRDs7OztFQUlFLGdDQUErQixFQUNoQztBQUNEO0VBQ0UsWUFBVyxFQUNaO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsNEJBQTJCO0VBQzNCLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25CO0FBS0Q7RUFDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVyxFQUNaO0FBQ0Q7RUFDRSxxQkFBb0I7RUFDcEIsOEJBQTZCLEVBTTlCO0FBUkQ7SUFJSSxrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQjtBQUdIO0VBRUksWUFBVztFQUNYLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25CO0FBTEg7RUFPSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixlQUFjLEVBQ2Y7QUFFSDtFQUNFLFVBQVM7RUFDVCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG1HQUFpSCxFQUNsSDtBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FBR0g7RUFDRSxtQkFBa0IsRUFFbkI7QUFDRDtFQUNHLGtDQUFpQyxFQUNuQyIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcHJvZmlsZTIvcHJvZmlsZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xuaW9uLXRvb2xiYXIuZmlyc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gICAgY29sb3I6I0ZGRkZGRjtcbn1cblxuLnByb2ZpbGUtaGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIC8vIGJhY2tncm91bmQ6IHVybChpbWcvMS5qcGcpIG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9maWxle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZmlsZS1ib3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6MzBweCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTk1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZXtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbn1cbiAgI3Byb2ZpbGUyLWluZm8ge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgdG9wOiA5NXB4O1xuICAvLyAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNwcm9maWxlMi1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDExcHggMjBweCAtM3B4IHJnYmEoMTQyLCAxMzYsIDE0NiwgMC43NSk7XG4gIH1cblxuICAuaWNvbi1hbGlnbiB7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiAgZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgICAgLW1zLWZsZXgtYWxpZ246ICBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1pdGVtczogIGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAub3BlbmluZy10aW1lIHVse1xuICAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtO1xuICB9XG5cbiAgaW9uLWxpc3QgPiAuaXRlbTpmaXJzdC1jaGlsZCwgXG4gIGlvbi1saXN0ID4gLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQgLml0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICAubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpmaXJzdC1jaGlsZCB7XG4gICAgICAvKiBib3JkZXItdG9wOiAwLjU1cHggc29saWQgI2M4YzdjYzsgKi9cbiAgfVxuICBpb24tbGlzdCA+IC5pdGVtOmxhc3QtY2hpbGQsIFxuICBpb24tbGlzdCA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgLml0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6I2ZmZlxuICB9XG5cblxuICBidXR0b24sXG4gIGlvbi1idXR0b24sXG4gIC5idXR0b24tbWQsXG4gIC5idXR0b24taW9zIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gIC8vIENvdmVyIGltYWdlXG4gICNwcm9maWxlMi1iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAvLyBQcm9maWxlIGNvbnRlbnRcbiAgI2NvbnRlbnQucHJvZmlsZTJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG5cblxuICAjcHJvZmlsZTItbmFtZSB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9maWxlMi1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG4gIC5mb2xsb3ctYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxuICB9XG4gIC8vIEZvbGxvd2luZywgRm9sbG93ZXJzIGFuZCBhbGwuLlxuICAucHJvZmlsZTItbnVtYmVycyB7XG4gICAgcCB7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMzQzNTRjO1xuICAgIH1cbiAgfVxuICBociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgwLCAwJSwgMCUsIDApIDAlLCByZ2IoMTg4LCAxOTgsIDIxNCkgNTAlLCBoc2xhKDAsIDAlLCAwJSwgMCkgMTAwJSk7XG4gIH1cbiAgLy8gUG9zdHMgZmVlZFxuICAjcG9zdHMge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cblxuLy8qKioqKioqKioqKiogRmFkaW5nIGhlYWRlciAgKioqKioqKioqKi8vXG4uc2hvdy1iYWNrZ3JvdW5ke1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gLy8gYmFja2dyb3VuZCA6IGNvbG9yKCRjb2xvcnMsIGdyZWVuKVxufVxuLnRyYW5zaXRpb257XG4gICB0cmFuc2l0aW9uOiBmb250LXNpemUgLjNzIGVhc2UtaW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui-layouts/profile2/profile2.page.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/profile2/profile2.page.ts ***!
  \******************************************************/
/*! exports provided: Profile2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile2Page", function() { return Profile2Page; });
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





var Profile2Page = /** @class */ (function () {
    function Profile2Page(firestore, activatedRoute, navController, router, ionicComponentService) {
        this.firestore = firestore;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.following = false;
    }
    Profile2Page.prototype.ngOnInit = function () {
        //****** open loading ********/
        this.ionicComponentService.presentLoading();
        console.log("start");
        this.profile2 = this.firestore.doc('layout_profile/saweU7IYmZAdXupac9LD').valueChanges();
        this.ionicComponentService.dismissLoading();
    };
    Profile2Page.prototype.follow = function () {
        this.following = !this.following;
        this.ionicComponentService.presentToast('Follow user clicked', 2000);
    };
    Profile2Page.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    Profile2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile2',
            template: __webpack_require__(/*! ./profile2.page.html */ "./src/app/ui-layouts/profile2/profile2.page.html"),
            styles: [__webpack_require__(/*! ./profile2.page.scss */ "./src/app/ui-layouts/profile2/profile2.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentService"]])
    ], Profile2Page);
    return Profile2Page;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-profile2-profile2-module.js.map