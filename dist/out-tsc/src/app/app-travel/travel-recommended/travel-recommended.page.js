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
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
var TravelRecommendedPage = /** @class */ (function () {
    function TravelRecommendedPage(travelService, activatedRoute, navController, router, loadingController, modalController) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
    }
    TravelRecommendedPage.prototype.ngOnInit = function () {
        this.recommended = this.travelService.getRecommended();
    };
    TravelRecommendedPage = __decorate([
        Component({
            selector: 'app-travel-recommended',
            templateUrl: './travel-recommended.page.html',
            styleUrls: ['./travel-recommended.page.scss'],
        }),
        __metadata("design:paramtypes", [TravelService,
            ActivatedRoute,
            NavController,
            Router,
            LoadingController,
            ModalController])
    ], TravelRecommendedPage);
    return TravelRecommendedPage;
}());
export { TravelRecommendedPage };
//# sourceMappingURL=travel-recommended.page.js.map