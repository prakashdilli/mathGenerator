webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/analytics/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AnalyticsService = (function () {
    function AnalyticsService() {
    }
    AnalyticsService.prototype.trackEventWithCategory = function (category, eventName, eventParameters) {
        var parameters = eventParameters || {};
        parameters['event_category'] = category;
        this.trackEvent(eventName, parameters);
    };
    AnalyticsService.prototype.trackEvent = function (eventName, eventParameters) {
        if (eventParameters) {
            gtag('event', eventName, eventParameters);
        }
        else {
            gtag('event', eventName);
        }
    };
    AnalyticsService.prototype.trackPage = function (url) {
        gtag('config', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].analytics.trackingId, { 'page_path': url });
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AnalyticsService);

//# sourceMappingURL=analytics.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__worksheet_generator_worksheet_generator_component__ = __webpack_require__("../../../../../src/app/worksheet-generator/worksheet-generator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'worksheet-generator',
        component: __WEBPACK_IMPORTED_MODULE_2__worksheet_generator_worksheet_generator_component__["a" /* WorksheetGeneratorComponent */]
    },
    {
        path: 'worksheet-generator/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__worksheet_generator_worksheet_generator_component__["a" /* WorksheetGeneratorComponent */]
    },
    {
        path: '',
        redirectTo: '/worksheet-generator',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__ = __webpack_require__("../../../../../src/app/analytics/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, analytics) {
        var _this = this;
        this.router = router;
        this.analytics = analytics;
        this.title = 'app';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.analytics.trackPage(event.urlAfterRedirects);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__["a" /* AnalyticsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__analytics_analytics_service__ = __webpack_require__("../../../../../src/app/analytics/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__worksheet_generator_worksheet_generator_component__ = __webpack_require__("../../../../../src/app/worksheet-generator/worksheet-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__worksheet_worksheet_service__ = __webpack_require__("../../../../../src/app/worksheet/worksheet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_material_component_module__ = __webpack_require__("../../../../../src/app/material/material-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__worksheet_generator_worksheet_generator_component__["a" /* WorksheetGeneratorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__safe_pipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__material_material_component_module__["a" /* MaterialComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_13__worksheet_worksheet_service__["a" /* WorksheetService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.loginAnonymous = function () {
        return this.afAuth.auth.signInAnonymously();
    };
    AuthService.prototype.login = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/material/material-component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NgModel } from '@angular/forms';

var MaterialComponentModule = (function () {
    function MaterialComponentModule() {
    }
    return MaterialComponentModule;
}());
MaterialComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdTooltipModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdTooltipModule */]
        ]
    })
], MaterialComponentModule);

//# sourceMappingURL=material-component.module.js.map

/***/ }),

/***/ "../../../../../src/app/options/addition-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__ = __webpack_require__("../../../../../src/app/options/minimum-maximum-range.ts");

var AdditionOptions = (function () {
    function AdditionOptions() {
        this.addendRanges = [];
        this.enabled = true;
        this.addendRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](100, 999));
        this.addendRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 100));
    }
    Object.defineProperty(AdditionOptions.prototype, "numberOfAddends", {
        get: function () {
            return this.addendRanges.length;
        },
        enumerable: true,
        configurable: true
    });
    AdditionOptions.prototype.addAddend = function () {
        this.addendRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 100));
    };
    AdditionOptions.prototype.removeAddend = function () {
        this.addendRanges.splice(this.addendRanges.length - 1, 1);
    };
    AdditionOptions.prototype.updateFromJson = function (jsonObject) {
        this.addendRanges = jsonObject.addendRanges;
        this.enabled = jsonObject.enabled;
    };
    return AdditionOptions;
}());

//# sourceMappingURL=addition-options.js.map

/***/ }),

/***/ "../../../../../src/app/options/division-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__ = __webpack_require__("../../../../../src/app/options/minimum-maximum-range.ts");

var DivisionOptions = (function () {
    function DivisionOptions() {
        this.decimalPlaces = 2;
        this.dividendRange = new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](100, 200);
        this.divisorRange = new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 20);
        this.enabled = false;
        this.showDecimals = true;
        this.showRemainders = false;
    }
    DivisionOptions.prototype.updateFromJson = function (jsonObject) {
        this.decimalPlaces = jsonObject.decimalPlaces;
        this.dividendRange = jsonObject.dividendRange;
        this.divisorRange = jsonObject.divisorRange;
        this.enabled = jsonObject.enabled;
        this.showDecimals = jsonObject.showDecimals;
        this.showRemainders = jsonObject.showRemainders;
    };
    return DivisionOptions;
}());

//# sourceMappingURL=division-options.js.map

/***/ }),

/***/ "../../../../../src/app/options/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addition_options__ = __webpack_require__("../../../../../src/app/options/addition-options.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__division_options__ = __webpack_require__("../../../../../src/app/options/division-options.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiplication_options__ = __webpack_require__("../../../../../src/app/options/multiplication-options.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subtraction_options__ = __webpack_require__("../../../../../src/app/options/subtraction-options.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minimum_maximum_range__ = __webpack_require__("../../../../../src/app/options/minimum-maximum-range.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__worksheet_options__ = __webpack_require__("../../../../../src/app/options/worksheet-options.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__worksheet_options__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/options/minimum-maximum-range.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinimumMaximumRange; });
var MinimumMaximumRange = (function () {
    function MinimumMaximumRange(min, max) {
        this.min = min;
        this.max = max;
    }
    return MinimumMaximumRange;
}());

//# sourceMappingURL=minimum-maximum-range.js.map

/***/ }),

/***/ "../../../../../src/app/options/multiplication-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplicationOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__ = __webpack_require__("../../../../../src/app/options/minimum-maximum-range.ts");

var MultiplicationOptions = (function () {
    function MultiplicationOptions() {
        this.enabled = false;
        this.factorRanges = [];
        this.factorRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](100, 200));
        this.factorRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 20));
    }
    Object.defineProperty(MultiplicationOptions.prototype, "numberOfFactors", {
        get: function () {
            return this.factorRanges.length;
        },
        enumerable: true,
        configurable: true
    });
    MultiplicationOptions.prototype.addFactor = function () {
        this.factorRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 20));
    };
    MultiplicationOptions.prototype.removeFactor = function () {
        this.factorRanges.splice(this.factorRanges.length - 1, 1);
    };
    MultiplicationOptions.prototype.updateFromJson = function (jsonObject) {
        this.enabled = jsonObject.enabled;
        this.factorRanges = jsonObject.factorRanges;
    };
    return MultiplicationOptions;
}());

//# sourceMappingURL=multiplication-options.js.map

/***/ }),

/***/ "../../../../../src/app/options/subtraction-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtractionOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__ = __webpack_require__("../../../../../src/app/options/minimum-maximum-range.ts");

var SubtractionOptions = (function () {
    function SubtractionOptions() {
        this.allowNegativeAnswers = false;
        this.enabled = false;
        this.minuendRange = new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](100, 200);
        this.subtrahendRanges = [];
        this.subtrahendRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 100));
    }
    Object.defineProperty(SubtractionOptions.prototype, "numberOfSubtrahends", {
        get: function () {
            return this.subtrahendRanges.length;
        },
        enumerable: true,
        configurable: true
    });
    SubtractionOptions.prototype.addSubtrahend = function () {
        this.subtrahendRanges.push(new __WEBPACK_IMPORTED_MODULE_0__minimum_maximum_range__["a" /* MinimumMaximumRange */](1, 20));
    };
    SubtractionOptions.prototype.removeSubtrahend = function () {
        this.subtrahendRanges.splice(this.subtrahendRanges.length - 1, 1);
    };
    SubtractionOptions.prototype.updateFromJson = function (jsonObject) {
        this.allowNegativeAnswers = jsonObject.allowNegativeAnswers;
        this.enabled = jsonObject.enabled;
        this.minuendRange = jsonObject.minuendRange;
        this.subtrahendRanges = jsonObject.subtrahendRanges;
    };
    return SubtractionOptions;
}());

//# sourceMappingURL=subtraction-options.js.map

/***/ }),

/***/ "../../../../../src/app/options/worksheet-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksheetOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addition_options__ = __webpack_require__("../../../../../src/app/options/addition-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__division_options__ = __webpack_require__("../../../../../src/app/options/division-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiplication_options__ = __webpack_require__("../../../../../src/app/options/multiplication-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subtraction_options__ = __webpack_require__("../../../../../src/app/options/subtraction-options.ts");




var WorksheetOptions = (function () {
    function WorksheetOptions() {
        this.additionOptions = new __WEBPACK_IMPORTED_MODULE_0__addition_options__["a" /* AdditionOptions */]();
        this.divisionOptions = new __WEBPACK_IMPORTED_MODULE_1__division_options__["a" /* DivisionOptions */]();
        this.instructions = 'Complete the following problems. Show all of your work.';
        this.landscape = false;
        this.letterSpacing = 3;
        this.lineSpacing = 5;
        this.multiplicationOptions = new __WEBPACK_IMPORTED_MODULE_2__multiplication_options__["a" /* MultiplicationOptions */]();
        this.problemCount = 25;
        this.problemFontSize = 2;
        this.problemsPerRow = 5;
        this.showAnswers = false;
        this.showDateLine = true;
        this.showInstructions = true;
        this.showNameLine = true;
        this.showProblemNumbers = true;
        this.showTitle = true;
        this.subtractionOptions = new __WEBPACK_IMPORTED_MODULE_3__subtraction_options__["a" /* SubtractionOptions */]();
        this.title = 'Math Worksheet';
    }
    WorksheetOptions.prototype.updateFromJson = function (jsonObject) {
        this.additionOptions.updateFromJson(jsonObject.additionOptions);
        this.divisionOptions.updateFromJson(jsonObject.divisionOptions);
        this.instructions = 'Complete the following problems. Show all of your work.';
        this.landscape = jsonObject.landscape;
        this.letterSpacing = jsonObject.letterSpacing;
        this.lineSpacing = jsonObject.lineSpacing;
        this.problemCount = jsonObject.problemCount;
        this.problemFontSize = jsonObject.problemFontSize;
        this.problemsPerRow = jsonObject.problemsPerRow;
        this.showAnswers = jsonObject.showAnswers;
        this.showDateLine = jsonObject.showDateLine;
        this.showInstructions = jsonObject.showInstructions;
        this.showNameLine = jsonObject.showNameLine;
        this.showProblemNumbers = jsonObject.showProblemNumbers;
        this.showTitle = jsonObject.showTitle;
        this.title = jsonObject.title;
        this.multiplicationOptions.updateFromJson(jsonObject.multiplicationOptions);
        this.subtractionOptions.updateFromJson(jsonObject.subtractionOptions);
    };
    return WorksheetOptions;
}());

//# sourceMappingURL=worksheet-options.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/worksheet-generator/worksheet-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"worksheet\">\n  <div class=\"worksheet-sidebar mat-elevation-z5 d-print-none\">\n    <form #optionsForm=\"ngForm\">\n      <md-card class=\"worksheet-options mat-elevation-z0\">\n        <md-card-title>\n          Worksheet Options\n        </md-card-title>\n        <md-card-subtitle>\n          Adjust the options for the worksheet\n        </md-card-subtitle>\n        <md-card-content>\n          <md-accordion>\n            <md-expansion-panel class=\"worksheet-options__panel-problem-options mat-elevation-z0\" expanded=\"true\">\n              <md-expansion-panel-header>\n                <md-panel-title>\n                  Problem Type Options\n                </md-panel-title>\n              </md-expansion-panel-header>\n              <md-form-field>\n                <input mdInput #problemCount=\"ngModel\" type=\"number\" placeholder=\"Number of Problems\" name=\"problemCount\" value=\"20\" required [(ngModel)]=\"worksheetService.options.problemCount\">\n                <md-error [hidden]=\"problemCount.valid || problemCount.pristine\">\n                  Number of Problems must be provided\n                </md-error>\n              </md-form-field>\n              <div class=\"worksheet-options__problem-type\" [class.worksheet-options__problem-type--enabled]=\"worksheetService.options.additionOptions.enabled\">\n                <md-slide-toggle color=\"primary\" name=\"additionEnabled\" [(ngModel)]=\"worksheetService.options.additionOptions.enabled\">Addition</md-slide-toggle>\n                <div *ngIf=\"worksheetService.options.additionOptions.enabled\">\n                  Number of addends\n                  <br>\n                  <md-slider color=\"primary\" min=\"2\" max=\"5\" [value]=\"numberOfAddends\" (input)=\"numberOfAddendsSliderChange($event)\"></md-slider> {{numberOfAddends}}\n                  <div class=\"worksheet-option__range-min-max\" *ngFor=\"let addend of worksheetService.options.additionOptions.addendRanges; index as i\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Addend {{i+1}} Minimum\" name=\"addend-{{i}}-min\" required [(ngModel)]=\"addend.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"addend-{{i}}-max\" required [(ngModel)]=\"addend.max\">\n                    </md-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"worksheet-options__problem-type\" [class.worksheet-options__problem-type--enabled]=\"worksheetService.options.subtractionOptions.enabled\">\n                <md-slide-toggle color=\"primary\" name=\"subtractionEnabled\" [(ngModel)]=\"worksheetService.options.subtractionOptions.enabled\">Subtraction</md-slide-toggle>\n                <div *ngIf=\"worksheetService.options.subtractionOptions.enabled\">\n                  <div class=\"worksheet-option__range-min-max\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Minuend Minimum\" name=\"minuend-min\" required [(ngModel)]=\"worksheetService.options.subtractionOptions.minuendRange.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"minuend-max\" required [(ngModel)]=\"worksheetService.options.subtractionOptions.minuendRange.max\">\n                    </md-form-field>\n                  </div>\n                  Number of subtrahends\n                  <br>\n                  <md-slider color=\"primary\" min=\"1\" max=\"4\" [value]=\"numberOfSubtrahends\" (input)=\"numberOfSubtrahendsSliderChange($event)\"></md-slider> {{numberOfSubtrahends}}\n                  <div class=\"worksheet-option__range-min-max\" *ngFor=\"let subtrahend of worksheetService.options.subtractionOptions.subtrahendRanges; index as i\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Subtrahend {{i+1}} Minimum\" name=\"subtrahend-{{i}}-min\" required [(ngModel)]=\"subtrahend.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"subtrahend-{{i}}-max\" required [(ngModel)]=\"subtrahend.max\">\n                    </md-form-field>\n                  </div>\n                  <md-slide-toggle color=\"warn\" name=\"allowNegativeAnswers\" [(ngModel)]=\"worksheetService.options.subtractionOptions.allowNegativeAnswers\">Allow negative answers</md-slide-toggle>\n                </div>\n              </div>\n              <div class=\"worksheet-options__problem-type\" [class.worksheet-options__problem-type--enabled]=\"worksheetService.options.multiplicationOptions.enabled\">\n                <md-slide-toggle color=\"primary\" name=\"multiplicationEnabled\" [(ngModel)]=\"worksheetService.options.multiplicationOptions.enabled\">Multiplication</md-slide-toggle>\n                <div *ngIf=\"worksheetService.options.multiplicationOptions.enabled\">\n                  Number of factors\n                  <br>\n                  <md-slider color=\"primary\" min=\"2\" max=\"5\" [value]=\"numberOfFactors\" (input)=\"numberOfFactorsSliderChange($event)\"></md-slider> {{numberOfFactors}}\n                  <div class=\"worksheet-option__range-min-max\" *ngFor=\"let factor of worksheetService.options.multiplicationOptions.factorRanges; index as i\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Factor {{i+1}} Minimum\" name=\"factor-{{i}}-min\" required [(ngModel)]=\"factor.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"factor-{{i}}-max\" required [(ngModel)]=\"factor.max\">\n                    </md-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"worksheet-options__problem-type\" [class.worksheet-options__problem-type--enabled]=\"worksheetService.options.divisionOptions.enabled\">\n                <md-slide-toggle color=\"primary\" name=\"divisionEnabled\" [(ngModel)]=\"worksheetService.options.divisionOptions.enabled\">Division</md-slide-toggle>\n                <div *ngIf=\"worksheetService.options.divisionOptions.enabled\">\n                  <div class=\"worksheet-option__range-min-max\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Divisor Minimum\" name=\"divisor-min\" required [(ngModel)]=\"worksheetService.options.divisionOptions.divisorRange.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"divisor-max\" required [(ngModel)]=\"worksheetService.options.divisionOptions.divisorRange.max\">\n                    </md-form-field>\n                  </div>\n                  <div class=\"worksheet-option__range-min-max\">\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Dividend Minimum\" name=\"dividend-min\" required [(ngModel)]=\"worksheetService.options.divisionOptions.dividendRange.min\">\n                    </md-form-field>\n                    <md-form-field>\n                      <input mdInput type=\"number\" placeholder=\"Maximum\" name=\"dividend-max\" required [(ngModel)]=\"worksheetService.options.divisionOptions.dividendRange.max\">\n                    </md-form-field>\n                  </div>\n                  <md-slide-toggle color=\"warn\" name=\"divisionDecimalsEnabled\" (change)=\"showDecimalsChange($event)\" [(ngModel)]=\"worksheetService.options.divisionOptions.showDecimals\">Show decimals</md-slide-toggle>\n                  <div *ngIf=\"worksheetService.options.divisionOptions.showDecimals\">\n                    Decimal places\n                    <br>\n                    <md-slider color=\"warn\" min=\"0\" max=\"5\" [value]=\"numberOfDecimals\" (input)=\"numberOfDecimalsSliderChange($event)\"></md-slider> {{numberOfDecimals}}\n                  </div>\n                  <br>\n                  <md-slide-toggle color=\"warn\" name=\"divisionRemaindersEnabled\" (change)=\"showRemaindersChange($event)\" [(ngModel)]=\"worksheetService.options.divisionOptions.showRemainders\">Show remainders</md-slide-toggle>\n                </div>\n              </div>\n            </md-expansion-panel>\n            <md-expansion-panel class=\"worksheet-options__panel-display-options mat-elevation-z0\">\n              <md-expansion-panel-header>\n                <md-panel-title>\n                  Display Options\n                </md-panel-title>\n              </md-expansion-panel-header>\n              <div>\n                Problems per row\n                <br>\n                <md-slider color=\"primary\" min=\"1\" max=\"10\" [value]=\"problemsPerRow\" (input)=\"problemsPerRowSliderChange($event)\"></md-slider> {{problemsPerRow}}\n              </div>\n              <div>\n                Problem font size\n                <br>\n                <md-slider color=\"primary\" min=\"1\" max=\"6\" [value]=\"problemFontSize\" (input)=\"problemFontSizeSliderChange($event)\"></md-slider> {{problemFontSize}}\n              </div>\n              <div>\n                Problem letter spacing\n                <br>\n                <md-slider color=\"primary\" min=\"1\" max=\"10\" [value]=\"letterSpacing\" (input)=\"letterSpacingSliderChange($event)\"></md-slider> {{letterSpacing}}\n              </div>\n              <div>\n                Line spacing\n                <br>\n                <md-slider color=\"primary\" min=\"1\" max=\"10\" [value]=\"lineSpacing\" (input)=\"lineSpacingSliderChange($event)\"></md-slider> {{lineSpacing}}\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showNameLine\" [(ngModel)]=\"worksheetService.options.showNameLine\">Show name line</md-slide-toggle>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showDateLine\" [(ngModel)]=\"worksheetService.options.showDateLine\">Show date line</md-slide-toggle>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showTitle\" [(ngModel)]=\"worksheetService.options.showTitle\">Show title</md-slide-toggle>\n                <br>\n                <md-form-field *ngIf=\"worksheetService.options.showTitle\">\n                  <input mdInput #title=\"ngModel\" type=\"text\" placeholder=\"Title\" name=\"title\" required [(ngModel)]=\"worksheetService.options.title\">\n                  <md-error [hidden]=\"title.valid || title.pristine\">\n                    A title must be provided\n                  </md-error>\n                </md-form-field>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showInstructions\" [(ngModel)]=\"worksheetService.options.showInstructions\">Show instructions</md-slide-toggle>\n                <br>\n                <md-form-field *ngIf=\"worksheetService.options.showInstructions\">\n                  <input mdInput #instructions=\"ngModel\" type=\"text\" placeholder=\"Instructions\" name=\"instructions\" required [(ngModel)]=\"worksheetService.options.instructions\">\n                  <md-error [hidden]=\"instructions.valid || instructions.pristine\">\n                    Instructions must be provided\n                  </md-error>\n                </md-form-field>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showProblemNumbers\" [(ngModel)]=\"worksheetService.options.showProblemNumbers\">Show problem numbers</md-slide-toggle>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"showAnswers\" [(ngModel)]=\"worksheetService.options.showAnswers\">Show answers</md-slide-toggle>\n              </div>\n              <div>\n                <md-slide-toggle color=\"primary\" name=\"landscape\" [(ngModel)]=\"worksheetService.options.landscape\" mdTooltip=\"This is a preview only. You will have to adjust your printer settings to print in landscape mode.\" mdTooltipPosition=\"right\">Landscape preview</md-slide-toggle>\n              </div>\n            </md-expansion-panel>\n          </md-accordion>\n        </md-card-content>\n      </md-card>\n    </form>\n  </div>\n  <div class=\"worksheet-content\" id=\"worksheet-content\">\n    <md-card class=\"worksheet__card\" [class.worksheet__card--landscape]=\"worksheetService.options.landscape\" *ngIf=\"worksheetService.problems.length\">\n      <md-card-content>\n        <h2 class=\"worksheet__name-date clearfix\" *ngIf=\"worksheetService.options.showNameLine || worksheetService.options.showDateLine\">\n          <span class=\"worksheet__name\" *ngIf=\"worksheetService.options.showNameLine\">Name:</span>\n          <span class=\"worksheet__date\" *ngIf=\"worksheetService.options.showDateLine\">Date:</span>\n        </h2>\n        <h1 class=\"worksheet__title\" *ngIf=\"worksheetService.options.showTitle\">{{worksheetService.options.title}}</h1>\n        <h3 class=\"worksheet__instructions\" *ngIf=\"worksheetService.options.showInstructions\">{{worksheetService.options.instructions}}</h3>\n        <div class=\"math-problems\" [ngClass]=\"mathProblemsClasses\">\n          <div class=\"math-problem\" *ngFor=\"let problem of worksheetService.problems; index as i\">\n            <div class=\"math-problem__problem\">\n              <div class=\"math-problem__number\" *ngIf=\"worksheetService.options.showProblemNumbers\">{{i+1}}.</div>\n              <div class=\"math-problem__symbol\">{{ problem.symbol }}</div>\n              <div class=\"math-problem__value\" *ngFor=\"let value of problem.values\">{{ value }}</div>\n              <div class=\"math-problem__answer\" *ngIf=\"worksheetService.options.showAnswers\">\n                <ng-container *ngIf=\"isDivisionProblem(problem)\">\n                  <ng-container *ngIf=\"worksheetService.options.divisionOptions.showRemainders\">{{problem.answerFloored}}<strong>r</strong>{{problem.remainder}}</ng-container>\n                  <ng-container *ngIf=\"!worksheetService.options.divisionOptions.showRemainders\">{{problem.answer | number:getDivisionNumberFormat()}}</ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"!isDivisionProblem(problem)\">{{ problem.answer }}</ng-container>\n              </div>\n              <div class=\"math-problem__answer\" *ngIf=\"!worksheetService.options.showAnswers\">&nbsp;</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"worksheet__id\" *ngIf=\"worksheetService.id\">Worksheet Id: {{worksheetService.id}}</div>\n      </md-card-content>\n    </md-card>\n    <div class=\"worksheet-display-disclaimer mat-elevation-z5 d-print-none\" *ngIf=\"worksheetService.problems.length\">\n      The view shown here is meant to simulate a printed page (8.5x11 inch standard US paper size).\n      <br>\n      Your actual printout may look different depending on a number of factors including printer settings.\n    </div>\n    <button class=\"worksheet__print-button d-print-none\" md-fab color=\"accent\" *ngIf=\"worksheetService.problems.length\">\n      <md-icon class=\"md-24\" aria-label=\"Print the worksheet\" (click)=\"print()\">print</md-icon>\n    </button>\n    <button class=\"worksheet__save-button d-print-none\" md-fab color=\"primary\" *ngIf=\"worksheetService.problems.length && (authService.user | async)?.uid\">\n      <!-- <md-icon class=\"md-24\" aria-label=\"Save the worksheet\" (click)=\"downloadPdf()\">save</md-icon> -->\n      <!-- <md-icon class=\"md-24\" aria-label=\"Save the worksheet\" (click)=\"save()\">save</md-icon> -->\n    </button>\n  </div>\n</div>\n<div class=\"worksheet__generate mat-elevation-z5 d-print-none\">\n  <button type=\"button\" md-raised-button color=\"primary\" (click)=\"generateWorksheet()\" [disabled]=\"!optionsForm.form.valid\">Generate Worksheet</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/worksheet-generator/worksheet-generator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".worksheet {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  position: relative; }\n\n.worksheet-content {\n  background-color: #78909C;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  position: relative; }\n\n.worksheet-display-disclaimer {\n  background-color: #F44336;\n  color: #fff;\n  font-size: .875rem;\n  font-style: italic;\n  left: 0;\n  padding: .5rem 1rem;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0; }\n\n.worksheet-option__range-min-max .mat-form-field {\n  width: 75px; }\n  .worksheet-option__range-min-max .mat-form-field:first-child {\n    margin-right: 10px;\n    width: 125px; }\n\n.worksheet-options .mat-expansion-panel {\n  background-color: transparent;\n  border-top: 1px solid #ccc;\n  margin: 0 -24px;\n  transition: background 250ms ease; }\n  .worksheet-options .mat-expansion-panel:last-of-type {\n    border-bottom: 1px solid #ccc; }\n\n.worksheet-options__problem-type {\n  border: 1px solid transparent;\n  margin-left: -24px;\n  margin-right: -24px;\n  padding: 5px 24px;\n  transition: background 250ms ease, border-color 250ms ease, padding 250ms ease; }\n\n.worksheet-options__problem-type--enabled {\n  background-color: #f5f5f5;\n  border-bottom-color: #adb5bd;\n  border-top-color: #adb5bd;\n  padding-bottom: 10px;\n  padding-top: 10px; }\n  .worksheet-options__problem-type--enabled:nth-child(odd) {\n    background-color: #eee; }\n  .worksheet-options__problem-type--enabled + .worksheet-options__problem-type--enabled {\n    border-top-color: transparent; }\n\n.worksheet-sidebar {\n  background-color: #fff;\n  height: calc(100% - 84px);\n  overflow-y: auto;\n  position: relative;\n  width: 300px; }\n\n.worksheet__generate {\n  background-color: #fff;\n  left: 0;\n  padding: 24px;\n  position: fixed;\n  bottom: 0;\n  width: 300px;\n  z-index: 10; }\n  .worksheet__generate button {\n    display: block;\n    font-weight: 400;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    width: 100%; }\n\n.worksheet__card {\n  height: auto;\n  margin: 75px auto 1rem;\n  padding: 2rem;\n  padding-top: 120px;\n  width: 511pt; }\n\n.worksheet__card--landscape {\n  height: auto;\n  width: 660pt; }\n\n.worksheet__instructions {\n  font-weight: 400;\n  margin: 0;\n  text-align: center; }\n\n.worksheet__name-date {\n  font-weight: 500;\n  margin: 0; }\n\n.worksheet__date {\n  float: right;\n  text-align: right;\n  width: 45%; }\n  .worksheet__date:after {\n    border-bottom: 2px solid #000;\n    content: \"\";\n    display: inline-block;\n    margin-left: .5rem;\n    width: 50%; }\n\n.worksheet__id {\n  bottom: 0;\n  font-style: italic;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.worksheet__name {\n  float: left;\n  text-align: left;\n  width: 50%; }\n  .worksheet__name:after {\n    border-bottom: 2px solid #000;\n    content: \"\";\n    display: inline-block;\n    margin-left: .5rem;\n    width: 75%; }\n\n.worksheet__print-button {\n  bottom: 2rem;\n  position: fixed;\n  right: 2rem;\n  z-index: 10; }\n\n.worksheet__save-button {\n  bottom: 7rem;\n  position: fixed;\n  right: 2rem;\n  z-index: 10; }\n\n.worksheet__title {\n  font-weight: 500;\n  margin: 0;\n  text-align: center; }\n\n.math-problem {\n  box-sizing: border-box;\n  margin-top: 1rem;\n  text-align: center;\n  transition: font-size 250ms ease, margin 250ms ease, width 250ms ease;\n  width: 20%; }\n  .math-problems--columns-1 .math-problem {\n    width: 100%; }\n    .math-problems--columns-1 .math-problem:nth-child(-n+1) {\n      margin-top: 0; }\n  .math-problems--columns-2 .math-problem {\n    width: 50%; }\n    .math-problems--columns-2 .math-problem:nth-child(-n+2) {\n      margin-top: 0; }\n  .math-problems--columns-3 .math-problem {\n    width: 33.33333333%; }\n    .math-problems--columns-3 .math-problem:nth-child(-n+3) {\n      margin-top: 0; }\n  .math-problems--columns-4 .math-problem {\n    width: 25%; }\n    .math-problems--columns-4 .math-problem:nth-child(-n+4) {\n      margin-top: 0; }\n  .math-problems--columns-5 .math-problem {\n    width: 20%; }\n    .math-problems--columns-5 .math-problem:nth-child(-n+5) {\n      margin-top: 0; }\n  .math-problems--columns-6 .math-problem {\n    width: 16.66666667%; }\n    .math-problems--columns-6 .math-problem:nth-child(-n+6) {\n      margin-top: 0; }\n  .math-problems--columns-7 .math-problem {\n    width: 14.28571429%; }\n    .math-problems--columns-7 .math-problem:nth-child(-n+7) {\n      margin-top: 0; }\n  .math-problems--columns-8 .math-problem {\n    width: 12.5%; }\n    .math-problems--columns-8 .math-problem:nth-child(-n+8) {\n      margin-top: 0; }\n  .math-problems--columns-9 .math-problem {\n    width: 11.11111111%; }\n    .math-problems--columns-9 .math-problem:nth-child(-n+9) {\n      margin-top: 0; }\n  .math-problems--columns-10 .math-problem {\n    width: 10%; }\n    .math-problems--columns-10 .math-problem:nth-child(-n+10) {\n      margin-top: 0; }\n  .math-problems--font-size-1 .math-problem {\n    font-size: 0.75rem; }\n  .math-problems--font-size-2 .math-problem {\n    font-size: 1rem; }\n  .math-problems--font-size-3 .math-problem {\n    font-size: 1.25rem; }\n  .math-problems--font-size-4 .math-problem {\n    font-size: 1.5rem; }\n  .math-problems--font-size-5 .math-problem {\n    font-size: 1.75rem; }\n  .math-problems--font-size-6 .math-problem {\n    font-size: 2rem; }\n  .math-problems--line-spacing-1 .math-problem {\n    margin-top: 14px; }\n  .math-problems--line-spacing-2 .math-problem {\n    margin-top: 28px; }\n  .math-problems--line-spacing-3 .math-problem {\n    margin-top: 42px; }\n  .math-problems--line-spacing-4 .math-problem {\n    margin-top: 56px; }\n  .math-problems--line-spacing-5 .math-problem {\n    margin-top: 70px; }\n  .math-problems--line-spacing-6 .math-problem {\n    margin-top: 84px; }\n  .math-problems--line-spacing-7 .math-problem {\n    margin-top: 98px; }\n  .math-problems--line-spacing-8 .math-problem {\n    margin-top: 112px; }\n  .math-problems--line-spacing-9 .math-problem {\n    margin-top: 126px; }\n  .math-problems--line-spacing-10 .math-problem {\n    margin-top: 140px; }\n\n.math-problem__answer {\n  border-top: 2px solid #000;\n  color: #E91E63;\n  text-align: right; }\n\n.math-problem__number {\n  font-weight: 500;\n  left: 0;\n  position: absolute;\n  text-align: right;\n  top: 0;\n  width: 2em; }\n\n.math-problem__problem {\n  display: inline-block;\n  padding-left: 2em;\n  position: relative;\n  text-align: left; }\n\n.math-problem__symbol {\n  bottom: 1.5em;\n  left: 2em;\n  position: absolute; }\n\n.math-problem__value {\n  padding-left: 1em;\n  text-align: right; }\n\n.math-problems--letter-spacing-0 .math-problem__answer, .math-problems--letter-spacing-0\n.math-problem__value {\n  letter-spacing: 0px; }\n\n.math-problems--letter-spacing-1 .math-problem__answer, .math-problems--letter-spacing-1\n.math-problem__value {\n  letter-spacing: 1px; }\n\n.math-problems--letter-spacing-2 .math-problem__answer, .math-problems--letter-spacing-2\n.math-problem__value {\n  letter-spacing: 2px; }\n\n.math-problems--letter-spacing-3 .math-problem__answer, .math-problems--letter-spacing-3\n.math-problem__value {\n  letter-spacing: 3px; }\n\n.math-problems--letter-spacing-4 .math-problem__answer, .math-problems--letter-spacing-4\n.math-problem__value {\n  letter-spacing: 4px; }\n\n.math-problems--letter-spacing-5 .math-problem__answer, .math-problems--letter-spacing-5\n.math-problem__value {\n  letter-spacing: 5px; }\n\n.math-problems--letter-spacing-6 .math-problem__answer, .math-problems--letter-spacing-6\n.math-problem__value {\n  letter-spacing: 6px; }\n\n.math-problems--letter-spacing-7 .math-problem__answer, .math-problems--letter-spacing-7\n.math-problem__value {\n  letter-spacing: 7px; }\n\n.math-problems--letter-spacing-8 .math-problem__answer, .math-problems--letter-spacing-8\n.math-problem__value {\n  letter-spacing: 8px; }\n\n.math-problems--letter-spacing-9 .math-problem__answer, .math-problems--letter-spacing-9\n.math-problem__value {\n  letter-spacing: 9px; }\n\n.math-problems--letter-spacing-10 .math-problem__answer, .math-problems--letter-spacing-10\n.math-problem__value {\n  letter-spacing: 10px; }\n\n.math-problems {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 1rem; }\n\n@media print {\n  .math-problems--line-spacing-1 .math-problem {\n    margin-top: 21px; }\n  .math-problems--line-spacing-2 .math-problem {\n    margin-top: 42px; }\n  .math-problems--line-spacing-3 .math-problem {\n    margin-top: 63px; }\n  .math-problems--line-spacing-4 .math-problem {\n    margin-top: 84px; }\n  .math-problems--line-spacing-5 .math-problem {\n    margin-top: 105px; }\n  .math-problems--line-spacing-6 .math-problem {\n    margin-top: 126px; }\n  .math-problems--line-spacing-7 .math-problem {\n    margin-top: 147px; }\n  .math-problems--line-spacing-8 .math-problem {\n    margin-top: 168px; }\n  .math-problems--line-spacing-9 .math-problem {\n    margin-top: 189px; }\n  .math-problems--line-spacing-10 .math-problem {\n    margin-top: 210px; }\n  .worksheet-content {\n    background-color: transparent;\n    height: auto;\n    overflow-y: visible; }\n  .worksheet__card,\n  .worksheet__card--landscape {\n    height: auto;\n    margin: 0;\n    min-height: 100%;\n    padding: 0;\n    padding-top: 120px;\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/worksheet-generator/worksheet-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksheetGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__ = __webpack_require__("../../../../../src/app/analytics/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__worksheet_worksheet_service__ = __webpack_require__("../../../../../src/app/worksheet/worksheet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__worksheet_problem_type_enum__ = __webpack_require__("../../../../../src/app/worksheet/problem-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorksheetGeneratorComponent = (function () {
    function WorksheetGeneratorComponent(route, worksheetService, analytics, authService) {
        this.route = route;
        this.analytics = analytics;
        this.authService = authService;
        this.mathProblemsClasses = {};
        this.isLoggedIn = false;
        this.worksheetService = worksheetService;
    }
    WorksheetGeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            if (id) {
                _this.worksheetService.getById(id).subscribe(function (worksheetService) {
                    _this.worksheetService.id = id;
                    _this.worksheetService.updateFromJson(worksheetService);
                    _this.initialize();
                });
            }
            else {
                _this.initialize();
            }
        });
        this.authService.user.subscribe(function (user) {
            // console.log(`authService.user.subscribe`, user);
            if (user) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    WorksheetGeneratorComponent.prototype.generateWorksheet = function () {
        this.analytics.trackEventWithCategory('worksheet', 'generate');
        this.worksheetService.clearProblems();
        this.worksheetService.generateProblems();
        if (!this.isLoggedIn) {
            this.authService.loginAnonymous();
        }
    };
    WorksheetGeneratorComponent.prototype.getDivisionNumberFormat = function () {
        if (this.worksheetService.options.divisionOptions.showDecimals) {
            return "1.0-" + this.worksheetService.options.divisionOptions.decimalPlaces;
        }
        return "1.0-0";
    };
    WorksheetGeneratorComponent.prototype.isDivisionProblem = function (problem) {
        return problem.problemType === __WEBPACK_IMPORTED_MODULE_5__worksheet_problem_type_enum__["a" /* ProblemType */].Division;
    };
    WorksheetGeneratorComponent.prototype.letterSpacingSliderChange = function (event) {
        this.mathProblemsClasses["math-problems--letter-spacing-" + this.letterSpacing] = false;
        this.letterSpacing = this.worksheetService.options.letterSpacing = event.value;
        this.mathProblemsClasses["math-problems--letter-spacing-" + this.letterSpacing] = true;
    };
    WorksheetGeneratorComponent.prototype.lineSpacingSliderChange = function (event) {
        this.mathProblemsClasses["math-problems--line-spacing-" + this.lineSpacing] = false;
        this.lineSpacing = this.worksheetService.options.lineSpacing = event.value;
        this.mathProblemsClasses["math-problems--line-spacing-" + this.lineSpacing] = true;
    };
    WorksheetGeneratorComponent.prototype.numberOfAddendsSliderChange = function (event) {
        if (this.numberOfAddends > event.value) {
            this.worksheetService.options.additionOptions.removeAddend();
        }
        if (this.numberOfAddends < event.value) {
            this.worksheetService.options.additionOptions.addAddend();
        }
        this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
    };
    WorksheetGeneratorComponent.prototype.numberOfDecimalsSliderChange = function (event) {
        this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces = event.value;
    };
    WorksheetGeneratorComponent.prototype.numberOfFactorsSliderChange = function (event) {
        if (this.numberOfFactors > event.value) {
            this.worksheetService.options.multiplicationOptions.removeFactor();
        }
        if (this.numberOfFactors < event.value) {
            this.worksheetService.options.multiplicationOptions.addFactor();
        }
        this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
    };
    WorksheetGeneratorComponent.prototype.numberOfSubtrahendsSliderChange = function (event) {
        if (this.numberOfSubtrahends > event.value) {
            this.worksheetService.options.subtractionOptions.removeSubtrahend();
        }
        if (this.numberOfSubtrahends < event.value) {
            this.worksheetService.options.subtractionOptions.addSubtrahend();
        }
        this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
    };
    WorksheetGeneratorComponent.prototype.print = function () {
        window.print();
        this.analytics.trackEventWithCategory('worksheet', 'print');
    };
    WorksheetGeneratorComponent.prototype.problemFontSizeSliderChange = function (event) {
        this.mathProblemsClasses["math-problems--font-size-" + this.problemFontSize] = false;
        this.problemFontSize = this.worksheetService.options.problemFontSize = event.value;
        this.mathProblemsClasses["math-problems--font-size-" + this.problemFontSize] = true;
    };
    WorksheetGeneratorComponent.prototype.problemsPerRowSliderChange = function (event) {
        this.mathProblemsClasses["math-problems--columns-" + this.problemsPerRow] = false;
        this.problemsPerRow = this.worksheetService.options.problemsPerRow = event.value;
        this.mathProblemsClasses["math-problems--columns-" + this.problemsPerRow] = true;
    };
    WorksheetGeneratorComponent.prototype.save = function () {
        this.analytics.trackEventWithCategory('worksheet', 'save');
        this.worksheetService.save();
    };
    WorksheetGeneratorComponent.prototype.showDecimalsChange = function (event) {
        if (event.checked) {
            this.worksheetService.options.divisionOptions.showRemainders = false;
        }
    };
    WorksheetGeneratorComponent.prototype.showRemaindersChange = function (event) {
        if (event.checked) {
            this.worksheetService.options.divisionOptions.showDecimals = false;
        }
    };
    WorksheetGeneratorComponent.prototype.initialize = function () {
        this.letterSpacing = this.worksheetService.options.letterSpacing;
        this.lineSpacing = this.worksheetService.options.lineSpacing;
        this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
        this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces;
        this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
        this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
        this.problemFontSize = this.worksheetService.options.problemFontSize;
        this.problemsPerRow = this.worksheetService.options.problemsPerRow;
        this.mathProblemsClasses["math-problems--columns-" + this.problemsPerRow] = true;
        this.mathProblemsClasses["math-problems--font-size-" + this.problemFontSize] = true;
        this.mathProblemsClasses["math-problems--letter-spacing-" + this.letterSpacing] = true;
        this.mathProblemsClasses["math-problems--line-spacing-" + this.lineSpacing] = true;
    };
    WorksheetGeneratorComponent.prototype.downloadPdf = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__();
        doc.addHTML(document.getElementById("worksheet-content"), function () {
            doc.save("obrz.pdf");
        });
    };
    return WorksheetGeneratorComponent;
}());
WorksheetGeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-worksheet-generator',
        template: __webpack_require__("../../../../../src/app/worksheet-generator/worksheet-generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/worksheet-generator/worksheet-generator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__worksheet_worksheet_service__["a" /* WorksheetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__worksheet_worksheet_service__["a" /* WorksheetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__analytics_analytics_service__["a" /* AnalyticsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], WorksheetGeneratorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=worksheet-generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/worksheet/math-problem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathProblem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__ = __webpack_require__("../../../../../src/app/worksheet/problem-type.enum.ts");

var MathProblem = (function () {
    function MathProblem(firstNumber, secondNumber, type) {
        this.values = [];
        this.values.push(firstNumber);
        this.values.push(secondNumber);
        this.problemType = type;
    }
    Object.defineProperty(MathProblem.prototype, "answer", {
        get: function () {
            var _this = this;
            var total = 0; // Start with zero so the looping has a starting value
            // For division problems, we don't need to do the loop
            if (this.problemType === __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Division) {
                return this.values[0] / this.values[1];
            }
            // The starting point for multiplication should be 1
            // That way in the loop, the first iteration will be 1 * the first value
            if (this.problemType === __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Multiplication) {
                total = 1;
            }
            // In order for the loop to start at the right place, we just double the first value
            // That way for the first loop, we start with the correct value
            // Ex: If the first value was 15, the starting value would be 30,
            // then the first loop would be 30-15=15 which is our actual starting value for the subtraction
            if (this.problemType === __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Subtraction) {
                total = this.values[0] * 2;
            }
            this.values.forEach(function (value) {
                switch (_this.problemType) {
                    case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Addition:
                        total += value;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Multiplication:
                        total *= value;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Subtraction:
                        total -= value;
                        break;
                }
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathProblem.prototype, "answerFloored", {
        get: function () {
            return Math.floor(this.answer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathProblem.prototype, "remainder", {
        get: function () {
            if (this.problemType === __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Division) {
                return this.values[0] % this.values[1];
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathProblem.prototype, "symbol", {
        get: function () {
            var symbol = '';
            switch (this.problemType) {
                case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Addition:
                    symbol = '+';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Division:
                    symbol = '÷';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Multiplication:
                    symbol = 'x';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__problem_type_enum__["a" /* ProblemType */].Subtraction:
                    symbol = '-';
                    break;
            }
            return symbol;
        },
        enumerable: true,
        configurable: true
    });
    MathProblem.prototype.addValue = function (value) {
        this.values.push(value);
    };
    MathProblem.prototype.clearValues = function () {
        this.values = [];
    };
    return MathProblem;
}());

//# sourceMappingURL=math-problem.js.map

/***/ }),

/***/ "../../../../../src/app/worksheet/problem-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemType; });
var ProblemType;
(function (ProblemType) {
    ProblemType[ProblemType["Addition"] = 1] = "Addition";
    ProblemType[ProblemType["Subtraction"] = 2] = "Subtraction";
    ProblemType[ProblemType["Division"] = 4] = "Division";
    ProblemType[ProblemType["Multiplication"] = 8] = "Multiplication";
})(ProblemType || (ProblemType = {}));
//# sourceMappingURL=problem-type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/worksheet/worksheet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_problem__ = __webpack_require__("../../../../../src/app/worksheet/math-problem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__ = __webpack_require__("../../../../../src/app/worksheet/problem-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options__ = __webpack_require__("../../../../../src/app/options/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorksheetService = (function () {
    function WorksheetService(db) {
        this.db = db;
        this.options = new __WEBPACK_IMPORTED_MODULE_4__options__["a" /* WorksheetOptions */]();
        this.problems = new Array();
    }
    WorksheetService.prototype.addProblem = function (problem) {
        this.problems.push(problem);
    };
    WorksheetService.prototype.clearProblems = function () {
        this.problems = [];
    };
    WorksheetService.prototype.generateProblems = function () {
        var availableProblemTypes = [];
        // since we are generating new problems, we should consider this a new worksheet
        this.id = null;
        this.clearProblems();
        if (this.options.additionOptions.enabled) {
            availableProblemTypes.push(__WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Addition);
        }
        if (this.options.divisionOptions.enabled) {
            availableProblemTypes.push(__WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Division);
        }
        if (this.options.multiplicationOptions.enabled) {
            availableProblemTypes.push(__WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Multiplication);
        }
        if (this.options.subtractionOptions.enabled) {
            availableProblemTypes.push(__WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Subtraction);
        }
        for (var i = 0; i < this.options.problemCount; i++) {
            var problemType = availableProblemTypes[this.getRandomNumber(0, availableProblemTypes.length - 1)];
            switch (problemType) {
                case __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Addition:
                    this.addProblem(this.getAdditionProblem(this.options.additionOptions));
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Division:
                    this.addProblem(this.getDivisionProblem(this.options.divisionOptions));
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Multiplication:
                    this.addProblem(this.getMultiplicationProblem(this.options.multiplicationOptions));
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Subtraction:
                    var problem = this.getSubtractionProblem(this.options.subtractionOptions);
                    if (this.options.subtractionOptions.allowNegativeAnswers) {
                        this.addProblem(problem);
                    }
                    else {
                        if (problem.answer >= 0) {
                            this.addProblem(problem);
                        }
                        else {
                            i--; // it was a negative answer, so we don't want to add it, reset the loop counter
                        }
                    }
                    break;
            }
        }
    };
    WorksheetService.prototype.getById = function (id) {
        return this.db.object("/worksheets/" + id);
    };
    WorksheetService.prototype.save = function () {
        var _this = this;
        var worksheets = this.db.list('/worksheets');
        var savePayload = {
            options: this.options,
            problems: this.problems
        };
        if (this.id) {
            worksheets.update(this.id, savePayload).then(function (result) {
                console.log('Updated worksheet');
            });
        }
        else {
            worksheets.push(savePayload).then(function (result) {
                _this.id = result.key;
                console.log('Saved worksheet');
            });
        }
    };
    WorksheetService.prototype.updateFromJson = function (jsonObject) {
        var _this = this;
        this.options.updateFromJson(jsonObject.options);
        this.clearProblems();
        jsonObject.problems.forEach(function (jsonProblem) {
            var problem = new __WEBPACK_IMPORTED_MODULE_2__math_problem__["a" /* MathProblem */](jsonProblem.values[0], jsonProblem.values[1], jsonProblem.problemType);
            if (jsonProblem.values.length > 2) {
                for (var i = 2; i < jsonProblem.values.length; i++) {
                    problem.addValue(jsonProblem.values[i]);
                }
            }
            _this.addProblem(problem);
        });
    };
    WorksheetService.prototype.getAdditionProblem = function (options) {
        var _this = this;
        var topAddend = this.getRandomNumberFromRange(options.addendRanges[0]);
        var bottomAddend = this.getRandomNumberFromRange(options.addendRanges[1]);
        var problem = new __WEBPACK_IMPORTED_MODULE_2__math_problem__["a" /* MathProblem */](topAddend, bottomAddend, __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Addition);
        if (options.addendRanges.length > 2) {
            problem.clearValues();
            options.addendRanges.forEach(function (addendRange) {
                problem.addValue(_this.getRandomNumber(addendRange.min, addendRange.max));
            });
        }
        return problem;
    };
    WorksheetService.prototype.getDivisionProblem = function (options) {
        var dividend = this.getRandomNumberFromRange(options.dividendRange);
        var divisor = this.getRandomNumberFromRange(options.divisorRange);
        var problem = new __WEBPACK_IMPORTED_MODULE_2__math_problem__["a" /* MathProblem */](dividend, divisor, __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Division);
        return problem;
    };
    WorksheetService.prototype.getMultiplicationProblem = function (options) {
        var _this = this;
        var topFactor = this.getRandomNumberFromRange(options.factorRanges[0]);
        var bottomFactor = this.getRandomNumberFromRange(options.factorRanges[1]);
        var problem = new __WEBPACK_IMPORTED_MODULE_2__math_problem__["a" /* MathProblem */](topFactor, bottomFactor, __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Multiplication);
        if (options.factorRanges.length > 2) {
            problem.clearValues();
            options.factorRanges.forEach(function (factorRange) {
                problem.addValue(_this.getRandomNumber(factorRange.min, factorRange.max));
            });
        }
        return problem;
    };
    WorksheetService.prototype.getSubtractionProblem = function (options) {
        var _this = this;
        var minuend = this.getRandomNumberFromRange(options.minuendRange);
        var subtrahend = this.getRandomNumberFromRange(options.subtrahendRanges[0]);
        var problem = new __WEBPACK_IMPORTED_MODULE_2__math_problem__["a" /* MathProblem */](minuend, subtrahend, __WEBPACK_IMPORTED_MODULE_3__problem_type_enum__["a" /* ProblemType */].Subtraction);
        if (options.subtrahendRanges.length > 1) {
            problem.clearValues();
            problem.addValue(minuend);
            options.subtrahendRanges.forEach(function (subtrahendRange) {
                problem.addValue(_this.getRandomNumber(subtrahendRange.min, subtrahendRange.max));
            });
        }
        return problem;
    };
    WorksheetService.prototype.getRandomNumberFromRange = function (range) {
        return this.getRandomNumber(range.min, range.max);
    };
    WorksheetService.prototype.getRandomNumber = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return WorksheetService;
}());
WorksheetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], WorksheetService);

var _a;
//# sourceMappingURL=worksheet.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    analytics: {
        trackingId: 'UA-255878-12'
    },
    firebase: {
        apiKey: 'AIzaSyDIXAqHr-gewCBtcl4ZssqplBzvj3ywv40',
        authDomain: 'math-worksheet-generator.firebaseapp.com',
        databaseURL: 'https://math-worksheet-generator.firebaseio.com',
        projectId: 'math-worksheet-generator',
        storageBucket: 'math-worksheet-generator.appspot.com',
        messagingSenderId: '641444124957'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map