"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  useNextSanityImage,
  type UseNextSanityImageProps,
} from "next-sanity-image";

import { type Hero as HeroItem } from "~/types/sections/hero";
import { sanityClient } from "~/lib/sanity/client";

interface HeroProps {
  data: HeroItem;
}

export default function Hero({ data }: HeroProps) {
  const { title, body, featuredImage } = data;

  const imageProps: UseNextSanityImageProps = useNextSanityImage(
    sanityClient,
    featuredImage,
  );

  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 xl:flex-row ">
      <Image
        {...imageProps}
        alt={featuredImage.alt}
        width={300}
        height={305}
        priority
      />

      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-extrabold text-slate-50">{title}</h1>
        {body.text && (
          <span className="text-md text-slate-400">
            <PortableText
              components={{
                types: {
                  breakObj: () => <br />,
                },
              }}
              value={body.text}
            />
          </span>
        )}
      </div>
    </div>
  );
}
