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
import { map } from 'rxjs/operators';
var FoodService = /** @class */ (function () {
    function FoodService(firestore, fireAuth) {
        var _this = this;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        //********* shopping cart array ************* */
        this.foodCart = [];
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("foodService_______auth 1");
                _this.userId = user.uid;
                _this.userAuth = true;
            }
            else {
                console.log("foodService_______auth 0");
                _this.userId = "";
                _this.userAuth = false;
            }
        });
    }
    //*******************************//
    //******** Search Item *********//
    //******************************//
    FoodService.prototype.searchItem = function () {
        console.log("called searchItem");
        // this.itemDoc = this.firestore.doc<any>(`food_item/${categoryId}`)
        // return this.itemDoc.valueChanges()
        return this.firestore.collection('food_item').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //************************//
    //****** Categories ******//
    //************************//
    FoodService.prototype.getCategories = function () {
        console.log("start getCategory");
        return this.firestore.collection('food_category').snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    //****************************************//
    //****** Get popular item   ******//
    //****************************************//
    FoodService.prototype.getPopularItems = function () {
        return this.firestore.collection('/food_item', function (ref) { return ref
            .where('rating', '>=', 4); })
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
    FoodService.prototype.getItemByCatId = function (categoryId) {
        return this.firestore.collection('/food_item', function (ref) { return ref
            .where('food_categoryId', '==', categoryId); })
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
    //****** Get promotion item  ******//
    //****************************************//
    FoodService.prototype.getPromotionItems = function () {
        return this.firestore.collection('/food_item', function (ref) { return ref
            .where('promotion', '==', true); })
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
    //************************//
    //******** Place *********//
    //************************//
    // getPlaces(){
    //   return this.firestore.collection<any>('travel_place').snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         // get id from firebase metadata 
    //         const id = a.payload.doc.id; 
    //         return { id, ...data };
    //       });
    //     })
    //   );
    // }
    //******************************//
    //****** Get item detail  ******//
    //******************************//
    FoodService.prototype.getItemDetail = function (itemId) {
        return this.firestore.doc('food_item/' + itemId).valueChanges();
    };
    FoodService.prototype.getProducts = function () {
        // return this.data;
    };
    //******************************//
    //****** Get item in cart  ******//
    //******************************//
    FoodService.prototype.getCart = function () {
        return this.foodCart;
    };
    //*******************************//
    //****** Generate order Id ******//
    //*******************************//
    FoodService.prototype.createOrderId = function () {
        return Math.floor(100000 + Math.random() * 900000);
    };
    //***********************//
    //****** Get order ******//
    //**********************//
    FoodService.prototype.getMyOrders = function () {
        var _this = this;
        console.log("getMyOrders");
        console.log("getMyOrders userProfileId=" + this.userId);
        return this.firestore.collection('/food_order', function (ref) { return ref
            .where('userProfileId', '==', _this.userId); })
            .snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    FoodService.prototype.getOrderDetail = function (orderId) {
        return this.firestore.doc('food_order/' + orderId).valueChanges();
    };
    //***********************//
    //****** Place order ******//
    //**********************//
    FoodService.prototype.placeOrder = function (addressId, paymentType, orderItems, totalPrice) {
        console.log("______orderItems()" + JSON.stringify(orderItems));
        console.log("createOrderId()=" + this.createOrderId());
        //const itemCartJson = JSON.stringify(orderItems);
        //const itenCartParse  = JSON.parse(itemCart); JSON.parse(localStorage.getItem('avct_item')) || [];
        //const itenCartParse  = itemCart.replace(/\"([^(\")"]+)\":/g,"$1:");
        //console.log("_____itenCartParse="+itenCartParse);
        // https://stackoverflow.com/questions/48156234/function-documentreference-set-called-with-invalid-data-unsupported-field-val
        // const convertArray = itemCart.map((obj)=> {return Object.assign({}, obj)});
        // console.log("convertArray="+JSON.stringify(convertArray));
        //const testArray =  [{firstName:"ME", lastName:"KUU", age:10},{firstName:"John", lastName:"Doe", age:46}];
        var testArray = [{ "1111firstName": "ME", "lastName": "KUU", "age": 10, "addOn": [{ "isChecked": true, "name": "chilli" }, { "isChecked": true, "name": "chilli" }], }, { "firstName": "John", "lastName": "Doe", "age": 46 }]; //[5, true, "hello"],
        console.log('____testArray=' + JSON.stringify(testArray));
        return this.firestore.collection('food_order').add({
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
    FoodService.prototype.testAddArrayObject = function () {
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
    FoodService.prototype.addToCart = function (product) {
        console.log("BEFORE PUSH___________FOODSERVICE addProduct()=" + JSON.stringify(product));
        this.foodCart.push(product);
        console.log("+AFTER PUSH _________________FOODSERVICE 3cart array=" + JSON.stringify(this.foodCart));
    };
    FoodService.prototype.removeItemCart = function (index) {
        console.log("removeItemCart");
        this.foodCart.splice(index, 1);
        //update total price//
    };
    FoodService.prototype.removeAllItemCart = function () {
        console.log("removeAllItemCart");
        this.foodCart.length = 0;
        //update total price//
    };
    FoodService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth])
    ], FoodService);
    return FoodService;
}());
export { FoodService };
//# sourceMappingURL=food.service.js.map