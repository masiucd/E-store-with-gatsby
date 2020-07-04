import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import Checkout from '../components/checkout/Checkout';

interface Props {}

const CheckoutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Wrapper>
        <Checkout />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  margin: 10rem auto;
`;

export default CheckoutPage;
