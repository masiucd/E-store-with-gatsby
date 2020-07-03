import * as React from 'react';
import { CategoryListStyles } from './NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { handleObj, removeDuplicates } from '../../../utils/styled/helpers';

interface Props {}

interface Node {
  node: {
    shopifyId: string;
    handle: string;
    productType: string;
  };
}

interface Query {
  productsType: {
    edges: Node[];
  };
}

const CateGoryList: React.FC<Props> = () => {
  const {
    productsType: { edges },
  } = useStaticQuery<Query>(CATEGORY_LIST_QUERY);

  return (
    <CategoryListStyles>
      {removeDuplicates(edges).map(type => (
        <li key={type}>
          <Link to={`/products/category/${type}`}>{type}</Link>
        </li>
      ))}
    </CategoryListStyles>
  );
};

const CATEGORY_LIST_QUERY = graphql`
  {
    productsType: allShopifyProduct {
      edges {
        node {
          shopifyId
          handle
          productType
        }
      }
    }
  }
`;

export default CateGoryList;
