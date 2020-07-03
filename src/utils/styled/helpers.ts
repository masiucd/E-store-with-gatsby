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

export { handleObj, removeDuplicates };
