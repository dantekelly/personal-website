import { groq } from "next-sanity";
import { contentFragment } from "./fragments";

export const pageQuery = groq`
	*[_type == 'page' && slug.current == $slug][0]{
	    title,
	    meta,
	    slug {
	        current
	    },
	    content[] {
	        ${contentFragment},
	    }
	}
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
