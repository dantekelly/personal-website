import { RiShareLine } from "react-icons/ri";
import { defineField } from "sanity";

const socialField = defineField({
  title: "Social",
  name: "socialField",
  type: "document",
  icon: RiShareLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      type: "url",
      title: "Url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image.asset",
    },
    prepare(value: Record<"title" | "media", string>) {
      const { title, media } = value;

      return {
        title: `${title}`,
        media,
      };
    },
  },
});

export default socialField;
