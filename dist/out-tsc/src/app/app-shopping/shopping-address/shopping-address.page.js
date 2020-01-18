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
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var ShoppingAddressPage = /** @class */ (function () {
    function ShoppingAddressPage(userService, shoppingService, activatedRoute, navController, router, ionicComponentService) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.checkedAddress = false;
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        console.log("Get activatedRoute categoryId=" + this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.router.url, "Current URL");
    }
    ShoppingAddressPage.prototype.ngOnInit = function () {
        this.ionicComponentService.presentTimeoutLoading(2000, true);
    };
    ShoppingAddressPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkedAddress = false;
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        _a.userAuth = _b.sent();
                        this.addresses = this.userService.getAddressByUserId();
                        return [2 /*return*/];
                }
            });
        });
    };
    //   getSelectedTab(): void {
    //     this.activeTabName = this.tabs.getSelected();
    //     console.log("current tab name="+this.activeTabName)
    // }
    ShoppingAddressPage.prototype.getAddress = function () {
        console.log("______getAddress()");
        this.addresses = this.userService.getAddressByUserId();
        // this.foodService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
        //   console.log(actionArray);
        //   this.places = actionArray
        // });
    };
    ShoppingAddressPage.prototype.selectAddress = function (index, addressId) {
        console.log("select address =" + addressId);
        this.addressId = addressId;
    };
    ShoppingAddressPage.prototype.openTest = function (categoryId) {
        console.log("openTest" + categoryId);
    };
    ShoppingAddressPage.prototype.editAddress = function (addressId) {
        console.log("open editAddress");
        this.router.navigateByUrl('/shopping-address-edit/' + addressId);
    };
    ShoppingAddressPage.prototype.gotoPayment = function () {
        if (this.checkedAddress) {
            this.router.navigateByUrl('/shopping-payment/' + this.addressId);
        }
        else {
            this.ionicComponentService.presentAlert("Please choose address");
        }
    };
    ShoppingAddressPage = __decorate([
        Component({
            selector: 'app-shopping-address',
            templateUrl: './shopping-address.page.html',
            styleUrls: ['./shopping-address.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            ShoppingService,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService])
    ], ShoppingAddressPage);
    return ShoppingAddressPage;
}());
export { ShoppingAddressPage };
//# sourceMappingURL=shopping-address.page.js.map