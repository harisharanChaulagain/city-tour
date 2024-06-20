"use client";
import Image from "next/image";
import React, { useState } from "react";
import pokharaCity from "../assets/pokhera.jpg";
import bhaktapurCity from "../assets/bhaktapur.jpg";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [pokharaCity, bhaktapurCity];

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
    <main className=" md:px-4 py-20">
      <div className="relative w-full h-96 rounded-2xl">
        <Slider ref={setSlider} {...settings}>
          {images.map((src, index) => (
            <div
              key={index}
              className="h-96 px-4 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <Image
                src={src}
                alt="city"
                className="h-full w-full object-cover object-center rounded-2xl"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-52 left-20 text-white flex flex-col gap-4">
          <h1 className="font-bold text-5xl">Work from anywhere.</h1>
          <p className="text-xl">
            Work remotely, explore various destinations, <br /> and make lasting
            memories with a community of digital nomads.
          </p>
        </div>
        <div className="absolute -bottom-5 right-10 flex justify-between max-w-xs gap-4">
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
