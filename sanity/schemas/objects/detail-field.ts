import { RiFileTextLine } from "react-icons/ri";
import { defineField } from "sanity";

const detailField = defineField({
  title: "Detail Field",
  name: "detailField",
  type: "object",
  icon: RiFileTextLine,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }, { type: "socialField" }],
        },
      ],
    }),
  ],
});

export default detailField;
