import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import kathmanduCity from "../assets/blog/kathmandu.png";
import bhaktapurCity from "../assets/blog/bhaktapur.png";
import chitwanCity from "../assets/blog/chitwan.png";
import pohkeraCity from "../assets/blog/pokhera.png";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function DestinationSection() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    gsap.fromTo(
      imageRefs.current[index],
      {
        autoAlpha: 0,
        scale: 0.8,
        rotation: -10,
        y: 100,
        transformOrigin: "50% 50% 0px",
        borderRadius: "24px",
        boxShadow:
          "rgba(16, 20, 24, 0.72) 0px 0.48175px 1.44525px -1.25px, rgba(16, 20, 24, 0.635) 0px 1.83083px 5.49248px -2.5px, rgba(16, 20, 24, 0.25) 0px 8px 24px -3.75px",
      },
      {
        autoAlpha: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
        borderRadius: "24px",
        boxShadow:
          "rgba(16, 20, 24, 0.72) 0px 0.48175px 1.44525px -1.25px, rgba(16, 20, 24, 0.635) 0px 1.83083px 5.49248px -2.5px, rgba(16, 20, 24, 0.25) 0px 8px 24px -3.75px",
      }
    );
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(imageRefs.current[index], {
      autoAlpha: 0,
      scale: 0.8,
      rotation: -10,
      y: 100,
      duration: 0.3,
      transformOrigin: "50% 50% 0px",
      borderRadius: "24px",
      boxShadow:
        "rgba(16, 20, 24, 0.72) 0px 0.48175px 1.44525px -1.25px, rgba(16, 20, 24, 0.635) 0px 1.83083px 5.49248px -2.5px, rgba(16, 20, 24, 0.25) 0px 8px 24px -3.75px",
    });
  };

  return (
    <div className="relative text-[#1d1d1b]">
      <section className="px-4 sm:px-8 md:px-16 flex flex-col gap-4">
        <h1 className="text-sm">Destinations</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our most popular destinations
        </h2>
        <Link
          href="/destination"
          className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300"
        >
          <button className="text-white bg-[#1D1D1B] p-2 rounded-full">
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
          View all destinations
        </Link>
      </section>
      <section className="px-4 sm:px-8 md:px-16 flex flex-col gap-4 pt-10">
        {destinationDetails.map((item, index) => (
          <div
            key={index}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-[#1D1D1b] relative pl-4"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="absolute text-sm sm:text-base top-3 -left-2">
              0{index + 1}
            </div>
            {item.title}
            <div className="bg-gray-600 my-2 h-0.5 w-full">
              <hr />
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className="absolute left-10 sm:left-60 md:left-96 bottom-0 w-64 h-64 object-cover rounded-lg shadow-lg pointer-events-none z-40"
              style={{
                opacity: 0,
                transform: "scale(0.8) rotate(-10deg) translateZ(0px)",
                transformOrigin: "50% 50% 0px",
                borderRadius: "24px",
                boxShadow:
                  "rgba(16, 20, 24, 0.72) 0px 0.48175px 1.44525px -1.25px, rgba(16, 20, 24, 0.635) 0px 1.83083px 5.49248px -2.5px, rgba(16, 20, 24, 0.25) 0px 8px 24px -3.75px",
              }}
              ref={(el: any) => (imageRefs.current[index] = el)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

const destinationDetails = [
  {
    title: "Pokhera, Nepal",
    image: pohkeraCity,
  },
  {
    title: "Bhaktapur, Nepal",
    image: bhaktapurCity,
  },
  {
    title: "Chitwan, Nepal",
    image: chitwanCity,
  },
  {
    title: "Kathmandu, Nepal",
    image: kathmanduCity,
  },
];
