import type { StructureResolver } from "sanity/desk";
import { SiteSettings } from "./global-settings";
import { PageMenuItem } from "./pages";

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title("Content")
    .items([SiteSettings(S), PageMenuItem(S)]);

export default structure;
