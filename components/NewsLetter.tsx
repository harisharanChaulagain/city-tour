"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, Draggable);

const circles = [
  {
    id: 1,
    title: "92%",
    top: "2%",
    left: "10%",
    content: " 21-52 years old",
    size: 140,
  },
  {
    id: 2,
    title: "100+",
    top: "0%",
    left: "55%",
    content: " Nationalities",
    size: 110,
  },
  {
    id: 3,
    title: "88%",
    top: "10%",
    left: "80%",
    content: " Traveling alone",
    size: 120,
  },
  {
    id: 4,
    title: "9%",
    top: "60%",
    left: "8%",
    content: " Founders and CEOs",
    size: 150,
  },
  {
    id: 5,
    title: "72%",
    top: "70%",
    left: "80%",
    content: " Work in tech",
    size: 100,
  },
];

export default function NewsLetter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      }

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          gsap.fromTo(
            circle,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: circle,
                start: "top 90%",
              },
              onStart: () => {
                circle.classList.remove("hidden");
              },
              onComplete: () => {
                Draggable.create(circle, {
                  bounds: section,
                  inertia: true,
                });
              },
            }
          );
        }
      });
    });
  });

  return (
    <main className="px-4 sm:px-8 w-full md:w-11/12 mx-auto py-10">
      <section
        ref={sectionRef}
        className="relative bg-[#DEDDD7] py-20  rounded-2xl mx-auto px-4 md:px-8 text-[#1D1D1B]"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-sm 2xl:text-base font-semibold">Community</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Subscribe to our newsletter.
          </h3>
          <p className="text-sm sm:text-base 2xl:text-lg">
            Join a group of like-minded digital Ghumfir Nepals working and
            traveling the world together. Get updates on new deals and discounts
            for every destination.
          </p>
        </div>
        <div className="mt-6 max-w-2xl mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder-[#1d1d1b] text-sm 2xl:text-base w-full p-4 rounded-md outline-none bg-[#D1CFC7]"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md 2xl:text-lg text-white bg-[#1D1D1B] hover:bg-[#1D1D1B]/90 duration-150 outline-none shadow-md sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
        <div className="hidden sm:block">
          {circles.map((circle, index) => (
            <div
              key={circle.id}
              ref={(el: any) => (circleRefs.current[index] = el)}
              className=" absolute bg-[#202428] text-white flex flex-col gap-2 items-center justify-center rounded-full shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
              style={{
                top: circle.top,
                left: circle.left,
                width: circle.size,
                height: circle.size,
              }}
            >
              <span className="text-2xl font-semibold">{circle.title}</span>
              <span className="text-sm px-4 text-center">{circle.content}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
