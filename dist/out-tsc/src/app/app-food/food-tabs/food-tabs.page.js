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
import { FoodService } from '../../services/food.service';
var FoodTabsPage = /** @class */ (function () {
    function FoodTabsPage(foodService) {
        this.foodService = foodService;
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodTabsPage.prototype.ngOnInit = function () {
    };
    FoodTabsPage = __decorate([
        Component({
            selector: 'app-food-tabs',
            templateUrl: './food-tabs.page.html',
            styleUrls: ['./food-tabs.page.scss'],
        }),
        __metadata("design:paramtypes", [FoodService])
    ], FoodTabsPage);
    return FoodTabsPage;
}());
export { FoodTabsPage };
//# sourceMappingURL=food-tabs.page.js.map