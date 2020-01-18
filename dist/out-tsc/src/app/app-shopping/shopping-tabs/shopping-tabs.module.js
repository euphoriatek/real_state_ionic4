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
import { ShoppingTabsPage } from './shopping-tabs.page';
import { UserGuard } from '../../services/user.guard';
var routes = [
    {
        path: 'tabs',
        component: ShoppingTabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-home/shopping-home.module#ShoppingHomePageModule',
                    },
                    //  { path: 'shopping-payment/:addressId, loadChildren: ', loadChildren: './app-shopping/shopping-payment/shopping-payment.module#ShoppingPaymentPageModule' },
                    { path: 'shopping-group/:groupId', loadChildren: '../shopping-group/shopping-group.module#ShoppingGroupPageModule' },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-category/shopping-category.module#ShoppingCategoryPageModule',
                    },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-wishlist/shopping-wishlist.module#ShoppingWishlistPageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-my-order/shopping-my-order.module#ShoppingMyOrderPageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'shopping-my-order-detail/:orderId', loadChildren: '../shopping-my-order-detail/shopping-my-order-detail.module#ShoppingMyOrderDetailPageModule' },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopping-profile/shopping-profile.module#ShoppingProfilePageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'shopping-detail/:itemId', loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
                ]
            }
            // {
            //   path: 'tab2',
            //   loadChildren: '../food-category/food-category.module#FoodCategoryPageModule'
            // }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var ShoppingTabsPageModule = /** @class */ (function () {
    function ShoppingTabsPageModule() {
    }
    ShoppingTabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ShoppingTabsPage]
        })
    ], ShoppingTabsPageModule);
    return ShoppingTabsPageModule;
}());
export { ShoppingTabsPageModule };
//# sourceMappingURL=shopping-tabs.module.js.map