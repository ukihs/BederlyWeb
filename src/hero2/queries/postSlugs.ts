const POST_SLUGS = /* GraphQL */ `
  query POST_SLUGS($lang: LanguageCodeFilterEnum!, $first: Int = 100) {
    posts(where: { language: $lang }, first: $first) {
      nodes { slug }
    }
  }
`;
export default POST_SLUGS;
