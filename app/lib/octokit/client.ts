import { Octokit } from "octokit";

const client = new Octokit({ auth: process.env.GIT_PAT });

export default client;
