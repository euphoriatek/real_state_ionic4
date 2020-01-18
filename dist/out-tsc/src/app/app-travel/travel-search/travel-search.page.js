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
import { Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController, IonSearchbar } from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var TravelSearchPage = /** @class */ (function () {
    function TravelSearchPage(firestore, travelService, modalController, activatedRoute, navController, router, ionicComponentService) {
        this.firestore = firestore;
        this.travelService = travelService;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
    }
    TravelSearchPage.prototype.close = function () {
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
    TravelSearchPage.prototype.openPlaceDetail = function (placeId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("placeId" + placeId);
                        // call loading //
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        //this.router.navigateByUrl('/side-menu/travel/tabs/tab1/travel-place-detail/'+placeId);
                        this.router.navigateByUrl('/travel-place-detail/' + placeId);
                        this.ionicComponentService.dismissLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelSearchPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    TravelSearchPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("--------------first time loaded-------------");
        this.travelService.searchPlaces().subscribe(function (results) {
            console.log(results);
            _this.loadedResultList = results;
        });
        var timeoutID = setTimeout(function () {
            _this.searchbar.setFocus();
            console.log("setFocus()=======");
            clearTimeout(timeoutID);
        }, 200);
    };
    TravelSearchPage.prototype.initializeItems = function () {
        console.log("call initialize");
        this.resultList = this.loadedResultList;
    };
    TravelSearchPage.prototype.filterList = function (evt) {
        console.log("call filter");
        this.initializeItems();
        var searchTerm = evt.srcElement.value;
        console.log("search value=" + searchTerm);
        if (!searchTerm) {
            console.log("return>>>>");
            this.resultList = [];
            return;
        }
        this.resultList = this.resultList.filter(function (res) {
            if (res.name && searchTerm) {
                if (res.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log("Number of result value : true");
                    return true;
                }
                console.log("Unmatch vlaue : false");
                return false;
            }
        });
    };
    __decorate([
        ViewChild('searchbar'),
        __metadata("design:type", IonSearchbar)
    ], TravelSearchPage.prototype, "searchbar", void 0);
    TravelSearchPage = __decorate([
        Component({
            selector: 'app-travel-search',
            templateUrl: './travel-search.page.html',
            styleUrls: ['./travel-search.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            TravelService,
            ModalController,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService])
    ], TravelSearchPage);
    return TravelSearchPage;
}());
export { TravelSearchPage };
//# sourceMappingURL=travel-search.page.js.map