"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const circles = [
  { id: 1, content: "Experience 1" },
  { id: 2, content: "Experience 2" },
  { id: 3, content: "Experience 3" },
  { id: 4, content: "Experience 4" },
  { id: 5, content: "Experience 5" },
];

export default function NewsLetter() {
  const sectionRef = useRef<any>(null);
  const circleRefs = useRef<any>([]);

  useEffect(() => {
    const section = sectionRef.current;
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

    circleRefs.current.forEach((circle: any, index: number) => {
      gsap.fromTo(
        circle,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <main className="px-4 sm:px-8 md:px-16 py-10">
      <section
        ref={sectionRef}
        className="relative bg-[#DEDDD7] py-20 rounded-2xl mx-auto px-4 md:px-8 text-[#1D1D1B]"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-sm font-semibold">Community</h1>
          <h3 className="ttext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
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
        {circles.slice(0, 3).map((circle, index) => (
          <motion.div
            key={circle.id}
            ref={(el: any) => (circleRefs.current[index] = el)}
            drag
            dragConstraints={{
              top: -100,
              bottom: 100,
              left: -100,
              right: 100,
            }}
            className="hidden absolute w-24 h-24 bg-[#1D1D1B] text-white lg:flex items-center justify-center rounded-full shadow-md"
            style={{ top: 0, left: `${index * 30 + 10}%` }}
          >
            {circle.content}
          </motion.div>
        ))}
        {circles.slice(3).map((circle, index) => (
          <motion.div
            key={circle.id}
            ref={(el: any) => (circleRefs.current[index + 3] = el)}
            drag
            dragConstraints={{
              top: -100,
              bottom: 100,
              left: -100,
              right: 100,
            }}
            className="hidden absolute w-24 h-24 bg-[#1D1D1B] text-white lg:flex items-center justify-center rounded-full shadow-md"
            style={{ top: "80%", left: `${index * 50 + 20}%` }}
          >
            {circle.content}
          </motion.div>
        ))}
      </section>
    </main>
  );
}
