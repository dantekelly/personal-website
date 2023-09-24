"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  useNextSanityImage,
  type UseNextSanityImageProps,
} from "next-sanity-image";
import { PortableText } from "@portabletext/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type Blog } from "~/types/blog";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { sanityClient } from "~/lib/sanity/client";
import { getReadtimeFromSections } from "~/utils/sanity";

export const BlogCard = ({
  title,
  featuredImage,
  slug,
  tag,
  publishedAt,
  reactions,
  excerpt, // summary,
  content,
}: Blog) => {
  const minutesToRead = getReadtimeFromSections(content);

  const imageProps: UseNextSanityImageProps = useNextSanityImage(
    sanityClient,
    featuredImage,
  );

  return (
    <Card>
      <CardHeader>
        <Image
          {...imageProps}
          alt={featuredImage.alt}
          style={{ width: "100%", height: "auto" }}
          className="w-full rounded-t-xl"
        />
      </CardHeader>
      <CardContent>
        <Badge className="block w-fit py-1.5">{tag.title}</Badge>
        <CardTitle>{title}</CardTitle>
        {excerpt?.text && (
          <span className="text-md line-clamp-3 text-slate-400">
            <PortableText value={excerpt.text} />
          </span>
        )}
        {reactions && reactions.length > 0 && (
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
        )}
      </CardContent>
      <CardFooter>
        <Link href={`blog/${slug.current}`}>
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
