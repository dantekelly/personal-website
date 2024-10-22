import type { PageType } from "~/types/pageType";
import { LayoutComponent } from "~/components/layouts/index";
import { RenderSection } from "~/components/sections/sanity";
import { type Details } from "~/types/sections/details";

type Props = {
  details?: Details;
  page?: PageType;
};

const IndexPage = ({ details, page }: Props) => {
  return (
    <LayoutComponent data={details}>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </LayoutComponent>
  );
};

export default IndexPage;
