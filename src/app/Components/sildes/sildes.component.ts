import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-sildes',
  templateUrl: './sildes.component.html',
  styleUrls: ['./sildes.component.scss'],
})
export class SildesComponent implements OnInit {
  slideOpts = {
    autoplay: true,
  }

  constructor(public http : HttpClient,public shared : SharedService) { }

  ngOnInit() {}
  
  // GetSliderFunc(evt?) {
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     }),
  //     // };
  //   }
  //   this.http.get(this.shared.base_url + "getHomeView", headers).subscribe(resp => {
  //     console.log(resp)
  //     localStorage.setItem('swiper', JSON.stringify(resp));
  //     this.shared.topSlider = resp["tops"];
  //     this.shared.bottomSlider = resp["bottom"];
  //     // this.loading = false;
  //     if (evt)
  //       setTimeout(() => {
  //         console.log('Async operation has ended');
  //         evt.target.complete();
  //       }, 2000);
  //   }, err => {
  //     console.log(err)
  //     if (evt)
  //       setTimeout(() => {
  //         console.log('Async operation has ended');
  //         evt.target.complete();
  //       }, 2000);
  //     this.shared.showErroToast();
  //     // this.loading = false;
  //   });
  // }


}
