var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        Component({
            selector: 'app-side-menu',
            templateUrl: './side-menu.page.html',
            styleUrls: ['./side-menu.page.scss'],
        }),
        __metadata("design:paramtypes", [Router])
    ], SideMenuPage);
    return SideMenuPage;
}());
export { SideMenuPage };
//# sourceMappingURL=side-menu.page.js.map