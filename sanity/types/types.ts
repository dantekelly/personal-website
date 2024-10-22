import { type SanityDocument } from "@sanity/types";

export interface ValidSanityDocument extends SanityDocument {
  slug: {
    current: string;
  };
}
