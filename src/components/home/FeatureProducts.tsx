import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';

import { handleFlex } from '../../utils/styled/flex';
import { graphql, useStaticQuery } from 'gatsby';
import FeatureProductItem from './FeatureProductItem';
import { below } from '../../utils/styled/media';

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

const Wrapper = styled.div`
  ${handleFlex('column', 'center', 'center')};
  width: 100%;
  margin: 3rem auto 1rem auto;

  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: ${({ theme }) => theme.colors.primary} 2px solid;
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
const StyledFeatureProducts = styled.section`
  padding: 2rem;
  width: 100%;
  ${handleFlex('row', 'space-evenly', 'center')};
  margin: 4rem auto;

  ${below.medium`
    ${handleFlex('column', 'center', 'center')};
  `}
`;

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
