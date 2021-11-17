import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-free-courses',
  templateUrl: './free-courses.page.html',
  styleUrls: ['./free-courses.page.scss'],
})
export class FreeCoursesPage implements OnInit {
  courses: any = [];
  topSlider: any = []
  bottomSlider: any = [];
  slideOpts = {
    autoplay: true,
  }
  loading = true;
  constructor(public shared: SharedService, public location: Location, public http: HTTP, public router: Router) { }

  ngOnInit() {
    this.GetCourses();
  }
  goBack() {
    this.location.back()
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
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    this.http.get(this.shared.base_url + "getFreeCourses",{}, nativeHeaders).then(resp => {
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
