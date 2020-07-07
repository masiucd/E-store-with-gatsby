import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import Faq from '../components/faq';
import Title from '../components/elements/Title';
import { FaqStyles } from '../components/faq/faqStyles';

interface FaqData {
  q: string;
  a: string;
}

interface Query {
  site: {
    siteMetadata: {
      title: string;
      faq: FaqData[];
    };
  };
}

const FaqPage: React.FC<PageProps<Query>> = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;
  return (
    <Layout>
      <FaqStyles>
        <Title
          mainTitle={siteMetadata.title}
          secondaryTitle="Common Questions"
          className="faq-title"
          textColor="#333"
        />
        <Faq faqData={siteMetadata.faq} />
      </FaqStyles>
    </Layout>
  );
};

export const PAGE_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        faq {
          q
          a
        }
      }
    }
  }
`;

export default FaqPage;
