import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

import type { Blog } from "~/types/blog";
import { LayoutComponent } from "~/components/layouts/index";
import { sanityClient, urlForImage } from "~/lib/sanity/client";
import { RenderSection } from "~/components/sections/sanity";
import { type Details } from "~/types/sections/details";
import { detailsQuery } from "~/lib/queries/details";

type Props = {
  page: Blog;
};

const BlogPage = async ({ page }: Props) => {
  const details = await sanityClient.fetch<Details>(detailsQuery);

  let imageSrc = null;

  if (page?.featuredImage) {
    imageSrc = urlForImage(page.featuredImage.asset)
      .width(1000)
      .height(440)
      .fit("crop")
      .url();
  }

  return (
    <LayoutComponent data={details}>
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

export default BlogPage;
