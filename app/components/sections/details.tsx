import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Badge } from "~/components/ui/badge";
import { urlForImage } from "~/lib/sanity/client";
import {
  type Details as DetailsType,
  type DetailsInnerContent,
} from "~/types/sections/details";

import ArrowRightIcon from "@/icons/icon-arrow-right.png";
import BlankIcon from "@/icons/icon-blank.png";
import { getLastCommitDate as getLastCommitApi } from "~/utils/octokit";
import { PortableText } from "@portabletext/react";

const ListItem = ({
  href,
  title,
  image,
  lastUpdated,
  isExperiment,
}: DetailsInnerContent) => {
  let alt = image.alt;
  let imageSrc: StaticImageData | string = BlankIcon;

  if (image) {
    imageSrc = urlForImage(image.asset).width(20).height(20).url();
    alt = image.alt;
  }

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
            <Image src={imageSrc} alt={alt} width={20} height={20} />
            <p className="text-slate-50">{title}</p>
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
  items: DetailsInnerContent[];
  title: string;
}

const List = ({ title, items }: ListProps) => {
  return (
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
            <ListItem key={item._id} {...item} />
          ))}
      </ul>
    </div>
  );
};

interface ListsProps {
  data: DetailsType;
}

const Lists = async ({ data }: ListsProps) => {
  dayjs.extend(relativeTime);

  const { githubUser } = data.siteSettings;

  for (const section of data.content) {
    for (const item of section.content) {
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
        item.lastUpdated = await getLastCommitApi(repo, githubUser);
      } catch (e) {
        console.error(e);
      }
    }
  }

  return data?.content?.map((section, idx) => (
    <List key={idx} title={section.title} items={section.content} />
  ));
};

interface DetailsProps {
  layout?: boolean;
  data: DetailsType;
}

export default function DetailsComponent({ data, layout }: DetailsProps) {
  if (!data?.body?.text) {
    return null;
  }

  return (
    <div
      className={clsx(
        "bg-slate-900 px-[24px] py-[24px] lg:px-[48px]",
        !layout && "md:hidden",
      )}
    >
      <span className="text-slate-50">
        <PortableText value={data.body.text} />
      </span>
      <div className="mt-[48px] flex flex-col gap-[36px]">
        <Lists data={data} />
      </div>
    </div>
  );
}
