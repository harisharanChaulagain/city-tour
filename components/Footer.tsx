"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-100 bg-[#101418] px-4 sm:px-8 md:px-16 py-20">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-md">
            <h1 className="py-4 text-2xl font-semibold">nomad.</h1>
            <p className="leading-relaxed mt-2 text-[15px]">
              Work remotely, explore various destinations, and make lasting
              memories with a community of digital nomads.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-white font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    target="_blank"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t border-gray-500 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          Copyright &copy; 2024 Designrsupply LLC.
        </div>
        <div className="mt-4 sm:mt-0">Desighed & Developed by Webx</div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
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
        name: "Nepal",
      },
      {
        href: "/destination",
        name: "Japan",
      },
      {
        href: "/destination",
        name: "India",
      },
      {
        href: "/destination",
        name: "China",
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
