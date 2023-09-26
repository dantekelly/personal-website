import type { PageType } from "~/types/pageType";
import { LayoutComponent } from "~/components/layouts/index";
import { sanityClient } from "~/lib/sanity/client";
import { RenderSection } from "~/components/sections/sanity";
import { type Details } from "~/types/sections/details";
import { detailsQuery } from "~/lib/queries/details";

type Props = {
  page: PageType;
};

const IndexPage = async ({ page }: Props) => {
  const details = await sanityClient.fetch<Details>(detailsQuery);

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
