// src/queries/articleBySlug.ts
export default /* GraphQL */ `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      content
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            sizes {
              name
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
