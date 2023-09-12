import page from "./documents/page";
import siteSettings from "./documents/site-settings";

import columns from "./objects/columns";
import externalLink from "./objects/external-link";
import internalLink from "./objects/internal-link";
import link from "./objects/link";
import metaFields from "./objects/meta";
import socialFields from "./objects/social-fields";
import simpleBlockContent from "./objects/simple-block-content";

import blockContent from "./sections/block-content";
import grid from "./sections/grid";
import mainImage from "./sections/main-image";
import spacer from "./sections/spacer";
import { type SchemaTypeDefinition } from "@sanity/types/src/schema/definition/schemaDefinition";

export const schemasTypes: SchemaTypeDefinition[] = [
  page,
  siteSettings,
  metaFields,
  columns,
  externalLink,
  internalLink,
  link,
  simpleBlockContent,
  grid,
  mainImage,
  socialFields,
  blockContent,
  spacer,
];
