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
  const blog = blogPosts?.find((post:any) => post.id === Number(id));

  useEffect(() => {
    if (blog) {
      setLoading(false);
    }
  }, [blog]);

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 pt-28 pb-20">
      {loading ? (
        <Skeleton height={400} />
      ) : (
        <div className="w-full h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className=" py-8">
        {loading ? (
          <Skeleton count={1} height={40} />
        ) : (
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        )}
        {loading ? (
          <Skeleton count={5} />
        ) : (
          <p className="text-lg">{blog.description}</p>
        )}
      </div>
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogPosts
            .filter((post:any) => post.id !== Number(id))
            .slice(0, 3)
            .map((relatedBlog:any) => (
              <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                <div className="max-w-sm bg-[#DEDDD7] border border-gray-200 rounded-lg shadow hover:shadow-md group">
                  <div className="overflow-hidden rounded-t-lg">
                    {loading ? (
                      <Skeleton height={200} />
                    ) : (
                      <Image
                        className="rounded-t-lg group-hover:scale-110 duration-300 transition-all"
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        layout="responsive"
                        width={400}
                        height={200}
                      />
                    )}
                  </div>
                  <div className="p-5">
                    {loading ? (
                      <Skeleton count={1} height={30} />
                    ) : (
                      <h5 className="mb-2 text-xl font-bold tracking-tight">
                        {relatedBlog.title}
                      </h5>
                    )}
                    {loading ? (
                      <Skeleton count={2} />
                    ) : (
                      <p className="mb-3 font-normal">
                        {relatedBlog.description.length > 100
                          ? `${relatedBlog.description.slice(0, 100)}...`
                          : relatedBlog.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
