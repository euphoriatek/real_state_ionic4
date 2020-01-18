var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
var UserGuard = /** @class */ (function () {
    function UserGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afAuth.user.subscribe(function (user) {
                if (user) {
                    console.log("##### User Guard: auth = true");
                    resolve(true);
                }
                else {
                    console.log("##### User Guard: auth = false");
                    console.log('User is not logged in');
                    //this.router.navigate(['/login']);
                    _this.router.navigate(['/side-menu/login'], {
                        queryParams: {
                            redirectUrl: state.url
                        }
                    });
                    // route with redirect http://gnomeontherun.com/2017/03/02/guards-and-login-redirects-in-angular/
                    //this.router.navigate(['/product-list'], { queryParams: { redirect: 3 }});
                    resolve(false);
                }
            });
        });
    };
    UserGuard = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [AngularFireAuth, Router])
    ], UserGuard);
    return UserGuard;
}());
export { UserGuard };
//# sourceMappingURL=user.guard.js.map