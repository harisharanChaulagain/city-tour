import Image from "next/image";
import React from "react";
import bhaktapurImage from "../../assets/bhaktapur.jpg";
import { Icon } from "@iconify/react";

export default function page() {
  return (
    <main className="px-4 md:px-8 py-20">
      <section className="bg-gray-300 rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold text-5xl pt-10">
          Destinations
        </h1>
        <p>Work and travel the world with a community of like-minded people.</p>
      </section>
      <section className="grid grid-cols-3 gap-8">
        <TripCard />
      </section>
    </main>
  );
}

const TripCard = () => (
  <div>
    <div className="h-80 relative overflow-hidden rounded-2xl ">
      <Image
        src={bhaktapurImage}
        alt="bhaktapurImage"
        className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
      />
      <div className="flex flex-col gap-2 absolute bottom-4 left-4">
        <h1>Bhaktapur</h1>
        <div className="flex justify-between">
          <span>
            <Icon icon="ph:calendar" className="text-2xl" />
          </span>
          <span>from $433</span>
        </div>
      </div>
    </div>
  </div>
);
