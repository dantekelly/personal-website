import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { IoIosQuote } from "react-icons/io";

import Image from "~/components/atoms/image";
import type { BlockContent as BlockContentType } from "~/types/sections/block-content";
import { type Image as MainImage } from "~/types/sections/image";
import React from "react";

interface LinkType {
  children: React.ReactNode;
  value?: {
    href: string;
  };
}

interface BreakType {
  node: {
    style: string;
  };
}

const BlockContent = ({ data }: { data: BlockContentType }) => {
  const blocks = data.text;

  if (!blocks) {
    return null;
  }

  return (
    <PortableText
      value={blocks}
      components={{
        types: {
          customImage: ({ value }: { value: MainImage }) => (
            <Image data={value} width={960} height={600} />
          ),
        },
        marks: {
          link: ({ children, value }: LinkType) => (
            <Link className="underline" href={`${value?.href}`}>
              {children}
            </Link>
          ),
          italic: ({ children }) => <i>{children}</i>,
        },
        block: {
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          h5: ({ children }) => <h5>{children}</h5>,
          h6: ({ children }) => <h6>{children}</h6>,
          "h1+center": ({ children }) => (
            <h1 className="text-center">{children}</h1>
          ),
          "h2+center": ({ children }) => (
            <h2 className="text-center">{children}</h2>
          ),
          "h3+center": ({ children }) => (
            <h3 className="text-center">{children}</h3>
          ),
          "h4+center": ({ children }) => (
            <h4 className="text-center">{children}</h4>
          ),
          "h5+center": ({ children }) => (
            <h5 className="text-center">{children}</h5>
          ),
          "h6+center": ({ children }) => (
            <h6 className="text-center">{children}</h6>
          ),
          blockquote: ({ children }) => (
            <div className="py-1">
              <blockquote className="flex">
                <IoIosQuote />
                <p className="pl-1 text-lg font-semibold">{children}</p>
              </blockquote>
            </div>
          ),
          normal: ({ children }) => <p className="mt-1">{children}</p>,
          "normal+center": ({ children }) => (
            <p className="text-center">{children}</p>
          ),
        },
      }}
    />
  );
};

export default BlockContent;
