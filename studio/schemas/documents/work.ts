import slug from "slugify";
import { RiPagesLine } from "react-icons/ri";
import { defineType, defineField } from "sanity";

const work = defineType({
  name: "work",
  type: "document",
  title: "Works",
  // icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the work",
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
  ],
  preview: {
    select: {
      title: "title",
      media: "image.asset",
    },
  },
});

export default work;
