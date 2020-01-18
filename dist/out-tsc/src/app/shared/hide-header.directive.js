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
// See more detail : https://stackoverflow.com/questions/52744930/ionic-4-hide-toolbar-on-scroll
import { IonContent, DomController } from '@ionic/angular';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var HideHeaderDirective = /** @class */ (function () {
    function HideHeaderDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastValue = 0;
    }
    HideHeaderDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.scrollContent && this.config) {
            this.scrollContent.scrollEvents = true;
            var scrollStartFunc = function (ev) { return __awaiter(_this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.scrollContent.getScrollElement()];
                        case 1:
                            el = _a.sent();
                            this.contentHeight = el.offsetHeight;
                            this.scrollHeight = el.scrollHeight;
                            if (this.config.maxValue === undefined) {
                                this.config.maxValue = this.element.nativeElement.offsetHeight;
                            }
                            this.lastScrollPosition = el.scrollTop;
                            return [2 /*return*/];
                    }
                });
            }); };
            if (this.scrollContent && this.scrollContent instanceof IonContent) {
                this.scrollContent.ionScrollStart.subscribe(scrollStartFunc);
                this.scrollContent.ionScroll.subscribe(function (ev) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.adjustElementOnScroll(ev)];
                }); }); });
                this.scrollContent.ionScrollEnd.subscribe(function (ev) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.adjustElementOnScroll(ev)];
                }); }); });
            }
            else if (this.scrollContent instanceof HTMLElement) {
                this.scrollContent.addEventListener('ionScrollStart', scrollStartFunc);
                this.scrollContent.addEventListener('ionScroll', function (ev) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.adjustElementOnScroll(ev)];
                }); }); });
                this.scrollContent.addEventListener('ionScrollEnd', function (ev) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.adjustElementOnScroll(ev)];
                }); }); });
            }
        }
    };
    HideHeaderDirective.prototype.adjustElementOnScroll = function (ev) {
        var _this = this;
        if (ev) {
            this.domCtrl.write(function () { return __awaiter(_this, void 0, void 0, function () {
                var el, scrollTop, scrolldiff, newValue;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.scrollContent.getScrollElement()];
                        case 1:
                            el = _a.sent();
                            scrollTop = el.scrollTop > 0 ? el.scrollTop : 0;
                            scrolldiff = scrollTop - this.lastScrollPosition;
                            this.lastScrollPosition = scrollTop;
                            newValue = this.lastValue + scrolldiff;
                            newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
                            this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, "-" + newValue + "px");
                            this.lastValue = newValue;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    __decorate([
        Input('scrollHide'),
        __metadata("design:type", Object)
    ], HideHeaderDirective.prototype, "config", void 0);
    __decorate([
        Input('scrollContent'),
        __metadata("design:type", IonContent)
    ], HideHeaderDirective.prototype, "scrollContent", void 0);
    HideHeaderDirective = __decorate([
        Directive({
            selector: '[scrollHide]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2, DomController])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());
export { HideHeaderDirective };
//# sourceMappingURL=hide-header.directive.js.map