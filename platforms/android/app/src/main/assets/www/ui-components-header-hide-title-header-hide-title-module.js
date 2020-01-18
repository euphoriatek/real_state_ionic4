(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-hide-title-header-hide-title-module"],{

/***/ "./src/app/ui-components/header-hide-title/header-hide-title.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-hide-title/header-hide-title.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderHideTitlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderHideTitlePageModule", function() { return HeaderHideTitlePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_hide_title_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-hide-title.page */ "./src/app/ui-components/header-hide-title/header-hide-title.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _header_hide_title_page__WEBPACK_IMPORTED_MODULE_5__["HeaderHideTitlePage"]
    }
];
var HeaderHideTitlePageModule = /** @class */ (function () {
    function HeaderHideTitlePageModule() {
    }
    HeaderHideTitlePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_hide_title_page__WEBPACK_IMPORTED_MODULE_5__["HeaderHideTitlePage"]]
        })
    ], HeaderHideTitlePageModule);
    return HeaderHideTitlePageModule;
}());



/***/ }),

/***/ "./src/app/ui-components/header-hide-title/header-hide-title.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-hide-title/header-hide-title.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar [class.show-liner]=\"showLiner\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"tertiary\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title color=\"tertiary\" slot=\"start\"  [class.show-title]=\"showTitle\">Header title</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n<ion-content  no-padding (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n    <ion-item lines=\"none\">\n        <ion-label>\n          <ion-text color=\"tertiary\">\n              <h1 class=\"main-b-header1\">Header title</h1>\n          </ion-text>\n        </ion-label>\n    </ion-item>    \n\n\n     <!-- skeleton thumbnail -->\n     <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n        <ion-thumbnail animated slot=\"start\">\n          <ion-skeleton-text ></ion-skeleton-text>\n        </ion-thumbnail>\n        <!-- <ion-avatar slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-avatar> -->\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/ui-components/header-hide-title/header-hide-title.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-hide-title/header-hide-title.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  opacity: 0;\n  visibility: hidden; }\n\nion-toolbar:last-child.show-liner {\n  --border-width: 0 0 0.55px; }\n\n.show-title {\n  -webkit-transition: opacity 0.3s ease-in-out;\n  -moz-transition: opacity 0.3s ease-in-out;\n  -ms-transition: opacity 0.3s ease-in-out;\n  -o-transition: opacity 0.3s ease-in-out;\n  visibility: visible;\n  opacity: 1; }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  animation: fadein 0.1s;\n  -moz-animation: fadein 0.1s;\n  /* Firefox */\n  -webkit-animation: fadein 0.1s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.1s;\n  /* Opera */ }\n\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */ }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1oaWRlLXRpdGxlL2hlYWRlci1oaWRlLXRpdGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBUUQ7RUFDUSwyQkFBZSxFQUN0Qjs7QUFFRDtFQU9JLDZDQUE0QztFQUM1QywwQ0FBeUM7RUFDekMseUNBQXdDO0VBQ3hDLHdDQUF1QztFQUN2QyxvQkFBbUI7RUFDbEIsV0FBVSxFQUlkOztBQUNELHdDQUF3Qzs7QUFDeEM7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVcsRUFHekM7O0FBR0Q7RUFDSSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVcsRUFHekM7O0FBQ0Q7RUFDSTtJQUNJLFdBQVMsRUFBQTtFQUViO0lBQ0ksV0FBUyxFQUFBLEVBQUE7O0FBV2pCO0VBQTRCLHVCQUF1QjtFQUMvQztJQUNJLFdBQVMsRUFBQTtFQUViO0lBQ0ksV0FBUyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1oaWRlLXRpdGxlL2hlYWRlci1oaWRlLXRpdGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvLyAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAvL29wYWNpdHk6IDA7XG59XG5cblxuXG5cbi8vKioqKioqKiogaGlkZSB0b29sYmFyIHRpbGxlIGJ5IGRlZmF1bHQgICoqKioqKi8vXG5cbmlvbi10aXRsZXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG4vLyAuc2hvdy10aXRsZSAgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4vLyB9XG5cbi8vKioqKiogc2hvdyB0b29sYmFyIGxpbmVyIHdoZW4gc2hvd0xpbmVyID0gdHJ1ZSAqKioqKioqKi8vXG5pb24tdG9vbGJhcjpsYXN0LWNoaWxkLnNob3ctbGluZXJ7Ly8uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIFxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbn1cbi8vKioqKiogc2hvdyB0b29sYmFyIHRpdGxlIHdoZW4gc2hvd1RpdGxlID0gdHJ1ZSAqKioqKioqKi8vXG4uc2hvdy10aXRsZXtcblxuICAgIC8vIGFuaW1hdGlvbjogZmFkZWluIDAuNHM7XG4gICAgLy8gLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBGaXJlZm94ICovXG4gICAgLy8gLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC8vIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNHM7IC8qIE9wZXJhICovXG4gICAgLy8gLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICBcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuXG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC4xcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuMXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuMXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4xczsgLyogT3BlcmEgKi9cbiAgICBcbiAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5cbi5oaWRlLXRpdGxlIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG5cbiAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4geyAvKiBGaXJlZm94ICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/ui-components/header-hide-title/header-hide-title.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/header-hide-title/header-hide-title.page.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderHideTitlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderHideTitlePage", function() { return HeaderHideTitlePage; });
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


var HeaderHideTitlePage = /** @class */ (function () {
    function HeaderHideTitlePage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        this.showLiner = false;
        this.showTitle = false;
        this.transition = false;
    }
    HeaderHideTitlePage.prototype.ngOnInit = function () {
    };
    HeaderHideTitlePage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderHideTitlePage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showTitle = scrollTop >= 44;
            this.showLiner = scrollTop >= 44;
            console.log("showTitle=" + this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    HeaderHideTitlePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-hide-title',
            template: __webpack_require__(/*! ./header-hide-title.page.html */ "./src/app/ui-components/header-hide-title/header-hide-title.page.html"),
            styles: [__webpack_require__(/*! ./header-hide-title.page.scss */ "./src/app/ui-components/header-hide-title/header-hide-title.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_ionic_component_service__WEBPACK_IMPORTED_MODULE_1__["IonicComponentService"]])
    ], HeaderHideTitlePage);
    return HeaderHideTitlePage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-components-header-hide-title-header-hide-title-module.js.map