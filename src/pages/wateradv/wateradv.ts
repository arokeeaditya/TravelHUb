
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { ScubaPage } from './../scuba/scuba';
/**
 * Generated class for the WateradvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wateradv',
  templateUrl: 'wateradv.html',
})
export class WateradvPage {

  items = [
    {
      "title": "Scuba Diving",
      "loc": "Andaman and Nicobar Islands:",
      "price": "Rs 5,000 – 10,000",
      "description": "The deep clean water and beautiful marine life makes Andaman and Nicobar Islands one of the most fascinating destinations for scuba diving in India. These islands offer many diving sites that have a terrific variety of marine animals such as Scorpion fish, Octopus, Angler fish, Sharks and Coral reefs as well.",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF151N7UUZS_hqmgQItnTtYwfJG1ikR1n1k4A3Ha-VM52mDtpD1g",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": "If you think Goa is all about the beaches, clubs, shacks and alcohol, think again! There are a number of diving sites present in Goa that you must visit for sure to unearth the underwater treasure of Goa. The water bodies in Goa may not be the most ideal to dive in but they are pleasant enough.",
      "src1": "https://goatoursplanner.com/tours/wp-content/uploads/2017/08/scuba-dive-in-Goa.jpg",
      "loc2": "Lakshadweep Islands:",
      "price2": "Rs 4,000 – 7,000/-",
      "description2": "240 metres off the Malabar coast, a group of 36 islands collectively are known as the Lakshadweep Islands. Blessed with crystal clear water, coral sand, coral reefs and rich marine species, the Lakshadweep Islands must definitely be on your list of places to scuba dive.",
      "src2": "http://s3.india.com/travel/wp-content/uploads/2015/05/57.jpg",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "Pondicherry, known for its French architecture and history is ideally the place to attain self enlightenment and peace. The town offers a mix of modern heritage and spiritual culture. Pondicherry is also home to many diving sites with the presence of Orals, Lion fish, King fish, Moray eels, Eagle and Manta rays, Parrot fish, Sea snakes,and Tiger fish.",
      "src3": "http://s3.india.com/travel/wp-content/uploads/2015/05/scuba-2.jpg",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "Coastal Karnataka is blessed with valleys, verdant forests, fresh backwaters and clear tropical waters. The diving sites here are home to the great diversity of fish life common to the Arabian sea and Goa. Whales, Turtles, Stingrays, Cobias and Stone fish can easily be spotted here.",
      "src4": "http://s3.india.com/travel/wp-content/uploads/2015/05/scuba-3.jpg"
    },

    {
      "title": "Jet Skiing",
      "loc": "Calangute Beach,Goa:",
      "price": " Rs 400/-  onwards",
      "description": "Calangute Beach is located in Goa and is the largest beach in North Goa. It is one of the top Jet Skiing Destinations in India. It attracts a lot of tourists due to its adventurous activities like Jet Skiing and water sports. Calangute Beach is an awesome jet ski destinations to spend your holidays.",
      "src": "http://www.tripdezire.com/wp-content/uploads/2017/12/Calangute-Beach.jpg",
      "loc1": "Baga Beach",
      "price1": "Rs 525/- to 5000/-",
      "description1": "Best Jet Ski Adventure Destinations, Baga Beach is situated in North Goa, about 28 Km. from the capital Panjim. It is one of the quieter beaches of Goa. Baga Beach is a favorite destination for Western tourists due to its excellent waterJet Ski sports and fishing. It’s a perfect spot for those who want to enjoy away from the crowd. ",
      "src1": "http://www.tripdezire.com/wp-content/uploads/2017/12/Baga-beach.jpg",
      "loc2": "Havelock Islands:",
      "price2": "Rs 4,000 – 7,000/-",
      "description2": "Jet Ski Destinations, Havelock Island is located in the Andaman Islands, about 57 Km. from the capitak city of Port Blair. It is a paradise for adventure junkies and water sports lover. Radhanagar Beach is most popular among the visitors due to its enchanting beauty.",
      "src2": "http://www.tripdezire.com/wp-content/uploads/2017/12/Havelock-Island.jpg",
      "loc3": " Dona Paula:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "Dona Paula is located in North Goa and lies 7  km. from Panjim city. It is the merging point of the rivers Zuari and Mandovi into the Arabian Sea. Dona Paula offers an incredible view of sunset and adventure sports. Major attractions in Dona Paula are Parasailing, Jetskiing, Kayaking, Speed Boat rides, Yachting,  Water Scootering, and Harpoon Fishing. Jet Skiing here fills you with Adrenaline rush.",
      "src3": "http://www.tripdezire.com/wp-content/uploads/2017/12/Dona-Paula.jpg",
      "loc4": "Candolim Beach",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "Candolim Beach is one of the best beaches in India and is located in North Goa. It is also one of the longest beaches of Goa. Starting from Fort Aguada it stretches to Calangute Beach. Candolim Beach is 15 Km. away from the capital city of Panjim. It is really a heaven for the adventure junkies.",
      "src4": "http://www.tripdezire.com/wp-content/uploads/2017/12/Candolim-Beach.jpg"
    },
    {
      "title": "Surfing",
      "loc": "Mulki, Karnataka:",
      "price": "Best time to surf: October – May",
      "description": "Home to India’s first surf school, Mantra Surf Club, Mulki, about 30 km from Mangalore, is one of India’s least crowded and relatively unknown surf spots. With waves that suit the needs of beginners, there is no better place to learn the sport than at Mulki. Mantra that was started in 2004 by two American surfing experts, has India’s largest collection of surfboards making it easy to find one that will suit your size and skill level",
      "src": "https://www.surfertoday.com/images/stories/surfetiquette.jpg",
      "loc1": "Gokarna, Karnataka:",
      "price1": "Best time to surf: October – May",
      "description1": "The main beach at Gokarna is yet another ideal place to learn how to surf in India. When the surfing season is off, the sea has small waves making it a good spot to take your first steps on the surf board. The Cocopelli Surf School has a basic guest house that is situated just five minutes away from the beach and offers coaching from beginner to advanced levels.     ",
      "src1": "http://s3.india.com/travel/wp-content/uploads/2015/11/05travel-gokarna.jpg",
      "loc2": "Pondicherry, Tamil Nadu:",
      "price2": "Best time to surf: June – January",
      "description2": "Waves in Pondicherry go as high as 12 ft making it one of the most popular surfing destinations in India. While Serenity beach sees most of the surfing action, other beaches in the area are also quite good for water sports. The Kallialay Surf School teaches those interested not only the art of surfing but also how to shape their own boards. Those interested in pursuing surfing as just a hobby, can enroll for single-day beginners’ sessions. The school also offers intensive courses that go as long as 15 days.",
      "src2": "http://s3.india.com/travel/wp-content/uploads/2015/11/05travel-pondicherry.jpg",
      "loc3": " Kovalam, Tamil Nadu:",
      "price3": "Best time to surf: September",
      "description3": "About 40 km from Chennai, the beach town of Kovalam (or Covelong, not to be confused with the beach by the same name in Kerala) is a small fishing village in Tamil Nadu. With several opportunities for surfing, the village has gained popularity with tourists from all over the world. A social surfing movement that started at Covelong Point Social Surf School enables some of the best surfers in the country to hone their skills and teach them to those interested. The waves in Kovalam are the most reliable surf waves in the country.",
      "src3": "http://s3.india.com/travel/wp-content/uploads/2015/11/05travel-kovalamtn.jpg",
      "loc4": "Mahabalipuram, Tamil Nadu: ",
      "price4": "Best time to surf: June – Septembe",
      "description4": "Drive 19 km south of Covelong and you will reach Mahabalipuram that is best known for the shore temple. Over the years though the small town of Tamil Nadu is turning into a major surfing hub. The Mumu surf school is the most well-known surf school that offers training for beginners as well as professionals",
      "src4": "https://adventures365.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/7/_/7_copy_.jpg"
    },
    {
      "title": "River Rafting",
      "loc": "Ganga River, Rishikesh, Uttarakhand:",
      "price": "Best Season for Rafting: September to June.",
      "description": "River Ganga in Rishikesh is one of the world’s best rafting destinations. Adventure enthusiast can enjoy river rafting down rapids ranging from grade 1 to grade 4. This almost 16 km stretch is rich with whirlpools and rapids. There are as many as 13 rapids. Return to Sender, Roller Coaster, Three Blind Mice, Double Trouble, Tee Off and Golf Course are some incredible names. Camping on the beautiful white sand river beaches against the scenic Kumaon Mountains is also a popular adventure. The real charm of this region of Shivaliks is river rafting in Rishikesh.",
      "src": "https://www.indianholiday.com/blog/wp-content/uploads/2016/04/ganga-river-rafting-in-rishieksh.jpg",
      "loc1": "Teesta River, Sikkim and Darjeeling:",
      "price1": "Best Season for Rafting: October and April.",
      "description1": "The Teesta River flows through Sikkim, Darjeeling, and Kalimpong Hill Region. The mighty river is another thrilling river rafting spot. Blessed with a string of rapids rated at Grade 1-4, it creates a true invigorating experience. The turbulent Rangit, a tributary of the Teesta, has multi-dimensional rapids and is perfect for a challenge to more experienced rafters. ",
      "src1": "https://www.indianholiday.com/blog/wp-content/uploads/2016/04/darjeeling-rafting.jpg",
      "loc2": "Brahmaputra River, Arunachal Pradesh",
      "price2": "Best Season for Rafting: November to March.",
      "description2": "The Brahmaputra River, is mysterious and ferocious. River rafting in this river is done when the river finds its way in Arunachal Pradesh, down the Tibet region by cutting Greater Himalayas. River rafting here is rated at Level 4 -6. Brahmaputra River Rafting is for an exhilarating experience of a lifetime. Rapids such as the ‘Pulsating Pulsi’, ‘Toothfairy’ is the biggest jolt of adrenaline. The rafting expedition of the entire river last for more than a week. Camping is available along the river blessed with tropical forests, gorges and beautiful scenery.",
      "src2": "https://www.indianholiday.com/blog/wp-content/uploads/2016/04/Brahmaputra-River-Arunachal-Pradesh.jpg",
      "loc3": " River Barapole, Coorg, Karnataka:",
      "price3": "Best Season for Rafting: Monsoon and post-monsoon months of June to September.",
      "description3": "River Barapole in Coorg, Dakshina Kannada, provides excellent rafting opportunities. Flowing down the Western Ghats edging along the Deccan Plateau, the grades range between 2 and 4.There are approximately 4 to 5 rapids in the upper section and about 6 to 7 rapids in the lower section. Some enchanting names are Morning Coffee (Grade 2), Grasshopper (Grade 3), The Ramba Samba (Grade 2), The Wicked Witch (Grade 3), Big Bang (Grade 4), Milky Churn, etc.",
      "src3": "https://www.indianholiday.com/blog/wp-content/uploads/2016/04/Barapole-Coorg-Karnataka.jpg",
      "loc4": "Kundalika River, Maharashtra: ",
      "price4": "Best Season for Rafting: Monsoon and post-monsoon months of June to September.",
      "description4": "Kundalika is the fastest river of the South at Kolad. It is an excellent rafting destination South of the Himalayas. Flowing amidst the wonderful Sahyadris, the almost 15-kilometre stretch of rapids provides ample opportunities for an exciting adventure. Rapids range between Grades 3-4. The best months for rafting are in the months of monsoon. When waters are at their full capacity you enjoy the thrill to the maximum.",
      "src4": "https://www.indianholiday.com/blog/wp-content/uploads/2016/04/Kundalika-River-Maharashtra.jpg"
    },
      {
        "title": "Snorkeling",
        "loc": "The Andaman Islands:",
        "price": "Approximate Cost: Up to INR 1,000 for 30 minutes",
        "description": "The Andaman Islands in the Bay of Bengal is a slice of tropical paradise. Crystalline blue waters, pristine beaches and virgin rainforests are some of its many lures. Since water abounds, activities related to it are extremely popular. While snorkelling is possible to do at most of the beaches, Elephant Beach on Havelock Island is a popular spot owing to the prolific marine life that can be spotted easily in the warm and inviting waters here.",
        "src": "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Andamans(1).jpg",
        "loc1": "Netrani Island, Karnataka:",
        "price1": "Rs 5,000 – 8,000",
        "description1": "One of Karnataka’s lesser known islands, Netrani Island or Pigeon Island (due to its large pigeon population) in the Arabian Sea gains notoriety for being a coral reef island. This by default makes it a hotbed for teeming marine life like butterfly fish, parrot fish, eels, barracudas, mantas, clown fish and other colourful residents. Sea turtles can also be easily spotted, and in deeper waters, scuba divers have also seen sharks. ",
        "src1": "http://konkandirectory.com/wp-content/uploads/scuba-diver.jpg",
        "loc2": "Lakshadweep",
        "price2": "Approximate Cost: Up to INR 1,000 for 30 minutes",
        "description2": "With its name that literally means 100,000 islands, the islands of Lakshadweep are surrounded with living coral reefs and abundant marine life that dwell in the waters of the Lakshadweep Sea. Having fast grown in to a preferred scuba diving and snorkelling destination, islands like Bangaram and Kadmat offer opportunities to view vibrant tropical fish as well as other marine life species like sea cucumbers, rays, sea turtles and crabs in shallow waters.",
        "src2": "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lakshadweep.jpg",
        "loc3": " Goa:",
        "price3": "Approximate Cost: Up to INR 2,000 for 30 minutes",
        "description3": "Undoubtedly the most popular beach destination in the country, Goa attracts lovers of the sun, sand and surf. There are several snorkelling spots including Sinquerim Beach, Grande Island, Monkey Island and Palolem Beach. However, given that the waters of Goa are generally cloudy, the chances of sighting schools of fish and varied species of marine life are slim. However, don’t be disheartened because in spite of low visibility, you can still manage to see something.",
        "src3": "https://5.imimg.com/data5/BM/KF/MY-2/grand-island-trip-in-goa-with-snorkeling-500x500.jpg",
        "loc4": "Tarkarli, Maharashtra: ",
        "price4": "Approximate Cost: Up to INR 500 for 1 hour",
        "description4": "We won’t be surprised if you hadn’t heard of Tarkarli before this. This seaside village is a well-kept secret of the Konkan coast. Tarkarli affords an impressive shoreline set against clear blue waters and water activities are big in the area amongst professionals and novices alike. Snorkelling at Tarkarli is a real treat with hundreds of marine species making their home in the labyrinth network of corals here. Relatively unexplored, the crowds escape Tarkarli making it a haven for snorkellers and divers.",
        "src4": "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Tarkarli.jpg"
      },
    {
      "title": "Kayaking",
        "loc": "Backwaters Of Kerala:",
        "price": "",
        "description": "The backwaters of Kerala offer a peaceful and serene kayaking experience in India. Paddle through the narrow channels, with overhanging palms offering shade. Admire the countryside views and visit small villages that can only be reached by the backwaters. Farmers work on the land, fishermen patiently wait for a catch and kids wave excitedly at visitors.",
        "src": "https://media.timeout.com/images/103924456/630/472/image.jpg",
        "loc1": " Kali River:",
        "price1": "",
        "description1": "The scenic Kali River in Uttarakhand flows into India from neighboring Nepal. Hop into your kayak and discover lush jungles that are rich with wildlife. Several jungle camps let you sleep in the heart of nature, getting a good night’s rest ahead of each day of kayaking fun. Plentiful birds, including some rare species, flit through the skies and sing from the treetops. The river has various grades of rapids, including calm stretches that are ideal for beginners and medium-grade rapids. ",
        "src1": "http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/09/Kayaking-Beginners-Essential-Kit-Gear-UK.jpg",
        "loc2": "Goa",
        "price2": "",
        "description2": "The beaches, bays, rivers, and backwaters of Goa offer a plethora of terrific kayaking experiences. Check out Bambolim Beach, Candolim, Nerul Bridge and Margao. Watching the sunset over the ocean expanse is even more magical when done while bobbing on the waves in a kayak",
        "src2": "data:image/jpeg;base64,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",
        "loc3": " Pondicherry:",
        "price3": "",
        "description3": "The Brahmaputra River in Arunachal Pradesh boasts some of India’s most challenging rapids. Thrill-seeking kayakers can tackle grades 4-6 rapids, using skill to navigate the river. Visit local villages alongside the river and admire the glorious views.",
        "src3": "https://i1.wp.com/imvoyager.com/wp-content/uploads/2017/05/Brahmaputra--e1494770796961.jpg?resize=650%2C434&ssl=1",
        "loc4": "Karnataka: ",
        "price4": "",
        "description4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngK00Xf2GeckzVSYqolyig463oJnxbh9SqJy3xvZghnqCSN2uqg",
        "src4": "https://www.seatrek.com/wp-content/uploads/2016/10/Sit-on-top-kayak.jpg"

    },
    {
      "title": "Fly boarding",
      "loc": "Goa:",
      "price": "Rs 5,000 – 10,000",
      "description": "The deep clean water and beautiful marine life makes Andaman and Nicobar Islands one of the most fascinating destinations for scuba diving in India. These islands offer many diving sites that have a terrific variety of marine animals such as Scorpion fish, Octopus, Angler fish, Sharks and Coral reefs as well.",
      "src": "http://www.adventurenest.com/blog/wp-content/uploads/2016/06/5.-Flyboarding-in-Goa.jpg",
      "loc1": "Goa:",
      "price1": "Rs 5,000 – 8,000",
      "description1": "If you think Goa is all about the beaches, clubs, shacks and alcohol, think again! There are a number of diving sites present in Goa that you must visit for sure to unearth the underwater treasure of Goa. The water bodies in Goa may not be the most ideal to dive in but they are pleasant enough.",
      "src1": "https://qph.ec.quoracdn.net/main-qimg-5d2590694e02b8e5e9918d5f5e18e61b.webp",
      "loc2": "Lakshadweep Islands:",
      "price2": "Rs 4,000 – 7,000/-",
      "description2": "240 metres off the Malabar coast, a group of 36 islands collectively are known as the Lakshadweep Islands. Blessed with crystal clear water, coral sand, coral reefs and rich marine species, the Lakshadweep Islands must definitely be on your list of places to scuba dive.",
      "src2": "https://qph.ec.quoracdn.net/main-qimg-1643afa0f78d68cabedce63c7513b467.webp",
      "loc3": " Pondicherry:",
      "price3": "Rs 6,500 – 8,000/-",
      "description3": "Pondicherry, known for its French architecture and history is ideally the place to attain self enlightenment and peace. The town offers a mix of modern heritage and spiritual culture. Pondicherry is also home to many diving sites with the presence of Orals, Lion fish, King fish, Moray eels, Eagle and Manta rays, Parrot fish, Sea snakes,and Tiger fish.",
      "src3": "https://qph.ec.quoracdn.net/main-qimg-b80c12bd1910c5fe58f977138d4b7671",
      "loc4": "Karnataka: ",
      "price4": "5500 Rs/- to 7000 Rs/-",
      "description4": "Coastal Karnataka is blessed with valleys, verdant forests, fresh backwaters and clear tropical waters. The diving sites here are home to the great diversity of fish life common to the Arabian sea and Goa. Whales, Turtles, Stingrays, Cobias and Stone fish can easily be spotted here.",
      "src4": "https://img.grouponcdn.com/deal/atj2voYZfjSQaS7A5dN4/iK-2048x1229/v1/c700x420.jpg"
    }
     ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WateradvPage');
  }



    nav(item) {
      this.navCtrl.push(ScubaPage, { item:item});
    }

  }



