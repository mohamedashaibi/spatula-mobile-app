import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  course;
  check;
  verificationCode;
  phoneNumber = "";

  constructor(public shared: SharedService, public location: Location, public http: HTTP, public alertCtrl: AlertController) {
    this.course = this.shared.selectedCourse;
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }
  InitializeTPayPaymentFunc(evt?) {
    console.log(this.phoneNumber)
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),

      // };
    }
    let params = {
      api_token: this.shared.token,
      course_id: parseInt(this.course.id),
      phone: this.phoneNumber
    }

    console.log(params)
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    return this.http.post(this.shared.base_url + "initializeTPayPayment", params, nativeHeaders);
  }
  purchase = {

  }
  purchaseVideo() {
    if (this.phoneNumber.length != 10 || !this.phoneNumber.startsWith('09')) {
      this.check = true;
    }
    else {
      this.InitializeTPayPaymentFunc().then(async (res: any) => {
        console.log(res)
        let resp = JSON.parse(res.data);
        if (resp.errorMessage && resp.errorMessage != null && resp.errorMessage != "") {
          if (resp.operationStatusCode == 51)
            this.shared.showErroToast("من فضلك ادخل رقم هاتف صحيح")
        }
        if (resp.transactionId) {
          this.purchase["transactionId"] = resp.transactionId;
        }
        if (this.purchase["transactionId"]) {
          this.verificationCode = await this.alertCtrl.create({
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
                  this.FinishPaymentFunc().then((res: any) => {
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
        } else {
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
      }, async err => {
        console.log(err)
        this.shared.showErroAlert();
      })
    }

  }

  FinishPaymentFunc() {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),

      // };
    }
    let params = {
      api_token: this.shared.token,
      course_id: parseInt(this.course.course_id),
      pinCode: document.getElementById('purchaseCode').getAttribute("value"),
      transactionId: this.purchase["transactionId"]
    }
    console.log(params)
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    return this.http.post(this.shared.base_url + "confirmTPayPayment", params, nativeHeaders);
  }
}
