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
import { RealTabsPage } from './real-tabs.page';
import { UserGuard } from '../../services/user.guard';
var routes = [
    {
        path: 'tabs',
        component: RealTabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-home/real-home.module#RealHomePageModule',
                    },
                    { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },
                    { path: 'real-agent', loadChildren: '../real-agent/real-agent.module#RealAgentPageModule' },
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-list/real-list.module#RealListPageModule'
                    },
                    { path: 'real-map/:type', loadChildren: '../real-map/real-map.module#RealMapPageModule' },
                    { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                 
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-favorite/real-favorite.module#RealFavoritePageModule',
                        canActivate: [UserGuard]
                    },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-agent/real-agent.module#RealAgentPageModule',
                        canActivate: [UserGuard]
                    },
                    //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                    { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../real-profile/real-profile.module#RealProfilePageModule',
                        canActivate: [UserGuard]
                    },
                    { path: 'logout', loadChildren: '../../app-auth/logout/logout.module#LogoutPageModule' },
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
var RealTabsPageModule = /** @class */ (function () {
    function RealTabsPageModule() {
    }
    RealTabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RealTabsPage]
        })
    ], RealTabsPageModule);
    return RealTabsPageModule;
}());
export { RealTabsPageModule };
//# sourceMappingURL=real-tabs.module.js.map