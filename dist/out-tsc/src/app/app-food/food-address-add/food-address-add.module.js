var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodAddressAddPage } from './food-address-add.page';
var routes = [
    {
        path: '',
        component: FoodAddressAddPage
    }
];
var FoodAddressAddPageModule = /** @class */ (function () {
    function FoodAddressAddPageModule() {
    }
    FoodAddressAddPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FoodAddressAddPage]
        })
    ], FoodAddressAddPageModule);
    return FoodAddressAddPageModule;
}());
export { FoodAddressAddPageModule };
//# sourceMappingURL=food-address-add.module.js.map