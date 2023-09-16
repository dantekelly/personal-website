import { type SanityImageObjectStub } from "@sanity/asset-utils";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Reaction {
  _id: string;
  name: string;
  emoji: string;
  count: number;
}

export interface Blog {
  _id: string;
  tag: string;
  title: string;
  summary: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  readTime: number; // in ms
  mainImage: string | StaticImport;
  reactions: Reaction[];
}
