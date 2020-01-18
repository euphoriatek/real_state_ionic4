var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, } from '@ionic/angular';
import { ShoppingService } from '../../services/shopping.service';
var ShoppingWishlistPage = /** @class */ (function () {
    function ShoppingWishlistPage(shoppingService, 
    // public userService: UserService,
    activatedRoute, navController, router, alertController) {
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.viewType = "grid";
        //public wishlists: any[];
        // ******** for Cart ***********//
        this.cart = [];
    }
    ShoppingWishlistPage.prototype.ngOnInit = function () {
        //await this.checkAuth();
        console.log(">>>>>>>>> call getFavorite");
        this.wishlists = this.shoppingService.getWishlist();
        this.cart = this.shoppingService.getCart();
    };
    // async checkAuth()  {
    //   const user = await this.userService.isLoggedIn();
    //   if (user) {
    //     // do something
    //     //this.userId = await user.uid;
    //     console.log("********** FAVORITE ="+await user.uid);
    //     console.log("*********** YES USER already logged in")
    //     this.userAuth = true;
    //     this.userId = user.uid;
    //   } else {
    //     this.userAuth = false;
    //     console.log("*************NO");
    //   }
    // }
    ShoppingWishlistPage.prototype.getwishlists = function () {
        console.log(">>>>>>>>> call getFavorite");
        this.wishlists = this.shoppingService.getWishlist();
        // this.travelService.getFavPlace().subscribe(res => {
        //   console.log("**************Get Favorite response="+res);
        //   this.wishlists = res
        // });
    };
    ShoppingWishlistPage.prototype.deleteFav = function (id) {
        // this.travelService.deleteFavorite(id);
    };
    ShoppingWishlistPage.prototype.deleteFavDialog = function (placeId, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Sliding not working after updating an element in array  https://github.com/ionic-team/ionic/issues/15486
                        // Closing slidingItem
                        slidingItem.close();
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Do you want to <strong>delete</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Delete',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            //this.shoppingService.removeFavorite(placeId);
                                            // removeFavorite(
                                            //   placeId: string, 
                                            //   userId: string
                                            // )
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingWishlistPage = __decorate([
        Component({
            selector: 'app-shopping-wishlist',
            templateUrl: './shopping-wishlist.page.html',
            styleUrls: ['./shopping-wishlist.page.scss'],
        }),
        __metadata("design:paramtypes", [ShoppingService,
            ActivatedRoute,
            NavController,
            Router,
            AlertController])
    ], ShoppingWishlistPage);
    return ShoppingWishlistPage;
}());
export { ShoppingWishlistPage };
//# sourceMappingURL=shopping-wishlist.page.js.map