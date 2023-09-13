import Image from "next/image";
import clsx from "clsx";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

import { Badge } from "~/components/ui/badge";
import { sanityClient, urlForImage } from "~/lib/sanity/client";
import { projectQuery, siteSettingsQuery } from "~/lib/queries";
import { type SiteSettings } from "~/types/site-settings";
import { type Project } from "~/types/project";

import ArrowRightIcon from "@/icons/icon-arrow-right.png";
import BlankIcon from "@/icons/icon-blank.png";
import GithubIcon from "@/icons/icon-github.png";
import LinkedInIcon from "@/icons/icon-linkedin.png";
import TwitterIcon from "@/icons/icon-twitter.png";

interface ListItemProps {
  href: string;
  src: string | StaticImport;
  name: string;
  alt: string;
  year?: string;
  id: string;
  isExperiment?: boolean;
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
      <a target="_blank" href={href}>
        <div className="flex flex-1 items-center">
          <div className="flex flex-1 items-center gap-[9px]">
            <Image src={src} alt={alt} width={20} height={20} />
            <p className="text-slate-50">{name}</p>
          </div>
          {year ? (
            <Badge>{formattedYear}</Badge>
          ) : (
            <Image
              src={ArrowRightIcon}
              alt="Arrow Right"
              width={20}
              height={20}
            />
          )}
        </div>
      </a>
    </li>
  );
};

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
      {items
        .sort((a, b) => {
          if (a.year && b.year) {
            if (a.year.includes("Ongoing") || a.year.includes("ago")) {
              return -1;
            } else if (b.year.includes("Ongoing") || b.year.includes("ago")) {
              return 1;
            }

            return b.year.localeCompare(a.year);
          }

          return 0;
        })
        .map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
    </ul>
  </div>
);

const Lists = async () => {
  const siteSettings =
    await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
  const projects = await sanityClient.fetch<Project[]>(projectQuery);

  const social = siteSettings?.socialFields ?? {};

  if (social._type) delete social._type;

  const socialMediaItems: ListItemProps[] = Object.keys(social).map((key) => {
    switch (key) {
      case "linkedIn":
        return {
          href: social[key] ?? "#",
          src: LinkedInIcon,
          name: "LinkedIn",
          alt: "LinkedIn",
          id: key,
        };
      case "github":
        return {
          href: social[key] ?? "#",
          src: GithubIcon,
          name: "GitHub",
          alt: "GitHub",
          id: key,
        };
      case "twitter":
        return {
          href: social[key] ?? "#",
          src: TwitterIcon,
          name: "Twitter",
          alt: "Twitter",
          id: key,
        };
      default:
        return {
          href: "#",
          src: BlankIcon,
          name: key,
          alt: key,
          id: key,
        };
    }
  });

  const formattedProjects: ListItemProps[] = projects.map((project) => ({
    alt: project.title,
    id: project._id,
    name: project.title,
    href: project.href,
    src: urlForImage(project.image).height(100).width(100).url(),
    isExperiment: project.isExperiment,
    year: project.lastUpdated,
  }));

  const experimentItems = formattedProjects.filter(
    (project) => project.isExperiment,
  );
  const projectItems = formattedProjects.filter(
    (project) => !project.isExperiment,
  );

  return (
    <>
      <List title="Top Professional Projects" items={projectItems} />
      <List title="Experiments" items={experimentItems} />
      <List title="Social Media" items={socialMediaItems} />
    </>
  );
};

interface DetailsProps {
  layout?: boolean;
}

export default function Details({ layout }: DetailsProps) {
  return (
    <div
      className={clsx(
        "bg-slate-900 px-[24px] py-[24px] lg:px-[48px]",
        !layout && "md:hidden",
      )}
    >
      <p className="text-slate-50">
        Below you will find a collection of my projects and experiments that I’m
        able to share freely.
      </p>
      <div className="mt-[48px] flex flex-col gap-[36px]">
        <Lists />
      </div>
    </div>
  );
}
