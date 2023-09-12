import { type Metadata } from "next";

import LayoutComponent from "~/components/layouts/layoutComponent";
import Details from "~/components/sections/details";
import Hero from "~/components/sections/hero";
import Works from "~/components/sections/works";

export const metadata: Metadata = {
  title: "Dante Kelly - Portfolio",
  description: "Personal Portfolio of Dante Kelly",
};

export default function Home() {
  return (
    <LayoutComponent>
      <Hero />

      <Works />

      <Details />
    </LayoutComponent>
  );
}
