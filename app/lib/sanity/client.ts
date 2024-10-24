import { type SanityImageSource } from "@sanity/asset-utils";
import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "undefined",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-11-15",
};

export const urlForImage = (source: SanityImageSource) => {
  return createImageUrlBuilder(config).image(source);
};

export const sanityClient = createClient(config);
