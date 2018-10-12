import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChannelsPage } from '../pages/channels/channels';
import { DataProvider } from '../providers/data/data';
import { HttpModule } from '@angular/http';
import { WebIntent } from '@ionic-native/web-intent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChannelsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChannelsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebIntent,
    DataProvider
  ]
})
export class AppModule {}
