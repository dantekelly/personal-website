import { RiPagesLine } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const PageMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .icon(RiPagesLine)
    .child(
      S.documentTypeList("page")
        .title("Pages")
        .filter("_type == $type")
        .params({ type: "page" }),
    );
