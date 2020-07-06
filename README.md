# Gatsby Masiu's Fits 🤟🏻🛒🛍

### E shop using Gatsby and Shopify API

To Check out the Web
[![Netlify Status](https://api.netlify.com/api/v1/badges/d374a159-9ee3-4b02-91a3-ee3053990fcb/deploy-status)](https://marcells-fits.netlify.app/)

This app is not using any finished layout ore template, it is built from scratch. Just using Shopify API end point to store the products.
A example how you can build your own E-commerce application with React and Gatsby js.

``` bash
  git clone Project
```

``` bash
  cd into project
```

``` bash
  yarn/nm install
```

### Tools 🛠

* Gatsby
* Shopify
* Typescript
* React
* Graph QL
* Context API

### Custom hooks that are used ⚙️😎⚛️

 * useToggle
 * useLocalStorage

##### pages/index.tsx

Example of how to use Typescript together with Graphql in Gatsby

``` jsx
import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';

import Layout, { Page } from '../components/layout';
import Seo from '../components/SEO/Seo';
import FeatureProducts from '../components/home/FeatureProducts';
import Hero from '../components/elements/Hero';
import Title from '../components/elements/Title';
interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject,
    },
  };
}

interface Price {
  price: string;
}
interface Product {
  id: string;
  title: string;
  description: string;
  variants: Array<Price>;
  publishedAt: string;
  images: Array<ImgData>;
}
interface Node {
  node: Product;
}

interface Props {
  site: {
    siteMetadata: {
      title: string,
    },
  };
  products: {
    edges: Node[],
  };
}

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const {
    products: { edges },
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout>
      <Seo title="Masiu's fits" description="Home page" />
      <Hero className="Main hero" isLarge>
        <Title className="Home__Title" mainTitle={title} />
      </Hero>
      <Page>
        {edges.map(({ node }) => (
          <FeatureProducts key={node.id} data={node} />
        ))}
      </Page>
    </Layout>
  );
};

export const PAGE_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    products: allShopifyProduct(limit: 3) {
      edges {
        node {
          id
          title
          description
          variants {
            price
          }
          publishedAt(formatString: "YYYY do, MMMM")
          images {
            id
            localFile {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
```

useForm HOOK 🚀

``` typescript
  import * as React from 'react';

interface ErrorOreSuccess {
  cardNumberErrors?: string;
  cardNameErrors?: string;
  monthError?: string;
  dayError?: string;
  cvvError?: string;
}

// handle = callBack function
function useForm<T>(handle: Function, validate: Function, formValues: T) {
  const [formData, setFormData] = React.useState<T>(formValues);

  const [formErrors, setFormErrors] = React.useState<ErrorOreSuccess>({});
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData, [name]: value ? value : e.target.checked });
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    // if (
    //   !formErrors['cardNameErrors'] &&
    //   !formErrors['cardNumberErrors'] &&
    //   !formErrors['cvvError'] &&
    //   !formErrors['dayError'] &&
    //   !formErrors['monthError']
    // ) {
    //   setFormErrors({});
    //   handle();
    //   setFormData(formData);
    // }

    console.log(formErrors);

    if (Object.values(formErrors).length === 0 && isSubmitting) {
      handle();

      setFormData(formData);
    }
  }, [formErrors]);

  return {
    handleChange,
    handleChecked,
    formErrors,
    formData,
    handleSubmit,
  };
}

export default useForm;

```

useLocalStorage HOOK 🚀

``` typescript
import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue

      console.log(error);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...

  // ... persists the new value to localStorage.

  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state

      setStoredValue(valueToStore);

      // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case

      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
```
