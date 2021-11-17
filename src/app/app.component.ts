import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Market } from '@ionic-native/market/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { MenuController, ModalController, Platform, ToastController } from '@ionic/angular';
import { fromEvent } from 'rxjs';
import { SharedService } from './Services/shared.service';
declare var OurCodeWorldpreventscreenshots: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  user;
  i: number = 0;

  public win: any = window;
  constructor(public modalCtrl: ModalController, public platform: Platform, public router: Router,
    public menuCtrl: MenuController, public market: Market, public shared: SharedService,
    public fb: Facebook, public twitter: TwitterConnect,
    public toastCtrl: ToastController, public location: Location) {
    this.initApp();
  }
  async presentToast(message, position, duration = 3000, CSSClass = 'toast-message-custome') {

    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: CSSClass


    });
    toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  initApp() {
    const event = fromEvent(document, 'backbutton');
    this.platform.backButton.subscribeWithPriority(9999, async () => {
      const modal = await this.modalCtrl.getTop();
      if (modal) {
        modal.dismiss();
        return;
      }
      if (this.menuCtrl.isOpen()) {
        this.menuCtrl.close();
        // return;
      }
      console.log(this.router.url)
      if (this.router.url == "/home"
        || this.router.url == "/select-login"
        || this.router.url == "/intro"
        || this.router.url == "/login") {
        if (this.i == 0) {
          this.presentToast("اضغط مرة اخرى للخروج من التطبيق", 'bottom');
          this.i++;
          setTimeout(() => {
            this.i = 0
          }, 3000)
        } else {
          navigator['app'].exitApp();
        }
      }
      else {
        this.location.back();
      }
    });


    document.addEventListener("deviceready", function () {
      var successCallback = function () {
        console.log("The screenshots are not allowed now.");
      };
      var errorCallback = function (err) {
        console.error("An error ocurred : " + err);
      };
      OurCodeWorldpreventscreenshots.disable(successCallback, errorCallback);
    }, false);
    this.shared.loadUser();
    this.shared.LoadSettings();
    // console.log(this.user)
    if (this.shared.userData == null) {
      console.log(this.shared.userData)
      this.menuCtrl.enable(false);
      return;
    } else {
      this.menuCtrl.enable(true);
      this.router.navigate(["/home"], { replaceUrl: true });
    }
  }

  openPage(page) {
    this.router.navigate([page]);
    this.menuCtrl.close();
  }
  logout() {
    if (this.shared.userData.social_type == "twitter") {
      this.twitter.logout().then(res => {
        console.log(res);
        localStorage.clear();
        this.router.navigate(['/intro']);
        this.menuCtrl.close();
      })
    } else {
      this.fb.logout().then(res => {
        console.log(res);
        localStorage.clear();
        this.router.navigate(['/intro']);
        this.menuCtrl.close();
      })
    }
  }
  rateUs() {
    // this.market.open("com.codanyon.spatula");
    window.open("https://spatulagroup.com/feedback", '_system', "location=yes");
    this.menuCtrl.close();
  }
}
