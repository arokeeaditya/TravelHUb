import { TopnaturePage } from './../topnature/topnature';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  items = [
    {
      "title": "Jog Falls, Shimoga, Karnataka",
      "loc": "Karnataka:",
      "price": "height 253 meters",
      "description": "Karnataka is blessed with some of the highest waterfalls in India. The Jog Falls is the second-highest plunge waterfall in India, making it one of the most spectacular waterfalls. As water falls down the cliff from a height of 253 meters, you can almost feel the force of it against the rocks. When in full flow during the monsoons, 3.4 million tonnes of water fall down the cliff every second.",
      "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Jog1.jpg",
         },
     {
      "title": "Dudhsagar Falls",
      "loc": "Goa:",
      "price": " height 310 meters",
      "description": "Dudhsagar literally translates to “ocean of milk.” When the water falls down a height of 310 meters at Mollem, Goa, it seems nothing short of milky water. When in full swing, these falls can pack quite a force.",
      "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/DudhSagar2.jpg",
      },
      {
        "title": "Iruppu Falls, Coorg",
        "loc": "Karnataka:",
        "price": "height 310 meters",
        "description": "Coorg is blessed with plenty of beautiful places, which makes it one of the most popular hill stations of South India. A highlight of the natural beauty of Coorg is the Iruppu Falls, located close to Nagarhole National Park. People flock to the waterfalls during Shivratri to absolve themselves of their sins before they head to the nearby temple dedicated to Lord Shiva.",
        "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/irrupu1.jpg",
        },
        {
          "title": "Nohkalikai Falls, Meghalaya",
          "loc": "Meghalaya:",
          "price": "height 1100 meters",
          "description": " You can expect waterfalls by the numbers in Meghalaya, the wettest state of India. One of the most spectacular of the lot is the Nohkalikai Falls, which is also the tallest plunge fall in India. With a height of about 1100 meters, these falls are a true spectacle of nature. The best part is, you can expect these falls in full flow almost throughout the year, since Meghalaya receives plenty of rainfall round the year. It is one of the spectacular and amazing waterfalls in India.",
          "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Nohkalikai1.jpg",
          },
          {
            "title": "Kune Falls",
            "loc": "Maharasthra:",
            "price": "Height 200 meters of tierd 3",
            "description": "Mumbai may be a commercial jungle, but the whole of Maharashtra isn’t. In fact, the Lonavala-Khandala region is blessed with several beautiful waterfalls during the monsoon season. Kune Falls stand out among the rest. These are 200 meters high, 3 tiered waterfalls, which are sight unto themselves. Although you can only watch them during the monsoon season, when you do, you will be left amazed by their sheer beauty.",
            "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/kune2.jpg",
            },
            {
              "title": "Bhimlat Falls ",
              "loc": "Rajasthan:",
              "price": "60 meters high",
              "description": "The Bhimlat Falls are almost like a well preserved secret of Rajasthan. Almost all of us associate Rajasthan with the imagery of hot afternoons, sand dunes, and a rugged terrain. But Bhimlat Falls crash that stereotypical imagery of Rajasthan. In fact, Bundi Village, the village closest to these waterfalls, actually receives more average rainfall than Delhi during the monsoons. The Bhimlat Falls may just be 60 meters high, but the sheer fact that they are located in Rajasthan make them worthy of this list.",
              "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Bundi1.jpg",
              },
              {
                "title": "Athirapally Falls, Thrissur",
                "loc": "Kerala:",
                "price": "60 meters high",
                "description": "Kerala isn’t just about the placid backwaters. Come the monsoon and the Thrissur district springs to life with natural beauty all around. The gem of Thrissur district is the Athirapally Falls, which can be seen in full flow during the rainy season. They are far from being as high as Jog Falls of Karnataka or other waterfalls of India, but they are definitely a sight to behold.",
                "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Athirap2-0011.jpg",
                },
                {
                  "title": "Hogenakkal Falls",
                  "loc": "Tamil Nadu:",
                  "price": "60 meters less height",
                  "description": "They are unofficially referred to as the “Niagara of India”. That pretty much sums up the beauty of these waterfalls, located in Dharmapuri district of Tamil Nadu. It is a major tourist attraction of Tamil Nadu, also well known for its disease curing properties.",
                  "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Hoga3.jpg",
                  },
                  {
                    "title": "Shivasamudram Falls",
                    "loc": "Karnataka:",
                    "price": "60 meters less height",
                    "description": " Karnataka can safely be called the “State of Waterfalls in India.” It is blessed with roaring falls a few kilometers from each other. Shivasamudram Falls in Karnataka stand out for their sheer volume. During the monsoon season, as much as 19 million litres of water is discharged every second from these falls. They are one of the few waterfalls which are a sight to behold even during the dry months.",
                    "src": "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/08/Shiv2.jpg",
                    }


     ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopPage');
  }

  nav(item) {
    this.navCtrl.push(TopnaturePage, { item:item});
  }
}
