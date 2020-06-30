import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
interface Props {}

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </Layout>
  );
};
export default AboutPage;
