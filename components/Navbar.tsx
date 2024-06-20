"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar() {
  const [showNavItem, setShowNavItem] = useState(false);
  const navSectionRef = useRef(null);

  const toggleNavItem = () => {
    setShowNavItem(!showNavItem);
  };

  useEffect(() => {
    if (showNavItem) {
      gsap.to(navSectionRef.current, {
        height: "100vh",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "auto", 
        transformOrigin:"top"
      });
    } else {
      gsap.to(navSectionRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "none", 
      });
    }
  }, [showNavItem]);

  return (
    <>
      <div className="bg-gray-200 py-10 ">
        <header className="w-full flex justify-between items-center bg-gray-200 h-20 px-4 md:px-8 relative">
          <div className="text-xl font-bold">nomad.</div>
          <div onClick={toggleNavItem}>
            {showNavItem ? (
              <Icon
                icon="bitcoin-icons:cross-outline"
                className="text-2xl cursor-pointer"
              />
            ) : (
              <Icon
                icon="solar:hamburger-menu-linear"
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          {/* Dropdown menu */}
          <section
            ref={navSectionRef}
            className="absolute top-20 left-0 bg-white w-full h-0 overflow-hidden z-50"
            style={{
              opacity: 0,
              transition: "height 0.5s, width 0.5s, opacity 0.5s",
            }}
          >
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item?.href}
                  className="text-2xl font-bold text-[#1D1D1B] hover:text-blue-600 transition-colors"
                >
                  {item?.title}
                </Link>
              ))}
              <div className="flex justify-center items-center gap-8">
                {socialIcon.map((item, index) => (
                  <Link
                    href={item?.link}
                    key={index}
                    className="border border-gray-500 rounded-full h-12 w-12 justify-center items-center flex hover:border-[#1D1D1B] transition-all duration-300"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </header>
      </div>
    </>
  );
}

const navItems = [
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
    href: "/faqs",
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
