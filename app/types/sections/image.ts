import { type SanityImageSource } from "@sanity/asset-utils";

export interface Image {
  _type: "mainImage";
  _key: string;
  alt: string;
  asset: SanityImageSource;
}
