"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Herosection from "@/components/Herosection";
import accomodationImage from "../assets/accomodation.jpg";
import coorkingImage from "../assets/coorking-place.jpg";
import communityImage from "../assets/community.jpg";
import localImage from "../assets/local-experience.jpg";

const includeItems = [
  {
    title: "Accommodations",
    description: "Centrally located, apartment or condo accomodations.",
    icon: "mi:home",
    image: accomodationImage,
  },
  {
    title: "Co-working spaces",
    description: "24/7 access to co-working space with strong WiFi.",
    icon: "ri:computer-line",
    image: coorkingImage,
  },
  {
    title: "Community",
    description: "Like-minded nomads working and traveling the world.",
    icon: "lucide:users",
    image: communityImage,
  },
  {
    title: "Local Experiences",
    description: "Make memories with inclusive local experiences.",
    icon: "icon-park-outline:local-two",
    image: localImage,
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % includeItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <main>
      <Herosection />
      <section className="px-4 md:px-8 flex flex-col gap-4">
        <h1 className="text-sm">What’s included?</h1>
        <h2 className="text-5xl font-bold">Work remotely. Travel the world.</h2>
        <div className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300">
          <button className="text-white bg-[#1D1D1B] p-2 rounded-full">
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
          Learn how it works
        </div>
      </section>
      <section className="py-20 px-4 md:px-8">
        <div className="relative">
          <div className="h-96 rounded-2xl overflow-hidden transition-all duration-300">
            <Image
              src={includeItems[activeIndex].image}
              alt={includeItems[activeIndex].title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 place-items-center gap-8 px-8">
            {includeItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex flex-col justify-between rounded-2xl p-4 h-52 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#1D1D1B] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <div>
                  <Icon icon={item.icon} className="text-2xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
