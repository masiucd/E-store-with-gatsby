import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import About from '../components/about';
import Title from '../components/elements/Title';

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
}

const AboutPage: React.FC<PageProps<Query>> = ({ data }) => {
  return (
    <Layout>
      <Page>
        <Title
          mainTitle={data.site.siteMetadata.title}
          secondaryTitle="About us"
          className="about-title"
          textColor="#333"
        />
        <About aboutContent={data.site.siteMetadata.aboutUs} />
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
  }
`;

export default AboutPage;
