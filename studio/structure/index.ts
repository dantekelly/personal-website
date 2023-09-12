import type { StructureResolver } from "sanity/desk";
import { SiteSettings } from "./global-settings";
import { PageMenuItem } from "./pages";
import { WorkMenuItem } from "./works";
import { ProjectMenuItem } from "./projects";

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title("Content")
    .items([
      SiteSettings(S),
      PageMenuItem(S),
      ProjectMenuItem(S),
      WorkMenuItem(S),
    ]);

export default structure;
