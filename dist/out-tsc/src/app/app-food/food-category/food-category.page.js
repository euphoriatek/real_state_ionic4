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
var FoodCategoryPage = /** @class */ (function () {
    function FoodCategoryPage(foodService, activatedRoute, navController, router) {
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.viewType = "list";
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.foodService.getCart();
    }
    FoodCategoryPage.prototype.ngOnInit = function () {
        // this.parentPath= this.router.url;
        // console.log("....Current route path"+this.parentPath);
        this.categories = this.foodService.getCategories();
    };
    FoodCategoryPage.prototype.changeView = function (viewType) {
        this.viewType = viewType;
    };
    FoodCategoryPage = __decorate([
        Component({
            selector: 'app-food-category',
            templateUrl: './food-category.page.html',
            styleUrls: ['./food-category.page.scss'],
        }),
        __metadata("design:paramtypes", [FoodService,
            ActivatedRoute,
            NavController,
            Router])
    ], FoodCategoryPage);
    return FoodCategoryPage;
}());
export { FoodCategoryPage };
//# sourceMappingURL=food-category.page.js.map