import { type SchemaTypeDefinition } from "@sanity/types/src/schema/definition/schemaDefinition";

// Documents
import page from "./documents/page";
import post from "./documents/post";
import siteSettings from "./documents/site-settings";

// Objects
import columns from "./objects/columns";
import externalLink from "./objects/external-link";
import internalLink from "./objects/internal-link";
import link from "./objects/link";
import metaFields from "./objects/meta";
import socialFields from "./objects/social-fields";
import simpleBlockContent from "./objects/simple-block-content";

// Sections
import blockContent from "./sections/block-content";
import grid from "./sections/grid";
import mainImage from "./sections/main-image";
import spacer from "./sections/spacer";
import { type SchemaTypeDefinition } from "@sanity/types/src/schema/definition/schemaDefinition";
import work from "./documents/work";
import project from "./documents/project";

export const schemasTypes: SchemaTypeDefinition[] = [
  // Documents
  page,
  post,
  siteSettings,
  tag,
  work,
  project,

  // Objects
  columns,
  externalLink,
  internalLink,
  link,
  metaFields,
  socialFields,
  simpleBlockContent,

  // Sections
  blockContent,
  grid,
  mainImage,
  socialFields,
  blockContent,
  spacer,
];
