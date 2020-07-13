import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { Page } from '../components/layout';
import Faq from '../components/faq';
import Title from '../components/elements/Title';
import styled from 'styled-components';
import { handleFlex } from '../utils/styled/flex';

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
      <FaqWrapper>
        <Title
          mainTitle={siteMetadata.title}
          secondaryTitle="Common Questions"
          className="faq-title"
          textColor="#333"
        />
        <Faq faqData={siteMetadata.faq} />
      </FaqWrapper>
    </Layout>
  );
};

const FaqWrapper = styled(Page)`
  ${handleFlex('column', 'center', 'center')};
  width: 90%;
`;

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
