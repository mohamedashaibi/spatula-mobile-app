(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_recipe-data_recipe-data_module_ts"],{

/***/ 7341:
/*!*****************************************************************!*\
  !*** ./src/app/Pages/recipe-data/recipe-data-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDataPageRoutingModule": () => (/* binding */ RecipeDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipe_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-data.page */ 2858);




const routes = [
    {
        path: '',
        component: _recipe_data_page__WEBPACK_IMPORTED_MODULE_0__.RecipeDataPage
    }
];
let RecipeDataPageRoutingModule = class RecipeDataPageRoutingModule {
};
RecipeDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipeDataPageRoutingModule);



/***/ }),

/***/ 669:
/*!*********************************************************!*\
  !*** ./src/app/Pages/recipe-data/recipe-data.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDataPageModule": () => (/* binding */ RecipeDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipe_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-data-routing.module */ 7341);
/* harmony import */ var _recipe_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-data.page */ 2858);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let RecipeDataPageModule = class RecipeDataPageModule {
};
RecipeDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recipe_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipeDataPageRoutingModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_recipe_data_page__WEBPACK_IMPORTED_MODULE_1__.RecipeDataPage]
    })
], RecipeDataPageModule);



/***/ }),

/***/ 2858:
/*!*******************************************************!*\
  !*** ./src/app/Pages/recipe-data/recipe-data.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDataPage": () => (/* binding */ RecipeDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-data.page.html */ 6106);
/* harmony import */ var _recipe_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-data.page.scss */ 4649);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 7905);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);















let RecipeDataPage = class RecipeDataPage {
    constructor(shared, route, http, loadingController, toastController, alertCtrl, location, sanitizer, networkState, file, filetransfer) {
        this.shared = shared;
        this.route = route;
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.sanitizer = sanitizer;
        this.networkState = networkState;
        this.file = file;
        this.filetransfer = filetransfer;
        this.win = window;
        this.loading = true;
        this.videos = [];
        this.exist = false;
        this.startDownload = false;
        this.downloadProgress = .0;
        route.queryParams.subscribe(res => {
            this.recipe_id = res["recipe_id"];
            this.LoadRecipe();
        });
    }
    closeFullScreen() { }
    openFullScreen() { }
    ngOnInit() {
        // document.addEventListener("deviceready", function () {
        //   var successCallback = function () {
        //   };
        //   var errorCallback = function (err) {
        //     console.error("An error ocurred : " + err);
        //   };
        //   OurCodeWorldpreventscreenshots.disable(this.successCallback(), this.errorCallback());
        // }, false);
        // cordova.plugins.OurCodeWorldpreventscreenshots.disable()ك
    }
    trustSrc(value, ...args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    doRefresh(evt) {
        this.LoadRecipe(evt);
    }
    LoadRecipe(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.movie = { src: null, title: "", play: false, load: false };
            if (localStorage.getItem('videos')) {
                this.recipes = JSON.parse(localStorage.getItem('videos'));
                for (var i = 0; i < this.recipes.length; i++) {
                    if (this.recipes[i].id == this.recipe_id) {
                        this.recipe_data = this.recipes[i];
                        yield this.readAsDataURL(this.recipe_data.video).then(res => {
                            console.log(res);
                            this.recipe_data.video = res;
                        });
                        console.log(this.recipe_data);
                        break;
                    }
                }
            }
            if (!this.recipe_data) {
                if (localStorage.getItem('paidVideos')) {
                    this.recipes = JSON.parse(localStorage.getItem('paidVideos'));
                    for (var i = 0; i < this.recipes.length; i++) {
                        if (this.recipes[i].id == this.recipe_id) {
                            this.recipe_data = this.recipes[i];
                            console.log(this.recipe_data);
                            yield this.readAsDataURL(this.recipe_data.video).then(res => {
                                this.recipe_data.video = res;
                            });
                            break;
                        }
                    }
                }
            }
            if (this.recipe_data) {
                if (evt)
                    setTimeout(() => {
                        console.log('Async operation has ended');
                        evt.target.complete();
                    }, 2000);
                this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };
                this.exist = true;
                this.loading = false;
                return;
            }
            let headers = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }),
                // };
            };
            let params = {
                api_token: this.shared.token,
                recipe_id: parseInt(this.recipe_id)
            };
            console.log(params);
            const nativeHeaders = {
                'Content-Type': 'application/json',
            };
            this.http.post(this.shared.base_url + "getRecipeData", params, nativeHeaders).then(resp => {
                let res = JSON.parse(resp.data);
                console.log(res);
                this.recipe_data = res;
                this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };
                this.loading = false;
                if (evt)
                    setTimeout(() => {
                        console.log('Async operation has ended');
                        evt.target.complete();
                    }, 2000);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.shared.showErroAlert();
                this.loading = false;
                if (evt)
                    setTimeout(() => {
                        console.log('Async operation has ended');
                        evt.target.complete();
                    }, 2000);
            }));
        });
    }
    goBack() {
        this.location.back();
    }
    readAsDataURL(file_name) {
        var promsie = new Promise((resolve, reject) => {
            this.file.readAsDataURL(this.file.dataDirectory + 'spatula/', file_name).then((fileEntry) => {
                resolve(fileEntry);
            }).catch((err) => {
                reject(err);
            });
        });
        return promsie;
    }
    playVideo() {
        if (!this.exist) {
            this.ask();
        }
        console.log(this.recipe_data);
        var player = document.getElementById("video_1");
        console.log(player);
        player.style.display = "block";
        this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };
        var player = document.getElementById("video_1");
        var placeholder = document.getElementById("placeholder_1");
        placeholder.style.top = player.offsetTop + "px";
        placeholder.style.left = player.offsetLeft + "px";
        player.onwaiting = function () {
            showPlaceholder(placeholder, this);
        };
        player.onplaying = function () {
            hidePlaceholder(placeholder, this);
        };
        function showPlaceholder(img, vid) {
            img.style.height = vid.scrollHeight + "px";
            img.style.width = vid.scrollWidth + "px";
            img.style.display = "block";
        }
        function hidePlaceholder(img, vid) {
            img.style.display = "none";
        }
        var tempSrc = this.recipe_data.video;
        console.log(this.movie);
        document.getElementById('playbutton').style.display = "none";
        var options = {
            successCallback: function () {
                console.log("Video was closed without error.");
            },
            errorCallback: function (errMsg) {
                console.log("Error! " + errMsg);
            },
            shouldAutoClose: true,
            controls: true,
            secure: true // true(default)/false. Used to secure video from taking screenshot and screen recording
        };
    }
    ask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'سباتولا',
                message: 'هل تريد تحميل هذا الفيديو؟',
                cssClass: 'vtc-popup',
                buttons: [
                    {
                        text: 'الغاء',
                        role: 'Cancel',
                        handler: (e) => {
                            return;
                        }
                    },
                    {
                        text: 'موافق',
                        handler: (e) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.networkState.type != 'none') {
                                console.log("Download Started ... ");
                                let loading = yield this.loadingController.create({
                                    cssClass: 'loading-msg',
                                    message: 'برجاء الانتظار'
                                });
                                const toast = yield this.toastController.create({
                                    cssClass: 'toast-msg',
                                    message: 'جارى تحميل الفيديو',
                                    animated: true,
                                    color: "dark",
                                    buttons: [
                                        {
                                            text: 'إخفاء',
                                            cssClass: 'toast-hide-btn',
                                            handler: () => {
                                                toast.dismiss();
                                            }
                                        }
                                    ]
                                });
                                yield loading.present();
                                this.startDownload = true;
                                console.log(this.recipe_data);
                                var uri = encodeURI(this.recipe_data.video);
                                const transfer = this.filetransfer.create();
                                let name = new Date().getTime() + '.mp4';
                                loading.dismiss();
                                toast.present();
                                transfer.download(uri, this.file.dataDirectory + "/spatula/" + name, true).then((entry) => {
                                    if (this.recipe_data.type == 'paid') {
                                        if (localStorage.getItem('paidVideos')) {
                                            this.videos = JSON.parse(localStorage.getItem('padiVideos'));
                                        }
                                        else {
                                            this.videos = [];
                                        }
                                    }
                                    else {
                                        if (localStorage.getItem('videos')) {
                                            this.videos = JSON.parse(localStorage.getItem('videos'));
                                        }
                                        else {
                                            this.videos = [];
                                        }
                                    }
                                    // this.recipe_data.video = entry.toURL();
                                    this.recipe_data.video = name;
                                    this.recipe_data.id = this.recipe_id;
                                    let indexFound;
                                    for (var i = 0; i < this.videos.length; i++) {
                                        if (this.videos[i].id == this.recipe_data.id) {
                                            indexFound = i;
                                        }
                                    }
                                    if (indexFound) {
                                        this.videos[indexFound] = this.recipe_data;
                                    }
                                    else {
                                        this.videos.push(this.recipe_data);
                                    }
                                    if (this.recipe_data.type == 'paid') {
                                        localStorage.setItem('paidVideos', JSON.stringify(this.videos));
                                    }
                                    else {
                                        localStorage.setItem('videos', JSON.stringify(this.videos));
                                    }
                                    this.startDownload = false;
                                    this.exist = true;
                                    toast.dismiss();
                                    this.presentToast('تم حفظ الفيديو بنجاح', 'success');
                                }, error => {
                                    console.log(error);
                                    this.shared.showErroToast("تعذر تحميل الفيديو");
                                });
                                transfer.onProgress((progress) => {
                                    let perc = Math.floor((progress.loaded / progress.total) * 100);
                                    toast.message = 'تم تحميل ' + perc.toString() + '%';
                                });
                            }
                            else {
                                this.shared.showErroAlert();
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                cssClass: 'toast-msg',
                message: msg,
                color: color ? color : "dark",
                duration: 3000
            });
            toast.present();
        });
    }
    divsOpen(id) {
        if (document.getElementById(id).classList.contains('opened')) {
            document.getElementById(id).classList.remove('opened');
            // $ionicScrollDelegate.resize();
        }
        else {
            document.getElementById(id).classList.add('opened');
            // $ionicScrollDelegate.resize();
        }
    }
};
RecipeDataPage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer }
];
RecipeDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-recipe-data',
        template: _raw_loader_recipe_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeDataPage);



/***/ }),

/***/ 4649:
/*!*********************************************************!*\
  !*** ./src/app/Pages/recipe-data/recipe-data.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".download {\n  --ion-color-base: #fc96ab !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoicmVjaXBlLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvd25sb2FkIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmM5NmFiICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 6106:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/recipe-data/recipe-data.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p style=\"direction: rtl\">طريقة التحضير الرائعة!</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div class=\"body-holder\" style=\"height:250px\" *ngIf=\"!loading && recipe_data\">\n    <div class=\"section-1\" style=\"height:100%\">\n      <div (click)=\"playVideo()\" class=\"play-button\" #playbutton *ngIf=\"!movie.play\"\n        style=\"background: url({{recipe_data?.image[0].image}});background-repeat: no-repeat;background-position: center;background-size: cover;\">\n        <img src=\"assets/img/play.png\">\n      </div>\n      <video id=\"video_1\" class=\"vjs-tech\" autoplay controls preload=\"auto\" style=\"width: 100%;height: 220px;\"\n        [hidden]=\"!movie.play\" poster=\"assets/img/logo.png\" data-setup=\"{}\" [src]=\"trustSrc(movie.src)\">\n        <div id=\"placeholder_1\" class=\"placeholder\">\n          <div class=\"loader\">جار التحميل ... </div>\n        </div>\n\n      </video>\n      <script src=\"https://vjs.zencdn.net/7.11.4/video.min.js\"></script>\n\n    </div>\n  </div>\n  <div *ngIf=\"!loading\">\n    <ion-buttons *ngIf=\"!loading\">\n      <ion-button (click)=\"ask()\" *ngIf=\"!exist && !startDownload\" style=\"    color: #fc96ab;\">\n        <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        تحميل\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-item *ngIf=\"startDownload\">\n          <ion-label style=\"color: #fc96ab;\">\n            جار التحميل\n          </ion-label>\n          <ion-label style=\"color: #fc96ab;\" slot=\"end\">\n            {{downloadProgress}} %\n          </ion-label>\n          <ion-spinner slot=\"end\"></ion-spinner>\n        </ion-item> -->\n  </div>\n  <!--   \n  <ion-progress-bar class=\"download\" color=\"secondary\" value=\"{{downloadProgress}}\" *ngIf=\"startDownload\">\n  </ion-progress-bar> -->\n  <div class=\"video-title\" *ngIf=\"recipe_data && movie.load\">\n    <p>{{recipe_data?.title}}</p>\n    <p>{{recipe_data?.subtitle}}</p>\n    <p>فيديو مدته {{recipe_data?.duration}} دقيقة و مساحته {{recipe_data?.video_size}} ميجابايت</p>\n  </div>\n  <div class=\"video-body\" *ngIf=\"!loading && recipe_data\">\n    <div id=\"div1\" (click)=\"divsOpen('div1')\">\n      <label>نبذة عن الفيديو والمحتوى</label>\n      <p [innerHtml]=\"recipe_data?.description\"> </p>\n      <img src=\"assets/img/angle-arrow-down.svg\" />\n    </div>\n    <div id=\"div2\" (click)=\"divsOpen('div2')\" *ngIf=\"recipe_data?.warning\">\n      <label>تحذيرات اثناء اعداد هذه الوصفة</label>\n      <p [innerHtml]=\"recipe_data?.warning\"> </p>\n      <img src=\"assets/img/angle-arrow-down.svg\" />\n    </div>\n    <div id=\"div3\" (click)=\"divsOpen('div3')\" *ngIf=\"recipe_data?.ingredient\">\n      <label>المقادير المستخدمة</label>\n      <p [innerHtml]=\"recipe_data?.ingredient\"> </p>\n      <img src=\"assets/img/angle-arrow-down.svg\" />\n    </div>\n    <div id=\"div4\" (click)=\"divsOpen('div4')\" *ngIf=\"recipe_data?.image.length > 0\">\n      <label>معرض الصور </label>\n      <div *ngFor=\"let image of recipe_data?.image\">\n        <div (click)=\"openFullScreen()\" *ngIf=\"image.image\"\n          style=\"background: url('{{image.image}}');background-repeat: no-repeat;background-position: center;background-size: cover;\">\n        </div>\n      </div>\n\n      <img src=\"assets/img/angle-arrow-down.svg\" />\n    </div>\n  </div>\n  <!-- </ion-content> -->\n  <div class=\"preview-gallery\" *ngIf=\"!loading && recipe_data\">\n    <div class=\"close-button\" (click)=\"closeFullScreen()\"><img src=\"assets/img/close.svg\" /></div>\n    <div class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" *ngFor=\"let image of recipe_data?.image\">\n          <div class=\"swiper-zoom-container\" *ngIf=\"image.image\">\n            <img src=\"{{image.image}}\">\n          </div>\n        </div>\n\n      </div>\n      <!-- Add Pagination -->\n      <div class=\"swiper-pagination swiper-pagination-white\"></div>\n      <!-- Add Navigation -->\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n    </div>\n  </div>\n</ion-content>\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_recipe-data_recipe-data_module_ts.js.map