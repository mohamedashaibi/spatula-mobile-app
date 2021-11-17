import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.page.html',
  styleUrls: ['./recipe-data.page.scss'],
})
export class RecipeDataPage implements OnInit {
  public win: any = window;
  loading = true;
  recipe_id;
  recipe_data;
  movie;
  videos = [];
  recipes;
  exist = false;
  startDownload = false;
  downloadProgress = .0;
  constructor(public shared: SharedService, public route: ActivatedRoute, public http: HTTP,
    public loadingController: LoadingController, public toastController: ToastController,
    public alertCtrl: AlertController, public location: Location, private sanitizer: DomSanitizer,
    public networkState: Network, public file: File, public filetransfer: FileTransfer) {
    route.queryParams.subscribe(res => {
      this.recipe_id = res["recipe_id"];
      this.LoadRecipe();
    })
  }
  closeFullScreen() { }
  openFullScreen() { }
  ngOnInit() {
    // document.addEventListener("deviceready", function () {
    //   var successCallback = function () {
    //   };
    //   var errorCallback = function (err) {
    //     console.error("An error ocurred : " + err);
    //   };
    //   OurCodeWorldpreventscreenshots.disable(this.successCallback(), this.errorCallback());
    // }, false);
    // cordova.plugins.OurCodeWorldpreventscreenshots.disable()ك
  }

  trustSrc(value: string, ...args) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
  doRefresh(evt) {
    this.LoadRecipe(evt)
  }
  async LoadRecipe(evt?) {
    this.movie = { src: null, title: "", play: false, load: false };

    if (localStorage.getItem('videos')) {
      this.recipes = JSON.parse(localStorage.getItem('videos'));
      for (var i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id == this.recipe_id) {
          this.recipe_data = this.recipes[i];
         await this.readAsDataURL(this.recipe_data.video).then(res => {
            console.log(res)
            this.recipe_data.video = res;
          })
          console.log(this.recipe_data);
          break;
        }
      }
    }
    if (!this.recipe_data) {
      if (localStorage.getItem('paidVideos')) {
        this.recipes = JSON.parse(localStorage.getItem('paidVideos'));
        for (var i = 0; i < this.recipes.length; i++) {
          if (this.recipes[i].id == this.recipe_id) {
            this.recipe_data = this.recipes[i];
            console.log(this.recipe_data);
           await this.readAsDataURL(this.recipe_data.video).then(res => {
              this.recipe_data.video = res;
            })
            break;

          }
        }

      }
    }
    if (this.recipe_data) {
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
      this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };
      this.exist = true;
      this.loading = false;
      return;
    }
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),

      // };
    }
    let params = {
      api_token: this.shared.token,
      recipe_id: parseInt(this.recipe_id)
    }
    console.log(params)
    const nativeHeaders = {
      'Content-Type': 'application/json',
    };
    this.http.post(this.shared.base_url + "getRecipeData", params, nativeHeaders).then(resp => {
      let res = JSON.parse(resp.data);
      console.log(res)
      this.recipe_data = res;
      this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };
      this.loading = false;
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
    }, async err => {
      this.shared.showErroAlert();
      this.loading = false;
      if (evt)
        setTimeout(() => {
          console.log('Async operation has ended');
          evt.target.complete();
        }, 2000);
    })
  }

  goBack() {
    this.location.back();
  }
  readAsDataURL(file_name) {
    var promsie = new Promise((resolve, reject) => {
      this.file.readAsDataURL(this.file.dataDirectory + 'spatula/', file_name).then((fileEntry) => {
        resolve(fileEntry)
      }).catch((err) => {
        reject(err)
      });
    })
    return promsie
  }

  playVideo() {
    if (!this.exist) {
      this.ask()
    }
    console.log(this.recipe_data)
    var player = document.getElementById("video_1");
    console.log(player)
    player.style.display = "block";
    this.movie = { src: this.recipe_data.video, title: this.recipe_data.title, play: true, load: true };

    var player = document.getElementById("video_1");
    var placeholder = document.getElementById("placeholder_1");
    placeholder.style.top = player.offsetTop + "px";
    placeholder.style.left = player.offsetLeft + "px";

    player.onwaiting = function () {
      showPlaceholder(placeholder, this);
    };
    player.onplaying = function () {
      hidePlaceholder(placeholder, this);
    };


    function showPlaceholder(img, vid) {
      img.style.height = vid.scrollHeight + "px";
      img.style.width = vid.scrollWidth + "px";
      img.style.display = "block";
    }

    function hidePlaceholder(img, vid) {
      img.style.display = "none";
    }
    var tempSrc = this.recipe_data.video;
    console.log(this.movie)
    document.getElementById('playbutton').style.display = "none";

    var options = {
      successCallback: function () {
        console.log("Video was closed without error.");
      },
      errorCallback: function (errMsg) {
        console.log("Error! " + errMsg);
      },
      shouldAutoClose: true,  // true(default)/false
      controls: true, // true(default)/false. Used to hide controls on fullscreen
      secure: true // true(default)/false. Used to secure video from taking screenshot and screen recording
    };
  }
  async ask() {
    const alert = await this.alertCtrl.create({
      header: 'سباتولا',
      message: 'هل تريد تحميل هذا الفيديو؟',
      cssClass: 'vtc-popup',
      buttons: [
        {
          text: 'الغاء',
          role: 'Cancel',
          handler: (e) => {
            return;
          }
        }, {
          text: 'موافق',
          handler: async (e) => {
            if (this.networkState.type != 'none') {
              console.log("Download Started ... ");
              let loading = await this.loadingController.create({
                cssClass: 'loading-msg',
                message: 'برجاء الانتظار'
              })
              const toast = await this.toastController.create({
                cssClass: 'toast-msg',
                message: 'جارى تحميل الفيديو',
                animated: true,
                color: "dark",
                buttons: [
                  {
                    text: 'إخفاء',
                    cssClass: 'toast-hide-btn',
                    handler: () => {
                      toast.dismiss()
                    }
                  }
                ]
              });

              await loading.present();
              this.startDownload = true;
              console.log(this.recipe_data);
              var uri = encodeURI(this.recipe_data.video);
              const transfer: FileTransferObject = this.filetransfer.create();
              let name = new Date().getTime() + '.mp4';
              loading.dismiss();
              toast.present();
              transfer.download(uri, this.file.dataDirectory + "/spatula/" + name, true).then((entry) => {
                if (this.recipe_data.type == 'paid') {
                  if (localStorage.getItem('paidVideos')) {
                    this.videos = JSON.parse(localStorage.getItem('padiVideos'));
                  } else {
                    this.videos = [];
                  }
                } else {
                  if (localStorage.getItem('videos')) {
                    this.videos = JSON.parse(localStorage.getItem('videos'));
                  } else {
                    this.videos = [];
                  }
                }
                // this.recipe_data.video = entry.toURL();
                this.recipe_data.video = name;
                this.recipe_data.id = this.recipe_id;
                let indexFound;
                for (var i = 0; i < this.videos.length; i++) {
                  if (this.videos[i].id == this.recipe_data.id) {
                    indexFound = i;
                  }
                }
                if (indexFound) {
                  this.videos[indexFound] = this.recipe_data;
                }
                else {
                  this.videos.push(this.recipe_data);
                }

                if (this.recipe_data.type == 'paid') {
                  localStorage.setItem('paidVideos', JSON.stringify(this.videos));
                }
                else {
                  localStorage.setItem('videos', JSON.stringify(this.videos));
                }
                this.startDownload = false;
                this.exist = true;
                toast.dismiss()
                this.presentToast('تم حفظ الفيديو بنجاح', 'success')
              }, error => {
                console.log(error)
                this.shared.showErroToast("تعذر تحميل الفيديو");
              });

              transfer.onProgress((progress) => {
                let perc = Math.floor((progress.loaded / progress.total) * 100)
                toast.message = 'تم تحميل ' + perc.toString() + '%'

              });
            } else {
              this.shared.showErroAlert();
            }
          }
        }]
    })
    await alert.present();
  }
  async presentToast(msg, color?) {
    const toast = await this.toastController.create({
      cssClass: 'toast-msg',
      message: msg,
      color: color ? color : "dark",
      duration: 3000
    });
    toast.present();
  }

  divsOpen(id) {

    if (document.getElementById(id).classList.contains('opened')) {
      document.getElementById(id).classList.remove('opened');
      // $ionicScrollDelegate.resize();
    }
    else {
      document.getElementById(id).classList.add('opened');
      // $ionicScrollDelegate.resize();
    }
  }
}