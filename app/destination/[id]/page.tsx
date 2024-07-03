"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import pokharaCity from "../../../assets/pokhera.jpg";
import thakalikhana from "../../../assets/thakalikhana.webp";
import bandipur from "../../../assets/destination/bandipur.png";
import chitwan from "../../../assets/destination/chitwan.png";
import kathmandu from "../../../assets/destination/kathmandu.png";
import lumbini from "../../../assets/destination/lumbini.png";
import pokhera from "../../../assets/destination/pokhera.png";
import dhulikhel from "../../../assets/destination/dhulikhel.png";
import nagarkot from "../../../assets/destination/nagarkot.png";
import bhaktapur from "../../../assets/destination/bhaktapur.png";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const filteredDestinations = allDestinations.filter((item) => item.id === id);
  return (
    <>
      {filteredDestinations.map((item, index) => (
        <main
          key={index}
          className="px-4 sm:px-8 w-full md:w-11/12 mx-auto py-20 "
        >
          <section className="relative w-full h-[65vh] rounded-2xl mt-4">
            <div className="h-[65vh] px-4 rounded-2xl overflow-hidden transition-all duration-300">
              <Image
                src={item?.image}
                alt="city"
                className="h-full w-full object-cover object-center rounded-2xl"
              />
            </div>
            <div className="absolute top-52 left-20 text-white flex flex-col gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Work from anywhere.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl">
                Work remotely, explore various destinations, <br /> and make
                lasting memories with a community of digital Ghumfir Nepals.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 py-10">
            {destinationDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center justify-center bg-[#DFDDD8] rounded-2xl p-8"
              >
                <Icon icon={item?.icon} className="text-2xl" />
                <span>{item?.title}</span>
                <span>{item?.desc}</span>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* change */}

            <div className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Information
              </h2>
              <div className="text-base sm:text-lg">{item?.information}</div>

              <h2 className="text-lg sm:text-xl md:text-2xl">
                Recommended Activities
              </h2>
              <div className="h-[50vh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item?.image}
                  alt="pokharaCity"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                {activitiesDetails.map((item, index) => (
                  <div key={index} className="text-sm sm:text-base">
                    <div>
                      {index + 1}.{" "}
                      <span className="font-bold">{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Must-try Food
              </h2>
              <div className="h-[50vh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={thakalikhana}
                  alt="thakalikhana"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                {item.food.map((foodItem, index) => (
                  <div key={index} className="text-sm sm:text-base">
                    <div>
                      {index + 1}.{" "}
                      <span className="font-bold">{foodItem.title}</span>
                      <p>{foodItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Itinerary for Kathmandu Package
              </h2>
              {item?.itinerary?.map((itenary, index) => (
                <div key={index} className="text-base sm:text-lg">
                  <p>
                    <strong>{itenary?.title} : </strong>
                    {itenary?.description}
                  </p>
                </div>
              ))}
              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Costs Included
              </h2>
              <div className="text-base sm:text-lg">
                <ul className="list-disc pl-4">
                  {item?.constIncluded?.map((costIncluded, index) => (
                    <li key={index}>{costIncluded}</li>
                  ))}
                </ul>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Costs Excluded
              </h2>
              <div className="text-base sm:text-lg">
                <ul className="list-disc pl-4">
                  {item?.constExcluded?.map((constExcluded, index) => (
                    <li key={index}>{constExcluded}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-full">
              <div className="lg:sticky top-20 p-8 flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg bg-[#1d1d1b] text-white">
                <div className="">
                  <div className="mb-4 font-medium text-xl">
                    <p className="flex justify-between">
                      <strong>Accommodations:</strong> <span>$650</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Co-working Space:</strong> <span>$650</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Private transfer:</strong> <span>$650</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Community excursions:</strong> <span>$650</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <strong className="text-2xl font-bold">Total Due:</strong>{" "}
                  $1,200
                </div>
                <div className="flex flex-col gap-1">
                  <div className="py-4 flex gap-2 items-center">
                    <div className="p-2 bg-[#494947] rounded-md w-fit">
                      <Icon icon="mingcute:time-fill" className="text-xl" />
                    </div>
                    <div>
                      <div>Free cancellation</div>
                      <div>Within 24 hours of booking</div>
                    </div>
                  </div>
                  <div className="py-4 flex gap-2 items-center">
                    <div className="p-2  bg-[#494947]  rounded-md w-fit">
                      <Icon icon="tabler:arrows-cross" className="text-xl" />
                    </div>
                    <div>
                      <div>No Change Fees</div>
                      <div>Select a different trip free of charge.</div>
                    </div>
                  </div>
                  <div className="py-4 flex gap-2 items-center">
                    <div className="p-2  bg-[#494947]  rounded-md w-fit">
                      <Icon icon="ic:baseline-payment" className="text-xl" />
                    </div>
                    <div>
                      <div>Payment plan</div>
                      <div>
                        Break up your payment into several installments.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-[#404448] hover:bg-[#404448]/80 p-4 rounded-2xl justify-center items-center text-sm sm:text-base w-full transition-all duration-300">
                    Book destination
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      ))}
    </>
  );
}

const destinationDetails = [
  {
    title: "National Language",
    desc: "Nepali",
    icon: "fluent-mdl2:emoji-2",
  },
  {
    title: "Weather",
    desc: "30 Deg",
    icon: "ph:sun",
  },
  {
    title: "Time zone",
    desc: "GMT + 45",
    icon: "mdi:alarm",
  },
  {
    title: "Currency",
    desc: "Nepali Rupees",
    icon: "formkit:currency",
  },
];

const foodDetails = [
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
];

const activitiesDetails = [
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
];

const allDestinations = [
  // Popular Destinations
  {
    id: "p1",
    city: "Pokhara",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: pokhera,
    type: "popular",
    information:
      "Pokhara, known as the Gateway to the Himalayas, is a serene city nestled in central Nepal. It is renowned for its stunning natural beauty, including views of the Annapurna range, tranquil lakes, and lush green landscapes. The city is a hub for adventure sports and a popular starting point for treks to the Annapurna Circuit and Base Camp.",
    food: [
      {
        title: "Thakali Thali",
        description:
          "A traditional Nepali meal with rice, lentils, meat or vegetable curry, pickles, and spinach.",
      },
      {
        title: "Fish from Phewa Lake",
        description: "Freshly caught fish prepared in various local styles.",
      },
      {
        title: "Mo:Mo",
        description:
          "Nepali dumplings filled with meat or vegetables, a popular snack in Pokhara.",
      },
      {
        title: "Sel Roti",
        description:
          "Traditional Nepali rice doughnut, often enjoyed as a snack or during festivals.",
      },
      {
        title: "Gundruk",
        description: "Fermented leafy greens, typically served as a side dish.",
      },
      {
        title: "Chukauni",
        description:
          "A potato and yogurt dish, typical of the Thakali cuisine.",
      },
      {
        title: "Yak Cheese",
        description:
          "Locally produced cheese, often enjoyed with crackers or bread.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Bhaktapur and settle into your hotel. Start your exploration at Bhaktapur Durbar Square, admiring the architectural beauty of the 55-Window Palace and the Vatsala Temple. End the day with a traditional Newari dinner.",
      },
      {
        title: "Day 2",
        description:
          "Begin with a visit to the Nyatapola Temple in Taumadhi Square, followed by a stroll to the Pottery Square to see local artisans at work. In the afternoon, explore Dattatreya Square and its surrounding attractions, including the Peacock Window. Enjoy an evening cultural performance and Newari feast. ",
      },
      {
        title: "Day 3",
        description:
          " Visit the Bhaktapur National Art Gallery in the morning, then head to Taumadhi Square to immerse yourself in local life and festivities. Spend the afternoon at your leisure, shopping for local crafts or enjoying more of Bhaktapur's culinary delights.",
      },
      {
        title: "Day 4",
        description:
          "Take a morning trip to Nagarkot for panoramic views of the Himalayas and a peaceful retreat. Return to Bhaktapur for a farewell lunch featuring Juju Dhau and other local specialties before departing. ",
      },
    ],
    constIncluded: [
      "Transportation within Pokhara city",
      "Guide services",
      "Entrance fees to ",
      " Meals (if specified in the tour package)",
      "Taxes and service charges ",
    ],
    constExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., paragliding)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "p2",
    city: "Lumbini",
    dates: "6/20/23 - 6/27/23",
    price: "$520",
    image: lumbini,
    type: "popular",
    information:
      "Lumbini, the birthplace of Lord Buddha, is a pilgrimage site of great spiritual significance, featuring ancient monasteries, a sacred Bodhi tree, and the Maya Devi Temple marking Buddha's birth spot.",
    food: [
      {
        title: "Momos",
        description:
          "These are Nepali-style dumplings filled with either meat or vegetables, often served steamed or fried, accompanied by a spicy dipping sauce. Momos are ubiquitous and beloved throughout Nepal.",
      },
      {
        title: "Dal Bhat",
        description:
          "Known as the staple dish of Nepal, Dal Bhat consists of steamed rice (bhat) served with lentil soup (dal), various curries (vegetarian or non-vegetarian), and pickles. It’s a hearty and satisfying meal enjoyed by locals and tourists alike.",
      },
      {
        title: "Newari Cuisine",
        description:
          "Explore Newari dishes such as Chatamari (a Nepali pizza-like dish), Samay Baji (a traditional Newari platter with beaten rice, meat curry, buffalo jerky, and more), and Yomari (a sweet dumpling filled with molasses or sesame seeds).",
      },
      {
        title: "Sel Roti",
        description:
          "This traditional Nepali rice doughnut is crispy on the outside and soft on the inside, often enjoyed as a snack or during festivals.",
      },
      {
        title: "Thukpa",
        description:
          "A comforting Tibetan noodle soup that has become popular in Kathmandu, featuring wheat noodles, vegetables, and sometimes meat in a flavorful broth.",
      },
      {
        title: "Juju Dhau",
        description:
          "Known as 'King Curd,' this creamy and rich yogurt from Bhaktapur is a must-try dessert, often served with honey or sugar.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Lumbini and check into your hotel. Begin your visit at the Maya Devi Temple, the exact birthplace of Buddha, and explore the surrounding sacred garden. End the day with a visit to the Ashoka Pillar, erected by Emperor Ashoka in 249 BC.",
      },
      {
        title: "Day 2",
        description:
          "Start the day with a visit to the World Peace Pagoda. Spend the afternoon exploring the various monasteries built by Buddhist communities from around the world, including the Thai, Chinese, and Korean temples. Enjoy an evening meditation session.",
      },
      {
        title: "Day 3",
        description:
          "Visit the Lumbini Museum and the Lumbini International Research Institute in the morning. In the afternoon, take a short trip to the nearby Tilaurakot, the ancient palace of King Suddhodana, Siddhartha Gautama's father. Return to Lumbini for an evening cultural performance.",
      },
      {
        title: "Day 4",
        description:
          "Take a morning walk through the Sacred Garden, reflecting on the serene surroundings. Afterward, visit the Eternal Flame, which symbolizes world peace. Enjoy a farewell lunch featuring local delicacies before departing.",
      },
    ],
    costIncluded: [
      "Transportation within Lumbini",
      "Guide services",
      "Entrance fees to all listed sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    costExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., bike rentals)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "p3",
    city: "Kathmandu",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: kathmandu,
    type: "popular",
    information:
      "Kathmandu, the vibrant capital of Nepal, offers a plethora of activities and culinary delights for visitors to explore. Begin your journey at Kathmandu Durbar Square, a UNESCO World Heritage Site adorned with ancient palaces, temples, and intricate wood carvings that depict Nepal's rich cultural history.",
    food: [
      {
        title: "Momos",
        description:
          "These are Nepali-style dumplings filled with either meat or vegetables, often served steamed or fried, accompanied by a spicy dipping sauce. Momos are ubiquitous and beloved throughout Nepal.",
      },
      {
        title: "Dal Bhat",
        description:
          "Known as the staple dish of Nepal, Dal Bhat consists of steamed rice (bhat) served with lentil soup (dal), various curries (vegetarian or non-vegetarian), and pickles. It’s a hearty and satisfying meal enjoyed by locals and tourists alike.",
      },
      {
        title: "Newari Cuisine",
        description:
          "Explore Newari dishes such as Chatamari (a Nepali pizza-like dish), Samay Baji (a traditional Newari platter with beaten rice, meat curry, buffalo jerky, and more), and Yomari (a sweet dumpling filled with molasses or sesame seeds).",
      },
      {
        title: "Sel Roti",
        description:
          "This traditional Nepali rice doughnut is crispy on the outside and soft on the inside, often enjoyed as a snack or during festivals.",
      },
      {
        title: "Thukpa",
        description:
          "A comforting Tibetan noodle soup that has become popular in Kathmandu, featuring wheat noodles, vegetables, and sometimes meat in a flavorful broth.",
      },
      {
        title: "Juju Dhau",
        description:
          "Known as 'King Curd,' this creamy and rich yogurt from Bhaktapur is a must-try dessert, often served with honey or sugar.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Upon arrival in Kathmandu, settle into your hotel before visiting Kathmandu Durbar Square. Explore ancient palaces and temples, such as Hanuman Dhoka and Taleju Temple, showcasing Nepal’s architectural heritage. Enjoy a traditional Nepali dinner to cap off your day. ",
      },
      {
        title: "Day 2",
        description:
          "Begin with Swayambhunath, the Monkey Temple, offering panoramic views and Buddhist stupas. Then, visit Patan Durbar Square for Newar art and architecture. Conclude with shopping and dining in Thamel. ",
      },
      {
        title: "Day 3",
        description:
          "Start at Pashupatinath Temple for Hindu rituals along the Bagmati River. Continue to Boudhanath Stupa for Tibetan Buddhist culture. Attend a Nepali cultural show in the evening.",
      },
      {
        title: "Day 4",
        description:
          "Explore Bhaktapur Durbar Square's medieval temples and pottery workshops. Optionally, visit Nagarkot for Himalayan views. End with a farewell dinner featuring Nepali cuisine and cultural performances.",
      },
    ],
    constIncluded: [
      " Transportation within Kathmandu city",
      "Guide services",
      "Entrance fees to sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    constExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.) ",
      " Optional activities",
      "Tips",
      "Travel insurance",
      " Airport transfers (if not included)",
      " Accommodation (if not included)",
    ],
  },
  // Trending Destinations
  {
    id: "t1",
    city: "Dhulikhel",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: dhulikhel,
    type: "trending",
    information:
      "Dhulikhel, a charming town near Kathmandu, is renowned for its stunning Himalayan views and traditional Newari culture. Visitors can enjoy scenic hikes, cultural tours, and serene retreats.",
    food: [
      {
        title: "Gundruk",
        description:
          "A traditional fermented leafy green vegetable, Gundruk is a popular dish in Dhulikhel. It is often served as a side dish or added to soups and curries, providing a unique and tangy flavor.",
      },
      {
        title: "Aalu Tama",
        description:
          "This dish combines potatoes (aalu) and bamboo shoots (tama) in a flavorful curry. It's a beloved local delicacy that showcases the unique culinary traditions of the region.",
      },
      {
        title: "Chatamari",
        description:
          "Often referred to as 'Nepali pizza,' Chatamari is a traditional Newari dish made from rice flour batter topped with minced meat, eggs, and various spices. It’s a must-try for anyone visiting Dhulikhel.",
      },
      {
        title: "Samay Baji",
        description:
          "A traditional Newari platter, Samay Baji includes beaten rice, marinated meat, boiled egg, black soybeans, and various pickles. It's a festive dish often served during special occasions and festivals.",
      },
      {
        title: "Juju Dhau",
        description:
          "Known as 'King Curd,' this creamy and rich yogurt from nearby Bhaktapur is a popular dessert in Dhulikhel. It's often enjoyed plain or with a touch of honey.",
      },
      {
        title: "Kwati",
        description:
          "A hearty soup made from a mix of nine different types of sprouted beans, Kwati is especially popular during the festival of Janai Purnima. It's a nutritious and flavorful dish that is both warming and satisfying.",
      },
      {
        title: "Thwon",
        description:
          "A traditional Newari rice beer, Thwon is a popular beverage in Dhulikhel. It's often enjoyed during festivals and special occasions, offering a unique taste of local culture.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Dhulikhel and check into your hotel. Start your visit with a walk through the old town, exploring traditional Newari houses and temples like the Bhagwati Temple and Kali Temple. End the day with a panoramic sunset view of the Himalayas.",
      },
      {
        title: "Day 2",
        description:
          "Begin your day with a sunrise hike to the Kali Temple for stunning views of the surrounding mountains. Spend the afternoon visiting nearby villages like Panauti, known for its ancient architecture and cultural heritage. Enjoy an evening of local Newari cuisine.",
      },
      {
        title: "Day 3",
        description:
          "Take a morning trip to Namo Buddha, one of the most important Buddhist pilgrimage sites in Nepal. Explore the monasteries and learn about the legend of Buddha's self-sacrifice. Return to Dhulikhel for a relaxing afternoon at your leisure.",
      },
      {
        title: "Day 4",
        description:
          "Enjoy a leisurely breakfast and a final walk through Dhulikhel before departing. Optionally, you can visit the Dhulikhel Hospital to learn about its community health programs.",
      },
    ],
    costIncluded: [
      "Transportation within Dhulikhel",
      "Guide services",
      "Entrance fees to all listed sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    constExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., yoga sessions)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "t2",
    city: "Chitwan",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: chitwan,
    type: "trending",
    information:
      "Chitwan, home to the famous Chitwan National Park, offers a unique blend of wildlife adventures and cultural experiences. Visitors can enjoy jungle safaris, elephant rides, and cultural performances by the Tharu community.",
    food: [
      {
        title: "Bara",
        description:
          "A popular Newari snack, Bara is a savory lentil pancake often topped with eggs or minced meat. It's a delicious and protein-packed treat that's perfect for any time of day.",
      },
      {
        title: "Tharu Cuisine",
        description:
          "Experience the traditional flavors of the Tharu community with dishes like fish curry, snails, and rice cooked in banana leaves. Tharu cuisine is unique to the region and offers a taste of local culture.",
      },
      {
        title: "Dhido",
        description:
          "A staple food made from buckwheat or millet flour, Dhido is typically served with gundruk (fermented leafy greens) and meat or vegetable curry. It's a hearty and nutritious dish that's central to Nepali cuisine.",
      },
      {
        title: "Bhakka",
        description:
          "A steamed rice flour cake popular among the Tharu people, Bhakka is often served as a breakfast item or snack. It is light, fluffy, and pairs well with spicy pickles.",
      },
      {
        title: "Sekuwa",
        description:
          "A popular street food, Sekuwa is grilled meat marinated with a blend of local spices. It's usually served with puffed rice and spicy chutney, making it a flavorful and satisfying snack.",
      },
      {
        title: "Sel Roti",
        description:
          "A traditional homemade, sweet, ring-shaped rice bread/doughnut that is essential during festivals and special occasions. It’s crispy on the outside and soft on the inside.",
      },
      {
        title: "Yomari",
        description:
          "A sweet dumpling made from rice flour and filled with a mixture of coconut, sesame seeds, and molasses. It's a festive dish often prepared during the Yomari Punhi festival.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Chitwan and check into your lodge. Start your adventure with a visit to a Tharu village to learn about the local culture and traditions. In the evening, enjoy a traditional Tharu dance performance.",
      },
      {
        title: "Day 2",
        description:
          "Embark on a full-day jungle safari in Chitwan National Park. Experience a thrilling jeep safari and a guided nature walk to spot wildlife like rhinos, tigers, and elephants. End the day with a serene canoe ride along the Rapti River.",
      },
      {
        title: "Day 3",
        description:
          "Begin your day with a bird-watching tour, followed by a visit to the Elephant Breeding Center. In the afternoon, enjoy a relaxing ox cart ride through the village. Wrap up the day with a delicious dinner featuring local cuisine.",
      },
      {
        title: "Day 4",
        description:
          "Take a morning walk through the park’s buffer zone to observe the rich biodiversity. After breakfast, explore the local markets for souvenirs before departing Chitwan.",
      },
    ],
    costIncluded: [
      "Transportation within Chitwan",
      "Guide services",
      "Entrance fees to all listed sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    constExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., yoga sessions)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "t3",
    city: "Pokhara",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: pokhera,
    type: "trending",
    information:
      "Pokhara, known as the Gateway to the Himalayas, is a serene city nestled in central Nepal. It is renowned for its stunning natural beauty, including views of the Annapurna range, tranquil lakes, and lush green landscapes. The city is a hub for adventure sports and a popular starting point for treks to the Annapurna Circuit and Base Camp.",
    food: [
      {
        title: "Thakali Thali",
        description:
          "A traditional Nepali meal with rice, lentils, meat or vegetable curry, pickles, and spinach.",
      },
      {
        title: "Fish from Phewa Lake",
        description: "Freshly caught fish prepared in various local styles.",
      },
      {
        title: "Mo:Mo",
        description:
          "Nepali dumplings filled with meat or vegetables, a popular snack in Pokhara.",
      },
      {
        title: "Sel Roti",
        description:
          "Traditional Nepali rice doughnut, often enjoyed as a snack or during festivals.",
      },
      {
        title: "Gundruk",
        description: "Fermented leafy greens, typically served as a side dish.",
      },
      {
        title: "Chukauni",
        description:
          "A potato and yogurt dish, typical of the Thakali cuisine.",
      },
      {
        title: "Yak Cheese",
        description:
          "Locally produced cheese, often enjoyed with crackers or bread.",
      },
    ],
  },
  // Seasonal Destinations
  {
    id: "s1",
    city: "Bhaktapur",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bhaktapur,
    type: "seasonal",
    information:
      "Bhaktapur, known as the City of Devotees, is a living museum that offers visitors a glimpse into Nepal's rich cultural and architectural heritage. This ancient city, a UNESCO World Heritage Site, is famed for its well-preserved palaces, temples, and traditional Newari culture.",
    food: [
      {
        title: "Juju Dhau",
        description:
          "Known as 'King Curd,' this creamy and rich yogurt is a specialty of Bhaktapur, often served with honey or sugar.",
      },
      {
        title: "Newari Cuisine",
        description:
          "Enjoy traditional Newari dishes such as Chatamari (a Nepali pizza-like dish), Samay Baji (a platter with beaten rice, meat curry, buffalo jerky, and more), and Yomari (a sweet dumpling filled with molasses or sesame seeds).",
      },
      {
        title: "Wo",
        description:
          "A savory Newari pancake made from ground lentils, typically enjoyed as a snack or part of a festive meal.",
      },
      {
        title: "Chhoyla",
        description:
          "Spiced and grilled meat, often buffalo or chicken, marinated with herbs and spices, served cold and typically enjoyed with beaten rice.",
      },
      {
        title: "Sukuti",
        description:
          "Dried meat, usually buffalo, spiced and served as a popular snack or appetizer.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Bhaktapur and settle into your hotel. Start your exploration at Bhaktapur Durbar Square, admiring the architectural beauty of the 55-Window Palace and the Vatsala Temple. End the day with a traditional Newari dinner.",
      },
      {
        title: "Day 2",
        description:
          "Begin with a visit to the Nyatapola Temple in Taumadhi Square, followed by a stroll to the Pottery Square to see local artisans at work. In the afternoon, explore Dattatreya Square and its surrounding attractions, including the Peacock Window. Enjoy an evening cultural performance and Newari feast. ",
      },
      {
        title: "Day 3",
        description:
          " Visit the Bhaktapur National Art Gallery in the morning, then head to Taumadhi Square to immerse yourself in local life and festivities. Spend the afternoon at your leisure, shopping for local crafts or enjoying more of Bhaktapur's culinary delights.",
      },
      {
        title: "Day 4",
        description:
          "Take a morning trip to Nagarkot for panoramic views of the Himalayas and a peaceful retreat. Return to Bhaktapur for a farewell lunch featuring Juju Dhau and other local specialties before departing. ",
      },
    ],
    costIncluded: [
      "Transportation within Bhaktapur city",
      "Guide services",
      "Entrance fees to sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    constExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "s2",
    city: "Nagarkot",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: nagarkot,
    type: "seasonal",
    information:
      "Nagarkot is renowned for its panoramic views of the Himalayas, including Mount Everest. It’s a popular spot for sunrise and sunset views, hiking, and experiencing traditional village life.",
    food: [
      {
        title: "Gundruk",
        description:
          "A traditional fermented leafy green vegetable, Gundruk is often served as a side dish or added to soups and curries, providing a unique and tangy flavor.",
      },
      {
        title: "Sel Roti",
        description:
          "A traditional homemade, sweet, ring-shaped rice bread/doughnut that is essential during festivals and special occasions. It’s crispy on the outside and soft on the inside.",
      },
      {
        title: "Aalu Tama",
        description:
          "This dish combines potatoes (aalu) and bamboo shoots (tama) in a flavorful curry. It's a beloved local delicacy that showcases the unique culinary traditions of the region.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Nagarkot and check into your hotel. Take a leisurely walk around the village and enjoy the panoramic views of the Himalayas. In the evening, watch the sunset over the mountains.",
      },
      {
        title: "Day 2",
        description:
          "Wake up early for a sunrise view of the Himalayas. After breakfast, go for a hike to the Nagarkot View Tower, which offers a 360-degree view of the surrounding landscape. Spend the afternoon exploring nearby villages and interacting with locals.",
      },
      {
        title: "Day 3",
        description:
          "Take a day trip to the nearby Changu Narayan Temple, a UNESCO World Heritage Site, and explore its ancient architecture and rich history. Return to Nagarkot for a relaxing evening.",
      },
      {
        title: "Day 4",
        description:
          "Enjoy a final morning in Nagarkot with a relaxed breakfast and some free time for last-minute exploration or souvenir shopping before departing.",
      },
    ],
    costIncluded: [
      "Transportation within Nagarkot",
      "Guide services",
      "Entrance fees to all listed sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    costExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., yoga sessions)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
  {
    id: "s3",
    city: "Bandipur",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bandipur,
    type: "seasonal",
    information:
      "Bandipur, a hilltop settlement in central Nepal, offers well-preserved cultural heritage, panoramic Himalayan views, and charming pedestrian-friendly streets with traditional Newari architecture.",
    food: [
      {
        title: "Newari Khaja Set",
        description:
          "A traditional Newari meal that includes a variety of items like beaten rice, barbecued buffalo meat, spicy potato salad, and different types of pickles. It’s a complete meal that gives a taste of local flavors.",
      },
      {
        title: "Yomari",
        description:
          "A sweet dumpling made from rice flour and filled with a mixture of coconut, sesame seeds, and molasses. It's a festive dish often prepared during the Yomari Punhi festival.",
      },
      {
        title: "Samay Baji",
        description:
          "A traditional Newari platter that includes beaten rice, marinated meat, boiled egg, black soybeans, and various pickles. It's often served during special occasions and festivals.",
      },
      {
        title: "Sel Roti",
        description:
          "A traditional homemade, sweet, ring-shaped rice bread/doughnut that is essential during festivals and special occasions. It’s crispy on the outside and soft on the inside.",
      },
      {
        title: "Gundruk",
        description:
          "A traditional fermented leafy green vegetable, Gundruk is often served as a side dish or added to soups and curries, providing a unique and tangy flavor.",
      },
      {
        title: "Kwati",
        description:
          "A hearty soup made from a mix of nine different types of sprouted beans, Kwati is especially popular during the festival of Janai Purnima. It's a nutritious and flavorful dish that is both warming and satisfying.",
      },
      {
        title: "Aalu Tama",
        description:
          "This dish combines potatoes (aalu) and bamboo shoots (tama) in a flavorful curry. It's a beloved local delicacy that showcases the unique culinary traditions of the region.",
      },
    ],
    itinerary: [
      {
        title: "Day 1",
        description:
          "Arrive in Bandipur and check into your hotel. Explore the charming streets lined with traditional Newari houses and visit the Tundikhel, a large open field offering panoramic views of the Himalayas.",
      },
      {
        title: "Day 2",
        description:
          "Start your day with a hike to the Siddha Gufa (Siddha Cave), one of the largest caves in Nepal. Spend the afternoon visiting the Thani Mai Temple and enjoy the sunset view from the hilltop.",
      },
      {
        title: "Day 3",
        description:
          "Visit the Khadga Devi Temple, a significant religious site in Bandipur. Afterward, take a leisurely walk through the village and interact with the locals to learn about their culture and traditions.",
      },
      {
        title: "Day 4",
        description:
          "Take a morning walk to the nearby villages of Ramkot and experience the rural lifestyle. Return to Bandipur for a relaxed afternoon and enjoy the local cuisine before departing.",
      },
    ],
    costIncluded: [
      "Transportation within Bandipur",
      "Guide services",
      "Entrance fees to all listed sites",
      "Meals (if specified in the tour package)",
      "Taxes and service charges",
    ],
    costExcluded: [
      "Personal expenses (souvenirs, additional snacks, etc.)",
      "Optional activities (e.g., yoga sessions)",
      "Tips",
      "Travel insurance",
      "Airport transfers (if not included)",
      "Accommodation (if not included)",
    ],
  },
];
