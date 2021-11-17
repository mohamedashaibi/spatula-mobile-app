(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_free-courses_free-courses_module_ts"],{

/***/ 9004:
/*!*******************************************************************!*\
  !*** ./src/app/Pages/free-courses/free-courses-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreeCoursesPageRoutingModule": () => (/* binding */ FreeCoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _free_courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-courses.page */ 8942);




const routes = [
    {
        path: '',
        component: _free_courses_page__WEBPACK_IMPORTED_MODULE_0__.FreeCoursesPage
    }
];
let FreeCoursesPageRoutingModule = class FreeCoursesPageRoutingModule {
};
FreeCoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FreeCoursesPageRoutingModule);



/***/ }),

/***/ 2413:
/*!***********************************************************!*\
  !*** ./src/app/Pages/free-courses/free-courses.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreeCoursesPageModule": () => (/* binding */ FreeCoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _free_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-courses-routing.module */ 9004);
/* harmony import */ var _free_courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-courses.page */ 8942);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let FreeCoursesPageModule = class FreeCoursesPageModule {
};
FreeCoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _free_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.FreeCoursesPageRoutingModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_free_courses_page__WEBPACK_IMPORTED_MODULE_1__.FreeCoursesPage]
    })
], FreeCoursesPageModule);



/***/ }),

/***/ 8942:
/*!*********************************************************!*\
  !*** ./src/app/Pages/free-courses/free-courses.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreeCoursesPage": () => (/* binding */ FreeCoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_free_courses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./free-courses.page.html */ 1865);
/* harmony import */ var _free_courses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-courses.page.scss */ 4278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);









let FreeCoursesPage = class FreeCoursesPage {
    constructor(shared, location, http, router) {
        this.shared = shared;
        this.location = location;
        this.http = http;
        this.router = router;
        this.courses = [];
        this.topSlider = [];
        this.bottomSlider = [];
        this.slideOpts = {
            autoplay: true,
        };
        this.loading = true;
    }
    ngOnInit() {
        this.GetCourses();
    }
    goBack() {
        this.location.back();
    }
    goToCourse(course_id) {
        this.router.navigate(["/course-data"], { queryParams: { course_id: course_id } });
    }
    doRefresh(evt) {
        this.GetCourses(evt);
    }
    GetCourses(evt) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        this.http.get(this.shared.base_url + "getFreeCourses", {}, nativeHeaders).then(resp => {
            console.log(resp);
            let res = JSON.parse(resp.data);
            // localStorage.setItem('swiper', JSON.stringify(resp));
            this.courses = res;
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
};
FreeCoursesPage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
FreeCoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-free-courses',
        template: _raw_loader_free_courses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_free_courses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FreeCoursesPage);



/***/ }),

/***/ 4278:
/*!***********************************************************!*\
  !*** ./src/app/Pages/free-courses/free-courses.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmVlLWNvdXJzZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1865:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/free-courses/free-courses.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <div class=\"spatula-header\" >\n  <div (click)=\"goBack()\"><img src=\"assets/img/backButton.svg\" /></div>\n  <p>الدورات المجانية</p>\n\n</div> -->\n<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p>الدورات المجانية</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n      <!-- <div ><img src=\"assets/img/backButton.svg\" /></div> -->\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div class=\"body-holder\" style=\"height:160px\" *ngIf=\"!loading\">\n    <div class=\"section-1\" style=\"height:100%\">\n      <div class=\"swiper-container top-swiper\">\n        <app-sildes></app-sildes>\n        <!-- Add Pagination -->\n      </div>\n    </div>\n  </div>\n  <div style=\"top:230px; margin-bottom: 50px\" *ngIf=\"!loading\">\n    <ion-item class=\"recipe-card\" lines=\"none\" *ngFor=\"let course of courses\" (click)=\"goToCourse(course.id)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{course.pic}}\">\n      </ion-thumbnail>\n      <!-- <div slot=\"start\" *ngIf=\"course.pic\"\n        style=\"background: url('{{course.pic}}'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n\n      </div> -->\n      <div>\n        <p>{{course.name}}</p>\n        <p>محتوى مجاني</p>\n      </div>\n      <label slot=\"end\">المزيد</label>\n    </ion-item>\n\n  </div>\n</ion-content>\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_free-courses_free-courses_module_ts.js.map