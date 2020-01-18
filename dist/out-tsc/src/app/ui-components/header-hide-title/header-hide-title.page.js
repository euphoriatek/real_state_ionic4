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
import { IonicComponentService } from '../../services/ionic-component.service';
var HeaderHideTitlePage = /** @class */ (function () {
    function HeaderHideTitlePage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        this.showLiner = false;
        this.showTitle = false;
        this.transition = false;
    }
    HeaderHideTitlePage.prototype.ngOnInit = function () {
    };
    HeaderHideTitlePage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderHideTitlePage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showTitle = scrollTop >= 44;
            this.showLiner = scrollTop >= 44;
            console.log("showTitle=" + this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    HeaderHideTitlePage = __decorate([
        Component({
            selector: 'app-header-hide-title',
            templateUrl: './header-hide-title.page.html',
            styleUrls: ['./header-hide-title.page.scss'],
        }),
        __metadata("design:paramtypes", [IonicComponentService])
    ], HeaderHideTitlePage);
    return HeaderHideTitlePage;
}());
export { HeaderHideTitlePage };
//# sourceMappingURL=header-hide-title.page.js.map