import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { Http,Headers } from '@angular/http';
import { NgSwitch } from '@angular/common';

/**
 * Generated class for the HomeblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeblog',
  templateUrl: 'homeblog.html',
})
export class HomeblogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item

  }

  info

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeblogPage');
  }

}
