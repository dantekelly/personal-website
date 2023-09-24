import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

import { allPagesSlug, postQuery } from "~/lib/queries";
import { sanityClient, urlForImage } from "~/lib/sanity/client";

import { type Blog } from "~/types/blog";
import type { PageType } from "~/types/pageType";

import LayoutComponent from "~/components/layouts/layoutComponent";
import { RenderSection } from "~/components/sections/sanity";

export const generateStaticParams = async () => {
  const pageData = await sanityClient.fetch<PageType[]>(allPagesSlug);

  return pageData.map((page) => ({
    slug: page,
  }));
};

const SlugRoute = async ({ params }: { params: { slug: string } }) => {
  const page = await sanityClient.fetch<Blog>(postQuery, {
    slug: params.slug,
  });

  let imageSrc = null;

  if (page?.featuredImage) {
    imageSrc = urlForImage(page.featuredImage.asset)
      .width(1000)
      .height(440)
      .fit("crop")
      .url();
  }

  return (
    <LayoutComponent>
      {page?.featuredImage && imageSrc && (
        <Image
          src={imageSrc}
          alt={page.featuredImage.alt}
          width={800}
          height={200}
          className="w-full rounded-t-xl"
        />
      )}

      <div className="flex flex-col items-center gap-4 py-8">
        <div className="flex items-center gap-1">
          <Link href="/blog">
            <p>Blog</p>
          </Link>
          <RxChevronRight className="text-slate-50" />
          <Link href="/blog/insights">
            <p>Insights</p>
          </Link>
        </div>

        <h1 className="text-center">{page.title}</h1>
      </div>
      <div className="my-8 flex h-[1px] w-full flex-col items-center gap-4 bg-slate-600" />

      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </LayoutComponent>
  );
};

export default SlugRoute;
