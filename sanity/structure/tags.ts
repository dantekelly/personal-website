import { SlTag } from "react-icons/sl";
import type { StructureBuilder } from "sanity/desk";

export const TagMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Tags")
    .icon(SlTag)
    .child(
      S.documentTypeList("tag")
        .title("Tags")
        .filter("_type == $type")
        .params({ type: "tag" }),
    );
