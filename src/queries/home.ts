// src/queries/home.ts
import { gql } from "graphql-request";

const HOME_QUERY = gql`
  query HomeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title

        # === ACF Hero ===
        hero {
          heroTitle
          heroSubtitle
          heroImage {
            node {
              id
              altText
              sourceUrl
              mediaDetails {
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

export default HOME_QUERY;
