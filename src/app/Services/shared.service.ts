import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  base_url = "https://dashboard.spatulagroup.com/api/";
  // base_url = "https://spatulagroup.com/admin/api/";
  facebookLink;
  whatLink;
  helpLink;
  loading;
  topSlider = [];
  bottomSlider = [];
  token = "";
  selectedCourse: any;
  userData: any;

  constructor(public http: HTTP, public loadingCtrl: LoadingController, public afAuth: AngularFireAuth,
    public toastCtrl: ToastController, public alertCtrl: AlertController) { }

  LoadSettings() {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      })
      // };
    }

    const nativeHeaders = {
      'Content-Type': 'application/json',
    };

    this.http.get(this.base_url + "getSettings", {}, nativeHeaders).then(resp => {
      console.log(JSON.parse(resp.data))
      let res = JSON.parse(resp.data);
      this.facebookLink = res["facebook"];
      this.whatLink = res["whatsapp"];
      this.helpLink = res["help"];

    }, err => {
      console.log(err)
    })
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'انتظر قليلا ...',
    });
    await this.loading.present();
  }
  openLink(link) {
    if (link == 'facebook') {
      link = this.facebookLink;
    }
    else {
      link = this.whatLink;
      link = "https://wa.me/+218945367550"
    }
    window.open(link, '_system', "location=yes");
  }
  loadUser() {
    this.userData = JSON.parse(localStorage.getItem("spatulaUser"));
    console.log(this.userData)
    if (this.userData)
      this.token = this.userData.api_token;
  }
  openHelp() {
    window.open("https://spatulagroup.com", '_system', "location=yes");

    // window.open(this.helpLink, '_system', "location=yes");
  }

  async show() {
    this.loading = await this.loadingCtrl.create({
      duration: 1000
    });
    this.loading.present();
  }
  hide() {
    try {
      this.loading.dismiss();
    } catch (error) { }
  }

  async showErroToast(msg?) {
    const toast = await this.toastCtrl.create({
      message: msg ? msg : "حدث خطأ ما, برجاء المحاولة مرة اخرى بالسحب الى اسفل",
      animated: true,
      duration: 4000,
      cssClass: 'error-toast'
    });
    toast.present();
  }

  async showErroAlert() {
    const alert = await this.alertCtrl.create({
      header: 'سباتولا',
      message: 'هناك مشكلة بالاتصال بالانترنت رجاء المحاولة مرة اخرى',
      cssClass: 'vtc-popup',
      buttons: [
        {
          text: 'موافق',
          role: 'Cancel',
          handler: (e) => {
            return;
          }
        }]
    })
    await alert.present();
  }

  TwitterAuth(data) {
    const twitterCredential = firebase.auth.TwitterAuthProvider
      .credential(data.token, data.secret);
    return firebase.auth().signInWithCredential(twitterCredential)
  }
}
