import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import { below } from '../../utils/styled/media';
interface Variant {
  sku: string;
  title: string;
  price: string;
  priceV2: {
    amount: string;
    currencyCode: string;
  };
  image: {
    localFile: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[];
      };
    };
  };
}

interface Props {
  data: {
    title: string;
    description: string;
    createdAt: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    vendor: string;
    productType: string;
    tags: string[];
    variants: Variant[];
  };
}

const Details: React.FC<Props> = ({ data }) => {
  const { title, description, variants, productType } = data;
  const [selectedVaraint, setSelectedVaraint] = React.useState<Variant>(
    variants[0]
  );

  return (
    <DetailsStyles>
      <div className="details-name">
        <h3>{title}</h3>
      </div>

      <div className="price">
        <strong>
          {selectedVaraint.priceV2.amount} 0{' '}
          {selectedVaraint.priceV2.currencyCode}
        </strong>
      </div>

      <div className="desc">
        <strong>
          <span>{productType}</span>
        </strong>
        <p>{description}</p>
      </div>

      <select
        className="sku-options"
        value={selectedVaraint.sku}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selected = variants.filter(
            variant => variant.sku === e.target.value
          );
          const [a] = selected;
          setSelectedVaraint(a);
        }}
      >
        {variants.map(variant => (
          <option key={variant.sku} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select>
    </DetailsStyles>
  );
};

const DetailsStyles = styled.div`
  padding: 3rem 1rem;
  ${handleFlex('column', 'center', 'center')};
  height: 100%;
  .details-name {
    h3 {
      padding: 1rem;
      font-size: 3.5rem;
      text-transform: capitalize;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  ${below.medium`
    margin-top: 12em;
  `}
`;

export default Details;
