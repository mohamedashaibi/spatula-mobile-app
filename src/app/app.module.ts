import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { Market } from '@ionic-native/market/ngx';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ComponentsModule } from './Components/components.module';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    Market,
    Network,
    File,
    FileTransfer,
    FilePath,
    Facebook,
    HTTP,
    TwitterConnect,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
