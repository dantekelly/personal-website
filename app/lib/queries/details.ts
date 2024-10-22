import { defineQuery } from "next-sanity";

// Export the detailsFragment
export const detailsFragment = `
  // Add the fields from your detailsFragment here
`;

export const detailsQuery = defineQuery(`
	*[_type == 'details' && _id == 'details'][0]{
	    ${detailsFragment}
	}
`);
