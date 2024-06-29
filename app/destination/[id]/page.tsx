"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import pokharaCity from "../../../assets/pokhera.jpg";
import thakalikhana from "../../../assets/thakalikhana.webp";
import { allDestinations } from "../page";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const filteredDestinations = allDestinations.filter((item) => item.id === id);
  return (
    <>
      {filteredDestinations.map((item, index) => (
        <main key={index} className="px-4 sm:px-8 md:px-16 py-20">
          <section className="relative w-full h-96 rounded-2xl">
            <div className="h-96 px-4 rounded-2xl overflow-hidden transition-all duration-300">
              <Image
                src={item?.image}
                alt="city"
                className="h-full w-full object-cover object-center rounded-2xl"
              />
            </div>
            <div className="absolute top-52 left-20 text-white flex flex-col gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Work from anywhere.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl">
                Work remotely, explore various destinations, <br /> and make
                lasting memories with a community of digital Ghumfir Nepals.
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
            {/* change */}

            <div className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Information
              </h2>
              <div className="text-base sm:text-lg">{item?.information}</div>

              <h2 className="text-lg sm:text-xl md:text-2xl">
                Recommended Activities
              </h2>
              <div className="h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src={item?.image}
                  alt="pokharaCity"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                {activitiesDetails.map((item, index) => (
                  <div key={index} className="text-sm sm:text-base">
                    <div>
                      {index + 1}.{" "}
                      <span className="font-bold">{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Must-try Food
              </h2>
              <div className="h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src={thakalikhana}
                  alt="thakalikhana"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                {item.food.map((foodItem, index) => (
                  <div key={index} className="text-sm sm:text-base">
                    <div>
                      {index + 1}.{" "}
                      <span className="font-bold">{foodItem.title}</span>
                      <p>{foodItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Itinerary for Kathmandu Package
              </h2>
              <div className="text-base sm:text-lg">
                <p>
                  <strong>Day 1:</strong> Upon arrival in Kathmandu, settle into
                  your hotel before visiting Kathmandu Durbar Square. Explore
                  ancient palaces and temples, such as Hanuman Dhoka and Taleju
                  Temple, showcasing Nepal’s architectural heritage. Enjoy a
                  traditional Nepali dinner to cap off your day.
                </p>
                <p>
                  <strong>Day 2:</strong> Begin with Swayambhunath, the Monkey
                  Temple, offering panoramic views and Buddhist stupas. Then,
                  visit Patan Durbar Square for Newar art and architecture.
                  Conclude with shopping and dining in Thamel.
                </p>
                <p>
                  <strong>Day 3:</strong> Start at Pashupatinath Temple for
                  Hindu rituals along the Bagmati River. Continue to Boudhanath
                  Stupa for Tibetan Buddhist culture. Attend a Nepali cultural
                  show in the evening.
                </p>
                <p>
                  <strong>Day 4:</strong> Explore Bhaktapur Durbar Square's
                  medieval temples and pottery workshops. Optionally, visit
                  Nagarkot for Himalayan views. End with a farewell dinner
                  featuring Nepali cuisine and cultural performances.
                </p>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Costs Included
              </h2>
              <div className="text-base sm:text-lg">
                <ul className="list-disc pl-4">
                  <li>Transportation within Kathmandu city</li>
                  <li>Guide services</li>
                  <li>Entrance fees to sites</li>
                  <li>Meals (if specified in the tour package)</li>
                  <li>Taxes and service charges</li>
                </ul>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl mt-8">
                Costs Excluded
              </h2>
              <div className="text-base sm:text-lg">
                <ul className="list-disc pl-4">
                  <li>
                    Personal expenses (souvenirs, additional snacks, etc.)
                  </li>
                  <li>Optional activities</li>
                  <li>Tips</li>
                  <li>Travel insurance</li>
                  <li>Airport transfers (if not included)</li>
                  <li>Accommodation (if not included)</li>
                </ul>
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
                  <strong className="text-2xl font-bold">Total Due:</strong>{" "}
                  $1,200
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
                      <div>No Change Fees</div>
                      <div>Select a different trip free of charge.</div>
                    </div>
                  </div>
                  <div className="py-4 flex gap-2 items-center">
                    <div className="p-2  bg-[#494947]  rounded-md w-fit">
                      <Icon icon="ic:baseline-payment" className="text-xl" />
                    </div>
                    <div>
                      <div>Payment plan</div>
                      <div>
                        Break up your payment into several installments.
                      </div>
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
      ))}
    </>
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
