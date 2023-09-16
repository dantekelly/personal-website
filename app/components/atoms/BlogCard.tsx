"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type Blog } from "~/types/blog";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export const BlogCard = ({
  title,
  mainImage,
  slug,
  tag,
  publishedAt,
  reactions,
  readTime,
  summary,
}: Blog) => {
  const minutesToRead = Math.round(readTime / 60000);

  return (
    <Card>
      <CardHeader>
        <Image
          src={mainImage}
          alt={title}
          width={300}
          height={192}
          className="w-full rounded-t-xl"
        />
      </CardHeader>
      <CardContent>
        <Badge className="block w-fit py-1.5">{tag}</Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">{summary}</CardDescription>
        <div className="flex gap-[8px]">
          {reactions.map((badge) => {
            const content = (
              <p className="align-middle">
                <span className="align-middle text-base">{badge.emoji}</span>{" "}
                {badge.count}
              </p>
            );

            return <Badge key={badge._id}>{content}</Badge>;
          })}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={slug.current}>
          <Button>
            Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <div className="flex flex-col text-right">
          <p className="text-sm font-bold text-slate-200">
            {dayjs(publishedAt).format("MM/DD/YY")}
          </p>
          <p className="text-sm text-slate-400">{minutesToRead} min read</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
