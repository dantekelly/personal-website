import { type SanityDocument } from "@sanity/types";
import { type SanityImageSource } from "@sanity/asset-utils";

export interface Work extends SanityDocument {
  _key: string;
  _type: string;
  title: string;
  image: SanityImageSource;
}
