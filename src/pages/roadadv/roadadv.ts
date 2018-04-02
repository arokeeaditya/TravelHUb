import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoadadvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roadadv',
  templateUrl: 'roadadv.html',
})
export class RoadadvPage {

  public buttonClicked: boolean = false;
  public zipped: boolean = true;
  public buttonClicked1: boolean = false;
  public zipped1: boolean = true;
  public buttonClicked2: boolean = false;
  public zipped2: boolean = true;
  public buttonClicked3: boolean = false;
  public zipped3: boolean = true;
  public buttonClicked4: boolean = false;
  public zipped4: boolean = true;

  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }

  public onButtonClick1() {
    this.buttonClicked1 = !this.buttonClicked1;
}

public onButtonClick2() {
  this.buttonClicked2 = !this.buttonClicked2;
}
public onButtonClick3() {
  this.buttonClicked3 = !this.buttonClicked3;
}
public onButtonClick4() {
  this.buttonClicked4 = !this.buttonClicked4;
}


  // visible = false;
  // toggle() {
  //  this.visible = !this.visible;
  // }

  info

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=this.navParams.data.item
  }






  toggleZipped(): void {
    this.zipped = !this.zipped;}
    toggleZipped1(): void {
      this.zipped1 = !this.zipped1;}
      toggleZipped2(): void {
        this.zipped2 = !this.zipped2;}
        toggleZipped3(): void {
          this.zipped3 = !this.zipped3;}
          toggleZipped4(): void {
            this.zipped4 = !this.zipped4;}




  ionViewDidLoad() {
    console.log('ionViewDidLoad RoadadvPage');
  }

}
