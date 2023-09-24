import { defineType, defineField } from "sanity";
import slug from "slugify";

const project = defineType({
  name: "tag",
  type: "document",
  title: "Tags",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the Tag",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the page",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => slug(input, { lower: true }),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default project;
