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
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app'; // new version : ex arrayContanin, arrayUnion
import { map } from 'rxjs/operators';
var RadioService = /** @class */ (function () {
    function RadioService(firestore, fireAuth) {
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.playingStatus = false;
    }
    //**********************************//
    //****** Get radio station list ******//
    //**********************************//
    RadioService.prototype.getStations = function () {
        console.log("start getCategory");
        return this.firestore.collection('/layout_radio').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //****************************************//
    //****** Get recommended station  ******//
    //****************************************//
    RadioService.prototype.getRecommendedStations = function () {
        return this.firestore.collection('/layout_radio', function (ref) { return ref
            .where('recommended', '==', true); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //**********************************//
    //****** Radio station detail ******//
    //**********************************//
    RadioService.prototype.getStationDetail = function (radioId) {
        console.log("---> call getStationDetail()");
        return this.firestore.doc('layout_radio/' + radioId).valueChanges();
    };
    //*****************************************************//
    //******** Get favorite stations  *********//
    //*****************************************************//
    RadioService.prototype.getFavStations = function () {
        var _this = this;
        console.log("_____START USERID()=" + this.userId);
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('/layout_radio_favorite_user', function (ref) { return ref
            .where('userId', '==', _this.userId); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //*********************************//
    //******* Add to favorite  ********//
    //*********************************//
    RadioService.prototype.addFavStation = function (radioId, itemName, rating, image) {
        console.log("addFavStation");
        console.log("userId= " + this.userId);
        //###### Add userId to layout_radio > favorite array  #####//
        this.firestore.doc('layout_radio/' + radioId).update({
            favorite: firestore.FieldValue.arrayUnion(this.userId)
        });
        //#### then add radioId to radio_favorite_user collection  ######//
        return this.firestore.doc('layout_radio_favorite_user/' + radioId).set({
            radioId: radioId,
            userId: this.userId,
            name: itemName,
            rating: rating,
            image: image
        });
        // this.postReference.update({
        // 	favorite: firestore.FieldValue.arrayUnion(userId)
        // })
    };
    //*************************************//
    //****** Remove from favorite  ********//
    //*************************************//
    RadioService.prototype.removeFavStation = function (radioId) {
        console.log("removeFavStation");
        //####### Remove userId in layout_radio > favorite array  ######//
        this.firestore.doc('layout_radio/' + radioId).update({
            favorite: firestore.FieldValue.arrayRemove(this.userId)
        });
        //###### remove placeId from travel_favorite_user collection  #####//
        return this.firestore.doc('layout_radio_favorite_user/' + radioId).delete();
    };
    //******************************//
    //****** Get playing status ******//
    //******************************//
    RadioService.prototype.getPlayingStatus = function () {
        return this.playingStatus;
    };
    RadioService.prototype.play = function (url) {
        var _this = this;
        this.stream = new Audio(url);
        this.stream.play();
        this.stream.volume = 0.5;
        console.log("SHOW VOL = " + this.stream.volume);
        this.promise = new Promise(function (resolve, reject) {
            _this.stream.addEventListener('playing', function () {
                console.log("Radio service is play");
                _this.playingStatus = true;
                resolve(true);
            });
            _this.stream.addEventListener('error', function () {
                _this.playingStatus = false;
                reject(false);
            });
        });
        return this.promise;
    };
    ;
    RadioService.prototype.pause = function () {
        console.log("Radio service is pause");
        this.stream.pause();
        this.playingStatus = false;
    };
    ;
    RadioService.prototype.stop = function () {
        console.log("Radio service is STOP");
        this.stream.pause();
        this.playingStatus = false;
        // This stops the stream from downloading
        var temp = this;
        setTimeout(function () {
            console.log("Stop download");
            temp.stream.src = "about:blank";
            temp.stream.load();
        });
    };
    ;
    RadioService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], RadioService);
    return RadioService;
}());
export { RadioService };
//# sourceMappingURL=radio.service.js.map