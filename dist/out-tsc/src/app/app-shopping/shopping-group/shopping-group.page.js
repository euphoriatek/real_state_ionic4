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
var ShoppingGroupPage = /** @class */ (function () {
    function ShoppingGroupPage(shoppingService, activatedRoute, navController, router) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        // ******** for Cart ***********//
        this.cart = [];
        this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
        this.cart = this.shoppingService.getCart();
    }
    ShoppingGroupPage.prototype.ngOnInit = function () {
        this.items = this.shoppingService.getItemByGroupId(this.groupId);
        this.group = this.shoppingService.getGroupDetail(this.groupId);
    };
    ShoppingGroupPage.prototype.openDetail = function (url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    };
    ShoppingGroupPage = __decorate([
        Component({
            selector: 'app-shopping-group',
            templateUrl: './shopping-group.page.html',
            styleUrls: ['./shopping-group.page.scss'],
        }),
        __metadata("design:paramtypes", [ShoppingService,
            ActivatedRoute,
            NavController,
            Router])
    ], ShoppingGroupPage);
    return ShoppingGroupPage;
}());
export { ShoppingGroupPage };
//# sourceMappingURL=shopping-group.page.js.map