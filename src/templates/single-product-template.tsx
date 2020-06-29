import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import SingleProduct from '../components/product/SingleProduct';
import { IFluidObject } from 'gatsby-background-image';

interface Variant {
  sku: string;
  title: string;
  price: string;
  priceV2: {
    amount: string;
    currencyCode: string;
  };
  image: {
    localFile: {
      childImageSharp: {
        fluid: IFluidObject;
      };
    };
  };
}

interface Props {
  shopifyProduct: {
    title: string;
    description: string;
    shopifyId: string;
    createdAt: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    vendor: string;
    productType: string;
    tags: string[];
    variants: Variant[];
  };
}

const SingleProductTemplate: React.FC<PageProps<Props>> = ({ data }) => {
  const { shopifyProduct } = data;
  return (
    <Layout>
      <SingleProduct onShopifyProduct={shopifyProduct} />
    </Layout>
  );
};

export const PRODUCTS_QUERY = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      shopifyId
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
        sku
        title
        price
        priceV2 {
          amount
          currencyCode
        }
        image {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default SingleProductTemplate;
