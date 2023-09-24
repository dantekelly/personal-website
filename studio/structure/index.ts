import type { StructureResolver } from "sanity/desk";
import { SiteSettings } from "./global-settings";
import { PageMenuItem } from "./pages";
import { WorkMenuItem } from "./works";
import { PostMenuItem } from "./posts";
import { ProjectMenuItem } from "./projects";
import { TagMenuItem } from "./tags";

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title("Content")
    .items([
      SiteSettings(S),
      PageMenuItem(S),
      PostMenuItem(S),
      TagMenuItem(S),
      ProjectMenuItem(S),
      WorkMenuItem(S),
    ]);

export default structure;
