import slug from "slugify";
import { RiPagesLine } from "react-icons/ri";
import { defineType, defineField } from "sanity";

const project = defineType({
  name: "project",
  type: "document",
  title: "Projects",
  // icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the Project",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isExperiment",
      title: "Is this an experiment?",
      type: "boolean",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
      description: "Last Updated",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image.asset",
    },
  },
});

export default project;
