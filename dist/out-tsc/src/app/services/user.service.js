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
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
var UserService = /** @class */ (function () {
    function UserService(firestore, fireAuth) {
        var _this = this;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        this.userAuth = false;
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("USERSERVICE.....  auth = true");
                _this.userId = user.uid;
                _this.userAuth = true;
                console.log("userId=" + _this.userId);
            }
            else {
                console.log("USERSERVICE.....  auth = false");
                // Empty the value when user signs out
                _this.userId = "";
                _this.userAuth = false;
                console.log("userId=" + _this.userId);
            }
        });
    }
    //**************************************//
    //******   user authentication    ******//
    //**************************************//
    ///https://angularfirebase.com/snippets/check-if-current-user-exists-with-angularfire/
    UserService.prototype.isLoggedIn = function () {
        return this.fireAuth.authState.pipe(first()).toPromise();
    };
    UserService.prototype.getAuthState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("userService call getAuthState=" + this.userAuth);
                        return [4 /*yield*/, this.userAuth];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.getUserId = function () {
        return this.userId;
    };
    UserService.prototype.getConnectedUserId = function () {
        var _this = this;
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("USERSERVICE RUNNNNN...  auth 1");
                _this.userId = user.uid;
                _this.userAuth = true;
                console.log("userService call getUserId=" + _this.userId);
                return _this.userId;
            }
            else {
                console.log("USERSERVICE RUNNNNN...  auth 0");
                // Empty the value when user signs out
                _this.userId = null;
                _this.userAuth = false;
                console.log("userService call getUserId=" + _this.userId);
                return _this.userId;
            }
        });
    };
    // async doSomething(): Promise<string>  {
    //   const user = await this.isLoggedIn()
    //   if (user) {
    //     // do something
    //     this.userId = await user.uid;
    //     return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
    //   } else {
    //     // do something else
    //   }
    // }
    // login
    UserService.prototype.signinUser = function (newEmail, newPassword) {
        return this.fireAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    UserService.prototype.resetPassword = function (email) {
        return this.fireAuth.auth.sendPasswordResetEmail(email);
    };
    UserService.prototype.signoutUser = function () {
        return this.fireAuth.auth.signOut();
    };
    // register 
    UserService.prototype.signupUser = function (firstname, lastname, phone, username, password) {
        var _this = this;
        return this.fireAuth.auth.createUserWithEmailAndPassword(username, password).then(function (newUser) {
            console.log("userid=========" + newUser.user.uid); // firebase.database().ref('/userProfile').child(newUser.uid).set({
            _this.firestore.collection('userProfile').doc(newUser.user.uid).set({
                id: newUser.user.uid,
                firstname: firstname,
                lastname: lastname,
                email: username,
                image: "",
                phone: phone
            });
        });
    };
    //*******************************//
    //******   user profile    ******//
    //*******************************//
    UserService.prototype.getUserProfile = function () {
        //  this.fireAuth.authState.subscribe(user => {
        //   if (user) {
        //     //this.userId = user.uid;
        //     //console.log("CALL check user auth________________userService user auth id = "+ this.userId);
        //     // set angularfireDoc userfile
        //    // this.userProfile = this.firestore.doc<any>('userProfile/'+this.userId);
        //       //######
        //   }
        // });
        console.log("userId=" + this.userId);
        console.log("getUserProfile");
        return this.firestore.doc('userProfile/' + this.userId).valueChanges();
    };
    UserService.prototype.getUserProfileId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isLoggedIn()];
                    case 1:
                        user = _b.sent();
                        if (!user) return [3 /*break*/, 3];
                        // do something
                        _a = this;
                        return [4 /*yield*/, user.uid];
                    case 2:
                        // do something
                        _a.userId = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        // do something else
                        console.log("++++++++No userId" + this.userId);
                        _b.label = 4;
                    case 4:
                        console.log("++++++++++getUserProfileId = " + this.userId);
                        return [2 /*return*/, this.userId];
                }
            });
        });
    };
    UserService.prototype.updateUserProfile = function (firstname, lastname, phone, email) {
        return this.firestore.doc('userProfile/' + this.userId).update({
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email
        });
    };
    //*******************************//
    //******   user address    ******//
    //*******************************//
    UserService.prototype.getAddressByUserId = function () {
        var _this = this;
        console.log("_____getAddressByUserId=");
        return this.firestore.collection('/userAddress', function (ref) { return ref
            .where('userProfileId', '==', _this.userId); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log("####get a group of countries=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    UserService.prototype.getAddressById = function (addressId) {
        console.log("_______getAddressById");
        return this.firestore.doc('userAddress/' + addressId).valueChanges();
    };
    UserService.prototype.addAddress = function (label, fullname, phone, address) {
        console.log("___addAddress=");
        return this.firestore.collection('userAddress').add({
            userProfileId: this.userId,
            label: label,
            fullname: fullname,
            phone: phone,
            address: address
            //createdTime: new Date()
        });
    };
    UserService.prototype.editAddress = function (addressId, title, fullname, phone, address) {
        console.log("addressId=" + addressId);
        return this.firestore.doc('userAddress/' + addressId).update({
            label: title,
            fullname: fullname,
            phone: phone,
            address: address
        });
    };
    UserService.prototype.deleteAddress = function (addressId) {
        return this.firestore.doc('userAddress/' + addressId).delete();
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map