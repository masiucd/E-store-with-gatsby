import * as React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import NavList from './NavList';
import useToggle from '../../../hooks/useToggle';
import Img from 'gatsby-image';
import { IFixedObject } from 'gatsby-background-image';
import { handleFlex } from '../../../utils/styled/flex';
import Search from './Search';
import { below, above } from '../../../utils/styled/media';
import { countCartItems } from '../../../context/cart/utils';
import {
  useCartState,
  useCartDispatch,
} from '../../../context/cart/CartProvider';
import CartDropDown from '../../cart/CartDropDown';
import { Icons } from './NavStyles';
interface Props {
  className: string;
}

interface Path {
  text: string;
  path: string;
}
interface IconNode {
  node: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}
interface NavQuery {
  site: {
    siteMetadata: {
      title: string;
      paths: Path[];
    };
  };
  navIcons: {
    edges: Array<IconNode>;
  };
  mainLogo: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

const Nav: React.FC<Props> = ({ className }) => {
  const {
    site: {
      siteMetadata: { title, paths },
    },
    navIcons,
    mainLogo,
  } = useStaticQuery<NavQuery>(NAV_QUERY);
  const [on, toggle] = useToggle(false);
  const [a, b, c] = navIcons.edges;
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  return (
    <nav className={className}>
      <div className="title">
        <h3>
          <Link to="/">{title}</Link>{' '}
        </h3>
      </div>

      <div id="navToggle" onClick={toggle}>
        <Img fixed={b.node.childImageSharp.fixed} />
      </div>

      <Search type="text" placeholder="Search product" />
      <NavList on={on} onPaths={paths} onTitle={title} onToggle={toggle} />

      <Icons>
        <div className="col">
          <Img fixed={c.node.childImageSharp.fixed} />
        </div>

        <div className="col" onClick={() => dispatch({ type: 'IS_OPEN' })}>
          <Img fixed={a.node.childImageSharp.fixed} />
          <span id="cart-amount">{countCartItems(cart)}</span>
        </div>
      </Icons>

      <CartDropDown />
    </nav>
  );
};

export default styled(Nav)`
  padding: 1rem;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};
  position: fixed;
  width: 100%;
  top: 0;
  height: 12rem;
  ${handleFlex('row', 'space-around', 'center')};
  z-index: 100;
  .title {
    width: 30%;
    font-family: 'Montserrat Alternates', sans-serif;
    text-transform: capitalize;
    padding: 1.5rem 0.5rem;
    h3 {
      position: relative;
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.secondary};
      a {
        color: ${({ theme: { colors } }) => colors.text};
        font-size: 3rem;
      }
    }
    ${below.medium`
        display: none;
    `}

    ${below.small`
      display: none;
    `}
  }

  #navToggle {
    position: fixed;
    top: 0.5rem;
    left: 2rem;
    cursor: pointer;
    z-index: 100;
  }
  ${below.small`

    ${handleFlex('column-reverse', 'center', 'center')}
  `}
`;

const NAV_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        paths {
          text
          path
        }
      }
    }
    navIcons: allFile(filter: { relativeDirectory: { eq: "navicons" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    mainLogo: file(relativeDirectory: { eq: "main_logo" }) {
      name
      childImageSharp {
        fixed(width: 35, height: 35) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;
