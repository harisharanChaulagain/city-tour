"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Collapse } from "react-collapse";
import Link from "next/link";

export default function Page() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="py-20 px-4 md:px-8">
      <section className="bg-[#DEDDD7] rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold text-5xl pt-10">
          Frequently Asked Questions
        </h1>
        <p>Got questions? Find your answers here.</p>
      </section>
      <section>
        <div className=" ">
          {faqDatas.map((item: any, index: number) => (
            <div key={index}>
              <div
                onClick={() => handleItemClick(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <p className="text-xl xl:text-2xl text-secondary-500/90 font-medium ">
                  {item.question}
                </p>
                <div className="text-primary-350 ">
                  {openItemIndex === index ? (
                    <div className="bg-[#1d1d1b] text-white p-2 rounded-full  transition-all duration-300">
                      <Icon icon="mingcute:up-fill" className="text-xl" />
                    </div>
                  ) : (
                    <div className="bg-[#1d1d1b] text-white p-2 rounded-full transform rotate-180 transition-all duration-300">
                      <Icon icon="mingcute:up-fill" className="text-xl" />
                    </div>
                  )}
                </div>
              </div>
              <Collapse isOpened={openItemIndex === index}>
                <div className="text-secondary-400 text-md font-normal py-2">
                  {item.answer}
                </div>
              </Collapse>
              <hr className="border-[#DEDDD7] my-2" />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4 pt-10">
        <h1 className="text-2xl font-bold">Have more questions?</h1>
        <h2 className="text-xl ">
          Feel free to contact us or leave us a message.
        </h2>
        <Link
          href="/contact"
          className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300"
        >
          <button className="text-white bg-[#1D1D1B] p-2 rounded-full">
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
          Contact us
        </Link>
      </section>
    </main>
  );
}

const faqDatas = [
  {
    question: "this is question",
    answer: "this is answer",
  },
  {
    question: "this is question",
    answer: "this is answer",
  },
  {
    question: "this is question",
    answer: "this is answer",
  },
  {
    question: "this is question",
    answer: "this is answer",
  },
  {
    question: "this is question",
    answer: "this is answer",
  },
];
