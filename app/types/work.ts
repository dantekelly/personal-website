import { type SanityDocument } from "@sanity/types";
import { type SanityImageSource } from "@sanity/asset-utils";

export interface Work extends SanityDocument {
  _type: "work";
  _id: string;
  title: string;
  image: SanityImageSource;
  isExperiment: boolean;
}
