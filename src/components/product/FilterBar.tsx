import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IFluidObject } from 'gatsby-background-image';
import { handleFlex } from '../../utils/styled/flex';

import ProductButton from './ProductButton';
import {
  useProductDispatch,
  useProductState,
} from '../../context/product/ProductProvider';
import { above, below } from '../../utils/styled/media';

interface Node {
  node: {
    title: string;
    handle: string;
    productType: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: Array<ImgData>;
  };
}

interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

interface Props {
  className: string;
  onEdges: Array<Node>;
}

function FilterBar({ className, onEdges }: Props): ReactElement {
  const { products } = useProductState();
  // Get unique product types , array
  const removeDuplicates = (): string[] => {
    let types = onEdges.map(x => x.node.productType);
    return types.filter((item, index) => types.indexOf(item) === index);
  };
  const [productText, setProductText] = React.useState<string>('');

  const dispatch = useProductDispatch();

  const sendProductTitleToState = (text: string): void => {
    setProductText(text);

    if (productText !== '') {
      dispatch({ type: 'SET_CURRENT_PRODUCT_TYPE', payload: productText });
    } else {
      dispatch({ type: 'CLEAR_CURRENT_PRODUCT_TYPE' });
    }
  };

  React.useEffect(() => {
    if (products === []) {
      setProductText('');
    }
  }, [productText]);

  return (
    <div className={className}>
      <div className="inputs">
        {removeDuplicates().map(title => (
          <button
            key={title}
            disabled={title === productText}
            type="button"
            onClick={() => {
              sendProductTitleToState(title);
            }}
          >
            {title}
          </button>
        ))}
        <button
          type="button"
          onClick={() => dispatch({ type: 'CLEAR_CURRENT_PRODUCT_TYPE' })}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default styled(FilterBar)`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem 0.5rem;
  display: block;
  position: relative;
  transition: ${props => props.theme.transition.mainTransition};
  &:hover {
    ${({ theme: { shadow } }) => shadow.elevations[1]};
  }
  .inputs {
    ${handleFlex('column', 'center', 'center')};

    ${above.medium`
      ${handleFlex('row', 'center', 'center')};
    `}
  }
  button {
    padding: 0.5rem 0.9rem;
    margin: 0 1rem;
    ${props => props.theme.shadow.elevations[2]};
    cursor: pointer;
    transition: ${props => props.theme.transition.mainTransition};
    border: 0;
    font-weight: 800;
    font-size: 2rem;
    width: 12rem;
    background: transparent;
    &:active {
      position: relative;
      top: 7px;
    }
    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.text};
    }
    ${below.medium`
      margin: 1rem;
    `}
  }
`;
