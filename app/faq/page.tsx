"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Collapse } from "react-collapse";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const titlteRef1 = useRef(null);
  const subTitleRef1 = useRef(null);

  const handleItemClick = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseEnters = () => {
    gsap.to(iconRef1.current, {
      x: "32px",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(iconRef2.current, {
      x: "32px",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeaves = () => {
    gsap.to(iconRef1.current, {
      x: "0px",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(iconRef2.current, {
      x: "0px",
      duration: 0.5,
      ease: "power2.in",
    });
  };

  useGSAP(() => {
    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: titlteRef1.current,
        start: "top bottom",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tlTitle.from(titlteRef1.current, {
      opacity: 0,
      x: "-50px",
    });

    const tlSubtitle = gsap.timeline({
      scrollTrigger: {
        trigger: subTitleRef1.current,
        start: "top bottom",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tlSubtitle.from(subTitleRef1.current, {
      opacity: 0,
    });
  });

  return (
    <main className="py-20  px-4 sm:px-8 w-full md:w-11/12 mx-auto">
      <section className="bg-[#DEDDD7] rounded-2xl flex flex-col gap-6 p-8 my-10">
        <h1 className="text-[#1D1D1B] font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-20">
          Frequently Asked <br /> Questions
        </h1>
        <p>Got questions? Find your answers here.</p>
      </section>
      <section>
        {faqDatas.map((item: any, index: number) => (
          <div key={index}>
            <div onClick={() => handleItemClick(index)} className="py-4">
              <div className="cursor-pointer flex justify-between items-center">
                <p className="text-xl xl:text-2xl text-secondary-500/90 font-medium ">
                  {item.question}
                </p>
                <div className="text-primary-350 ">
                  {openItemIndex === index ? (
                    <div className="bg-[#1d1d1b] text-white p-2 rounded-full  transition-all duration-300">
                      <Icon
                        icon="mingcute:up-fill"
                        className="text-base sm:text-xl"
                      />
                    </div>
                  ) : (
                    <div className="bg-[#1d1d1b] text-white p-2 rounded-full transform rotate-180 transition-all duration-300">
                      <Icon
                        icon="mingcute:up-fill"
                        className="text-base sm:text-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
              <Collapse isOpened={openItemIndex === index}>
                <div className="text-secondary-400 text-md font-normal py-2">
                  {item.answer}
                </div>
              </Collapse>
            </div>
            <div className="bg-gray-300 h-0.5 w-full "></div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-4 pt-10">
        <h1 ref={titlteRef1} className="text-2xl font-bold">
          Have more questions?
        </h1>
        <div className="flex flex-col gap-4" ref={subTitleRef1}>
          <h2 className="text-xl ">
            Feel free to contact us or leave us a message.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300"
            onMouseEnter={handleMouseEnters}
            onMouseLeave={handleMouseLeaves}
          >
            <button className="relative text-white bg-[#1D1D1B] h-10 w-10 rounded-full overflow-hidden">
              <span className="absolute top-2 -left-6" ref={iconRef1}>
                <Icon
                  icon="grommet-icons:form-next-link"
                  className="text-2xl"
                />
              </span>
              <span className="absolute top-2 left-2" ref={iconRef2}>
                <Icon
                  icon="grommet-icons:form-next-link"
                  className="text-2xl"
                />
              </span>
            </button>
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

const faqDatas = [
  {
    question: "What cities are included in your city tours?",
    answer:
      "Our city tours primarily cover Kathmandu, Bhaktapur, and Patan within the Kathmandu Valley. We also offer tours to Pokhara, Tansen, and other cultural and historical sites across Nepal.",
  },
  {
    question: "What can I expect to see on a city tour?",
    answer:
      "Depending on the tour, you'll visit iconic landmarks such as temples, palaces, and heritage sites. Our guides provide insights into the history, culture, and architecture of each location.",
  },
  {
    question: "How long do the city tours last?",
    answer:
      "Tour durations vary depending on the itinerary and locations visited. Typically, our city tours range from half-day to full-day experiences.",
  },
  {
    question: "Are entrance fees included in the city tour price?",
    answer:
      "Yes, entrance fees to specified attractions mentioned in the tour itinerary are included in the tour price unless otherwise stated.",
  },
  {
    question: "What is included in your food tours?",
    answer:
      "Our food tours include visits to local eateries, markets, and restaurants where you'll sample authentic Nepali cuisine and traditional dishes. We provide insights into the culinary culture of Nepal.",
  },
  {
    question: "Do your food tours cater to dietary restrictions?",
    answer:
      "We strive to accommodate dietary restrictions and preferences as much as possible. Please inform us of any dietary requirements when booking your tour, and we will do our best to tailor the experience accordingly.",
  },
  {
    question: "Are beverages included in the food tour?",
    answer:
      "Non-alcoholic beverages such as water and traditional drinks may be included, depending on the tour. Alcoholic beverages are typically not included but can be purchased separately at your expense.",
  },
  {
    question: "Are tips for guides and vendors included in the tour price?",
    answer:
      "Tips for guides and vendors are not included in the tour price. Gratuities are at your discretion and greatly appreciated if you enjoyed your experience. ",
  },
];
