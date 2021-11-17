(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_my-downloads_my-downloads_module_ts"],{

/***/ 3992:
/*!*******************************************************************!*\
  !*** ./src/app/Pages/my-downloads/my-downloads-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDownloadsPageRoutingModule": () => (/* binding */ MyDownloadsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _my_downloads_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-downloads.page */ 5065);




const routes = [
    {
        path: '',
        component: _my_downloads_page__WEBPACK_IMPORTED_MODULE_0__.MyDownloadsPage
    }
];
let MyDownloadsPageRoutingModule = class MyDownloadsPageRoutingModule {
};
MyDownloadsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyDownloadsPageRoutingModule);



/***/ }),

/***/ 3695:
/*!***********************************************************!*\
  !*** ./src/app/Pages/my-downloads/my-downloads.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDownloadsPageModule": () => (/* binding */ MyDownloadsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _my_downloads_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-downloads-routing.module */ 3992);
/* harmony import */ var _my_downloads_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-downloads.page */ 5065);
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/components.module */ 9592);








let MyDownloadsPageModule = class MyDownloadsPageModule {
};
MyDownloadsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _my_downloads_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyDownloadsPageRoutingModule
        ],
        declarations: [_my_downloads_page__WEBPACK_IMPORTED_MODULE_1__.MyDownloadsPage]
    })
], MyDownloadsPageModule);



/***/ }),

/***/ 5065:
/*!*********************************************************!*\
  !*** ./src/app/Pages/my-downloads/my-downloads.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDownloadsPage": () => (/* binding */ MyDownloadsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_downloads_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-downloads.page.html */ 8863);
/* harmony import */ var _my_downloads_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-downloads.page.scss */ 4746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);







let MyDownloadsPage = class MyDownloadsPage {
    constructor(shared, location, router) {
        this.shared = shared;
        this.location = location;
        this.router = router;
        this.myVids = [];
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
        if (evt)
            setTimeout(() => {
                console.log('Async operation has ended');
                evt.target.complete();
            }, 2000);
        let vids = JSON.parse(localStorage.getItem("videos"));
        if (vids && vids.length > 0) {
            for (let i = 0; i < vids.length; i++) {
                this.myVids.push(vids[i]);
            }
        }
        vids = JSON.parse(localStorage.getItem("paidVideos"));
        if (vids && vids.length > 0) {
            for (let i = 0; i < vids.length; i++) {
                this.myVids.push(vids[i]);
            }
        }
        this.loading = false;
    }
    goToRecipe(id) {
        this.router.navigate(["recipe-data"], { queryParams: { recipe_id: id } });
    }
};
MyDownloadsPage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MyDownloadsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-downloads',
        template: _raw_loader_my_downloads_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_downloads_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyDownloadsPage);



/***/ }),

/***/ 4746:
/*!***********************************************************!*\
  !*** ./src/app/Pages/my-downloads/my-downloads.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1kb3dubG9hZHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8863:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/my-downloads/my-downloads.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p>تحميلاتى</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"margin-bottom: 50px\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"loading\" class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <div *ngIf=\"!loading\">\n    <ion-item class=\"recipe-card\" lines=\"none\" (click)=\"goToRecipe(recipe.id)\" *ngFor=\"let recipe of myVids\">\n      <!-- <div\n        style=\"background: url('{{recipe.image[0]?.image}}'); background-position: center;background-repeat: no-repeat;background-size: cover\">\n\n      </div> -->\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{recipe.image[0]?.image}}\">\n      </ion-thumbnail>\n      <div>\n        <p>{{recipe.title}}</p>\n        <p>{{recipe.subtitle}}</p>\n      </div>\n      <label slot=\"end\">المزيد</label>\n    </ion-item>\n    <div class=\"no-courses-avilable\" *ngIf=\"!myVids.length\">\n      لم يتم تحميل اي مواد تعليمية في الوقت الحالي !\n    </div>\n  </div>\n\n</ion-content>\n\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_my-downloads_my-downloads_module_ts.js.map