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
  variants: Array<Price>;
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
      <h3>Popular Products</h3>
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
  padding: 2rem 1rem;
  width: 100%;
  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: ${({ theme }) => theme.colors.primary} 2px solid;
  }
`;
const StyledFeatureProducts = styled.section`
  padding: 2rem;
  width: 100%;
  ${handleFlex('row', 'space-evenly', 'center')};
  margin: 4rem auto;
  border: 2px solid red;
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
          variants {
            price
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
