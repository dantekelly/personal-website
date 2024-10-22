import { RiTeamFill } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const SocialMediaItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Social Media")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .icon(RiTeamFill)
    .child(
      S.documentTypeList("socialField")
        .title("Social Media")
        .filter("_type == $type")
        .params({ type: "socialField" }),
    );
