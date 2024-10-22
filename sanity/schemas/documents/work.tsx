import { defineField, defineType } from "sanity";
import { InlineSvgPreviewItem } from "@focus-reactive/sanity-plugin-inline-svg-input";

const work = defineType({
  name: "work",
  type: "document",
  title: "Works",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the work",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon (SVG)",
      type: "inlineSvg",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
      // media: "svg",
      // media: "image.asset",
    },
  },
  components: {
    // @ts-expect-error
    preview: ({ icon, title }) => {
      return <InlineSvgPreviewItem icon={icon} title={title} />;
    },
  },
});

export default work;
