(self["webpackChunkSpatulalatest"] = self["webpackChunkSpatulalatest"] || []).push([["src_app_Pages_purchase_purchase_module_ts"],{

/***/ 4976:
/*!***********************************************************!*\
  !*** ./src/app/Pages/purchase/purchase-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageRoutingModule": () => (/* binding */ PurchasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page */ 2662);




const routes = [
    {
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_0__.PurchasePage
    }
];
let PurchasePageRoutingModule = class PurchasePageRoutingModule {
};
PurchasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasePageRoutingModule);



/***/ }),

/***/ 7419:
/*!***************************************************!*\
  !*** ./src/app/Pages/purchase/purchase.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageModule": () => (/* binding */ PurchasePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-routing.module */ 4976);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page */ 2662);







let PurchasePageModule = class PurchasePageModule {
};
PurchasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasePageRoutingModule
        ],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage]
    })
], PurchasePageModule);



/***/ }),

/***/ 2662:
/*!*************************************************!*\
  !*** ./src/app/Pages/purchase/purchase.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePage": () => (/* binding */ PurchasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./purchase.page.html */ 825);
/* harmony import */ var _purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page.scss */ 3709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ 7702);









let PurchasePage = class PurchasePage {
    constructor(shared, location, http, alertCtrl) {
        this.shared = shared;
        this.location = location;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.phoneNumber = "";
        this.purchase = {};
        this.course = this.shared.selectedCourse;
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
    }
    InitializeTPayPaymentFunc(evt) {
        console.log(this.phoneNumber);
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        let params = {
            api_token: this.shared.token,
            course_id: parseInt(this.course.id),
            phone: this.phoneNumber
        };
        console.log(params);
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        return this.http.post(this.shared.base_url + "initializeTPayPayment", params, nativeHeaders);
    }
    purchaseVideo() {
        if (this.phoneNumber.length != 10 || !this.phoneNumber.startsWith('09')) {
            this.check = true;
        }
        else {
            this.InitializeTPayPaymentFunc().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                let resp = JSON.parse(res.data);
                if (resp.errorMessage && resp.errorMessage != null && resp.errorMessage != "") {
                    if (resp.operationStatusCode == 51)
                        this.shared.showErroToast("من فضلك ادخل رقم هاتف صحيح");
                }
                if (resp.transactionId) {
                    this.purchase["transactionId"] = resp.transactionId;
                }
                if (this.purchase["transactionId"]) {
                    this.verificationCode = yield this.alertCtrl.create({
                        header: "تأكيد الشراء",
                        message: "<p> ادخل رمز تاكيد الشراء المرسل الى الرقم " + this.phoneNumber + " مكون من ٦ ارقام </p>" + '<input placeholder="ادخل الكود المرسل اليك والمكون من ٦ ارقام" id="purchaseCode" /><p id="errorCode"></p>',
                        cssClass: 'vtc-popup',
                        buttons: [
                            {
                                text: '<b>تغيير الرقم</b>',
                                handler: function (e) {
                                    return;
                                }
                            },
                            {
                                text: '<b>اكمال الشراء</b>',
                                handler: (e) => {
                                    e.preventDefault();
                                    if (!document.getElementById('purchaseCode').getAttribute("value")) {
                                        document.getElementById('errorCode').innerHTML = "رجاء التحقق من الكود المدخل واعادة المحاولة";
                                        return;
                                    }
                                    this.FinishPaymentFunc().then((res) => {
                                        let resp2 = JSON.parse(res.data);
                                        if (resp2.operationStatusCode == 0) {
                                            this.verificationCode.close();
                                            this.alertCtrl.create({
                                                header: "سباتولا",
                                                message: "تمت عملية الشراء بنجاح",
                                                cssClass: 'vtc-popup',
                                                buttons: [
                                                    {
                                                        text: '<b>موافق</b>',
                                                        handler: (e) => {
                                                            this.goBack();
                                                            return;
                                                        }
                                                    }
                                                ]
                                            });
                                        }
                                        if (resp2.operationStatusCode == 4) {
                                            document.querySelector('#errorCode').innerHTML = "لا يوجد رصيد كافي لإتمام الشراء";
                                        }
                                        else {
                                            document.querySelector('#errorCode').innerHTML = "رجاء التحقق من الكود المدخل واعادة المحاولة";
                                        }
                                    });
                                    return;
                                }
                            }
                        ]
                    });
                }
                else {
                    this.alertCtrl.create({
                        header: "سباتولا",
                        message: "هناك خطأ تقني, رجاء المحاولة لاحقاً",
                        cssClass: 'vtc-popup',
                        buttons: [
                            {
                                text: '<b>موافق</b>',
                                handler: function (e) {
                                    return;
                                }
                            }
                        ]
                    });
                }
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(err);
                this.shared.showErroAlert();
            }));
        }
    }
    FinishPaymentFunc() {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            // };
        };
        let params = {
            api_token: this.shared.token,
            course_id: parseInt(this.course.course_id),
            pinCode: document.getElementById('purchaseCode').getAttribute("value"),
            transactionId: this.purchase["transactionId"]
        };
        console.log(params);
        const nativeHeaders = {
            'Content-Type': 'application/json',
        };
        return this.http.post(this.shared.base_url + "confirmTPayPayment", params, nativeHeaders);
    }
};
PurchasePage.ctorParameters = () => [
    { type: src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
PurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-purchase',
        template: _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PurchasePage);



/***/ }),

/***/ 3709:
/*!***************************************************!*\
  !*** ./src/app/Pages/purchase/purchase.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 825:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/purchase/purchase.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"spatula-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <p style=\"direction: rtl\">عملية شراء</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon src=\"assets/img/backButton.svg\" slot=\"icon-only\" style=\"font-size:16px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"purchase\">\n    <div class=\"purchase-image\"></div>\n    <ul>\n      <li><label>حول العملية</label>\n        <p>{{course.name}}</p>\n      </li>\n      <li><label>قيمة المبلغ</label>\n        <p> {{course.price}} دينار ليبي</p>\n      </li>\n    </ul>\n    <div class=\"purchase-phone\">\n      <label>* رقم النقال </label>\n      <ion-input [(ngModel)]=\"phoneNumber\" maxlength=\"10\" placeholder=\"الرجاء ادخال رقم النقال 09xxxxxxxx\" type=\"tel\" ></ion-input>\n      <p *ngIf=\"(phoneNumber.length !=10 || !phoneNumber.startsWith('09'))  && check\">يرجى ادخال رقم\n        النقال 10 ارقام تبدأ بـ 09 </p>\n      <button (click)=\"purchaseVideo()\">شراء</button>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"help\" (click)=\"shared.openLink('whats')\">\n  <img src=\"assets/img/whatsapp.png\" />\n  <p>للمساعدة. اضغطي هنا للتواصل عبر الواتساب.</p>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_purchase_purchase_module_ts.js.map