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
import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
var FoodMyorderPage = /** @class */ (function () {
    function FoodMyorderPage(userService, foodService, activatedRoute, navController, router) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.viewType = "";
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
        this.cart = this.foodService.getCart();
    }
    FoodMyorderPage.prototype.ngOnInit = function () {
        //this.getPlace();
        this.myOrders = this.foodService.getMyOrders();
    };
    FoodMyorderPage = __decorate([
        Component({
            selector: 'app-food-myorder',
            templateUrl: './food-myorder.page.html',
            styleUrls: ['./food-myorder.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            FoodService,
            ActivatedRoute,
            NavController,
            Router])
    ], FoodMyorderPage);
    return FoodMyorderPage;
}());
export { FoodMyorderPage };
//# sourceMappingURL=food-myorder.page.js.map