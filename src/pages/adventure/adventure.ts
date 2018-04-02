
import { WateradvPage } from './../wateradv/wateradv';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkyadvPage } from  '../skyadv/skyadv';
import { RoadadventurePage } from '../roadadventure/roadadventure';



/**
 * Generated class for the AdventurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adventure',
  templateUrl: 'adventure.html',
})
export class AdventurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdventurePage');
  }

  wateradv(){
    this.navCtrl.push(WateradvPage,{
val: 'aditya'
    });

  }

  skyadv(){
    this.navCtrl.push(SkyadvPage,{
val: 'aditya'
    });

  }

  roadadv(){
    this.navCtrl.push(RoadadventurePage,{
val: 'aditya'
    });

  }
}


