(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_select-login_select-login_module_ts"],{

/***/ 6909:
/*!*******************************************************************!*\
  !*** ./src/app/Pages/select-login/select-login-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLoginPageRoutingModule": () => (/* binding */ SelectLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _select_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-login.page */ 9099);




const routes = [
    {
        path: '',
        component: _select_login_page__WEBPACK_IMPORTED_MODULE_0__.SelectLoginPage
    }
];
let SelectLoginPageRoutingModule = class SelectLoginPageRoutingModule {
};
SelectLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectLoginPageRoutingModule);



/***/ }),

/***/ 9530:
/*!***********************************************************!*\
  !*** ./src/app/Pages/select-login/select-login.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLoginPageModule": () => (/* binding */ SelectLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _select_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-login-routing.module */ 6909);
/* harmony import */ var _select_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-login.page */ 9099);







let SelectLoginPageModule = class SelectLoginPageModule {
};
SelectLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectLoginPageRoutingModule
        ],
        declarations: [_select_login_page__WEBPACK_IMPORTED_MODULE_1__.SelectLoginPage]
    })
], SelectLoginPageModule);



/***/ }),

/***/ 9099:
/*!*********************************************************!*\
  !*** ./src/app/Pages/select-login/select-login.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLoginPage": () => (/* binding */ SelectLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_select_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-login.page.html */ 3244);
/* harmony import */ var _select_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-login.page.scss */ 6563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);






let SelectLoginPage = class SelectLoginPage {
    constructor(shared, router) {
        this.shared = shared;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['/login']);
    }
    ;
    loadStopCallBack() {
        if (this.browser != undefined) {
            this.browser.show();
        }
    }
    loadErrorCallBack(params) {
        this.browser.close();
        this.browser = undefined;
    }
    messageCallBack(params) {
    }
};
SelectLoginPage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SelectLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-login',
        template: _raw_loader_select_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectLoginPage);



/***/ }),

/***/ 6563:
/*!***********************************************************!*\
  !*** ./src/app/Pages/select-login/select-login.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3244:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/select-login/select-login.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>SelectLogin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<div class=\"select-login\">\n  <img src=\"assets/img/spatulaHead.png\" />\n  <div>\n    <p> مرحبا بكِ في تطبيق سباتولا، أول تطبيق مختص بالكيك والحلويات عربياً. بإشراف الشيف الليبي حنان العابد. </p>\n    <button (click)=\"login()\">التسجيل </button>\n    <button (click)=\"login()\">الدخول </button>\n  </div>\n\n</div>\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_select-login_select-login_module_ts.js.map