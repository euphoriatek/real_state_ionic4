var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';
var ChatPage = /** @class */ (function () {
    function ChatPage(menuCtrl, formBuilder, router) {
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
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
            message: new FormControl('')
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
    ChatPage.prototype.back = function () {
        alert("ok" + /side-menu/realestate / tabs / tab2);
        debugger;
        this.router.navigateByUrl['/side-menu/realestate/tabs/tab2'];
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.page.html',
            styleUrls: ['./chat.page.scss'],
        }),
        __metadata("design:paramtypes", [MenuController,
            FormBuilder,
            Router])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.page.js.map