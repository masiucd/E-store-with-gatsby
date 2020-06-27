import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';

interface Props {}

const SingleProductTemplate: React.FC<PageProps<Props>> = ({ data }) => {
  return (
    <Layout>
      <Page>
        <h1>Hello</h1>
      </Page>
    </Layout>
  );
};

export const PRODUCTS_QUERY = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      createdAt(formatString: "YYYY MM do")
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      vendor
      productType
      tags
      variants {
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default SingleProductTemplate;
