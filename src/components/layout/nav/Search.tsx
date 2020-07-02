import * as React from 'react';
import { InputStyles } from '../../styled/Input';
import Img from 'gatsby-image';
import {
  useSearchState,
  useSearchDispatch,
} from '../../../context/search/SearchProvider';
import { graphql, useStaticQuery } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';
import ProductShowCase from './ProductShowCase';
import { SearchContainer, InputWrapper, Box } from './NavStyles';

interface Props {
  type?: string;
  placeholder?: string;
}

interface Product {
  id: string;
  title: string;
  handle: string;
}
interface Node {
  node: Product;
}

interface Query {
  searchIcon: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
  products: {
    edges: Array<Node>;
  };
}

const Search: React.FC<Props> = ({ type, placeholder }) => {
  const [text, setText] = React.useState<string>('');
  const { filteredResults } = useSearchState();
  const dispatch = useSearchDispatch();
  const {
    products: { edges },
    searchIcon: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery<Query>(SEARCH_QUERY);

  const searchProduct = (text: string) => {
    let filtered = edges.filter(({ node }) => {
      let regex = new RegExp(`${text}`, 'ig');
      return node.title.match(regex) || node.handle.match(regex);
    });

    dispatch({ type: 'SET_PRODUCTS', payload: filtered });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
    if (e.target.value !== '') {
      searchProduct(text);
    } else {
      dispatch({ type: 'CLEAR_FILTER' });
    }
  };

  React.useEffect(() => {
    if (filteredResults === []) {
      setText('');
    }
  }, [filteredResults]);

  return (
    <SearchContainer>
      <InputWrapper>
        <InputStyles
          type={type || 'text'}
          placeholder={placeholder || '..text'}
          value={text}
          onChange={handleChange}
        />
        <Box>
          <Img fixed={fixed} alt="Search icon" />
        </Box>
      </InputWrapper>
      <ProductShowCase />
    </SearchContainer>
  );
};

const SEARCH_QUERY = graphql`
  {
    searchIcon: file(relativePath: { eq: "search-icon.png" }) {
      childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    products: allShopifyProduct {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

export default Search;
