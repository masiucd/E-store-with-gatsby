import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';

import Layout, { Page } from '../components/layout';
import Seo from '../components/SEO/Seo';
import FeatureProducts from '../components/home/FeatureProducts';
import Hero from '../components/elements/Hero';
import Title from '../components/elements/Title';
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
  site: {
    siteMetadata: {
      title: string;
    };
  };
  products: {
    edges: Node[];
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {
    products: { edges },
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout>
      <Seo title="Masiu's fits" description="Home page" />
      <Hero className="Main hero" isLarge>
        <Title className="Home__Title" mainTitle={title} needCta />
      </Hero>
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
    site {
      siteMetadata {
        title
      }
    }
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
