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
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
import { UserService } from '../../services/user.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, activatedRoute, menuCtrl, userService, ionicComponentService, 
    //****** form validation ********//
    formBuilder) {
        //this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
        /// console.log("CatId="+this.catId);
        this.router = router;
        this.activatedRoute = activatedRoute;
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
        // this.redirectPath = this.activatedRoute.snapshot.paramMap.get('redirectPath');
        // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
        //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
        // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
        // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
        this.loginForm = formBuilder.group({
            username: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
        // const secondParam: string = this.route.snapshot.queryParamMap.get('secondParamKey');
        console.log("redirectUrl=" + this.redirectUrl);
        this.ionicComponentService.presentToast("Demo account: <br>username = bee@gmail.com  <br>password= 123456", 5000);
    };
    LoginPage.prototype.toggleSideMenu = function () {
        console.log("call toggleSideMenu ");
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    LoginPage.prototype.submitFormTest = function () {
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            console.log(this.loginForm.value);
            console.log("yes, ");
            //this.userService.loginUser()
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
            //this.presentAlert("invalid form");
            console.log("invalid form");
        }
        else {
            this.ionicComponentService.presentLoading();
            console.log(this.loginForm.value);
            console.log("yes, ");
            this.userService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
                .then(function (authData) {
                console.log("Auth pass");
                _this.ionicComponentService.dismissLoading();
                if (_this.redirectUrl) {
                    _this.router.navigateByUrl('/' + _this.redirectUrl);
                }
                else {
                    _this.router.navigateByUrl('/side-menu/realestate/tabs/tab1');
                }
            }, function (error) {
                //var errorMessage: string = error.message;
                _this.ionicComponentService.dismissLoading();
                console.log("Error:" + error.message);
                _this.ionicComponentService.presentAlert(error.message);
            });
        }
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            MenuController,
            UserService,
            IonicComponentService,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map