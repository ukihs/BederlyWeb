// src/queries/home.ts
import { gql } from "graphql-request";

const HOME_QUERY = gql`
  query HomeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title

        # === ACF Hero Fields (ใช้ชื่อจาก ACF Settings) ===
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
                sizes {
                  name
                  width
                  height
                  sourceUrl
                }
              }
            }
          }
        }

        # === ACF Smart Bed Features (ใช้ชื่อจาก ACF Settings) ===
        smartbed {
          featuretitle
          featuresub
          featureimage {
            node {
              id
              altText
              sourceUrl
              mediaDetails {
                width
                height
                sizes {
                  name
                  width
                  height
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HOME_QUERY;