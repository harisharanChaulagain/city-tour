"use client";
import OurTeamSection from "@/components/OurTeamSection";
import Image from "next/image";
import React, { useRef } from "react";
import aboutImage from "../../assets/aboutImage.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import privateTransfer from "../../assets/about/privateTransfer.png";
import personalizedItineraries from "../../assets/about/personalizedItineraries.png";
import expertlocalGuide from "../../assets/about/expertlocalGuide.png";
import accomodation from "../../assets/about/accomodation.png";

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
    <div className=" py-20  text-[#1d1d1b]">
      <div className="px-4 sm:px-8 w-full md:w-11/12 mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:tex-7xl xl:text-8xl font-bold flex justify-center items-center py-8">
          What Is Ghumfir Nepal?
        </h1>
        <div className="w-full h-[65vh] rounded-2xl overflow-hidden">
          <Image
            src={aboutImage}
            alt="pokheraImage"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-end">
          <p className="max-w-2xl 2xl:max-w-3xl py-10 text-base sm:text-xl md:text-2xl 2xl:text-3xl font-normal text-">
            Ghumfir Nepal is a travel company dedicated to providing
            personalized urban exploration experiences. Whether you are a solo
            traveler, a couple, a family, or a group of friends, we tailor our
            tours to suit your interests, ensuring that you see the city through
            a local&apos;s eyes.
          </p>
        </div>
        <div className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold py-16 mt-8">
          What to expect after <br /> booking...
        </div>
        <div className="py-10">
          <div className="hidden md:block">
            {aboutDetails.map((item, index) => (
              <div key={index} className="grid grid-cols-7">
                <div
                  className={`col-span-3 ${
                    index % 2 === 0 ? "order-1" : "order-3"
                  }`}
                ></div>
                <div className="col-span-1 flex flex-col items-center order-2">
                  <div className="dot"></div>
                  <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
                </div>
                <div
                  className={`col-span-3 ${
                    index % 2 === 0 ? "order-3" : "order-1"
                  }`}
                >
                  <AboutCard
                    title={item?.title}
                    details={item?.details}
                    image={item?.image}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden ">
            {aboutDetails.map((item, index) => (
              <div key={index} className="grid grid-cols-6">
                <div className="col-span-1 flex flex-col items-center">
                  <div className="dot"></div>
                  <div className="w-[4px] bg-[#1d1d1b] h-0 progress"></div>
                </div>
                <div className="col-span-5">
                  <AboutCard
                    title={item?.title}
                    details={item?.details}
                    image={item?.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurTeamSection />
    </div>
  );
}

const AboutCard = ({ title, image, details }: any) => {
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
      <h1 className="text-xl sm:text-2xl 2xl:text-3xl font-bold">{title}</h1>
      <h2 className="text-base sm:text-lg 2xl:text-xl">{details}</h2>
      <div className="h-[50vh] w-full rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt="pokhara image"
          className="h-full w-full object-cover object-top hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

const aboutDetails = [
  {
    title: "Personalized Itineraries",
    details:
      " We create customized tour plans based on your interests, whether you’re fascinated by history, culture, nature, or cuisine.",
    image: personalizedItineraries,
  },
  {
    title: "Private Transfer",
    details:
      "We will pick you up from the airport in a private transfer and bring you to your accommodations.",
    image: privateTransfer,
  },
  {
    title: "Expert Local Guides",
    descriptionexpertlocalGuide:
      " Our guides are locals who bring extensive knowledge and personal stories about Nepal’s rich culture and history . They are proficient in multiple languages to ensure clear communication.",
    image: expertlocalGuide,
  },
  {
    title: "Accommodation",
    details:
      "Unpack, relax, and settle into your centrally located accommodation.",
    image: accomodation,
  },
];
