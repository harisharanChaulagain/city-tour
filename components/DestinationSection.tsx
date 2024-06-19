import React from "react";
import { Icon } from "@iconify/react";
import bhaktapurImage from "../assets/bhaktapur.jpg";
import pokharaImage from "../assets/pokhera.jpg";

export default function DestinationSection() {
  return (
    <div>
      <section className="px-4 md:px-8 flex flex-col gap-4">
        <h1 className="text-sm">Destinations</h1>
        <h2 className="text-5xl font-bold">Our most popular destinations</h2>
        <div className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300">
          <button className="text-white bg-[#1D1D1B] p-2 rounded-full">
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
          View all destinations
        </div>
      </section>
      <section className="px-4 md:px-8 flex flex-col gap-4 pt-10">
        {destinationDetails.map((item, index) => (
          <div key={index} className="text-6xl font-bold text-[#1D1D1b]">
            {item?.title}
            <hr className="mt-4" />
          </div>
        ))}
      </section>
    </div>
  );
}

const destinationDetails = [
  {
    title: "Bhaktapur, Nepal",
    image: bhaktapurImage,
  },
  {
    title: "Pokhara, Nepal",
    image: pokharaImage,
  },
  {
    title: "Bhaktapur, Nepal",
    image: bhaktapurImage,
  },
  {
    title: "Pokhara, Nepal",
    image: pokharaImage,
  },
];
