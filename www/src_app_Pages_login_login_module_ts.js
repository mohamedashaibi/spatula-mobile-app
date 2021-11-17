(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_login_login_module_ts"],{

/***/ 6875:
/*!*****************************************************!*\
  !*** ./src/app/Pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6318);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 5342:
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 6875);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6318);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        providers: [
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__.Facebook,
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 6318:
/*!*******************************************!*\
  !*** ./src/app/Pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 3540);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 4158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);
/* harmony import */ var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/twitter-connect/ngx */ 3824);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);











let LoginPage = class LoginPage {
    constructor(fb, shared, router, menuCtrl, http, twitter, plt, natHttp) {
        this.fb = fb;
        this.shared = shared;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.twitter = twitter;
        this.plt = plt;
        this.natHttp = natHttp;
        this.user = {
            name: "",
            email: "",
            social_id: "",
            social_type: ""
        };
    }
    ngOnInit() {
    }
    faceLogin() {
        this.fb.login(["email", "public_profile"]).then(res => {
            console.error(res);
            if (!res.authResponse) {
                console.error("Cannot find the authResponse");
                return;
            }
            this.fb.api('/me?fields=email,name,picture.width(720).as(picure_large)&access_token=' + res.authResponse.accessToken, null).then((profileInfo) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.user.name = profileInfo.name;
                this.user.email = profileInfo.email;
                this.user.social_id = profileInfo.id;
                this.user["profilePic"] = profileInfo.picure_large.data.url;
                this.user.social_type = "facebook";
                console.log("This is before the Login function " + this.user, profileInfo);
                yield this.shared.presentLoading();
                this.Login(this.user).then(resp => {
                    let res = JSON.parse(resp.data);
                    console.log("This is the res in login = " + res);
                    // this.user["profilePic"] = resp["profile_image_url"];
                    this.user["api_token"] = res["api_token"];
                    this.user["created_at"] = res["created_at"];
                    localStorage.setItem('spatulaUser', JSON.stringify(this.user));
                    this.shared.loadUser();
                    this.shared.hide();
                    this.menuCtrl.enable(true);
                    this.router.navigate(['/home']);
                }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    this.shared.hide();
                    console.log(err);
                    this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
                }));
            }));
        }).catch(res => {
            console.error("Error is rubbish");
            console.error('Error in fb' + JSON.stringify(res));
            this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
        });
    }
    insta() {
        this.router.navigate(["/home"]);
    }
    twitterLogin() {
        this.twitter.login().then(res => {
            console.log(res);
            this.shared.TwitterAuth(res).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(result.additionalUserInfo.profile);
                this.user.name = result.additionalUserInfo.profile["name"];
                this.user.social_id = result.additionalUserInfo.profile["id"];
                this.user.social_type = "twitter";
                this.user.email = result.additionalUserInfo.profile["email"];
                this.user["profilePic"] = result.additionalUserInfo.profile["profile_image_url_https"];
                yield this.shared.presentLoading();
                console.log("okookoook");
                this.Login(this.user).then(resp => {
                    let res = JSON.parse(resp.data);
                    console.log(res);
                    // this.user["profilePic"] = resp["profile_image_url"];
                    this.user["api_token"] = res["api_token"];
                    this.user["created_at"] = res["created_at"];
                    localStorage.setItem('spatulaUser', JSON.stringify(this.user));
                    this.shared.loadUser();
                    this.shared.hide();
                    this.menuCtrl.enable(true);
                    this.router.navigate(['/home']);
                }, err => {
                    this.shared.hide();
                    console.log(err);
                    this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
                });
                console.log('You have been successfully logged in!');
            })).catch((error) => {
                console.log(error);
                this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
            });
        }, err => {
            console.log(err);
        });
    }
    Login(user) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        let params = {
            name: user.name,
            email: user.email,
            social_id: user.social_id,
            social_type: user.social_type
        };
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        // if (!this.plt.is("cordova")) {
        //   return this.http.post(this.shared.base_url + "login", params, headers);
        // } else {
        return this.natHttp.post(this.shared.base_url + "login", params, nativeHeaders);
        // }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__.Facebook },
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_4__.TwitterConnect },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 4158:
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3540:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"login-view\">\n  <div>\n    <img class=\"info-img\" src=\"assets/img/info.png\">\n\n    <p>لتتمكن من الدخول او انشاء حساب جديد على سباتولا الرجاء التسجيل بواسطة اي من الحسابات التالية الخاصة بك </p>\n    <div class=\"social-icons\">\n      <div (click)=\"twitterLogin()\"><img src=\"assets/img/twitter.png\" /></div>\n      <!-- <div (click)=\"insta()\"><img src=\"assets/img/insta.png\" /></div> -->\n      <div (click)=\"faceLogin()\"><img src=\"assets/img/facebook.png\" /></div>\n    </div>\n  </div>\n\n</div>\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_login_login_module_ts.js.map