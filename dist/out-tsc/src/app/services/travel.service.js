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
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
var TravelService = /** @class */ (function () {
    function TravelService(firestore, fireAuth) {
        var _this = this;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("travelSERVICE_______auth = true");
                _this.userId = user.uid;
                _this.userAuth = true;
            }
            else {
                console.log("travelSERVICE_______auth = false");
                _this.userId = "";
                _this.userAuth = false;
            }
        });
    }
    // get timestamp() {
    //   //return firebase.database.ServerValue.TIMESTAMP;
    //   return firebase.firestore.FieldValue.serverTimestamp();
    // }
    //#*********************************//
    //****** Get favorite items   ******//
    //**********************************//
    TravelService.prototype.getFavorite = function () {
        //  getUserId
        // return this.favoriteCollection.doc<Favorite>(id).valueChanges();
        // return this.firestore.doc(`/userProfile/${this.userId}/travel_place/${placeId}`);
        return this.firestore.collection("/userProfile/" + this.userId + "/travel_favorite").snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                //console.log("...getFavorite="+data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //**************************//
    //****** Add favorite ******//
    //**************************//
    TravelService.prototype.addFavorite = function (placeId, placeName, rating, image) {
        console.log("");
        console.log("...addFavorite userId= " + this.userId);
        //###### Add userId to travel_place > favorite array  #####//
        this.firestore.doc('travel_place/' + placeId).update({
            favorite: firestore.FieldValue.arrayUnion(this.userId)
        });
        //#### then add placeId to travel_favorite_user collection  ######//
        return this.firestore.doc('travel_favorite_user/' + placeId).set({
            placeId: placeId,
            userId: this.userId,
            name: placeName,
            rating: rating,
            image_header: image
        });
        // this.postReference.update({
        // 	favorite: firestore.FieldValue.arrayUnion(userId)
        // })
    };
    //*****************************//
    //****** Remove favorite ******//
    //*****************************//
    TravelService.prototype.removeFavorite = function (placeId) {
        console.log("removeFavorite");
        //####### Remove userId in traval_place > favorite array  ######//
        this.firestore.doc('travel_place/' + placeId).update({
            favorite: firestore.FieldValue.arrayRemove(this.userId)
        });
        //###### remove placeId from travel_favorite_user collection  #####//
        return this.firestore.doc('travel_favorite_user/' + placeId).delete();
    };
    //************************//
    //****** Categories ******//
    //************************//
    TravelService.prototype.getCategories = function () {
        return this.firestore.collection('travel_category').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //*************************************//
    //****** Categories by countries(group) ******//
    //*************************************//
    TravelService.prototype.getCateoriesByGroup = function () {
        console.log("get countries list by group");
        return this.firestore.collection('travel_category').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //************************//
    //******** Search Place *********//
    //************************//
    TravelService.prototype.searchPlaces = function () {
        console.log("start searchPlaces");
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('travel_place').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //*****************************************************//
    //******** User's fovorite places by userId  *********//
    //*****************************************************//
    TravelService.prototype.getFavPlace = function () {
        var _this = this;
        console.log("..getFavPlace/ get this.userId()=" + this.userId);
        return this.firestore.collection('/travel_favorite_user', function (ref) { return ref
            .where('userId', '==', _this.userId); })
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
    //**************************************//
    //******** Place by categoryId *********//
    //**************************************//
    TravelService.prototype.getPlacesByCatId = function (categoryId) {
        console.log("_____START getPlacesByCatId()=" + categoryId);
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('/travel_place', function (ref) { return ref
            .where('travel_categoryId', '==', categoryId); })
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
    //******** Place *********//
    //************************//
    TravelService.prototype.getPlaces = function () {
        return this.firestore.collection('travel_place').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //****** Place by placeID ******//
    //******************************//
    TravelService.prototype.getPlacesDetail = function (placeId) {
        //console.log("3_____Travel.Service call getPlacesDetail()");
        return this.firestore.doc('travel_place/' + placeId).valueChanges();
    };
    //****************************************//
    //******   Review    ******//
    //****************************************//
    TravelService.prototype.getReviews = function (placeId, limit) {
        console.log("###### get review service placeId=" + placeId);
        return this.firestore.collection('/travel_review', function (ref) { return ref
            //.orderBy("createdtime", "asc") // You have to create index in firebase console.
            .where('travel_placeId', '==', placeId)
            .limit(limit); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //******   Add review    ******//
    //*****************************//
    TravelService.prototype.addReview = function (placeId, userProfileImage, name, rating, comment) {
        //console.log("start addReview_______placeId="+placeId);
        //console.log("_____new Date()="+new Date());
        return this.firestore.collection('travel_review').add({
            travel_placeId: placeId,
            userProfileId: this.userId,
            userProfileImage: userProfileImage,
            name: name,
            rating: rating,
            comment: comment,
            createdTime: new Date()
        });
    };
    //****************************************//
    //******   Reviews  by placeId  ******//
    //****************************************//
    // getReviews(placeId: string) {
    //   console.log("###### get review service placeId="+placeId);
    //   return this.firestore.collection<any>('/travel_review', ref => ref
    //   .where('travel_placeId', '==', placeId))
    //   .snapshotChanges().pipe(
    //     map(actions => {  
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         // get id from firebase metadata 
    //         const id = a.payload.doc.id; 
    //         console.log("####Review ="+data);
    //         return { id, ...data };
    //       });
    //     })
    //   );
    // }
    //****************************************//
    //****** Get Place by recommended   ******//
    //****************************************//
    TravelService.prototype.getRecommended = function () {
        return this.firestore.collection('/travel_place', function (ref) { return ref
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
    //****************************************//
    //****** Get Place by Top rating   ******//
    //****************************************//
    TravelService.prototype.getTopRatingPlaces = function () {
        //console.log('catId='+ catId);
        return this.firestore.collection('/travel_place', function (ref) { return ref
            .where('rating', '==', 5); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                //console.log("####Top rating place="+data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //#************************//
    //****** Get tags   ******//
    //************************//
    TravelService.prototype.getTags = function () {
        console.log("start getTags");
        return this.firestore.collection('travel_tag').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                //console.log("#####Get getTags"+data);
                //console.log("Get Tags"+data);
                return __assign({ id: id }, data);
            });
        }));
    };
    TravelService.prototype.getPlacesByTag = function (tagId) {
        //console.log(">>>>>>>>>>>start getPlacesByTag");
        return this.firestore.doc('travel_tag/' + tagId).valueChanges();
        // return this.firestore.collection<any>('/travel_tag', ref => ref
        // .where('tagId', '==', tagId))
        // //.orderBy("timestamp", "desc").limit(10))
        // .snapshotChanges().pipe(
        //   map(actions => {  
        //     return actions.map(a => {
        //       const data = a.payload.doc.data();
        //       // get id from firebase metadata 
        //       const id = a.payload.doc.id; 
        //       return { id, ...data };
        //     });
        //   })
        // );
    };
    TravelService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], TravelService);
    return TravelService;
}());
export { TravelService };
//# sourceMappingURL=travel.service.js.map