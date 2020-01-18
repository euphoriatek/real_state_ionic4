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
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
var CrudService = /** @class */ (function () {
    //private itemDoc: AngularFirestoreDocument<any>;
    function CrudService(firestore) {
        this.firestore = firestore;
        this.categoryCollection = this.firestore.collection('category');
        this.itemCollection = this.firestore.collection('item');
    }
    // &&&&&&&&&&&&&&&&&&&&&&&&&& Create service ex //
    //https://medium.com/@jinalshah999/cloud-fire-store-crud-operation-using-angular-f319bef27ce0
    //########################//
    //###### Categories ######//
    //########################//
    CrudService.prototype.getCategories = function () {
        var createdAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log("start getCategory");
        return this.categoryCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log(data);
                return __assign({ id: id }, data);
            });
        }));
    };
    CrudService.prototype.addCategory = function (data) {
        var createdAt = firebase.firestore.FieldValue.serverTimestamp();
        return this.categoryCollection.add(data);
    };
    CrudService.prototype.updateCategory = function (id, formData) {
        return this.categoryCollection.doc(id).update(formData);
        //return this.getCategory(id).update(formData)
    };
    CrudService.prototype.deleteCategory = function (id) {
        return this.categoryCollection.doc(id).delete();
        // return this.getCategory(id).delete();
    };
    //########################//
    //######### Items ########//
    //########################//
    // Get items list
    CrudService.prototype.getItems = function (catId) {
        console.log('catId=' + catId);
        return this.firestore.collection('/item', function (ref) { return ref.where('catId', '==', catId); }).snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // get id from firebase metadata 
                var id = a.payload.doc.id;
                console.log(data);
                return __assign({ id: id }, data);
            });
        }));
    };
    // Get item detail
    CrudService.prototype.getItem = function (itemId) {
        //return this.firestore.doc('item/'+itemId).valueChanges();
        return this.itemCollection.doc(itemId).valueChanges();
    };
    CrudService.prototype.getItemDetail = function (itemId) {
        return this.firestore.doc('item/' + itemId).valueChanges();
    };
    //########################//
    //###### Add data to doc ######//
    //########################//
    CrudService.prototype.addTestData = function () {
        var docData = {
            stringExample: "NEEDED",
            booleanExample: true,
            numberExample: 3.14159265,
            //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
            tagArray: [{ firstName: "ME", lastName: "KUU", age: 10 }, { firstName: "John", lastName: "Doe", age: 46 }],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        this.firestore.collection("item").doc("79oFJZen1UfAoz29pIVL").set(docData).then(function () {
            console.log("Document successfully written!");
        });
        //************ import data to firestore ********/
    };
    // read doc xs
    CrudService.prototype.getTestData = function () {
        //return this.firestore.doc('item/'+itemId).valueChanges();
        console.log("CALLED getTestData()++++++++");
        this.testData = this.firestore.collection("travel_tag").doc("testid_123456").valueChanges();
        this.testData.subscribe(function (data) { return console.log("ZOOOOOOOOOM=" + data.images); });
    };
    CrudService.prototype.addItem = function (data) {
        // const newBillRef: firebase.firestore.DocumentReference = await this.billList.add({});
        return this.itemCollection.add(data);
    };
    CrudService.prototype.updateItem = function (itemId, data) {
        return this.itemCollection.doc(itemId).update(data);
    };
    CrudService.prototype.deleteItem = function (itemId) {
        return this.itemCollection.doc(itemId).delete();
        // return this.getCategory(id).delete();
    };
    CrudService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], CrudService);
    return CrudService;
}());
export { CrudService };
//# sourceMappingURL=crud.service.js.map