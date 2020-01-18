(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-detail-shopping-detail-module"],{

/***/ "./src/app/app-shopping/shopping-detail/shopping-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-detail/shopping-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingDetailPageModule", function() { return ShoppingDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-detail.page */ "./src/app/app-shopping/shopping-detail/shopping-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shopping_detail_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingDetailPage"]
    }
];
var ShoppingDetailPageModule = /** @class */ (function () {
    function ShoppingDetailPageModule() {
    }
    ShoppingDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_detail_page__WEBPACK_IMPORTED_MODULE_5__["ShoppingDetailPage"]]
        })
    ], ShoppingDetailPageModule);
    return ShoppingDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-shopping/shopping-detail/shopping-detail.page.html":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-detail/shopping-detail.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"first\" color=\"primary\" [class.show-background]=\"showToolbar\">\n        <ion-buttons color=\"orange\" slot=\"start\" [class.show-background]=\"showColor\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title  class=\"main-header5\" [class.show-title]=\"showTitle\">Detail</ion-title>\n\n        <!-- A favorite button will not show if user not login. -->\n        <ion-buttons *ngIf=\"userAuth\" slot=\"end\">\n            <ion-button (click)=\"toggleHeart()\">\n                <ion-icon slot=\"icon-only\"  [name]=\"heartType\"></ion-icon>\n            </ion-button>\n        </ion-buttons> \n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  no-padding fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n  \n<!--*********** Image header  ***********-->\n<!-- <div class=\"detail-header\" [ngStyle]=\"{'background-image': 'url(' + itemArray.image + ')'}\">\n</div> -->\n<ion-slides pager=\"true\" [options]=\"slideOptsOne\" >\n    <ion-slide *ngFor=\"let s of itemArray.image_slide\">\n        <img class=\"image-slide\" [src]=\"s\">\n    </ion-slide>\n</ion-slides>\n<!--*********** Title  ***********-->\n<div class=\"food_space1\">\n    <ion-item lines=\"none\">\n        <ion-label  text-wrap>\n            <h1 class=\"main-b-header2 detail-name\">{{itemArray.name}}</h1>\n            <ion-icon  style=\"font-size: 18px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < itemArray.rating  ? 'star' : 'star-outline'\"></ion-icon>\n            <!-- <h2 class=\"food_header3 detail-price \"> {{itemArray.short_description}}</h2> -->\n            <!-- <ion-text color=\"grey\"> <h2 class=\"main-b-header5 detail-price \"> ${{itemArray.price}}</h2> </ion-text> -->\n            <div *ngIf=\"!itemArray.discount\" class=\"main-b-header5\" >\n                <ion-text color=\"grey\">{{itemArray.price | currency}}</ion-text>\n            </div>\n            <div *ngIf=\"itemArray.discount\" class=\"main-b-header5\" >\n                <ion-text color=\"grey\">{{itemArray.discount_price | currency}}&nbsp;&nbsp;</ion-text>\n                <ion-text color=\"light\" class=\"discount\">{{itemArray.price | currency}}</ion-text>\n            </div>   \n\n        </ion-label>\n        <div slot=\"end\">\n        </div>\n    </ion-item>  \n</div>\n\n\n<!--*********** Description ***********-->\n<div class=\"food_space4\">\n    <p class=\"\" [innerHtml]=\"itemArray.description\">\n    </p>\n  \n</div>\n\n<!-- show if attribute1_value = true-->\n<!-- {{(item | async)?.attribute1_visible}} -->\n\n\n<!-- ################################## -->\n<!-- ######## Color selector ########## -->\n<!-- ################################## -->\n<!-- https://angular.io/tutorial/toh-pt2 -->\n<!-- https://stackblitz.com/angular/dgknlvmvgko  -->\n<!--  if attribute2_visible then show color selctor -->\n<div *ngIf=\"itemArray.attribute2_visible\">\n         <ion-row>\n             <ion-col size=\"2\" style=\"margin-left:9px;\">\n                    <h1 class=\"main-header5\">{{itemArray.attribute2_name}}</h1>\n             </ion-col>\n             <ion-col>\n                    <ul class=\"color-selector\">\n                            <li *ngFor=\"let color of itemArray.attribute2_value\"\n                                [style.backgroundColor]=\"color.color\"\n                                [class.selected]=\"color.color === selectedColor\"\n                                (click)=\"onSelectColor(color.color,color.name)\" >\n                                <span class=\"badge\"></span> \n                            </li>\n                        </ul>\n             </ion-col>\n         </ion-row>\n\n     </div>\n \n\n\n<!-- ############################### -->\n<!-- ######## Size selector ########## -->\n<!-- ############################### -->\n\n<!--  if attribute1_visible = true then show size selector -->\n<div *ngIf=\"itemArray.attribute1_visible\">\n   <ion-row>\n        <ion-col size=\"2\" style=\"margin-left:9px;\">\n               <h1 class=\"main-header5\">{{itemArray.attribute1_name}}</h1>\n        </ion-col>\n        <ion-col>\n                <ul class=\"size-selector\">\n                        <li *ngFor=\"let size of itemArray.attribute1_value\"\n                            [style.backgroundColor]=\"size\"\n                            [class.selected]=\"size === selectedSize\"\n                            (click)=\"onSelectSize(size)\" >\n                            {{size}}\n                        </li>\n                    </ul>                \n        </ion-col>\n    </ion-row>\n</div>\n\n\n\n<!-- ############################### -->\n<!-- ######## Related items ########## -->\n<!-- ############################### -->\n<ion-item lines=\"none\">\n        <h1 class=\"main-header4\">Related items</h1>\n    </ion-item>\n    \n        <!-- <ion-grid>\n            <ion-row wrap>\n                <ion-col tappable  size=\"6\"  *ngFor=\"let itemRelated of itemRelated | async\" color=\"gray\">\n                <ion-card class=\"main-card card-tall-2 \"   routerLink=\"/shopping-detail/{{itemRelated.id}}\"  >\n                    <div class=\"div-tall-bg-2\"  [ngStyle]=\"{'background-image': 'url(' + itemRelated.image+ ')'}\">\n                    </div>\n    \n                    <div class=\"\">{{itemRelated.name}}</div>\n                    <div><p style=\"margin-top: 3px;\">{{itemRelated.name}}</p></div>\n                    <div style=\"margin-top: -10px;\">\n                            <p *ngIf=\"!promotion.discount\" ion-text  color=\"dark\"><strong>${{itemRelated.price}}</strong></p>\n                            <p *ngIf=\"promotion.discount\" ion-text  color=\"dark\" class=\"discount\">${{itemRelated.price}}</p>\n                            <p *ngIf=\"promotion.discount\" ion-text  large color=\"red\"><strong>${{itemRelated.discountPrice}}</strong></p>\n                    </div>\n                </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid> -->\n\n<!--  add list of reviews and submit review button -->\n<!-- ################################## -->\n<!-- ######## Review ########## -->\n<!-- ################################## -->\n    <!-- <div class=\"ion-margin-top\">\n            <ion-item lines=\"none\"   class=\"\">\n                    <h1 class=\"main_header4\">Review</h1>\n                <ion-button fill=\"none\" slot=\"end\" color=\"secondary\" [routerLink]=\"['/shopping-review', itemId]\" >View all</ion-button>\n            </ion-item>\n    </div>\n\n\n    <ion-card *ngFor=\"let review of reviews | async\" >\n        <ion-item  lines=\"none\" detail=\"false\">\n            <ion-avatar slot=\"start\" class=\"avatar-top\">\n                <ion-img [src]=\"review.userProfileImage\"></ion-img>\n            </ion-avatar>\n            <ion-label >\n                <h2>{{review.name}}</h2>\n                <p> {{review.createdTime.toDate() | date: 'dd/MM/yyyy'}}</p>\n            </ion-label>\n            <ion-label text-right slot=\"end\" >            \n                <ion-icon  style=\"margin-right:2px; font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < review.rating ?  'star' : 'star-outline'\"></ion-icon>\n            </ion-label>\n            \n        </ion-item>\n        \n        <ion-card-content>\n            {{review.comment}}\n        </ion-card-content>\n    </ion-card>\n\n\n    \n    <div class=\"ion-margin\">\n        <ion-button expand=\"block\"  color=\"orange\"  *ngIf=\"(place | async) as placeId\" class=\"team\" (click)=\"openAddReview(placeId.id)\">Write review</ion-button>\n        <ion-button expand=\"block\"  fill=\"blank\" color=\"bluegrey\"  class=\"team\" [routerLink]=\"['/shopping-review-add', itemId]\">Write a review</ion-button>\n    </div>\n    <div style=\"height: 85px;\"></div> -->\n</ion-content>\n\n <ion-footer >\n    <ion-toolbar>\n        <!-- <ion-button  expand=\"block\"  color=\"orange\" (click)=\"goAddReview()\">Write review</ion-button> -->\n        <ion-button color=\"bluegrey\" expand=\"full\" (click)=\"addToCart()\">Add to Cart</ion-button>\n        <!-- <ion-button  fill=\"none\"  slot=\"end\">\n            <ion-icon slot=\"icon-only\"  color=\"orange\" name=\"ios-share-outline\"></ion-icon>\n        </ion-button> -->\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/app-shopping/shopping-detail/shopping-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/app-shopping/shopping-detail/shopping-detail.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  padding-bottom: 80px; }\n\nion-slides {\n  height: 400px;\n  width: 100%; }\n\n.image-slide {\n  max-width: 100vw !important;\n  max-height: 100vh !important; }\n\nul.color-selector {\n  margin-top: 0px !important;\n  -webkit-padding-start: 7px;\n          padding-inline-start: 7px; }\n\nul.color-selector li {\n  text-align: center;\n  display: inline-block;\n  width: 35px;\n  margin-right: 3px;\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 35px;\n  border-radius: 50px;\n  border: solid 1px #ddd; }\n\n.color-selector li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  /* left: .1em; */ }\n\n.color-selector li.selected {\n  color: white;\n  /* border-style: solid;\n    border-color: #ccc; */\n  border: solid 3px #eee; }\n\n.color-selector li.selected:hover {\n  background-color: #BBD8DC;\n  color: white; }\n\nul.size-selector {\n  margin-top: 0px !important;\n  -webkit-padding-start: 2px;\n          padding-inline-start: 2px; }\n\nul.size-selector li {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 40px;\n  display: inline-block;\n  padding: 0px 9px;\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n  margin-right: 3px;\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  border: solid 1px #eee;\n  margin: .5em;\n  height: 40px;\n  border-radius: 9px; }\n\n.size-selector li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  /* left: .1em; */ }\n\n.size-selector li.selected {\n  color: white;\n  /* border-style: solid;\n    border-color: #ccc; */\n  border: solid 2px #ddd; }\n\n.size-selector li.selected:hover {\n  background-color: #BBD8DC;\n  color: white; }\n\n/* Transparent standard */\n\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  opacity: 0; }\n\nion-buttons.showColor {\n  color: #333; }\n\nion-avatar {\n  margin: 10px 16px 8px 0 !important; }\n\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1; }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #607D8B; }\n\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger); }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\nion-card {\n  border-radius: 9px  !important;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1) !important; }\n\n.img-gallery-box {\n  display: inline-block;\n  padding: 4px; }\n\n.img-gallery {\n  margin-left: 8px;\n  width: 104px;\n  height: 72px;\n  display: inline-block;\n  border-radius: 8px; }\n\n.img-gallery img {\n  border-radius: 5px;\n  width: 104px;\n  height: 72px; }\n\n.horizontal-scroll {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none; }\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n\n.detail-header:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.detail-header {\n  position: relative;\n  height: 350px !important;\n  background-size: cover; }\n\n.detail-header .detail-title {\n  position: absolute;\n  left: 2px;\n  bottom: 20px;\n  width: 100%; }\n\n.detail-header ion-item {\n  color: #FFFFFF;\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\n.detail-header .detail-price {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #86d44d;*/\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.transition {\n  transition: background-size .3s ease-in; }\n\n.avatar-top {\n  margin: 16px 16px 8px 0;\n  margin-bottom: auto; }\n\nion-badge {\n  color: white;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtc2hvcHBpbmcvc2hvcHBpbmctZGV0YWlsL3Nob3BwaW5nLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsWUFBVyxFQUVkOztBQUNEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QixFQUMvQjs7QUFHRDtFQUNJLDJCQUEwQjtFQUMxQiwyQkFBeUI7VUFBekIsMEJBQXlCLEVBQzVCOztBQUNEO0VBRUksbUJBQWtCO0VBQ2xCLHNCQUFvQjtFQUNwQixZQUFXO0VBQ1gsa0JBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFDdkI7O0FBR0Q7RUFDRSxlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLGlCQUFpQixFQUNsQjs7QUFDRDtFQUVFLGFBQVk7RUFDWjswQkFDc0I7RUFDdEIsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVksRUFDYjs7QUFJRDtFQUNFLDJCQUEwQjtFQUMxQiwyQkFBeUI7VUFBekIsMEJBQXlCLEVBQzVCOztBQUNDO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsc0JBQW9CO0VBQ3BCLGlCQUFnQjtFQUNoQiw4QkFBNkI7RUFDN0IsK0JBQThCO0VBRTlCLGtCQUFnQjtFQUNoQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixhQUFZO0VBRVosYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCx1QkFBc0I7RUFDdEIsaUJBQWlCLEVBQ2xCOztBQUNEO0VBRUUsYUFBWTtFQUNaOzBCQUNzQjtFQUN0Qix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsYUFBWSxFQUNiOztBQUVILDBCQUEwQjs7QUFDMUI7RUFDSSwwQkFBYTtFQUNiLHlDQUFpQixFQUNwQjs7QUFLRDtFQUVJLFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLG1DQUFrQyxFQUNyQzs7QUFDRDtFQU9JLDJDQUEwQztFQUMxQyx3Q0FBdUM7RUFDdkMsdUNBQXNDO0VBQ3RDLHNDQUFxQztFQUNwQyxXQUFVLEVBRWQ7O0FBQ0Qsd0NBQXdDOztBQUN4QztFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQUUsYUFBYTtFQUMxQywrQkFBOEI7RUFBRSx1QkFBdUI7RUFDdkQsMEJBQXlCO0VBQUUsV0FBVztFQUV0QyxvQkFBbUIsRUFDdEI7O0FBSUQ7RUFDSSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVc7RUFFdEMsb0NBQW1DLEVBQ3RDOztBQUNEO0VBQ0k7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBOztBQVdqQjtFQUE0Qix1QkFBdUI7RUFDL0M7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBOztBQUtqQjtFQUVJLCtCQUE4QjtFQUs5QixxREFBcUQsRUFDeEQ7O0FBRUQ7RUFDUSxzQkFBcUI7RUFDckIsYUFBWSxFQUNuQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixhQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsYUFBVztFQUNYLGFBQVksRUFDZjs7QUFNRDtFQUNJLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUVuQjs7QUFJRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVELGlDQUFpQzs7QUFDakM7RUFDSSxrQkFBZSxFQUNsQjs7QUFJRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLFNBQVE7RUFDUixPQUFNO0VBQ04sVUFBUyxFQU1aOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUt4Qix1QkFBc0IsRUFDekI7O0FBRUQ7RUFLSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixZQUFXLEVBRWQ7O0FBQ0Q7RUFHSSxlQUFjO0VBQ2QsNEJBQWE7RUFDYiw4QkFBZSxFQUVsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZO0VBQ1osMEVBQW1FLEVBQ3RFOztBQU1EO0VBQ0ksd0NBQXVDLEVBQzFDOztBQUdEO0VBQ0ksd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFnQkQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBSXJCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNob3BwaW5nL3Nob3BwaW5nLWRldGFpbC9zaG9wcGluZy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbmlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmltYWdlLXNsaWRle1xuICAgIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50OyBcbn1cblxuLy8qKioqKiBjb2xvciBzZWxlY3RvciAqKioqKiovL1xudWwuY29sb3Itc2VsZWN0b3J7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDdweDtcbn1cbnVsLmNvbG9yLXNlbGVjdG9yIGxpIHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6M3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RkZDtcbiAgfVxuICBcbiAgXG4gIC5jb2xvci1zZWxlY3RvciBsaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICAvKiBsZWZ0OiAuMWVtOyAqL1xuICB9XG4gIC5jb2xvci1zZWxlY3RvciBsaS5zZWxlY3RlZCB7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjOyAqL1xuICAgIGJvcmRlcjogc29saWQgM3B4ICNlZWU7XG4gIH1cbiAgLmNvbG9yLXNlbGVjdG9yIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5cbi8vKioqKiogc2l6ZSBzZWxlY3RvciAqKioqKiovL1xuICB1bC5zaXplLXNlbGVjdG9ye1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAycHg7XG59XG4gIHVsLnNpemUtc2VsZWN0b3IgbGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4OyAgIFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDBweCA5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgLy8gd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICAvLyBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuXG4gIC5zaXplLXNlbGVjdG9yIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIC8qIGxlZnQ6IC4xZW07ICovXG4gIH1cbiAgLnNpemUtc2VsZWN0b3IgbGkuc2VsZWN0ZWQge1xuICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2NjYzsgKi9cbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZGRkO1xuICB9XG4gIC5zaXplLXNlbGVjdG9yIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xuaW9uLXRvb2xiYXIuZmlyc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG5cblxuaW9uLXRpdGxle1xuICAgIC8vLS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwO1xufVxuaW9uLWJ1dHRvbnMuc2hvd0NvbG9ye1xuICAgIGNvbG9yOiMzMzMgO1xufVxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW46IDEwcHggMTZweCA4cHggMCAhaW1wb3J0YW50O1xufVxuLnNob3ctdGl0bGV7XG5cbiAgICAvLyBhbmltYXRpb246IGZhZGVpbiAwLjRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogRmlyZWZveCAqL1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAvLyAtby1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBPcGVyYSAqL1xuICAgIC8vIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgIG9wYWNpdHk6IDE7XG5cbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICM2MDdEOEI7XG59XG4vLyAuc2hvdy1pbnZlcnR7XG4vLyAgICAgLS1jb2xvcjpcIiNGOTY5MEVcIjtcbi8vIH1cbi5oaWRlLXRpdGxlIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cblxuXG5pb24tY2FyZHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDlweCAgIWltcG9ydGFudDtcbiAgICAvLy13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDApICAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpICAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWdhbGxlcnktYm94e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbn1cbi5pbWctZ2FsbGVyeXtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOjEwNHB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmltZy1nYWxsZXJ5IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6MTA0cHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xufVxuXG5cblxuXG5cbi5ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIFxufVxuXG5cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5cblxuLmRldGFpbC1oZWFkZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyNhNjAwMDAwMCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cblxufVxuLmRldGFpbC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKGltZy8xLmpwZykgbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXRpdGxlIHtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyBjb2xvcjogI0ZGRkZGRjtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAycHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciBpb24taXRlbSB7XG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXByaWNlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypjb2xvcjogIzg2ZDQ0ZDsqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xufVxuXG5cblxuXG5cbi50cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuM3MgZWFzZS1pbjtcbn1cblxuXG4uYXZhdGFyLXRvcCB7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggOHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuXG5cbi8vIC50aXRsZSB7XG4vLyAgICAgY29sb3I6ICMxMTExMTE7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbi8vICAgICBmb250LXNpemU6IDI4cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4vLyB9XG4vLyAuc3VidGl0bGUge1xuLy8gY29sb3I6ICNhYWE7XG4vLyBmb250LXNpemU6IDIwcHg7XG4vLyBmb250LXdlaWdodDozMDA7XG4vLyB9XG5pb24tYmFkZ2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAwcHg7XG4gICAgLy8gcmlnaHQ6IDBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-shopping/shopping-detail/shopping-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-shopping/shopping-detail/shopping-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: ShoppingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingDetailPage", function() { return ShoppingDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
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






var ShoppingDetailPage = /** @class */ (function () {
    function ShoppingDetailPage(shoppingService, userService, activatedRoute, navController, toastController, router, ionicComponentService, modalController) {
        this.shoppingService = shoppingService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.toastController = toastController;
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
        this.itemArray = [];
        this.itemOptions = [];
        // ******** for Cart ***********//
        this.cart = [];
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //**** favorite  ****/
        this.favorite = false;
        this.heartType = "heart-empty";
        //Configuration for each Slider
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
        this.cart = this.shoppingService.getCart();
        //console.log("categoryId="+ this.placeId);
        //console.log(this.router.url,"Current URL");
    }
    ShoppingDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItemDetail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ******** get selected color ***********//
    ShoppingDetailPage.prototype.onSelectColor = function (color, colorName) {
        this.selectedColor = color;
        this.selectedColorName = colorName;
        console.log("color selected=" + JSON.stringify(this.selectedColor));
    };
    // ******** get selected size ***********//
    ShoppingDetailPage.prototype.onSelectSize = function (size) {
        this.selectedSize = size;
        console.log("size selected=" + JSON.stringify(this.selectedSize));
    };
    ShoppingDetailPage.prototype.getItemDetail = function () {
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
                        return [4 /*yield*/, this.shoppingService.getItemById(this.itemId)];
                    case 3:
                        //console.log("2.1___userId after receive="+this.userId);
                        // use async pipe //
                        _c.item = _d.sent();
                        this.itemSubscribe = this.item.subscribe(function (res) {
                            _this.itemArray = res;
                            _this.itemRelated = _this.shoppingService.getRelatedItem(_this.itemArray.shopping_categoryId, 5);
                            //********* shopping-item/favorite/userId  ***********//
                            _this.heartType = res.favorite.includes(_this.userId) ? 'heart' : 'heart-empty';
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingDetailPage.prototype.ngOnDestroy = function () {
        this.itemSubscribe.unsubscribe();
    };
    ShoppingDetailPage.prototype.toggleHeart = function () {
        console.log("calling toggleHeart");
        if (this.heartType == 'heart-empty') {
            console.log("Heart ON");
            this.shoppingService.addWishlist(this.itemId, this.itemArray.name, this.itemArray.rating, this.itemArray.image);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
            // })
        }
        else {
            console.log("Heart OFF");
            this.shoppingService.removeWishlist(this.itemId);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
            // })
        }
    };
    ShoppingDetailPage.prototype.addToCart = function () {
        console.log("call addToCart");
        var addItem = {
            //id :this.itemId, 
            itemId: this.itemId,
            name: this.itemArray.name,
            price: this.itemArray.price,
            description: this.itemArray.description,
            color: this.selectedColorName,
            size: this.selectedSize,
            image: this.itemArray.image
            //image: this.image
        };
        // console.log(this.addOnItem);
        // console.log("select SIZE="+ this.selectSize);
        this.shoppingService.addToCart(addItem);
        console.log("______addItem=" + JSON.stringify(addItem));
        this.router.navigateByUrl('/shopping-cart');
    };
    ShoppingDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 60;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 60;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    ShoppingDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-detail',
            template: __webpack_require__(/*! ./shopping-detail.page.html */ "./src/app/app-shopping/shopping-detail/shopping-detail.page.html"),
            styles: [__webpack_require__(/*! ./shopping-detail.page.scss */ "./src/app/app-shopping/shopping-detail/shopping-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ShoppingDetailPage);
    return ShoppingDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-detail-shopping-detail-module.js.map