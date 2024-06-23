"use client";
import Image from "next/image";
import React, { useState } from "react";
import kathmanduCity from "../assets/herosection/kathmanduCity.png";
import pohkeraCity from "../assets/herosection/PokheraCity.png";
import bhaktapurCity from "../assets/herosection/bhaktapurCity.png"
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  kathmanduCity,
  pohkeraCity,
  bhaktapurCity,
];

export default function Herosection() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleNext = () => {
    slider?.slickNext();
    setNextButtonClicked(true);
    setTimeout(() => setNextButtonClicked(false), 200);
  };

  const handlePrev = () => {
    slider?.slickPrev();
    setPrevButtonClicked(true);
    setTimeout(() => setPrevButtonClicked(false), 200);
  };

  return (
    <main className="px-4 sm:px-8 md:px-16 py-20 mt-10">
      <div className="relative ">
        <Slider
          ref={setSlider}
          {...settings}
          className="rounded-2xl overflow-hidden "
        >
          {images.map((src, index) => (
            <div key={index} className="px-4 ">
              <div className="h-80 sm:h-[75vh] transition-all duration-300">
                <Image
                  src={src}
                  alt="city"
                  className="h-full w-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="px-4 absolute top-40 left-4 sm:top-72 sm:left-10 text-white flex flex-col gap-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Work from anywhere.
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-gray-200">
            Work remotely, explore various destinations, <br /> and make lasting
            memories with a community of digital Ghumfir Nepals.
          </p>
        </div>
        <div
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-between
    max-w-xs gap-4 sm:left-auto sm:right-28 sm:transform-none"
        >
          <button
            onClick={handlePrev}
            className={`text-white bg-[#1D1D1B] p-4 rounded-full ${
              prevButtonClicked ? "scale-95" : "scale-100"
            }`}
          >
            <Icon
              icon="grommet-icons:form-previous-link"
              className="text-2xl"
            />
          </button>
          <button
            onClick={handleNext}
            className={`text-white bg-[#1D1D1B] p-4 rounded-full ${
              nextButtonClicked ? "scale-95" : "scale-100"
            }`}
          >
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
}
