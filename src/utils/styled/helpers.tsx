import { css } from 'styled-components';
function handleObj(arr: Array<string>) {
  type Map = { [index: string]: number };

  return arr.reduce((obj: Map, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});
}

interface Node<T> {
  node: {
    shopifyId?: string;
    title?: string;
    handle: string;
    productType?: string;
    priceRange?: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images?: Array<T>;
  };
}

function removeDuplicates<T>(edges: Array<Node<T>>) {
  let xs = edges.map(x => x.node.productType);
  return xs.filter((item, index) => xs.indexOf(item) === index);
}

interface FormError {
  cardNumberErrors?: string;

  cardNameErrors?: string;

  monthError?: string;

  dayError?: string;

  cvvError?: string;
}

const handleErrorUi = (values: FormError) => {
  if (
    values.cardNameErrors ||
    values.cardNumberErrors ||
    values.cvvError ||
    values.monthError ||
    values.dayError
  ) {
    return css`
      border-radius: 1rem;
      color: rgba(255, 82, 82, 0.8);
      box-shadow: 5px 5px 5px rgba(255, 82, 82, 0.4);
    `;
  } else {
    css`
      border-radius: 1rem;
      color: rgba(124, 179, 66, 0.6);
      box-shadow: 5px 5px 5px rgba(124, 179, 66, 0.4);
    `;
  }
  return null;
};

export { handleObj, removeDuplicates, handleErrorUi };
