"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import kathmanduCity from "../assets/herosection/kathmanduCity.png";
import pohkeraCity from "../assets/herosection/pokheraCity.png";
import bhaktapurCity from "../assets/herosection/bhaktapurCity.png";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [kathmanduCity, pohkeraCity, bhaktapurCity];

export default function Herosection() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".heroImage", {
        y: "100%",
        duration: 1,
        ease: "sine.out",
      })
        .from(
          ".hero-text",
          {
            x: "-50px",
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "heroSection"
        )
        .from(
          ".hero-subtext",
          {
            y: "50px",
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "heroSection"
        )
        .from(
          ".hero-buttons button",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.2,
          },
          "heroSection"
        );
    },
    { scope: container }
  );

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
    <main
      className="px-4 sm:px-8 w-full md:w-11/12 mx-auto py-20 mt-10"
      style={{ overflowX: "hidden" }}
      ref={container}
    >
      <div className="relative">
        <Slider
          ref={setSlider}
          {...settings}
          className="rounded-2xl overflow-hidden"
        >
          {images.map((src, index) => (
            <div key={index} className="px-4 heroImage ">
              <div className="relative h-80 sm:h-[75vh] transition-all duration-300 hero-image">
                <Image
                  src={src}
                  alt="city"
                  className="h-full w-full object-cover object-center rounded-2xl "
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.4] rounded-2xl"></div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="pointer-events-none px-4 absolute bottom-10 left-4 sm:top-[40vh] sm:left-10 text-white flex flex-col gap-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hero-text">
            Discover the World with Us.
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-gray-200 hero-subtext">
            Travel to breathtaking destinations, immerse yourself in diverse
            cultures, <br /> and create unforgettable experiences with Ghumfir
            Nepal.
          </p>
        </div>
        <div
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-between
          max-w-xs gap-4 sm:left-auto sm:right-28 sm:transform-none hero-buttons"
        >
          <button
            onClick={handlePrev}
            className={`text-white bg-[#1D1D1B] p-4 rounded-full transition-transform duration-200 ${
              prevButtonClicked ? "scale-90" : "scale-100"
            }`}
          >
            <Icon
              icon="grommet-icons:form-previous-link"
              className="text-2xl"
            />
          </button>
          <button
            onClick={handleNext}
            className={`text-white bg-[#1D1D1B] p-4 rounded-full transition-transform duration-200 ${
              nextButtonClicked ? "scale-90" : "scale-100"
            }`}
          >
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
}
