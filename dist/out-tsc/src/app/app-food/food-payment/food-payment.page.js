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
var FoodPaymentPage = /** @class */ (function () {
    function FoodPaymentPage(userService, foodService, activatedRoute, navController, router) {
        this.userService = userService;
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.paymentType = "cc";
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        console.log("this addressId=" + this.addressId);
    }
    FoodPaymentPage.prototype.ngOnInit = function () {
    };
    FoodPaymentPage.prototype.selectPayment = function (paymentType) {
        this.paymentType = paymentType;
    };
    FoodPaymentPage.prototype.gotoCheckout = function () {
        console.log("call gotoCheckout");
        console.log("____getaddressId=" + this.addressId);
        console.log("____getpaymentType = " + this.paymentType);
        //this.router.navigateByUrl('/food-summary/'+this.addressId);
        var link = ['/food-summary', this.addressId, this.paymentType];
        this.router.navigate(link);
    };
    FoodPaymentPage = __decorate([
        Component({
            selector: 'app-food-payment',
            templateUrl: './food-payment.page.html',
            styleUrls: ['./food-payment.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            FoodService,
            ActivatedRoute,
            NavController,
            Router])
    ], FoodPaymentPage);
    return FoodPaymentPage;
}());
export { FoodPaymentPage };
//# sourceMappingURL=food-payment.page.js.map