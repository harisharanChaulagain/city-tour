"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "next/navigation";
import { blogPosts } from "@/components/BlogSection";

export default function BlogDetails() {
  const params = useParams();
  const id = params?.id;
  const [loading, setLoading] = useState(true);
  const blog = blogPosts?.find((post: any) => post.id === Number(id));

  useEffect(() => {
    if (blog) {
      setLoading(false);
    }
  }, [blog]);

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="px-4 sm:px-8 w-full md:w-11/12 mx-auto pt-28 pb-20">
      {loading ? (
        <Skeleton height={400} />
      ) : (
        <div className="w-full h-[65vh] relative rounded-2xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className=" py-8 mx-auto">
        {loading ? (
          <Skeleton count={1} height={40} />
        ) : (
          <h1 className="text-3xl 2xl:text-4xl font-bold mb-4">{blog.title}</h1>
        )}
        {loading ? (
          <Skeleton count={5} />
        ) : (
          <p className="text-lg 2xl:text-xl">{blog.description}</p>
        )}
      </div>
      <div className="py-8  mx-auto">
        <h2 className="text-2xl 2xl:text-3xl font-bold mb-4">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts
            .filter((post: any) => post.id !== Number(id))
            .slice(0, 3)
            .map((relatedBlog: any) => (
              <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                <div className=" bg-[#DEDDD7] border border-gray-200 rounded-lg shadow hover:shadow-md group">
                  <div className="overflow-hidden rounded-t-lg">
                    {loading ? (
                      <Skeleton height={200} />
                    ) : (
                      <div className="h-[40vh] w-full">
                        <Image
                          className="rounded-t-lg group-hover:scale-110 duration-300 transition-all object-cover h-full w-full"
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {loading ? (
                      <Skeleton count={1} height={30} />
                    ) : (
                      <h5 className="mb-2 text-xl 2xl:text-2xl font-bold tracking-tight">
                        {relatedBlog.title}
                      </h5>
                    )}
                    {loading ? (
                      <Skeleton count={2} />
                    ) : (
                      <p className="mb-3 font-normal 2xl:text-lg">
                        {relatedBlog.description.length > 100
                          ? `${relatedBlog.description.slice(0, 100)}...`
                          : relatedBlog.description}
                      </p>
                    )}
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
      </div>
    </div>
  );
}
