(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_home_home_module_ts"],{

/***/ 4260:
/*!***************************************************!*\
  !*** ./src/app/Pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 5355);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7643:
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4260);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5355);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 5355:
/*!*****************************************!*\
  !*** ./src/app/Pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9380);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 4391);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);









let HomePage = class HomePage {
    constructor(menuCtrl, shared, http, router) {
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.http = http;
        this.router = router;
        this.slideOpts = {
            autoplay: true,
        };
        this.loading = true;
        this.menuCtrl.enable(true);
        this.GetSliderFunc();
    }
    ngOnInit() {
    }
    doRefresh(evt) {
        this.GetSliderFunc(evt);
    }
    GetSliderFunc(evt) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        this.http.get(this.shared.base_url + "getHomeView", {}, nativeHeaders).then(resp => {
            console.log(JSON.parse(resp.data));
            let res = JSON.parse(resp.data);
            localStorage.setItem('swiper', JSON.stringify(res));
            this.shared.topSlider = res["tops"];
            this.shared.bottomSlider = res["bottom"];
            this.loading = false;
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
        }, err => {
            console.log(err);
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
            this.shared.showErroToast();
            this.loading = false;
        });
    }
    paidCourses() {
        this.router.navigate(["paid-courses"]);
    }
    freeCourses() {
        this.router.navigate(["free-courses"]);
    }
    openFloat() {
        event.stopImmediatePropagation();
        document.querySelector('.backgorund-overlay').classList.add("show");
        document.querySelector('.float-section').classList.add("animate-float");
    }
    closeMenu() {
        // document.querySelector('.spatula-menu').classList.remove('spatula-menu-animation');
        document.querySelector('.backgorund-overlay').classList.remove("show");
        document.querySelector('.float-section').classList.remove("animate-float");
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
HomePage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['mySlider', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 4391:
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: \"bdavat\";\n}\n\n.fab {\n  position: absolute;\n  left: 0px;\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  --background: #fc96ab;\n  box-shadow: -2px 5px 3px rgba(0, 0, 0, 0.36);\n  color: #ffffff;\n  text-align: center;\n  bottom: 105px;\n  z-index: 4242;\n}\n\n.fab ion-icon {\n  font-size: 42px;\n  font-family: \"bdavat\";\n  font-weight: bolder;\n}\n\n.backdiv {\n  height: 100px;\n  background: black;\n}\n\n.show {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0FBQUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogJ2JkYXZhdCc7XG59XG5cbi5mYWIge1xuICAgIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xuICAgIGxlZnQgICAgICAgICA6IDBweDtcbiAgICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbiAgICB3aWR0aCAgICAgICAgOiA2MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tYmFja2dyb3VuZCA6ICNmYzk2YWI7XG4gICAgYm94LXNoYWRvdyAgIDogLTJweCA1cHggM3B4IHJnYigwIDAgMCAvIDM2JSk7XG4gICAgY29sb3IgICAgICAgIDogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYm90dG9tICAgICAgIDogMTA1cHg7XG4gICAgei1pbmRleCAgICAgIDogNDI0MjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplICA6IDQycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYmRhdmF0JztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG59XG5cbi5iYWNrZGl2IHtcbiAgICBoZWlnaHQgICAgOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ 9380:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p>الرئيسية</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div class=\"body-holder\" *ngIf=\"!loading && shared.topSlider && shared.topSlider.length>0\">\n    <div class=\"section-1\">\n      <div class=\"swiper-container top-swiper\">\n        <app-sildes></app-sildes>\n        <!-- <ion-slides #slider class=\"swiper-wrapper\" [options]=\"slideOpts\" pager=\"true\" >\n          <ion-slide class=\" swiper-slide\" *ngFor=\"let slide of shared.topSlider\"\n          style=\"background: url({{slide.pic}});background-size: cover;background-position: center;background-repeat: no-repeat\"\n          (click)=\"shared.openLink(slide.link)\">\n          </ion-slide>\n        </ion-slides> \n        <div class=\"swiper-pagination\"></div>-->\n        <!-- Add Pagination -->\n      </div>\n    </div>\n    <div class=\"section-2\">\n      <div class=\"row\">\n        <div class=\"col col-50\">\n          <div (click)=\"paidCourses()\" style=\"right: 40%;\">\n            <p>الدورات المميزة</p>\n          </div>\n        </div>\n        <div class=\"col col-50\">\n          <div (click)=\"freeCourses()\" style=\"left: 40%;\">\n            <p>الدورات المجانية</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section-3\">\n      <div class=\"swiper-container bottom-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" *ngFor=\"let slide of shared.bottomSlider\"\n            (click)=\"shared.openLink('{{slide.link}}')\"\n            style=\"background: url('{{slide.pic}}');background-size: cover;background-position: center;background-repeat: no-repeat\">\n\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n        <!-- Add Pagination -->\n      </div>\n    </div>\n  </div>\n  <div class=\"float-section\" id=\"floatsection\" #floatsection>\n    <div (click)=\"freeCourses()\">الدورات المجانية</div>\n    <div (click)=\"paidCourses()\">الدورات المميزة</div>\n  </div>\n  <div class=\"backgorund-overlay\" (click)=\"closeMenu()\" id=\"backgorundoverlay\" #backgorundoverlay></div>\n  <!-- <button >\n    <p>+</p>\n  </button> -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" edge\n    *ngIf=\"!loading && shared.topSlider && shared.topSlider.length>0\">\n    <ion-fab-button class=\"fab\" (click)=\"openFloat()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <div class=\"help facebook-help\" *ngIf=\"!loading && shared.topSlider && shared.topSlider.length>0\">\n    <img src=\"assets/img/logo.png\" />\n    <img src=\"assets/img/logo.png\" />\n    <img src=\"assets/img/logo.png\" />\n  </div>\n\n</ion-content>\n\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_home_home_module_ts.js.map