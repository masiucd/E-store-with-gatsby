import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import { IFluidObject } from 'gatsby-background-image';

import styled from 'styled-components';
import Title from '../components/elements/Title';

import ProductGrid from '../components/product/ProductsGrid';

interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

interface Node {
  node: {
    title: string;
    handle: string;
    productType: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: Array<ImgData>;
  };
}

interface Query {
  products: {
    edges: Array<Node>;
  };
}

const ProductPage: React.FC<PageProps<Query>> = ({ data }) => {
  const {
    products: { edges },
  } = data;

  return (
    <Layout>
      <StyledAbout>
        <Title
          mainTitle="Products List"
          className="Products"
          textCenter
          textColor="#333"
          secondaryTitle="Find your style"
        />
        <ProductGrid onEdges={edges} />
      </StyledAbout>
    </Layout>
  );
};

const StyledAbout = styled(Page)`
  width: 80vw;
`;

export const PRODUCT_PAGE_QUERY = graphql`
  {
    products: allShopifyProduct {
      edges {
        node {
          title
          handle
          productType
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 600, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProductPage;
