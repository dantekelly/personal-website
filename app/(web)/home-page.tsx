import LayoutComponent from "~/components/layouts/layoutComponent";
import Details from "~/components/sections/details";
import Hero from "~/components/sections/hero";
import Works from "~/components/sections/works";

export default function Home() {
  return (
    <LayoutComponent>
      <Hero />

      <Works />

      <Details />
    </LayoutComponent>
  );
}
