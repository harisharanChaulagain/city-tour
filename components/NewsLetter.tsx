"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, Draggable);

const circles = [
  { id: 1, content: " 1", size: 90 },
  { id: 2, content: " 2", size: 70 },
  { id: 3, content: " 3", size: 90 },
  { id: 4, content: " 4", size: 120 },
  { id: 5, content: " 5", size: 80 },
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
    <main className="px-4 sm:px-8 md:px-16 py-10">
      <section
        ref={sectionRef}
        className="relative bg-[#DEDDD7] py-20 rounded-2xl mx-auto px-4 md:px-8 text-[#1D1D1B]"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-sm font-semibold">Community</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Subscribe to our newsletter.
          </h3>
          <p className="text-sm sm:text-lg">
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
              className="placeholder-[#1d1d1b] text-sm w-full p-4 rounded-md outline-none bg-[#D1CFC7]"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-[#1D1D1B] hover:bg-[#1D1D1B]/90 duration-150 outline-none shadow-md sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
        <div className="hidden sm:block">
          {circles.map((circle, index) => (
            <motion.div
              key={circle.id}
              ref={(el: any) => (circleRefs.current[index] = el)}
              className=" absolute bg-[#1D1D1B] text-white flex items-center justify-center rounded-full shadow-md"
              style={{
                top: index < 3 ? 0 : "80%",
                left:
                  index < 3
                    ? `${index * 30 + 10}%`
                    : `${(index - 3) * 50 + 20}%`,
                width: circle.size,
                height: circle.size,
              }}
            >
              {circle.content}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
