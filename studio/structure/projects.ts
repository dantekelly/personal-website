import { RiPagesLine } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const ProjectMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Projects")
    .icon(RiPagesLine)
    .child(
      S.documentTypeList("project")
        .title("Projects")
        .filter("_type == $type")
        .params({ type: "project" }),
    );
