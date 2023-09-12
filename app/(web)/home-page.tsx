"use client";

import { type Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { useSpringCarousel } from "react-spring-carousel";

import Photo from "@/images/Photo.png";
import AmaIcon from "@/work-icons/ama.png";
import AppleIcon from "@/work-icons/apple.png";
import BncIcon from "@/work-icons/bnc.png";
import GoogleIcon from "@/work-icons/google.png";
import MetlifeIcon from "@/work-icons/metlife.png";
import NikeIcon from "@/work-icons/nike.png";
import PixarIcon from "@/work-icons/pixar.png";
import SamsungIcon from "@/work-icons/samsung.png";
import TxmIcon from "@/work-icons/txm.png";
import UsaaIcon from "@/work-icons/usaa.png";

import LayoutComponent from "~/components/layouts/layoutComponent";
import { useEffect } from "react";
import { useBreakpoint } from "~/utils/useBreakpoint";
import Aside from "~/components/layouts/aside";

interface WorksItem {
  image: string | StaticImageData;
  alt: string;
  id: string;
}

const CarouselItem = ({ image, alt }: WorksItem) => (
  <div className="pointer-events-none flex h-full w-full select-none flex-col items-center justify-center">
    <Image src={image} alt={alt} width={100} height={40} />
  </div>
);

interface CarouselProps {
  works: WorksItem[];
  isBelowMd: boolean;
  isBelowSm: boolean;
}

const Carousel = ({ works, isBelowMd, isBelowSm }: CarouselProps) => {
  const waitTime = 1000 * 5;

  // ESLint is jumping the gun here, let's stop it.
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: isBelowSm ? 3 : isBelowMd ? 4 : 6,
    gutter: 24,
    withLoop: true,
    items: works.map((item) => ({
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

const staticWorks: WorksItem[] = [
  { image: AmaIcon, alt: "Amazon", id: "amazon" },
  { image: AppleIcon, alt: "Apple", id: "apple" },
  { image: BncIcon, alt: "Barnes and Noble College", id: "barnesAndNoble" },
  { image: GoogleIcon, alt: "Google", id: "google" },
  { image: MetlifeIcon, alt: "MetLife", id: "metlife" },
  { image: NikeIcon, alt: "Nike", id: "nike" },
  { image: PixarIcon, alt: "Pixar", id: "pixar" },
  { image: SamsungIcon, alt: "Samsung", id: "samsung" },
  { image: TxmIcon, alt: "Texas Mutual", id: "texasMutual" },
  { image: UsaaIcon, alt: "USAA", id: "usaa" },
];

export const metadata: Metadata = {
  title: "Dante Kelly - Portfolio",
  description: "Personal Portfolio of Dante Kelly",
};

export default function Home() {
  const { isAboveMd, isBelowMd } = useBreakpoint("md");
  const { isBelowSm } = useBreakpoint("sm");

  const image = Photo;
  const title = "Dante Kelly";
  const body = `I’m a tech professional in Las Vegas working as a full-stack developer and UI/UX designer, building secure and effective applications.

Often I’ll take on additional smaller projects to test out cutting-edge technology in production, and let you know my insights.

If you like one of my experiments, don’t be a stranger, report some issues.`;
  return (
    <LayoutComponent isAboveMd={isAboveMd} isBelowMd={isBelowMd}>
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 xl:flex-row ">
        <Image src={image} alt="Dante Kelly" width={300} height={305} />
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold text-slate-50">{title}</h1>
          <p className="text-md text-slate-400">{body}</p>
        </div>
      </div>

      <div>
        <p className="text-md mb-[10px] font-medium uppercase text-slate-400">
          Works Used By
        </p>
        <Carousel
          isBelowMd={isBelowMd}
          isBelowSm={isBelowSm}
          works={staticWorks}
        />
      </div>

      {isBelowMd && <Aside isMobile />}
    </LayoutComponent>
  );
}
