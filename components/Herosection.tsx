"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import pokharaCity from "../assets/pokhera.jpg";
import bhaktapurCity from "../assets/bhaktapur.jpg";
import { Icon } from "@iconify/react";

const images = [pokharaCity, bhaktapurCity];

export default function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="px-4 md:px-8 py-20">
      <div className="relative w-full h-80 rounded-2xl">
        <div className="h-80 rounded-2xl overflow-hidden transition-all duration-300">
          <Image
            src={images[currentIndex]}
            alt="city"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute top-32 left-20 text-white flex flex-col gap-4">
          <h1 className="font-bold text-5xl">Work from anywhere.</h1>
          <p className="text-xl">
            Work remotely, explore various destinations, <br /> and make lasting
            memories with a community of digital nomads.
          </p>
        </div>
        <div className="absolute -bottom-5 right-10 flex justify-between max-w-xs gap-4">
          <button
            onClick={handlePrev}
            className="text-white bg-[#1D1D1B] p-2 rounded-full"
          >
            <Icon
              icon="grommet-icons:form-previous-link"
              className="text-2xl"
            />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-[#1D1D1B] p-2 rounded-full"
          >
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
}
