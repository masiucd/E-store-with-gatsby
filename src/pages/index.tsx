import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';

import Layout, { Page } from '../components/layout';
import Seo from '../components/SEO/Seo';
import FeatureProducts from '../components/home/FeatureProducts';
interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface Price {
  price: string;
}
interface Product {
  id: string;
  title: string;
  description: string;
  variants: Array<Price>;
  publishedAt: string;
  images: Array<ImgData>;
}
interface Node {
  node: Product;
}

interface Props {
  products: {
    edges: Node[];
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {
    products: { edges },
  } = data;

  return (
    <Layout>
      <Seo title="Masiu's fits" description="Home page" />
      <h1>Hi people</h1>
      <Page>
        {edges.map(({ node }) => (
          <FeatureProducts key={node.id} data={node} />
        ))}
      </Page>
    </Layout>
  );
};

export const PAGE_QUERY = graphql`
  {
    products: allShopifyProduct(limit: 3) {
      edges {
        node {
          id
          title
          description
          variants {
            price
          }
          publishedAt(formatString: "YYYY do, MMMM")
          images {
            id
            localFile {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
