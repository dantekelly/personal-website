import { type SanityDocument } from "@sanity/types";
import { type SanityImageSource } from "@sanity/asset-utils";
import { type SiteSettings } from "~/types/site-settings";
import { type Project } from "~/types/project";

export interface Work extends SanityDocument {
  _key: string;
  _type: string;
  title: string;
  image: SanityImageSource;
}
