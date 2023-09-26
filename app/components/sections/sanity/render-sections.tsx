import { type PageSections, type Sections } from "~/types/sections";
import {
  BlockContent,
  Grid,
  MainImage,
  Spacer,
} from "~/components/sections/sanity";
import Works from "~/components/sections/works";
import Hero from "~/components/sections/hero";
import Details from "~/components/sections/details";
import Blogs from "~/components/sections/blogs";

const RenderSection = ({ section }: { section: Sections | PageSections }) => {
  switch (section._type) {
    case "blockContent":
      return <BlockContent data={section} />;
    case "grid":
      return <Grid data={section} />;
    case "mainImage":
      return <MainImage data={section} />;
    case "spacer":
      return <Spacer data={section} />;

    case "hero":
      return <Hero data={section} />;

    case "works":
      return <Works data={section} />;

    case "detailsSection":
      return <Details data={section.details} />;

    case "blogsSection":
      return <Blogs data={section} />;

    default:
      console.warn(`Section couldn't be rendered`);

      if (process.env.NODE_ENV !== "production") {
        return <pre>{JSON.stringify(section, null, 2)}</pre>;
      }

      return null;
  }
};

export default RenderSection;
