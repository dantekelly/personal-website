"use client";

import Image, { type StaticImageData } from "next/image";
// @ts-ignore
import { useSpringCarousel } from "react-spring-carousel";
import { useEffect } from "react";

import { useBreakpoint } from "~/utils/useBreakpoint";

export interface CarouseItemType {
  image: string | StaticImageData;
  alt: string;
  id: string;
}

const CarouselItem = ({ image, alt }: CarouseItemType) => (
  <div className="pointer-events-none flex h-full w-full select-none flex-col items-center justify-center">
    <Image
      className="object-scale-down"
      src={image}
      alt={alt}
      width={100}
      height={40}
    />
  </div>
);

interface CarouselProps {
  items: CarouseItemType[];
}

const Carousel = ({ items }: CarouselProps) => {
  const { isBelowLg } = useBreakpoint("lg");
  const { isBelowMd } = useBreakpoint("md");
  const { isBelowSm } = useBreakpoint("sm");
  const waitTime = 1000 * 5;

  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: isBelowSm ? 3 : isBelowMd ? 4 : isBelowLg ? 6 : 8,
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
