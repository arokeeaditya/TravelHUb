import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FamilytripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familytrip',
  templateUrl: 'familytrip.html',
})
export class FamilytripPage {


  public buttonClicked: boolean = false;
  public zipped: boolean = true;
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilytripPage');
  }
info

  toggleZipped(): void {
    this.zipped = !this.zipped;}

}
