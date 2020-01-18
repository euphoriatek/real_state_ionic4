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
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var ShoppingAddressEditPage = /** @class */ (function () {
    function ShoppingAddressEditPage(userService, shoppingService, activatedRoute, navController, router, ionicComponentService, formBuilder) {
        this.userService = userService;
        this.shoppingService = shoppingService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.formBuilder = formBuilder;
        this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
        this.addressForm = this.formBuilder.group({
            label: ['', Validators.required],
            fullname: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(6)]],
            address: ['', Validators.required]
        });
    }
    ShoppingAddressEditPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.getPlace();
        this.userService.getAddressById(this.addressId).subscribe(function (res) {
            console.log("----->actionArray=" + res);
            console.log("Get user profile response=" + res);
            console.log("----->userDetailSub=" + res.firstname);
            console.log("----->userDetailSub=" + res.lastname);
            _this.addressForm.get('label').setValue(res.label);
            _this.addressForm.get('fullname').setValue(res.fullname);
            _this.addressForm.get('phone').setValue(res.phone);
            _this.addressForm.get('address').setValue(res.address);
            //this.addressArray = res;
        });
    };
    // openMap(categoryId) {
    //   console.log("openMap");
    //   this.modalController.create({
    //     component: TravelMapPage,
    //     componentProps: {
    //       categoryId: categoryId
    //     }
    //   }).then(modal => {
    //     modal.present();
    //   });
    // }
    ShoppingAddressEditPage.prototype.editAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log("userProfileId="+this.userService.getUserId());
                        console.log("_____call addAddress");
                        if (!!this.addressForm.valid) return [3 /*break*/, 1];
                        console.log(this.addressForm.value);
                        console.log("____addressForm invalid ");
                        return [3 /*break*/, 3];
                    case 1:
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.userService.editAddress(this.addressId, this.addressForm.value.label, this.addressForm.value.fullname, this.addressForm.value.phone, this.addressForm.value.address)
                                // await console.log("2");
                                .then(function () {
                                // call loading 
                                // close loading
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/shopping-address');
                                //loadingPopup.dismiss();
                                //this.nav.setRoot('AfterLoginPage');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentToast(errorMessage, 4000);
                                //loadingPopup.dismiss();
                                //this.presentAlert(errorMessage);      
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // openTest(categoryId){
    //   console.log("openTest"+ categoryId);
    // }
    ShoppingAddressEditPage.prototype.delAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.userService.deleteAddress(this.addressId)
                                .then(function () {
                                // call loading 
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/shopping-address');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentToast(errorMessage, 4000);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingAddressEditPage = __decorate([
        Component({
            selector: 'app-shopping-address-edit',
            templateUrl: './shopping-address-edit.page.html',
            styleUrls: ['./shopping-address-edit.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            ShoppingService,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService,
            FormBuilder])
    ], ShoppingAddressEditPage);
    return ShoppingAddressEditPage;
}());
export { ShoppingAddressEditPage };
//# sourceMappingURL=shopping-address-edit.page.js.map