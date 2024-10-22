import { groq } from "next-sanity";

export const workQuery = groq`
	*[_type == "work"]{
      _id,
      title,
      image,
      isExperiment,
      svg
    }
`;
