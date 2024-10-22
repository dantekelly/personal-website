import { RiGridFill } from "react-icons/ri";
import type { StructureBuilder } from "sanity/desk";

export const Details = (S: StructureBuilder) =>
  S.listItem()
    .title("Details")
    .icon(RiGridFill)
    .child(S.editor().schemaType("details").documentId("details"));
