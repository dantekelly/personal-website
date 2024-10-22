import { RiMedalLine } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const ProjectMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Projects")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .icon(RiMedalLine)
    .child(
      S.documentTypeList("project")
        .title("Projects")
        .filter("_type == $type")
        .params({ type: "project" }),
    );
