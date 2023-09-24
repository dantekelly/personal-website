import { type Slug } from "@sanity/types";

import { type MetaFields } from "~/types/meta-fields";
import { type SimpleBlockContent } from "~/types/objects/simple-block-content";
import { type Image } from "~/types/sections/image";
import { type PostSections } from "~/types/sections";

export interface Reaction {
  _id: string;
  name: string;
  emoji: string;
  count: number;
}

export interface Tag {
  _id: string;
  title: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: Slug;
  meta: MetaFields;
  publishedAt: string;
  keywords: string[];
  excerpt: SimpleBlockContent;
  featuredImage: Image;
  content: PostSections[];
  tag: Tag;

  reactions?: Reaction[];
}
