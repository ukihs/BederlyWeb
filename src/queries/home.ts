// src/queries/home.ts
const HOME_QUERY = /* GraphQL */ `
  query HomePage {
    page(id: "/", idType: URI) {
      title

      hero {
        heroTitle
        heroSubtitle
        heroImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              sizes { name sourceUrl width height }
            }
          }
        }
      }

      process {
        product1Name
        product1Desc
        product1Img {
          node {
            altText
            sourceUrl
            mediaDetails { sizes { name sourceUrl width height } }
          }
        }
      }

      about {
        aboutTitle
        aboutBody
        aboutYoutubeUrl
      }

      contact {
          contactTitle
          contactIntro
          contactEmail
          contactPhone
      }
    }
  }
`;
export default HOME_QUERY;
