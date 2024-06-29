import Image from "next/image";
import React from "react";
import bandipur from "../../assets/destination/bandipur.png";
import chitwan from "../../assets/destination/chitwan.png";
import kathmandu from "../../assets/destination/kathmandu.png";
import lumbini from "../../assets/destination/lumbini.png";
import pokhera from "../../assets/destination/pokhera.png";
import dhulikhel from "../../assets/destination/dhulikhel.png";
import nagarkot from "../../assets/destination/nagarkot.png";
import bhaktapur from "../../assets/destination/bhaktapur.png";

import { Icon } from "@iconify/react";
import Link from "next/link";

export const allDestinations = [
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
        
      }
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
  },
];

export default function Page() {
  const getDestinationsByType = (type: any) => {
    return allDestinations.filter((destination) => destination.type === type);
  };

  return (
    <main className="px-4 sm:px-8 md:px-16 py-20 text-[#1D1D1B] ">
      <section className="bg-[#DEDDD7] rounded-2xl flex flex-col gap-4 p-8 my-10">
        <h1 className="text-[#1D1D1B] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-20">
          Destinations
        </h1>
        <p className="text-sm sm:text-base">
          Roam Freely and Discover Your Ultimate Destination
        </p>
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4 ">
        <span className="text-base sm:text-xl font-bold">
          Popular Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 ">
        {/* Popular Destinations */}
        {getDestinationsByType("popular").map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-base sm:text-xl font-bold">
          Trending Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* Trending Destinations */}
        {getDestinationsByType("trending").map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-base sm:text-xl font-bold">
          Seasonal Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* Seasonal Destinations */}
        {getDestinationsByType("seasonal").map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </section>
    </main>
  );
}

const TripCard = ({ trip }: any) => (
  <Link
    href={`/destination/${trip.id}`}
    className="h-80 relative overflow-hidden rounded-2xl shadow-xl"
  >
    <Image
      src={trip.image}
      alt={trip.city}
      className="h-full w-full object-cover hover:scale-125 transition-all duration-300"
    />
    <div className="flex flex-col gap-2 absolute bottom-4 px-4 text-white w-full">
      <h1 className="text-2xl pb-2">{trip.city}</h1>
      <div className="flex justify-between w-full">
        <span className="flex items-center gap-2 text-sm">
          <Icon icon="ph:calendar" className="text-2xl" />
          {trip.dates}
        </span>
        <span className="text-sm">{trip.price}</span>
      </div>
    </div>
  </Link>
);
