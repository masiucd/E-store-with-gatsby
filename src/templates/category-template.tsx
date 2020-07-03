import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import { IFluidObject } from 'gatsby-background-image';
import Img, { GatsbyImageProps } from 'gatsby-image';
import styled from 'styled-components';
import ProductTypeItem from '../components/product_type/ProductTypeItem';

interface SelectOption {
  name: string;
  value: string;
}
interface Variant {
  price: string;
  image: {
    id: string;
    localFile: {
      childImageSharp: {
        fluid: IFluidObject | any;
      };
    };
  };
  requiresShipping: boolean;
  selectedOptions: Array<SelectOption>;
  weight: number;
}
interface Node {
  node: {
    shopifyId: string;
    title: string;
    description: string;
    tags: string[];
    variants: Array<Variant>;
  };
}
interface Props {
  allShopifyProduct: {
    edges: Array<Node>;
  };
}

const CategoryTemplate: React.FC<PageProps<Props>> = ({ data }) => {
  const {
    allShopifyProduct: { edges },
  } = data;

  return (
    <Layout>
      <Page>
        <Grid>
          {edges.map(({ node }) => (
            <ProductTypeItem key={node.shopifyId} data={node} />
          ))}
        </Grid>
      </Page>
    </Layout>
  );
};

const Page = styled.section`
  width: 70vmax;
  border: 2px solid blue;
  margin: 12rem auto;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 6rem auto;
  border: 2px solid red;
  height: 100%;
  grid-gap: 1.5rem;
`;

export const PAGE_QUERY = graphql`
  query($productType: String!) {
    allShopifyProduct(
      filter: { productType: { eq: $productType }, variants: {} }
    ) {
      edges {
        node {
          shopifyId
          title
          description
          tags

          variants {
            price
            image {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            requiresShipping
            selectedOptions {
              name
              value
            }
            weight
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
