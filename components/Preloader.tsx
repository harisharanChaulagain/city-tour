"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mountain1Ref = useRef<HTMLDivElement>(null);
  const mountain2Ref = useRef<HTMLDivElement>(null);
  const mountain3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        mountain1Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        mountain2Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        mountain3Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.5"
      )
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
        },
      });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex items-center justify-center bg-[#E9E8E4] z-50"
    >
      <div
        ref={textRef}
        className="text-[#1D1D1B] text-4xl font-bold opacity-0"
      >
        <span className="animate-pulse">Ghumfir</span>{" "}
        <span className=" animate-pulse">Nepal</span>
      </div>
      <div className="flex mt-4">
        <div
          ref={mountain1Ref}
          className="h-8 w-8 bg-[#1D1D1B] rounded-full mx-2 transform rotate-45 animate-pulse"
        />
        <div
          ref={mountain2Ref}
          className="h-10 w-10 bg-[#1D1D1B] rounded-full mx-2 transform rotate-45 animate-pulse"
        />
        <div
          ref={mountain3Ref}
          className="h-12 w-12 bg-[#1D1D1B] rounded-full mx-2 transform rotate-45 animate-pulse"
        />
      </div>
    </div>
  );
};

export default Preloader;
