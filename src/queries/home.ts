// src/queries/home.ts - ปรับปรุง GraphQL Query
const HOME_QUERY = /* GraphQL */ `
  query HomeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        
        # === ACF Hero Fields ===
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

        # === ACF Smart Bed Fields ===
        smartbed {
          smartbedTitle
          smartbedSub
          smartbedImage {
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