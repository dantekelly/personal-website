"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "flowbite-react";

import AAUIcon from "@/icons/icon-aau.png";
import ArrowRightIcon from "@/icons/icon-arrow-right.png";
import CheddarFlowIcon from "@/icons/icon-cheddarflow.png";
import BlankIcon from "@/icons/icon-blank.png";
import CurrentCityIcon from "@/icons/icon-currentcity.png";
import DanteIcon from "@/icons/icon-dante.png";
import GithubIcon from "@/icons/icon-github.png";
import LinkedInIcon from "@/icons/icon-linkedin.png";
import NovaWatchIcon from "@/icons/icon-novawatch.png";
import RocketIcon from "@/icons/icon-rocket.png";
import TwitterIcon from "@/icons/icon-twitter.png";
import WittitIcon from "@/icons/icon-wittit.png";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

interface HeaderProps {
  isMobile?: boolean;
}

interface CustomBadgeProps {
  children: React.ReactNode;
}

const CustomBadge = ({ children }: CustomBadgeProps) => {
  return (
    <Badge
      theme={{
        root: {
          base: "",
        },
      }}
      className="border-1 flex h-fit items-center gap-1 border-slate-700 font-semibold dark:border dark:border-slate-700 dark:bg-transparent dark:text-slate-50"
    >
      {children}
    </Badge>
  );
};

interface ListItemProps {
  href: string;
  src: string | StaticImport;
  name: string;
  alt: string;
  year?: string;
  id: string;
}

const ListItem = ({
  href,
  name,
  src = BlankIcon,
  alt,
  year,
}: ListItemProps) => {
  let formattedYear;

  if (year) {
    if (year.includes("Ongoing") || year.includes("ago")) {
      formattedYear = <p className="text-green-400">{year}</p>;
    } else {
      formattedYear = <p className="text-blue-400">{year}</p>;
    }
  }

  return (
    <li>
      <Link href={href}>
        <div className="flex flex-1 items-center">
          <div className="flex flex-1 items-center gap-[9px]">
            <Image src={src} alt={alt} width={20} height={20} />
            <p className="text-slate-50">{name}</p>
          </div>
          {year ? (
            <CustomBadge>{formattedYear}</CustomBadge>
          ) : (
            <Image
              src={ArrowRightIcon}
              alt="Arrow Right"
              width={20}
              height={20}
            />
          )}
        </div>
      </Link>
    </li>
  );
};

const staticProjectItems: ListItemProps[] = [
  {
    href: "https://www.dantekelly.com",
    src: AAUIcon,
    name: "Academy of Art",
    year: "2023",
    alt: "Dante Icon",
    id: "1",
  },
  {
    href: "https://www.dantekelly.com",
    src: NovaWatchIcon,
    name: "NovaWatch",
    year: "2023",
    alt: "NovaWatch Icon",
    id: "2",
  },
  {
    href: "https://www.dantekelly.com",
    src: CurrentCityIcon,
    name: "CurrentCity",
    year: "2023",
    alt: "CurrentCity Icon",
    id: "3",
  },
  {
    href: "https://www.dantekelly.com",
    src: CheddarFlowIcon,
    name: "CheddarFlow",
    year: "2022",
    alt: "Cheddar Flow Icon",
    id: "4",
  },
  {
    href: "https://www.dantekelly.com",
    src: WittitIcon,
    name: "Wittit",
    year: "2019",
    alt: "Wittit Icon",
    id: "5",
  },
];
const staticExperimentItems: ListItemProps[] = [
  {
    href: "https://www.dantekelly.com",
    src: DanteIcon,
    name: "Portfolio",
    year: "5 mins ago",
    alt: "Dante Icon",
    id: "1",
  },
  {
    href: "https://www.dantekelly.com",
    src: RocketIcon,
    name: "Zero to Prod (API)",
    year: "5 mins ago",
    alt: "Dante Icon",
    id: "2",
  },
];
const staticSocialMediaItems: ListItemProps[] = [
  {
    href: "https://www.dantekelly.com",
    src: LinkedInIcon,
    name: "LinkedIn",
    alt: "Dante Icon",
    id: "1",
  },
  {
    href: "https://www.dantekelly.com",
    src: GithubIcon,
    name: "GitHub",
    alt: "Dante Icon",
    id: "1",
  },
  {
    href: "https://www.dantekelly.com",
    src: TwitterIcon,
    name: "Twitter",
    alt: "Dante Icon",
    id: "1",
  },
];

interface ListProps {
  items: ListItemProps[];
  title: string;
}

const List = ({ title, items }: ListProps) => (
  <div>
    <h3 className="mb-[10px] text-sm font-medium uppercase text-slate-400">
      {title}
    </h3>
    <ul className="space-y-[8px]">
      {items.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  </div>
);

export default function Aside({ isMobile }: HeaderProps) {
  return (
    <aside
      className={clsx(
        " bg-slate-900 px-[24px] py-[24px] lg:px-[48px]",
        isMobile && "my-5",
        !isMobile &&
          "no-scrollbar sticky top-[90px] mt-[90px] h-[calc(100vh_-_90px)] w-[400px] overflow-y-scroll scroll-smooth border-l border-slate-600",
      )}
    >
      <p className="text-slate-50">
        Below you will find a collection of my projects and experiments that I’m
        able to share freely.
      </p>
      <div className="mt-[48px] flex flex-col gap-[36px]">
        <List title="Top Professional Projects" items={staticProjectItems} />
        <List title="Experiments" items={staticExperimentItems} />
        <List title="Social Media" items={staticSocialMediaItems} />
      </div>
    </aside>
  );
}
