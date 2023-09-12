import { type SanityDocument } from "@sanity/types";
import { type InternalLink } from "./objects/internal-link";
import { type ExternalLink } from "./objects/external-link";
import { type SocialFields } from "./objects/social-fields";

export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";
  _key: string;
  title: string;
  description: string;
  navigation?: Array<InternalLink | ExternalLink>;
  socialFields?: SocialFields;
}
