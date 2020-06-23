import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import Layout, { Page } from '../components/layout';
interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}
interface Product {
  id: string;
  title: string;
  description: string;
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
      <h1>Hi people</h1>
      <Page>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Img
              fixed={node.images[0].localFile.childImageSharp.fixed}
              alt={node.title}
            />
            <h3>{node.title}</h3>
          </div>
        ))}
      </Page>
    </Layout>
  );
};

export const PAGE_QUERY = graphql`
  {
    products: allShopifyProduct {
      edges {
        node {
          id
          title
          description
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
