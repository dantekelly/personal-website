import { type BlockContent } from "./block-content";
import { type Grid } from "./grid";
import { type Image } from "./image";
import { type Spacer } from "./spacer";

export type Sections = BlockContent | Grid | Image | Spacer;
export type PageSections = BlockContent | Grid | Image | Spacer;
export type PostSections = BlockContent | Grid | Image;
