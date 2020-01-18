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
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
//*********** Import  gallery viewer modal **************//
import { GalleryViewerModalPage } from '../gallery-viewer-modal/gallery-viewer-modal.page';
var GalleryPage = /** @class */ (function () {
    function GalleryPage(firestore, menuCtrl, loadingController, modalController, loadingPopup) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.loadingPopup = loadingPopup;
        this.imagesArray = [];
        //*********** View mode  **************/
        this.galleryView = "two";
    }
    GalleryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.firestore.collection('layout_gallery').valueChanges();
        this.images.subscribe(function (res) {
            _this.imagesArray = res;
            console.log("imageArray=" + JSON.stringify(_this.imagesArray));
            setTimeout(function () {
                // loadingPopup.dismiss();
            }, 1000);
        });
    };
    GalleryPage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    GalleryPage.prototype.openImageViewer = function (image) {
        console.log("openImageViewer");
        // let modal = this.modalCtrl.create(CartPage, { data: this.cart });
        this.modalController.create({
            component: GalleryViewerModalPage,
            componentProps: {
                data: this.imagesArray,
                index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    GalleryPage = __decorate([
        Component({
            selector: 'app-gallery',
            templateUrl: './gallery.page.html',
            styleUrls: ['./gallery.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            MenuController,
            LoadingController,
            ModalController,
            LoadingController])
    ], GalleryPage);
    return GalleryPage;
}());
export { GalleryPage };
//# sourceMappingURL=gallery.page.js.map