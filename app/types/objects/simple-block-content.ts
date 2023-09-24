import { type SanityBlock } from "../utils";

export interface SimpleBlockContent {
  _type: "simpleBlockContent";
  _key: string;
  text?: SanityBlock[];
}
