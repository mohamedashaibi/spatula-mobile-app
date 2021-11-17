import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public menuCtrl: MenuController, public router: Router, public http: HttpClient, public shared: SharedService) {
    this.menuCtrl.enable(false);

  }
  ngOnInit() {
  }
  enter() {
    document.querySelector('#intro2').classList.add('fade-animation');
    setTimeout(() => {
      document.querySelector('#intro3').classList.add('fade-animation2');
    }, 4000);
  }

  discover() {
    this.router.navigate(["/select-login"])
  }


}
