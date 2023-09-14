import { type SanityDocument } from "@sanity/types";
import { type InternalLink } from "./objects/internal-link";
import { type ExternalLink } from "./objects/external-link";
import { type SocialFields } from "./objects/social-fields";

export interface SiteSettings extends SanityDocument {
  socialFields?: SocialFields;
  githubUser?: string;
}
