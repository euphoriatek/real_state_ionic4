var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodMyorderDetailPage } from './food-myorder-detail.page';
var routes = [
    {
        path: '',
        component: FoodMyorderDetailPage
    }
];
var FoodMyorderDetailPageModule = /** @class */ (function () {
    function FoodMyorderDetailPageModule() {
    }
    FoodMyorderDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FoodMyorderDetailPage]
        })
    ], FoodMyorderDetailPageModule);
    return FoodMyorderDetailPageModule;
}());
export { FoodMyorderDetailPageModule };
//# sourceMappingURL=food-myorder-detail.module.js.map