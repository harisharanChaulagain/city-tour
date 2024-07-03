import Image from "next/image";
import React, { useRef } from "react";
import profile from "../assets/profile.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamDetails = [
  {
    image: profile,
    name: "Ramesh Adhikari",
    location: "Kathmandu, Nepal",
    description:
      "Ramesh is a seasoned professional with over 10 years of experience in software development. He specializes in backend technologies and has a keen interest in open-source projects.",
  },
  {
    image: profile,
    name: "Sita Sharma",
    location: "Pokhara, Nepal",
    description:
      "Sita is a creative graphic designer with a passion for creating visually appealing and user-friendly designs. She has worked with several top companies and loves exploring new design trends.",
  },
  {
    image: profile,
    name: "Hari Prasad",
    location: "Lalitpur, Nepal",
    description:
      "Hari is an expert in data analytics and machine learning. With a background in mathematics and statistics, he brings a unique perspective to data-driven projects.",
  },
  {
    image: profile,
    name: "Mina Rai",
    location: "Bhaktapur, Nepal",
    description:
      "Mina is a front-end developer with a strong eye for detail. She enjoys creating interactive and dynamic web applications and is always up-to-date with the latest in web technologies.",
  },
  {
    image: profile,
    name: "Kiran Thapa",
    location: "Biratnagar, Nepal",
    description:
      "Kiran is a project manager with extensive experience in managing large-scale projects. He is known for his excellent organizational skills and ability to lead teams to success.",
  },
];

function TeamCard({ image, name, location, description }: any) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        className="w-full h-[30vh] object-cover rounded-2xl object-top"
      />
      <div>
        <h3 className="mt-4 text-lg sm:text-xl font-semibold">{name}</h3>
        <h4 className="text-[#1d1d1b]">{location}</h4>
      </div>
      <p className="mt-2 text-[#1d1d1b]/90">{description}</p>
    </div>
  );
}

export default function OurTeamSection() {
  const titlteRef1 = useRef(null);
  const subTitleRef1 = useRef(null);

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
    <main className="h-full bg-[#DFDDD8] py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full px-4 w-full md:w-11/12 mx-auto">
        <div className="md:col-span-1 p-4 ">
          <div className="md:sticky top-20 flex flex-col gap-4">
            <h1 className="text-sm font-normal">Our team</h1>
            <h2
              ref={titlteRef1}
              className="text-2xl sm:text-3xl md:text-5xl font-bold "
            >
              Meet your <br /> leaders
            </h2>
            <p ref={subTitleRef1} className="text-sm sm:text-base mt-2">
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
