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
import { ModalController, NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
import { TravelService } from '../../services/travel.service';
import { UserService } from '../../services/user.service';
var TravelPlaceReviewAddPage = /** @class */ (function () {
    function TravelPlaceReviewAddPage(travelService, userService, navController, router, ionicComponentService, modalController, formBuilder, activatedRoute) {
        this.travelService = travelService;
        this.userService = userService;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.userProfileImage = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
        this.rating = 1;
        this.userAuth = false;
        this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.reviewForm = formBuilder.group({
            name: ['', Validators.compose([Validators.minLength(0), Validators.required])],
            comment: ['', Validators.compose([Validators.minLength(0), Validators.required])],
        });
    }
    TravelPlaceReviewAddPage.prototype.ngOnInit = function () {
        // check auth
        this.checkAuth();
    };
    TravelPlaceReviewAddPage.prototype.checkAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        user = _d.sent();
                        if (!user) return [3 /*break*/, 4];
                        // do something
                        //this.userId = await user.uid;
                        _b = (_a = console).log;
                        _c = "********** userId=";
                        return [4 /*yield*/, user.uid];
                    case 2:
                        // do something
                        //this.userId = await user.uid;
                        _b.apply(_a, [_c + (_d.sent())]);
                        return [4 /*yield*/, console.log("*********** YES USER already logged in")];
                    case 3:
                        _d.sent();
                        this.userAuth = true;
                        return [3 /*break*/, 5];
                    case 4:
                        this.userAuth = false;
                        console.log("*************NO");
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceReviewAddPage.prototype.goSignin = function () {
        this.close();
        this.router.navigateByUrl('/side-menu/login?redirectUrl=side-menu/travel/tabs/tab1');
        // call close
        // redirect
    };
    TravelPlaceReviewAddPage.prototype.submitFormTest = function () {
        if (!this.reviewForm.valid) {
            console.log(this.reviewForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.reviewForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    TravelPlaceReviewAddPage.prototype.addReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("_____call addReview");
                        if (!!this.reviewForm.valid) return [3 /*break*/, 1];
                        console.log(this.reviewForm.value);
                        console.log("____reviewForm invalid ");
                        return [3 /*break*/, 3];
                    case 1:
                        this.ionicComponentService.presentLoading();
                        console.log(this.reviewForm.value);
                        console.log("___yes, ");
                        console.log("_____placeId=" + this.placeId);
                        console.log("1");
                        //****** add review *******//
                        return [4 /*yield*/, this.travelService.addReview(this.placeId, this.userProfileImage, this.reviewForm.value.name, this.rating, this.reviewForm.value.comment)
                                // await console.log("2");
                                .then(function () {
                                _this.ionicComponentService.dismissLoading();
                                _this.close();
                                //this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
                                //loadingPopup.dismiss();
                                //this.nav.setRoot('AfterLoginPage');
                            }, function (error) {
                                var errorMessage = error.message;
                                console.log("ERROR:" + errorMessage);
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentToast(errorMessage, 3000);
                                _this.close();
                            })];
                    case 2:
                        //****** add review *******//
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceReviewAddPage.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceReviewAddPage = __decorate([
        Component({
            selector: 'app-travel-place-review-add',
            templateUrl: './travel-place-review-add.page.html',
            styleUrls: ['./travel-place-review-add.page.scss'],
        }),
        __metadata("design:paramtypes", [TravelService,
            UserService,
            NavController,
            Router,
            IonicComponentService,
            ModalController,
            FormBuilder,
            ActivatedRoute])
    ], TravelPlaceReviewAddPage);
    return TravelPlaceReviewAddPage;
}());
export { TravelPlaceReviewAddPage };
//# sourceMappingURL=travel-place-review-add.page.js.map