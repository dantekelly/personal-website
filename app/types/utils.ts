import { PortableTextBlock } from "@sanity/types";

export interface SanityCustomImage {
  alt: string;
  asset: SanityAsset;
  _key: string;
  _type: "customImage";
}

export interface SanityBreakObj {
  _key: string;
  _type: "breakObj";
  styling: "lineBreak";
}

export type SanityBlock =
  | PortableTextBlock
  | SanityCustomImage
  | SanityBreakObj;

export type SanityReference = {
  _type: "reference";
  _key?: string;
  _ref: string;
};

export type SanityAsset = SanityReference;
