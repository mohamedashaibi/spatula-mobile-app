import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.page.html',
  styleUrls: ['./course-data.page.scss'],
})
export class CourseDataPage implements OnInit {
  course;
  course_id: any;
  loading = true;
  constructor(public router: Router, public alertCtrl: AlertController, public location: Location, public shared: SharedService, public http: HTTP, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.course_id = res["course_id"];
      this.LoadCourse();
    })
  }

  goBack() {
    this.location.back();
  }
  goToRecipe(id) {
    this.router.navigate(["recipe-data"], { queryParams: { recipe_id: id } });
  }
  goToPurchase() {
    this.shared.selectedCourse = this.course;
    this.router.navigate(["purchase"]);

  }
  LoadCourse(evt?) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),

      // };
    }
    let params = {
      api_token: this.shared.token,
      course_id: parseInt(this.course_id)
    }

    console.log(params)
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    this.http.post(this.shared.base_url + "getCourseData", params, nativeHeaders).then(resp => {
      console.log(resp)
      let res = JSON.parse(resp.data);
      this.course = res;
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.loading = false;
    }, async err => {
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.loading = false;
      this.shared.showErroAlert();
    })
  }
  doRefresh(evt) {
    this.LoadCourse(evt)
  }
}
