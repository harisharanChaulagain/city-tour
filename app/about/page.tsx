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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".progress1",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });
    tl.from(".progress", {
      height: "100%",
    });
  });

  return (
    <div className=" py-20">
      <div className="px-4 sm:px-8 md:px-16">
        <h1 className="text-7xl font-bold flex justify-center items-center py-4">
          What Is Nomad?
        </h1>
        <div className="w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src={pokheraImage}
            alt="pokheraImage"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-end">
          <p className="max-w-xl py-4 text-xl font-normal">
            Nomad is a travel startup providing travel programs and group work
            for digital nomads. Traveling solo can be daunting, so why not work
            remotely and explore the world with other like-minded members. Bring
            your self and your work. We'll take care of everything else.
          </p>
        </div>
        <div className="text-2xl font-bold">
          What to expect after <br /> booking...
        </div>
        <div className="py-10 ">
          <div className="grid grid-cols-2 gap-20">
            <div className="w-0.5 bg-black h-0 progress1"></div>
            <AboutCard />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <AboutCard />
            <div className="w-0.5 bg-black h-0 progress2"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
          <div className="w-0.5 bg-black h-0 progress3"></div>
            <AboutCard />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <AboutCard />
          <div className="w-0.5 bg-black h-0 progress4"></div>
          </div>
          <div className="grid grid-cols-2 gap-20">
          <div className="w-0.5 bg-black h-0 progress5"></div>
            <AboutCard />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <AboutCard />
          <div className="w-0.5 bg-black h-0 progress6"></div>
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
      className="about-card p-4 rounded-2xl bg-[#DFDDD8] shadow-sm flex flex-col gap-4"
    >
      <h1 className="text-xl font-bold">Co-working Space</h1>
      <h2>Work remotely in your designated workspace.</h2>
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
