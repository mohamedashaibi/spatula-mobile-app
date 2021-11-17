(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_my-courses_my-courses_module_ts"],{

/***/ 6866:
/*!***************************************************************!*\
  !*** ./src/app/Pages/my-courses/my-courses-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCoursesPageRoutingModule": () => (/* binding */ MyCoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-courses.page */ 1435);




const routes = [
    {
        path: '',
        component: _my_courses_page__WEBPACK_IMPORTED_MODULE_0__.MyCoursesPage
    }
];
let MyCoursesPageRoutingModule = class MyCoursesPageRoutingModule {
};
MyCoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyCoursesPageRoutingModule);



/***/ }),

/***/ 7129:
/*!*******************************************************!*\
  !*** ./src/app/Pages/my-courses/my-courses.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCoursesPageModule": () => (/* binding */ MyCoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-courses-routing.module */ 6866);
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-courses.page */ 1435);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let MyCoursesPageModule = class MyCoursesPageModule {
};
MyCoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyCoursesPageRoutingModule
        ],
        declarations: [_my_courses_page__WEBPACK_IMPORTED_MODULE_1__.MyCoursesPage]
    })
], MyCoursesPageModule);



/***/ }),

/***/ 1435:
/*!*****************************************************!*\
  !*** ./src/app/Pages/my-courses/my-courses.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCoursesPage": () => (/* binding */ MyCoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-courses.page.html */ 8419);
/* harmony import */ var _my_courses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-courses.page.scss */ 6538);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);









let MyCoursesPage = class MyCoursesPage {
    constructor(shared, http, location, router) {
        this.shared = shared;
        this.http = http;
        this.location = location;
        this.router = router;
        this.myOrders = [];
        this.loading = true;
        this.slideOpts = {
            autoplay: true,
        };
        this.loadOrders();
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
    }
    doRefresh(evt) {
        this.loadOrders(evt);
    }
    loadOrders(evt) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        let params = {
            api_token: this.shared.token,
        };
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        this.http.post(this.shared.base_url + "userOrders", params, nativeHeaders).then(resp => {
            console.log(resp);
            let res = JSON.parse(resp.data);
            // localStorage.setItem('swiper', JSON.stringify(resp));
            this.myOrders = res["orders"];
            this.loading = false;
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
            // this.bottomSlider = resp["bottom"];
        }, err => {
            this.shared.showErroToast();
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
            this.loading = false;
        });
    }
    goToCourse(course_id) {
        this.router.navigate(["/course-data"], { queryParams: { course_id: course_id } });
    }
};
MyCoursesPage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
MyCoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-courses',
        template: _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_courses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyCoursesPage);



/***/ }),

/***/ 6538:
/*!*******************************************************!*\
  !*** ./src/app/Pages/my-courses/my-courses.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1jb3Vyc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8419:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/my-courses/my-courses.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p>الدورات المشتراة</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"margin-bottom: 50px\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div class=\"body-holder\" style=\"height:160px\" *ngIf=\"!loading\">\n    <div class=\"section-1\" style=\"height:100%\">\n      <div class=\"swiper-container top-swiper\">\n        <app-sildes></app-sildes>\n        <!-- Add Pagination -->\n      </div>\n    </div>\n  </div>\n  <ion-item class=\"recipe-card\" lines=\"none\" (click)=\"goToCourse(order.course.id)\" *ngFor=\"let order of myOrders\">\n    <!-- <div\n      style=\"background: url('{{order.course.pic}}'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n    </div> -->\n    <ion-thumbnail slot=\"start\">\n      <img src=\"{{order.course.pic}}\">\n    </ion-thumbnail>\n    <div>\n      <p>{{order.course.name}}</p>\n      <p>{{order.course.price}} دينار ليبي </p>\n    </div>\n    <label slot=\"end\">المزيد</label>\n  </ion-item>\n  <div class=\"no-courses-avilable\" *ngIf=\"!myOrders.length && !loading\">\n    لم يتم شراء اي مواد تعليمية في الوقت الحالي !\n  </div>\n</ion-content>\n\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_my-courses_my-courses_module_ts.js.map