import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/SEO/Seo';
import FeatureProducts from '../components/home/FeatureProducts';
import Hero from '../components/elements/Hero';
import Title from '../components/elements/Title';

interface Props {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {
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

      <FeatureProducts />
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
  }
`;

export default IndexPage;
