(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-detail-food-detail-module"],{

/***/ "./src/app/app-food/food-detail/food-detail.module.ts":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-detail/food-detail.module.ts ***!
  \************************************************************/
/*! exports provided: FoodDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailPageModule", function() { return FoodDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-detail.page */ "./src/app/app-food/food-detail/food-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _food_detail_page__WEBPACK_IMPORTED_MODULE_5__["FoodDetailPage"]
    }
];
var FoodDetailPageModule = /** @class */ (function () {
    function FoodDetailPageModule() {
    }
    FoodDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_food_detail_page__WEBPACK_IMPORTED_MODULE_5__["FoodDetailPage"]]
        })
    ], FoodDetailPageModule);
    return FoodDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-food/food-detail/food-detail.page.html":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-detail/food-detail.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n    <ion-toolbar class=\"first\" color=\"primary\" [class.show-background]=\"showToolbar\">\n        <ion-buttons color=\"orange\" slot=\"start\" [class.show-background]=\"showColor\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"home\"></ion-back-button>\n              </ion-buttons> -->\n        <ion-title  [class.show-title]=\"showTitle\">Detail</ion-title>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n<ion-content  no-padding fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n  \n\n<!--*********** Image header  ***********-->\n<div class=\"detail-header\" [ngStyle]=\"{'background-image': 'url(' + itemArray.image + ')'}\">\n        <!-- <h2 class=\"detail-name \"> {{(item | async)?.name}}</h2>\n        <div class=\"detail-price \">{{(item | async)?.phone}}</div> -->\n        <div class=\"bookmarkRibbon\"></div>\n        <div class=\"detail-title\">\n\n        </div>\n</div>\n\n<!--*********** Title  ***********-->\n    <div class=\"margin-top-10\">\n            <ion-item lines=\"none\">\n                <ion-label  text-wrap>\n                    <h1 class=\"food_header1 detail-name\">{{itemArray.name}}</h1>\n                    <h2 class=\"food_header3 detail-price \"> {{itemArray.short_description}}</h2>\n                </ion-label>\n                <div slot=\"end\">\n                    <ion-icon  style=\"font-size: 18px !important;\" color=\"orange\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < itemArray.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                </div>\n            </ion-item>  \n    </div>\n\n\n\n    \n<!--*********** Description ***********-->\n    <div class=\"ion-padding\">\n        <p class=\"margin-bottom-3\">\n            {{itemArray.description}}\n        </p>\n    </div>\n\n<!--*********** Addon option  ***********-->\n<div *ngIf=\"itemArray.attribute2_visible\">\n   <ion-item class=\"margin-top-0\" lines=\"none\">\n        <h1 class=\"margin-top-3 main-b-header6\">{{itemArray.attribute2_name}}</h1>\n    </ion-item>\n     <!-- <ion-list>\n        <ion-item *ngFor=\"let size of (item | async)?.attribute1_value\" lines=\"none\">\n            <h1 class=\"food_header2\">{{item}}</h1>\n        </ion-item>\n    </ion-list> -->\n    <!-- <button (click)=\"getAddOnValue()\">Test get Value</button> -->\n    <div class=\"ion-padding\">\n        <ion-list class=\"ion-margin-left margin-bottom-10\">\n            <ion-item lines=\"none\" *ngFor=\"let addon of itemArray.attribute2_value\" >\n                <ion-checkbox  slot=\"start\" mode=\"ios\" color=\"realgreen\" [(ngModel)]=\"addon.isChecked\"></ion-checkbox>\n                <ion-label slot=\"start\" class=\"ion-padding-left\">{{addon.name}}</ion-label>\n                <ion-badge color=\"light\" slot=\"end\">free</ion-badge>\n            </ion-item>\n        </ion-list>\n    </div>\n</div>\n\n\n<!--*********** Size option  ***********-->\n\n<!-- show if attribute1_value = true-->\n<!-- {{(item | async)?.attribute1_visible}} -->\n<div *ngIf=\"itemArray.attribute1_visible\">\n        <ion-item  class=\"margin-top-0\" lines=\"none\">\n           <h1 class=\"margin-top-0 main-b-header6\">{{itemArray.attribute1_name}}</h1>\n       </ion-item>\n\n       <div class=\"ion-padding\">\n               <ion-item lines=\"none\">\n                       <ion-label>Select size:</ion-label>\n                       <ion-select  mode=\"ios\" [(ngModel)]=\"selectSize\" placeholder=\"Select One\" slot=\"end\">\n                               <ion-select-option *ngFor=\"let size of itemArray.attribute1_value\" [value]=\"size\">{{size}}</ion-select-option>\n                             </ion-select>\n                     </ion-item>\n\n       </div>\n   </div>\n\n<div class=\"footer-box\"></div>\n</ion-content>\n<ion-footer >\n    <ion-toolbar>\n        <ion-row>\n            <ion-col size=\"5\" class=\"padding-left-15\">\n                <ion-text color=\"dark\">\n                    <h1 class=\"main-header8 margin-top-3 margin-bottom-0\">price</h1>\n                </ion-text>\n                <ion-text color=\"realgreen\">\n                    <h1 class=\"main-b-header5 margin-top-0\">{{itemArray.price | currency:'USD':'symbol' }}</h1>\n                </ion-text>\n            </ion-col>\n            <ion-col size=\"7\">\n                    <ion-button color=\"realgreen\" expand=\"full\" (click)=\"addToCart()\">Add to Cart</ion-button>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n</ion-footer>\n    "

/***/ }),

/***/ "./src/app/app-food/food-detail/food-detail.page.scss":
/*!************************************************************!*\
  !*** ./src/app/app-food/food-detail/food-detail.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\nion-checkbox {\n  margin-right: 40px !important; }\nion-title {\n  opacity: 0; }\nion-buttons.showColor {\n  color: #333; }\nion-avatar {\n  margin: 10px 16px 8px 0 !important; }\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1; }\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #009f34; }\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger); }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\nion-card {\n  border-radius: 9px  !important;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1) !important; }\n.img-gallery-box {\n  display: inline-block;\n  padding: 4px; }\n.img-gallery {\n  margin-left: 8px;\n  width: 104px;\n  height: 72px;\n  display: inline-block;\n  border-radius: 8px; }\n.img-gallery img {\n  border-radius: 5px;\n  width: 104px;\n  height: 72px; }\n.horizontal-scroll {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none; }\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n.detail-header:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  /* IE6-9 */ }\n.detail-header {\n  position: relative;\n  height: 300px !important;\n  background-size: cover; }\n.detail-header .detail-title {\n  position: absolute;\n  left: 2px;\n  bottom: 20px;\n  width: 100%; }\n.detail-header ion-item {\n  color: #FFFFFF;\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n.detail-header .detail-price {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #86d44d;*/\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n.transition {\n  transition: background-size .3s ease-in; }\n.avatar-top {\n  margin: 16px 16px 8px 0;\n  margin-bottom: auto; }\nion-badge {\n  color: white;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtZm9vZC9mb29kLWRldGFpbC9mb29kLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQTBCO0FBQzFCO0VBQ0ksMEJBQWE7RUFDYix5Q0FBaUIsRUFDcEI7QUFFRDtFQUNJLDhCQUE0QixFQUMvQjtBQUdEO0VBRUksV0FBVSxFQUNiO0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7QUFDRDtFQUNJLG1DQUFrQyxFQUNyQztBQUNEO0VBT0ksMkNBQTBDO0VBQzFDLHdDQUF1QztFQUN2Qyx1Q0FBc0M7RUFDdEMsc0NBQXFDO0VBQ3BDLFdBQVUsRUFFZDtBQUNELHdDQUF3QztBQUN4QztFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQUUsYUFBYTtFQUMxQywrQkFBOEI7RUFBRSx1QkFBdUI7RUFDdkQsMEJBQXlCO0VBQUUsV0FBVztFQUV0QyxvQkFBbUIsRUFDdEI7QUFJRDtFQUNJLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsNEJBQTJCO0VBQUUsYUFBYTtFQUMxQywrQkFBOEI7RUFBRSx1QkFBdUI7RUFDdkQsMEJBQXlCO0VBQUUsV0FBVztFQUV0QyxvQ0FBbUMsRUFDdEM7QUFDRDtFQUNJO0lBQ0ksV0FBUyxFQUFBO0VBRWI7SUFDSSxXQUFTLEVBQUEsRUFBQTtBQVdqQjtFQUE0Qix1QkFBdUI7RUFDL0M7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBO0FBS2pCO0VBRUksK0JBQThCO0VBSzlCLHFEQUFxRCxFQUN4RDtBQUVEO0VBQ1Esc0JBQXFCO0VBQ3JCLGFBQVksRUFDbkI7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixhQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFXO0VBQ1gsYUFBWSxFQUNmO0FBTUQ7RUFDSSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFFbkI7QUFJRCxnQ0FBZ0M7QUFDaEM7RUFDSSx1QkFBc0IsRUFDekI7QUFFRCxpQ0FBaUM7QUFDakM7RUFDSSxrQkFBZSxFQUNsQjtBQUlEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLE9BQU07RUFDTixVQUFTO0VBQ3lFLGNBQWM7RUFDWiw2QkFBNkI7RUFDakgsdUZBQWdGO0VBQUUsc0RBQXNEO0VBQ3hJLHdIQUF1SDtFQUFFLFdBQVcsRUFFdkk7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFLeEIsdUJBQXNCLEVBQ3pCO0FBRUQ7RUFLSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixZQUFXLEVBRWQ7QUFDRDtFQUdJLGVBQWM7RUFDZCw0QkFBYTtFQUNiLDhCQUFlLEVBRWxCO0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWTtFQUNaLDBFQUFtRSxFQUN0RTtBQU1EO0VBQ0ksd0NBQXVDLEVBQzFDO0FBR0Q7RUFDSSx3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCO0FBZ0JEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUlyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb29kL2Zvb2QtZGV0YWlsL2Zvb2QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5pb24tdG9vbGJhci5maXJzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4IWltcG9ydGFudFxufVxuXG5cbmlvbi10aXRsZXtcbiAgICAvLy0tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMDtcbn1cbmlvbi1idXR0b25zLnNob3dDb2xvcntcbiAgICBjb2xvcjojMzMzIDtcbn1cbmlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luOiAxMHB4IDE2cHggOHB4IDAgIWltcG9ydGFudDtcbn1cbi5zaG93LXRpdGxle1xuXG4gICAgLy8gYW5pbWF0aW9uOiBmYWRlaW4gMC40cztcbiAgICAvLyAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNHM7IC8qIEZpcmVmb3ggKi9cbiAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNHM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLy8gLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogT3BlcmEgKi9cbiAgICAvLyAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgICBvcGFjaXR5OiAxO1xuXG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogT3BlcmEgKi9cbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjMDA5ZjM0O1xufVxuLy8gLnNob3ctaW52ZXJ0e1xuLy8gICAgIC0tY29sb3I6XCIjRjk2OTBFXCI7XG4vLyB9XG4uaGlkZS10aXRsZSB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGFuaW1hdGlvbjogZmFkZW91dCAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5cblxuaW9uLWNhcmR7XG5cbiAgICBib3JkZXItcmFkaXVzOiA5cHggICFpbXBvcnRhbnQ7XG4gICAgLy8td2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwKSAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAgIWltcG9ydGFudDtcbn1cblxuLmltZy1nYWxsZXJ5LWJveHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG59XG4uaW1nLWdhbGxlcnl7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB3aWR0aDoxMDRweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbWctZ2FsbGVyeSBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjEwNHB4O1xuICAgIGhlaWdodDogNzJweDtcbn1cblxuXG5cblxuXG4uaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICBcbn1cblxuXG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuXG5cbi5kZXRhaWwtaGVhZGVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSA2OCUsIHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSA2OCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwKSA2OCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyPScjYTYwMDAwMDAnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG5cbn1cbi5kZXRhaWwtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IHVybChpbWcvMS5qcGcpIG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmRldGFpbC1oZWFkZXIgLmRldGFpbC10aXRsZSB7XG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy8gY29sb3I6ICNGRkZGRkY7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMnB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xufVxuLmRldGFpbC1oZWFkZXIgaW9uLWl0ZW0ge1xuICAgIC8vIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvLyBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xufVxuLmRldGFpbC1oZWFkZXIgLmRldGFpbC1wcmljZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qY29sb3I6ICM4NmQ0NGQ7Ki9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cblxuXG5cblxuXG4udHJhbnNpdGlvbntcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzIGVhc2UtaW47XG59XG5cblxuLmF2YXRhci10b3Age1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDhweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cblxuXG4vLyAudGl0bGUge1xuLy8gICAgIGNvbG9yOiAjMTExMTExO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4vLyAgICAgZm9udC1zaXplOiAyOHB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuLy8gfVxuLy8gLnN1YnRpdGxlIHtcbi8vIGNvbG9yOiAjYWFhO1xuLy8gZm9udC1zaXplOiAyMHB4O1xuLy8gZm9udC13ZWlnaHQ6MzAwO1xuLy8gfVxuaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRvcDogMHB4O1xuICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-food/food-detail/food-detail.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/app-food/food-detail/food-detail.page.ts ***!
  \**********************************************************/
/*! exports provided: FoodDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailPage", function() { return FoodDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");
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





var FoodDetailPage = /** @class */ (function () {
    function FoodDetailPage(foodService, userService, activatedRoute, navController, router, modalController) {
        this.foodService = foodService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        this.itemArray = [];
        this.itemOptions = [];
        // ******** for Cart ***********//
        this.cart = [];
        //**** User authentication  ****//
        this.userAuth = false; // Is user logged in ?
        this.dummy = [
            { val: 'Pepperoni', isChecked: true },
            { val: 'Sausage', isChecked: false },
            { val: 'Mushroom', isChecked: false }
        ];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
        console.log("itemId=" + this.itemId);
        //console.log(this.router.url,"Current URL");
        this.cart = this.foodService.getCart();
    }
    FoodDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.foodService.getItemDetail(this.itemId)];
                    case 1:
                        _a.item = _b.sent();
                        this.itemSubscribe = this.item.subscribe(function (res) {
                            _this.itemArray = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodDetailPage.prototype.ngOnDestroy = function () {
        this.itemSubscribe.unsubscribe();
    };
    // multiple select
    FoodDetailPage.prototype.getAddOnValue = function () {
        console.log("call getAddOnValue()");
        this.addOnItem = this.itemArray.attribute2_value.filter(function (value) {
            return value.isChecked;
        });
        console.log(this.addOnItem);
        this.addOnItem = this.itemArray.attribute2_value.filter(function (value) {
            return value.isChecked;
        });
        console.log("this addOn=" + this.addOnItem);
        console.log("select size=" + this.selectSize);
    };
    FoodDetailPage.prototype.addToCart = function () {
        this.addOnItem = this.itemArray.attribute2_value.filter(function (value) {
            return value.isChecked;
        });
        var addItem = {
            //id :this.itemId, 
            itemId: this.itemId,
            name: this.itemArray.name,
            price: this.itemArray.price,
            description: this.itemArray.description,
            addOn: this.addOnItem,
            size: this.selectSize,
            image: this.itemArray.image
            //image: this.image
        };
        // console.log(this.addOnItem);
        // console.log("select SIZE="+ this.selectSize);
        this.foodService.addToCart(addItem);
        console.log("______addItem=" + JSON.stringify(addItem));
        this.router.navigateByUrl('/food-cart');
    };
    FoodDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 150;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 150;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    FoodDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-detail',
            template: __webpack_require__(/*! ./food-detail.page.html */ "./src/app/app-food/food-detail/food-detail.page.html"),
            styles: [__webpack_require__(/*! ./food-detail.page.scss */ "./src/app/app-food/food-detail/food-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], FoodDetailPage);
    return FoodDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=food-detail-food-detail-module.js.map