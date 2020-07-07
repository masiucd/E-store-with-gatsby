import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import About from '../components/about';
import Title from '../components/elements/Title';
import { IFluidObject } from 'gatsby-background-image';

interface Image {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}
interface Node {
  node: {
    shopifyId: string;
    title: string;
    images: Array<Image>;
  };
}

interface Query {
  site: {
    siteMetadata: {
      title: string;
      aboutUs: {
        title: string;
        content1: string;
        content2: string;
        content3: string;
      };
    };
  };
  allShopifyProduct: {
    edges: Node[];
  };
}

const AboutPage: React.FC<PageProps<Query>> = ({ data }) => {
  return (
    <Layout>
      <Page>
        <Title
          mainTitle={data.site.siteMetadata.title}
          secondaryTitle={data.site.siteMetadata.aboutUs.title}
          className="about-title"
          textColor="#333"
        />
        <About
          aboutContent={data.site.siteMetadata.aboutUs}
          onEdges={data.allShopifyProduct}
        />
      </Page>
    </Layout>
  );
};

export const ABOUT_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        aboutUs {
          title
          content1
          content2
          content3
        }
      }
    }
    allShopifyProduct(limit: 3) {
      edges {
        node {
          shopifyId
          title
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
