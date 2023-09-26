import { RiShareLine } from "react-icons/ri";
import { defineField } from "sanity";
import { format } from "date-fns";

const socialField = defineField({
  title: "Social",
  name: "socialField",
  type: "document",
  icon: RiShareLine,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "Url",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "mainImage",
    }),
  ],
  preview: {
    select: {
      name: "name",
      media: "icon.asset",
    },
    prepare(value: Record<"name" | "media", string>) {
      const { name, media } = value;

      return {
        title: `${name}`,
        media,
      };
    },
  },
});

export default socialField;
