import Image from "next/image";
import clsx from "clsx";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
import { getLastCommitDate as getLastCommitApi } from "~/utils/octokit";

interface ListItemProps {
  alt: string;
  githubLink?: string;
  href: string;
  id: string;
  isExperiment?: boolean;
  lastUpdated?: string;
  name: string;
  src: string | StaticImport;
}

const ListItem = ({
  href,
  name,
  src = BlankIcon,
  alt,
  lastUpdated,
  isExperiment,
}: ListItemProps) => {
  let formattedYear;

  if (lastUpdated && !isExperiment) {
    if (lastUpdated.includes("Ongoing") || lastUpdated.includes("ago")) {
      formattedYear = <p className="text-green-400">{lastUpdated}</p>;
    } else {
      formattedYear = <p className="text-blue-400">{lastUpdated}</p>;
    }
  }

  if (isExperiment) {
    // If time is over one week, show an orange date
    if (dayjs(lastUpdated).isBefore(dayjs().subtract(1, "year"))) {
      formattedYear = (
        <p className="text-slate-500">{dayjs(lastUpdated).fromNow()}</p>
      );
    } else if (dayjs(lastUpdated).isBefore(dayjs().subtract(1, "month"))) {
      formattedYear = (
        <p className="text-orange-400">{dayjs(lastUpdated).fromNow()}</p>
      );
    } else if (dayjs(lastUpdated).isBefore(dayjs().subtract(1, "week"))) {
      formattedYear = (
        <p className="text-blue-400">{dayjs(lastUpdated).fromNow()}</p>
      );
    } else {
      formattedYear = (
        <p className="text-green-400">{dayjs(lastUpdated).fromNow()}</p>
      );
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
          {lastUpdated ? (
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
          if (a.lastUpdated && b.lastUpdated) {
            if (a.lastUpdated.includes("Ongoing")) {
              return -1;
            } else if (b.lastUpdated.includes("Ongoing")) {
              return 1;
            }

            return b.lastUpdated.localeCompare(a.lastUpdated);
          }

          return 0;
        })
        .map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
    </ul>
  </div>
);

async function getLastCommitDate(
  items: ListItemProps[],
  username: string,
): Promise<ListItemProps[]> {
  for (const item of items) {
    if (!item.githubLink) {
      continue;
    }

    const trimmedUrl = item.githubLink.endsWith("/")
      ? item.githubLink.slice(0, -1)
      : item.githubLink;
    const repo = trimmedUrl.split("/").pop() ?? "";

    if (!repo) {
      continue;
    }

    try {
      item.lastUpdated = await getLastCommitApi(repo, username);
    } catch (e) {
      console.error(e);
    }
  }

  return items;
}

const Lists = async () => {
  const siteSettings =
    await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
  const projects = await sanityClient.fetch<Project[]>(projectQuery);

  dayjs.extend(relativeTime);

  const social = siteSettings?.socialFields ?? {};
  const githubUser: string = siteSettings?.githubUser ?? "";

  const socialMediaItems: ListItemProps[] = Object.keys(social).reduce(
    (acc: ListItemProps[], key) => {
      switch (key) {
        case "linkedIn":
          acc.push({
            href: social[key] ?? "#",
            src: LinkedInIcon,
            name: "LinkedIn",
            alt: "LinkedIn",
            id: key,
          });
          break;
        case "github":
          acc.push({
            href: social[key] ?? "#",
            src: GithubIcon,
            name: "GitHub",
            alt: "GitHub",
            id: key,
          });
          break;
        case "twitter":
          acc.push({
            href: social[key] ?? "#",
            src: TwitterIcon,
            name: "Twitter",
            alt: "Twitter",
            id: key,
          });
          break;
        default:
          break;
      }
      return acc;
    },
    [],
  );

  const formattedProjects: ListItemProps[] = projects.map((project) => {
    const { title, _id, href, image, isExperiment, lastUpdated, githubLink } =
      project;
    return {
      alt: title,
      id: _id,
      name: title,
      href,
      src: urlForImage(image).height(100).width(100).url(),
      isExperiment,
      lastUpdated,
      githubLink,
    };
  });
  const experimentItems = formattedProjects.filter(
    (project) => project.isExperiment,
  );
  const projectItems = formattedProjects.filter(
    (project) => !project.isExperiment,
  );

  const formattedExperimentItems = await getLastCommitDate(
    experimentItems,
    githubUser,
  );

  return (
    <>
      <List title="Top Professional Projects" items={projectItems} />
      <List title="Experiments" items={formattedExperimentItems} />
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
