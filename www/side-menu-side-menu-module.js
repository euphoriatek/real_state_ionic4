(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["side-menu-side-menu-module"],{

/***/ "./src/app/side-menu/side-menu.module.ts":
/*!***********************************************!*\
  !*** ./src/app/side-menu/side-menu.module.ts ***!
  \***********************************************/
/*! exports provided: SideMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPageModule", function() { return SideMenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _side_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-menu.page */ "./src/app/side-menu/side-menu.page.ts");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.guard */ "./src/app/services/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"],
        children: [
            //************ Auth  ***********//
            {
                path: 'login',
                loadChildren: '../app-auth/login/login.module#LoginPageModule'
            },
            {
                path: 'register',
                loadChildren: '../app-auth/register/register.module#RegisterPageModule'
            },
            {
                path: 'profile',
                loadChildren: '../app-auth/profile/profile.module#ProfilePageModule',
                canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
            },
            {
                path: 'forgot',
                loadChildren: '../app-auth/forgot/forgot.module#ForgotPageModule'
            },
            //************ APPS ***********/
            {
                path: 'travel',
                loadChildren: '../app-travel/travel-tabs/travel-tabs.module#TravelTabsPageModule'
            },
            {
                path: 'food',
                loadChildren: '../app-food/food-tabs/food-tabs.module#FoodTabsPageModule'
            },
            {
                path: 'shopping',
                loadChildren: '../app-shopping/shopping-tabs/shopping-tabs.module#ShoppingTabsPageModule'
            },
            {
                path: 'realestate',
                loadChildren: '../app-real/real-tabs/real-tabs.module#RealTabsPageModule'
            },
            {
                path: 'radio',
                loadChildren: '../app-radio/radio-home/radio-home.module#RadioHomePageModule'
            },
            //************ UI layout ***********/
            {
                path: 'chat',
                loadChildren: '../ui-layouts/chat/chat.module#ChatPageModule'
            },
            {
                path: 'gallery',
                loadChildren: '../ui-layouts/gallery/gallery.module#GalleryPageModule'
            },
            {
                path: 'feed',
                loadChildren: '../ui-layouts/feed/feed.module#FeedPageModule'
            },
            // {
            //   path: 'form',
            //   loadChildren: '../ui-layouts/form/form.module#FormPageModule'
            // },
            // {
            //   path: 'intro',
            //   loadChildren: '../ui-layouts/intro/intro.module#IntroPageModule'
            // },
            {
                path: 'masonry',
                loadChildren: '../ui-layouts/masonry/masonry.module#MasonryPageModule'
            },
            {
                path: 'profile1',
                loadChildren: '../ui-layouts/profile1/profile1.module#Profile1PageModule'
            },
            {
                path: 'profile2',
                loadChildren: '../ui-layouts/profile2/profile2.module#Profile2PageModule'
            },
            // {
            //   path: 'profile3',
            //   loadChildren: '../ui-layouts/gallery/gallery.module#GalleryPageModule'
            // },
            // {
            //   path: 'profile4',
            //   loadChildren: '../ui-layouts/gallery/gallery.module#GalleryPageModule'
            // },
            {
                path: 'timeline',
                loadChildren: '../ui-layouts/timeline/timeline.module#TimelinePageModule'
            },
            //************ UI components ***********/
            {
                path: 'animation',
                loadChildren: '../ui-components/animation/animation.module#AnimationPageModule'
            },
            {
                path: 'header-fading',
                loadChildren: '../ui-components/header-fading/header-fading.module#HeaderFadingPageModule'
            },
            {
                path: 'header-hide-title',
                loadChildren: '../ui-components/header-hide-title/header-hide-title.module#HeaderHideTitlePageModule'
            },
            {
                path: 'header-shrinking',
                loadChildren: '../ui-components/header-shrinking/header-shrinking.module#HeaderShrinkingPageModule'
            },
            {
                path: 'header-footer-shrinking',
                loadChildren: '../ui-components/header-footer-shrinking/header-footer-shrinking.module#HeaderFooterShrinkingPageModule'
            },
            {
                path: 'header-transparent',
                loadChildren: '../ui-components/header-transparent/header-transparent.module#HeaderTransparentPageModule'
            },
            {
                path: 'footer-shrinking',
                loadChildren: '../ui-components/footer-shrinking/footer-shrinking.module#FooterShrinkingPageModule'
            },
            {
                path: 'rating',
                loadChildren: '../ui-components/rating/rating.module#RatingPageModule'
            },
            {
                path: 'modal',
                loadChildren: '../ui-components/modal/modal.module#ModalPageModule'
            },
            {
                path: 'skeleton',
                loadChildren: '../ui-components/skeleton/skeleton.module#SkeletonPageModule'
            },
        ]
    }
];
var SideMenuPageModule = /** @class */ (function () {
    function SideMenuPageModule() {
    }
    SideMenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"]]
        })
    ], SideMenuPageModule);
    return SideMenuPageModule;
}());



/***/ }),

/***/ "./src/app/side-menu/side-menu.page.html":
/*!***********************************************!*\
  !*** ./src/app/side-menu/side-menu.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId=\"content\">\n \n    <!-- <ion-header>\n          <ion-item lines=\"none\">\n              <ion-thumbnail slot=\"start\">\n                <img src=\"https://pbs.twimg.com/profile_images/1148952014036054016/xxv7lLvp.jpg\">\n              </ion-thumbnail>\n              <ion-label>\n                <h2>ionic4 firebase fullapp</h2>\n                <p>Button on right</p>\n              </ion-label>\n          \n            </ion-item>\n    </ion-header> -->\n    <!--***********  Side menu for android ***********-->\n    <!-- showWhen=\"android\" -->\n    <!-- <div id=\"menu-ios\" >\n        <ion-header class=\"menu-header\">      \n            <img class=\"user-avatar round\" src =  \"https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg\"/>\n            <p class=\"name\">ionic4 firebase</p>\n            <p class=\"email\">with firebase backend</p>\n        </ion-header>\n    </div> -->\n\n    <div id=\"menu-ios\"  class=\"sideMenu-header\"  color=\"gray\">\n        <div class=\"menu-header\">\n  \n                <img class=\"user-avatar round\" src = \"https://i.ibb.co/w4N12SW/re-logo.png\"/>\n                <p class=\"name\">One Blue Nest</p>            \n          \n        </div>\n    </div>\n        <ion-content>\n      <!-- <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n \n        <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n \n      </ion-list> -->\n \n      <div *ngFor=\"let p of pages\" class=\"ion-padding-right\">\n \n        <!-- Standard Menu Item -->\n        <ion-menu-toggle *ngIf=\"p.url\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\n            <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <!-- Item with Children -->\n   \n        <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\" detail=\"false\">\n          <ion-icon slot=\"start\" name=\"ios-arrow-forward\" size=\"small\" *ngIf=\"!p.open\"></ion-icon>\n          <ion-icon slot=\"start\" name=\"ios-arrow-down\" size=\"small\" *ngIf=\"p.open\"></ion-icon>\n          <ion-label>{{ p.title }}</ion-label>\n        </ion-item>\n   \n        <!-- Children List for clicked Item -->\n        <ion-list *ngIf=\"p.open\">\n          <ion-menu-toggle>\n            <ion-item *ngFor=\"let sub of p.children\" class=\"sub-item\" [routerLink]=\"sub.url\" routerDirection=\"root\"\n              routerLinkActive=\"active\">\n              <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n              <ion-label>\n                {{ sub.title }}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n   \n      </div>\n\n\n      <!-- <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        Logout\n      </ion-item> -->\n    </ion-content>\n \n  </ion-menu>\n \n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n \n</ion-split-pane>"

/***/ }),

/***/ "./src/app/side-menu/side-menu.page.scss":
/*!***********************************************!*\
  !*** ./src/app/side-menu/side-menu.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n#menu-material .list-box {\n  margin-top: 190px; }\n\n#menu-material .menu-header {\n  padding: 5px 15px;\n  background-size: cover;\n  color: white; }\n\n#menu-material .menu-header .name {\n    font-weight: 400;\n    font-size: 18px;\n    margin-top: 10px;\n    margin-bottom: 3px; }\n\n#menu-material .menu-header .email {\n    margin-top: 0;\n    margin-bottom: 5px; }\n\n#menu-material .menu-header .user-avatar {\n    padding: .5em;\n    height: 12vh;\n    margin-top: 15px; }\n\n#menu-material h3,\n#menu-material .label {\n  color: #616161;\n  font-weight: 400; }\n\n#menu-material ion-icon {\n  color: #616161; }\n\nion-header {\n  background-color: #999; }\n\n#menu-ios .menu-header {\n  text-align: center;\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 5px 15px;\n  background-color: #fff;\n  color: #000; }\n\n#menu-ios .menu-header .name {\n    margin-top: 8px;\n    font-weight: 500;\n    font-size: 16px;\n    margin-bottom: 3px; }\n\n#menu-ios .menu-header .email {\n    margin-top: 0;\n    margin-bottom: 5px; }\n\n#menu-ios .menu-header .user-avatar {\n    padding: .5em;\n    height: 15vh;\n    margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC9zaWRlLW1lbnUvc2lkZS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdEQUErQyxFQUNsRDs7QUFFRDtFQUVJLGtCQUFnQixFQUNqQjs7QUFISDtFQUtJLGtCQUFpQjtFQUVqQix1QkFBc0I7RUFFdEIsYUFBWSxFQWlCYjs7QUExQkg7SUFXTSxpQkFBZ0I7SUFDaEIsZ0JBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBQ25COztBQWZMO0lBaUJNLGNBQWE7SUFDYixtQkFBa0IsRUFDbkI7O0FBbkJMO0lBcUJNLGNBQWE7SUFDYixhQUFZO0lBQ1osaUJBQWdCLEVBRWpCOztBQXpCTDs7RUE4QkksZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFoQ0g7RUFrQ0ksZUFBYyxFQUNmOztBQUdIO0VBSUUsdUJBQXNCLEVBRXZCOztBQUNHO0VBRUksbUJBQWtCO0VBQ2xCLGFBQVk7RUFHWixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLHVCQUFzQjtFQUN0QixZQUFVLEVBaUJYOztBQTFCSDtJQVdNLGdCQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGdCQUFjO0lBQ2QsbUJBQWtCLEVBQ25COztBQWZMO0lBaUJNLGNBQWE7SUFDYixtQkFBa0IsRUFDbkI7O0FBbkJMO0lBcUJNLGNBQWE7SUFDYixhQUFZO0lBQ1osaUJBQWdCLEVBRWpCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hY3RpdmUtaXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNtZW51LW1hdGVyaWFsIHtcbiAgLmxpc3QtYm94e1xuICAgIG1hcmdpbi10b3A6MTkwcHg7XG4gIH1cbiAgLm1lbnUtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL21kLWJnMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogY29sb3IoJGNvbG9ycywgYmx1ZTIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAubmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbiAgICAuZW1haWwge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICBoZWlnaHQ6IDEydmg7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICB9XG4gIH1cbiAgaDMsXG4gIC5sYWJlbCxcbiAge1xuICAgIGNvbG9yOiAjNjE2MTYxO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNjE2MTYxO1xuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9tZC1iZzEuanBnJykgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcblxufVxuICAgICNtZW51LWlvc3tcbiAgICAgIC5tZW51LWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAvLyB3aWR0aDogNTAlO1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi10b3A6OHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItYXZhdGFyIHtcbiAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICAgIGhlaWdodDogMTV2aDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/side-menu/side-menu.page.ts":
/*!*********************************************!*\
  !*** ./src/app/side-menu/side-menu.page.ts ***!
  \*********************************************/
/*! exports provided: SideMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPage", function() { return SideMenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuPage = /** @class */ (function () {
    function SideMenuPage(router) {
        var _this = this;
        this.router = router;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'Chat',
                url: '/side-menu/chat',
                icon: ''
            },
            {
                title: 'Login',
                url: '/side-menu/login',
                icon: ''
            },
            {
                title: 'Register',
                url: '/side-menu/register',
                icon: ''
            },
            {
                title: 'Home',
                url: '/side-menu/realestate/tabs/tab1',
                icon: ''
            },
            {
                title: 'Search',
                url: '/side-menu/realestate/tabs/tab2',
                icon: ''
            },
            {
                title: 'Clients',
                url: '/side-menu/realestate/tabs/tab3',
                icon: ''
            },
            {
                title: 'Agents',
                url: '/side-menu/realestate/tabs/tab4',
                icon: ''
            },
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    SideMenuPage.prototype.ngOnInit = function () {
    };
    SideMenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.page.html */ "./src/app/side-menu/side-menu.page.html"),
            styles: [__webpack_require__(/*! ./side-menu.page.scss */ "./src/app/side-menu/side-menu.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideMenuPage);
    return SideMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=side-menu-side-menu-module.js.map