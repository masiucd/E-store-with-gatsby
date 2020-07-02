import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import { Wrapper, StyledFeatureProducts } from './FeautureStyles';
import { graphql, useStaticQuery } from 'gatsby';
import FeatureProductItem from './FeatureProductItem';

interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface Price {
  price: string;
}
interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  publishedAt: string;
  images: Array<ImgData>;
}
interface Node {
  node: Product;
}

interface Query {
  products: {
    edges: Node[];
  };
}

const FeatureProducts: React.FC = () => {
  const {
    products: { edges },
  } = useStaticQuery<Query>(FEATURE_QUERY);

  return (
    <Wrapper>
      <h3>
        Popular <span>Products</span>
      </h3>
      <StyledFeatureProducts>
        {edges.map(({ node }) => (
          <FeatureProductItem key={node.id} productData={node} />
        ))}
      </StyledFeatureProducts>
    </Wrapper>
  );
};

const FEATURE_QUERY = graphql`
  {
    products: allShopifyProduct(limit: 3) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          publishedAt(formatString: "YYYY do, MMMM")
          images {
            id
            localFile {
              childImageSharp {
                fixed(width: 350, height: 400) {
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

export default FeatureProducts;
