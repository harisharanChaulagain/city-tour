"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Collapse } from "react-collapse";

export default function Page() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main>
      <section className="bg-gray-300 rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold text-5xl pt-10">
          Frequently Asked Questions
        </h1>
        <p>Got questions? Find your answers here.</p>
      </section>
      <section className="px-4 md:px-8">
        <div className=" ">
          {faqDatas.map((item: any, index: number) => (
            <div key={index}>
              <div
                onClick={() => handleItemClick(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <p className="text-md md:text-xl xl:text-xl text-secondary-500/90 font-medium ">
                  {item.question}
                </p>
                <div className="text-primary-350">
                  {openItemIndex === index ? (
                    <Icon icon="mingcute:down-fill" className="text-2xl" />
                  ) : (
                    <Icon icon="mingcute:down-fill" className="text-2xl" />
                  )}
                </div>
              </div>
              <Collapse isOpened={openItemIndex === index}>
                <div className="text-secondary-400 text-md font-normal py-2">
                  {item.answer}
                </div>
              </Collapse>
              <hr className="border-white my-2" />
            </div>
          ))}
        </div>
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
