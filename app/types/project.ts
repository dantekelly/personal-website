import { type SanityDocument } from "@sanity/types";
import { type SanityImageSource } from "@sanity/asset-utils";

export interface Project extends SanityDocument {
  _type: "project";
  _id: string;
  title: string;
  href: string;
  lastUpdated: string;
  image: SanityImageSource;
  isExperiment: boolean;
  githubLink?: string;
}
