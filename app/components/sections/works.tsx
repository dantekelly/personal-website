"use client";
import dynamic from "next/dynamic";

import { type CarouseItemType } from "~/components/carousel/Carousel";
import { urlForImage } from "~/lib/sanity/client";
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

export default function Works({ data }: WorksProps) {
  const works = data?.works;

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
