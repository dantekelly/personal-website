import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
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
`);
