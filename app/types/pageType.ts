import { type SanityDocument, type Slug } from "@sanity/types";
import { type MetaFields } from "./meta-fields";
import { type PageSections } from "./sections";

export interface PageType extends SanityDocument {
  _type: "page";
  slug: Slug;
  title: string;
  meta?: MetaFields;
  content?: PageSections[];
}
