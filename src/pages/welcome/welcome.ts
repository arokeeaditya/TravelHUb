import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  info

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
