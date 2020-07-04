const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(
    `
      {
        allShopifyProduct {
          edges {
            node {
              id
              handle
              productType
            }
          }
        }
      }
    `
  );

  results.data.allShopifyProduct.edges.forEach(({ node }) => {
    const { id, handle, productType } = node;
    createPage({
      path: `/products/${handle}`,
      component: path.resolve('src/templates/single-product-template.tsx'),
      context: {
        id,
        handle,
      },
    });
    createPage({
      path: `products/category/${productType}`,
      component: path.resolve('src/templates/category-template.tsx'),
      context: {
        id,
        productType,
        handle,
      },
    });
  });
};
