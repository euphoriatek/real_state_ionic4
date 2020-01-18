(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-timeline-timeline-module"],{

/***/ "./src/app/ui-layouts/timeline/timeline.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/timeline/timeline.module.ts ***!
  \********************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.page */ "./src/app/ui-layouts/timeline/timeline.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_5__["TimelinePage"]
    }
];
var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_5__["TimelinePage"]]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/timeline/timeline.page.html":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/timeline/timeline.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"toggleSideMenu()\">\n              <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-title slot=\"start\">TIMELINE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  \n  <ion-content no-padding>\n  \n   <ion-list>\n    <ion-item-group>\n        <div stlye=\"timelineBg\" *ngFor=\"let timeline of timelines  | async\" >\n\n            <!--***********  item divider  ***********-->\n            <ion-item-divider sticky>  <!-- *ngFor GroupTitle for feeds -->\n              <ion-label>\n                <h2>{{timeline.date | date: 'fullDate'}}</h2>\n              </ion-label>\n            </ion-item-divider>\n  \n            <ul class=\"timeline\">\n                <li   *ngFor=\"let list of  timeline.lists | slice:1 \">\n                  <img src=\"{{list.profileImage}}\" alt=\"\" class=\"timeline-thumb pop-in\">\n                  <div class=\"timeline-item\">\n                    <p><strong>Updated Profile Picture</strong></p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error.....</p>\n                    <img data-src=\"{{list.images}}\" class=\"imageTimeline\">\n                    <div class=\"timeline-stats\">\n                      <ion-icon name=\"heart\"></ion-icon> 2,450\n                      <span class=\"pos-absolute-right\"><ion-icon name=\"clock\"></ion-icon> 2 mins ago</span>\n                    </div>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </ion-item-group>\n  </ion-list>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\">\n      <ion-icon name=\"md-calendar\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/ui-layouts/timeline/timeline.page.scss":
/*!********************************************************!*\
  !*** ./src/app/ui-layouts/timeline/timeline.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftLine {\n  border-left-style: solid;\n  border-left-width: 2px;\n  padding-left: 10px;\n  margin-left: 10px; }\n\n.imageTimeline {\n  padding: 10px 25px 15px 0px; }\n\n/*Optional*/\n\n.bar-stable {\n  background-color: #d9d9d9 !important; }\n\n.tabs {\n  background-color: #d9d9d9 !important; }\n\n.icon-size-lg {\n  font-size: 40px; }\n\n/*Timeline*/\n\n.pos-absolute-right {\n  position: absolute;\n  right: 8px; }\n\n.timeline {\n  position: relative;\n  margin: 15px 0 0 0; }\n\n.timeline:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  left: 44px;\n  margin-left: -10px;\n  z-index: 1; }\n\n.timeline .timeline-thumb {\n  border-radius: 500px;\n  width: 50px;\n  z-index: 2;\n  position: absolute;\n  left: 10px; }\n\n.timeline .timeline-thumb.timeline-icon {\n  height: 50px;\n  text-align: center;\n  color: white;\n  border: 5px solid #CBD0D3; }\n\n.timeline .timeline-thumb.timeline-icon i {\n  font-size: 28px;\n  margin: 6px 0;\n  display: block; }\n\n.timeline .timeline-item {\n  margin-left: 35px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 8px; }\n\n.timeline .timeline-stats {\n  position: relative;\n  font-size: 12px;\n  color: #7F8C8D; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL3RpbWVsaW5lL3RpbWVsaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF3QjtFQUN4Qix1QkFBc0I7RUFFdEIsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFJRCxZQUFZOztBQUNaO0VBQ0EscUNBQW9DLEVBQ25DOztBQUNEO0VBQ0EscUNBQW9DLEVBQ25DOztBQUNEO0VBQ0EsZ0JBQWUsRUFDZDs7QUFFRCxZQUFZOztBQUNaO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsV0FBVTtFQUVWLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsV0FBVSxFQUNiOztBQUVEO0VBQ0kscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFdBQ0osRUFBQzs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsOEJBQTZCO0VBQzdCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC91aS1sYXlvdXRzL3RpbWVsaW5lL3RpbWVsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0TGluZXtcbiAgICAvLyAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBkYXNoZWRcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkOyBcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAvLyBib3JkZXItbGVmdC1jb2xvcjogY29sb3IoJGNvbG9ycywgaW9zLWJsdWUpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAuaW1hZ2VUaW1lbGluZXtcbiAgICAgICAgcGFkZGluZzogMTBweCAyNXB4IDE1cHggMHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0e1xuICAgICAgLy8gIGNvbG9yOmNvbG9yKCRjb2xvcnMsIGlvcy1ibHVlKTtcbiAgICB9XG4gICAgLypPcHRpb25hbCovXG4gICAgLmJhci1zdGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRhYnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbi1zaXplLWxnIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgLypUaW1lbGluZSovXG4gICAgLnBvcy1hYnNvbHV0ZS1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgICB9XG5cbiAgICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgLy8gYmFja2dyb3VuZDogY29sb3IoJGNvbG9ycywgaW9zLWJsdWUpO1xuICAgICAgICBsZWZ0OiA0NHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMHB4XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYi50aW1lbGluZS1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI0NCRDBEMztcbiAgICB9XG5cbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLXRodW1iLnRpbWVsaW5lLWljb24gaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZSAudGltZWxpbmUtc3RhdHMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM3RjhDOEQ7XG4gICAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/ui-layouts/timeline/timeline.page.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-layouts/timeline/timeline.page.ts ***!
  \******************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
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



var TimelinePage = /** @class */ (function () {
    function TimelinePage(menuCtrl, firestore) {
        this.menuCtrl = menuCtrl;
        this.firestore = firestore;
    }
    TimelinePage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    TimelinePage.prototype.ngOnInit = function () {
        console.log("start");
        this.timelines = this.firestore.collection('layout_timeline').valueChanges();
    };
    TimelinePage.prototype.getFeed = function () {
        console.log("start getCategory");
    };
    TimelinePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.page.html */ "./src/app/ui-layouts/timeline/timeline.page.html"),
            styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/ui-layouts/timeline/timeline.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], TimelinePage);
    return TimelinePage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-timeline-timeline-module.js.map