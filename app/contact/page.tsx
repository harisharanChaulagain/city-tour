import { Icon } from "@iconify/react";
import React from "react";

export default function Page() {
  return (
    <main className="py-20 px-4 sm:px-8 md:px-16">
      <section className="bg-[#DEDDD7]  rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-10">
          Contact us
        </h1>
        <p className="text-sm sm:text-base">
          Feel free to contact us or leave us a message.
        </p>
      </section>
      <section className="flex flex-col gap-4 max-w-4xl mx-auto text-[#1d1d1b] py-10">
        <div className="bg-[#DEDDD7] hover:bg-[#bebeb8] transition-all duration-300 rounded-2xl p-4 flex items-center justify-between">
          <Icon icon="lucide:home" className="text-2xl" />
          <span className="text-sm sm:text-base">Kathmandu, Nepal</span>
        </div>
        <div className="bg-[#DEDDD7] hover:bg-[#bebeb8] transition-all duration-300 rounded-2xl p-4 flex items-center justify-between">
          <Icon icon="material-symbols:mail" className="text-2xl" />

          <span className="text-sm sm:text-base">support@website.com</span>
        </div>
        <div className="bg-[#DEDDD7] hover:bg-[#bebeb8] transition-all duration-300 rounded-2xl p-4 flex items-center justify-between">
          <Icon icon="ph:phone-fill" className="text-2xl" />
          <span className="text-sm sm:text-base">9846852999</span>
        </div>
      </section>
      <section className=" flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
          Get in touch.
        </h1>
        <h2 className="flex items-center justify-center text-base sm:text-lg md:text-2xl font-normal">
          Leave us a message!
        </h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col sm:flex-row gap-4 ">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#DEDDD7] outline-none text-sm p-4 rounded-md placeholder-[#1d1d1b]"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#DEDDD7] outline-none text-sm p-4 rounded-md placeholder-[#1d1d1b]"
              />
            </div>
          </div>
          <textarea
            placeholder="Message"
            className="bg-[#DEDDD7] outline-none text-sm p-4 rounded-md resize-none placeholder-[#1d1d1b]"
            cols={30}
            rows={10}
          ></textarea>
          <button className="w-full mt-3 px-5 py-3 text-sm sm:text-base rounded-md text-white bg-[#1D1D1B] hover:bg-[#1D1D1B]/90 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto">
            Send message
          </button>
        </div>
      </section>
    </main>
  );
}
