import Image from "next/image";
import Link from "next/link";
import React from "react";
import bhaktapurCity from "../assets/bhaktapur.jpg";
import { Icon } from "@iconify/react";

export const blogPosts = [
  {
    title: "Kathmandu Valley",
    description:
      "Explore the cultural heritage and vibrant life of Kathmandu Valley.",
    image: bhaktapurCity,
  },
  {
    title: "Pokhara",
    description:
      "Discover the serene beauty and adventure activities in Pokhara.",
    image: bhaktapurCity,
  },
  {
    title: "Bhaktapur",
    description: "Experience the historic charm and architecture of Bhaktapur.",
    image: bhaktapurCity,
  },
  {
    title: "Chitwan",
    description: "Witness the wildlife and natural beauty of Chitwan.",
    image: bhaktapurCity,
  },
];

export default function BlogSection() {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-16">
      <section className=" flex flex-col gap-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Link key={index} href={`/blog/${index}`}>
            <div className="max-w-sm bg-[#DEDDD7] border border-gray-200 rounded-lg shadow hover:shadow-md group">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  className="rounded-t-lg group-hover:scale-110 duration-300 transition-all"
                  src={post.image}
                  alt="blog card"
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {post.title}
                </h5>
                <p className="mb-3 font-normal">{post.description}</p>
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
  );
}
