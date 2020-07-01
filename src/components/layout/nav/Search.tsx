import * as React from 'react';
import { InputStyles } from '../../styled/Input';
import styled from 'styled-components';
import { handleFlex } from '../../../utils/styled/flex';
import Img from 'gatsby-image';
import {
  useSearchState,
  useSearchDispatch,
} from '../../../context/search/SearchProvider';
import { graphql, useStaticQuery } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';
import ProductShowCase from './ProductShowCase';
import { below } from '../../../utils/styled/media';
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

const SearchContainer = styled.div`
  ${handleFlex('column', 'center', 'center')};
  position: relative;
  width: 50%;
  ${below.medium`
    margin-top: 3rem;
    margin-right-auto;
    width: 70%;
  `}
`;

const InputWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
  ${handleFlex('row', 'flex-start', 'center')};
  ${InputStyles} {
    margin: 0 auto;
    border-radius: 0.5rem;
    font-size: 16px;
    flex: 1;
    &::placeholder {
      text-transform: capitalize;
      text-align: center;
    }
  }
`;

const Box = styled.div`
  position: relative;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
  width: 54px;
  border-radius: 0.5rem;
  height: calc(40px - 4px);
  padding: 0.8rem 0.6rem;
  cursor: pointer;
  ${handleFlex('row', 'center', 'center')};
  font-size: 2.7rem;
  transition: ${({ theme }) => theme.transition.secondaryTransition};
  &:active {
    position: relative;
    top: 6px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

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
