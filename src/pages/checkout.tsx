import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout, { Page } from '../components/layout';

import Checkout from '../components/checkout/Checkout';
interface Props {}

const CheckoutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Page>
        <Checkout />
      </Page>
    </Layout>
  );
};
export default CheckoutPage;
