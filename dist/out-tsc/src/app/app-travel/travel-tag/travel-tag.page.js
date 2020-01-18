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
import { NavController } from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
var TravelTagPage = /** @class */ (function () {
    function TravelTagPage(travelService, activatedRoute, navController, router) {
        this.travelService = travelService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.tagId = this.activatedRoute.snapshot.paramMap.get('tagId');
        console.log("+++++++++ tagID=" + this.tagId);
    }
    TravelTagPage.prototype.ngOnInit = function () {
        this.getPlace();
    };
    TravelTagPage.prototype.getPlace = function () {
        // use async pipe //
        console.log("Tag page call  getPlacesByTag() id = " + this.tagId);
        this.tag = this.travelService.getPlacesByTag(this.tagId);
    };
    TravelTagPage = __decorate([
        Component({
            selector: 'app-travel-tag',
            templateUrl: './travel-tag.page.html',
            styleUrls: ['./travel-tag.page.scss'],
        }),
        __metadata("design:paramtypes", [TravelService,
            ActivatedRoute,
            NavController,
            Router])
    ], TravelTagPage);
    return TravelTagPage;
}());
export { TravelTagPage };
//# sourceMappingURL=travel-tag.page.js.map