"use client";

import { inlineSvgInput } from "@focus-reactive/sanity-plugin-inline-svg-input";
import { defineConfig, type PluginOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { apiVersion, dataset, projectId, studioUrl } from "./sanity/lib/api";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import { schemasTypes } from "./sanity/schemas";
import { resolve } from "./sanity/lib/presentation/resolve";
import siteSettings from "./sanity/schemas/documents/site-settings";

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemasTypes,
  },
  plugins: [
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    structureTool({ structure: pageStructure([siteSettings]) }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin(["siteSettings"]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    inlineSvgInput(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
