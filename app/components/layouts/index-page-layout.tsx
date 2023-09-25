import type { PageType } from "~/types/pageType";
import type { Blog } from "~/types/blog";
import { LayoutComponent } from "~/components/layouts/index";
import { sanityClient } from "~/lib/sanity/client";
import { type SiteSettings } from "~/types/site-settings";
import { projectQuery, siteSettingsQuery } from "~/lib/queries";
import { type Project } from "~/types/project";
import { RenderSection } from "~/components/sections/sanity";

type Props = {
  page: PageType;
};

const IndexPage = async ({ page }: Props) => {
  // TODO: Combine Queries
  const siteSettings =
    await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
  const projects = await sanityClient.fetch<Project[]>(projectQuery);

  return (
    <LayoutComponent data={{ projects, siteSettings }}>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        console.log("Section", section);
        return <RenderSection key={section._key} section={section} />;
      })}
    </LayoutComponent>
  );
};

export default IndexPage;
