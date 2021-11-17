(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_course-data_course-data_module_ts"],{

/***/ 6018:
/*!*****************************************************************!*\
  !*** ./src/app/Pages/course-data/course-data-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDataPageRoutingModule": () => (/* binding */ CourseDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _course_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-data.page */ 6184);




const routes = [
    {
        path: '',
        component: _course_data_page__WEBPACK_IMPORTED_MODULE_0__.CourseDataPage
    }
];
let CourseDataPageRoutingModule = class CourseDataPageRoutingModule {
};
CourseDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseDataPageRoutingModule);



/***/ }),

/***/ 7573:
/*!*********************************************************!*\
  !*** ./src/app/Pages/course-data/course-data.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDataPageModule": () => (/* binding */ CourseDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _course_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-data-routing.module */ 6018);
/* harmony import */ var _course_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-data.page */ 6184);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let CourseDataPageModule = class CourseDataPageModule {
};
CourseDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _course_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseDataPageRoutingModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_course_data_page__WEBPACK_IMPORTED_MODULE_1__.CourseDataPage]
    })
], CourseDataPageModule);



/***/ }),

/***/ 6184:
/*!*******************************************************!*\
  !*** ./src/app/Pages/course-data/course-data.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDataPage": () => (/* binding */ CourseDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_course_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-data.page.html */ 8413);
/* harmony import */ var _course_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-data.page.scss */ 1030);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);










let CourseDataPage = class CourseDataPage {
    constructor(router, alertCtrl, location, shared, http, route) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.shared = shared;
        this.http = http;
        this.route = route;
        this.loading = true;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(res => {
            this.course_id = res["course_id"];
            this.LoadCourse();
        });
    }
    goBack() {
        this.location.back();
    }
    goToRecipe(id) {
        this.router.navigate(["recipe-data"], { queryParams: { recipe_id: id } });
    }
    goToPurchase() {
        this.shared.selectedCourse = this.course;
        this.router.navigate(["purchase"]);
    }
    LoadCourse(evt) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        let params = {
            api_token: this.shared.token,
            course_id: parseInt(this.course_id)
        };
        console.log(params);
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        this.http.post(this.shared.base_url + "getCourseData", params, nativeHeaders).then(resp => {
            console.log(resp);
            let res = JSON.parse(resp.data);
            this.course = res;
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
            this.loading = false;
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (evt)
                setTimeout(() => {
                    console.log('Async operation has ended');
                    evt.target.complete();
                }, 2000);
            this.loading = false;
            this.shared.showErroAlert();
        }));
    }
    doRefresh(evt) {
        this.LoadCourse(evt);
    }
};
CourseDataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CourseDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-course-data',
        template: _raw_loader_course_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseDataPage);



/***/ }),

/***/ 1030:
/*!*********************************************************!*\
  !*** ./src/app/Pages/course-data/course-data.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtZGF0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8413:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/course-data/course-data.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p *ngIf=\"course\">{{course.name}}</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div class=\"body-holder\" style=\"height:160px\" *ngIf=\"!loading\">\n    <div *ngIf=\"course &&course.pic\"\n      style=\"height:100%;background: url({{course.pic}});background-size: cover;background-position: center;background-repeat: no-repeat\">\n    </div>\n    <!-- <div style=\"height:100%;background: url('img/info.png');background-size: cover;background-position: center;background-repeat: no-repeat\"></div> -->\n    <!--<div class=\"section-1\" style=\"height:100%\">\n      <div class=\"swiper-container top-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div (click)=\"openLink('{{slide.link}}')\"  class=\"swiper-slide\" style=\"background: url('{{slide.pic}}');background-size: cover;background-position: center;background-repeat: no-repeat\"  ng-repeat=\"slide in topSlider\" end-repeat>\n\n          </div>\n        </div>\n        &lt;!&ndash; Add Pagination &ndash;&gt;\n      </div>\n    </div>-->\n  </div>\n  <div *ngIf=\"!loading && course\" style=\"margin-bottom:45px;\">\n    <div class=\"course-description\" *ngIf=\"course\">\n      <p>الوصف</p>\n      <p>{{course.description}}</p>\n    </div>\n    <ion-item class=\"recipe-card\" lines=\"none\" (click)=\"goToRecipe(recipe.id)\" *ngFor=\"let recipe of course.videos\">\n      <!-- <div\n        style=\"background: url('{{recipe.pic}}'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n\n      </div> -->\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{recipe.pic}}\">\n      </ion-thumbnail>\n      <div>\n        <p>{{recipe.title}}</p>\n        <p>{{recipe.subtitle}}</p>\n      </div>\n      <label slot=\"end\">المزيد</label>\n    </ion-item>\n    <div class=\"course-description\" *ngIf=\"!course.paid && course\">\n      <p>ثمن الشراء </p>\n      <p>{{course.price}} دينار ليبي </p>\n    </div>\n    <div class=\"course-description\" *ngIf=\"!course.paid && course.howTo\">\n      <p>كيفية الشراء</p>\n      <p>{{course.howTo}}</p>\n    </div>\n    <p class=\"purchase-button\" *ngIf=\"!course.paid && course\" (click)=\"goToPurchase()\"> شراء</p>\n  </div>\n</ion-content>\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_course-data_course-data_module_ts.js.map