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
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
//import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../../services/user.service';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, menuCtrl, navController, router, ionicComponentService, formBuilder) {
        this.userService = userService;
        this.menuCtrl = menuCtrl;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.formBuilder = formBuilder;
        var EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.updateForm = formBuilder.group({
            firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            phone: ['', Validators.compose([Validators.minLength(3), Validators.required])]
        });
    }
    ProfilePage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    ProfilePage.prototype.ngOnInit = function () {
        // this.userService.getUserProfile().subscribe(res => {
        //   console.log("----->userDetailSub="+res);
        //   this.userDetailSub = res;
        //   this.updateForm.get('firstname').setValue('some value');
        // });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userDetail = this.userService.getUserProfile();
        this.userService.getUserProfile().subscribe(function (res) {
            console.log("Get user profile response=" + res);
            console.log("----->userDetailSub=" + res.firstname);
            console.log("----->userDetailSub=" + res.lastname);
            _this.updateForm.get('firstname').setValue(res.firstname);
            _this.updateForm.get('lastname').setValue(res.lastname);
            _this.updateForm.get('email').setValue(res.email);
            _this.updateForm.get('phone').setValue(res.phone);
        });
        // this.userDetail = this.userService.getUserProfile();
        // this.userService.getUserProfile().subscribe(res => {
        //   console.log("Get user profile response="+res);
        // });
    };
    ProfilePage.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.updateForm.valid) return [3 /*break*/, 1];
                        console.log("no valid");
                        console.log(this.updateForm.value);
                        return [3 /*break*/, 3];
                    case 1:
                        console.log(this.updateForm.value);
                        // console.log("itemId="+this.itemId);
                        this.ionicComponentService.presentLoading();
                        console.log("YES");
                        return [4 /*yield*/, this.userService.updateUserProfile(this.updateForm.value.firstname, this.updateForm.value.lastname, this.updateForm.value.phone, this.updateForm.value.email)
                                .then(function () {
                                _this.ionicComponentService.presentToast("Profile updated", 2000);
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/side-menu/realestate/tabs/tab1');
                                //this.nav.setRoot('AfterLoginPage');
                            }, function (error) {
                                var errorMessage = error.message;
                                _this.ionicComponentService.dismissLoading();
                                _this.ionicComponentService.presentAlert(errorMessage);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.signoutUser()
                            .then(function () {
                            console.log("LOGOUT");
                            _this.ionicComponentService.presentTimeoutLoading(1000, true);
                            _this.ionicComponentService.presentToast("Logout", 4000);
                            _this.router.navigateByUrl('/side-menu/login');
                            //this.nav.setRoot('AfterLoginPage');
                        }, function (error) {
                            var errorMessage = error.message;
                            _this.ionicComponentService.presentToast(errorMessage, 4000);
                            console.log("ERROR:" + errorMessage);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            MenuController,
            NavController,
            Router,
            IonicComponentService,
            FormBuilder])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map