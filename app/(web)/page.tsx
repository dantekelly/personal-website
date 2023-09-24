import LayoutComponent from "~/components/layouts/layoutComponent";
import Details from "~/components/sections/details";
import Hero from "~/components/sections/hero";
import Works from "~/components/sections/works";
import Blogs from "~/components/sections/blogs";

import { sanityClient } from "~/lib/sanity/client";
import { postsQuery } from "~/lib/queries";

import { type Blog } from "~/types/blog";

export default async function Page() {
  const postsData = await sanityClient.fetch<Blog[]>(postsQuery, {
    limit: 3,
  });

  return (
    <LayoutComponent>
      <Hero />

      <Works />

      <Details />

      <Blogs data={postsData} />
    </LayoutComponent>
  );
}
