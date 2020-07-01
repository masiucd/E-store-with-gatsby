import React, { ReactElement } from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { BtnPrimary, MyLink } from '../styled/Buttons';
import { handleFlex } from '../../utils/styled/flex';
import { useProductState } from '../../context/product/ProductProvider';
interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject | IFluidObject[] | undefined;
    };
  };
}

interface Props {
  onData: {
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
  className: string;
}

function ProductCategory({ onData, className }: Props): ReactElement {
  const {
    title,
    handle,
    productType,
    images,
    priceRange: {
      maxVariantPrice: { amount, currencyCode },
    },
  } = onData;

  const { productCategories } = useProductState();

  return (
    <div className={className}>
      <Img fluid={images[0].localFile.childImageSharp.fluid} alt={title} />
      <div className="body">
        <h3>{title}</h3>
        <h3>
          {amount} - {currencyCode}
        </h3>
      </div>
      <div className="footer">
        <MyLink dark={true.toString()} to={`/products/${handle}`}>
          {title}
        </MyLink>
      </div>
    </div>
  );
}

export default styled(ProductCategory)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  ${props => props.theme.shadow.elevations[2]};
  .body {
    ${handleFlex('column', 'center', 'center')};
    h3 {
      text-transform: capitalize;
      &:nth-child(1) {
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .footer {
    ${handleFlex('column', 'space-evenly', 'center')};
    ${MyLink} {
      margin: 1rem 0;
      padding: 0;
    }
  }
`;
