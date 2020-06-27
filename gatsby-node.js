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
            }
          }
        }
      }
    `
  );

  results.data.allShopifyProduct.edges.forEach(({ node }) => {
    const { id, handle } = node;
    createPage({
      path: `/products/${handle}`,
      component: path.resolve('src/templates/single-product-template.tsx'),
      context: {
        id,
        handle,
      },
    });
  });
};
