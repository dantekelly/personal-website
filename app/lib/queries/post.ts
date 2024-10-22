import { defineQuery } from "next-sanity";
import { detailsFragment } from "./fragments";

export const postQuery = defineQuery(`
	{
		"post": *[_type == 'post' && slug.current == $slug][0] {
			_id,
			title,
			slug,
			meta,
			publishedAt,
			keywords,
			excerpt,
			featuredImage,
			tag,
			content
		},
		"details": *[_type == 'details' && _id == 'details'][0]{
			${detailsFragment}
		}
	}
`);

export const postsQuery = defineQuery(`
	*[_type == 'post' && !(_id in path("drafts.**")) && defined(slug.current)]{ ..., tag-> } | order(_createdAt desc)[0...$limit] {
	    _id,
		title,
		slug,
		meta,
		publishedAt,
		keywords,
		excerpt,
		featuredImage,
		tag {
		    title
		},
		content
	}
`);

export const allPostSlug = defineQuery(`
	*[_type == 'post' && !(_id in path("drafts.**")) && defined(slug.current)][].slug.current
`);
