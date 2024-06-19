"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Navbar() {
  const [showNavItem, setShowNavItem] = useState(false);
  const toggleNavItem = () => {
    setShowNavItem(!showNavItem);
  };

  return (
    <>
      <div className="bg-gray-200 py-10">
        <header className="w-full flex justify-between items-center bg-gray-200 h-20 px-4 md:px-8 ">
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
        </header>
        <section
          className={`transition-all duration-500 ${
            showNavItem
              ? "h-screen opacity-100 "
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item?.href}
                className="text-4xl font-bold text-[#1D1D1B]"
              >
                {item?.title}
              </Link>
            ))}
          </div>
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
        </section>
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
