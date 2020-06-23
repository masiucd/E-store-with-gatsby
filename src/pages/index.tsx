import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';

interface Product {
  id: string;
  name: string;
  description: string;
}
interface Node {
  node: Product;
}
interface Props {
  products: {
    edges: Array<Node>;
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  console.log(data.products.edges);
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {data.products.edges.map(({ node }) => {
        return <h3 key={node.id}>{node.name}</h3>;
      })}
    </>
  );
};

export const PAGE_QUERY = graphql`
  {
    products: allStripeProduct {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;

export default IndexPage;
