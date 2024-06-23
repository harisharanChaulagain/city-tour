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

// Define arrays of trip details
const popularDestination = [
  {
    city: "Pokhera",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: pokhera,
  },
  {
    city: "Lumbini",
    dates: "6/20/23 - 6/27/23",
    price: "$520",
    image: lumbini,
  },
  {
    city: "Kathmandu",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: kathmandu,
  },
];

const trendingDestination = [
  {
    city: "Dhulikhel",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: dhulikhel,
  },
  {
    city: "Chitwan",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: chitwan,
  },
  {
    city: "Pokhera",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: pokhera,
  },
];

const seasonalDestination = [
  {
    city: "Bhaktapur",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bhaktapur,
  },
  {
    city: "Nagarkot",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: nagarkot,
  },
  {
    city: "Bandipur",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bandipur,
  },
];

export default function Page() {
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
          {" "}
          Popular Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 ">
        {/*  popularDestination */}
        {popularDestination.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-base sm:text-xl font-bold">
          Trending Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/*  trendingDestination */}
        {trendingDestination.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-base sm:text-xl font-bold">
          Seasonal Destinations
        </span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* 
         seasonalDestination */}
        {seasonalDestination.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
    </main>
  );
}

const TripCard = ({ trip }: any) => (
  <Link
    href="/destination/id"
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
