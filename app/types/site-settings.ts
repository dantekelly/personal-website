import { type SanityDocument } from "@sanity/types";
import { type SocialFields } from "./objects/social-fields";

export interface SiteSettings extends SanityDocument {
  socialFields?: SocialFields;
  githubUser?: string;
}
