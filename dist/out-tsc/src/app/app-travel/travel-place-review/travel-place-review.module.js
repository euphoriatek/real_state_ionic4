var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TravelPlaceReviewPage } from './travel-place-review.page';
import { IonicRatingModule } from "ionic4-rating/dist";
var routes = [
    {
        path: '',
        component: TravelPlaceReviewPage
    }
];
var TravelPlaceReviewPageModule = /** @class */ (function () {
    function TravelPlaceReviewPageModule() {
    }
    TravelPlaceReviewPageModule = __decorate([
        NgModule({
            imports: [
                IonicRatingModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TravelPlaceReviewPage]
        })
    ], TravelPlaceReviewPageModule);
    return TravelPlaceReviewPageModule;
}());
export { TravelPlaceReviewPageModule };
//# sourceMappingURL=travel-place-review.module.js.map