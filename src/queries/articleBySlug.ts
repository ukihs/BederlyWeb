const ARTICLE_BY_SLUG = /* GraphQL */ `
  query ARTICLE_BY_SLUG($slug: String!, $lang: LanguageCodeFilterEnum!) {
    posts(where: { name: $slug, language: $lang }, first: 1) {
      nodes {
        title
        slug
        excerpt
        content
        language { code }
        translations { slug language { code } }
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails { sizes { name sourceUrl } }
          }
        }
      }
    }
  }
`;
export default ARTICLE_BY_SLUG;
