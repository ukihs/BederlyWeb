// ดึงโพสต์ที่อยู่ในหมวด products (สินค้า)
const PRODUCTS_QUERY = /* GraphQL */ `
  query ProductsPage {
    posts(where: { categoryName: "products" }, first: 12) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
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
    }
  }
`;
export default PRODUCTS_QUERY;
