import { defineQuery } from "next-sanity";

export const projectQuery = defineQuery(`
	*[_type == "project"]{
      _id,
      title,
      href,
      lastUpdated,
      image,
      isExperiment,
      githubLink
    }
`);
