import { TravelerblogPage } from './../travelerblog/travelerblog';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import { ActionSheetController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the TravlerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travler',
  templateUrl: 'travler.html',
})
export class TravlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http ) {
  }

  data: any=[] ;
  url : string;

  ionViewDidLoad(){
    this.loadJson();

   }

  nav(item) {
    this.navCtrl.push(TravelerblogPage, { item:item});
  }
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }
  //https://api.myjson.com/bins/v5hiz

  loadJson() {
    this.http.get(this.url='https://api.myjson.com/bins/v5hiz')

    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
            console.log(data);
    }, (err) => {
      console.log("failed loading json data");
    });
    }



    //infinite scroll
    doInfinite(infiniteScroll) {

      this.http.get(this.url='https://api.myjson.com/bins/v5hiz')
      .map(res => res.json())
      .subscribe(data => {

        this.data = this.data.concat(data);
               infiniteScroll.complete();
      });



    }


    //refresh

    doRefresh(refresher) {
      this.http.get(this.url='https://api.myjson.com/bins/v5hiz')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
            });
        refresher.complete();
      };

}
