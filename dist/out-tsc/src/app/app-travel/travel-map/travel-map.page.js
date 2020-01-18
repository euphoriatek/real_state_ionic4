var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var TravelMapPage = /** @class */ (function () {
    function TravelMapPage(travelService, ionicComponentService, modalController, 
    //private activatedRoute: ActivatedRoute,
    router) {
        this.travelService = travelService;
        this.ionicComponentService = ionicComponentService;
        this.modalController = modalController;
        this.router = router;
        this.viewType = "map";
        this.markerSelected = false;
        //******************** Map style  **************************//
        //***** go to snazzymaps.com for more map style  ***********//
        //**********************************************************//
        this.mapStyle = [{ "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "color": "#faf5ed" }, { "lightness": "0" }, { "gamma": "1" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#bae5a6" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "weight": "1.00" }, { "gamma": "1.8" }, { "saturation": "0" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ffb200" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "lightness": "0" }, { "gamma": "1" }] }, { "featureType": "transit.station.airport", "elementType": "all", "stylers": [{ "hue": "#b000ff" }, { "saturation": "23" }, { "lightness": "-4" }, { "gamma": "0.80" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#a0daf2" }] }];
        this.infoWindows = [];
        // this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
        // console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
    }
    TravelMapPage.prototype.ngOnInit = function () {
        // this.categoryId = this.navParams.get('categoryId');
        // console.log("navParams categoryId ="+this.categoryId);
        this.categoryId = "9lLKKuQwgsgMBM0dkia8";
        this.getPlace();
        // setTimeout(() => {
        //    this.displayGoogleMap(); // call async / await
        // }, 6000);
    };
    TravelMapPage.prototype.goDetail = function (placeId) {
        this.ionicComponentService.presentTimeoutLoading(500, true);
        console.log("...goDetail placeId=" + placeId);
        this.router.navigateByUrl('/travel-place-detail/' + placeId);
    };
    TravelMapPage.prototype.getPlace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("1");
                        this.ionicComponentService.presentLoading();
                        return [4 /*yield*/, this.travelService.getPlaces().subscribe(function (actionArray) {
                                //onsole.log("######################### firebase/ getPlace loaded ="+actionArray);
                                _this.places = actionArray;
                                console.log("+++++++++++++= ........place array=" + JSON.stringify(_this.places));
                                _this.ionicComponentService.dismissLoading();
                                _this.displayGoogleMap(); // call async / await
                            })];
                    case 1:
                        _a.sent();
                        // await setTimeout(() => {
                        //    this.displayGoogleMap(); // call async / await
                        //    loading.dismiss();
                        // }, 2000);
                        console.log("2");
                        return [2 /*return*/];
                }
            });
        });
    };
    TravelMapPage.prototype.displayGoogleMap = function () {
        var latLng = new google.maps.LatLng(13.801532791932946, 100.54677690766607);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            styles: this.mapStyle,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        console.log("call map>>>>>>>");
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // delay or await 
        this.addMarkersToMap();
    };
    TravelMapPage.prototype.addMarkersToMap = function () {
        var _this = this;
        console.log("<>>>>>>> call addMarkeToMap");
        var _loop_1 = function (place) {
            console.log("lat=" + place.lat);
            position = new google.maps.LatLng(place.lat, place.lng);
            markerIcon = {
                url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0) // anchor
            };
            //var markerIcon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
            mapMarker = new google.maps.Marker({
                position: position,
                animation: google.maps.Animation.DROP,
                markerSelected: true,
                title: place.name,
                email: place.email,
                web: place.web,
                phone: place.phone,
                //**** Custom Marker Symbols ****/
                icon: markerIcon,
                anchorPoint: new google.maps.Point(0, -40)
            });
            mapMarker.setMap(this_1.map);
            //this.addInfoWindowToMarker(mapMarker);
            this_1.map.setCenter(position);
            google.maps.event.addListener(mapMarker, 'click', function () {
                _this.goDetail(place.id);
            });
        };
        var this_1 = this, position, markerIcon, mapMarker;
        for (var _i = 0, _a = this.places; _i < _a.length; _i++) {
            var place = _a[_i];
            _loop_1(place);
        }
    };
    TravelMapPage.prototype.addInfoWindowToMarker = function (marker) {
        var _this = this;
        var infoWindowContent = '<div id="iw-container">' +
            '<div class="iw-content">' +
            '<div class="iw-subTitle">' + marker.title + '</div>' +
            '<br><b>Phone:</b> ' + marker.phone + '<br><b>E-mail:</b>' + marker.email + '<br><b>Website:</b> ' + marker.web + '</p>' +
            '</div>' +
            //'<div id="do-something-button">button</div>' +
            '</div>';
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the ' +
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
            'south west of the nearest large town, Alice Springs; 450&#160;km ' +
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
            'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
            'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
            'Aboriginal people of the area. It has many springs, waterholes, ' +
            'rock caves and ancient paintings. Uluru is listed as a World ' +
            'Heritage Site.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>' +
            '</div>';
        // var infoWindowContent = '<div id="iw-container">' +               
        //                         '<div class="iw-content">' +
        //                               '<div class="iw-subTitle">'+marker.title+'</div>' +                                  
        //                               '<br><b>Phone:</b> '+marker.phone+'<br><b>E-mail:</b>'+marker.email+'<br><b>Website:</b> '+marker.web+'</p>'+
        //                         '</div>' +
        //                         //'<div id="do-something-button">button</div>' +
        //                     '</div>';    
        var infoWindow = new google.maps.InfoWindow();
        // infoWindow.setOptions({
        //     disableAutoPan:false
        // }); 
        infoWindow.setContent(infoWindowContent);
        marker.addListener('click', function () {
            _this.closeAllInfoWindows();
            infoWindow.open(_this.map, marker);
            // add listener that will capture the click event of the infoWindow
            // google.maps.event.addListener(infoWindow, 'domready', () => {
            //   document.getElementById('do-something-button').addEventListener('click', () => {
            //      this.doSomething();
            //   });
            // }); 
        });
        this.infoWindows.push(infoWindow);
    };
    TravelMapPage.prototype.doSomething = function () {
        console.log("doSomething");
    };
    TravelMapPage.prototype.closeAllInfoWindows = function () {
        for (var _i = 0, _a = this.infoWindows; _i < _a.length; _i++) {
            var window_1 = _a[_i];
            window_1.close();
        }
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], TravelMapPage.prototype, "mapElement", void 0);
    TravelMapPage = __decorate([
        Component({
            selector: 'app-travel-map',
            templateUrl: './travel-map.page.html',
            styleUrls: ['./travel-map.page.scss'],
        }),
        __metadata("design:paramtypes", [TravelService,
            IonicComponentService,
            ModalController,
            Router])
    ], TravelMapPage);
    return TravelMapPage;
}());
export { TravelMapPage };
//# sourceMappingURL=travel-map.page.js.map