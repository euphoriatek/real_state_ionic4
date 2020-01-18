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
var SkeletonPage = /** @class */ (function () {
    function SkeletonPage(ionicComponentService) {
        this.ionicComponentService = ionicComponentService;
    }
    SkeletonPage.prototype.ngOnInit = function () {
    };
    SkeletonPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    SkeletonPage = __decorate([
        Component({
            selector: 'app-skeleton',
            templateUrl: './skeleton.page.html',
            styleUrls: ['./skeleton.page.scss'],
        }),
        __metadata("design:paramtypes", [IonicComponentService])
    ], SkeletonPage);
    return SkeletonPage;
}());
export { SkeletonPage };
//# sourceMappingURL=skeleton.page.js.map