import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SharedService } from 'src/app/Services/shared.service';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    name: "",
    email: "",
    social_id: "",
    social_type: ""
  }
  constructor(public fb: Facebook, public shared: SharedService, public router: Router,
    public menuCtrl: MenuController,
    public http: HttpClient, public twitter: TwitterConnect, public plt: Platform, public natHttp: HTTP) { }

  ngOnInit() {
  }

  faceLogin() {
    this.fb.login(["email", "public_profile"]).then(res => {

      console.error(res)
      if (!res.authResponse) {
        console.error("Cannot find the authResponse");
        return;
      }
      this.fb.api('/me?fields=email,name,picture.width(720).as(picure_large)&access_token=' + res.authResponse.accessToken, null).then(async profileInfo => {
        this.user.name = profileInfo.name;
        this.user.email = profileInfo.email;
        this.user.social_id = profileInfo.id;
        this.user["profilePic"] = profileInfo.picure_large.data.url;
        this.user.social_type = "facebook";
        console.log("This is before the Login function " + this.user, profileInfo);
        await this.shared.presentLoading();
        this.Login(this.user).then(resp => {
          let res = JSON.parse(resp.data)
          console.log("This is the res in login = " + res)
          // this.user["profilePic"] = resp["profile_image_url"];
          this.user["api_token"] = res["api_token"];
          this.user["created_at"] = res["created_at"];
          localStorage.setItem('spatulaUser', JSON.stringify(this.user));
          this.shared.loadUser();
          this.shared.hide();
          this.menuCtrl.enable(true);
          this.router.navigate(['/home']);
        }, async err => {
          this.shared.hide();
          console.log(err)
          this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
        });
      })
    }).catch(res => {
      console.error("Error is rubbish");
      console.error('Error in fb' + JSON.stringify(res));
      this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
    })
  }

  insta() {
    this.router.navigate(["/home"])
  }
  twitterLogin() {
    this.twitter.login().then(res => {
      console.log(res)
      this.shared.TwitterAuth(res).then(async (result) => {
        console.log(result.additionalUserInfo.profile);
        this.user.name = result.additionalUserInfo.profile["name"];
        this.user.social_id = result.additionalUserInfo.profile["id"];
        this.user.social_type = "twitter";
        this.user.email = result.additionalUserInfo.profile["email"];
        this.user["profilePic"] = result.additionalUserInfo.profile["profile_image_url_https"];
        await this.shared.presentLoading();
        console.log("okookoook")
        this.Login(this.user).then(resp => {
          let res = JSON.parse(resp.data)
          console.log(res)
          // this.user["profilePic"] = resp["profile_image_url"];
          this.user["api_token"] = res["api_token"];
          this.user["created_at"] = res["created_at"];
          localStorage.setItem('spatulaUser', JSON.stringify(this.user));
          this.shared.loadUser();
          this.shared.hide();
          this.menuCtrl.enable(true);
          this.router.navigate(['/home']);
        }, err => {
          this.shared.hide();
          console.log(err);
          this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
        });
        console.log('You have been successfully logged in!')
      }).catch((error) => {
        console.log(error)
        this.shared.showErroToast("حدث خطأ ما برجاء المحاولة لاحقا");
      })

    }, err => {
      console.log(err)
    })
  }

  Login(user) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
      // };
    }
    let params = {
      name: user.name,
      email: user.email,
      social_id: user.social_id,
      social_type: user.social_type
    }


    const nativeHeaders = {
      'Content-Type': 'application/json',
    };

    // if (!this.plt.is("cordova")) {
    //   return this.http.post(this.shared.base_url + "login", params, headers);
    // } else {
    return this.natHttp.post(this.shared.base_url + "login", params, nativeHeaders)
    // }

  }

}
