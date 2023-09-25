import { type SanityImageSource } from "@sanity/asset-utils";
import { type SimpleBlockContent } from "~/types/objects/simple-block-content";

export interface Hero {
  _type: "hero";
  _key: string;
  title: string;
  body: SimpleBlockContent;
  featuredImage: {
    _type: "image";
    _key: string;
    alt: string;
    asset: SanityImageSource;
  };
}
