import { type BlockContent } from "./block-content";
import { type Grid } from "./grid";
import { type Image } from "./image";
import { type Spacer } from "./spacer";
import { type Work } from "~/types/work";
import { type Hero } from "~/types/sections/hero";

export type Sections = BlockContent | Grid | Image | Spacer;
export type PageSections = Hero;
export type PostSections = BlockContent | Grid | Image;
