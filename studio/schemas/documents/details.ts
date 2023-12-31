import { RiArticleLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

const details = defineType({
  name: "details",
  type: "document",
  title: "Details",
  icon: RiArticleLine,
  fields: [
    defineField({
      name: "body",
      type: "simpleBlockContent",
      title: "Body",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "detailField" }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Details",
      };
    },
  },
});

export default details;
