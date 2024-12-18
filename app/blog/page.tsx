"use client";
import { blogPosts } from "@/components/BlogSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  px-4 sm:px-8 pb-20 pt-28 w-full md:w-11/12 mx-auto place-items-center">
      {blogPosts.map((post, index) => (
        <Link key={index} href={`/blog/${post?.id}`}>
          <div className=" bg-[#DEDDD7] border border-gray-200 rounded-lg shadow hover:shadow-md group">
            <div className="overflow-hidden rounded-t-lg">
              <div className="h-[40vh] w-full">
                <Image
                  className="rounded-t-lg group-hover:scale-110 duration-300 transition-all object-cover h-full w-full"
                  src={post.image}
                  alt="blog card"
                />
              </div>
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl 2xl:text-3xl font-bold tracking-tight">
                {post.title}
              </h5>
              <p className="mb-3 font-normal 2xl:text-lg">
                {post.description.length > 100
                  ? `${post.description.slice(0, 100)}...`
                  : post.description}
              </p>

              <div className="2xl:text-lg inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1d1d1b] hover:bg-[#1d1d1b]/90 transition-all duration-300 text-white rounded-lg focus:ring-4 focus:outline-none">
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
  );
}
