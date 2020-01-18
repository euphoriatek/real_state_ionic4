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
import { ModalController, NavController } from '@ionic/angular';
import { TravelImageZoomPage } from '../travel-image-zoom/travel-image-zoom.page';
import { UserService } from '../../services/user.service';
import { TravelService } from '../../services/travel.service';
// import travel-place-review-add  for page modal
import { TravelPlaceReviewAddPage } from '../travel-place-review-add/travel-place-review-add.page';
var TravelPlaceDetailPage = /** @class */ (function () {
    function TravelPlaceDetailPage(
    // private fireAuth:AngularFireAuth,
    travelService, userService, activatedRoute, navController, router, modalController) {
        this.travelService = travelService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
        this.placeArray = [];
        //**** User authentication  ****/
        this.userAuth = false; // Is user logged in ?
        //**** favorite  ****/
        this.favorite = false;
        //favArray: any=[];
        this.heartType = "heart-empty";
        this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
    }
    TravelPlaceDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlaceDetail()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPlaceReview()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceDetailPage.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe()
    };
    TravelPlaceDetailPage.prototype.getPlaceDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        //console.log("___userAuth before receive="+this.userAuth);
                        //this.userAuth = await this.userService.getAuthState();
                        _a = this;
                        return [4 /*yield*/, this.userService.isLoggedIn()];
                    case 1:
                        //console.log("___userAuth before receive="+this.userAuth);
                        //this.userAuth = await this.userService.getAuthState();
                        _a.userAuth = _d.sent();
                        //console.log("___userAuth after received="+this.userAuth);
                        _b = this;
                        return [4 /*yield*/, this.userService.getUserId()];
                    case 2:
                        //console.log("___userAuth after received="+this.userAuth);
                        _b.userId = _d.sent();
                        //console.log("___userId after receive="+this.userId);
                        _c = this;
                        return [4 /*yield*/, this.travelService.getPlacesDetail(this.placeId)];
                    case 3:
                        //console.log("___userId after receive="+this.userId);
                        _c.place = _d.sent();
                        // get image gallery from place doc.
                        return [4 /*yield*/, this.place.subscribe(function (res) {
                                // console.log("4 getPlacesDetail subsribe = "+res);
                                // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res)); 
                                _this.placeArray = res;
                                // console.log("6 this.placeArray/images="+this.placeArray.images);
                                // console.log("7 this.placeArray.travel_categoryId="+this.placeArray.travel_categoryId);
                                //this.getRelatedPlace(this.placeArray.travel_categoryId);
                                //********* travel-place/favorite/userId  ***********//
                                _this.heartType = res.favorite.includes(_this.userId) ? 'heart' : 'heart-empty';
                            })];
                    case 4:
                        // get image gallery from place doc.
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelPlaceDetailPage.prototype.toggleHeart = function () {
        if (this.heartType == 'heart-empty') {
            console.log("Heart ON");
            this.travelService.addFavorite(this.placeId, this.placeArray.name, this.placeArray.rating, this.placeArray.image_header);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
            // })
        }
        else {
            console.log("Heart OFF");
            this.travelService.removeFavorite(this.placeId);
            // this.postReference.update({
            // 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
            // })
        }
    };
    TravelPlaceDetailPage.prototype.getPlaceReview = function () {
        console.log("###########call  getReview()");
        this.reviews = this.travelService.getReviews(this.placeId, 5);
    };
    TravelPlaceDetailPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 160;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 160;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    };
    TravelPlaceDetailPage.prototype.openImageViewer = function (image) {
        this.modalController.create({
            component: TravelImageZoomPage,
            componentProps: {
                data: this.placeArray,
                index: image
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    TravelPlaceDetailPage.prototype.openAddReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: TravelPlaceReviewAddPage,
                            cssClass: 'from-middle-modal',
                            componentProps: {
                                placeId: this.placeId
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TravelPlaceDetailPage = __decorate([
        Component({
            selector: 'app-travel-place-detail',
            templateUrl: './travel-place-detail.page.html',
            styleUrls: ['./travel-place-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [TravelService,
            UserService,
            ActivatedRoute,
            NavController,
            Router,
            ModalController])
    ], TravelPlaceDetailPage);
    return TravelPlaceDetailPage;
}());
export { TravelPlaceDetailPage };
//# sourceMappingURL=travel-place-detail.page.js.map