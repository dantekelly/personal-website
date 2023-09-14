import { groq } from "next-sanity";

export const projectQuery = groq`
	*[_type == "project"]{
      _id,
      title,
      href,
      lastUpdated,
      image,
      isExperiment,
      githubLink
    }
`;
