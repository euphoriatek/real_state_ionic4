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
import { MenuController, ModalController, AlertController, NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
var Profile1Page = /** @class */ (function () {
    function Profile1Page(firestore, menuCtrl, activatedRoute, navController, modalController, router, alertController, ionicComponentService) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.modalController = modalController;
        this.router = router;
        this.alertController = alertController;
        this.ionicComponentService = ionicComponentService;
        this.following = false;
    }
    Profile1Page.prototype.ngOnInit = function () {
        this.profile = this.firestore.doc('layout_profile/GedsU7IYmZAdXupac9LD').valueChanges();
    };
    Profile1Page.prototype.follow = function () {
        this.following = !this.following;
        this.ionicComponentService.presentToast('Follow user clicked', 2000);
    };
    Profile1Page.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    Profile1Page = __decorate([
        Component({
            selector: 'app-profile1',
            templateUrl: './profile1.page.html',
            styleUrls: ['./profile1.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            MenuController,
            ActivatedRoute,
            NavController,
            ModalController,
            Router,
            AlertController,
            IonicComponentService])
    ], Profile1Page);
    return Profile1Page;
}());
export { Profile1Page };
//# sourceMappingURL=profile1.page.js.map