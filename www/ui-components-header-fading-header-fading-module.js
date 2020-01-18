(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-fading-header-fading-module"],{

/***/ "./src/app/ui-components/header-fading/header-fading.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.module.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderFadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFadingPageModule", function() { return HeaderFadingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_fading_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-fading.page */ "./src/app/ui-components/header-fading/header-fading.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _header_fading_page__WEBPACK_IMPORTED_MODULE_5__["HeaderFadingPage"]
    }
];
var HeaderFadingPageModule = /** @class */ (function () {
    function HeaderFadingPageModule() {
    }
    HeaderFadingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_fading_page__WEBPACK_IMPORTED_MODULE_5__["HeaderFadingPage"]]
        })
    ], HeaderFadingPageModule);
    return HeaderFadingPageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header no-border>\n    <ion-toolbar class=\"first\" color=\"orange\" [class.show-background]=\"showToolbar\">\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"toggleSideMenu()\">\n              <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title  [class.show-title]=\"showTitle\">Fading header</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  no-padding fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n  \n\n\n\n <!-- skeleton thumbnail -->\n <div class=\"top-grey-box\" ></div>\n <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text ></ion-skeleton-text>\n    </ion-thumbnail>\n    <!-- <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar> -->\n    <ion-label>\n      <h3>\n        <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1; }\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.9s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #009f34; }\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger); }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1mYWRpbmcvaGVhZGVyLWZhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMEJBQTBCO0FBQzFCO0VBQ0ksMEJBQWE7RUFDYix5Q0FBaUIsRUFDcEI7QUFFRDtFQU9JLDJDQUEwQztFQUMxQyx3Q0FBdUM7RUFDdkMsdUNBQXNDO0VBQ3RDLHNDQUFxQztFQUNwQyxXQUFVLEVBRWQ7QUFDRCx3Q0FBd0M7QUFDeEM7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVc7RUFFdEMsb0JBQW1CLEVBQ3RCO0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVc7RUFFdEMsb0NBQW1DLEVBQ3RDO0FBRUQ7RUFDSTtJQUNJLFdBQVMsRUFBQTtFQUViO0lBQ0ksV0FBUyxFQUFBLEVBQUE7QUFXakI7RUFBNEIsdUJBQXVCO0VBQy9DO0lBQ0ksV0FBUyxFQUFBO0VBRWI7SUFDSSxXQUFTLEVBQUEsRUFBQTtBQUtqQjtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9oZWFkZXItZmFkaW5nL2hlYWRlci1mYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xuaW9uLXRvb2xiYXIuZmlyc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNob3ctdGl0bGV7XG5cbiAgICAvLyBhbmltYXRpb246IGZhZGVpbiAwLjRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogRmlyZWZveCAqL1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAvLyAtby1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBPcGVyYSAqL1xuICAgIC8vIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgIG9wYWNpdHk6IDE7XG5cbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC45czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICMwMDlmMzQ7XG59XG4uaGlkZS10aXRsZSB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGFuaW1hdGlvbjogZmFkZW91dCAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cblxuXG4udG9wLWdyZXktYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.page.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderFadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFadingPage", function() { return HeaderFadingPage; });
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


var HeaderFadingPage = /** @class */ (function () {
    function HeaderFadingPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
    }
    HeaderFadingPage.prototype.ngOnInit = function () {
    };
    //********** scroll event  *************/
    HeaderFadingPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 100;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 100;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    HeaderFadingPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderFadingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-fading',
            template: __webpack_require__(/*! ./header-fading.page.html */ "./src/app/ui-components/header-fading/header-fading.page.html"),
            styles: [__webpack_require__(/*! ./header-fading.page.scss */ "./src/app/ui-components/header-fading/header-fading.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], HeaderFadingPage);
    return HeaderFadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-header-fading-header-fading-module.js.map