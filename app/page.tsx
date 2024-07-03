"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Herosection from "@/components/Herosection";
import localImage from "../assets/local-experience.jpg";
import smallGroup from "../assets/small-group.png";
import customised from "../assets/customised.png";
import Testimonial from "@/components/Testimonial";
import DestinationSection from "@/components/DestinationSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import BlogSection from "@/components/BlogSection";

gsap.registerPlugin(ScrollTrigger);

const includeItems = [
  {
    title: "Customized Packages",
    description:
      "Tailored city and food tours that cater to individual preferences and interests.",
    icon: "mi:home",
    image: customised,
  },
  {
    title: "Small Group Atmosphere",
    description:
      "Intimate tours that allow for personalized attention and a more immersive experience.",
    icon: "ri:computer-line",
    image: smallGroup,
  },
  {
    title: "Multi-lingual Guides",
    description:
      "Guides fluent in multiple languages to accommodate diverse travelers.",
    icon: "lucide:users",
    image: localImage,
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const titlteRef1 = useRef(null);
  const subTitleRef1 = useRef(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % includeItems.length;
        swiperRef.current.swiper.slideTo(newIndex);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper.activeIndex;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleMouseEnter = () => {
    gsap.to(iconRef1.current, {
      x: "32px",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(iconRef2.current, {
      x: "32px",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef1.current, {
      x: "0px",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(iconRef2.current, {
      x: "0px",
      duration: 0.5,
      ease: "power2.in",
    });
  };

  useGSAP(() => {
    // Timeline for title animation
    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: titlteRef1.current,
        start: "top bottom",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tlTitle.from(titlteRef1.current, {
      opacity: 0,
      x: "-50px",
    });

    // Timeline for subtitle animation
    const tlSubtitle = gsap.timeline({
      scrollTrigger: {
        trigger: subTitleRef1.current,
        start: "top bottom",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tlSubtitle.from(subTitleRef1.current, {
      opacity: 0,
    });
  });

  return (
    <main className="overflow-x-hidden">
      <Herosection />
      <section className="px-4 sm:px-8 w-full md:w-11/12 mx-auto flex flex-col gap-4 py-10">
        <h2
          ref={titlteRef1}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          What Sets Us Apart
        </h2>
        <div ref={subTitleRef1}>
          <Link
            href="/about"
            className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="relative text-white bg-[#1D1D1B] h-10 w-10 rounded-full overflow-hidden">
              <span className="absolute top-2 -left-6" ref={iconRef1}>
                <Icon
                  icon="grommet-icons:form-next-link"
                  className="text-2xl"
                />
              </span>
              <span className="absolute top-2 left-2" ref={iconRef2}>
                <Icon
                  icon="grommet-icons:form-next-link"
                  className="text-2xl"
                />
              </span>
            </button>
            Learn how it works
          </Link>
        </div>
      </section>
      <section className="pb-20 px-4 sm:px-8 w-full md:w-11/12 mx-auto ">
        <div className="relative">
          <div className="h-96 w-full rounded-2xl overflow-hidden transition-all duration-300">
            <Image
              src={includeItems[activeIndex].image}
              alt={includeItems[activeIndex].title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 px-8">
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              onSlideChange={handleSlideChange}
            >
              {includeItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => handleTabClick(index)}
                    className={`flex flex-col justify-between rounded-2xl p-4 h-52 cursor-pointer transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#1D1D1B] text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <div className="flex flex-col gap-2 pr-8">
                      <h1 className="text-base sm:text-lg md:text-2xl font-bold">
                        {item.title}
                      </h1>
                      <p className="text-sm sm:text-base ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <DestinationSection />
      <Testimonial />
      <BlogSection />
    </main>
  );
}
