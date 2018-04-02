import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopnaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topnature',
  templateUrl: 'topnature.html',
})
export class TopnaturePage {
info
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item
  }


  public buttonClicked: boolean = false;
  public zipped: boolean = true;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopnaturePage');
  }

  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
}

toggleZipped(): void {
  this.zipped = !this.zipped;}

}
