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
import { FoodTabsPage } from './food-tabs.page';
import { UserGuard } from '../../services/user.guard';
var routes = [
    {
        path: 'tabs',
        component: FoodTabsPage,
        children: [
            // {
            //   path: 'tab1',
            //   loadChildren: '../food-home/food-home.module#FoodHomePageModule'
            // },
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-home/food-home.module#FoodHomePageModule',
                    },
                    { path: 'food-cart', loadChildren: '../food-cart/food-cart.module#FoodCartPageModule' },
                    { path: 'food-category', loadChildren: '../food-category/food-category.module#FoodCategoryPageModule' },
                    { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-category/food-category.module#FoodCategoryPageModule',
                    },
                    { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'food-myorder-detail/:orderId', loadChildren: '../food-myorder-detail/food-myorder-detail.module#FoodMyorderDetailPageModule' },
                    { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-cart/food-cart.module#FoodCartPageModule',
                    },
                    { path: 'food-detail', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../food-profile/food-profile.module#FoodProfilePageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'food-myorder', loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule' }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var FoodTabsPageModule = /** @class */ (function () {
    function FoodTabsPageModule() {
    }
    FoodTabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FoodTabsPage]
        })
    ], FoodTabsPageModule);
    return FoodTabsPageModule;
}());
export { FoodTabsPageModule };
//# sourceMappingURL=food-tabs.module.js.map