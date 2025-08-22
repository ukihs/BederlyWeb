// src/queries/articleBySlug.ts
const ARTICLE_BY_SLUG = /* GraphQL */ `
  query ArticleBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      content
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            sizes {
              name
              sourceUrl
              width
              height
            }
          }
        }
      }
    }
  }
`;
export default ARTICLE_BY_SLUG;
