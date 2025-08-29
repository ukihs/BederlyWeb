// src/queries/home.ts
import { gql } from "graphql-request";

const HOME_QUERY = gql`
  query HomeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title

        # === HERO ===
        hero {
          heroTitle
          heroSubtitle
          heroImage {
            node {
              altText
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

        # === PROCESS / PRODUCT SAMPLE ===
        process {
          product1Name
          product1Desc
          product1Img {
            node {
              altText
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

        # === ABOUT ===
        about {
          aboutTitle
          aboutBody
          aboutYoutubeUrl
        }

        # === CONTACT ===
        contact {
          contactTitle
          contactIntro
          contactEmail
          contactPhone
        }
      }
    }
  }
`;

export default HOME_QUERY;
