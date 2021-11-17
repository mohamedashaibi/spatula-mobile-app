import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-select-login',
  templateUrl: './select-login.page.html',
  styleUrls: ['./select-login.page.scss'],
})
export class SelectLoginPage implements OnInit {

  constructor(public shared: SharedService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login']);
  };

  browser;

  loadStopCallBack() {
    if (this.browser != undefined) {
      this.browser.show();
    }
  }

  loadErrorCallBack(params) {


    this.browser.close();

    this.browser = undefined;

  }

  messageCallBack(params) {
  }


}
