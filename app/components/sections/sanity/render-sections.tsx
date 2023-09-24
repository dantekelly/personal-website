import { type Sections } from "~/types/sections";
import {
  BlockContent,
  Grid,
  MainImage,
  Spacer,
} from "~/components/sections/sanity";

const RenderSection = ({ section }: { section: Sections }) => {
  switch (section._type) {
    case "blockContent":
      return <BlockContent data={section} />;
    case "grid":
      return <Grid data={section} />;
    case "mainImage":
      return <MainImage data={section} />;
    case "spacer":
      return <Spacer data={section} />;
    default:
      console.warn(`Section couldn't be rendered`);

      if (process.env.NODE_ENV !== "production") {
        return <pre>{JSON.stringify(section, null, 2)}</pre>;
      }

      return null;
  }
};

export default RenderSection;
