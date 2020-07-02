import * as React from 'react';
import FilterBar from './FilterBar';
import ProductCategory from './ProductCategory';
import { GridProducts } from './ProductStyles';
import { IFluidObject } from 'gatsby-background-image';
import {
  useProductState,
  useProductDispatch,
} from '../../context/product/ProductProvider';

interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

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

export interface IProductGridProps {
  onEdges: Node[];
}

export default function ProductGrid({ onEdges }: IProductGridProps) {
  const { productType, products } = useProductState();
  const dispatch = useProductDispatch();
  // test for render right item
  const filterProductByCategory = () => {
    let filteredProducts = onEdges.filter(
      x => x.node.productType === productType
    );
    return filteredProducts;
  };

  React.useEffect(() => {
    if (filterProductByCategory) {
      dispatch({ type: 'SET_PRODUCTS', payload: filterProductByCategory() });
    }
  }, [productType]);

  return (
    <>
      <FilterBar className="filterBar" onEdges={onEdges} />
      <GridProducts>
        {products.length > 0
          ? products.map(({ node }) => (
              <ProductCategory
                key={node.handle}
                onData={node}
                className={node.title}
              />
            ))
          : onEdges.map(({ node }) => (
              <ProductCategory
                key={node.handle}
                onData={node}
                className={node.title}
              />
            ))}
      </GridProducts>
    </>
  );
}
