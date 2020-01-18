(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-chat-chat-module"],{

/***/ "./src/app/ui-layouts/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.page */ "./src/app/ui-layouts/chat/chat.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/ui-layouts/chat/chat.page.html":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/chat/chat.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"realgreen\">\n        <ion-buttons slot=\"start\">\n           <ion-back-button ></ion-back-button> \n           <!--  <ion-button (click)=\"toggleSideMenu()\">\n                <ion-icon color=\"white\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n            </ion-button> -->\n        </ion-buttons>\n      <ion-title slot=\"start\">Chat</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #content>\n\n    <div *ngFor=\"let message of messages\" class=\"message-wrapper\" on-hold=\"onMessageHold($event, $index, message)\">\n\n      <div *ngIf=\"user._id !== message.userId\">\n          <!-- <ion-avatar item-start class=\"profile-pic left\">\n              <img [src]=\"toUser.pic\" onerror=\"onProfilePicError(this)\" />\n            </ion-avatar> -->\n        <img  class=\"profile-pic left\" [src]=\"toUser.pic\" onerror=\"onProfilePicError(this)\"/>\n        <!--  wave-->\n        <div class=\"chat-bubble left pop-in\">\n  \n          <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\n          </div>\n  \n          <div class=\"message-detail\">\n            <span (click)=\"viewProfile(message)\" class=\"bold\">{{toUser.username}}</span>,\n            <!-- <span>{{message.date | moment:\"ago\" | lowercase}}</span> -->\n            <span>{{message.date  | date: 'shortTime' | lowercase}}</span>\n           \n          </div>\n  \n        </div>\n      </div>\n  \n      <div *ngIf=\"user._id === message.userId\">\n  \n        <img (click)=\"viewProfile(message)\" class=\"profile-pic right\" [src]=\"user.pic\" onerror=\"onProfilePicError(this)\" />\n  \n        <div class=\"chat-bubble right pop-in\">\n  \n          <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\n          </div>\n  \n          <div class=\"message-detail\">\n            <span (click)=\"viewProfile(message)\" class=\"bold\">{{user.username}}</span>,\n            <!-- <span>{{message.date | moment:\"ago\" | lowercase}}</span> -->\n            <span>{{message.date  | date: 'shortTime' | lowercase}}</span>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"cf\"></div>\n  \n    </div>\n  </ion-content>\n\n  <ion-footer color=\"lightgrey\">\n    <form [formGroup]=\"messageForm\" (submit)=\"send(chatBox)\" novalidate>\n      <ion-item>\n          <!-- <ion-textarea formControlName=\"message\" [(ngModel)]=\"chatBox\" placeholder=\"Send {{toUser.username}} a message...\"  ></ion-textarea> -->\n        <ion-input formControlName=\"message\" [(ngModel)]=\"chatBox\" placeholder=\"Send {{toUser.username}} a message...\"></ion-input>\n        <ion-button fill=\"blank\" (click)=\"send(chatBox)\" slot=\"end\">\n          <ion-icon class=\"footer-btn\" name=\"send\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </form>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/ui-layouts/chat/chat.page.scss":
/*!************************************************!*\
  !*** ./src/app/ui-layouts/chat/chat.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* allows the bar-footer to be elastic /*\n    /* optionally set a max-height */\n/* maxlength on the textarea will prevent /*\n    /* it from getting too large also */\n.bar-footer {\n  overflow: visible !important; }\n.bar-footer textarea {\n  resize: none;\n  height: 25px; }\n/* fixes an ios bug bear */\nbutton.ion-android-send {\n  padding-top: 2px; }\n.footer-btn {\n  font-size: x-large; }\nimg.profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px; }\nimg.profile-pic.left {\n  left: 10px; }\nimg.profile-pic.right {\n  right: 10px; }\n.ion-email {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle; }\n.message {\n  font-size: 14px; }\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px; }\n.bar.item-input-inset .item-input-wrapper input {\n  width: 100% !important; }\n.message-wrapper {\n  position: relative; }\n.message-wrapper:last-child {\n  margin-bottom: 10px; }\n.chat-bubble {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%; }\n.chat-bubble:before {\n  content: \"\\00a0\";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px; }\n.chat-bubble.left {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px; }\n.chat-bubble.left:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg); }\n.chat-bubble.right {\n  background-color: #26B266;\n  color: #fff;\n  float: right;\n  margin-right: 55px; }\n.chat-bubble.right:before {\n  background-color: #26B266;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg); }\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold; }\n.user-messages-top-icon {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px; }\n.msg-header-username {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px; }\ninput, textarea, .item-input, .item-input-wrapper {\n  background-color: #f4f4f4 !important; }\n.bold {\n  font-weight: bold; }\n.cf {\n  clear: both !important; }\na.autolinker {\n  color: #3b88c3;\n  text-decoration: none; }\n/* loading */\n.loader-center {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center; }\n.loader .ion-loading-c {\n  font-size: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy9yZWFsIGVzdGF0ZSBhcHAvc3JjL2FwcC91aS1sYXlvdXRzL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7cUNBQ2lDO0FBQ2pDO3dDQUNvQztBQUNwQztFQUNJLDZCQUE0QixFQUM3QjtBQUVEO0VBQ0UsYUFBWTtFQUNaLGFBQVksRUFDYjtBQUVELDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ00sbUJBQWtCLEVBQ3ZCO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiO0FBRUQ7RUFDRSxXQUFVLEVBQ1g7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsdUJBQXNCLEVBQ3ZCO0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjtBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2hCO0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGVBQWMsRUFDZjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxhQUFZO0VBQ1osV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsV0FBVTtFQUNWLDRDQUEyQyxFQUM1QztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsWUFBVztFQUNYLDhDQUE2QyxFQUM5QztBQUVEO0VBQ0UsWUFBVztFQUNYLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0UsZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVSxFQUNYO0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixVQUFTLEVBQ1Y7QUFFRDtFQUNFLHFDQUFvQyxFQUNyQztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7QUFFRDtFQUNFLGVBQWM7RUFDZCxzQkFBcUIsRUFDdEI7QUFFRCxhQUFhO0FBQ2I7RUFDRSxhQUFZO0VBS1osY0FBYTtFQU9iLG9CQUFtQjtFQUduQixrQkFBaUI7RUFLakIsd0JBQXVCO0VBR3ZCLHVCQUFzQjtFQUt0QixvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdWktbGF5b3V0cy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICAvKiBhbGxvd3MgdGhlIGJhci1mb290ZXIgdG8gYmUgZWxhc3RpYyAvKlxuICAgIC8qIG9wdGlvbmFsbHkgc2V0IGEgbWF4LWhlaWdodCAqL1xuICAgIC8qIG1heGxlbmd0aCBvbiB0aGUgdGV4dGFyZWEgd2lsbCBwcmV2ZW50IC8qXG4gICAgLyogaXQgZnJvbSBnZXR0aW5nIHRvbyBsYXJnZSBhbHNvICovXG4gICAgLmJhci1mb290ZXIge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYmFyLWZvb3RlciB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBmaXhlcyBhbiBpb3MgYnVnIGJlYXIgKi9cbiAgICAgIGJ1dHRvbi5pb24tYW5kcm9pZC1zZW5kIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZvb3Rlci1idG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbWcucHJvZmlsZS1waWMge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbWcucHJvZmlsZS1waWMubGVmdCB7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGltZy5wcm9maWxlLXBpYy5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW9uLWVtYWlsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubWVzc2FnZS1kZXRhaWwge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5iYXIuaXRlbS1pbnB1dC1pbnNldCAuaXRlbS1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1lc3NhZ2Utd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1lc3NhZ2Utd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNoYXQtYnViYmxlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2hhdC1idWJibGU6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXDAwYTBcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC03LjVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNoYXQtYnViYmxlLmxlZnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jaGF0LWJ1YmJsZS5sZWZ0OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHNrZXcoNWRlZyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jaGF0LWJ1YmJsZS5yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNkIyNjY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNoYXQtYnViYmxlLnJpZ2h0OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNkIyNjY7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jaGF0LWJ1YmJsZS5yaWdodCBhLmF1dG9saW5rZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC51c2VyLW1lc3NhZ2VzLXRvcC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubXNnLWhlYWRlci11c2VybmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlucHV0LCB0ZXh0YXJlYSwgLml0ZW0taW5wdXQsIC5pdGVtLWlucHV0LXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jZiB7XG4gICAgICAgIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGEuYXV0b2xpbmtlciB7XG4gICAgICAgIGNvbG9yOiAjM2I4OGMzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIGxvYWRpbmcgKi9cbiAgICAgIC5sb2FkZXItY2VudGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgICAgICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAubG9hZGVyIC5pb24tbG9hZGluZy1jIHtcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgfVxuICAgIl19 */"

/***/ }),

/***/ "./src/app/ui-layouts/chat/chat.page.ts":
/*!**********************************************!*\
  !*** ./src/app/ui-layouts/chat/chat.page.ts ***!
  \**********************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var ChatPage = /** @class */ (function () {
    function ChatPage(menuCtrl, formBuilder) {
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'https://randomuser.me/api/portraits/men/47.jpg',
            username: 'Tommy',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'https://randomuser.me/api/portraits/men/40.jpg',
            username: 'Josh',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'OH CRAP!!'
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'what??'
            },
            {
                _id: 3,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Pretty long message with lots of content'
            },
            {
                _id: 4,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Pretty long message with even way more of lots and lots of content'
            },
            {
                _id: 5,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'what??'
            },
            {
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'yes!'
            }
        ];
        this.messageForm = formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.chatBox = '';
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            setTimeout(function () {
                var replyData = {
                    toId: _this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: _this.toUser._id,
                    username: _this.toUser.username,
                    pic: _this.toUser.pic,
                    text: 'Just a quick reply'
                };
                _this.messages.push(replyData);
                _this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    ChatPage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/ui-layouts/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/ui-layouts/chat/chat.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=ui-layouts-chat-chat-module.js.map