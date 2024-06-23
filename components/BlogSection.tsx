"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import tipsandDestination from "../assets/blog/tipsandDestination.png";
import completeGuide from "../assets/blog/completeGuide.png";
import topFood from "../assets/blog/topFood.png";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Solo Travel : Tips and Destinations",
    description:
      "We loved every moment of our city tour with CityWander. The food tour was a highlight, offering a delici...",
    image: tipsandDestination,
  },
  {
    id: 2,
    title: "How to Travel on a Budget : Complete Guide",
    description:
      "Traveling on a budget doesn't mean sacrificing your travel experiences. With careful planning and s...",
    image: completeGuide,
  },
  {
    id: 3,
    title: "Top 10 Travel Destinations for Food Lovers",
    description:
      "Traveling on a budget doesn't mean sacrificing your travel experiences. With careful planning and s...",
    image: topFood,
  },
];

export default function BlogSection() {
  const blogRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          // markers: true, // Disable this line
        },
      });

      tl.from(blogRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: blogRef }
  );

  return (
    <div className="py-10 px-4 sm:px-8 md:px-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-sm">Blog</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our most recent blog posts
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-2 w-fit text-sm hover:cursor-pointer text-[#1D1D1b] hover:underline transition-all duration-300"
        >
          <button className="text-white bg-[#1D1D1B] p-2 rounded-full">
            <Icon icon="grommet-icons:form-next-link" className="text-2xl" />
          </button>
          View all blog posts
        </Link>
      </section>
      <div>
        <div className=" mt-6 overflow-hidden">
          <div
            ref={blogRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link key={index} href={`/blog/${post?.id}`}>
                <div className="max-w-sm bg-[#DEDDD7] border border-gray-200 rounded-lg shadow hover:shadow-md group">
                  <div className="overflow-hidden rounded-t-lg">
                    <div className="h-60 w-full">
                      <Image
                        className="rounded-t-lg group-hover:scale-110 duration-300 transition-all object-cover h-full w-full"
                        src={post.image}
                        alt="blog card"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {post.title}
                    </h5>
                    <p className="mb-3 font-normal">
                      {post.description.length > 100
                        ? `${post.description.slice(0, 100)}...`
                        : post.description}
                    </p>

                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1d1d1b] hover:bg-[#1d1d1b]/90 transition-all duration-300 text-white rounded-lg focus:ring-4 focus:outline-none">
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
