import client from "~/lib/octokit/client";

export const getLastCommitDate = async (
  repo: string,
  owner: string,
): Promise<string> => {
  try {
    const { data } = await client.request(
      `GET /repos/${owner}/${repo}/commits`,
      {
        owner,
        repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
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
};
