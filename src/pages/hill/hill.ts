import { HillstationPage } from './../hillstation/hillstation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hill',
  templateUrl: 'hill.html',
})
export class HillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hillitems = [
    {

        "title": "Nainital, Lake District of India",
        "loc": "Uttarakhand:",
        "air": "Nainital does not have direct air connectivity. Indira Gandhi International Airport, New Delhi, is the nearest commercial airport to Nainital. As every flight of all domestic and international airlines connect Delhi with rest of the world, travellers can board a flight till Delhi if they are travelling to Nainital. Private taxis from Delhi can be hired to reach Nainital.",
       "Train":"Kathgodham Railway Station, located around 34 km away, is the nearest railhead to Nainital. Plenty of trains connect Nainital with Delhi and Dehradun. Passengers coming from Kolkata, Lucknow, Agra and Mathura, can even take a train till Kathgodam and then hire a private cab or shared taxi for Nainital. ",
       "Bus": "Nainital enjoys excellent road connectivity with several cities and small towns of north India. Daily bus service to Nainital is available from Delhi and Kathgodam. Coaches like Volvo, AC and non AC are available in this route. Boarding an overnight bus from Delhi is the most convenient way to reach Nainital.      ",
        "description":"With the spectacular Naini Lake at the centre and gorgeous Kumaon ranges on all sides, Nainital is an affordable holiday destination in Uttarakhand of north India. Valleys and hills, lakes and temples, Nainital is one stop destination to laze under the sun and enjoy a relaxed vacation. Attractions like Naini Lake, Naukuchiatal and Naina Devi Temple have lured travellers since years. The hill station can be reached conveniently from any part of India.",
        "src":"https://static.tripzilla.com/thumb/2/0/79392_700x.jpg",
        "src1":"https://www.euttaranchal.com/tourism/timthumb.php?src=/tourism/photos/nainital-3674061.jpg&w=620&h=350&q=50 ",
        "src2":"https://s-media-cache-ak0.pinimg.com/originals/e5/b0/d6/e5b0d641240e02be72009456a1d509d2.jpg ",
        "src3":"https://images.thrillophilia.com/image/upload/s--eBSDdw_i--/c_fill,f_auto,fl_strip_profile,h_800,q_auto,w_1300/v1/images/photos/000/093/974/original/1467296087_Nainital__India.JPG.jpg?1467296087 ",
        "src4":"https://www.holidify.com/images/bgImages/NAINITAL.jpg "

      },
      {
        "title": "Manali, Gateway to Adventure",
        "loc": "Himachal Pradesh:",
        "price": "Rs 5,000 – 10,000",
        "description":"Manali is one of the most frequented hill stations in India and during its peak season it is mostly occupied with tourists from different parts of the country. Thus with a flourishing tourism in Manali, the mighty hill station is well connected by road to different parts of the state and Kalka Railway Station that connects different parts of the country through broad gauge tracks is the closest railway station. Whereas encircling Manali one can even hop to the nearby hill stations like Shimla, Dalhousie, Manikaran, Dharamsala and Kasauli. Amongst the unexplored destinations one can even drive up to Keylong that falls on the Manali-Leh highway, which connects one to Ladakh. The distance from Manali to Leh-Ladakh is approximately 453kms.",
        "src":"https://static.tripzilla.com/thumb/2/1/79393_700x.jpg",
        "src1":"http://hotelvintagemanali.com/wp-content/uploads/2016/07/Delhi_Manali_Volvo_Package.jpg ",
        "src2":"https://imgak.mmtcdn.com/hp-images/new/cities/1359/Manali_Prateek-Prabhat_704x385.jpg ",
        "src3":"http://www.transindiatravels.com/wp-content/uploads/rohtang-pass-4.jpg ",
        "src4":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/76.jpg ",
        "Train":"Jogindernagar railway station is the nearest railhead to Manali that connects the hill station with several important cities of the country. Chandigarh and Ambala are other options to reach Manali by train. From the railheads, one can get several mode of transportation including taxi and bus at reasonable cost. ",
        "Bus": "Manali is very well-connected to important tourist destinations like Leh, Shimla, Kullu, Dharamshala and New Delhi by means of a network of state-run as well as private buses. The bus journey from Delhi to Manali is 550 kilometres, and it is advisable to book your tickets in the air-conditioned Volvo coaches, as the buses are more comfortable than ordinary ones, keeping in mind the long distance of the journey. ",
        "Air":"The nearest airport is at Bhuntar, located approximately 50 kilometres away from Manali. Domestic flights connect Bhuntar with Delhi and Chandigarh. Once at the airport, you can take a pre-paid taxi to Manali. However, owing to weather conditions, flights are not the most reliable option for getting to or out of Manali."

      },
      {
        "title": "Mussoorie, Soothing Hill Station",
        "loc": "Uttarakhand:",
        "price": "Rs 5,000 – 10,000",
        "description":"Situated in the foothills of Garhwal Himlayan range, Mussoorie is a much favoured weekend getaway for those living in Delhi and other parts of north India. Year round pleasant climate, delicious Chinese, Indian and Tibetan cuisine, bustling Mall Road, scenic hills and valleys make Mussoorie a favourable holiday destination. Kempty Falls, Jharipani Fall and Cloud End are popular tourist attractions. Mussoorie is easily accessible from anywhere in India.",
        "src":"https://www.outlookindia.com/outlooktraveller/wp-content/uploads/2017/08/Mussorie1_TI-1.jpg",
        "src1":"https://www.makemytrip.com/travel-guide/media/dg_image/mussoorie/thumb/Mussoorie1_Sunil-Garg_0_19_176_mussoorie_938_410.jpg ",
        "src2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9Yot9LIAXcZI8JvxHGFWG7qJCjqpE3fqtuuvhIIqAQ2DEWAChw ",
        "src3":"https://www.euttaranchal.com/tourism/timthumb.php?src=/tourism/photos/lal-tibba-2991808.jpg&w=620&h=440&q=50 ",
        "src4":"http://im.hunt.in/cg/Mussoorie/City-Guide/Weekend_Mussoorie.jpg ",
        "Train":"Dehradun Railway Station, located around 36 km away serves as the nearest railway station to Mussoorie. Number of trains from far and near of cities including Delhi, Kolkata, Jammu and Amritsar serve Dehradun city. After reaching Dehradun by train, visitors can board local taxis or buses for Mussoorie.  ",
        "Bus": "A number of state government and private buses connect Mussoorie with nearby places like Delhi, Dehradun and other important towns of Uttar Pradesh and Uttarakhand. Buses for Mussoorie are available on frequent and daily basis, so passengers can choose a bus depending on their convenience. ",
        "Air":"Jollygrant Airport in Dehradun serves as the nearest airport to Mussoorie. Direct flights from Delhi and Mumbai are available till Dehradun. Local taxis or buses can be hired to reach Mussoorie from Dehradun. Otherwise, visitors can board a flight till Indira Gandhi International Airport, Delhi, second nearest airport to Mussorie, which offers good air connectivity with rest of India and then travel to Mussoorie by bus or car."

      },
      {
        "title": "Gulmarg, Heaven",
        "loc": "Jammu and Kashmir:",
        "price": "Rs 5,000 – 10,000",
        "description":"In summers, Gulmarg becomes a paradise with impressive treks to explore. The city has the highest gondola in the world that runs up to almost 4,000 metres above ground level. Skiing and snowboarding are the main tourist activities in the area. The main market offers tourists with jewellery, pashmina, and souvenirs. Hotels, bars and ‘dhabas’ serve delicious food in and around the market area.",
        "src":"https://static.tripzilla.com/thumb/2/3/79395_700x.jpg",
        "src1":"http://c1.hiqcdn.com/blog/sites/default/files/styles/large/public/gulmarg.JPG ",
        "src2":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/06/alpather-lake.jpg ",
        "src3":"http://cloud.transindiatravels.com/wp-content/uploads/gondola-lift.jpg ",
        "src4":"http://blog.travelwithsmile.com/wp-content/uploads/2015/08/gulgul-Copy.jpg ",
        "Train":"Jammu is the nearest railway station, at a distance of 290 kilometres. Jammu railway station is well connected to the most of the railheads in major Indian cities. Some of the popular trains are Jammu Rajdhani, Himgiri Express, Swarak Express, Andaman Express and Himsagar Express which connects the farthest railhead in Trivandrum city. ",
        "Bus": "Gulmarg is 57 kilometres from Srinagar and although it can be reached in 1-2 hours, it takes more time due to the winding high altitude roads. It is recommended that you update your car with specially equipped tyres to drive in this region. ",
        "Air":"The nearest airport to Gulmarg is in Srinagar which is 56 kilometres away. It is a domestic airport and is well connected to major cities in India by regular flights from Delhi, Mumbai and Amritsar. Outside the airport, you can hire a prepaid cab which will cost you around Rs. 1500 one-way. You can also hire a shared taxi which will cost less."

      },

      {
        "title": "Darjeeling, Dreamy Destination",
        "loc": "West Bengal:",
        "price": "Rs 5,000 – 10,000",
        "description":"Famous for its large tea estates, Darjeeling has magnificent views of Mount Kanchenjunga, waterfalls, and several hills. The historic Toy Train makes for a memorable ride and the Senchal Lake, Ghoom Monastery, and Observatory Hill are among the most popular tourist attractions of Darjeeling. Make sure you stay in a tea estate and resort to experience Darjeeling’s beauty to the fullest. Darjeeling is one of the most frequented hill stations in India. It is mostly visited by weekenders and some adventurous who head for the mighty trek to Sandakphu. Well even the unique blend of tradition and modernity draws in many travellers. Nonetheless how to reach Darjeeling is not a matter of fuss. With flourishing Darjeeling tourism, the mighty hill station encircles the hues of many other hill stations of North Bengal and Sikkim. As well as the Gorumara National Park is only 140kms away from Darjeeling. The distance from Siliguri to Darjeeling is approximately 70kms whereas from New Jalpaiguri to Darjeeling the distance by road is approximately 75 kms. One travelling from Bagdogra Airport needs to cover a distance of 100kms approximately. It takes one couple of hours to travel from Bagdogra to Darjeeling. The other nearby hill stations like from Kalimpong, the distance is 50kms whereas it takes one just couple of hours to reach Darjeeling from Pelling, Sikkim. One, who is planning to reach Darjeeling by road from Gangtok, needs to cover a distance of 110kms. It takes approximately 3 hours from Gangtok to Darjeeling.",
        "src":"https://static.tripzilla.com/thumb/1/9/80409_800x.jpg",
        "src1":"http://www.transindiatravels.com/wp-content/uploads/darjeeling-himalayan-railway.jpg ",
        "src2":"http://blog.mayfairhotels.com/wp-content/uploads/2016/05/Darjeeling-War-Memorial.jpg ",
        "src3":"https://www.justwravel.com/uploads/destination/slider-desktop/Justwravel_Darjeeling_1470127344_0tiger_hill.jpg ",
        "src4":"https://northbengaltourism.com/images/darjeeling/lamahatta_1024.jpg ",
        "Train":"The nearest railway station to Darjeeling is New Jalpaiguri which connects the city with all the major parts of the country. There are a number of trains from cities like Kolkata, Delhi, Guwahati, Chennai, Mumbai, Bengaluru, Bhubaneshwar and Kochi. People can hire private cabs from the station to reach Darjeeling.       ",
        "Bus": " Darjeeling is well connected to some of the major cities closeby such as Gangtok and Kalimpong which are located at a distance of 100 km and 51 km respectively. The city is also connected with Kolkata which is 651 km away and it takes around 14 hours to reach here. The capital city of Nepal, Kathmandu is just 310 KM away from this beautiful place. From the airport, one can reach the city by Bus or Cab.",
        "Air":"The nearest airport to Darjeeling is Bagdogra which is approximately 95 km away from the city. There are some direct flights from the cities like Kolkata, Delhi and Guwahati to Darjeeling. From the airport, one can reach the city by hiring taxis. It will take almost 3 hours to reach Darjeeling from the airport. Flights are available from all major cities."

      },
      {
        "title": "Shillong, The Hills are Alive...",
        "loc": "Meghalaya:",
        "price": "Rs 5,000 – 10,000",
        "description":"Widely known as the ‘Scotland of the East’, Shillong is the capital city of Meghalaya. Monsoon is the best time to visit Shillong, as the entire city breathes a new life in the rains. The surrounding landscapes in Shillong are captivating, to say the least. You can spend your time here at the Shillong peak and gaze at the lush green hills, have a picnic near Elephant Falls, or enjoy a boat ride over the Umiam Lake. For the adventurer in you, try the water sports like kayaking and water skiing at any of the stunning lakes in the city.",
        "src":"https://static.time8.in/uploads/2018/02/shilong-view.jpg",
        "src1":"http://www.onefivenine.com/images/Travel/3942.jpg ",
        "src2":"https://www.holidify.com/images/bgImages/CHERRAPUNJEE.jpg ",
        "src3":"https://4.bp.blogspot.com/-2HKGMVODLkg/V2kecwJXEeI/AAAAAAAAC5A/1iqc9LeZhs88iuNBGU91fEETNhAm2SliQCLcB/s1600/Botanical%2BGarden%2B1.jpg ",
        "src4":"https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_900,h_450,r_0,c_crop,q_60,fl_progressive/w_1100,f_auto,c_fit/hotel-jagdish-residency-katra/JHT6_vw48rs ",
        "Train":"The closest railway station from Shillong is in Guwahati. It’s about 100 kilometres away and you can easily take a taxi from there. The Guwahati railway station is connected to New Delhi and other major cities across the country. ",
        "Bus": "You can take a bus from Guwahati to Shillong. There are several private as well as government operated deluxe and regular tourist going at regular intervals. But it’s a better idea to hire a taxi for a convenient and comfortable journey. You can even take a shared taxi to be more economical. The drive is extremely beautiful so you will really enjoy it. If you are planning to drive down from Guwahati here are directions for driving: Start from Bara Bazar in Guwahati and hit NH 37, also known as the Assam Trunk Road. Continue driving till you hit GS Road on the highway and enter Kamrup District. Go on towards NH 40 and drive for about 65 kilometres till you enter Meghalaya via Nongpoh. You will have to continue driving for about 59 kilometres till you reach Mawlai and then enter East Khasi Hills. You will cross Nongmynsong to reach Shillong.",
        "Air":"Shillong doesn’t have an airport within the city. The nearest airport to the hill station is the Umroi Airport near Barapani, which is about 25 kilometres away. This has limited connectivity with other cities. The nearest major airport that is well-connected with multiple cities across India is in Guwahati, which is about 125 kilometres away. You can take a taxi from Guwahati to Shillong."

      },
      {
        "title": "Binsar Exotic Hill Station",
        "loc": "Uttarakhand:",
        "price": " ",
        "description":"A small town nestled within the Binsar Wildlife Sanctuary; Binsar is blessed with overwhelming views of snow-clad peaks like Nanda Devi, Kedarnath, Panchachuli, Chaukhamba, and Nanda Kot. Among other attractions in Uttarakhand, the Zero Point is a must visit because of its panoramic views of the Himalayan peaks. On top of that, do visit the Binsar Wildlife Sanctuary which is home to several beautiful species of birds, plants and rare animals.  ",
        "src":"https://static.tripzilla.com/thumb/2/6/79398_700x.jpg ",
        "src1":"http://4.bp.blogspot.com/-jEjJ6Vhm9Tg/VVGhCTrkyrI/AAAAAAAALjw/bsqGVvv1iNI/s1600/_DSC1218%2Blogo.jpg ",
        "src2":"https://www.holidify.com/images/bgImages/BINSAR.jpg ",
        "src3":"https://image3.mouthshut.com/images/Restaurant/Photo/-14906_8552.jpg ",
        "src4":"https://c1.hiqcdn.com/uploadimages/travel/Binsar-5393_2.jpg ",
        "Train":"You can also travel through train as it is well linked with other cities and states. Kathgodam Railway station is the nearest to the town which is about 119 km away. Trains are frequent which facilitates the travelers to move from one place to another. You can hire Taxis and buses to reach the station easily.",
        "Bus": "Roads are connected by buses and other modes of transport. You can also hire taxi to reach other cities. Luxury bus coaches, state buses are available to reach this town comfortably. To reach the nearest airport and railway station you take the road route. One can take bus, taxi or drive up to different locations. Almora (33km), Nainital (95km), Delhi (372km) and Kathgodam (114km) are connected to Binsar through a good network of roads. ",
        "Air":"Pantnagar airport is one of the nearest airports to the city which you can reach with the help of various public transports. This airport is about 152 km away from the town. Flights are frequent and connected to various other cities such as Delhi, Chandigarh, Mukteshwar and many more places. "
      },
      {
        "title": "Gangtok, Unparalleled Hill Resort ",
        "loc": "Sikkim:",
        "price": " ",
        "description":"Gangtok, the vibrant capital of Sikkim, offers extravagant joys of the city in addition to the quaint aura of a hill station. The city has a ropeway which offers a bird’s eye view of the city and surrounding locales. Walking is the best way for visitors to explore Gangtok and its charming people. The main market features various businesses selling local handicrafts which make perfect gifts. Several restaurants and bars around the city provide local delicacies as well as international cuisine. Days in Gangtok can be well spent at the Tashi View Point, Banjhakri Hill, Rumtek Monastery and the Tsongmo Lake.",
        "src":"https://www.oyorooms.com/blog/wp-content/uploads/2016/04/shutterstock_219688855.jpg",
        "src1":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/12/places-to-visit-in-gangtok.jpg ",
        "src2":"http://res.cloudinary.com/himanshujain/image/upload/v1449137971/location/gangtok_f7rnbb.jpg ",
        "src3":"http://www.indiatravelblog.com/attachments/Resources/3926-1-Best-Places-to-Visit-in-Gangtok.jpg ",
        "src4":"http://cloud.transindiatravels.com/wp-content/uploads/tsomgo-lake3.jpg ",
        "Train":"The closest railways are located in New Jalpaiguri, New Jalpaiguri which is 117 km far from Gangtok. The railway station is well linked with both major and minor parts of the country. Most of the visitors prefer to reach Gangtok via railways.",
        "Bus": "Gangtok is well linked by road with Siliguri, Darjeeling and Kalimpong as one can opt for National Highway 31A to reach the region. One can find number of regular Sikkim state transport buses which ply its services between Gangtok and Siliguri. One can also hire private buses, jeeps and taxis from Siliguri and Bagdogra. ",
        "Air":"If you are planning to reach Gangtok via airways then the nearest airport is in Bagdogra, West Bengal. The total distance between Bagdogra and Gangtok is around 124 km. This major airport is well connected with all the major cities in India. One can also opt for helicopter services operated by the Sikkim Tourism Development Corporation which offers daily services from Bagdogra to Gangtok and will only takes about 20 minutes to reach. "
      },
      {
        "title": "Kodaikanal, Gift of the Forest ",
        "loc": "Tamil Nadu:",
        "price": " ",
        "description":"Kodaikanal literally translates to “The Gift of The Forest”. Nestled in the Palani Hills, this is a rather secluded town. The must-visit places in Kodaikanal include the Kodai Lake, Guna caves, and Green Valley view. You can cycle around the lake, go boating or horseback riding, or even take an aromatherapy session at the nearest spa! ",
        "src":"https://static.tripzilla.com/thumb/2/8/79400_700x.jpg ",
        "src1":"http://cloud.transindiatravels.com/wp-content/uploads/kodai-lake.jpg ",
        "src2":"https://media-cdn.tripadvisor.com/media/photo-s/01/a9/a4/bf/caption.jpg ",
        "src3":"https://image3.mouthshut.com/images/Restaurant/Photo/-80081_8804.jpg ",
        "src4":"http://res.cloudinary.com/himanshujain/image/upload/v1453025493/location/Kodaikanal_n4opg4.jpg ",
        "Train":"Kodai Road, situated around 80 km away from the main town of Kodaikanal, is the nearest railway station. Mostly trains from Madurai and Trichy run to Kodai Road. Another nearest and important station is Coimbatore Railway Station, which withstands the arrival and departure of all major trains connecting important Indian cities.  ",
        "Bus": "Kodaikanal is connected by road with important towns like Madurai, Palani, Theni, Dindigul, Thiruchirappalli, Kumuli, Bangalore, Coimbatore and Chennai. Regular bus services at frequent intervals are available from these cities. State and private operators run buses in this route. Cabs or private cars serve as alternative for road trip to Kodaikanal. ",
        "Air":"Located around 120 km away, Madurai Airport serves as the nearest airport to Kodaikanal. Daily flights from Chennai, Bangalore, Trichy and Mumbai arrive here. On arrival at the airport, passengers can board a cab or local train to reach Kodaikanal. Flights till Trichy and Coimbatore can also be availed to reach Kodaikanal."
      },
      {
        "title": "Shimla, Queen of Hills ",
        "loc": "Himachal Pradesh:",
        "price": " ",
        "description":"What was first known to us as Simla, is now Shimla. The name may have changed slightly, but the beauty of this hill station in India remains unchanged and unchallenged. The British named Shimla as their summer capital during their reign. It now stands as the capital of Himachal Pradesh and is a beautiful place to visit. This exceptionally cool and quaint town is surrounded by mountains and forests. The colonial buildings and the railway here are some of the best highlights. Christ Church, famous for its glass-stained windows, is among the town’s most popular landmarks. Also make a visit to Viceregal Lodge which is situated on Observatory Hill. A historic walking tour around the town, adventure sports or even short hikes around the vicinity will help occupy your time. It is among the most famous hill stations in India. To the north of India, this capital city of Himachal Pradesh is a tourist magnet. Used by the British as their getaway during the summer time, this place is known for its adventure sports like ice skating. The place reeks with colonial architecture and the buildings have names of Anglo-Saxon influence. Getting there shouldn’t be a problem as the place has its own airport and flights operate from major cities. With that being said, the best way to soak in the beauty would be a road trip! There are a good number of hotels and budget resorts to stay at. When you are there, you must make it a point to go and visit the Christ Church, Viceregal Lodge and the Shimla State Museum. The place flaunts an array of buildings and monuments that represent English Colonialism. If you wish to go temple hopping, try the Tara Devi and Shoolini Temples. For shopping, there can be no better place to go to than Mall Road. This place turns white during the winter months making it a sight to behold. Having highlighted quite a few, Shimla makes it to the top of our list of hill stations in India.",
        "src1":"https://static2.tripoto.com/media/filter/nl/img/4335/TripDocument/1471508417_shimla.jpg ",
        "src":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Toy-Train-Shimla.jpg ",
        "src2":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/06/Kufri-Shimla.jpg ",
        "src3":"https://i2.wp.com/www.travelmax.in/wp-content/uploads/2017/12/559666-shimla-kufri.jpg ",
        "src4":"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/06/Jakhoo-hill.jpg ",
        "Train":"The nearest station is Kalka which connects the city with different parts of the country by rail line. There are quite a good number of trains from the cities like Delhi and Calcutta. From Kalka station, one can take the pleasure of toy train as well as can hire private cabs to explore the beauty of this city. ",
        "Bus": "Shimla is well connected with the cities like Chandigarh, Delhi, Dehradun and Kalka though roadways. You can hire taxis as well as state buses to reach the hill station from these cities. There are even regular bus services from the nearby places to Shimla such as Kullu (235 km), Manali (280 km), Delhi (370 km) and Ambala (154 km). From the capital of India, one can even take luxury buses and cabs which will provide a comfortable journey. ",
        "Air":" Located at a distance of 22 km away from the Shimla, the Jubbarhatti airport is well connected to various other cities by air. The other nearby airports such as Chandigarh Airport and Delhi airport can be accessed easily."
      },
      {
        "title": "Ooty, The Jewel of Nilgiri ",
        "loc": "Tamilnadu :",
        "price": " ",
        "description":"Tamil Nadu boasts of the lush greens of Ooty, also known as Udhagamandalam. Ooty in Tamil Nadu is perfect for a summer escape from the hot climate of the plains. The peak season witnesses a large number of tourists. However, it is the best time to visit the town. Ooty's botanical garden has an annual flower which should not be missed. You could also go boating on Ooty Lake, or trek Dodabetta Peak for spectacular views of the Nilgiri hills. Nestled deep within the Nilgiri hills is what is known as Queen of all hill stations. Ooty’s captivating beauty far surpasses that of any other hill station in India. It’s what makes it one of the most celebrated hill stations in India. The place is set amidst sprawling mountains, great lakes and dense forests where eucalyptus trees grow in abandon, and tea estates carpet the hill-sides. Drive 80 kilometers from Coimbatore and one will reach this hill station in the Nilgiri hills that offer relaxation, unperturbed. Misty mornings, cool afternoons and cozy evenings are what one gets to experience here. There are many activities like bird watching and trekking that one can make the most of, but the ideal activity would be to simply unwind. Burrowed deep within the bosom of the Nilgiri hills is the Queen of all hill stations. Immaculate as the white of snow and mesmerizingly beautiful, Ooty takes top spot when it comes to the top 10 beautiful hill stations in India. The place is a picturesque representation of looming mountains, great lakes, dense forests abounding in eucalyptus trees and miles and miles of tea gardens.",
        "src":"http://halokerala.com/attachments/Image/96-Ooty_2.jpg?template=generic ",
        "src1":"https://image3.mouthshut.com/images/imagesp/925004353s.jpg ",
        "src2":"https://3.imimg.com/data3/HO/QC/MY-3443653/1-500x500.png ",
        "src3":"https://seoimgak.mmtcdn.com/blog/sites/default/files/images/ooty-city.jpg ",
        "src4":"https://static2.tripoto.com/media/filter/nl/img/385407/TripDocument/1500917616_ooty_lake.jpg ",
        "Train":"Ooty has its own Railway Station named as Ooty Railway Station. It is connected to the major cities of Tamil Nadu. It is situated on the major New Delhi- Coimbatore railway line and is linked with the cities like New Delhi, Bangalore, Coimbatore, Chennai, Kochi, Mysore, Lucknow, Chennai, Kanyakumari, Puri, Ahmedabad and Jaipur. ",
        "Bus": "Ooty  is 19 Kms from Coonoor, 52 Kms from Mettupalayam, 84 Kms from Coimbatore, 104 Kms from Tiruppur, 127 Kms from Pollachi, 136 Kms from Palakkad, 154 Kms from Dharapuram, 159 Kms from Udumalaipettai and is linked through Tamil Nadu State Road Transport Corporation (TNSRTC) and some private travel services. ",
        "Air":"The nearest International Airport is Coimbatore International Airport, roughly two and a half hour drive from Ooty. Coimbatore Airport is well connected to a spectrum of cities like Delhi, Kozhikode, Mumbai, Ahmedabad, Bangalore, Chennai and Hyderabad via Air Arabia, Air India, Indigo, Jet Konnect and Spice Jet. "
      },
      {
        "title": "Tawang, Magical Mountains ",
        "loc": "Arunachal Pradesh  :",
        "price": " ",
        "description":"Tawang has the country’s largest Tibetan Monastery which is a home to almost 500 lamas. The refreshing mountain air and wonderful treks make Twang a trekker’s paradise. You can visit the 400-year-old Tawang Gompa and turn the prayer wheels outside it, see yaks graze in the lovely hills, or walk around the town for a little chat with the friendly locals.These beautiful hill stations provide travellers scenic views and a chance to escape the summer heat of the plains. Plan a trip to one of these hill stations for a truly memorable vacation. ",
        "src":"https://static.tripzilla.com/thumb/2/9/79401_700x.jpg ",
        "src1":"https://4.imimg.com/data4/HX/RH/MY-2496757/sight-seeing-500x500.jpg ",
        "src2":"https://www.nelive.in/sites/default/files/tawang3.jpg ",
        "src3":"http://www.purvidiscovery.com/blog/wp-content/uploads/2017/12/tawang.jpg ",
        "src4":"https://static2.tripoto.com/media/filter/nl/img/323979/TripDocument/1478156549_arunachal_pradesh.jpg ",
        "Train":"The nearest Railway Station is Tezpur Railway Station which is connected to the all major cities of Arunachal Pradesh via Guwahati Express, Porvotr S Krnti, Ghy Rajdhani and Sc Ghy Express etc.",
        "Bus": "Tawang is 262 Kms from Bhalukpong, 319 Kms from Tezpur, 320 Kms from Missamari, 383 Kms from Nagaon, 381 Kms from East Kameng, 390 Kms from Udalguri, 402 Kms from Dhula, 408 Kms from Paneri, 440 Kms from Itanagar and 502 Kms from Sagali and is very well connected via Arunachal Pradesh State Road Transport Corporation (APSRTC) and some private travel services.        ",
        "Air":"The nearest Domestic Airport is Salonibari Airport, Tezpur, roughly six hour drive from Tawang. It is well connected to Kolkata and Guwahati through Air India flight. The nearest International Airport from Tawang is Lokpriya Gopinath Bordoloi International Airport, Guwahati, roughly 480 Kms from Tawang. It is connected with the major cities like Delhi, Imphal, Kolkata, Agartala, Aizawl, Dibrugarh, Lilabari, Silchar, Dimapur, Jorhat and Mumbai. "
      },
      {
        "title": "Srinagar, Paradise on Earth ",
        "loc": "Srinagar :",
        "price": " ",
        "description":"Srinigar is a modern waterworld, dominated by Dal Lake and its twisting waterways, tree-lined Nagin Lake, and the Jhelum River. Engulf yourself in local culture by embracing your sea legs and renting one of the wooden boats called shikaras for a daytime or twilight cruise. On land, stroll through the terraced hillsides of the 400-year-old Mughal Gardens, created by Emperor Jehangir for his wife, and shop for indigenous crafts like hand-woven silks and embroidered shawls. ",
        "src":"http://3.bp.blogspot.com/-AqEps1t4EWU/Ul0WDvp1XGI/AAAAAAAAD3k/WN-yL1eJ9Iw/s1600/Kashmir.jpg ",
        "src1":"https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/62/d5/5-day-kashmir-valley.jpg ",
        "src2":"http://im.hunt.in/cg/Srinagar/City-Guide/tour-dal.jpg ",
        "src3":"https://kannada.nativeplanet.com/img/2016/06/sl-1-28-1467094513.jpg ",
        "src4":"https://steemitimages.com/DQmPqrdj4SAF9Ah2ptnUusiWoaMyFHZEXMZDWtAAdKkjUbS/88022_8074.jpg ",
        "Train":" To reach Srinagar by train, one has to reach either Jammu Tawi or Udhampur railway station. The stations are well connected with different parts of India. From these stations, you can hire taxis, private as well as the state government buses to reach this magnificent place.",
        "Bus": "Srinagar is the capital of the state of Jammu and Kashmir. The city is well connected with major cities like Delhi (876 km), Chandigarh (646 km), Leh (424 km) and Jammu (258 km).There is good Bus serviceand Cab service available.  ",
        "Air":"Named Sheikh ul Alam Airport, Srinagar Airport is an international airport. This airport is well connected and airlines offer regular flights from Srinagar to Delhi, Mumbai and Chandigarh. The airport is placed just 15 km away from the center of the city. "
      },
      {
        "title": "Munnar, Teaplants ",
        "loc": "Kerla:",
        "price": " ",
        "description":"Munnar - breathtakingly beautiful - a haven of peace and tranquility - the idyllic tourist destination in God's own country.  Set at an altitude of 6000 ft in Idukki district, Munnar was the favored summer resort of the erstwhile British rulers in the colonial days. Unending expanse of tea plantations ­ pristine valleys and mountains­ exotic species of flora and fauna in its wild sanctuaries and forests ­ aroma of spice scented cool air ­ yes! This beautiful destination has all these and more. It's the place you would love to visit ­ it's the place you would wish never to leave. Munnar is such a beautiful place in Kerala, which cannot be portrayed in a single canvas. Everything and anything here will make us excited. The hills, the mist, the valleys, the streams, the waterfalls, tea plantations, rare flora and fauna.... It is a beautiful tea town in Idukki district of Kerala easily accessible from Kochi and Coimbatore. The gorgeous hill station is ideally placed in the South Western Ghats of India. With an area of around 557 sq km, Munnar in Devikulam Taluk is the largest panchayat in Kerala  Munnar got its name from its strategic location at the confluence of three rivers – Muthirapuzha, Nallathanni and Kundala Rivers. 'Moonu' means 'three' and 'Aru' means 'river'. The region is placed at a height of around 1,500 m to 2,695 m above sea level and was once the summer capital of the British in South India. Later it was developed for cultivating tea plants. The beautiful sights of acres and acres of lush green tea plantations will make us realize that we have at last reached Munnar and of course the place is so much known for its tea estates. It always carries the remnants of history of tea cultivation in Kerala. Neelakurinji or Strobilanthus has special status in the tourism map of this fascinating destination. The flower which blooms once in twelve years attracts lots of tourists from all over the world. ",
        "src":"https://www.keralatourism.org/images/destination/large/munnar20131031131946_202_4.jpg",
        "src1":"https://www.keralatourism.org/images/shooting_location/large/top_station20131128165315_30_1.jpg ",
        "src2":"http://irisholidays.com/keralatourism/wp-content/uploads/2013/10/top-station-munnar.jpg ",
        "src3":"http://res.cloudinary.com/himanshujain/image/upload/v1449253278/location/munnar_fields_ybe2pp.jpg",
        "src4":"https://media-cdn.tripadvisor.com/media/photo-s/08/8f/a7/85/kundala-dam-lake.jpg ",
        "Train":"The nearest railway station from is Kochi or Ernakulum. It is a major junction in the south from where you can get trains for the major cities of the country including Delhi, Chennai, Thiruvananthapuram, Mumbai, Mangalore, Bangalore and many others. ",
        "Bus": "Munnar is connected to other cities of Kerala and Tamil Nadu by state government public transport buses. Many tour providers arrange packaged bus tours services to Munnar from Cochin. You can also get buses to the cities like Kochi (124 km), Thrissur (148 km), Madurai (152 km) and Thiruvananthapuram (281 km) ",
        "Air":"Nearest airport from Munnar is Cochin International airport which is just 125 kilometers away from this beautiful place. Taxi services are also available from the airport to Munnar and usually cost Rs 3000. Cochin airport is well-linked to all the major cities in the country as well as many cities abroad. "
      },
      {
        "title": "Mount Abu, The Scenic Hill Station ",
        "loc": "Rajasthan  :",
        "price": " ",
        "description":"An oasis in the otherwise deserted land of Rajasthan, Mount Abu perched at a height of nearly 1,219 metres, is a pictorial hill station dotted with Dilwara Jain temples and green forested hills. Nakki Lake, Sunset Point and Mount Abu Wildlife Sanctuary are other popular tourist attractions here. Being the summer capital of Rajasthan, it remains occupied by locals and tourists round the year. Mount Abu can be reached easily from nearby states like Maharastra and Delhi. ",
        "src":"http://www.transindiatravels.com/wp-content/uploads/mount-abu-2.jpg ",
        "src1":"http://www.transindiatravels.com/wp-content/uploads/mount-abu-2.jpg ",
        "src2":"https://www.happytrips.com/thumb/width-800,height-600,msid-25991250.cms ",
        "src3":"http://indiaheritagedestinationtours.com/wp-content/uploads/2016/06/mauntabu2.jpg ",
        "src4":"http://travel-blog.waytoindia.com/wp-content/uploads/Mount_Abu.jpg ",
        "Train":"Abu Road railway station, located around 25 km away, serves the hill town of Mount Abu. Good number of trains connect Mount Abu with major Indian cities like Delhi, Ahmedabad, Jaipur, Mumbai etc. to name a few. Visitors can hire private or shared taxis from outside the station for reaching the town. ",
        "Bus": "Many state transport and private buses operate from nearby cities of Mount Abu. Daily direct bus service to the hill station is available from Udaipur, Jaipur, Ahmedabad and Baroda. Depending on budget, passengers can avail AC, deluxe or semi-deluxe buses.",
        "Air":"Udaipur Airport serves as the nearest airport to Mount Abu. Daily direct flights from Jaipur, Ahmedabad, Delhi and Mumbai are available till Udaipur. Stopover flights from other Indian cities can be availed to reach Udaipur or direct flights can be availed till Ahmedabad. From Udaipur and Ahmedabad, local taxis are available for Mount Abu."
      }
      // {
      //   "title": " ",
      //   "loc": "Tamilnadu :",
      //   "price": " ",
      //   "description":" ",
      //   "src":" ",
      // "src1":" ",
      //   "src2":" ",
      //   "src3":" ",
      //   "src4":" ",
      //   "Train":" ",
      //   "Bus": " ",
      //   "Air":" "
      // }




     ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad HillPage');
  }


  nav(item) {
    this.navCtrl.push(HillstationPage, { item:item});
  }

}
