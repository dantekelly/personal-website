import { defineQuery } from "next-sanity";
import { contentFragment, detailsFragment } from "./fragments";

export const pageQuery = defineQuery(`
	{
		"page": *[_type == 'page' && slug.current == $slug][0]{
			title,
			meta,
			slug {
				current
			},
			content[] {
				${contentFragment},
			}
		},
		"details": *[_type == 'details' && _id == 'details'][0]{
			${detailsFragment}
		}
	}
`);

export const allPagesSlug = defineQuery(`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`);
