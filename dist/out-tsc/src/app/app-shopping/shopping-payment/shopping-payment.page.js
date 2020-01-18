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
import { ShoppingService } from '../../services/shopping.service';
var ShoppingPaymentPage = /** @class */ (function () {
    function ShoppingPaymentPage(userService, shoppingService, activatedRoute, navController, router) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.paymentType = "cc";
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        console.log("this addressId=" + this.addressId);
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    }
    ShoppingPaymentPage.prototype.ngOnInit = function () {
    };
    ShoppingPaymentPage.prototype.selectPayment = function (paymentType) {
        this.paymentType = paymentType;
    };
    ShoppingPaymentPage.prototype.gotoCheckout = function () {
        //this.router.navigateByUrl('/shopping-summary/'+this.addressId);
        console.log("call gotoCheckout");
        console.log("____getaddressId=" + this.addressId);
        console.log("____getpaymentType = " + this.paymentType);
        var link = ['/shopping-summary', this.addressId, this.paymentType];
        this.router.navigate(link);
    };
    ShoppingPaymentPage = __decorate([
        Component({
            selector: 'app-shopping-payment',
            templateUrl: './shopping-payment.page.html',
            styleUrls: ['./shopping-payment.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            ShoppingService,
            ActivatedRoute,
            NavController,
            Router])
    ], ShoppingPaymentPage);
    return ShoppingPaymentPage;
}());
export { ShoppingPaymentPage };
//# sourceMappingURL=shopping-payment.page.js.map