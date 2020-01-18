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
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { RadioService } from '../../services/radio.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var RadioPlayerPage = /** @class */ (function () {
    function RadioPlayerPage(radioService, activatedRoute, navController, modalController, router, alertController, ionicComponentService) {
        this.radioService = radioService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.modalController = modalController;
        this.router = router;
        this.alertController = alertController;
        this.ionicComponentService = ionicComponentService;
        this.playing = false;
        this.radioId = this.activatedRoute.snapshot.paramMap.get('radioId');
        // this.radio = afDB.object('/radio/'+this.radioId ).valueChanges();
        // this.radio.subscribe( (snapshots) => {
        //   this.stationUrl = snapshots.url;    
        //   console.log("station url ="+this.stationUrl )
        //   this.player = myplayer;
        //   this.play(this.stationUrl);
        // });
    }
    RadioPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("radioId=" + this.radioId);
        // radio station list : http://www.radiosure.com/stations/
        this.radioDetail = this.radioService.getStationDetail(this.radioId);
        this.radioService.getStationDetail(this.radioId).subscribe(function (res) {
            console.log("stationTitle =" + _this.stationTitle);
            console.log("stationFq=" + _this.stationFq);
            console.log("stationUrl =" + _this.stationUrl);
            _this.stationTitle = res.title;
            _this.stationFq = res.fq;
            _this.stationUrl = res.url;
            console.log("stationTitle =" + _this.stationTitle);
            console.log("stationFq=" + _this.stationFq);
            console.log("stationUrl =" + _this.stationUrl);
            // call play()
            _this.play(_this.stationUrl);
        });
    };
    RadioPlayerPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RadioPlayerPage.prototype.ionViewDidLeave = function () {
        this.stop();
    };
    // async presentLoading() {
    //   this.isLoading = true;
    //   return await this.loadingController.create({
    //     duration: 5000,
    //   }).then(a => {
    //     a.present().then(() => {
    //       console.log('presented');
    //       if (!this.isLoading) {
    //         a.dismiss().then(() => console.log('abort presenting'));
    //       }
    //     });
    //   });
    // }
    // async dismissLoading() {
    //   this.isLoading = false;
    //   return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    // }
    RadioPlayerPage.prototype.play = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // const loading = await this.loadingController.create({
                //   spinner: "dots",
                //   duration: 5000,
                //   message: 'Please wait...',
                //   translucent: true,
                //   cssClass: 'custom-class custom-loading'
                // });
                //  await loading.present();
                this.ionicComponentService.presentLoading();
                console.log("play button clicked");
                console.log("radio station url=" + url);
                //await  loading.onDidDismiss();
                this.playing = !this.playing;
                this.radioService.play(url).then(function () {
                    console.log('Return Playing');
                    _this.ionicComponentService.dismissLoading();
                    ///this.loadingPopup.dismiss();  
                })
                    .catch(function (error) {
                    console.log("error=" + error);
                    _this.ionicComponentService.presentAlert("Error msg= " + error + "<br>Radio url = " + url);
                    _this.radioService.stop();
                    _this.playing = false;
                    _this.ionicComponentService.dismissLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    RadioPlayerPage.prototype.pause = function () {
        this.playing = !this.playing;
        this.radioService.pause();
    };
    RadioPlayerPage.prototype.stop = function () {
        this.radioService.stop();
    };
    RadioPlayerPage.prototype.close = function () {
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
    RadioPlayerPage = __decorate([
        Component({
            selector: 'app-radio-player',
            templateUrl: './radio-player.page.html',
            styleUrls: ['./radio-player.page.scss'],
        }),
        __metadata("design:paramtypes", [RadioService,
            ActivatedRoute,
            NavController,
            ModalController,
            Router,
            AlertController,
            IonicComponentService])
    ], RadioPlayerPage);
    return RadioPlayerPage;
}());
export { RadioPlayerPage };
//# sourceMappingURL=radio-player.page.js.map