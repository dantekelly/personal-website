import { type SimpleBlockContent } from "~/types/objects/simple-block-content";
import { type Image } from "~/types/sections/image";

export interface DetailsField {
  _id: string;
  title: string;
  href: string;
  image: Image;
}

export type SocialField = DetailsField;

export interface Project extends DetailsField {
  lastUpdated?: string;
  isExperiment?: boolean;
  githubLink?: string;
}

export type DetailsInnerContent = Project;

export interface DetailsContent {
  title: string;
  content: DetailsInnerContent[];
}

export interface Details {
  body: SimpleBlockContent;
  siteSettings: {
    githubUser: string;
  };
  content: DetailsContent[];
}

export interface DetailsSection {
  _key: string;
  _type: "detailsSection";
  details: Details;
}
