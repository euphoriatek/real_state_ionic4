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
var AnimationPage = /** @class */ (function () {
    function AnimationPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
        this.viewMode = "set1";
    }
    AnimationPage.prototype.ngOnInit = function () {
    };
    AnimationPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    AnimationPage = __decorate([
        Component({
            selector: 'app-animation',
            templateUrl: './animation.page.html',
            styleUrls: ['./animation.page.scss'],
        }),
        __metadata("design:paramtypes", [IonicComponentService])
    ], AnimationPage);
    return AnimationPage;
}());
export { AnimationPage };
//# sourceMappingURL=animation.page.js.map