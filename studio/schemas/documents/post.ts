import slug from "slugify";
import { format } from "date-fns";
import { RiArticleLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  icon: RiArticleLine,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "meta",
      title: "Meta infomation",
    },
    {
      name: "excerpt",
      title: "Excerpt",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the page",
      group: "general",
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
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "metaFields",
      name: "meta",
      group: "meta",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Tags for your post",
      group: "meta",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "tag",
      type: "reference",
      title: "Tag",
      description: "Tags for your post",
      group: "general",
      to: [{ type: "tag" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "simpleBlockContent",
      title: "Excerpt",
      description:
        "This ends up on summary pages, when people share your post in social media.",
      group: "excerpt",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      description: "Image that is displayed in posts lists",
      group: "excerpt",
      type: "mainImage",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      description: "Add, edit, and reorder sections with content",
      group: "content",
      of: [
        { type: "grid" },
        { type: "mainImage" },
        { type: "blockContent" },
        { type: "spacer" },
      ],
    }),
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      media: "featuredImage.asset",
    },
    prepare(value: Record<"title" | "publishedAt" | "media", string>) {
      const { title, publishedAt, media } = value;

      return {
        title: `${title}`,
        subtitle: format(new Date(publishedAt), "MMM dd yyyy HH:mm"),
        media,
      };
    },
  },
});

export default post;
