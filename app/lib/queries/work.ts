import { groq } from "next-sanity";

export const workQuery = groq`
	*[_type == "work"]
`;
