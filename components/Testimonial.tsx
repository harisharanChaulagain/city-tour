"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonialDetails = [
  {
    name: "Hari Sharan Chaulagain",
    description:
      "Ghumfir Nepal's city tour was a perfect blend of history and culture. The food tour was equally delightful, with authentic local dishes that left us craving more!",
    position: "founder ",
  },
  {
    name: "Kiran Nepali",
    description:
      "Our guide from Ghumfir Nepal made our city tour both informative and entertaining. The food tour was a highlight, introducing us to flavors we never would have found on our own.",
    position: "founder ",
  },
  {
    name: "Loki Chaulagain",
    description:
      "Highly recommend Ghumfir Nepal for their expertly guided city tour and delectable food tour. They made our visit memorable with their local insights and delicious recommendations.",
    position: "founder ",
  },
  {
    name: "Dawa Sherpa",
    description:
      "We had an amazing time with Ghumfir Nepal exploring the city's landmarks and enjoying the food tour. Their attention to detail and passion for local culture truly stood out.",
    position: "abc",
  },
  {
    name: "Yogi Roy",
    description:
      "We loved every moment of our city tour with Ghumfir Nepal. The food tour was a highlight, offering a delicious introduction to the city's culinary scene.",
    position: "abc",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#DFDDD8]">
      <div className="mx-auto px-4 w-full md:w-11/12">
        <Swiper
          dir="rtl"
          pagination={{
            clickable: true,
          }}
          loop
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonialDetails.map((item, index) => (
            <SwiperSlide key={index} className="pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="pb-6 flex gap-1 items-center justify-center">
                  <Icon
                    icon="material-symbols:star"
                    className="text-2xl text-yellow-500"
                  />
                  <Icon
                    icon="material-symbols:star"
                    className="text-2xl text-yellow-500"
                  />
                  <Icon
                    icon="material-symbols:star"
                    className="text-2xl text-yellow-500"
                  />
                  <Icon
                    icon="material-symbols:star"
                    className="text-2xl text-yellow-500"
                  />
                  <Icon
                    icon="material-symbols:star"
                    className="text-2xl text-yellow-500"
                  />
                </div>
                <figure>
                  <p className="text-[#1d1d1b] text-xl font-semibold sm:text-2xl">
                    {item?.description}
                  </p>
                  <div className="flex gap-2 justify-center items-center w-full py-4">
                    <div className="flex flex-col justify-start">
                      <span className="text-[#1d1d1b] font-semibold flex justify-end">
                        {item?.name}
                      </span>
                      <span className="block text-[#1d1d1b]/90 text-sm mt-0.5">
                        {item?.position}
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={profile}
                        alt="testimonial image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
  