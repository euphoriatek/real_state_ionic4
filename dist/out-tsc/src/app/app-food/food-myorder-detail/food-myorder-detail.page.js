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
import { IonicComponentService } from '../../services/ionic-component.service';
var FoodMyorderDetailPage = /** @class */ (function () {
    function FoodMyorderDetailPage(userService, foodService, activatedRoute, navController, router, ionicComponentService) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.orderItems = [];
        this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
        console.log("Get activatedRoute orderId=" + this.activatedRoute.snapshot.paramMap.get('orderId'));
        console.log(this.router.url, "Current URL");
        //this.cart = this.foodService.getCart();
    }
    FoodMyorderDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ionicComponentService.presentLoading();
        this.orderDetail = this.foodService.getOrderDetail(this.orderId);
        this.foodService.getOrderDetail(this.orderId).subscribe(function (res) {
            _this.orderItems = JSON.parse(res.orderItems);
            _this.orderStatus = res.status;
            console.log("orederDetail=" + _this.orderItems);
            _this.ionicComponentService.dismissLoading();
        });
    };
    FoodMyorderDetailPage = __decorate([
        Component({
            selector: 'app-food-myorder-detail',
            templateUrl: './food-myorder-detail.page.html',
            styleUrls: ['./food-myorder-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            FoodService,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService])
    ], FoodMyorderDetailPage);
    return FoodMyorderDetailPage;
}());
export { FoodMyorderDetailPage };
//# sourceMappingURL=food-myorder-detail.page.js.map