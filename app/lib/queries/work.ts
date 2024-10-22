import { defineQuery } from "next-sanity";

export const workQuery = defineQuery(`
	*[_type == "work"]{
      _id,
      title,
      image,
      isExperiment,
      svg
    }
`);
