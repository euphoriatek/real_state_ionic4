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
var RealestateService = /** @class */ (function () {
    function RealestateService(firestore, fireAuth) {
        var _this = this;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("realestate Service ...  auth = true");
                _this.userId = user.uid;
                _this.userAuth = true;
            }
            else {
                console.log("trealestate Service ...  auth = false");
                _this.userId = "";
                _this.userAuth = false;
            }
        });
    }
    //****************************************//
    //****** Get by agentId    ******//
    //****************************************//
    RealestateService.prototype.getHouseByAgent = function (agentId) {
        return this.firestore.collection('/realestate_item', function (ref) { return ref
            .where('agentId', '==', agentId); })
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
    //****************************************//
    //****** Get house items by type    ******//
    //****************************************//
    RealestateService.prototype.getHouseByType = function (HouseType) {
        return this.firestore.collection('/realestate_item', function (ref) { return ref
            .where('type', '==', HouseType); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("-----> getHouseByType=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //************************//
    //******** Get all houses *********//
    //************************//
    RealestateService.prototype.getAllHouse = function () {
        console.log("start getAllHouse");
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('realestate_item').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####place data=" + data);
                console.log("####place Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //****** Get house detail ******//
    //******************************//
    RealestateService.prototype.getHouseDetail = function (itemId) {
        console.log("---> call getHouseDetail()");
        return this.firestore.doc('realestate_item/' + itemId).valueChanges();
    };
    //****************************************//
    //****** Get all agents    ******//
    //****************************************//
    RealestateService.prototype.getAgent = function () {
        return this.firestore.collection('realestate_agent').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####place data=" + data);
                console.log("####place Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    RealestateService.prototype.getTopAgent = function (limit) {
        return this.firestore.collection('realestate_agent', function (ref) { return ref
            .where('rating', '>', 4)
            .limit(limit); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                //console.log("----->getPopularItem="+data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //****** Get agent detail ******//
    //******************************//
    RealestateService.prototype.getAgentDetail = function (agentId) {
        console.log("---> call getAgentDetail()");
        return this.firestore.doc('realestate_agent/' + agentId).valueChanges();
    };
    //************************//
    //****** Favorite ******//
    //************************//
    RealestateService.prototype.addFavorite = function (itemId, title, image) {
        console.log("__addFavorite");
        console.log("userId= " + this.userId);
        //###### Add userId to travel_place > favorite array  #####//
        this.firestore.doc('realestate_item/' + itemId).update({
            favorite: firestore.FieldValue.arrayUnion(this.userId)
        });
        //#### then add placeId to travel_favorite_user collection  ######//
        return this.firestore.doc('realestate_favorite_user/' + itemId).set({
            itemId: itemId,
            userId: this.userId,
            name: title,
            image_header: image
        });
        // this.postReference.update({
        // 	favorite: firestore.FieldValue.arrayUnion(userId)
        // })
    };
    RealestateService.prototype.removeFavorite = function (itemId) {
        console.log("removeFavorite");
        //####### Remove userId in traval_place > favorite array  ######//
        this.firestore.doc('realestate_item/' + itemId).update({
            favorite: firestore.FieldValue.arrayRemove(this.userId)
        });
        //###### remove placeId from travel_favorite_user collection  #####//
        return this.firestore.doc('realestate_favorite_user/' + itemId).delete();
    };
    //*****************************************************//
    //******** User's fovorite places by userId  *********//
    //*****************************************************//
    RealestateService.prototype.getFavHouse = function () {
        var _this = this;
        console.log("_____START USERID()=" + this.userId);
        return this.firestore.collection('/realestate_favorite_user', function (ref) { return ref
            .where('userId', '==', _this.userId); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####get a group of countries=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //************************//
    //******** Search Place *********//
    //************************//
    RealestateService.prototype.searchHouses = function () {
        console.log("start searchPlaces");
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('realestate_item').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####place data=" + data);
                console.log("####place Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    RealestateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], RealestateService);
    return RealestateService;
}());
export { RealestateService };
//# sourceMappingURL=realestate.service.js.map