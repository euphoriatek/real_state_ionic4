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
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var ShoppingDetailPage = /** @class */ (function () {
    function ShoppingDetailPage(shoppingService, userService, activatedRoute, navController, toastController, router, ionicComponentService, modalController) {
        this.shoppingService = shoppingService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.toastController = toastController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        //****** image slide  *******/
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
        };
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        this.itemArray = [];
        this.itemOptions = [];
        // ******** for Cart ***********//
        this.cart = [];
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //**** favorite  ****/
        this.favorite = false;
        this.heartType = "heart-empty";
        //Configuration for each Slider
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
        this.cart = this.shoppingService.getCart();
        //console.log("categoryId="+ this.placeId);
        //console.log(this.router.url,"Current URL");
    }
    ShoppingDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItemDetail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ******** get selected color ***********//
    ShoppingDetailPage.prototype.onSelectColor = function (color, colorName) {
        this.selectedColor = color;
        this.selectedColorName = colorName;
        console.log("color selected=" + JSON.stringify(this.selectedColor));
    };
    // ******** get selected size ***********//
    ShoppingDetailPage.prototype.onSelectSize = function (size) {
        this.selectedSize = size;
        console.log("size selected=" + JSON.stringify(this.selectedSize));
    };
    ShoppingDetailPage.prototype.getItemDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        //console.log("1___userAuth before receive="+this.userAuth);
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //console.log("1___userAuth before receive="+this.userAuth);
                        _a.userAuth = _d.sent();
                        //console.log("2___userAuth after receive="+this.userAuth);
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        //console.log("2___userAuth after receive="+this.userAuth);
                        _b.userId = _d.sent();
                        //console.log("2.1___userId after receive="+this.userId);
                        // use async pipe //
                        _c = this;
                        return [4 /*yield*/, this.shoppingService.getItemById(this.itemId)];
                    case 3:
                        //console.log("2.1___userId after receive="+this.userId);
                        // use async pipe //
                        _c.item = _d.sent();
                        this.itemSubscribe = this.item.subscribe(function (res) {
                            _this.itemArray = res;
                            _this.itemRelated = _this.shoppingService.getRelatedItem(_this.itemArray.shopping_categoryId, 5);
                            //********* shopping-item/favorite/userId  ***********//
                            _this.heartType = res.favorite.includes(_this.userId) ? 'heart' : 'heart-empty';
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingDetailPage.prototype.ngOnDestroy = function () {
        this.itemSubscribe.unsubscribe();
    };
    ShoppingDetailPage.prototype.toggleHeart = function () {
        console.log("calling toggleHeart");
        if (this.heartType == 'heart-empty') {
            console.log("Heart ON");
            this.shoppingService.addWishlist(this.itemId, this.itemArray.name, this.itemArray.rating, this.itemArray.image);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
            // })
        }
        else {
            console.log("Heart OFF");
            this.shoppingService.removeWishlist(this.itemId);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
            // })
        }
    };
    ShoppingDetailPage.prototype.addToCart = function () {
        console.log("call addToCart");
        var addItem = {
            //id :this.itemId, 
            itemId: this.itemId,
            name: this.itemArray.name,
            price: this.itemArray.price,
            description: this.itemArray.description,
            color: this.selectedColorName,
            size: this.selectedSize,
            image: this.itemArray.image
            //image: this.image
        };
        // console.log(this.addOnItem);
        // console.log("select SIZE="+ this.selectSize);
        this.shoppingService.addToCart(addItem);
        console.log("______addItem=" + JSON.stringify(addItem));
        this.router.navigateByUrl('/shopping-cart');
    };
    ShoppingDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 60;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 60;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    ShoppingDetailPage = __decorate([
        Component({
            selector: 'app-shopping-detail',
            templateUrl: './shopping-detail.page.html',
            styleUrls: ['./shopping-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [ShoppingService,
            UserService,
            ActivatedRoute,
            NavController,
            ToastController,
            Router,
            IonicComponentService,
            ModalController])
    ], ShoppingDetailPage);
    return ShoppingDetailPage;
}());
export { ShoppingDetailPage };
//# sourceMappingURL=shopping-detail.page.js.map