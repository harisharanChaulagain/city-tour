import Image from "next/image";
import React from "react";
import bhaktapurImage from "../../assets/bhaktapur.jpg";
import { Icon } from "@iconify/react";

// Define arrays of trip details
const OneWeekTrip = [
  {
    city: "Bhaktapur",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: bhaktapurImage,
  },
  {
    city: "Pokhara",
    dates: "6/20/23 - 6/27/23",
    price: "$520",
    image: bhaktapurImage,
  },
  {
    city: "Bhaktapur",
    dates: "6/13/23 - 6/20/23",
    price: "$433",
    image: bhaktapurImage,
  },
];

const TwoWeekTrip = [
  {
    city: "Kathmandu",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: bhaktapurImage,
  },
  {
    city: "Kathmandu",
    dates: "6/13/23 - 6/27/23",
    price: "$800",
    image: bhaktapurImage,
  },
];

const OneMonthTrip = [
  {
    city: "Lumbini",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bhaktapurImage,
  },
  {
    city: "Lumbini",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bhaktapurImage,
  },
  {
    city: "Lumbini",
    dates: "6/13/23 - 7/13/23",
    price: "$1200",
    image: bhaktapurImage,
  },
];

export default function Page() {
  return (
    <main className="px-4 sm:px-8 md:px-16 py-20">
      <section className="bg-[#DEDDD7] rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold text-5xl pt-10">
          Destinations
        </h1>
        <p>Work and travel the world with a community of like-minded people.</p>
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-xl font-bold"> 1-week trips</span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-3 gap-8 mb-10 ">
        {/*  OneWeekTrip */}
        {OneWeekTrip.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-xl font-bold">2-week trips</span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-2 gap-8 mb-10">
        {/*  TwoWeekTrip */}
        {TwoWeekTrip.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
      <div className="flex items-center whitespace-nowrap gap-4 py-4">
        <span className="text-xl font-bold">1-month trips</span>
        <span className="bg-[#DEDDD7] h-0.5 w-full"></span>
      </div>
      <section className="grid grid-cols-3 gap-8 mb-10">
        {/* 
         OneMonthTrip */}
        {OneMonthTrip.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </section>
    </main>
  );
}

const TripCard = ({ trip }: any) => (
  <div className="h-80 relative overflow-hidden rounded-2xl shadow-xl">
    <Image
      src={trip.image}
      alt={trip.city}
      className="h-full w-full object-cover hover:scale-125 transition-all duration-300"
    />
    <div className="flex flex-col gap-2 absolute bottom-4 px-4 text-white w-full">
      <h1 className="text-2xl ">{trip.city}</h1>
      <div className="flex justify-between w-full">
        <span className="flex items-center">
          <Icon icon="ph:calendar" className="text-2xl" />
          {trip.dates}
        </span>
        <span>{trip.price}</span>
      </div>
    </div>
  </div>
);
