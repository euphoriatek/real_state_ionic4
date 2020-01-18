var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
var GalleryViewerModalPage = /** @class */ (function () {
    function GalleryViewerModalPage(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.imgArray = [];
        this.imgArray = this.navParams.get('data');
        console.log("_____get index=" + this.navParams.get('index'));
        console.log("get data=" + this.imgArray);
        console.log("_________this.img  = " + JSON.stringify(this.imgArray));
        this.sliderOpts = {
            initialSlide: this.navParams.get('index'),
            //effect:	'cube',
            spaceBetween: 10,
            zoom: {
                maxRatio: 5
            }
        };
    }
    GalleryViewerModalPage.prototype.ngOnInit = function () {
    };
    GalleryViewerModalPage.prototype.zoom = function (zoomIn) {
        console.log("call zoom function");
        var zoom = this.slider.nativeElement.swiper.zoom;
        if (zoomIn) {
            zoom.in();
        }
        else {
            zoom.out();
        }
    };
    GalleryViewerModalPage.prototype.close = function () {
        this.modalController.dismiss();
    };
    __decorate([
        ViewChild('slider', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], GalleryViewerModalPage.prototype, "slider", void 0);
    GalleryViewerModalPage = __decorate([
        Component({
            selector: 'app-gallery-viewer-modal',
            templateUrl: './gallery-viewer-modal.page.html',
            styleUrls: ['./gallery-viewer-modal.page.scss'],
        }),
        __metadata("design:paramtypes", [NavParams,
            ModalController])
    ], GalleryViewerModalPage);
    return GalleryViewerModalPage;
}());
export { GalleryViewerModalPage };
//# sourceMappingURL=gallery-viewer-modal.page.js.map