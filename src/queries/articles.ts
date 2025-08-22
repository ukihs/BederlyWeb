// src/queries/articles.ts
const ARTICLES_QUERY = /* GraphQL */ `
  query Articles {
    posts(first: 20) {
      nodes {
        id
        databaseId
        title
        excerpt
        content
        slug
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
  }
`;
export default ARTICLES_QUERY;
