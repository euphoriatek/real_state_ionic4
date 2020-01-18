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
import { MenuController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, menuCtrl, userService, ionicComponentService, 
    //****** form validation ********//
    formBuilder) {
        //this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
        /// console.log("CatId="+this.catId);
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.ionicComponentService = ionicComponentService;
        this.formBuilder = formBuilder;
        var EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        // this.registerForm = fb.group({
        //let Email_Val =     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        // this.registerForm = fb.group({
        //       email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
        //       profileName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
        //       phone: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        //       password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        // });
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.registerForm = formBuilder.group({
            firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
            username: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    RegisterPage.prototype.submitFormTest = function () {
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.registerForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    /// old way ////
    RegisterPage.prototype.registerUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("call signopUser");
                        if (!!this.registerForm.valid) return [3 /*break*/, 1];
                        console.log(this.registerForm.value);
                        console.log("invalid form");
                        return [3 /*break*/, 3];
                    case 1:
                        this.ionicComponentService.presentLoading();
                        console.log(this.registerForm.value);
                        console.log("yes, ");
                        return [4 /*yield*/, this.userService.signupUser(this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.phone, this.registerForm.value.username, this.registerForm.value.password)
                                .then(function () {
                                _this.ionicComponentService.dismissLoading();
                                _this.router.navigateByUrl('/side-menu/realestate/tabs/tab1');
                                //loadingPopup.dismiss();
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
    RegisterPage = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            MenuController,
            UserService,
            IonicComponentService,
            FormBuilder])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map