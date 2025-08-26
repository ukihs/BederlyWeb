export default /* GraphQL */ `
  query PostSlugs($first: Int = 100) {
    posts(first: $first) { nodes { slug } }
  }
`;
