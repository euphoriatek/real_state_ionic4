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
import { FoodService } from '../../services/food.service';
var FoodItemPage = /** @class */ (function () {
    function FoodItemPage(foodService, activatedRoute, navController, router) {
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        //console.log(this.router.url,"Current URL");
        this.cart = this.foodService.getCart();
    }
    FoodItemPage.prototype.ngOnInit = function () {
        //this.getPlace();
        this.items = this.foodService.getItemByCatId(this.categoryId);
    };
    FoodItemPage = __decorate([
        Component({
            selector: 'app-food-item',
            templateUrl: './food-item.page.html',
            styleUrls: ['./food-item.page.scss'],
        }),
        __metadata("design:paramtypes", [FoodService,
            ActivatedRoute,
            NavController,
            Router])
    ], FoodItemPage);
    return FoodItemPage;
}());
export { FoodItemPage };
//# sourceMappingURL=food-item.page.js.map