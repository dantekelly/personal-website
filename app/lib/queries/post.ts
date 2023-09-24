import { groq } from "next-sanity";

export const postQuery = groq`
	*[_type == 'post' && slug.current == $slug][0] {
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
	}
`;

export const postsQuery = groq`
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
`;

export const allPostSlug = groq`
	*[_type == 'post' && !(_id in path("drafts.**")) && defined(slug.current)][].slug.current
`;
