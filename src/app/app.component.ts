import { TopPage } from './../pages/top/top';
import { FamilyPage } from './../pages/family/family';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { timer } from 'rxjs/observable/timer';



import { AdventurePage } from './../pages/adventure/adventure';
import { TravlerPage } from './../pages/travler/travler';
import { SplashPage } from '../pages/splash/splash';
import { HillPage } from '../pages/hill/hill';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage;

  pages: Array<{title: string, component: any}>;

  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [



      { title: 'Home', component: HomePage },
      {title: 'Family Trips', component: FamilyPage },
      { title: 'Adventure', component: AdventurePage},
      { title: 'Travler', component: TravlerPage},
      { title: 'Water Falls', component: TopPage },
      { title: 'Hill Stations', component: HillPage },
      {title: 'Contact Us', component: HomePage},
      { title: 'About US', component: AdventurePage},
      { title: 'Tourist Security', component: TravlerPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



}
