import { RiBriefcaseLine } from "react-icons/ri";
import { defineField } from "sanity";

const works = defineField({
  title: "Works",
  name: "works",
  description: "Works Section",
  type: "object",
  hidden: false,
  icon: RiBriefcaseLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      };
    },
  },
});

export default works;
