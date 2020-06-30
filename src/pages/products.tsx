import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import { IFluidObject } from 'gatsby-background-image';
import ProductCategory from '../components/product/ProductCategory';
import styled from 'styled-components';
import Title from '../components/elements/Title';
import { above } from '../utils/styled/media';
import FilterBar from '../components/product/FilterBar';

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
        <FilterBar className="filterBar" onEdges={edges} />
        <ProductsGrid>
          {edges.map(({ node }) => (
            <ProductCategory
              key={node.handle}
              onData={node}
              className={node.title}
            />
          ))}
        </ProductsGrid>
      </StyledAbout>
    </Layout>
  );
};

const StyledAbout = styled(Page)`
  width: 80vw;
`;

const ProductsGrid = styled.section`
  margin: 2rem auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  grid-template-rows: auto;
  height: 100%;

  ${above.large`
    grid-template-columns: repeat(3, 1fr);
  `}
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
