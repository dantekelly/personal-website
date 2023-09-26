import { RiGridFill } from "react-icons/ri";
import { defineField } from "sanity";

const detailSection = defineField({
  title: "Details",
  name: "detailsSection",
  type: "object",
  hidden: false,
  icon: RiGridFill,
  fields: [
    defineField({
      title: "Details",
      name: "details",
      type: "reference",
      to: [{ type: "details" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Details Section",
      };
    },
  },
});

export default detailSection;
