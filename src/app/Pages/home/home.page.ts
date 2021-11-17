import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { IonSlides, MenuController } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('mySlider', { static: false }) slider: IonSlides;

  slideOpts = {
    autoplay: true,
  }
  loading = true;
  constructor(public menuCtrl: MenuController, public shared: SharedService, public http: HTTP, public router: Router) {
    this.menuCtrl.enable(true);
    this.GetSliderFunc();
  }

  ngOnInit() {
  }

  doRefresh(evt) {
    this.GetSliderFunc(evt)
  }
  GetSliderFunc(evt?) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
      // };
    }

    const nativeHeaders = {
      'Content-Type': 'application/json',
    };

    this.http.get(this.shared.base_url + "getHomeView", {}, nativeHeaders).then(resp => {
      console.log(JSON.parse(resp.data))
      let res = JSON.parse(resp.data);
      localStorage.setItem('swiper', JSON.stringify(res));
      this.shared.topSlider = res["tops"];
      this.shared.bottomSlider = res["bottom"];
      this.loading = false;
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
    }, err => {
      console.log(err)
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.shared.showErroToast();
      this.loading = false;
    });
  }


  paidCourses() {
    this.router.navigate(["paid-courses"])
  }
  freeCourses() {
    this.router.navigate(["free-courses"])

  }
  openFloat() {
    event.stopImmediatePropagation();
    document.querySelector('.backgorund-overlay').classList.add("show");
    document.querySelector('.float-section').classList.add("animate-float");
  }
  closeMenu() {
    // document.querySelector('.spatula-menu').classList.remove('spatula-menu-animation');
    document.querySelector('.backgorund-overlay').classList.remove("show");
    document.querySelector('.float-section').classList.remove("animate-float");
  }
}
