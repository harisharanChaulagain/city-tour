"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavItem, setShowNavItem] = useState(false);
  const navSectionRef = useRef(null);
  const getInTouchRef1 = useRef(null);
  const getInTouchRef2 = useRef(null);

  const toggleNavItem = () => {
    setShowNavItem(!showNavItem);
  };

  useEffect(() => {
    const body = document.body;
    if (showNavItem) {
      gsap.to(navSectionRef.current, {
        height: "100vh",
        // opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "auto",
        transformOrigin: "top",
      });
      body.style.overflow = "hidden"; // Disable scrolling
    } else {
      gsap.to(navSectionRef.current, {
        height: 0,
        // opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
      body.style.overflow = ""; // Enable scrolling
    }
    return () => {
      body.style.overflow = ""; // Clean up on unmount
    };
  }, [showNavItem]);

  const topVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    opened: {
      rotate: 45,
      y: 8,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      x: 8,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    opened: {
      rotate: -45,
      y: -8,
    },
  };

  const handleMouseEnter = () => {
    gsap.to(getInTouchRef1.current, {
      y: "32px",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(getInTouchRef2.current, {
      y: "32px",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(getInTouchRef1.current, {
      y: "0px",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(getInTouchRef2.current, {
      y: "0px",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="w-screen bg-[#f0efe9] fixed z-50">
      <div className="flex justify-between items-center h-20  px-4 sm:px-8 w-11/12 mx-auto">
        <Link href="/" className="text-xl font-bold">
          Ghumfir Nepal.
        </Link>
        <div className="flex gap-8 items-center ">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="overflow-hidden relative rounded-3xl flex justify-center items-center w-32 h-10 border border-[#1d1d1b]/50 hover:border-[#1d1d1b] transition-all duration-300"
          >
            <span
              ref={getInTouchRef1}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              Get in touch
            </span>
            <span
              ref={getInTouchRef2}
              className="absolute -top-6 left-1/2 -translate-x-1/2  whitespace-nowrap"
            >
              {" "}
              Get in touch
            </span>
          </button>
          <div
            className="flex flex-col items-center gap-1 cursor-pointer w-10 h-10 justify-center"
            onClick={toggleNavItem}
          >
            <motion.div
              variants={topVariants}
              animate={showNavItem ? "opened" : "closed"}
              transition={{ duration: 0.5 }}
              className="w-10 h-1 rounded bg-black"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={showNavItem ? "opened" : "closed"}
              className="w-10 h-1 rounded bg-black "
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={showNavItem ? "opened" : "closed"}
              transition={{ duration: 0.5 }}
              className="w-10 h-1 rounded bg-black"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      <section
        ref={navSectionRef}
        className="absolute top-20 left-0 right-0 bg-[#f0efe9] w-screen h-0 overflow-hidden z-50"
        style={{
          transition: "height 0.5s, width 0.5s, opacity 0.5s",
        }}
      >
        <div className="flex flex-col items-center justify-center h-[90vh]">
          <div className="flex flex-col gap-6 p-4 justify-center items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item?.href}
                onClick={toggleNavItem}
                className="nav-link text-4xl md:text-5xl font-bold text-[#1D1D1B] flex items-center"
              >
                <div className="arrow-wrapper">
                  <Icon
                    icon="ooui:arrow-next-ltr"
                    className="arrow-icon text-4xl md:text-5xl "
                  />
                </div>
                {item?.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center gap-8">
            {socialIcon.map((item, index) => (
              <Link
                href={item?.link}
                key={index}
                className="border border-gray-400 rounded-full h-12 w-12 justify-center items-center flex hover:border-[#1D1D1B] transition-all duration-300"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Destination",
    href: "/destination",
  },
  {
    title: "Faqs",
    href: "/faq",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socialIcon = [
  { title: "IG", link: "https://www.instagram.com/" },
  {
    title: "TW",
    link: "https://x.com/home",
  },
  {
    title: "YB",
    link: "https://www.youtube.com/",
  },
];
