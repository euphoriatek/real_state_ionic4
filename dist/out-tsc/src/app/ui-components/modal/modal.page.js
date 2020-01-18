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
import { ModalController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
import { ModalDetailPage } from '../modal-detail/modal-detail.page';
var ModalPage = /** @class */ (function () {
    function ModalPage(ionicComponentService, modalController) {
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    ModalPage.prototype.toggleSideMenu = function () {
        this.ionicComponentService.sideMenu();
        //this.menuCtrl.toggle(); //Add this method to your button click function
    };
    //******** bottom ***********//
    ModalPage.prototype.openBottomModal = function () {
        this.modalController.create({
            component: ModalDetailPage,
            cssClass: 'from-bottom-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Top ***********//
    ModalPage.prototype.openTopModal = function () {
        this.modalController.create({
            component: ModalDetailPage,
            cssClass: 'from-top-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Middle ***********//
    ModalPage.prototype.openMiddleModal = function () {
        this.modalController.create({
            component: ModalDetailPage,
            cssClass: 'from-middle-modal',
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    //******** Full ***********//
    ModalPage.prototype.openFullModal = function (image) {
        this.modalController.create({
            component: ModalDetailPage,
            componentProps: {
            // data: this.placeArray,
            // index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    ModalPage = __decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.page.html',
            styleUrls: ['./modal.page.scss'],
        }),
        __metadata("design:paramtypes", [IonicComponentService,
            ModalController])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=modal.page.js.map