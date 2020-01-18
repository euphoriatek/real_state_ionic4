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
var ShoppingService = /** @class */ (function () {
    function ShoppingService(firestore, fireAuth) {
        var _this = this;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        //********* shopping cart array ************* */
        this.shoppingCart = [];
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("shoppingService ...  auth = true");
                _this.userId = user.uid;
                _this.userAuth = true;
            }
            else {
                console.log("shoppingService ...  auth = false");
                _this.userId = "";
                _this.userAuth = false;
            }
        });
    }
    //*****************************************************//
    //******** User's wishlist item by userId  *********//
    //*****************************************************//
    ShoppingService.prototype.getWishlist = function () {
        var _this = this;
        console.log("_____START USERID()=" + this.userId);
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('/shopping_favorite_user', function (ref) { return ref
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
    ShoppingService.prototype.addWishlist = function (itemId, itemName, rating, image) {
        console.log("addWishlist");
        console.log("userId= " + this.userId);
        //###### Add userId to shopping_item > favorite array  #####//
        this.firestore.doc('shopping_item/' + itemId).update({
            favorite: firestore.FieldValue.arrayUnion(this.userId)
        });
        //#### then add placeId to travel_favorite_user collection  ######//
        return this.firestore.doc('shopping_favorite_user/' + itemId).set({
            placeId: itemId,
            userId: this.userId,
            name: itemName,
            rating: rating,
            image: image
        });
        // this.postReference.update({
        // 	favorite: firestore.FieldValue.arrayUnion(userId)
        // })
    };
    ShoppingService.prototype.removeWishlist = function (placeId) {
        console.log("removeWishlist");
        //####### Remove userId in traval_place > favorite array  ######//
        this.firestore.doc('shopping_item/' + placeId).update({
            favorite: firestore.FieldValue.arrayRemove(this.userId)
        });
        //###### remove placeId from travel_favorite_user collection  #####//
        return this.firestore.doc('shopping_favorite_user/' + placeId).delete();
    };
    //*******************************//
    //******** Search Item *********//
    //******************************//
    ShoppingService.prototype.searchItem = function () {
        console.log("called searchItem");
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('shopping_item').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####item data=" + data);
                console.log("####item Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    //************************//
    //****** Categories ******//
    //************************//
    ShoppingService.prototype.getCategories = function () {
        console.log("start getCategory");
        return this.firestore.collection('shopping_category').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####categories data=" + data);
                console.log("####categories Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    //*********************************************************//
    //****** Banner******//
    //*********************************************************//
    ShoppingService.prototype.getBanners = function () {
        return this.firestore.collection('shopping_banner').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####categories data=" + data);
                console.log("####categories Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    //*********************************************************//
    //****** Group (For brand , special promotion etc) ******//
    //*********************************************************//
    ShoppingService.prototype.getGroups = function () {
        console.log("start getGroup");
        return this.firestore.collection('shopping_group').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####categories data=" + data);
                console.log("####categories Id =" + id);
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //****** Menu item by Id  ******//
    //******************************//
    ShoppingService.prototype.getGroupDetail = function (groupId) {
        console.log("---> call getGroupDetail()");
        return this.firestore.doc('shopping_group/' + groupId).valueChanges();
    };
    //*****************************//
    //****** Item by groupId ******//
    //*****************************//
    ShoppingService.prototype.getItemByGroupId = function (groupId) {
        //console.log('catId='+ catId);
        console.log("_____START getPopularItems groupId=" + groupId);
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('shopping_groupId', '>=', groupId); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("----->getPopularItem=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //****************************************//
    //****** Get promotion item  ******//
    //****************************************//
    ShoppingService.prototype.getPromotionItems = function () {
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('promotion', '==', true); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("-----> getRecommended=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //****************************************//
    //****** Get recommended item  ******//
    //****************************************//
    ShoppingService.prototype.getRecommendedItem = function () {
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('recommended', '==', true); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("-----> getRecommended=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //*************************************//
    //******** Item by categoryId *********//
    //*************************************//
    ShoppingService.prototype.getItemByCatId = function (categoryId) {
        console.log("_____START getItemByCatId()=" + categoryId);
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('shopping_categoryId', '==', categoryId); })
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
    //*************************************//
    //******** Item by categoryId *********//
    //*************************************//
    ShoppingService.prototype.getRelatedItem = function (categoryId, limit) {
        console.log("_____START getItemByCatId()=" + categoryId);
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('shopping_categoryId', '==', categoryId)
            .orderBy("name", "desc").limit(limit); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //********************************************//
    //******** Get Item detail by itemId *********//
    //********************************************//
    ShoppingService.prototype.getItem = function () {
        console.log("start getPlaces");
        // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
        // return this.postDoc.valueChanges()
        return this.firestore.collection('shopping_item').snapshotChanges().pipe(map(function (actions) {
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
    //****** Menu item by Id  ******//
    //******************************//
    ShoppingService.prototype.getItemById = function (itemId) {
        console.log("---> call getShoppingItemById()");
        return this.firestore.doc('shopping_item/' + itemId).valueChanges();
    };
    //******************************//
    //****** Menu item by Id  ******//
    //******************************//
    ShoppingService.prototype.getProducts = function () {
        // return this.data;
    };
    //*******************************//
    //****** Generate order Id ******//
    //*******************************//
    ShoppingService.prototype.createOrderId = function () {
        return Math.floor(100000 + Math.random() * 900000);
    };
    //**************************************//
    //****** Cart for shopping items ******//
    //**************************************//
    ShoppingService.prototype.getCart = function () {
        return this.shoppingCart;
    };
    //******************************//
    //****** Menu item by Id  ******//
    //******************************//
    ShoppingService.prototype.getMyOrders = function () {
        var _this = this;
        console.log("getMyOrders");
        return this.firestore.collection('/shopping_order', function (ref) { return ref
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
    ShoppingService.prototype.getOrderDetail = function (orderId) {
        console.log("getOrderDetail orderId=" + orderId);
        return this.firestore.doc('shopping_order/' + orderId).valueChanges();
    };
    //***********************//
    //****** Place order ******//
    //**********************//
    ShoppingService.prototype.placeOrder = function (addressId, paymentType, orderItems, totalPrice) {
        console.log("______orderItems()" + JSON.stringify(orderItems));
        console.log("createOrderId()=" + this.createOrderId());
        return this.firestore.collection('shopping_order').add({
            userProfileId: this.userId,
            addressId: addressId,
            orderId: this.createOrderId(),
            paymentType: paymentType,
            orderItems: JSON.stringify(orderItems),
            status: "pending",
            totalPrice: totalPrice,
            createdTime: new Date()
        });
    };
    //*************************************//
    //*** Test: Add/set array of object ***//
    //************************************//
    ShoppingService.prototype.testAddArrayObject = function () {
        //console.log("BEFORE PUSH___________FOODSERVICE addProduct()="+JSON.stringify());
        var docData = {
            stringExample: "NEEDED",
            booleanExample: true,
            numberExample: 3.14159265,
            //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
            tagArray: [{ "firstName": "ME", "lastName": "KUU", "age": 10, "addOn": [{ "isChecked": true, "name": "chilli" }], }, { "firstName": "John", "lastName": "Doe", "age": 46 }],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        this.firestore.collection("food_order").doc("79oFJZen1UfAoz29pIVL").set(docData).then(function () {
            console.log("Order successfully written!");
        });
    };
    //*******************//
    //****** Cart  ******//
    //*******************//
    ShoppingService.prototype.addToCart = function (product) {
        console.log("BEFORE PUSH___________FOODSERVICE addProduct()=" + JSON.stringify(product));
        // const postData = {
        //   catId:1111111,
        //   name: "TEST",
        //   price: 210,
        //   array: this.selectOptions,
        //   image: '/assets/images/salami.jpg'
        //   //image: this.image
        //   }
        this.shoppingCart.push(product);
        console.log("+AFTER PUSH _________________FOODSERVICE 3cart array=" + JSON.stringify(this.shoppingCart));
    };
    ShoppingService.prototype.removeItemCart = function (index) {
        console.log("removeItemCart");
        this.shoppingCart.splice(index, 1);
        //update total price//
    };
    ShoppingService.prototype.removeAllItemCart = function () {
        console.log("removeAllItemCart");
        this.shoppingCart.length = 0;
        //update total price//
    };
    //****************************************//
    //******   Review    ******//
    //****************************************//
    ShoppingService.prototype.getReviews = function (itemId, limit) {
        console.log("###### get review service itemId=" + itemId);
        return this.firestore.collection('/shopping_review', function (ref) { return ref
            //.orderBy("createdtime", "asc") // You have to create index in firebase console.
            .where('shopping_itemId', '==', itemId)
            .limit(limit); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####Review =" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    //******************************//
    //******   Add review    ******//
    //*****************************//
    ShoppingService.prototype.addReview = function (itemId, userProfileImage, name, rating, comment) {
        console.log("___itemId=" + itemId);
        console.log("_____new Date()=" + new Date());
        return this.firestore.collection('shopping_review').add({
            shopping_itemId: itemId,
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
    ShoppingService.prototype.getRecommended = function () {
        //console.log('catId='+ catId);
        return this.firestore.collection('/shopping_item', function (ref) { return ref
            .where('recommended', '==', true); })
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log("####Reccomened=" + data);
                return __assign({ id: id }, data);
            });
        }));
    };
    ShoppingService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], ShoppingService);
    return ShoppingService;
}());
export { ShoppingService };
//# sourceMappingURL=shopping.service.js.map