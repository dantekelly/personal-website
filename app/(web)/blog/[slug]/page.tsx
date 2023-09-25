import { allPagesSlug, postQuery } from "~/lib/queries";
import { sanityClient } from "~/lib/sanity/client";

import { type Blog } from "~/types/blog";
import type { PageType } from "~/types/pageType";

import { BlogPageLayout } from "~/components/layouts";

export const generateStaticParams = async () => {
  const pageData = await sanityClient.fetch<PageType[]>(allPagesSlug);

  return pageData.map((page) => ({
    slug: page,
  }));
};

const SlugRoute = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const page = await sanityClient.fetch<Blog>(postQuery, {
    slug: params.slug,
  });

  return <BlogPageLayout page={page} />;
};

export default SlugRoute;
