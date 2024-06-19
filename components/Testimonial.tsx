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

export default function Testimonial() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Swiper
          dir="rtl"
          pagination={{
            clickable: true,
          }}
          loop
          modules={[Pagination]}
          className="mySwiper "
        >
          {testimonialDetails.map((item, index) => (
            <SwiperSlide key={index} className="pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="pb-6 flex gap-1 items-center justify-center">
                  <Icon icon="material-symbols:star" className="text-2xl" />
                  <Icon icon="material-symbols:star" className="text-2xl" />
                  <Icon icon="material-symbols:star" className="text-2xl" />
                  <Icon icon="material-symbols:star" className="text-2xl" />
                  <Icon icon="material-symbols:star" className="text-2xl" />
                </div>
                <figure>
                  <blockquote>
                    <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                      {item?.descriptioin}
                    </p>
                  </blockquote>
                  <div className=" flex gap-2 justify-center items-center w-full py-4">
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item?.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
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

const testimonialDetails = [
  {
    name: "Hari",
    descriptioin:
      "  “As a freelancer, finding the right work-life balance can be  challenging. Nomad has made it so much easier for me to explore new places while staying productive.”",
    position: "founder ",
  },
  {
    name: "Hari",
    descriptioin:
      "  “As a freelancer, finding the right work-life balance can be  challenging. Nomad has made it so much easier for me to explore new places while staying productive.”",
    position: "founder ",
  },
  {
    name: "Hari",
    descriptioin:
      "  “As a freelancer, finding the right work-life balance can be  challenging. Nomad has made it so much easier for me to explore new places while staying productive.”",
    position: "founder ",
  },
];
