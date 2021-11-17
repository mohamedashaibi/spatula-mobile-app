import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-my-downloads',
  templateUrl: './my-downloads.page.html',
  styleUrls: ['./my-downloads.page.scss'],
})
export class MyDownloadsPage implements OnInit {
  myVids = [];
  loading = true;
  slideOpts = {
    autoplay: true,
  }
  constructor(public shared: SharedService, public location: Location, public router: Router) {
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
    if (evt)
      setTimeout(() => {
        console.log('Async operation has ended');
        evt.target.complete();
      }, 2000);

    let vids = JSON.parse(localStorage.getItem("videos"));
    if (vids && vids.length > 0) {
      for (let i = 0; i < vids.length; i++) {
        this.myVids.push(vids[i]);
      }
    }

    vids = JSON.parse(localStorage.getItem("paidVideos"));
    if (vids && vids.length > 0) {
      for (let i = 0; i < vids.length; i++) {
        this.myVids.push(vids[i]);
      }
    }
    this.loading = false
  }
  goToRecipe(id) {
    this.router.navigate(["recipe-data"], { queryParams: { recipe_id: id } });
  }
}
