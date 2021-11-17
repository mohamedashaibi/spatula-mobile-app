import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {
  myOrders: any = [];
  loading = true;
  slideOpts = {
    autoplay: true,
  }
  constructor(public shared: SharedService, public http: HTTP, public location: Location, public router: Router) {
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
  loadOrders(evt?) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
      // };
    }
    let params = {
        api_token: this.shared.token,
      }
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    this.http.post(this.shared.base_url + "userOrders", params, nativeHeaders).then(resp => {
      console.log(resp)
      let res = JSON.parse(resp.data);

      // localStorage.setItem('swiper', JSON.stringify(resp));
      this.myOrders = res["orders"];
      this.loading = false
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      // this.bottomSlider = resp["bottom"];
    }, err => {
      this.shared.showErroToast();
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.loading = false;
    });
  }
  goToCourse(course_id) {
    this.router.navigate(["/course-data"], { queryParams: { course_id: course_id } });
  }
}
