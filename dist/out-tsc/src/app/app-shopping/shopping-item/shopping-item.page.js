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
import { ShoppingService } from '../../services/shopping.service';
var ShoppingItemPage = /** @class */ (function () {
    function ShoppingItemPage(shoppingService, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        this.cart = this.shoppingService.getCart();
    }
    ShoppingItemPage.prototype.ngOnInit = function () {
        this.items = this.shoppingService.getItemByCatId(this.categoryId);
    };
    ShoppingItemPage.prototype.openTest = function (categoryId) {
        console.log("openTest" + categoryId);
    };
    ShoppingItemPage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    ShoppingItemPage = __decorate([
        Component({
            selector: 'app-shopping-item',
            templateUrl: './shopping-item.page.html',
            styleUrls: ['./shopping-item.page.scss'],
        }),
        __metadata("design:paramtypes", [ShoppingService,
            ActivatedRoute,
            NavController,
            Router])
    ], ShoppingItemPage);
    return ShoppingItemPage;
}());
export { ShoppingItemPage };
//# sourceMappingURL=shopping-item.page.js.map