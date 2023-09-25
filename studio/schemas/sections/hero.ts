import { RiFileTextLine } from "react-icons/ri";
import { defineField } from "sanity";

const hero = defineField({
  title: "Hero",
  name: "hero",
  description: "Hero Section",
  type: "object",
  hidden: false,
  icon: RiFileTextLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "simpleBlockContent",
      title: "Body",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Image",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Hero Section",
      };
    },
  },
});

export default hero;
