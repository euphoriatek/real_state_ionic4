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
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RealestateService } from '../../services/realestate.service';
import { IonicComponentService } from '../../services/ionic-component.service';
var RealAgentPage = /** @class */ (function () {
    function RealAgentPage(realestateService, activatedRoute, navController, router, ionicComponentService) {
        this.realestateService = realestateService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.agentId = this.activatedRoute.snapshot.paramMap.get('agentId');
        //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('agentId'));
        //console.log(this.router.url,"Current URL");
    }
    RealAgentPage.prototype.ngOnInit = function () {
        this.agents = this.realestateService.getAgent();
    };
    RealAgentPage = __decorate([
        Component({
            selector: 'app-real-agent',
            templateUrl: './real-agent.page.html',
            styleUrls: ['./real-agent.page.scss'],
        }),
        __metadata("design:paramtypes", [RealestateService,
            ActivatedRoute,
            NavController,
            Router,
            IonicComponentService])
    ], RealAgentPage);
    return RealAgentPage;
}());
export { RealAgentPage };
//# sourceMappingURL=real-agent.page.js.map