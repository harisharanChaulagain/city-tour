import Image from "next/image";
import React from "react";
import profile from "../assets/profile.jpg";

const teamDetails = [
  {
    image: profile,
    name: "Emi Yamamoto",
    location: "Tokyo, Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras nam arcu nunc volutpat sit fringilla sed lorem. Vestibulum morbi elementum.",
  },
  {
    image: profile,
    name: "John Doe",
    location: "New York, USA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras nam arcu nunc volutpat sit fringilla sed lorem. Vestibulum morbi elementum.",
  },
  {
    image: profile,
    name: "Jane Smith",
    location: "London, UK",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras nam arcu nunc volutpat sit fringilla sed lorem. Vestibulum morbi elementum.",
  },
  {
    image: profile,
    name: "Carlos Martinez",
    location: "Mexico City, Mexico",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras nam arcu nunc volutpat sit fringilla sed lorem. Vestibulum morbi elementum.",
  },
  {
    image: profile,
    name: "Li Wei",
    location: "Beijing, China",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras nam arcu nunc volutpat sit fringilla sed lorem. Vestibulum morbi elementum.",
  },
];

function TeamCard({ image, name, location, description }: any) {
  return (
    <div className="p-4 ">
      <Image
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded"
      />
      <h3 className="mt-4 text-lg sm:text-xl font-semibold">{name}</h3>
      <h4 className="text-[#1d1d1b]">{location}</h4>
      <p className="mt-2 text-[#1d1d1b]/90">{description}</p>
    </div>
  );
}

export default function OurTeamSection() {
  return (
    <main className="h-full bg-[#DFDDD8] py-20 px-4 sm:px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        <div className="md:col-span-1 p-4 ">
          <div className="md:sticky top-20">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Our team
            </h1>
            <h2 className="text-lg sm:text-xl mt-2">Meet your leaders</h2>
            <p className="text-sm sm:text-base mt-2">
              Local, friendly staff members here to support you on your
              adventures.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {teamDetails.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                location={member.location}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
