// src/queries/articles.ts
import { gql } from "graphql-request";

const ARTICLES_QUERY = gql`
  query Articles($lang: LanguageCodeFilterEnum!, $first: Int!) {
    posts(
      first: $first
      where: { language: $lang, status: PUBLISH, orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            mediaDetails { sizes { name sourceUrl } }
          }
        }
      }
    }
  }
`;
export default ARTICLES_QUERY;
