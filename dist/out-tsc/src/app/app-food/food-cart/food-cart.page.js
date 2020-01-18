var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
var FoodCartPage = /** @class */ (function () {
    function FoodCartPage(foodService, userService, activatedRoute, navController, router, alertController) {
        this.foodService = foodService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.selectedItems = [];
        this.total = 0;
        this.totalValue = 0;
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
    }
    FoodCartPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    FoodCartPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //this.userAuth =  await this.userService.getAuthState();
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //this.userAuth =  await this.userService.getAuthState();
                        _a.userAuth = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        _b.userId = _c.sent();
                        this.getCartProduct();
                        console.log("___this.userAuth=" + this.userAuth);
                        console.log("___this.userId=" + this.userId);
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodCartPage.prototype.removeCartProduct = function (index, slidingItem) {
        //this.productService.removeLocalCartProduct(product);
        slidingItem.close();
        console.log("removeCart");
        this.foodService.removeItemCart(index);
        // Recalling
        this.getCartProduct();
    };
    FoodCartPage.prototype.getCartProduct = function () {
        // this.cartProducts = this.productService.getLocalCartProducts();
        var items = this.foodService.getCart();
        console.log("____food-cart : items=" + items);
        var selected = {};
        this.totalValue = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            this.totalValue += obj.price;
        }
        this.selectedItems = items;
        console.log("selected Addon=" + this.selectedItems);
        this.total = this.totalValue;
    };
    FoodCartPage.prototype.getCartSameProduct = function () {
        // this.cartProducts = this.productService.getLocalCartProducts();
        var items = this.foodService.getCart();
        //console.log("____________food-cart : items="+items);
        var selected = {};
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var obj = items_2[_i];
            if (selected[obj.itemId]) {
                selected[obj.itemId].count++;
            }
            else {
                selected[obj.itemId] = __assign(__assign({}, obj), { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (key) { return selected[key]; });
        console.log("selected Addon=" + this.selectedItems);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    FoodCartPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'No permission',
                            message: 'You have to signin first!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Login',
                                    handler: function () {
                                        console.log('Go to login page');
                                        _this.router.navigateByUrl('/login?redirectUrl=food-address');
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
    // checkout
    FoodCartPage.prototype.checkout = function () {
        //navigate to address page
        // check if user already logged in?
        if (!this.userAuth) {
            // error: not login 
            // show popup
            console.log("checkout()___userAuth = false");
            this.presentAlertConfirm();
        }
        else {
            // userAuth = true 
            console.log("checkout()___userAuth = true");
            this.router.navigateByUrl('/food-address');
        }
        //
    };
    FoodCartPage = __decorate([
        Component({
            selector: 'app-food-cart',
            templateUrl: './food-cart.page.html',
            styleUrls: ['./food-cart.page.scss'],
        }),
        __metadata("design:paramtypes", [FoodService,
            UserService,
            ActivatedRoute,
            NavController,
            Router,
            AlertController])
    ], FoodCartPage);
    return FoodCartPage;
}());
export { FoodCartPage };
//# sourceMappingURL=food-cart.page.js.map