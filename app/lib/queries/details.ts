import { groq } from "next-sanity";
import { detailsFragment } from "~/lib/queries/fragments";

export const detailsQuery = groq`
	*[_type == 'details' && _id == 'details'][0]{
	    ${detailsFragment}
	}
`;
