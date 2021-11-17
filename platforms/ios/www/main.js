(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9592:
/*!*************************************************!*\
  !*** ./src/app/Components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sildes_sildes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sildes/sildes.component */ 6549);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading/loading.component */ 4010);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







var componts = [_sildes_sildes_component__WEBPACK_IMPORTED_MODULE_0__.SildesComponent, _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [componts],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ],
        exports: [componts]
    })
], ComponentsModule);



/***/ }),

/***/ 4010:
/*!*********************************************************!*\
  !*** ./src/app/Components/loading/loading.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_loading_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loading.component.html */ 8330);
/* harmony import */ var _loading_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component.scss */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() { }
};
LoadingComponent.ctorParameters = () => [];
LoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loading',
        template: _raw_loader_loading_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loading_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoadingComponent);



/***/ }),

/***/ 6549:
/*!*******************************************************!*\
  !*** ./src/app/Components/sildes/sildes.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SildesComponent": () => (/* binding */ SildesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sildes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sildes.component.html */ 3287);
/* harmony import */ var _sildes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sildes.component.scss */ 3487);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);






let SildesComponent = class SildesComponent {
    constructor(http, shared) {
        this.http = http;
        this.shared = shared;
        this.slideOpts = {
            autoplay: true,
        };
    }
    ngOnInit() { }
};
SildesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService }
];
SildesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sildes',
        template: _raw_loader_sildes_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sildes_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SildesComponent);



/***/ }),

/***/ 7702:
/*!********************************************!*\
  !*** ./src/app/Services/shared.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ 6797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);







let SharedService = class SharedService {
    constructor(http, loadingCtrl, afAuth, toastCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.base_url = "https://dashboard.spatulagroup.com/api/";
        this.topSlider = [];
        this.bottomSlider = [];
        this.token = "";
    }
    LoadSettings() {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            })
            // };
        };
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        this.http.get(this.base_url + "getSettings", {}, nativeHeaders).then(resp => {
            console.log(JSON.parse(resp.data));
            let res = JSON.parse(resp.data);
            this.facebookLink = res["facebook"];
            this.whatLink = res["whatsapp"];
            this.helpLink = res["help"];
        }, err => {
            console.log(err);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'انتظر قليلا ...',
            });
            yield this.loading.present();
        });
    }
    openLink(link) {
        if (link == 'facebook') {
            link = this.facebookLink;
        }
        else {
            link = this.whatLink;
            link = "https://wa.me/+218945367550";
        }
        window.open(link, '_system', "location=yes");
    }
    loadUser() {
        this.userData = JSON.parse(localStorage.getItem("spatulaUser"));
        console.log(this.userData);
        if (this.userData)
            this.token = this.userData.api_token;
    }
    openHelp() {
        window.open("https://spatulagroup.com", '_system', "location=yes");
        // window.open(this.helpLink, '_system', "location=yes");
    }
    show() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                duration: 1000
            });
            this.loading.present();
        });
    }
    hide() {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    }
    showErroToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg ? msg : "حدث خطأ ما, برجاء المحاولة مرة اخرى بالسحب الى اسفل",
                animated: true,
                duration: 4000,
                cssClass: 'error-toast'
            });
            toast.present();
        });
    }
    showErroAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'سباتولا',
                message: 'هناك مشكلة بالاتصال بالانترنت رجاء المحاولة مرة اخرى',
                cssClass: 'vtc-popup',
                buttons: [
                    {
                        text: 'موافق',
                        role: 'Cancel',
                        handler: (e) => {
                            return;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    TwitterAuth(data) {
        const twitterCredential = firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth.TwitterAuthProvider.credential(data.token, data.secret);
        return firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth().signInWithCredential(twitterCredential);
    }
};
SharedService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_intro_intro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/intro/intro.module */ 5469)).then(m => m.IntroPageModule)
    },
    {
        path: 'course-data',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_course-data_course-data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/course-data/course-data.module */ 7573)).then(m => m.CourseDataPageModule)
    },
    {
        path: 'free-courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_free-courses_free-courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/free-courses/free-courses.module */ 2413)).then(m => m.FreeCoursesPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/home/home.module */ 7643)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/login/login.module */ 5342)).then(m => m.LoginPageModule)
    },
    {
        path: 'my-courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_my-courses_my-courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/my-courses/my-courses.module */ 7129)).then(m => m.MyCoursesPageModule)
    },
    {
        path: 'paid-courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_paid-courses_paid-courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/paid-courses/paid-courses.module */ 9115)).then(m => m.PaidCoursesPageModule)
    },
    {
        path: 'paid-recipes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_paid-recipes_paid-recipes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/paid-recipes/paid-recipes.module */ 3015)).then(m => m.PaidRecipesPageModule)
    },
    {
        path: 'purchase',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_purchase_purchase_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/purchase/purchase.module */ 7419)).then(m => m.PurchasePageModule)
    },
    {
        path: 'recipe-data',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_recipe-data_recipe-data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/recipe-data/recipe-data.module */ 669)).then(m => m.RecipeDataPageModule)
    },
    {
        path: 'recipes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_recipes_recipes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/recipes/recipes.module */ 1385)).then(m => m.RecipesPageModule)
    },
    {
        path: 'select-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_select-login_select-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/select-login/select-login.module */ 9530)).then(m => m.SelectLoginPageModule)
    },
    {
        path: 'my-downloads',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_my-downloads_my-downloads_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/my-downloads/my-downloads.module */ 3695)).then(m => m.MyDownloadsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/market/ngx */ 7972);
/* harmony import */ var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/twitter-connect/ngx */ 3824);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2759);
/* harmony import */ var _Services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/shared.service */ 7702);












let AppComponent = class AppComponent {
    constructor(modalCtrl, platform, router, menuCtrl, market, shared, fb, twitter, toastCtrl, location) {
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.market = market;
        this.shared = shared;
        this.fb = fb;
        this.twitter = twitter;
        this.toastCtrl = toastCtrl;
        this.location = location;
        this.i = 0;
        this.win = window;
        this.initApp();
    }
    presentToast(message, position, duration = 3000, CSSClass = 'toast-message-custome') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: duration,
                position: position,
                cssClass: CSSClass
            });
            toast.onDidDismiss().then(() => {
                console.log('Dismissed toast');
            });
            toast.present();
        });
    }
    initApp() {
        const event = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(document, 'backbutton');
        this.platform.backButton.subscribeWithPriority(9999, () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.getTop();
            if (modal) {
                modal.dismiss();
                return;
            }
            if (this.menuCtrl.isOpen()) {
                this.menuCtrl.close();
                // return;
            }
            console.log(this.router.url);
            if (this.router.url == "/home"
                || this.router.url == "/select-login"
                || this.router.url == "/intro"
                || this.router.url == "/login") {
                if (this.i == 0) {
                    this.presentToast("اضغط مرة اخرى للخروج من التطبيق", 'bottom');
                    this.i++;
                    setTimeout(() => {
                        this.i = 0;
                    }, 3000);
                }
                else {
                    navigator['app'].exitApp();
                }
            }
            else {
                this.location.back();
            }
        }));
        document.addEventListener("deviceready", function () {
            var successCallback = function () {
                console.log("The screenshots are not allowed now.");
            };
            var errorCallback = function (err) {
                console.error("An error ocurred : " + err);
            };
            OurCodeWorldpreventscreenshots.disable(successCallback, errorCallback);
        }, false);
        this.shared.loadUser();
        this.shared.LoadSettings();
        // console.log(this.user)
        if (this.shared.userData == null) {
            console.log(this.shared.userData);
            this.menuCtrl.enable(false);
            return;
        }
        else {
            this.menuCtrl.enable(true);
            this.router.navigate(["/home"], { replaceUrl: true });
        }
    }
    openPage(page) {
        this.router.navigate([page]);
        this.menuCtrl.close();
    }
    logout() {
        if (this.shared.userData.social_type == "twitter") {
            this.twitter.logout().then(res => {
                console.log(res);
                localStorage.clear();
                this.router.navigate(['/intro']);
                this.menuCtrl.close();
            });
        }
        else {
            this.fb.logout().then(res => {
                console.log(res);
                localStorage.clear();
                this.router.navigate(['/intro']);
                this.menuCtrl.close();
            });
        }
    }
    rateUs() {
        // this.market.open("com.codanyon.spatula");
        window.open("https://spatulagroup.com/feedback", '_system', "location=yes");
        this.menuCtrl.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__.Market },
    { type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__.Facebook },
    { type: _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_4__.TwitterConnect },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 7905);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/market/ngx */ 7972);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/components.module */ 9592);
/* harmony import */ var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/twitter-connect/ngx */ 3824);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);




















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _Components_components_module__WEBPACK_IMPORTED_MODULE_9__.ComponentsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule
        ],
        providers: [
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_6__.Market,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__.Network,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File,
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__.Facebook,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__.HTTP,
            _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_10__.TwitterConnect,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        // apiKey: "AIzaSyCwN2Z0KFce6_wMZRYpu7FVOR6ktLpeLOM",
        // authDomain: "spatula-ed3cf.firebaseapp.com",
        // projectId: "spatula-ed3cf",
        // storageBucket: "spatula-ed3cf.appspot.com",
        // messagingSenderId: "164693328121",
        // appId: "1:164693328121:web:d00ee3023250f45c2a2228",
        // measurementId: "G-GXQJE91PQS"
        apiKey: "AIzaSyAhYz6SBSUk6VUh-pMK50sLqklyXEDwR7o",
        authDomain: "spatula-a9755.firebaseapp.com",
        projectId: "spatula-a9755",
        storageBucket: "spatula-a9755.appspot.com",
        messagingSenderId: "787835559775",
        appId: "1:787835559775:web:08f32c8ebfeb99480720ea",
        measurementId: "G-M7ZLKPDTHK"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1087:
/*!***********************************************************!*\
  !*** ./src/app/Components/loading/loading.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #fc96ab;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2 {\n  animation-delay: -1s;\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBQUo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUdBLDRDQUFBO0FBRko7O0FBS0U7RUFFRSxvQkFBQTtBQUZKOztBQVVFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLDJCQUFBO0VBQ0o7RUFBSTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luOiAxMDBweCBhdXRvO1xuICB9XG4gIFxuICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM5NmFiO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5kb3VibGUtYm91bmNlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCkgfVxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHsgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICB9IDUwJSB7IFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 3487:
/*!*********************************************************!*\
  !*** ./src/app/Components/sildes/sildes.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWxkZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nli {\n  display: block;\n  margin-right: -40px;\n  margin-bottom: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUpGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydCA6IDhweDtcbiAgLS1wYWRkaW5nLWVuZCAgIDogOHB4O1xuICAtLXBhZGRpbmctdG9wICAgOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZSAgOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kICA6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXMgIDogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodCAgOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQgIDogMTZweDtcbiAgLS1taW4taGVpZ2h0ICAgOiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yICAgIDogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdCA6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5ICA6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmxpIHtcbiAgZGlzcGxheSAgICAgIDogYmxvY2s7XG4gIG1hcmdpbi1yaWdodCA6IC00MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn0iXX0= */");

/***/ }),

/***/ 8330:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/loading/loading.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div>");

/***/ }),

/***/ 3287:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sildes/sildes.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slider class=\"swiper-wrapper\" [options]=\"slideOpts\" pager=\"true\"\n  *ngIf=\"shared.topSlider && shared.topSlider.length>0\">\n  <ion-slide *ngFor=\"let slide of shared.topSlider\" (click)=\"shared.openLink('{{slide.link}}')\" class=\"swiper-slide\"\n    style=\"background: url({{slide.pic}});background-size: cover;background-position: center;background-repeat: no-repeat\">\n  </ion-slide>\n</ion-slides>\n<div class=\"swiper-pagination\"></div>\n");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" id=\"appMenu\" #appMenu>\n      <ion-content>\n        <!-- <ion-list id=\"inbox-list\"> -->\n        <div class=\"user-profile\" *ngIf=\"shared.userData && shared.userData != null\">\n          <div class=\"user-image\" *ngIf=\"shared.userData.social_type=='facebook'\"\n            style=\"background: url('http://graph.facebook.com/{{shared.userData.social_id}}/picture?type=large&width=100'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n          </div>\n          <div class=\"user-image\" *ngIf=\"shared.userData.social_type!='facebook'\"\n            style=\"background: url('{{shared.userData.profilePic}}'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n          </div>\n          <div>\n            <p>{{shared.userData.name}}</p>\n            <p>عضو/ة منذ {{shared.userData.created_at}}</p>\n          </div>\n        </div>\n        <!-- <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note> -->\n\n        <!-- <ion-menu-toggle auto-hide=\"false\"> -->\n        <div class=\"menu-body\">\n          <ul>\n            <li (click)=\"openPage('/my-courses')\"><img src=\"assets/icon/purchases.png\" />\n              <p>الدورات المشتراه</p>\n            </li>\n            <li (click)=\"rateUs()\"><img src=\"assets/icon/feedback.png\" />\n              <p>شاركي رايك حول التطبيق</p>\n            </li>\n            <li (click)=\"shared.openHelp()\"><img src=\"assets/icon/help.png\" />\n              <p>المساعدة</p>\n            </li>\n            <li (click)=\"openPage('/my-downloads')\"><img src=\"assets/icon/download.png\" />\n              <p>تحميلاتى</p>\n            </li>\n            <li (click)=\"logout()\"><img src=\"assets/icon/log-out.png\" />\n              <p>تسجيل الخروج</p>\n            </li>\n          </ul>\n        </div>\n        <div class=\"menu-footer\">\n          <span style=\"font-size: 10px;\">\n            <p>All copyrights reserved, Hanan Alabed</p>\n          </span>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map