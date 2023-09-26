import dynamic from "next/dynamic";

import { type CarouseItemType } from "~/components/carousel/Carousel";
import { sanityClient, urlForImage } from "~/lib/sanity/client";
import { workQuery } from "~/lib/queries";
import { type Work } from "~/types/work";
import { type Works as WorksType } from "~/types/sections/works";

const DynamicCarousel = dynamic(
  () => import("~/components/carousel/Carousel"),
  {
    ssr: false,
  },
);

interface WorksProps {
  data: WorksType;
}

export default async function Works({ data }: WorksProps) {
  const works = await sanityClient.fetch<Work[]>(workQuery);

  const formattedWorks: CarouseItemType[] = works.map((work) => {
    return {
      image: urlForImage(work.image)
        .width(100)
        .maxWidth(100)
        .maxHeight(40)
        .fit("max")
        .url(),
      alt: work.title,
      id: work._id,
    };
  });

  return (
    <div>
      <p className="text-md mb-[10px] font-medium uppercase text-slate-400">
        Works Used By
      </p>

      <DynamicCarousel items={formattedWorks} />
    </div>
  );
}
