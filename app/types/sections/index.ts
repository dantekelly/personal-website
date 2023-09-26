import { type BlockContent } from "./block-content";
import { type Grid } from "./grid";
import { type Image } from "./image";
import { type Spacer } from "./spacer";
import { type Hero } from "~/types/sections/hero";
import { type Blogs } from "~/types/blog";
import { type Works } from "~/types/sections/works";
import { type DetailsSection } from "~/types/sections/details";

export type Sections = BlockContent | Grid | Image | Spacer;
export type PageSections = Hero | Blogs | Works | DetailsSection;
export type PostSections = BlockContent | Grid | Image;
