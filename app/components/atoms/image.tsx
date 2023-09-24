import Image from "next/image";

import { urlForImage } from "~/lib/sanity/client";
import type { Image as MainImage } from "~/types/sections/image";

interface ImageProps {
  data: MainImage;
  width?: number;
  height?: number;
  priority?: boolean;
}

const ImageComponent = (props: ImageProps) => {
  const { data: source, priority, height = 1000, width = 1200 } = props;

  const image = source?.asset ? (
    <div className="shadow-small hover:shadow-medium transition-shadow duration-200">
      <Image
        className="h-auto w-full rounded-md"
        width={1200}
        height={1000}
        alt={`Image for ${source.alt}`}
        src={urlForImage(source.asset).height(height).width(width).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return <div className="sm:mx-0">{image}</div>;
};

export default ImageComponent;
