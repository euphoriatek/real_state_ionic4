(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-place-detail-travel-place-detail-module"],{

/***/ "./src/app/app-travel/travel-place-detail/travel-place-detail.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-detail/travel-place-detail.module.ts ***!
  \******************************************************************************/
/*! exports provided: TravelPlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlaceDetailPageModule", function() { return TravelPlaceDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_place_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-place-detail.page */ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _travel_place_detail_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlaceDetailPage"]
    }
];
var TravelPlaceDetailPageModule = /** @class */ (function () {
    function TravelPlaceDetailPageModule() {
    }
    TravelPlaceDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_place_detail_page__WEBPACK_IMPORTED_MODULE_5__["TravelPlaceDetailPage"]]
        })
    ], TravelPlaceDetailPageModule);
    return TravelPlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-detail/travel-place-detail.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n    <ion-toolbar class=\"first\" color=\"primary\" [class.show-background]=\"showToolbar\">\n        <ion-buttons color=\"orange\" slot=\"start\" [class.show-background]=\"showColor\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"home\"></ion-back-button>\n              </ion-buttons> -->\n        <ion-title  style=\"opacity: 0;\" [class.show-title]=\"showTitle\">Detail</ion-title>\n        <!-- <ion-title  class=\"main-header4 hide-title\" >Detail</ion-title> -->\n\n      <!-- A favorite button will not show if user not login. -->\n        <ion-buttons *ngIf=\"userAuth\" slot=\"end\">\n            <ion-button (click)=\"toggleHeart()\">\n                <ion-icon slot=\"icon-only\"  [name]=\"heartType\"></ion-icon>\n            </ion-button>\n        </ion-buttons> \n\n    </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content  no-padding fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n  \n\n<!--*********** Image header  ***********-->\n<div class=\"detail-header\" [ngStyle]=\"{'background-image': 'url(' + (place | async)?.image_header + ')'}\">\n        <!-- <h2 class=\"detail-name \"> {{(item | async)?.name}}</h2>\n        <div class=\"detail-price \">{{(item | async)?.phone}}</div> -->\n        <div class=\"detail-title\">\n\n        </div>\n</div>\n\n\n\n\n\n<!--*********** Title  ***********-->\n    <div class=\"travel_space1\">\n            <ion-item lines=\"none\">\n                <ion-label  text-wrap>\n                    <h1 class=\"travel_header1 detail-name\">{{(place | async)?.name}}</h1>\n                    <h2 class=\"travel_header3 detail-price \"> {{(place | async)?.short_description}}</h2>\n                </ion-label>\n                <div slot=\"end\">\n                    <ion-icon  style=\"font-size: 18px !important;\" color=\"orange\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < (place | async)?.rating  ? 'star' : 'star-outline'\"></ion-icon>\n                </div>\n            </ion-item>  \n    </div>\n\n\n\n    <div class=\"horizontal-scroll ion-margin-bottom\">\n        <ion-chip  *ngFor=\"let tag of (place | async)?.tag\" outline=true color=\"dark\"  >\n                <div><ion-label>{{tag.name}}</ion-label></div>\n        </ion-chip>\n    </div>\n    <!-- <ion-chip  *ngFor=\"let tag of tags \" color=\"orange-invert\" outline=true button routerLink=\"/side-menu/travel/tabs/tab1/travel-tag/{{tag.id}}\">\n        <ion-label>{{tag.name}}</ion-label>\n</ion-chip> -->\n<!--*********** Description ***********-->\n    <div class=\"travel_space4\">\n        <p>\n            {{(place | async)?.description}}\n        </p>\n    </div>\n    <!--*********** Image gallery ***********-->\n    <div class=\"horizontal-scroll ion-margin-top ion-margin-bottom\">\n            <div class=\"img-gallery margin\" *ngFor=\"let image of (place | async)?.images ,let i = index\" >\n                 <img [src]=\"image\"   (click)=\"openImageViewer(i)\"/>\n            </div>\n    </div>   \n\n\n<!--*********** Contact  ***********-->\n\n\n    <div  class=\"ion-margin-top ion-margin-bottom\">\n<!--*********** Add review item  ***********-->\n\n            <ion-item lines=\"none\" detail=\"true\" [routerLink]=\"['/travel-place-review', placeId]\">\n                <ion-icon slot=\"start\" name=\"ios-chatbubbles-outline\" item-left></ion-icon>\n                <ion-label>\n                        <h2 color=\"\">User Review</h2>\n                \n                </ion-label>\n            </ion-item>\n            <ion-item  lines=\"none\">\n                    <ion-icon name=\"ios-pin-outline\" slot=\"start\" color=\"\"></ion-icon>\n                    <ion-label>\n                        <ion-text color=\"dark\">\n                                <h2 class=\"main-header8\">Address</h2>\n                        </ion-text>\n                        \n                        <h2 color=\"\">{{(place | async)?.contact_info.address}}</h2>\n\n                    </ion-label>\n                </ion-item>\n\n                <ion-item  lines=\"none\">\n                    <ion-icon name=\"ios-mail-outline\" slot=\"start\" color=\"\"></ion-icon>\n                    <ion-label>\n                            <ion-text color=\"dark\">\n                                    <h2 class=\"main-header8\">Email</h2>\n                            </ion-text>\n                      \n                        <h2>{{(place | async)?.contact_info.email}}</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item  lines=\"none\">\n                        <ion-icon name=\"ios-call-outline\" slot=\"start\" color=\"\"></ion-icon>\n                        <ion-label>\n     \n                            <ion-text color=\"dark\">\n                                    <h2 class=\"main-header8\">Phone number</h2>\n                            </ion-text>\n                            <h2 color=\"medium\">{{(place | async)?.contact_info.phone}}</h2>\n                        </ion-label>\n                    </ion-item>\n                <ion-item  lines=\"none\" >\n                    <ion-icon name=\"ios-globe-outline\" slot=\"start\" color=\"\"></ion-icon>\n                    <ion-label>\n                            <ion-text color=\"dark\">\n                                    <h2 class=\"main-header8\">Website</h2>\n                            </ion-text>\n                       \n                        <h2>{{(place | async)?.contact_info.website}}</h2>\n                    </ion-label>\n                </ion-item>\n            \n                <!-- <ion-item  lines=\"none\" >\n                    <ion-icon name=\"ios-clock-outline\" slot=\"start\" color=\"\"></ion-icon>\n                    <ion-label>\n                            <h2 color=\"medium\">Opening time</h2>\n                        <p  [innerHTML]>{{(place | async)?.contact_info.opening}}</p>\n                    </ion-label>\n                </ion-item> -->\n                <ion-item lines=\"none\">\n                    <ion-icon slot=\"start\" name=\"ios-clock-outline\" item-left></ion-icon>\n                    <ion-label>\n                            <ion-text color=\"dark\">\n                                    <h2 class=\"main-header8\">Opening time</h2>\n                            </ion-text>\n                        <div class=\"opening-time\">\n                            <div [innerHTML]=\"(place | async)?.contact_info.opening\" ></div>\n                        </div>    \n                       \n                    </ion-label>\n                </ion-item>\n    </div>\n    <!--*********** Map  ***********-->\n\n\n              <!--*********** Replace your google map API key  ***********-->     \n    <div  *ngIf=\"(place | async) as categoryId\" (click)=\"openMap(categoryId.travel_categoryId)\" ></div>\n        <img tappable class=\"team\"  src=\"https://maps.googleapis.com/maps/api/staticmap?center={{(place | async)?.lat}},{{(place | async)?.lng}}&zoom=15&scale=2&size=300x200&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0088f2%7Clabel:%7C{{(place | async)?.lat}},{{(place | async)?.lng}}&key=YOUR_API_KEY\"  />\n    \n              <!-- <img src=\"https://maps.googleapis.com/maps/api/staticmap?center={{(item | async)?.lat}},{{(item | async)?.lng}}&zoom=15&scale=2&size=300x150&maptype=roadmap&format=png&visual_refresh=true&markers=color:0xff0000%7Clabel:%7C{{(item | async)?.lat}},{{(item | async)?.lng}}&key=AIzaSyCk9dyMmpKiqGrNmC89n8Voy_Xd7OveiMo\"/> -->\n      \n              <!-- <img src=\"https://maps.googleapis.com/maps/api/staticmap?center={{(item | async)?.lat}},{{(item | async)?.lng}}&zoom=15&scale=2&size=300x150&maptype=roadmap&format=png&visual_refresh=true&markers=color:0xff0000%7Clabel:%7C{{(item | async)?.lat}},{{(item | async)?.lng}}&key=YOUR_API_KEY\"/> -->\n    \n       \n<!--*********** Image gallery ***********-->\n\n<!-- <div class=\"ion-margin-top\">\n        <ion-item lines=\"none\" class=\"\">\n                <h1 class=\"travel_header2\">Image gallery</h1>\n        </ion-item>\n</div> -->\n<!-- <ion-grid>\n        <ion-row wrap color=\"medium\">\n          <ion-col size=\"3\"  *ngFor=\"let image of (place | async)?.images ,let i = index\" >\n         \n                <div >\n                    <img [src]=\"image\"   (click)=\"openImageViewer(i)\"/>\n                </div>\n          </ion-col>\n        </ion-row>\n  </ion-grid> -->\n\n\n\n    <!--*********** Review  ***********-->\n    <!-- Disable review due lagging performance in ios device -->\n    <!-- <div class=\"ion-margin-top\">\n            <ion-item lines=\"none\"   class=\"\">\n                    <h1 class=\"travel_header2\">Review</h1>\n                <ion-button fill=\"none\" slot=\"end\" color=\"secondary\" [routerLink]=\"['/travel-place-review', placeId]\" >View all</ion-button>\n            </ion-item>\n    </div>\n\n\n    <ion-card class=\"\" *ngFor=\"let review of reviews | async\" >\n        <ion-item  lines=\"none\" detail=\"false\">\n            <ion-avatar slot=\"start\" class=\"avatar-top\">\n                <ion-img [src]=\"review.userProfileImage\"></ion-img>\n            </ion-avatar>\n            <ion-label >\n                <h2>{{review.name}}</h2>\n                <p> {{review.createdTime.toDate() | date: 'dd/MM/yyyy'}}</p>\n            </ion-label>\n            <ion-label text-right slot=\"end\" >            \n                <ion-icon  style=\"margin-right:2px; font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < review.rating ?  'star' : 'star-outline'\"></ion-icon>\n            </ion-label>\n            \n        </ion-item>\n        \n        <ion-card-content>\n            {{review.comment}}\n        </ion-card-content>\n    </ion-card> -->\n\n    \n    <div class=\"ion-margin\">\n        <ion-button expand=\"block\"  color=\"orange\"  class=\"team\" (click)=\"openAddReview()\">Write a review</ion-button>\n    </div>\n    <div style=\"height: 85px;\"></div>\n\n\n\n\n    <!--*********** Related places ***********-->\n    <!-- <div class=\"ion-margin-top\">\n            <ion-item lines=\"none\"   class=\"ion-margin-bottom\">\n                    <h1 class=\"travel_header2\">Related places</h1>\n              \n            </ion-item>\n    </div>\n\n    <div class=\"horizontal-scroll ion-margin-bottom\" >\n           \n        <ion-card class=\"card-square \" *ngFor=\"let place of relatedPlacesArray \"  button  (click)=\"openPlaceDetail(place.id)\">\n            <div class=\"card-square-bg\" [ngStyle]=\"{'background-image': 'url(' + place.image_header+ ')'}\">\n                <h2 class=\"card-square-title\">  {{place.name}}</h2>                             \n            </div>\n        </ion-card>\n    </div> -->\n <!-- routerLink=\"/side-menu/travel/tabs/tab1/travel-place-detail/{{place.id}}\" -->\n    <!-- <ion-list>\n        <ion-item *ngFor=\"let place of places\" lines=\"none\" button [routerLink]=\"['/travel-place-detail', place.id]\"  >\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"place.image_header\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{place.name}}</h2>\n              <p>{{place.description}}</p>\n              <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < place.star_rating ? 'star' : 'star-outline'\">\n              </ion-icon>\n            </ion-label>\n        </ion-item>\n      </ion-list> -->\n\n\n\n</ion-content>\n\n    "

/***/ }),

/***/ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-detail/travel-place-detail.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  opacity: 0; }\n\n/* Transparent standard */\n\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.opening-time ul {\n  padding-left: 18px;\n  margin-top: 5px; }\n\nion-buttons.showColor {\n  color: #333; }\n\nion-avatar {\n  background-color: #ccc;\n  margin: 10px 16px 8px 0 !important; }\n\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1; }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #F9690E; }\n\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger); }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\nion-card {\n  border-radius: 9px  !important;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1) !important; }\n\n.img-gallery-box {\n  display: inline-block;\n  padding: 4px; }\n\n.img-gallery {\n  margin-left: 8px;\n  width: 104px;\n  height: 72px;\n  display: inline-block;\n  border-radius: 8px; }\n\n.img-gallery img {\n  border-radius: 5px;\n  width: 104px;\n  height: 72px; }\n\n.horizontal-scroll {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: auto; }\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none; }\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n\n.detail-header:before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  /* IE6-9 */ }\n\n.detail-header {\n  position: relative;\n  height: 300px !important;\n  background-size: cover; }\n\n.detail-header .detail-title {\n  position: absolute;\n  left: 2px;\n  bottom: 20px;\n  width: 100%; }\n\n.detail-header ion-item {\n  color: #FFFFFF;\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0); }\n\n.detail-header .detail-price {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #86d44d;*/\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.transition {\n  transition: background-size .3s ease-in; }\n\n.avatar-top {\n  margin: 16px 16px 8px 0;\n  margin-bottom: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9hcHAtdHJhdmVsL3RyYXZlbC1wbGFjZS1kZXRhaWwvdHJhdmVsLXBsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFVLEVBQ2I7O0FBQ0QsMEJBQTBCOztBQUMxQjtFQUNJLDBCQUFhO0VBQ2IseUNBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2xCOztBQVFEO0VBQ0ksWUFBVyxFQUNkOztBQUNEO0VBQ0ksdUJBQXNCO0VBQ3RCLG1DQUFrQyxFQUNyQzs7QUFDRDtFQU9JLDJDQUEwQztFQUMxQyx3Q0FBdUM7RUFDdkMsdUNBQXNDO0VBQ3RDLHNDQUFxQztFQUNwQyxXQUFVLEVBRWQ7O0FBQ0Qsd0NBQXdDOztBQUN4QztFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQUUsYUFBYTtFQUMxQywrQkFBOEI7RUFBRSx1QkFBdUI7RUFDdkQsMEJBQXlCO0VBQUUsV0FBVztFQUV0QyxvQkFBbUIsRUFDdEI7O0FBSUQ7RUFDSSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDRCQUEyQjtFQUFFLGFBQWE7RUFDMUMsK0JBQThCO0VBQUUsdUJBQXVCO0VBQ3ZELDBCQUF5QjtFQUFFLFdBQVc7RUFFdEMsb0NBQW1DLEVBQ3RDOztBQUNEO0VBQ0k7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBOztBQVdqQjtFQUE0Qix1QkFBdUI7RUFDL0M7SUFDSSxXQUFTLEVBQUE7RUFFYjtJQUNJLFdBQVMsRUFBQSxFQUFBOztBQUtqQjtFQUVJLCtCQUE4QjtFQUs5QixxREFBcUQsRUFDeEQ7O0FBRUQ7RUFDUSxzQkFBcUI7RUFDckIsYUFBWSxFQUNuQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixhQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsYUFBVztFQUNYLGFBQVksRUFDZjs7QUFNRDtFQUNJLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUVuQjs7QUFJRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVELGlDQUFpQzs7QUFDakM7RUFDSSxrQkFBZSxFQUNsQjs7QUFJRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLFNBQVE7RUFDUixPQUFNO0VBQ04sVUFBUztFQUN5RSxjQUFjO0VBQ1osNkJBQTZCO0VBQ2pILHVGQUFnRjtFQUFFLHNEQUFzRDtFQUN4SSx3SEFBdUg7RUFBRSxXQUFXLEVBRXZJOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUt4Qix1QkFBc0IsRUFDekI7O0FBRUQ7RUFLSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixZQUFXLEVBRWQ7O0FBQ0Q7RUFHSSxlQUFjO0VBQ2QsNEJBQWE7RUFDYiw4QkFBZSxFQUVsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZO0VBQ1osMEVBQW1FLEVBQ3RFOztBQU1EO0VBQ0ksd0NBQXVDLEVBQzFDOztBQUdEO0VBQ0ksd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC10cmF2ZWwvdHJhdmVsLXBsYWNlLWRldGFpbC90cmF2ZWwtcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICAvLy0tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMDtcbn1cbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5pb24tdG9vbGJhci5maXJzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ub3BlbmluZy10aW1lIHVse1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuLy8gLmhpZGUtdGl0bGV7XG4vLyAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuLy8gfVxuXG5cbmlvbi1idXR0b25zLnNob3dDb2xvcntcbiAgICBjb2xvcjojMzMzIDtcbn1cbmlvbi1hdmF0YXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBtYXJnaW46IDEwcHggMTZweCA4cHggMCAhaW1wb3J0YW50O1xufVxuLnNob3ctdGl0bGV7XG5cbiAgICAvLyBhbmltYXRpb246IGZhZGVpbiAwLjRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogRmlyZWZveCAqL1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAvLyAtby1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBPcGVyYSAqL1xuICAgIC8vIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgIG9wYWNpdHk6IDE7XG5cbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSAqL1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICNGOTY5MEU7XG59XG4vLyAuc2hvdy1pbnZlcnR7XG4vLyAgICAgLS1jb2xvcjpcIiNGOTY5MEVcIjtcbi8vIH1cbi5oaWRlLXRpdGxlIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cblxuXG5pb24tY2FyZHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDlweCAgIWltcG9ydGFudDtcbiAgICAvLy13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDApICAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpICAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWdhbGxlcnktYm94e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbn1cbi5pbWctZ2FsbGVyeXtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOjEwNHB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmltZy1nYWxsZXJ5IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6MTA0cHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xufVxuXG5cblxuXG5cbi5ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIFxufVxuXG5cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5cblxuLmRldGFpbC1oZWFkZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyNhNjAwMDAwMCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cblxufVxuLmRldGFpbC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKGltZy8xLmpwZykgbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXRpdGxlIHtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyBjb2xvcjogI0ZGRkZGRjtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAycHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciBpb24taXRlbSB7XG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIC8vIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXByaWNlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypjb2xvcjogIzg2ZDQ0ZDsqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xufVxuXG5cblxuXG5cbi50cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuM3MgZWFzZS1pbjtcbn1cblxuXG4uYXZhdGFyLXRvcCB7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggOHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuXG5cbi8vIC50aXRsZSB7XG4vLyAgICAgY29sb3I6ICMxMTExMTE7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbi8vICAgICBmb250LXNpemU6IDI4cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4vLyB9XG4vLyAuc3VidGl0bGUge1xuLy8gY29sb3I6ICNhYWE7XG4vLyBmb250LXNpemU6IDIwcHg7XG4vLyBmb250LXdlaWdodDozMDA7XG4vLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-travel/travel-place-detail/travel-place-detail.page.ts ***!
  \****************************************************************************/
/*! exports provided: TravelPlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlaceDetailPage", function() { return TravelPlaceDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_image_zoom_travel_image_zoom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-image-zoom/travel-image-zoom.page */ "./src/app/app-travel/travel-image-zoom/travel-image-zoom.page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
/* harmony import */ var _travel_place_review_add_travel_place_review_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../travel-place-review-add/travel-place-review-add.page */ "./src/app/app-travel/travel-place-review-add/travel-place-review-add.page.ts");
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






// import travel-place-review-add  for page modal

var TravelPlaceDetailPage = /** @class */ (function () {
    function TravelPlaceDetailPage(
    // private fireAuth:AngularFireAuth,
    travelService, userService, activatedRoute, navController, router, modalController) {
        this.travelService = travelService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        this.placeArray = [];
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //**** favorite  ****/
        this.favorite = false;
        //favArray: any=[];
        this.heartType = "heart-empty";
        this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
    }
    TravelPlaceDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlaceDetail()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPlaceReview()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceDetailPage.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe()
    };
    TravelPlaceDetailPage.prototype.getPlaceDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        //console.log("___userAuth before receive="+this.userAuth);
                        //this.userAuth = await this.userService.getAuthState();
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //console.log("___userAuth before receive="+this.userAuth);
                        //this.userAuth = await this.userService.getAuthState();
                        _a.userAuth = _d.sent();
                        //console.log("___userAuth after received="+this.userAuth);
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        //console.log("___userAuth after received="+this.userAuth);
                        _b.userId = _d.sent();
                        //console.log("___userId after receive="+this.userId);
                        _c = this;
                        return [4 /*yield*/, this.travelService.getPlacesDetail(this.placeId)];
                    case 3:
                        //console.log("___userId after receive="+this.userId);
                        _c.place = _d.sent();
                        // get image gallery from place doc.
                        return [4 /*yield*/, this.place.subscribe(function (res) {
                                // console.log("4 getPlacesDetail subsribe = "+res);
                                // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res)); 
                                _this.placeArray = res;
                                // console.log("6 this.placeArray/images="+this.placeArray.images);
                                // console.log("7 this.placeArray.travel_categoryId="+this.placeArray.travel_categoryId);
                                //this.getRelatedPlace(this.placeArray.travel_categoryId);
                                //********* travel-place/favorite/userId  ***********//
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
    TravelPlaceDetailPage.prototype.toggleHeart = function () {
        if (this.heartType == 'heart-empty') {
            console.log("Heart ON");
            this.travelService.addFavorite(this.placeId, this.placeArray.name, this.placeArray.rating, this.placeArray.image_header);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
            // })
        }
        else {
            console.log("Heart OFF");
            this.travelService.removeFavorite(this.placeId);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
            // })
        }
    };
    TravelPlaceDetailPage.prototype.getPlaceReview = function () {
        console.log("###########call  getReview()");
        this.reviews = this.travelService.getReviews(this.placeId, 5);
    };
    TravelPlaceDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 160;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 160;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    TravelPlaceDetailPage.prototype.openImageViewer = function (image) {
        this.modalController.create({
            component: _travel_image_zoom_travel_image_zoom_page__WEBPACK_IMPORTED_MODULE_3__["TravelImageZoomPage"],
            componentProps: {
                data: this.placeArray,
                index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    TravelPlaceDetailPage.prototype.openAddReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _travel_place_review_add_travel_place_review_add_page__WEBPACK_IMPORTED_MODULE_6__["TravelPlaceReviewAddPage"],
                            cssClass: 'from-middle-modal',
                            componentProps: {
                                placeId: this.placeId
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
    TravelPlaceDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-place-detail',
            template: __webpack_require__(/*! ./travel-place-detail.page.html */ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.html"),
            styles: [__webpack_require__(/*! ./travel-place-detail.page.scss */ "./src/app/app-travel/travel-place-detail/travel-place-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_5__["TravelService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TravelPlaceDetailPage);
    return TravelPlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-place-detail-travel-place-detail-module.js.map