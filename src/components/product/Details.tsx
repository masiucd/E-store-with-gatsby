import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import { DetailsStyles } from './ProductStyles';

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
  let [first, last, ...rest] = title.split(' ');

  return (
    <DetailsStyles>
      <div className="details-name">
        <h3>
          {first} <span>{last}</span>{' '}
        </h3>
      </div>

      <div className="price">
        <strong>
          {selectedVaraint.priceV2.amount} 0{' '}
          {selectedVaraint.priceV2.currencyCode}
        </strong>
      </div>

      <div className="desc">
        <strong>
          <span>Category {productType}</span>
        </strong>
        <p>{description}</p>
      </div>

      <div className="select">
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
      </div>
    </DetailsStyles>
  );
};

export default Details;
