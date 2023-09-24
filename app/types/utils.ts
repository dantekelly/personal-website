import { type PortableTextBlock } from "@portabletext/types/src/portableText";

export interface SanityCustomImage {
  alt: string;
  asset: SanityAsset;
  _key: string;
  _type: "customImage";
}

export type SanityBlock = PortableTextBlock | SanityCustomImage;

export type SanityReference = {
  _type: "reference";
  _key?: string;
  _ref: string;
};

export type SanityAsset = SanityReference;
