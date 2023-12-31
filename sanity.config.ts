import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { singletonPlugin } from "./studio/plugins/singletonPlugin";
import { previewDocumentNode } from "./studio/plugins/preview";
import { schemasTypes } from "./studio/schemas";
import { structure } from "./studio/structure";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  name: "Studio",
  basePath: "/studio",
  schema: {
    types: schemasTypes,
  },
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode: previewDocumentNode(),
    }),
    singletonPlugin({ types: ["siteSettings"] }),
    visionTool(),
    unsplashImageAsset(),
  ],
});
