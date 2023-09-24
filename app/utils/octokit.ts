import { cache } from "react";
import dayjs from "dayjs";

import client from "~/lib/octokit/client";
import { type ListItemProps } from "~/components/sections/details";

export const revalidate = 1000 * 60 * 15; // revalidate the data at most every hour

export const getLastCommitDateAPI = cache(
  async (repo: string, owner: string): Promise<string> => {
    console.log("DEBUG GETTING LAST COMMIT");
    try {
      const { data } = await client.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner,
          repo,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
          next: { revalidate },
        },
      );
      const lastCommit = data[0];

      if (!lastCommit?.commit?.committer?.date) {
        throw new Error("No commit date found");
      }

      return lastCommit.commit.committer.date;
    } catch (error) {
      console.error("Error fetching the last commit date:", error);
      throw error;
    }
  },
);

export async function getLastCommitDate(
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
      item.lastUpdated = await getLastCommitDateAPI(repo, username);
    } catch (e) {
      console.error(e);
    }
  }

  return items;
}

export const getTimeDifference = cache((date: string): string => {
  const now = dayjs();

  return now.diff(date, "second").toString();
});
