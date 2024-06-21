"use client";
import React from "react";

export default function NewsLetter() {
  return (
    <main className="px-4 sm:px-8 md:px-16 py-10 ">
      <section className=" bg-[#DEDDD7] py-20 rounded-2xl mx-auto px-4 md:px-8 text-[#1D1D1B]">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-sm">Community</h1>
          <h3 className="ttext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Subscribe to our newsletter.
          </h3>
          <p className="text-sm">
            Join a group of like-minded digital CityWanders working and
            traveling the world together. Get updates on new deals and discounts
            for every destination.
          </p>
        </div>
        <div className="mt-6 max-w-2xl mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder-[#1d1d1b] text-sm w-full p-3 rounded-md outline-none bg-[#D1CFC7]"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-[#1D1D1B] hover:bg-[#1D1D1B]/90 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
