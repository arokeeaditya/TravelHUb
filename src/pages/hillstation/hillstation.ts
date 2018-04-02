import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HillstationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hillstation',
  templateUrl: 'hillstation.html',
})
export class HillstationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HillstationPage');
  }

info
  public buttonClicked: boolean = false;
  public zipped: boolean = true;

  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
}

toggleZipped(): void {
  this.zipped = !this.zipped;}

}
