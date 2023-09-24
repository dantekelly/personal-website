import { groq } from "next-sanity";
import { blockContent, grid, mainImage, spacer } from "./fragments";

export const pageQuery = groq`
	*[_type == 'page' && slug.current == $slug][0] {
		...,
		content[] {
			${blockContent},
			${grid},
			${mainImage},
			${spacer}
		}
	}
`;

export const pageWithPostsQuery = groq`
	{
		"page": *[_type == 'page' && slug.current == $slug][0] {
			...,
			content[] {
				${blockContent},
				${grid},
				${mainImage},
				${spacer}
			}
		},
		"posts": *[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
	}
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
