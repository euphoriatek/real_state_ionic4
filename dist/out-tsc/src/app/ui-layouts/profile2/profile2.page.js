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
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
var Profile2Page = /** @class */ (function () {
    function Profile2Page(firestore, activatedRoute, navController, router, ionicComponentService) {
        this.firestore = firestore;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.following = false;
    }
    Profile2Page.prototype.ngOnInit = function () {
        //****** open loading ********/
        this.ionicComponentService.presentLoading();
        console.log("start");
        this.profile2 = this.firestore.doc('layout_profile/saweU7IYmZAdXupac9LD').valueChanges();
        this.ionicComponentService.dismissLoading();
    };
    Profile2Page.prototype.follow = function () {
        this.following = !this.following;
        this.ionicComponentService.presentToast('Follow user clicked', 2000);
    };
    Profile2Page.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    Profile2Page = __decorate([
        Component({
            selector: 'app-profile2',
            templateUrl: './profile2.page.html',
            styleUrls: ['./profile2.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService])
    ], Profile2Page);
    return Profile2Page;
}());
export { Profile2Page };
//# sourceMappingURL=profile2.page.js.map