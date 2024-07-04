"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import webxLogo from "../assets/webxLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-100 bg-[#101418] ">
      <div className="px-4 sm:px-8 w-full md:w-11/12 mx-auto py-20 ">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-md">
              <h1 className="py-4 text-2xl 2xl:text-3xl font-semibold">Ghumfir Nepal.</h1>
              <p className="leading-relaxed mt-2 text-[15px] 2xl:text-lg">
                Work remotely, explore various destinations, and make lasting
                memories with a community of digital Ghumfir Nepals.
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-white font-medium text-xl 2xl:text-2xl">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      target="_blank"
                      className="text-gray-300 hover:text-white transition-all duration-300 2xl:text-lg"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-10 border-t border-gray-500 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            © Copyright {currentYear} All rights reserved.
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="https://webxnep.com/"
              target="_blank"
              className=" text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-1"
            >
              Designed & Developed by{" "}
              <Image
                src={webxLogo}
                alt="webx logo"
                className="h-5 w-fit object-contain  p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
const footerNavs = [
  {
    label: "Links",
    items: [
      {
        href: "/about",
        name: "About",
      },
      {
        href: "/destination",
        name: "Destinations",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
      {
        href: "/contact-us",
        name: "Contact us",
      },
    ],
  },
  {
    label: "Destinations",
    items: [
      {
        href: "/destination",
        name: "Kathmandu",
      },
      {
        href: "/destination",
        name: "Pokhera",
      },
      {
        href: "/destination",
        name: "Chitwan",
      },
      {
        href: "/destination",
        name: "Lumbini",
      },
    ],
  },
  {
    label: "Social",
    items: [
      {
        href: "https://www.instagram.com/",
        name: "Instagram",
      },
      {
        href: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        href: "https://x.com/home",
        name: "Twitter",
      },
      {
        href: "https://www.youtube.com/",
        name: "Youtube",
      },
    ],
  },
];
