import { LoginPage } from './../login/login';
import { HomeblogPage } from './../homeblog/homeblog';
import { Http,Headers } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import 'rxjs/add/operator/map';





@Component({
  selector: 'page-home',
  templateUrl:'home.html'
})
export class HomePage {

  searchQuery: string = '';

  logginIN=false;

  constructor(public navCtrl: NavController, public http:Http ) {

    this.initializeItems();
  }

  initializeItems() {

      // this.data= ['item'

      // ]
  }

  data: any=[] ;
  url : string;
  public unregisterBackButtonAction: any;

  // ionViewDidLoad(){
  //   this.loadJson();

  //  }



  nav(item) {
    this.navCtrl.push(HomeblogPage, { item:item});
  }
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }
  //https://api.myjson.com/bins/v5hiz

  // loadJson() {
  //   this.http.get(this.url='https://api.myjson.com/bins/v5hiz')

  //   .map(res => res.json())
  //   .subscribe(data => {
  //     this.data = data;
  //           console.log(data);
  //   }, (err) => {
  //     console.log("failed loading json data");
  //   });
  //   }



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




//       Logout(){
//       this.googlePlus.disconnect().then(
//              (msg) => {
//                    if(firebase.auth().currentUser){
//                      firebase.auth().signOut();
//                      this.navCtrl.push(LoginPage);
//                    }

//              });

//    this.facebook.logout().then(res=>{
//                this.logginIN=false;
//                this.navCtrl.push(LoginPage);
//   } );

//             (<any>window).AccountKitPlugin.logout((then)=>{
//                  this.navCtrl.push(LoginPage);
//                });

//  }

getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.data = this.data.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}


}


