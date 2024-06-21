"use client";
import OurTeamSection from "@/components/OurTeamSection";
import Image from "next/image";
import React, { useRef } from "react";
import pokheraImage from "../../assets/pokhera.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useGSAP(() => {
    // Select all elements with the class "progress"
    const progressElements = document.querySelectorAll(".progress");

    // Loop through each progress element
    progressElements.forEach((progressElement) => {
      // Find the dot within the current progress element's parent
      const dot = progressElement.previousElementSibling;

      // Create a separate timeline for each progress element
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: progressElement.parentElement,
          start: "top 70%",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      });

      // Animate the dot's opacity
      tl.to(dot, {
        opacity: 1,
        duration: 0.5,
      });

      // Animate the progress bar's height
      tl.to(progressElement, {
        height: "100%",
      });
    });
  });

  return (
    <div className=" py-20 text-[#1d1d1b]">
      <div className="px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:tex-7xl xl:text-8xl font-bold flex justify-center items-center py-8">
          What Is CityWander?
        </h1>
        <div className="w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src={pokheraImage}
            alt="pokheraImage"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-end">
          <p className="max-w-2xl py-10 text-base sm:text-xl md:text-2xl font-normal ">
            CityWander is a travel startup providing travel programs and group
            work for digital CityWanders. Traveling solo can be daunting, so why
            not work remotely and explore the world with other like-minded
            members. Bring your self and your work. We&apos;ll take care of
            everything else.
          </p>
        </div>
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold py-16 mt-8">
          What to expect after <br /> booking...
        </div>
        <div className="py-10">
          <div className="hidden md:block">
            <div className="grid grid-cols-7">
              <div className="col-span-3"></div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-3">
                <AboutCard />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-3">
                <AboutCard />
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-3"></div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-3">
                <AboutCard />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-3">
                <AboutCard />
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
          </div>

          <div className="md:hidden ">
            <div className="grid grid-cols-6">
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-5">
                <AboutCard />
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-5">
                <AboutCard />
              </div>
            </div>{" "}
            <div className="grid grid-cols-6">
              <div className="col-span-1 flex flex-col items-center">
                <div className="dot"></div>
                <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
              </div>
              <div className="col-span-5">
                <AboutCard />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <OurTeamSection />
    </div>
  );
}

const AboutCard = () => {
  const cardRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      });

      tl.from(cardRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="about-card p-8 rounded-2xl bg-[#DFDDD8] shadow-sm flex flex-col gap-6"
    >
      <h1 className="text-xl sm:text-2xl font-bold">Co-working Space</h1>
      <h2 className="text-base sm:text-lg">Work remotely in your designated workspace.</h2>
      <div className="h-80 w-full rounded-2xl overflow-hidden">
        <Image
          src={pokheraImage}
          alt="pokhara image"
          className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};
