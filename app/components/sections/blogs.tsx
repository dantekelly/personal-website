import BlogCard from "~/components/atoms/BlogCard";
import { type Blog } from "~/types/blog";

import CardHeader from "@/images/card-header.jpg";
import CardHeaderTwo from "@/images/card-header-1.jpg";
import CardHeaderThree from "@/images/card-header-2.jpg";
import { Button } from "~/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import Link from "next/link";

export const staticBlogEntries: Blog[] = [
  {
    _id: "1",
    tag: "Code in Public",
    title: "My First Blog Post",
    summary:
      "Here is the start of my largest open-source project to date, a production ready API built in GO and now in production.",
    slug: {
      current: "my-first-blog-post",
    },
    mainImage: CardHeader,
    publishedAt: "2021-01-01T00:00:00Z",
    readTime: 1000 * 60 * 5,
    reactions: [
      {
        _id: "1",
        name: "Like",
        emoji: "😎",
        count: 10,
      },
      {
        _id: "2",
        name: "Love",
        emoji: "❤️",
        count: 5,
      },
    ],
  },
  {
    _id: "2",
    tag: "Insights",
    title: "My First Blog Post",
    summary:
      "Far too often we exclude the visually impaired in our user interfaces. This leads to some awesome stuff, you'll see soon.",
    slug: {
      current: "my-first-blog-post",
    },
    mainImage: CardHeaderTwo,
    publishedAt: "2021-01-01T00:00:00Z",
    readTime: 1000 * 60 * 5,
    reactions: [
      {
        _id: "1",
        name: "Like",
        emoji: "😎",
        count: 10,
      },
      {
        _id: "2",
        name: "Love",
        emoji: "❤️",
        count: 5,
      },
    ],
  },
  {
    _id: "3",
    tag: "Insights",
    title: "My First Blog Post",
    summary:
      "For the past 7 years I’ve been developing almost exclusively in JavaScript and grew accustomed to the awesome work.",
    slug: {
      current: "my-first-blog-post",
    },
    mainImage: CardHeaderThree,
    publishedAt: "2021-01-01T00:00:00Z",
    readTime: 1000 * 60 * 5,
    reactions: [
      {
        _id: "1",
        name: "Like",
        emoji: "👍",
        count: 10,
      },
      {
        _id: "2",
        name: "Love",
        emoji: "❤️",
        count: 5,
      },
    ],
  },
];

export default function Blogs() {
  if (!staticBlogEntries || staticBlogEntries.length === 0) return null;
  return (
    <div className="py-16">
      <p className="text-md mb-[10px] font-medium uppercase text-slate-400">
        Latest Blog Posts
      </p>
      <div className="flex flex-1 flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-12 px-4 xl:flex-row ">
          {staticBlogEntries.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
        <Button className="w-fit">
          <Link href="/blog">View All</Link>
        </Button>
      </div>
    </div>
  );
}
