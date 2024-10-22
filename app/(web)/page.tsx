import type { Metadata } from "next";

import { IndexPageLayout } from "~/components/layouts";
import { sanityClient, urlForImage } from "~/lib/sanity/client";
import { pageQuery } from "~/lib/queries";
import { type PageType } from "~/types/pageType";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Details } from "../types/sections/details";

interface PageProps {
  details?: Details;
  page?: PageType;
}

export const generateMetadata = async (): Promise<Metadata> => {
  const { page } = await sanityClient.fetch<PageProps>(pageQuery, {
    slug: "home",
    limit: 3,
  });

  const ogImage =
    (page?.meta?.openGraphImage &&
      urlForImage(page.meta.openGraphImage)
        .width(800)
        .height(600)
        .fit("crop")
        .url()) ??
    "";

  return {
    title: page?.meta?.metaTitle ?? page?.title,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    description: page?.meta?.metaDescription,
    openGraph: {
      title: page?.meta?.openGraphTitle,
      description: page?.meta?.openGraphDescription,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export default async function Page() {
  const pageData = await sanityFetch({
    query: pageQuery,
    params: {
      slug: "home",
    },
  });

  // TODO: Fix the type error
  // @ts-expect-error
  return <IndexPageLayout details={pageData?.details} page={pageData?.page} />;
}
