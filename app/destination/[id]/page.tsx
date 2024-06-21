import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import pokharaCity from "../../../assets/pokhera.jpg";
import thakalikhana from "../../../assets/thakalikhana.webp";

export default function Page() {
  return (
    <main className="px-4 sm:px-8 md:px-16 py-20">
      <section className="relative w-full h-96 rounded-2xl">
        <div className="h-96 px-4 rounded-2xl overflow-hidden transition-all duration-300">
          <Image
            src={pokharaCity}
            alt="city"
            className="h-full w-full object-cover object-center rounded-2xl"
          />
        </div>
        <div className="absolute top-52 left-20 text-white flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Work from anywhere.
          </h1>
          <p className="text-sm sm:text-lg md:text-xl">
            Work remotely, explore various destinations, <br /> and make lasting
            memories with a community of digital Ghumfir Nepals.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 py-10">
        {destinationDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center bg-[#DFDDD8] rounded-2xl p-8"
          >
            <Icon icon={item?.icon} className="text-2xl" />
            <span>{item?.title}</span>
            <span>{item?.desc}</span>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Information
          </h1>
          <div className="text-base sm:text-lg">
            Tokyo, the bustling capital of Japan, is a captivating metropolis
            that seamlessly blends ancient traditions with futuristic
            innovation. As one of the world&apos;s most populous cities, Tokyo
            is a bustling hub of technology, business, fashion, and culture.
          </div>
          <span className="text-lg sm:text-xl md:text-2xl">
            Recommended Activities
          </span>

          <div className="h-96 w-full overflow-hidden rounded-2xl">
            <Image
              src={pokharaCity}
              alt="pokharaCity"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            {activitiesDetails.map((item, index) => (
              <div key={index} className=" text-sm sm:text-base">
                <div>
                  {index + 1}
                  <span className="font-bold">{item.title}</span>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <span className="text-lg sm:text-xl md:text-2xl mt-8">
            Must-try food
          </span>
          <div className="h-96 w-full overflow-hidden rounded-2xl">
            <Image
              src={thakalikhana}
              alt="pokharaCity"
              className="h-9full w-full object-cover"
            />
          </div>
          <div>
            {foodDetails.map((item, index) => (
              <div key={index} className="text-sm sm:text-base">
                <div>
                  {index + 1}
                  <span className="font-bold">{item.title}</span>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full">
          <div className="lg:sticky top-20 p-8 flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg bg-[#1d1d1b] text-white">
            <div className="">
              <div className="mb-4 font-medium text-xl">
                <p className="flex justify-between">
                  <strong>Accommodations:</strong> <span>$650</span>
                </p>
                <p className="flex justify-between">
                  <strong>Co-working Space:</strong> <span>$650</span>
                </p>
                <p className="flex justify-between">
                  <strong>Private transfer:</strong> <span>$650</span>
                </p>
                <p className="flex justify-between">
                  <strong>Community excursions:</strong> <span>$650</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="py-4">
              <strong className="text-2xl font-bold">Total Due:</strong> $1,200
            </div>
            <div className="flex flex-col gap-1">
              <div className="py-4 flex gap-2 items-center">
                <div className="p-2 bg-[#494947] rounded-md w-fit">
                  <Icon icon="mingcute:time-fill" className="text-xl" />
                </div>
                <div>
                  <div>Free cancellation</div>
                  <div>Within 24 hours of booking</div>
                </div>
              </div>
              <div className="py-4 flex gap-2 items-center">
                <div className="p-2  bg-[#494947]  rounded-md w-fit">
                  <Icon icon="tabler:arrows-cross" className="text-xl" />
                </div>
                <div>
                  <div>Free cancellation</div>
                  <div>Within 24 hours of booking</div>
                </div>
              </div>
              <div className="py-4 flex gap-2 items-center">
                <div className="p-2  bg-[#494947]  rounded-md w-fit">
                  <Icon icon="ic:baseline-payment" className="text-xl" />
                </div>
                <div>
                  <div>Free cancellation</div>
                  <div>Within 24 hours of booking</div>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#404448] hover:bg-[#404448]/80 p-4 rounded-2xl justify-center items-center text-sm sm:text-base w-full transition-all duration-300">
                Book destination
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const destinationDetails = [
  {
    title: "National Language",
    desc: "Nepali",
    icon: "fluent-mdl2:emoji-2",
  },
  {
    title: "Weather",
    desc: "30 Deg",
    icon: "ph:sun",
  },
  {
    title: "Time zone",
    desc: "GMT + 45",
    icon: "mdi:alarm",
  },
  {
    title: "Currency",
    desc: "Nepali Rupees",
    icon: "formkit:currency",
  },
];

const foodDetails = [
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
  {
    title: " Sushi",
    description:
      "Visit Tsukiji Fish Market or one of the many sushi restaurants in the city to try the freshest and most exquisite sushi and sashimi.",
  },
];

const activitiesDetails = [
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
  {
    title: " Explore the neighborhoods",
    description:
      "Visit Shibuya for its famous scramble crossing and trendy shops, Shinjuku for its vibrant nightlife and entertainment, and Asakusa for its historic temples and traditional atmosphere.",
  },
];
