import { type Image } from "./image";
import { type BlockContent } from "./block-content";

export interface Grid {
  _type: "grid";
  _key: string;
  title: string;
  columns: {
    _type: "columns";
    small: string;
    medium: string;
    large: string;
  };
  items?: Array<Image | BlockContent>;
}
