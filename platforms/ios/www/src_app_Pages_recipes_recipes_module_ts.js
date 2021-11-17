(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_recipes_recipes_module_ts"],{

/***/ 4360:
/*!*********************************************************!*\
  !*** ./src/app/Pages/recipes/recipes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageRoutingModule": () => (/* binding */ RecipesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.page */ 994);




const routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_0__.RecipesPage
    }
];
let RecipesPageRoutingModule = class RecipesPageRoutingModule {
};
RecipesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipesPageRoutingModule);



/***/ }),

/***/ 1385:
/*!*************************************************!*\
  !*** ./src/app/Pages/recipes/recipes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageModule": () => (/* binding */ RecipesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes-routing.module */ 4360);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page */ 994);







let RecipesPageModule = class RecipesPageModule {
};
RecipesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recipes_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipesPageRoutingModule
        ],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_1__.RecipesPage]
    })
], RecipesPageModule);



/***/ }),

/***/ 994:
/*!***********************************************!*\
  !*** ./src/app/Pages/recipes/recipes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPage": () => (/* binding */ RecipesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipes.page.html */ 9856);
/* harmony import */ var _recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page.scss */ 5986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let RecipesPage = class RecipesPage {
    constructor() { }
    ngOnInit() {
    }
};
RecipesPage.ctorParameters = () => [];
RecipesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-recipes',
        template: _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipesPage);



/***/ }),

/***/ 5986:
/*!*************************************************!*\
  !*** ./src/app/Pages/recipes/recipes.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9856:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/recipes/recipes.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_recipes_recipes_module_ts.js.map