import Carousel, { type CarouseItemType } from "~/components/carousel/Carousel";
import { sanityClient, urlForImage } from "~/lib/sanity/client";
import { workQuery } from "~/lib/queries";
import { type Work } from "~/types/work";

export default async function Works() {
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

      <Carousel items={formattedWorks} />
    </div>
  );
}
