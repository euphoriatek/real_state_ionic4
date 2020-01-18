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
import { MenuController, NavController } from '@ionic/angular';
import { ShoppingService } from '../../services/shopping.service';
var ShoppingCategoryPage = /** @class */ (function () {
    function ShoppingCategoryPage(shoppingService, menu, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.cart = this.shoppingService.getCart();
    }
    ShoppingCategoryPage.prototype.ngOnInit = function () {
        this.categories = this.shoppingService.getCategories();
    };
    ShoppingCategoryPage = __decorate([
        Component({
            selector: 'app-shopping-category',
            templateUrl: './shopping-category.page.html',
            styleUrls: ['./shopping-category.page.scss'],
        }),
        __metadata("design:paramtypes", [ShoppingService,
            MenuController,
            ActivatedRoute,
            NavController,
            Router])
    ], ShoppingCategoryPage);
    return ShoppingCategoryPage;
}());
export { ShoppingCategoryPage };
//# sourceMappingURL=shopping-category.page.js.map