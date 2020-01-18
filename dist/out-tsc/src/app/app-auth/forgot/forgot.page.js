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
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
import { UserService } from '../../services/user.service';
var ForgotPage = /** @class */ (function () {
    function ForgotPage(userService, navController, menuCtrl, router, ionicComponentService, formBuilder) {
        this.userService = userService;
        this.navController = navController;
        this.menuCtrl = menuCtrl;
        this.router = router;
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
        this.forgotForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
        });
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.ionicComponentService.sideMenu(); //Add this method to your button click function
    };
    ForgotPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.forgotForm.valid) {
            console.log("form is invalid = " + this.forgotForm.value);
        }
        else {
            this.ionicComponentService.presentLoading();
            this.userService.resetPassword(this.forgotForm.value.username)
                .then(function (user) {
                _this.ionicComponentService.dismissLoading();
                _this.ionicComponentService.presentAlert("We just sent you a reset link to your email");
                // this.nav.setRoot('LoginPage');
                _this.router.navigateByUrl('/side-menu/login');
            }, function (error) {
                var errorMessage = error.message;
                _this.ionicComponentService.dismissLoading();
                _this.ionicComponentService.presentAlert(errorMessage);
            });
        }
    };
    ForgotPage = __decorate([
        Component({
            selector: 'app-forgot',
            templateUrl: './forgot.page.html',
            styleUrls: ['./forgot.page.scss'],
        }),
        __metadata("design:paramtypes", [UserService,
            NavController,
            MenuController,
            Router,
            IonicComponentService,
            FormBuilder])
    ], ForgotPage);
    return ForgotPage;
}());
export { ForgotPage };
//# sourceMappingURL=forgot.page.js.map