import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
	*[_id == "siteSettings"][0] {
	    socialFields {
          twitter,
          facebook,
          instagram,
          github,
          linkedIn
        },
	    githubUser
	}
`;
