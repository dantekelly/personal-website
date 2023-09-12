import { groq } from "next-sanity";

export const projectQuery = groq`
	*[_type == "project"]
`;
