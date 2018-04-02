import { RoadadvPage } from './../roadadv/roadadv';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoadadventurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roadadventure',
  templateUrl: 'roadadventure.html',
})
export class RoadadventurePage {

  roaditems = [
    {
      'title': 'Treking',
      'top': 'Top Rated Scuba Diving loactions of India',
      'loc':'Andaman and Nicobar Islands:',
      'price': 'Rs 5,000 – 10,000',
      'description': 'The deep clean water and beautiful marine life makes Andaman and Nicobar Islands one of the most fascinating destinations for scuba diving in India. These islands offer many diving sites that have a terrific variety of marine animals such as Scorpion fish, Octopus, Angler fish, Sharks and Coral reefs as well.',
      'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5BIgZUgM6LPg6oeilfaWBJ50hjXm5Q8yLW3ivzNcDmOqMdpx',
      'loc1':'Goa:',
      'price1': 'Rs 5,000 – 8,000',
      'description1': 'If you think Goa is all about the beaches, clubs, shacks and alcohol, think again! There are a number of diving sites present in Goa that you must visit for sure to unearth the underwater treasure of Goa. The water bodies in Goa may not be the most ideal to dive in but they are pleasant enough.',
      'src1':'../../assets/imgs/Wateradv.png',
      'loc2':'Lakshadweep Islands:',
      'price2': 'Rs 4,000 – 7,000/-',
      'description2': '240 metres off the Malabar coast, a group of 36 islands collectively are known as the Lakshadweep Islands. Blessed with crystal clear water, coral sand, coral reefs and rich marine species, the Lakshadweep Islands must definitely be on your list of places to scuba dive.',
      'src2':'../../assets/imgs/Wateradv.png',
      'loc3':' Pondicherry: ',
      'price3': 'Rs 6,500 – 8,000/-',
      'description3': 'Pondicherry, known for its French architecture and history is ideally the place to attain self enlightenment and peace. The town offers a mix of modern heritage and spiritual culture. Pondicherry is also home to many diving sites with the presence of Orals, Lion fish, King fish, Moray eels, Eagle and Manta rays, Parrot fish, Sea snakes,and Tiger fish.  ',
      'src3':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5BIgZUgM6LPg6oeilfaWBJ50hjXm5Q8yLW3ivzNcDmOqMdpx',
      'loc4':'Karnataka: ',
      'price4': '5500 Rs/- to 7000 Rs/-',
      'description4': 'Coastal Karnataka is blessed with valleys, verdant forests, fresh backwaters and clear tropical waters. The diving sites here are home to the great diversity of fish life common to the Arabian sea and Goa. Whales, Turtles, Stingrays, Cobias and Stone fish can easily be spotted here.',
      'src4':'../../assets/imgs/Wateradv.png'
    },

    {
      'title': 'Cycling',
      'top': 'Top Rated Cycling loactions of India',
      'loc':'Andaman and Nicobar Islands:',
      'price': 'Rs 5,000 – 10,000',
      'description': 'The deep clean water and beautiful marine life makes Andaman and Nicobar Islands one of the most fascinating destinations for scuba diving in India. These islands offer many diving sites that have a terrific variety of marine animals such as Scorpion fish, Octopus, Angler fish, Sharks and Coral reefs as well.',
      'src':'https://i1.wp.com/kuwa-huru.com/wp-content/uploads/2016/12/Tanzania-Cycling-Adventure-e1481532947255.jpg?resize=870%2C640&ssl=1',
      'loc1':'Goa:',
      'price1': 'Rs 5,000 – 8,000',
      'description1': 'If you think Goa is all about the beaches, clubs, shacks and alcohol, think again! There are a number of diving sites present in Goa that you must visit for sure to unearth the underwater treasure of Goa. The water bodies in Goa may not be the most ideal to dive in but they are pleasant enough.',
      'src1':'https://i1.wp.com/kuwa-huru.com/wp-content/uploads/2016/12/Tanzania-Cycling-Adventure-e1481532947255.jpg?resize=870%2C640&ssl=1',
      'loc2':'Lakshadweep Islands:',
      'price2': 'Rs 4,000 – 7,000/-',
      'description2': '240 metres off the Malabar coast, a group of 36 islands collectively are known as the Lakshadweep Islands. Blessed with crystal clear water, coral sand, coral reefs and rich marine species, the Lakshadweep Islands must definitely be on your list of places to scuba dive.',
      'src2':'https://i1.wp.com/kuwa-huru.com/wp-content/uploads/2016/12/Tanzania-Cycling-Adventure-e1481532947255.jpg?resize=870%2C640&ssl=1',
      'loc3':' Pondicherry: ',
      'price3': 'Rs 6,500 – 8,000/-',
      'description3': 'Pondicherry, known for its French architecture and history is ideally the place to attain self enlightenment and peace. The town offers a mix of modern heritage and spiritual culture. Pondicherry is also home to many diving sites with the presence of Orals, Lion fish, King fish, Moray eels, Eagle and Manta rays, Parrot fish, Sea snakes,and Tiger fish.  ',
      'src3':'https://i1.wp.com/kuwa-huru.com/wp-content/uploads/2016/12/Tanzania-Cycling-Adventure-e1481532947255.jpg?resize=870%2C640&ssl=1',
      'loc4':'Karnataka: ',
      'price4': '5500 Rs/- to 7000 Rs/-',
      'description4': 'Coastal Karnataka is blessed with valleys, verdant forests, fresh backwaters and clear tropical waters. The diving sites here are home to the great diversity of fish life common to the Arabian sea and Goa. Whales, Turtles, Stingrays, Cobias and Stone fish can easily be spotted here.',
      'src4':'https://i1.wp.com/kuwa-huru.com/wp-content/uploads/2016/12/Tanzania-Cycling-Adventure-e1481532947255.jpg?resize=870%2C640&ssl=1'
    },
    {
      'title': 'Bungee Jumping',
      'top': 'Top Rated Fly Board loactions of India',
      'loc':'Andaman and Nicobar Islands:',
      'price': 'Rs 5,000 – 10,000',
      'description': 'The deep clean water and beautiful marine life makes Andaman and Nicobar Islands one of the most fascinating destinations for scuba diving in India. These islands offer many diving sites that have a terrific variety of marine animals such as Scorpion fish, Octopus, Angler fish, Sharks and Coral reefs as well.',
      'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSf0jNviEP73egYw2OkFxHRexLcCIy26MP8Q5ev8vxj8YbccHIQ',
      'loc1':'Goa:',
      'price1': 'Rs 5,000 – 8,000',
      'description1': 'If you think Goa is all about the beaches, clubs, shacks and alcohol, think again! There are a number of diving sites present in Goa that you must visit for sure to unearth the underwater treasure of Goa. The water bodies in Goa may not be the most ideal to dive in but they are pleasant enough.',
      'src1':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSf0jNviEP73egYw2OkFxHRexLcCIy26MP8Q5ev8vxj8YbccHIQ',
      'loc2':'Lakshadweep Islands:',
      'price2': 'Rs 4,000 – 7,000/-',
      'description2': '240 metres off the Malabar coast, a group of 36 islands collectively are known as the Lakshadweep Islands. Blessed with crystal clear water, coral sand, coral reefs and rich marine species, the Lakshadweep Islands must definitely be on your list of places to scuba dive.',
      'src2':'../../assets/imgs/Wateradv.png',
      'loc3':' Pondicherry: ',
      'price3': 'Rs 6,500 – 8,000/-',
      'description3': 'Pondicherry, known for its French architecture and history is ideally the place to attain self enlightenment and peace. The town offers a mix of modern heritage and spiritual culture. Pondicherry is also home to many diving sites with the presence of Orals, Lion fish, King fish, Moray eels, Eagle and Manta rays, Parrot fish, Sea snakes,and Tiger fish.  ',
      'src3':'../../assets/imgs/Wateradv.png',
      'loc4':'Karnataka: ',
      'price4': '5500 Rs/- to 7000 Rs/-',
      'description4': 'Coastal Karnataka is blessed with valleys, verdant forests, fresh backwaters and clear tropical waters. The diving sites here are home to the great diversity of fish life common to the Arabian sea and Goa. Whales, Turtles, Stingrays, Cobias and Stone fish can easily be spotted here.',
      'src4':'../../assets/imgs/Wateradv.png'
    },
    {
      "title": "Motor Bike",
      "loc": "Ganga River, Rishikesh, Uttarakhand:",
      "price": "Rs 5,000 – 10,000",
      "description": "",
      "src": "http://www.weekendthrill.com/wp-content/uploads/2016/10/Bike-ride-to-Phansad.jpg",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": " ",
      "src1": "http://www.offroadbajaadventures.com/images/6g.jpg",
      "loc2": "",
      "price2": "",
      "description2": "",
      "src2": "",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "",
      "src3": "",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "",
      "src4": ""
    },
    {
      "title": "DUne Bashing",
      "loc": "Ganga River, Rishikesh, Uttarakhand:",
      "price": "Rs 5,000 – 10,000",
      "description": "",
      "src": "https://i.ytimg.com/vi/5FwzVQitxeA/maxresdefault.jpg",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": " ",
      "src1": "https://www.thedubaisafari.com/wp-content/gallery/dune-bashing/dune-bashing-in-dubai-desert-safari.jpg",
      "loc2": "",
      "price2": "",
      "description2": "",
      "src2": "",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "",
      "src3": "",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "",
      "src4": ""
    },
    {
      "title": "Snow Adventure",
      "loc": "Ganga River, Rishikesh, Uttarakhand:",
      "price": "Rs 5,000 – 10,000",
      "description": "",
      "src": "http://ak5.picdn.net/shutterstock/videos/9874415/thumb/8.jpg",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": " ",
      "src1": "https://i.ytimg.com/vi/wL0OtKyYNm0/maxresdefault.jpg",
      "loc2": "",
      "price2": "",
      "description2": "",
      "src2": "https://i.ytimg.com/vi/wL0OtKyYNm0/maxresdefault.jpg",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "",
      "src3": "",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "",
      "src4": ""
    },
    {
      "title": "Wild Life Adventures",
      "loc": "Ganga River, Rishikesh, Uttarakhand:",
      "price": "Rs 5,000 – 10,000",
      "description": "",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHW7Bg_4Ay4AEhis-ABpZVKaiH_ZPKwScFmd-jROOOGqKtBRm",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": " ",
      "src1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHW7Bg_4Ay4AEhis-ABpZVKaiH_ZPKwScFmd-jROOOGqKtBRm",
      "loc2": "",
      "price2": "",
      "description2": "",
      "src2": "",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "",
      "src3": "",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "",
      "src4": ""
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoadadventurePage');
  }


  nav(item) {
    this.navCtrl.push(RoadadvPage, { item:item});
  }


}
