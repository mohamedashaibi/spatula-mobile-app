import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-paid-courses',
  templateUrl: './paid-courses.page.html',
  styleUrls: ['./paid-courses.page.scss'],
})
export class PaidCoursesPage implements OnInit {
  loading = true;
  courses;
  slideOpts = {
    autoplay: true,
  }
  constructor(public shared: SharedService, public location: Location, public http: HTTP, public router: Router) { }

  ngOnInit() {
    this.GetCourses();
  }
  goBack() {
    this.location.back();
  }

  goToCourse(course_id) {
    this.router.navigate(["/course-data"], { queryParams: { course_id: course_id } });
  }
  doRefresh(evt) {
    this.GetCourses(evt)
  }
  GetCourses(evt?) {
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
    this.http.post(this.shared.base_url + "getPaidCourses", params, nativeHeaders).then(resp => {
      console.log(resp)
      let res = JSON.parse(resp.data);

      // localStorage.setItem('swiper', JSON.stringify(resp));
      this.courses = res;
      this.loading = false
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      // this.bottomSlider = resp["bottom"];
    }, err => {
      console.log(err)
      this.shared.showErroToast();
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.loading = false;
    });
  }

}
