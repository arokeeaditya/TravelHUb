
import { TopnaturePage } from './../pages/topnature/topnature';
import { FamilytripPage } from './../pages/familytrip/familytrip';
import { FamilyPage } from './../pages/family/family';
import { TravelerblogPage } from './../pages/travelerblog/travelerblog';
import { SkyadvPage } from './../pages/skyadv/skyadv';


import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AdventurePage} from '../pages/adventure/adventure';
import { TravlerPage } from '../pages/travler/travler';
import { WateradvPage } from './../pages/wateradv/wateradv';
import { ScubaPage } from '../pages/scuba/scuba';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { SplashPage } from './../pages/splash/splash';
import { SplashPageModule } from '../pages/splash/splash.module';
import { SkyadventurePage } from '../pages/skyadventure/skyadventure';
import { RoadadventurePage } from '../pages/roadadventure/roadadventure';
import { RoadadvPage } from '../pages/roadadv/roadadv';
import { HttpModule } from '@angular/http';
import { HomeblogPage } from '../pages/homeblog/homeblog';
import { TopPage } from '../pages/top/top';
import { HillPage } from '../pages/hill/hill';
import { HillstationPage } from '../pages/hillstation/hillstation';











@NgModule({
  declarations: [
    MyApp
    // HomePage,

    // AdventurePage,
    // TravlerPage,
    // WateradvPage,
    // ScubaPage,
    // WelcomePage,
    // LoginPage,
    // SkyadventurePage,
    // SkyadvPage,
    // RoadadvPage,
    // RoadadventurePage,
    // HomeblogPage,
    // TravelerblogPage,
    // FamilyPage,
    // FamilytripPage,
    // TopPage,
    // TopnaturePage,
    // HillPage,
    // HillstationPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SplashPageModule,
    HttpModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    AdventurePage,
    TravlerPage,
    WateradvPage,
    ScubaPage,
    WelcomePage,
    LoginPage,
    SkyadventurePage,
    SkyadvPage,
    RoadadvPage,
    RoadadventurePage,
    HomeblogPage,
    TravelerblogPage,
    FamilyPage,
    FamilytripPage,
    TopPage,
    TopnaturePage,
    HillPage,
    HillstationPage


  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
