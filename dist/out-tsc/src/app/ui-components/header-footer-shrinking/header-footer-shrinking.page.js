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
var HeaderFooterShrinkingPage = /** @class */ (function () {
    function HeaderFooterShrinkingPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        // footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: 60 };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 40 };
    }
    HeaderFooterShrinkingPage.prototype.ngOnInit = function () {
    };
    HeaderFooterShrinkingPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    HeaderFooterShrinkingPage = __decorate([
        Component({
            selector: 'app-header-footer-shrinking',
            templateUrl: './header-footer-shrinking.page.html',
            styleUrls: ['./header-footer-shrinking.page.scss'],
        }),
        __metadata("design:paramtypes", [IonicComponentService])
    ], HeaderFooterShrinkingPage);
    return HeaderFooterShrinkingPage;
}());
export { HeaderFooterShrinkingPage };
//# sourceMappingURL=header-footer-shrinking.page.js.map