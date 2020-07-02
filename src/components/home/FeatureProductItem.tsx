import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import { StyledItem, BodyContent } from './FeautureStyles';
import { MyLink } from '../styled/Buttons';

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

interface Props {
  productData: {
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
  };
}

const FeatureProductItem: React.FC<Props> = ({ productData }) => {
  const {
    images,
    title,
    handle,
    id,
    priceRange: {
      maxVariantPrice: { amount, currencyCode },
    },
  } = productData;

  return (
    <StyledItem>
      <Img fixed={images[0].localFile.childImageSharp.fixed} alt={title} />
      <BodyContent>
        <h4>{title}</h4>
        <span>
          From - {amount} {currencyCode}
        </span>
        <MyLink to={`/products/${handle}`}>product</MyLink>
      </BodyContent>
    </StyledItem>
  );
};

export default FeatureProductItem;
