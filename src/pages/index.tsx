import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';

interface Props {
  products: {
    edges: any;
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  );
};

export default IndexPage;
