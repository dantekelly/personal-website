"use client";

import Image, { type StaticImageData } from "next/image";
import { useSpringCarousel } from "react-spring-carousel";
import { useEffect } from "react";

import { useBreakpoint } from "~/utils/useBreakpoint";
import { AspectRatio } from "~/components/ui/aspect-ratio";

export interface CarouseItemType {
  image: string | StaticImageData;
  alt: string;
  id: string;
}

const CarouselItem = ({ image, alt }: CarouseItemType) => (
  <div className="pointer-events-none flex h-full w-full select-none flex-col items-center justify-center">
    <AspectRatio ratio={100 / 40} className="max-w-[100px]">
      <Image
        className="object-contain"
        src={image}
        alt={alt}
        fill
        sizes="100px"
      />
    </AspectRatio>
  </div>
);

interface CarouselProps {
  items: CarouseItemType[];
}

const Carousel = ({ items }: CarouselProps) => {
  const { isBelowXl } = useBreakpoint("xl");
  const { isBelowLg } = useBreakpoint("lg");
  const { isBelowMd } = useBreakpoint("md");
  const { isBelowSm } = useBreakpoint("sm");
  const waitTime = 1000 * 5;

  const itemsPerSlide = isBelowSm
    ? 3
    : isBelowMd
    ? 4
    : isBelowLg
    ? 4
    : isBelowXl
    ? 6
    : 8;

  // ESLint is jumping the gun here, let's stop it.
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    itemsPerSlide,
    gutter: 24,
    withLoop: true,
    items: items.map((item) => ({
      id: item.id,
      renderItem: <CarouselItem {...item} />,
    })),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem();
    }, waitTime);

    return () => {
      window.clearInterval(timer);
    };
  }, [waitTime, slideToNextItem]);

  return carouselFragment;
};

export default Carousel;
