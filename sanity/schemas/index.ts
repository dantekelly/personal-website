import { type SchemaTypeDefinition } from "@sanity/types/src/schema/definition/schemaDefinition";

// Documents
import page from "./documents/page";
import post from "./documents/post";
import siteSettings from "./documents/site-settings";
import work from "./documents/work";
import project from "./documents/project";
import socialField from "./documents/social-field";
import details from "./documents/details";
import tag from "./documents/tag";

// Objects
import columns from "./objects/columns";
import externalLink from "./objects/external-link";
import internalLink from "./objects/internal-link";
import link from "./objects/link";
import metaFields from "./objects/meta";
import simpleBlockContent from "./objects/simple-block-content";
import breakObj from "./objects/breakObj";
import detailField from "./objects/detail-field";

// Sections
import blockContent from "./sections/block-content";
import grid from "./sections/grid";
import mainImage from "./sections/main-image";
import spacer from "./sections/spacer";
import hero from "./sections/hero";
import works from "./sections/works";
import detailsSection from "./sections/details-section";
import blogsSection from "./sections/blogs-section";

export const schemasTypes: SchemaTypeDefinition[] = [
  // Documents
  page,
  post,
  siteSettings,
  tag,
  work,
  project,
  socialField,
  details,

  // Objects
  columns,
  externalLink,
  internalLink,
  link,
  metaFields,
  simpleBlockContent,
  breakObj,
  detailField,

  // Sections
  blockContent,
  grid,
  mainImage,
  spacer,
  hero,
  works,
  detailsSection,
  blogsSection,
];
