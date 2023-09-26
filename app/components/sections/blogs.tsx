"use client";

import * as React from "react";

import BlogCard from "~/components/atoms/BlogCard";
import { type Blog, type Blogs } from "~/types/blog";

export default function Blogs({ data }: { data: Blogs }) {
  if (!data || data.blogs.length === 0) return null;

  return (
    <div className="py-16">
      <p className="text-md mb-[10px] font-medium uppercase text-slate-400">
        {data.title}
      </p>
      <div className="flex flex-1 flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-12 px-4 xl:flex-row ">
          {data.blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
