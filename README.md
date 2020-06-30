# Gatsby Masiu's Fits

### E shop using Gatsby and Shopify API

[![Netlify Status](https://api.netlify.com/api/v1/badges/d374a159-9ee3-4b02-91a3-ee3053990fcb/deploy-status)](https://marcells-fits.netlify.app/)

This app is not using any finished layout ore template, it is built from scratch. Just using Shopify API end point to store the products.

``` bash
  git clone Project
```

``` bash
  cd into project
```

``` bash
  yarn/nm install
```

### Tools

* Gatsby
* Shopify
* Typescript
* React
* Graph QL

##### pages/index.tsx

``` jsx
import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';

import Layout, { Page } from '../components/layout';
import Seo from '../components/SEO/Seo';
import FeatureProducts from '../components/home/FeatureProducts';
import Hero from '../components/elements/Hero';
import Title from '../components/elements/Title';
interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject,
    },
  };
}

interface Price {
  price: string;
}
interface Product {
  id: string;
  title: string;
  description: string;
  variants: Array<Price>;
  publishedAt: string;
  images: Array<ImgData>;
}
interface Node {
  node: Product;
}

interface Props {
  site: {
    siteMetadata: {
      title: string,
    },
  };
  products: {
    edges: Node[],
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {
    products: { edges },
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout>
      <Seo title="Masiu's fits" description="Home page" />
      <Hero className="Main hero" isLarge>
        <Title className="Home__Title" mainTitle={title} />
      </Hero>
      <Page>
        {edges.map(({ node }) => (
          <FeatureProducts key={node.id} data={node} />
        ))}
      </Page>
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
    products: allShopifyProduct(limit: 3) {
      edges {
        node {
          id
          title
          description
          variants {
            price
          }
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
```
