export const grid = `
	_type == 'grid' => {
		...,
		items[] {
			...,
			ctas[] {
				...,
				link->{link, slug}
			}
		}
	}
`;

export const spacer = `
	_type == 'spacer' => {
		...
	}
`;

export const blockContent = `
	_type == 'blockContent' => {
		...
	}
`;

export const mainImage = `
	_type == 'mainImage' => {
		...
	}
`;

export const heroFragment = `
  _key,
  _type,
  body,
  featuredImage {
    _type,
    alt,
    asset
  },
  title
`;
export const metaFieldsFragment = `
  _type,
  metaDescription,
  metaTitle,
  openGraphDescription,
  openGraphImage {
    _type,
    asset
  },
  openGraphTitle
`;
export const worksFragment = `
    _type == "works" => {
      _key,
      _type,
      title,
      "works": *[_type == "work"]{
        _id,
        title,
        image
      }
  }
`;

export const project = `
	_type == "project" => {
          _id,
          title,
          href,
          lastUpdated,
          image,
          isExperiment,
          githubLink
        }
`;
export const socialField = `
	_type == "socialField" => {
	      _id,
          title,
          href,
          image
        }
`;

export const detailsFragment = `
    body,
    "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0] {
      githubUser
    },
    content[] {
      title,
      content[] -> {
        ${project},
        ${socialField}
      }
    }
`;

export const detailsSectionFragment = `
  _key,
  _type,
  details-> {
    ${detailsFragment}
  }
`;

export const blogsSectionFragment = `
  _key,
  _type,
  title,
  "blogs": *[_type == 'post' && !(_id in path("drafts.**")) && defined(slug.current)]{
    _id,
    title,
    slug,
    meta,
    publishedAt,
    keywords,
    excerpt,
    featuredImage,
    "tag": tag->,
    content
  } | order(_createdAt desc)[0...3]
`;

export const contentFragment = `
  _type == "hero" => {
    ${heroFragment}
  },
  _type == "works" => {
    ${worksFragment}
  },
  _type == "detailsSection" => {
    ${detailsSectionFragment}
  },
  _type == "blogsSection" => {
    ${blogsSectionFragment}
  }
`;

/*
,
  _type == "detailsSection" => {
    ${detailsSectionFragment}
  },
  _type == "blogsSection" => {
    ${blogsSectionFragment}
  }

 */
