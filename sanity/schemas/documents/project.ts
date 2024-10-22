import { defineField, defineType } from "sanity";

const project = defineType({
  name: "project",
  type: "document",
  title: "Projects",
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
      type: "mainImage",
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
      hidden: ({ document }) => !!document?.isExperiment,
      validation: (rule) =>
        rule.custom((currentValue, { document }) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (!document?.isExperiment && currentValue === undefined)
            return "This is required on non experimental projects.";
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true;
        }),
    }),
    defineField({
      title: "Github Link",
      name: "githubLink",
      type: "url",
      hidden: ({ document }) => !document?.isExperiment,
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
