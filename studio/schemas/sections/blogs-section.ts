import { RiArticleLine } from "react-icons/ri";
import { defineField } from "sanity";

const blogsSection = defineField({
  name: "blogsSection",
  type: "object",
  title: "Blogs Section",
  hidden: true,
  icon: RiArticleLine,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
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

export default blogsSection;
