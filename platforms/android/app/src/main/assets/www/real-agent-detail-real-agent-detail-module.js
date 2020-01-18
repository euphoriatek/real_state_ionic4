(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-agent-detail-real-agent-detail-module"],{

/***/ "./src/app/app-real/real-agent-detail/real-agent-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-real/real-agent-detail/real-agent-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: RealAgentDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealAgentDetailPageModule", function() { return RealAgentDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_agent_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-agent-detail.page */ "./src/app/app-real/real-agent-detail/real-agent-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _real_agent_detail_page__WEBPACK_IMPORTED_MODULE_5__["RealAgentDetailPage"]
    }
];
var RealAgentDetailPageModule = /** @class */ (function () {
    function RealAgentDetailPageModule() {
    }
    RealAgentDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_agent_detail_page__WEBPACK_IMPORTED_MODULE_5__["RealAgentDetailPage"]]
        })
    ], RealAgentDetailPageModule);
    return RealAgentDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-agent-detail/real-agent-detail.page.html":
/*!************************************************************************!*\
  !*** ./src/app/app-real/real-agent-detail/real-agent-detail.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"realgreen-invert\">\n            <ion-buttons  slot=\"start\" color=\"realgreen\">\n                    <ion-back-button></ion-back-button>\n                </ion-buttons>\n\n            <!-- <ion-searchbar color=\"\" placeholder=\"Search by Location, Area , State or Pin Code\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-pin\" ></ion-searchbar>   -->\n            <ion-title color=\"realgreen\" class=\"main-b-header4\">Agent</ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div id=\"profile1-info\" class=\"test-class\" padding>\n        <img id=\"profile1-image\" class=\"pop-in\" src=\"{{(agent | async)?.image}}\"/>\n        <h3 id=\"profile1-name\">{{(agent | async)?.name}}</h3>\n        <!--<p>{{(profile2 | async)?.company}} &bull; {{(profile2 | async)?.position}}</p> -->\n        <p class=\"profile1-description\">{{(agent | async)?.position}} of {{(agent | async)?.company}}</p>\n        <ion-icon  style=\"font-size: 18px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < (agent | async)?.rating  ? 'star' : 'star-outline'\"></ion-icon>\n       \n    </div>\n  \n  \n  <!--***********  About  ***********-->\n  <ion-item lines=\"none\">\n      <h1 class=\"main-header5\">About me</h1>  <ion-label class=\"main-header5 edit\"> Edit</ion-label>\n  </ion-item>\n\n        <ion-item lines=\"none\">\n          <p >{{(agent | async)?.about_me}}</p>\n        </ion-item>\n\n  \n  <!--***********  Contact  ***********-->\n  <ion-item lines=\"none\">\n      <h1 class=\"main-header5\">Contact</h1>\n  </ion-item>\n    <ion-list>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"ios-mail\" item-left></ion-icon>\n          <ion-label>\n              <h2>ceo@cemo.com</h2>\n              <p>work email</p>\n          </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"ios-call\" item-left></ion-icon>\n        <ion-label>\n            <h2>009923124322</h2>\n            <p>mobile phone</p>\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"logo-linkedin\" item-left></ion-icon>\n          <ion-label>\n              <h2>linkedin.com/cemo</h2>\n              <p>linked in </p>\n          </ion-label>\n\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\" item-left></ion-icon>\n        <ion-label>\n            <h2>facebook.com/cemo</h2>\n            <p>facebook</p>\n        </ion-label>\n\n      </ion-item>\n      <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"logo-skype\" item-left></ion-icon>\n          <ion-label>\n              <h2>cemo@outlook.com</h2>\n              <p>skype</p>\n          </ion-label>\n\n      </ion-item>\n    </ion-list>\n      \n  <!--***********  Properties lists  ***********-->\n</ion-content>"

/***/ }),

/***/ "./src/app/app-real/real-agent-detail/real-agent-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/app-real/real-agent-detail/real-agent-detail.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px; }\n  .logo-box img {\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .logo-box ion-icon {\n    font-size: 150px;\n    position: absolute;\n    width: 140px;\n    height: 140px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto; }\n  .edit {\n  text-align: right !important;\n  color: #1569a9; }\n  #profile1-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 110px;\n  margin: 0 auto 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.1);\n  -o-border-image: initial;\n     border-image: initial; }\n  #profile1-info {\n  width: 100%;\n  text-align: center; }\n  #profile1-name {\n  color: #444;\n  font-size: 22px; }\n  .profile1-description {\n  font-size: 15px;\n  color: #888; }\n  .profile1-numbers p {\n  color: #888;\n  font-size: 18px;\n  margin-top: 3px; }\n  .profile1-numbers span {\n  font-weight: bold;\n  font-size: 18px;\n  color: #34354c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWFnZW50LWRldGFpbC9yZWFsLWFnZW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBdUJuQjtFQTVCRDtJQVFRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFoQkw7SUFrQlEsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCxhQUFZLEVBQ2Y7RUFHTDtFQUVFLDZCQUEyQjtFQUN6QixlQUFjLEVBQ2pCO0VBRUQ7RUFDSSxlQUFjO0VBRWQsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsdUNBQXFDO0VBQ3JDLHlCQUFxQjtLQUFyQixzQkFBcUIsRUFFdEI7RUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7RUFDRDtFQUNFLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjtFQUNEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXLEVBQ1o7RUFFRjtFQUVLLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGdCQUFlLEVBQ2hCO0VBTEo7RUFPSyxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAtcmVhbC9yZWFsLWFnZW50LWRldGFpbC9yZWFsLWFnZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lZGl0T3B0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5lZGl0e1xuXG4gIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcbiAgICBjb2xvcjogIzE1NjlhOTtcbn1cbiAgIC8vLS0tLS0tLS0tLS0tLS0tZWRpdE9wdGlvbi0tLS0tLS0tLS0tLS0tLVxuI3Byb2ZpbGUxLWltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LDAuMSk7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxMXB4IDIwcHggLTNweCByZ2JhKDE0MiwgMTM2LCAxNDYsIDAuNzUpO1xuICB9XG4gICNwcm9maWxlMS1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI3Byb2ZpbGUxLW5hbWUge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvZmlsZTEtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgfVxuXG4gLnByb2ZpbGUxLW51bWJlcnMge1xuICAgIHAge1xuICAgICAgY29sb3I6ICM4ODg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzM0MzU0YztcbiAgICB9XG4gIH0gIl19 */"

/***/ }),

/***/ "./src/app/app-real/real-agent-detail/real-agent-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-real/real-agent-detail/real-agent-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: RealAgentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealAgentDetailPage", function() { return RealAgentDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
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






var RealAgentDetailPage = /** @class */ (function () {
    function RealAgentDetailPage(realestateService, userService, activatedRoute, navController, router, ionicComponentService, modalController) {
        this.realestateService = realestateService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        this.agentId = this.activatedRoute.snapshot.paramMap.get('agentId');
        console.log("itemId=" + this.agentId);
    }
    RealAgentDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.realestateService.getAgentDetail(this.agentId)];
                    case 1:
                        _a.agent = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.realestateService.getAgentDetail(this.agentId)];
                    case 2:
                        _b.buyItems = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealAgentDetailPage.prototype.ngOnDestroy = function () {
        //	this.itemSubscribe.unsubscribe()
    };
    RealAgentDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 300;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 300;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    RealAgentDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-agent-detail',
            template: __webpack_require__(/*! ./real-agent-detail.page.html */ "./src/app/app-real/real-agent-detail/real-agent-detail.page.html"),
            styles: [__webpack_require__(/*! ./real-agent-detail.page.scss */ "./src/app/app-real/real-agent-detail/real-agent-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__["RealestateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RealAgentDetailPage);
    return RealAgentDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=real-agent-detail-real-agent-detail-module.js.map