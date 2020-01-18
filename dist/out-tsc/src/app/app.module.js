var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//******** Angularfire ********/
import { AngularFireModule } from '@angular/fire';
//******* firebase api key ********//
import { environment } from '../environments/environment';
//******* firebase api key ********//
import { AngularFireAuthModule } from '@angular/fire/auth';
//******* firebase firestore ********//
import { AngularFirestoreModule } from '@angular/fire/firestore';
//******* firebase storage ********//
import { AngularFireStorageModule } from '@angular/fire/storage';
//******* Travel page module ********//
import { TravelMapPageModule } from './app-travel/travel-map/travel-map.module';
import { TravelMapModalPageModule } from './app-travel/travel-map-modal/travel-map-modal.module';
import { TravelSearchPageModule } from './app-travel/travel-search/travel-search.module';
import { TravelPlaceReviewAddPageModule } from './app-travel/travel-place-review-add/travel-place-review-add.module';
import { TravelImageZoomPageModule } from './app-travel/travel-image-zoom/travel-image-zoom.module';
//******* Food page module ********//
import { FoodSearchPageModule } from './app-food/food-search/food-search.module';
//import image gallery page module
//import { ImageModalPageModule } from './image-modal/image-modal.module';
//******* Shopping page module ********//
import { ShoppingSearchPageModule } from './app-shopping/shopping-search/shopping-search.module';
//******* Real estate page module ********//
import { RealSearchPageModule } from './app-real/real-search/real-search.module';
import { RealMapPageModule } from './app-real/real-map/real-map.module';
//******* Radio station page module ********//
import { RadioPlayerPageModule } from './app-radio/radio-player/radio-player.module';
//******* UI-layout / gallery viewer ********//
import { GalleryViewerModalPageModule } from './ui-layouts/gallery-viewer-modal/gallery-viewer-modal.module';
//******** UI_components / modal detail *********/
import { ModalDetailPageModule } from './ui-components/modal-detail/modal-detail.module';
//******** ionic4 rating *********/
import { IonicRatingModule } from 'ionic4-rating/dist';
//******** Shared module *********/
import { SharedModule } from './shared/shared.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicRatingModule,
                SharedModule,
                IonicModule.forRoot({
                    rippleEffect: false,
                    mode: 'ios'
                }),
                AppRoutingModule,
                //******* Travel page module ********//
                TravelImageZoomPageModule,
                TravelMapPageModule,
                TravelMapModalPageModule,
                TravelSearchPageModule,
                TravelPlaceReviewAddPageModule,
                //******* Food page module ********//
                FoodSearchPageModule,
                //******* Shopping page module ********//
                ShoppingSearchPageModule,
                // ShoppingImageGalleryPageModule,
                //******* Real estate page module ********//
                RealSearchPageModule,
                RealMapPageModule,
                //******* Radio station page module ********//
                RadioPlayerPageModule,
                //******* UI-components / modal ********//
                ModalDetailPageModule,
                //******* UI-layout / gallery ********//
                GalleryViewerModalPageModule,
                FormsModule,
                ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireAuthModule,
                AngularFirestoreModule,
                AngularFireStorageModule,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map