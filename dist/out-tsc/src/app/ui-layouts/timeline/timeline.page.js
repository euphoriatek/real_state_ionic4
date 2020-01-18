var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MenuController } from '@ionic/angular';
var TimelinePage = /** @class */ (function () {
    function TimelinePage(menuCtrl, firestore) {
        this.menuCtrl = menuCtrl;
        this.firestore = firestore;
    }
    TimelinePage.prototype.toggleSideMenu = function () {
        this.menuCtrl.toggle(); //Add this method to your button click function
    };
    TimelinePage.prototype.ngOnInit = function () {
        console.log("start");
        this.timelines = this.firestore.collection('layout_timeline').valueChanges();
    };
    TimelinePage.prototype.getFeed = function () {
        console.log("start getCategory");
    };
    TimelinePage = __decorate([
        Component({
            selector: 'app-timeline',
            templateUrl: './timeline.page.html',
            styleUrls: ['./timeline.page.scss'],
        }),
        __metadata("design:paramtypes", [MenuController,
            AngularFirestore])
    ], TimelinePage);
    return TimelinePage;
}());
export { TimelinePage };
//# sourceMappingURL=timeline.page.js.map