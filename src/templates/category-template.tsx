import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import { IFluidObject } from 'gatsby-background-image';
import { GatsbyImageProps } from 'gatsby-image';
import ProductTypeItem from '../components/product_type/ProductTypeItem';
import Title from '../components/elements/Title';
import { Grid, Page } from '../components/product_type/ProductStyles';

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
interface DataProps {
  allShopifyProduct: {
    edges: Array<Node>;
  };
}
interface PageContextProps {
  id: string;
  handle: string;
  productType: string;
}

const CategoryTemplate: React.FC<PageProps<DataProps, PageContextProps>> = ({
  data,
  pageContext,
}) => {
  const {
    allShopifyProduct: { edges },
  } = data;

  return (
    <Layout>
      <Page>
        <Title
          mainTitle={pageContext.productType}
          secondaryTitle="find your style"
          className="Category-title"
          textColor="#333"
        />
        <Grid>
          {edges.map(({ node }) => (
            <ProductTypeItem
              key={node.shopifyId}
              data={node}
              onHandle={pageContext.handle}
            />
          ))}
        </Grid>
      </Page>
    </Layout>
  );
};

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
                  fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
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
