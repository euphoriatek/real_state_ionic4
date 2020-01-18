(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-real-real-detail-real-detail-module"],{

/***/ "./src/app/app-real/real-detail/real-detail.module.ts":
/*!************************************************************!*\
  !*** ./src/app/app-real/real-detail/real-detail.module.ts ***!
  \************************************************************/
/*! exports provided: RealDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealDetailPageModule", function() { return RealDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _real_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-detail.page */ "./src/app/app-real/real-detail/real-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _real_detail_page__WEBPACK_IMPORTED_MODULE_5__["RealDetailPage"]
    }
];
var RealDetailPageModule = /** @class */ (function () {
    function RealDetailPageModule() {
    }
    RealDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_real_detail_page__WEBPACK_IMPORTED_MODULE_5__["RealDetailPage"]]
        })
    ], RealDetailPageModule);
    return RealDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-real/real-detail/real-detail.page.html":
/*!************************************************************!*\
  !*** ./src/app/app-real/real-detail/real-detail.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- \n<ion-header>\n    <ion-toolbar  [class.show-background]=\"showToolbar\">\n        <ion-buttons  slot=\"start\" color=\"light\"  [class.show-background]=\"showColor\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n\n        <ion-title class=\"main-header7\">list</ion-title>\n\n\n\n        <ion-buttons *ngIf=\"userAuth\" slot=\"end\">\n            <ion-button (click)=\"toggleHeart()\">\n                <ion-icon slot=\"icon-only\"  [name]=\"heartType\"></ion-icon>\n            </ion-button>\n        </ion-buttons> \n\n    </ion-toolbar>\n\n\n\n\n</ion-header> -->\n\n\n<ion-header>\n        <ion-toolbar class=\"first\"  [class.show-background]=\"showToolbar\">\n        \n            <ion-buttons   [class.show-background]=\"showColor\">\n                <ion-back-button  color=\"white\"> </ion-back-button>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"start\">\n                    <ion-back-button defaultHref=\"home\"></ion-back-button>\n                  </ion-buttons> -->\n            <ion-title  color=\"light\"  [class.show-title]=\"showTitle\">Detail</ion-title>\n    \n            <ion-buttons *ngIf=\"userAuth\" slot=\"end\">\n                    <ion-button color=\"light\" (click)=\"toggleHeart()\">\n                        <ion-icon slot=\"icon-only\"  [name]=\"heartType\"></ion-icon>\n                    </ion-button>\n                </ion-buttons> \n    \n        </ion-toolbar>\n    \n    \n    \n    </ion-header>\n<!-- https://medium.com/@paulstelzer/ionic-4-how-to-make-a-transparent-header-toolbar-38405f2e4a74 -->\n\n<!-- Transperent header with hide show background -->\n\n<ion-content no-padding fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n  \n\n \n<!--*********** Image header  ***********--> \n<div *ngIf=\"(itemDetail | async)?.recommended\"  class=\"ribbon pop-in\">Best</div>\n<div class=\"detail-header\" [ngStyle]=\"{'background-image': 'url(' + (itemDetail | async)?.image_header + ')'}\">\n        <!-- <h2 class=\"detail-name \"> {{(item | async)?.name}}</h2>\n        <div class=\"detail-price \">{{(item | async)?.phone}}</div> -->\n        <div class=\"detail-title\">\n        </div>\n</div>\n\n\n\n\n\n<!--*********** Title  ***********-->\n    <div class=\"\">\n            <ion-item lines=\"none\">\n                <ion-label  text-wrap>\n                    <h1 class=\"main-b-header4 detail-name margin-top-10\">{{(itemDetail | async)?.title}}</h1>\n                    <h2 class=\"main-header7 detail-price \"> {{(itemDetail | async)?.short_features}}</h2>\n                </ion-label>\n                <div slot=\"end\">\n                        <ion-text color=\"green\">\n                            <h1 class=\"main-b-header6\">${{(itemDetail | async)?.price}}</h1>\n                        </ion-text>\n                </div>\n            </ion-item> \n\n    </div>\n\n\n  \n<!--*********** Location ***********-->\n<!-- <ion-item lines=\"none\">\n       \n    </ion-item> -->\n    <!-- <div class=\"\">\n        <p class=\"main-header7\">\n            {{(itemDetail | async)?.location}}\n        </p>\n    </div> -->\n\n\n<!--*********** Description ***********-->\n<ion-item lines=\"none\">\n    <h1 class=\"main-header5 margin-top-5 margin-bottom-0\">Description</h1>\n</ion-item>\n    <div class=\"padding-left-15 padding-right-15\">\n        <p class=\"margin-top-0\">\n            {{(itemDetail | async)?.description}}\n        </p>\n    </div>\n<!--*********** loaction ***********-->\n\n<ion-item lines=\"none\">\n        <h1 class=\"main-header5 \">Location</h1>\n    </ion-item>\n    <h1 class=\"margin-all-15 margin-top-3 main-header7\">        \n            <ion-icon  name=\"ios-pin\" color=\"grey\" size=\"small\"></ion-icon>Address: {{(itemDetail | async)?.location}}\n    </h1> \n<!--*********** Contact ***********-->\n    <ion-item lines=\"none\">\n        <h1 class=\"main-header5\">Contact agent</h1>\n    </ion-item>\n    <ion-item lines=\"none\" style=\"padding:0px !important;\"  href=\"#\" routerLink=\"/side-menu/realestate/tabs/tab4/real-agent-detail/{{(itemDetail | async)?.agentId}}\">\n        <ion-avatar slot=\"start\">\n            <img [src]=\"(agentDetail | async)?.image\">\n        </ion-avatar>\n        <ion-label>\n            <!-- <h3 class=\"main-header6\">{{(itemDetail | async)?.agentId}}</h3> -->\n            <h3 class=\"main-header6\">{{(agentDetail | async)?.name}}</h3>\n            <h3 class=\"main-header6\">{{(agentDetail | async)?.position}}</h3>\n            <ion-icon  style=\"font-size: 16px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < (agentDetail | async)?.rating  ? 'star' : 'star-outline'\"></ion-icon>\n            <!-- <p class=\"main-b-header9\"  (click)=\"logout()\">LOGOUT</p> -->\n        </ion-label>\n    \n    </ion-item>\n\n\n<!--*********** Features ***********-->\n\n    <ion-item lines=\"none\">\n        <h1 class=\"main-header5\">Features</h1>\n    </ion-item>\n        <div class=\"margin-all-15\">\n                <!-- <ul>\n                  <li *ngFor=\"let feature of (itemDetail | async)?.features\">\n                      {{feature.title}}:{{feature.value}}\n                  </li>\n                </ul> -->\n                <ion-grid style=\"margin-left: 30px;\"s>\n                    <ion-row wrap>\n                      <ion-col tappable  size=\"6\"  *ngFor=\"let feature of (itemDetail | async)?.features\" >\n                         <ion-text color=\"dark\"><h1 class=\"margin-top-3 main-b-header9\">{{feature.title}}</h1></ion-text> \n                         <ion-text color=\"dark\"><h1 class=\"margin-top-3 main-header7\">{{feature.value}}</h1></ion-text>  \n                      </ion-col>\n                    </ion-row>\n          \n                </ion-grid>\n        </div>\n  \n         \n\n\n\n\n    <!--*********** Map  ***********-->\n    \n    <!--*********** Replace your google map API key  ***********-->     \n    <img tappable class=\"team\"  src=\"https://maps.googleapis.com/maps/api/staticmap?center={{(itemDetail | async)?.lat}},{{(itemDetail | async)?.lng}}&zoom=15&scale=2&size=300x200&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0088f2%7Clabel:%7C{{(itemDetail | async)?.lat}},{{(itemDetail | async)?.lng}}&key=YOUR_API_KEY\"  />\n\n<!--*********** Contact  ***********-->\n    <!-- <div class=\"ion-margin-top\">\n            <ion-item lines=\"none\" class=\"\">\n                    <h1 class=\"travel_header2\">Contact</h1>\n            </ion-item>\n    </div> -->\n\n    <!-- <div  class=\"ion-margin-top ion-margin-bottom\">\n            <ion-item  lines=\"none\" *ngFor=\"let feature of (itemDetail | async)?.features\">\n                    <ion-icon name=\"\" slot=\"start\" color=\"\"></ion-icon>\n                    <ion-label>\n                        <ion-text color=\"medium\">\n                                <h2 >{{feature.title}} : {{feature.value}}</h2>\n                        </ion-text>                                         \n                    </ion-label>\n                </ion-item>\n    </div> -->\n\n\n</ion-content>\n\n<ion-footer color=\"light\">\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-button  expand=\"block\"  color=\"orange\" (click)=\"contactAction('Calling......')\">CALL</ion-button>\n        </ion-col>\n        <ion-col>\n            <ion-button  expand=\"block\"  color=\"orange\" (click)=\"contactAction('Opening email...')\">E-MAIL</ion-button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>\n    "

/***/ }),

/***/ "./src/app/app-real/real-detail/real-detail.page.scss":
/*!************************************************************!*\
  !*** ./src/app/app-real/real-detail/real-detail.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\nion-title {\n  opacity: 0; }\nion-buttons.showColor {\n  color: #333; }\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1; }\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #009f34; }\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger); }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\nion-row ion-card img {\n    width: 100%; }\nion-col {\n  padding: 0px !important; }\n.card1-padding {\n  padding: 12px 10px !important; }\nion-buttons.showColor {\n  color: #333; }\nion-avatar {\n  margin: 10px 16px 8px 0 !important;\n  width: 70px !important;\n  height: 70px !important; }\nion-card {\n  border-radius: 9px  !important;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1) !important; }\n.img-gallery-box {\n  display: inline-block;\n  padding: 4px; }\n.img-gallery {\n  margin-left: 8px;\n  width: 104px;\n  height: 72px;\n  display: inline-block;\n  border-radius: 8px; }\n.img-gallery img {\n  border-radius: 5px;\n  width: 104px;\n  height: 72px; }\n.horizontal-scroll {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none; }\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n.detail-header:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  /* IE6-9 */ }\n.detail-header {\n  position: relative;\n  height: 400px !important;\n  background-size: cover; }\n.detail-header .detail-title {\n  position: absolute;\n  left: 2px;\n  bottom: 20px;\n  width: 100%; }\n.detail-header ion-item {\n  color: #FFFFFF;\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n.detail-header .detail-price {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #86d44d;*/\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n.transition {\n  transition: background-size .3s ease-in; }\n.avatar-top {\n  margin: 16px 16px 8px 0;\n  margin-bottom: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtcmVhbC9yZWFsLWRldGFpbC9yZWFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQTBCO0FBQzFCO0VBQ0ksMEJBQWE7RUFDYix5Q0FBaUIsRUFDcEI7QUFFRDtFQUVJLFdBQVUsRUFDYjtBQUNEO0VBQ0ksWUFBVyxFQUNkO0FBRUQ7RUFPSSwyQ0FBMEM7RUFDMUMsd0NBQXVDO0VBQ3ZDLHVDQUFzQztFQUN0QyxzQ0FBcUM7RUFDcEMsV0FBVSxFQUVkO0FBQ0Qsd0NBQXdDO0FBQ3hDO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qiw0QkFBMkI7RUFBRSxhQUFhO0VBQzFDLCtCQUE4QjtFQUFFLHVCQUF1QjtFQUN2RCwwQkFBeUI7RUFBRSxXQUFXO0VBRXRDLG9CQUFtQixFQUN0QjtBQUlEO0VBQ0ksbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2Qiw0QkFBMkI7RUFBRSxhQUFhO0VBQzFDLCtCQUE4QjtFQUFFLHVCQUF1QjtFQUN2RCwwQkFBeUI7RUFBRSxXQUFXO0VBRXRDLG9DQUFtQyxFQUN0QztBQUNEO0VBQ0k7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBO0FBV2pCO0VBQTRCLHVCQUF1QjtFQUMvQztJQUNJLFdBQVMsRUFBQTtFQUViO0lBQ0ksV0FBUyxFQUFBLEVBQUE7QUFPakI7RUFFUSx1QkFBcUI7RUFDekIsMEJBQXlCO0VBQ3pCLDJCQUEwQixFQUk3QjtBQVJEO0lBTVEsWUFBVSxFQUNiO0FBR0w7RUFDSSx3QkFBdUIsRUFDMUI7QUFDRDtFQUNJLDhCQUE2QixFQUVoQztBQUtEO0VBQ0ksWUFBVyxFQUNkO0FBQ0Q7RUFDSSxtQ0FBa0M7RUFDbEMsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjtBQUVEO0VBRUksK0JBQThCO0VBSzlCLHFEQUFxRCxFQUN4RDtBQUVEO0VBQ1Esc0JBQXFCO0VBQ3JCLGFBQVksRUFDbkI7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixhQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFXO0VBQ1gsYUFBWSxFQUNmO0FBTUQ7RUFDSSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFFbkI7QUFJRCxnQ0FBZ0M7QUFDaEM7RUFDSSx1QkFBc0IsRUFDekI7QUFFRCxpQ0FBaUM7QUFDakM7RUFDSSxrQkFBZSxFQUNsQjtBQUlEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLE9BQU07RUFDTixVQUFTO0VBQ3lFLGNBQWM7RUFDWiw2QkFBNkI7RUFDakgsdUZBQWdGO0VBQUUsc0RBQXNEO0VBQ3hJLHdIQUF1SDtFQUFFLFdBQVcsRUFFdkk7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFLeEIsdUJBQXNCLEVBQ3pCO0FBRUQ7RUFLSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixZQUFXLEVBRWQ7QUFDRDtFQUdJLGVBQWM7RUFDZCw0QkFBYTtFQUNiLDhCQUFlLEVBRWxCO0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWTtFQUNaLDBFQUFtRSxFQUN0RTtBQU1EO0VBQ0ksd0NBQXVDLEVBQzFDO0FBR0Q7RUFDSSx3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXJlYWwvcmVhbC1kZXRhaWwvcmVhbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cbmlvbi10b29sYmFyLmZpcnN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZXtcbiAgICAvLy0tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMDtcbn1cbmlvbi1idXR0b25zLnNob3dDb2xvcntcbiAgICBjb2xvcjojMzMzIDtcbn1cblxuLnNob3ctdGl0bGV7XG5cbiAgICAvLyBhbmltYXRpb246IGZhZGVpbiAwLjRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogRmlyZWZveCAqL1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAvLyAtby1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBPcGVyYSAqL1xuICAgIC8vIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgIG9wYWNpdHk6IDE7XG5cbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICMwMDlmMzQ7XG59XG4vLyAuc2hvdy1pbnZlcnR7XG4vLyAgICAgLS1jb2xvcjpcIiNGOTY5MEVcIjtcbi8vIH1cbi5oaWRlLXRpdGxlIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cblxuXG5cblxuaW9uLXJvd3tcbiAgICBpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cbn1cbmlvbi1jb2x7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZDEtcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggIWltcG9ydGFudDtcbiAgICAvL21hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbmlvbi1idXR0b25zLnNob3dDb2xvcntcbiAgICBjb2xvcjojMzMzIDtcbn1cbmlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luOiAxMHB4IDE2cHggOHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDlweCAgIWltcG9ydGFudDtcbiAgICAvLy13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDApICAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpICAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWdhbGxlcnktYm94e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbn1cbi5pbWctZ2FsbGVyeXtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOjEwNHB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmltZy1nYWxsZXJ5IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6MTA0cHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xufVxuXG5cblxuXG5cbi5ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIFxufVxuXG5cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5cblxuLmRldGFpbC1oZWFkZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyNhNjAwMDAwMCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cblxufVxuLmRldGFpbC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKGltZy8xLmpwZykgbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXRpdGxlIHtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyBjb2xvcjogI0ZGRkZGRjtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAycHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciBpb24taXRlbSB7XG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXByaWNlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypjb2xvcjogIzg2ZDQ0ZDsqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xufVxuXG5cblxuXG5cbi50cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuM3MgZWFzZS1pbjtcbn1cblxuXG4uYXZhdGFyLXRvcCB7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggOHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-real/real-detail/real-detail.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/app-real/real-detail/real-detail.page.ts ***!
  \**********************************************************/
/*! exports provided: RealDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealDetailPage", function() { return RealDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/realestate.service */ "./src/app/services/realestate.service.ts");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ionic-component.service */ "./src/app/services/ionic-component.service.ts");
/* harmony import */ var _real_map_real_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../real-map/real-map.page */ "./src/app/app-real/real-map/real-map.page.ts");
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






// import travel-map  for page modal

var RealDetailPage = /** @class */ (function () {
    function RealDetailPage(realestateService, userService, activatedRoute, navController, router, ionicComponentService, modalController) {
        this.realestateService = realestateService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        //****** image slide  *******/
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
        };
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        //**** favorite  ****/
        this.favorite = false;
        this.heartType = "heart-empty";
        this.relatedPlacesArray = [];
        this.itemArray = []; // <------- itemArray: any=[]; 
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    }
    RealDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlaceDetail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealDetailPage.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe()
    };
    RealDetailPage.prototype.getPlaceDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        //console.log("1___userAuth before receive="+this.userAuth);
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //console.log("1___userAuth before receive="+this.userAuth);
                        _a.userAuth = _d.sent();
                        //console.log("2___userAuth after receive="+this.userAuth);
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        //console.log("2___userAuth after receive="+this.userAuth);
                        _b.userId = _d.sent();
                        //console.log("2.1___userId after receive="+this.userId);
                        // use async pipe //
                        _c = this;
                        return [4 /*yield*/, this.realestateService.getHouseDetail(this.itemId)];
                    case 3:
                        //console.log("2.1___userId after receive="+this.userId);
                        // use async pipe //
                        _c.itemDetail = _d.sent();
                        // get image gallery from place doc.
                        return [4 /*yield*/, this.itemDetail.subscribe(function (res) {
                                // console.log("4 getPlacesDetail subsribe = "+res);
                                // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res)); 
                                _this.itemArray = res;
                                console.log("______this.itemArray.agentId" + _this.itemArray.agentId);
                                _this.agentDetail = _this.realestateService.getAgentDetail(_this.itemArray.agentId);
                                console.log("6 this.itemArray/images=" + _this.itemArray.images);
                                console.log("7 this.itemArray.travel_categoryId=" + _this.itemArray.travel_categoryId);
                                //this.getRelatedPlace(this.itemArray.travel_categoryId);
                                ///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%... where are this.userID....?????????????????
                                _this.heartType = res.favorite.includes(_this.userId) ? 'heart' : 'heart-empty';
                            })];
                    case 4:
                        // get image gallery from place doc.
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealDetailPage.prototype.toggleHeart = function () {
        if (this.heartType == 'heart-empty') {
            console.log("Heart ON");
            this.realestateService.addFavorite(this.itemId, this.itemArray.title, this.itemArray.image_header);
        }
        else {
            console.log("Heart OFF");
            this.realestateService.removeFavorite(this.itemId);
        }
    };
    RealDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 150;
            // console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 150;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    RealDetailPage.prototype.contactAction = function (action) {
        this.ionicComponentService.presentToast(action, 3000);
    };
    RealDetailPage.prototype.openMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openModal");
                        return [4 /*yield*/, this.modalController.create({
                                component: _real_map_real_map_page__WEBPACK_IMPORTED_MODULE_6__["RealMapPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    categoryId: "buy"
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
    RealDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-detail',
            template: __webpack_require__(/*! ./real-detail.page.html */ "./src/app/app-real/real-detail/real-detail.page.html"),
            styles: [__webpack_require__(/*! ./real-detail.page.scss */ "./src/app/app-real/real-detail/real-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__["RealestateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RealDetailPage);
    return RealDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-real-real-detail-real-detail-module.js.map