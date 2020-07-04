import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { ProductStyles, ProductStylesBody, ContentHide } from './ProductStyles';
import { MyLink, BtnPrimary } from '../styled/Buttons';
import { useSpring } from 'react-spring';
import useToggle from '../../hooks/useToggle';

interface SelectOption {
  name: string;
  value: string;
}
interface Variant {
  price: string;
  image: {
    id: string;
    localFile: {
      childImageSharp: {
        fluid: IFluidObject | any;
      };
    };
  };
  requiresShipping: boolean;
  selectedOptions: Array<SelectOption>;
  weight: number;
}
interface Node {
  shopifyId: string;
  title: string;
  description: string;
  tags: string[];
  variants: Array<Variant>;
}

interface IProductTypeItemProps {
  data: Node;
  onHandle: string;
}

export default function ProductTypeItem(props: IProductTypeItemProps) {
  const { data, onHandle } = props;
  const [show, toggleShow] = useToggle(false);

  const animatedProps = useSpring({
    opacity: show ? 1 : 0,
  });

  return (
    <ProductStyles onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
      <Img fluid={data.variants[0].image.localFile.childImageSharp.fluid} />
      <ProductStylesBody>
        <h3>
          {data.title} <span>{data.variants[0].price} SEK</span>{' '}
        </h3>
        <p>
          Free Shipment:{' '}
          <span className={data.variants[0].requiresShipping ? 'yes' : 'no'}>
            {data.variants[0].requiresShipping ? 'Yes' : 'No'}
          </span>
        </p>
        <p>
          Weight: <span>{data.variants[0].weight}</span>
        </p>
      </ProductStylesBody>
      <ContentHide onShow={show} style={animatedProps}>
        <MyLink to={`/products/${onHandle}`}>info</MyLink>
      </ContentHide>
    </ProductStyles>
  );
}
