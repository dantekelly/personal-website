import { RiBriefcaseLine } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const WorkMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Works")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .icon(RiBriefcaseLine)
    .child(
      S.documentTypeList("work")
        .title("Works")
        .filter("_type == $type")
        .params({ type: "work" }),
    );
