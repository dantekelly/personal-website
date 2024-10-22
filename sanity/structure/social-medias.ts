import { RiTeamFill } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const SocialMediaItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Social Media")
    .icon(RiTeamFill)
    .child(
      S.documentTypeList("socialField")
        .title("Social Media")
        .filter("_type == $type")
        .params({ type: "socialField" }),
    );
