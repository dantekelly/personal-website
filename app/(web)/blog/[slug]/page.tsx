import { allPostSlug, postQuery } from "~/lib/queries";
import { sanityClient } from "~/lib/sanity/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { notFound } from "next/navigation";

import { BlogPageLayout } from "~/components/layouts";

export const generateStaticParams = async () => {
  const pageData = await sanityClient.fetch<string[]>(
    allPostSlug,
    {},
    {
      perspective: "published",
    },
  );

  return pageData.map((page) => ({
    slug: page,
  }));
};

const SlugRoute = async (props: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const params = await props.params;
  const page = await sanityFetch({
    query: postQuery,
    params,
  });

  if (!page) {
    return notFound();
  }

  const details = {
    body: page?.details?.body,
    siteSettings: page?.details?.siteSettings,
    content: page?.details?.content,
  };

  // TODO: Fix the type error
  // @ts-expect-error
  return <BlogPageLayout details={details} page={page?.post} />;
};

export default SlugRoute;
